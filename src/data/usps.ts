
        
export interface USPModel {
  id: string;
  iconName: string;
  title_ar: string;
  title_en: string;
}

export const GLOBAL_TRUST_USPS: USPModel[] = [
  {
    id: "low_smoke",
    iconName: "CloudOff",
    title_ar: "دخان منخفض",
    title_en: "Low Smoke Formula",
  },
  {
    id: "traceable",
    iconName: "ScanSearch",
    title_ar: "مصدر قابل للتتبع",
    title_en: "Traceable Sourcing",
  },
  // Note: Replacing 7-day return and secure pay (ecommerce terms) with brand-focused values
  {
    id: "safety_guide",
    iconName: "HeartHandshake",
    title_ar: "استخدام آمن",
    title_en: "Safety Guidelines Included",
  },
  {
    id: "whatsapp_support",
    iconName: "MessageCircle",
    title_ar: "استفسار عبر واتساب",
    title_en: "WhatsApp Inquiry",
  },
  {
    id: "satisfaction",
    iconName: "ShieldCheck",
    title_ar: "ضمان الجودة",
    title_en: "Quality Assurance",
  },
];
        
      