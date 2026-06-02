
        
export interface FAQModel {
  id: string;
  question_ar: string;
  question_en: string;
  answer_ar: string;
  answer_en: string;
  category: 'incense' | 'bakhoor' | 'gifting' | 'general';
}

export const MOCK_FAQS: FAQModel[] = [
  {
    id: "incense_1",
    question_ar: "ما الفرق بين الأعواد منخفضة الدخان والأعواد التقليدية؟",
    question_en: "What is the difference between low-smoke and traditional incense sticks?",
    answer_ar: "أعوادنا منخفضة الدخان تستخدم راتنجات نباتية أقل ومواد محروقة بدرجة حرارة منخفضة، مما يقلل من الدخان الكثيف الذي قد يسبب تهيجاً، وتجعلها مناسبة للغرف المكيفة والمساحات الصغيرة.",
    answer_en: "Our low-smoke sticks use less resin and low-temperature charred materials, reducing dense smoke that may cause irritation, making them suitable for air-conditioned rooms and small spaces.",
    category: 'incense',
  },
  {
    id: "incense_2",
    question_ar: "متى تبدأ الأعواد بانبعاث الرائحة الكاملة؟",
    question_en: "When does an incense stick release its full aroma?",
    answer_ar: "بمجرد إطفاء الشعلة وبدء العود بالتدخين، تبدأ الرائحة بالانتشار فوراً. عادةً ما تصل للذروة خلال 5-10 دقائق وتبقى ثابتة حتى نهاية الاحتراق.",
    answer_en: "Once the flame is extinguished and the stick begins to smolder, the aroma starts diffusing immediately. It typically reaches full intensity within 5–10 minutes and remains consistent throughout the rest of the burn.",
    category: 'incense',
  },
  {
    id: "bakhoor_1",
    question_ar: "هل يمكنني استخدام البخور على الفحم العادي؟",
    question_en: "Can I use bakhoor on regular charcoal?",
    answer_ar: "نعم، يمكنك استخدام البخور على الفحم العادي. ولكن نوصي بالمبخرة الكهربائية لدرجة حرارة أكثر ثباتاً ورائحة أنقى وأكمل.",
    answer_en: "Yes, you can use bakhoor on regular charcoal. However, we recommend an electric mabkhara for more consistent heat and a cleaner, fuller aroma.",
    category: 'bakhoor',
  },
  {
    id: "mabkhara_1",
    question_ar: "ما هي طريقة تنظيف المبخرة الكهربائية؟",
    question_en: "What is the best way to clean an electric mabkhara?",
    answer_ar: "تأكد من فصل المبخرة وتبريدها تماماً. استخدم قطعة قماش ناعمة وجافة لإزالة أي بقايا متفحمة. تجنب استخدام الماء أو المنظفات الكيميائية.",
    answer_en: "Ensure the mabkhara is unplugged and completely cool. Use a soft, dry cloth to wipe away any charred residue. Avoid using water or chemical cleaners.",
    category: 'general',
  },
  {
    id: "gifting_1",
    question_ar: "هل تقدمون خدمات التغليف المخصصة لطلبيات الشركات؟",
    question_en: "Do you offer customized packaging services for corporate orders?",
    answer_ar: "نعم، نقدم خيارات تغليف وبطاقات تهنئة مخصصة لطلبيات الهدايا بكميات كبيرة. يرجى التواصل مع فريق المبيعات B2B للحصول على الكتالوج والخيارات الإضافية.",
    answer_en: "Yes, we offer customized packaging and greeting card options for bulk gift orders. Please contact our B2B sales team for our catalog and additional options.",
    category: 'gifting',
  },
];

export const getFaqsByCategory = (category: FAQModel['category'], count?: number): FAQModel[] => {
  const filtered = MOCK_FAQS.filter(faq => faq.category === category);
  return count ? filtered.slice(0, count) : filtered;
}
        
      