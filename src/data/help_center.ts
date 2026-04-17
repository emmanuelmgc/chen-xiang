
        
export interface HelpCategoryModel {
  id: string;
  title_ar: string;
  title_en: string;
  iconName: string;
  articleIds: string[];
}

export interface HelpArticleSummaryModel {
  id: string;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  content_ar: string;
  content_en: string;
  categoryIds: string[];
  url: string;
}

export const HELP_CATEGORIES: HelpCategoryModel[] = [
  { id: "how_to_use", title_ar: "كيفية الاستخدام", title_en: "How to Use", iconName: "Flame", articleIds: ["use_incense_sticks", "use_bakhoor", "clean_mabkhara"] },
  { id: "safety_storage", title_ar: "السلامة والتخزين", title_en: "Safety & Storage", iconName: "Lock", articleIds: ["safety_guide", "storage_tips"] },
  { id: "shipping_delivery", title_ar: "الشحن والتسليم", title_en: "Shipping & Delivery", iconName: "Truck", articleIds: ["shipping_areas", "delivery_timeline"] },
  { id: "authenticity", title_ar: "الأصالة والعود", title_en: "Authenticity", iconName: "ScanSearch", articleIds: ["traceability_process", "identifying_oud_quality"] },
  { id: "inquiry_quotation", title_ar: "الاستفسارات وعروض الأسعار", title_en: "Inquiry & Quotation", iconName: "Mail", articleIds: ["b2c_inquiry_process", "b2b_quotation_process"] },
];

export const HELP_ARTICLES: HelpArticleSummaryModel[] = [
  {
    id: "use_incense_sticks",
    title_ar: "دليل استخدام أعواد البخور منخفضة الدخان",
    title_en: "Guide to Using Low-Smoke Incense Sticks",
    summary_ar: "تعليمات خطوة بخطوة للاستمتاع برائحة نقية بدون دخان كثيف.",
    summary_en: "Step-by-step instructions for enjoying a clean aroma without heavy smoke.",
    content_ar: "تفاصيل طريقة الإشعال الصحيحة، والمباخر الموصى بها، وطرق تحقيق أقصى استفادة من مدة الاحتراق الطويلة.",
    content_en: "Details on correct lighting methods, recommended mabkharas, and how to maximize the long burn time.",
    categoryIds: ["how_to_use"],
    url: "./help-center.html?article=use_incense_sticks",
  },
  {
    id: "use_bakhoor",
    title_ar: "كيفية حرق رقائق البخور على المبخرة الكهربائية",
    title_en: "How to Burn Bakhoor Chips on an Electric Mabkhara",
    summary_ar: "الحصول على أفضل رائحة من بخور العود باستخدام الحرارة الثابتة للمباخر الكهربائية.",
    summary_en: "Achieving the best aroma from oud bakhoor using the consistent heat of electric burners.",
    content_ar: "إرشادات استخدام المبخرة الكهربائية لضمان تسخين العود بشكل متساوٍ وتجنب الاحتراق السريع أو الروائح المحروقة.",
    content_en: "Guidelines for using the electric mabkhara to ensure even heating of the oud and avoid fast burning or smoky odors.",
    categoryIds: ["how_to_use"],
    url: "./help-center.html?article=use_bakhoor",
  },
  {
    id: "safety_guide",
    title_ar: "إرشادات السلامة الأساسية للمباخر والبخور",
    title_en: "Essential Safety Guidelines for Incense and Mabkhara",
    summary_ar: "تعليمات مهمة للتهوية والتخزين لتجربة عطرية آمنة.",
    summary_en: "Important instructions on ventilation and storage for a safe fragrant experience.",
    content_ar: "إعادة تأكيد على ضرورة التهوية الجيدة، وضرورة الإشراف، والاحتياطات ضد الحرائق والمواد القابلة للاشتعال. (راجع إشعار سلامة المنتج الرسمي للمزيد).",
    content_en: "Reiteration of the need for good ventilation, supervision, and precautions against fire and flammable materials. (Refer to the official Product Safety Notice for more).",
    categoryIds: ["safety_storage"],
    url: "./help-center.html?article=safety_guide",
  },
  {
    id: "b2c_inquiry_process",
    title_ar: "كيفية طلب عرض سعر أو الاستفسار عن منتج فردي",
    title_en: "How to Request a Quote or Inquire about an Individual Product (B2C)",
    summary_ar: "شرح عملية الاستفسار عبر واتساب أو نموذج الاتصال لطلبات الأفراد.",
    summary_en: "Explanation of the inquiry process via WhatsApp or the contact form for individual orders.",
    content_ar: "يتم توجيه الاستفسارات مباشرة إلى فريق المبيعات عبر الواتساب (رقم ${CONTACT_INFO.whatsappNumber})، حيث يمكنك تحديد المنتج والمدينة والكمية المتوقعة لبدء عملية الشراء التي تتم خارج الموقع.",
    content_en: "Inquiries are directed straight to the sales team via WhatsApp (number ${CONTACT_INFO.whatsappNumber}), where you can specify the product, city, and expected quantity to start the off-site purchase process.",
    categoryIds: ["inquiry_quotation"],
    url: "./help-center.html?article=b2c_inquiry_process",
  },
  {
    id: "b2b_quotation_process",
    title_ar: "عملية طلب كتالوج وعرض سعر للشركات (B2B)",
    title_en: "B2B Catalog and Quotation Request Process",
    summary_ar: "خطوات تقديم طلبات الجملة للفنادق والشركات عبر النماذج المخصصة.",
    summary_en: "Steps for submitting bulk orders for hotels and businesses via dedicated forms.",
    content_ar: "يجب ملء النموذج الموجود في صفحة 'الأعمال'. سيقوم فريق المبيعات B2B بالرد في غضون يوم عمل واحد عبر الواتساب لتقديم الكتالوج الكامل والبدء في تحديد خيارات التخصيص.",
    content_en: "You must fill out the form on the 'B2B: Hotels & Venues' page. The B2B sales team will respond within one business day via WhatsApp to provide the full catalog and begin customizing options.",
    categoryIds: ["inquiry_quotation"],
    url: "./help-center.html?article=b2b_quotation_process",
  },
];

export const getArticleBySlug = (id: string): HelpArticleSummaryModel | undefined => {
  return HELP_ARTICLES.find(a => a.id === id);
}
        
      