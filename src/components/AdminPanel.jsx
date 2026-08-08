import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LogOut, Save, X, Edit2, Loader2, AlertCircle, CheckCircle2, RefreshCw } from 'lucide-react';
import { collection, getDocs, doc, updateDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';
import { signOut } from 'firebase/auth';
import defaultSubsidiaries from '../data/subsidiaries';

function AdminPanel({ onLogout, subsidiaries, setSubsidiaries }) {
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [isSyncing, setIsSyncing] = useState(false);
  const [saveStatus, setSaveStatus] = useState({ type: '', message: '' });

  const handleLogout = async () => {
    try {
      await signOut(auth);
      onLogout();
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  const startEditing = (sub) => {
    setEditingId(sub.id);
    setFormData({
      name: sub.name,
      tagline: sub.tagline,
      summary: sub.summary,
      url: sub.url,
      sector: sub.sector,
    });
    setSaveStatus({ type: '', message: '' });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setFormData({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveStatus({ type: '', message: '' });

    try {
      const docRef = doc(db, "subsidiaries", editingId);
      await updateDoc(docRef, formData);

      // Update local state
      setSubsidiaries(prev => 
        prev.map(sub => sub.id === editingId ? { ...sub, ...formData } : sub)
      );

      setSaveStatus({ type: 'success', message: 'Changes saved successfully!' });
      setTimeout(() => {
        setEditingId(null);
        setSaveStatus({ type: '', message: '' });
      }, 2000);
    } catch (error) {
      console.error("Error updating document: ", error);
      setSaveStatus({ type: 'error', message: error.message || 'Failed to save changes.' });
    } finally {
      setIsSaving(false);
    }
  };

  const handleSyncBrandbook = async () => {
    if (!window.confirm("Are you sure? This will overwrite your live database with the official brandbook data.")) return;
    setIsSyncing(true);
    try {
      const seedPromises = defaultSubsidiaries.map((sub) => 
        setDoc(doc(db, "subsidiaries", sub.id), sub)
      );
      await Promise.all(seedPromises);
      setSubsidiaries(defaultSubsidiaries);
      alert("Database successfully synced with official brandbook data!");
    } catch (error) {
      console.error("Error syncing:", error);
      alert("Failed to sync database.");
    } finally {
      setIsSyncing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0B0F1A] py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 bg-white dark:bg-[#151B2B] p-6 rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 gap-4">
          <div>
            <h1 className="text-2xl font-bold text-livenza-primary dark:text-white">Content Management</h1>
            <p className="text-sm text-livenza-sub dark:text-white/60 mt-1">Edit subsidiary details directly on the live site.</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={handleSyncBrandbook}
              disabled={isSyncing}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-livenza-primary bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${isSyncing ? 'animate-spin' : ''}`} />
              <span className="hidden sm:inline">Sync Brandbook</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span className="hidden sm:inline">Sign Out</span>
            </button>
          </div>
        </div>

        {/* Content List */}
        <div className="space-y-4">
          {subsidiaries.map((sub) => (
            <motion.div 
              key={sub.id}
              layout
              className="bg-white dark:bg-[#151B2B] rounded-2xl shadow-sm border border-gray-100 dark:border-white/10 overflow-hidden"
            >
              {editingId === sub.id ? (
                /* Edit Form */
                <form onSubmit={handleSave} className="p-6">
                  <div className="flex items-center justify-between mb-6 border-b border-gray-100 dark:border-white/10 pb-4">
                    <h3 className="text-lg font-semibold text-livenza-primary dark:text-white flex items-center gap-2">
                      <Edit2 className="w-5 h-5 text-livenza-sub" />
                      Editing: {sub.name}
                    </h3>
                    <button
                      type="button"
                      onClick={cancelEditing}
                      className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-white transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {saveStatus.message && (
                    <div className={`mb-6 p-4 rounded-lg flex items-start gap-3 ${
                      saveStatus.type === 'success' 
                        ? 'bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-900/50' 
                        : 'bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50'
                    }`}>
                      {saveStatus.type === 'success' ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      )}
                      <p className={`text-sm ${
                        saveStatus.type === 'success' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
                      }`}>{saveStatus.message}</p>
                    </div>
                  )}

                  <div className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-livenza-primary dark:text-gray-300 mb-2">Company Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name || ''}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-livenza-primary focus:border-transparent outline-none dark:text-white transition-colors"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-livenza-primary dark:text-gray-300 mb-2">Sector / Category</label>
                        <input
                          type="text"
                          name="sector"
                          value={formData.sector || ''}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-livenza-primary focus:border-transparent outline-none dark:text-white transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-livenza-primary dark:text-gray-300 mb-2">Tagline</label>
                      <input
                        type="text"
                        name="tagline"
                        value={formData.tagline || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-livenza-primary focus:border-transparent outline-none dark:text-white transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-livenza-primary dark:text-gray-300 mb-2">External URL (Website)</label>
                      <input
                        type="url"
                        name="url"
                        value={formData.url || ''}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-livenza-primary focus:border-transparent outline-none dark:text-white transition-colors"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-livenza-primary dark:text-gray-300 mb-2">Summary / Description</label>
                      <textarea
                        name="summary"
                        value={formData.summary || ''}
                        onChange={handleChange}
                        rows="4"
                        className="w-full px-4 py-3 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-xl focus:ring-2 focus:ring-livenza-primary focus:border-transparent outline-none dark:text-white transition-colors resize-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="mt-8 flex justify-end gap-3">
                    <button
                      type="button"
                      onClick={cancelEditing}
                      className="px-5 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 rounded-xl transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSaving}
                      className="flex items-center gap-2 px-6 py-2.5 text-sm font-medium text-white bg-livenza-primary dark:bg-blue-600 hover:bg-livenza-dark dark:hover:bg-blue-700 rounded-xl transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSaving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                      Save Changes
                    </button>
                  </div>
                </form>
              ) : (
                /* Display View */
                <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span 
                        className="w-3 h-3 rounded-full" 
                        style={{ backgroundColor: sub.color }}
                      />
                      <h3 className="text-xl font-bold text-livenza-primary dark:text-white">{sub.name}</h3>
                      <span className="px-2.5 py-1 bg-gray-100 dark:bg-white/10 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-md">
                        {sub.sector}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-800 dark:text-gray-200 mb-2">{sub.tagline}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-2">{sub.summary}</p>
                  </div>
                  
                  <button
                    onClick={() => startEditing(sub)}
                    className="flex-shrink-0 flex items-center justify-center gap-2 w-full md:w-auto px-5 py-2.5 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-livenza-primary dark:text-white font-medium rounded-xl border border-gray-200 dark:border-white/10 transition-colors"
                  >
                    <Edit2 className="w-4 h-4" />
                    Edit Content
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
