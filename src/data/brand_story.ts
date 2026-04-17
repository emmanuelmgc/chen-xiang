
        
export interface BrandValueModel {
  title_ar: string;
  title_en: string;
  description_ar: string;
  description_en: string;
  iconName: string;
}

export interface StoryProcessStepModel {
  step: number;
  title_ar: string;
  title_en: string;
  summary_ar: string;
  summary_en: string;
  imageUrl: string;
}

export const BRAND_STORY_CONTENT = {
  shortClaim_ar: "نفحة تليق بالضيافة",
  shortClaim_en: "A clean ritual of Oud.",
  
  brandPrinciple_ar: "NAFHA: تحويل العود إلى طقس ضيافة خفيف، أنظف، وأكثر ملاءمة للحياة المعاصرة.",
  brandPrinciple_en: "NAFHA: Transforming Oud into a lighter, cleaner, modern ritual of hospitality.",

  longStory_ar: "في كثير من الأماكن، يعتبر العطر مجرد منتج؛ ولكن في الخليج، هو لغة – للترحيب، والتجمع، والاحتفال، والدعاء، والوداع. نحن نتفهم هذه اللغة ونحترم إيقاعها. نقطة انطلاق NAFHA جاءت من زراعة العود: فالعود ليس عطراً سريع التحضير، بل هو تراكم للوقت. لقد رأينا الشجرة تنمو ببطء في المواسم، ونعلم أن كل دفعة من المواد الخام تحمل اختلافات دقيقة بسبب المناخ والحرفة. لهذا السبب، نؤمن بقوة 'الإتقان الرصين': لا يجب أن تكون الرائحة قوية لدرجة الإزعاج، ولا يجب أن يكون الدخان ثقيلاً لدرجة التهيج. المهم هو أن يجعل المكان أكثر تهذيباً وأكثر جاذبية للبقاء.ركزنا في المرحلة الأولى على منتجين الأكثر ملاءمة للحياة اليومية الخليجية والأكثر قدرة على إظهار اختلافنا: أعواد البخور منخفضة الدخان (للوفود، والمساحات الصغيرة، والمكاتب، والفنادق) وبخور رقائق العود (للضيافة التقليدية والتجمعات العائلية). نستخدم تركيبة عطرية أكثر وضوحاً، وشكلاً يناسب المبخرة الكهربائية، وإجراءات تشغيل قياسية سهلة الاستخدام، لنجعل 'استخدام العود' أمراً بسيطاً وأنيقاً. NAFHA لا تقدم ادعاءات طبية مبالغ فيها، بل نعد بتجربة حقيقية: احتراق نظيف، طبقات عطرية واضحة، دفعات ثابتة، بطاقات تعريف واضحة، واحترام للطقوس. لأن العلامة التجارية التي تدوم حقاً لا تأتي من شعار، بل تأتي من احترام 'الشخص والمكان والتراث' في كل مرة يُفتح فيها صندوق الهدية ويُشعل فيها البخور.",
  longStory_en: "In many places, fragrance is just a product; but in the Gulf, it is a language—for welcoming, gathering, celebration, prayer, and farewell. We understand this language and respect its rhythm. The starting point of NAFHA came from Oud cultivation: Oud is not a fast fragrance, but an accumulation of time. We have seen the tree grow slowly through the seasons, and we know that every batch of raw materials carries subtle differences due to climate and craftsmanship. For this reason, we strongly believe in 'Restrained Excellence': the scent does not need to be overwhelming, and the smoke does not need to be irritatingly heavy. What matters is making the space more hospitable and inviting to linger. In the first phase, we focused on two products most suitable for daily Gulf life and best able to show our difference: Low-Smoke Incense Sticks (for visitors, small spaces, offices, and hotels) and Bakhoor Oud Chips (for traditional hospitality and family gatherings). We use clearer aromatic expressions, forms suited for electric Mabkhara, and user-friendly SOPs, making the 'use of Oud' simple yet elegant. NAFHA makes no exaggerated medical claims; we promise a genuine experience: clean burning, clear aromatic layers, consistent batches, transparent labeling, and respect for ritual. Because a truly lasting brand comes not from a slogan, but from respecting 'the person, the place, and the heritage' every time a gift box is opened and the incense is lit.",

  sourcingMapImage: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/61cb9a64-f0c4-4a97-9874-c5d83f48d4bf.png",
  sourcingDescription_ar: "نحن نستخدم مواد خام من مناطق رئيسية مثل: العود الكينام المحلي، وغابات هاينان وفيتنام وقوانغشي. يتم تخمير المواد لمدة تزيد عن ثلاث سنوات لضمان الجودة.",
  sourcingDescription_en: "We utilize raw materials from key regions: local Qinan Oud, and forests in Hainan, Vietnam, and Guangxi. The materials are cured for over three years to ensure premium quality.",
};

export const BRAND_VALUES: BrandValueModel[] = [
  {
    title_ar: "الاحترام (Respect)",
    title_en: "Respect",
    description_ar: "احترام التقاليد والطقوس، مع احترام قواعد السلامة والحدود في الحياة الحديثة.",
    description_en: "Respecting traditions and rituals, while adhering to safety and boundaries in modern life.",
    iconName: "HandHeart",
  },
  {
    title_ar: "طقس نظيف (Clean Ritual)",
    title_en: "Clean Ritual",
    description_ar: "احتراق نظيف، دخان منخفض. لطقس يومي مستدام لا يسبب إزعاج الرئة بل يرطب الروح.",
    description_en: "Clean burn, low smoke. For a sustainable daily ritual that soothes the spirit without irritating the lungs.",
    iconName: "Leaf",
  },
  {
    title_ar: "حرفية يمكن تتبعها (Traceable Craft)",
    title_en: "Traceable Craft",
    description_ar: "تسجيل كل دفعة وتوثيق المصدر والتصنيع، لضمان الثقة والشفافية.",
    description_en: "Batch recording, verified sourcing, and documented manufacturing to ensure trust and transparency.",
    iconName: "CheckCircle",
  },
];

export const PROCESS_STEPS: StoryProcessStepModel[] = [
  {
    step: 1,
    title_ar: "اختيار العود المعتق",
    title_en: "Aged Oud Selection",
    summary_ar: "اختيار العود المعتق أكثر من 3 سنوات، لضمان عمق وطبقات الرائحة، مع محتوى راتنجي يتراوح بين 15% و 40%.",
    summary_en: "Selecting Oud aged over 3 years to ensure depth and layers of aroma, with resin content between 15% and 40%.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/297edc40-f4bd-462b-bcfe-f96a96256592.png",
  },
  {
    step: 2,
    title_ar: "الترشيح بالاستخراج فوق الحرج",
    title_en: "Supercritical Extraction",
    summary_ar: "استخدام طريقة الاستخلاص بثاني أكسيد الكربون في الحالة فوق الحرجة لاستخلاص أنقى الزيوت العطرية بدون بقايا كيميائية.",
    summary_en: "Utilizing Supercritical CO2 Extraction to derive the purest essential oils without chemical residue, maximizing active components.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/02398755-b58f-4d57-a89a-c3acb026c231.png",
  },
  {
    step: 3,
    title_ar: "التحويل بالحرارة المنخفضة",
    title_en: "Low-Temperature Pyrolysis",
    summary_ar: "نستخدم تقنية الكربنة المنخفضة الحرارة لتقليل الدخان بنسبة 60% أثناء الحرق، مما يقضي على الروائح القاسية.',",
    summary_en: "Employing low-temperature charring technology to reduce smoke by 60% during burning, eliminating harsh odors and ensuring a clean ritual.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/49f83330-67d7-4c7a-87c2-4e5e4f5d3c84.png",
  },
  {
    step: 4,
    title_ar: "التجفيف والتقطيع الدقيق",
    title_en: "Precision Drying & Cutting",
    summary_ar: "مراقبة دقيقة لكثافة العود وأجزاء العود لضمان أن كل قطعة أو عود يحترق بوتيرة ثابتة ومستقرة، لمدة يمكن التحكم فيها.",
    summary_en: "Accurate monitoring of Oud consistency and composition ensures every piece burns at a stable, controlled pace for a predictable time.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/a2ef6f72-8e32-4e37-8bf4-619a88886313.png",
  },
];

export const QUALITY_PROMISE_HIGHLIGHTS = {
  title_ar: "ضمان الجودة والشفافية",
  title_en: "Quality and Transparency Guarantee",
  summary_ar: "التزام NAFHA هو تقديم تجربة عطرية متميزة وآمنة. نحن نضمن مصدر المواد الخام وعمليات الإنتاج، ونوفر شهادات تثبت خلو منتجاتنا من المواد الكيميائية الضارة. نحن نركز فقط على المواد الطبيعية التي تهدف لتعزيز الأجواء وليس لتقديم أي ادعاءات صحية.",
  summary_en: "NAFHA's commitment is to provide a premium and safe fragrance experience. We guarantee the sourcing of raw materials and production processes, and provide certifications confirming our products are free from harmful chemicals. We focus only on natural materials aimed at enhancing ambiance, not making health claims.",
  // Links to compliance documents
  complianceLinks: [
    { title_ar: "شهادات المنتج المادية", title_en: "Material Certificates", url: "./compliance-safety.html#material-safety" },
    { title_ar: "إخلاء المسؤولية الطبية", title_en: "Medical Disclaimer", url: "./compliance-safety.html#safety-notice" },
    { title_ar: "تتبع المصدر", title_en: "Source Traceability", url: "./sourcing-craft.html" },
  ]
};
        
      