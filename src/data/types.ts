export type SlideData = {
  imageUrl: string;
  topText?: string;
  title?: string;
  subtitle?: string;
  stats?: { value: string; label: string }[];
};

export type PlanItem = {
  title: string;
  shortText: string;
  fullText: string;
  bulletPoints?: string[];
  imageUrl: string;
};

export type LanguageData = {
  title: string;
  subtitle: string;
  description: string[];
  slides?: SlideData[];
  plansData?: PlanItem[];
  alternatingList?: { title: string; text: string; imageUrl: string }[];
  featureGrid?: { title: string; text: string; imageUrl: string }[];
  panelBackground?: string;
  menuItems?: { 
    title: string; 
    subItems?: string[]; 
    images?: string[];
    dishes?: { name: string; price: string }[];
    sections?: { dishes: { name: string; price: string }[]; images: string[] }[];
  }[];
  secondaryGrid?: string[];
  layoutType?: 'standard' | 'smallCarousel' | 'multiSlide' | 'plansGrid' | 'alternatingList' | 'featureGrid' | 'contactForm' | 'menuList';
};

export type SectionTranslations = {
  id: string; // The button ID (or 'default' for no selection)
  btnLabel: { en: string; ru: string; am: string }; // Label for the sidebar
  content: {
    en: LanguageData;
    ru: LanguageData;
    am: LanguageData;
  };
};
