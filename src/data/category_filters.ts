
        
export interface FilterOptionModel {
  id: string;
  label_ar: string;
  label_en: string;
}

export interface FilterGroupModel {
  id: string;
  label_ar: string;
  label_en: string;
  options: FilterOptionModel[];
  type: 'checkbox' | 'range' | 'radio';
}

export interface SortOptionModel {
  id: string;
  label_ar: string;
  label_en: string;
}

export const PRODUCT_FILTERS: FilterGroupModel[] = [
  {
    id: "aroma_profile",
    label_ar: "ملف العطر (رائحة)",
    label_en: "Aroma Profile",
    type: 'checkbox',
    options: [
      { id: "sandalwood", label_ar: "صندل", label_en: "Sandalwood" },
      { id: "floral", label_ar: "زهري", label_en: "Floral" },
      { id: "spicy", label_ar: "توابل", label_en: "Spicy" },
      { id: "classic_oud", label_ar: "عود كلاسيكي", label_en: "Classic Oud" },
    ],
  },
  {
    id: "smoke_level",
    label_ar: "مستوى الدخان",
    label_en: "Smoke Level",
    type: 'radio',
    options: [
      { id: "low_smoke", label_ar: "دخان منخفض", label_en: "Low Smoke" },
      { id: "traditional", label_ar: "تقليدي", label_en: "Traditional" },
    ],
  },
  {
    id: "scene",
    label_ar: "مناسبة الاستخدام",
    label_en: "Scene/Occasion",
    type: 'checkbox',
    options: [
      { id: "daily", label_ar: "للاستخدام اليومي", label_en: "Daily Use" },
      { id: "majlis", label_ar: "مجلس وضيافة", label_en: "Majlis & Entertaining" },
      { id: "office", label_ar: "المكتب والمساحات الصغيرة", label_en: "Office & Small Spaces" },
      { id: "gifts", label_ar: "هدايا واحتفالات", label_en: "Gifts & Celebrations" },
    ],
  },
  {
    id: "price_range",
    label_ar: "نطاق السعر (SAR)",
    label_en: "Price Range (SAR)",
    type: 'range',
    options: [
      { id: "min", label_ar: "من 50", label_en: "Min 50" },
      { id: "max", label_ar: "إلى 1000+", label_en: "Max 1000+" },
    ],
  },
];

export const PRODUCT_SORT_OPTIONS: SortOptionModel[] = [
  { id: "featured", label_ar: "المُميّز", label_en: "Featured" },
  { id: "new_arrivals", label_ar: "وصل حديثاً", label_en: "New Arrivals" },
  { id: "price_asc", label_ar: "السعر: من الأدنى للأعلى", label_en: "Price: Low to High" },
  { id: "price_desc", label_ar: "السعر: من الأعلى للأدنى", label_en: "Price: High to Low" },
];
        
      