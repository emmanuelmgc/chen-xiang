
        
export interface B2BValuePropModel {
  iconName: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
}

export interface B2BUseCaseModel {
  id: string;
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  imageUrl: string;
}

export interface B2BServicePackageModel {
  id: string;
  name_ar: string;
  name_en: string;
  deliverables_ar: string[];
  deliverables_en: string[];
}

export interface B2BFormFieldModel {
  id: string;
  label_ar: string;
  label_en: string;
  type: 'text' | 'email' | 'tel' | 'number_range' | 'textarea' | 'select' | 'checkbox';
  required: boolean;
  placeholder_ar?: string;
  placeholder_en?: string;
  options?: { value: string; label_ar: string; label_en: string }[];
}

export const B2B_HERO_CONTENT = {
  heroImage: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/42bf18d9-d5f1-42c4-81e7-4020e344563c.png",
  title_ar: "NAFHA للأعمال: ارتقاء تجربة الضيافة",
  title_en: "NAFHA for Business: Elevating the Hospitality Experience",
  subtitle_ar: "حلول عود مخصصة للفنادق الفاخرة، والمنتجعات الصحية، والفعاليات الخاصة.",
  subtitle_en: "Tailored Oud solutions for luxury hotels, wellness centers, and private events.",
};

export const B2B_VALUE_PROPS: B2BValuePropModel[] = [
  {
    iconName: "DoorOpen",
    title_ar: "بصمة عطر ترحيبية",
    title_en: "Signature Welcome Scent",
    description_ar: "ابتكر رائحة فريدة لمدخل فندقك أو ناديك الرياضي لترك انطباع لا ينسى.",
    description_en: "Create a unique aroma for your hotel entrance or spa to leave an unforgettable impression.",
  },
  {
    iconName: "Bed",
    title_ar: "تجربة الغرف الممتازة",
    title_en: "Premium Guest Room Experience",
    description_ar: "نقدم أعواد بخور منخفضة الدخان آمنة وسهلة الاستخدام، مثالية لرفاهية الضيوف في الغرف المغلقة.",
    description_en: "Provide safe, easy-to-use low-smoke incense sticks perfect for guest amenities in enclosed rooms.",
  },
  {
    iconName: "Gift",
    title_ar: "هدايا ومناسبات خاصة",
    title_en: "Corporate Gifting & Events",
    description_ar: "تخصيص مجموعات هدايا فاخرة لحفلات الزفاف، المؤتمرات، وتوزيعات العيد.",
    description_en: "Customizing luxury gift sets for weddings, conferences, and Eid handouts.",
  },
];

export const B2B_USE_CASES: B2BUseCaseModel[] = [
  {
    id: "lobby",
    title_ar: "ردهات الاستقبال (اللوبي)",
    title_en: "Lobby & Reception Areas",
    description_ar: "توفير بخور عالي الجودة يدوم طويلاً، لتعزيز أجواء الأناقة والترحيب في المساحات الواسعة.",
    description_en: "Providing high-quality, long-lasting bakhoor to enhance the atmosphere of elegance and welcome in large spaces.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/485f39dc-8e62-46b7-9edd-2c6497e5b407.png",
  },
  {
    id: "majlis",
    title_ar: "المجالس وغرف VIP",
    title_en: "Majlis and VIP Rooms",
    description_ar: "استخدام رقائق عود مختارة بعناية وطقوس تقديم راقية لأهم ضيوفك.",
    description_en: "Utilizing carefully selected oud chips and refined service rituals for your most important guests.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/deb2746a-df53-4aed-8b6a-6f401bb494f1.png",
  },
  {
    id: "guest_rooms",
    title_ar: "أجنحة الإقامة الفاخرة",
    title_en: "Luxury Guest Suites",
    description_ar: "إدخال أعواد البخور منخفضة الدخان كجزء من روتين الاسترخاء المسائي للنزلاء.",
    description_en: "Incorporating low-smoke incense sticks as part of the evening relaxation ritual for guests.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/0fa14d26-ecf0-4d71-a300-33e5cbe494e9.png",
  },
  {
    id: "wedding_gifting",
    title_ar: "توزيعات حفلات الزفاف",
    title_en: "Wedding Gifting Favors",
    description_ar: "تصميم مجموعات إهداء مخصصة للضيوف تحمل توقيع الحدث لترك ذكرى جميلة.",
    description_en: "Designing custom gift sets for wedding guests that carry the event's signature, leaving a beautiful memory.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/38977709-8a6e-4e4c-805f-a403d1283187.png",
  },
];

export const B2B_SERVICE_PACKAGES: B2BServicePackageModel[] = [
  {
    id: "basic",
    name_ar: "الباقة الأساسية",
    name_en: "Essentials Package",
    deliverables_ar: ["الوصول إلى قائمة الأسعار الخاصة بالجملة", "استشارة مجانية أولية", "تسليم دفعة واحدة"],
    deliverables_en: ["Access to wholesale pricing list", "Initial free consultation", "Single batch delivery"],
  },
  {
    id: "standard",
    name_ar: "باقة الحلول القياسية",
    name_en: "Standard Solutions Package",
    deliverables_ar: ["كل ما في الباقة الأساسية", "تخصيص خيارات التغليف", "خدمات إعادة التعبئة الدورية", "تقرير استخدام المنتج شهرياً"],
    deliverables_en: ["All Essentials features", "Custom packaging options", "Periodic replenishment services", "Monthly product usage report"],
  },
  {
    id: "tailored",
    name_ar: "الباقة المصممة خصيصاً",
    name_en: "Fully Tailored Package",
    deliverables_ar: ["كل ما في الباقة القياسية", "تطوير طيف عطري حصري (Signature Scent)", "حلول اللوغو والتسمية على المنتج (OEM)", "دعم متخصص للمناسبات الكبرى"],
    deliverables_en: ["All Standard features", "Exclusive Signature Scent development", "Product logo and labeling solutions (OEM)", "Dedicated support for major events"],
  },
];

export const B2B_FORM_FIELDS: B2BFormFieldModel[] = [
  { id: "company_name", label_ar: "اسم الشركة/الفندق*", label_en: "Company/Hotel Name*", type: 'text', required: true, placeholder_ar: "اسم الفندق", placeholder_en: "Hotel Name" },
  { id: "contact_person", label_ar: "اسم مسؤول التواصل*", label_en: "Contact Person Name*", type: 'text', required: true, placeholder_ar: "خالد العلي", placeholder_en: "Khalid Alali" },
  { id: "city", label_ar: "المدينة*", label_en: "City*", type: 'text', required: true, placeholder_ar: "الرياض/جدة/دبي", placeholder_en: "Riyadh/Jeddah/Dubai" },
  { id: "whatsapp", label_ar: "رقم الـ WhatsApp*", label_en: "WhatsApp Number*", type: 'tel', required: true, placeholder_ar: "+966XXXXXXXXX", placeholder_en: "+966XXXXXXXXX" },
  { id: "email", label_ar: "البريد الإلكتروني", label_en: "Email", type: 'email', required: false, placeholder_ar: "info@company.com", placeholder_en: "info@company.com" },
  {
    id: "volume_range",
    label_ar: "نطاق الكمية المتوقعة (للدفعة الواحدة)*",
    label_en: "Estimated Volume Range (per batch)*",
    type: 'select',
    required: true,
    options: [
      { value: "1_10k", label_ar: "1,000 - 10,000 SAR", label_en: "1,000 - 10,000 SAR" },
      { value: "10_50k", label_ar: "10,000 - 50,000 SAR", label_en: "10,000 - 50,000 SAR" },
      { value: "50k_plus", label_ar: "أكثر من 50,000 SAR", label_en: "Over 50,000 SAR" },
    ],
  },
  {
    id: "interested_category",
    label_ar: "فئات المنتجات المهتم بها*",
    label_en: "Interested Product Categories*",
    type: 'checkbox',
    required: true,
    options: [
      { value: "incense_sticks", label_ar: "أعواد البخور", label_en: "Incense Sticks" },
      { value: "bakhoor", label_ar: "بخور ورقائق العود", label_en: "Bakhoor & Oud Chips" },
      { value: "mabkhara", label_ar: "مباخر وملحقات", label_en: "Mabkhara & Accessories" },
      { value: "gift_sets", label_ar: "مجموعات الهدايا", label_en: "Gift Sets" },
    ],
  },
  { id: "custom_notes", label_ar: "ملاحظات إضافية (تخصيص، موعد تسليم)", label_en: "Additional Notes (Customization, Delivery Deadline)", type: 'textarea', required: false },
];
        
      