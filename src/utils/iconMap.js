import { Zap, Package, Sun, Globe, ShoppingBag, Briefcase, Activity, Code, Factory } from 'lucide-react';

export const IconMap = {
  Zap,
  Package,
  Sun,
  Globe,
  ShoppingBag,
  Briefcase,
  Activity,
  Code,
  Factory
};

export const getIcon = (iconName) => {
  return IconMap[iconName] || Briefcase; // Fallback to Briefcase
};
