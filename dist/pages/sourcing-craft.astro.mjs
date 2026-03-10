import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { _ as _export_sfc, S as SafeIcon, B as Button, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { W as WhatsAppFloatingButton } from "../WhatsAppFloatingButton.BvsIxmp4.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { B as BRAND_STORY_CONTENT, P as PROCESS_STEPS, Q as QUALITY_PROMISE_HIGHLIGHTS } from "../brand_story.Bn8c_GUj.js";
import { A as AccordionTrigger, a as AccordionItem, b as AccordionContent, c as Accordion } from "../AccordionTrigger.DZr2FGXC.js";
import "../index.C1v01KQ3.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$6 = defineComponent({ __name: "SourcingHero", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[400px] md:h-[500px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/sourcing-craft/SourcingHero.vue", "data-source-line-start": "20", "data-source-line-end": "48" }))}><div class="absolute inset-0" data-source-file="src/components/sourcing-craft/SourcingHero.vue" data-source-line-start="22" data-source-line-end="29"><img src="https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/a9f5213c-7ed3-4c37-93db-cb4dadf80aaa.png" alt="مزارع العود" class="w-full h-full object-cover" data-source-file="src/components/sourcing-craft/SourcingHero.vue" data-source-line-start="23" data-source-line-end="27"><div class="absolute inset-0 bg-black/30" data-source-file="src/components/sourcing-craft/SourcingHero.vue" data-source-line-start="28" data-source-line-end="28"></div></div><div class="relative h-full flex flex-col items-center justify-center px-4 text-center" data-source-file="src/components/sourcing-craft/SourcingHero.vue" data-source-line-start="32" data-source-line-end="47"><div class="${ssrRenderClass([($setup.isClient, "animate-fade-in-up"), "space-y-4 max-w-3xl"])}" data-source-file="src/components/sourcing-craft/SourcingHero.vue" data-source-line-start="33" data-source-line-end="46"><h1 class="text-4xl md:text-5xl font-bold text-white leading-tight" data-source-file="src/components/sourcing-craft/SourcingHero.vue" data-source-line-start="37" data-source-line-end="39"> المصدر والحرفة </h1><p class="text-lg md:text-xl text-white/90" data-source-file="src/components/sourcing-craft/SourcingHero.vue" data-source-line-start="40" data-source-line-end="42"> رحلة العود من الشجرة إلى طقسك </p><p class="text-base md:text-lg text-white/80 max-w-2xl mx-auto" data-source-file="src/components/sourcing-craft/SourcingHero.vue" data-source-line-start="43" data-source-line-end="45"> نحن نؤمن بالشفافية الكاملة. تعرف على كيفية اختيارنا لأفضل المواد الخام وتحويلها إلى منتجات استثنائية </p></div></div></section>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sourcing-craft/SourcingHero.vue"), _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SourcingHero = _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = defineComponent({ __name: "SourcingMap", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, get BRAND_STORY_CONTENT() {
    return BRAND_STORY_CONTENT;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs, { "data-source-file": "src/components/sourcing-craft/SourcingMap.vue", "data-source-line-start": "17", "data-source-line-end": "102" }))}><div class="text-center mb-8" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="19" data-source-line-end="26"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="20" data-source-line-end="22"> مناطق المصدر الرئيسية </h2><p class="text-lg text-muted-foreground max-w-2xl mx-auto" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="23" data-source-line-end="25"> نختار مواد خامنا من أفضل مناطق زراعة العود في العالم </p></div><div class="${ssrRenderClass([($setup.isClient, "opacity-100"), "relative w-full rounded-2xl overflow-hidden shadow-card transition-all duration-500"])}" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="29" data-source-line-end="38"><img${ssrRenderAttr("src", $setup.BRAND_STORY_CONTENT.sourcingMapImage)} alt="خريطة مناطق المصدر" class="w-full h-auto object-cover" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="33" data-source-line-end="37"></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="41" data-source-line-end="101"><div class="p-6 rounded-xl border border-border/30 bg-card hover:shadow-card transition-shadow" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="43" data-source-line-end="60"><h3 class="text-xl font-bold text-foreground mb-3" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="44" data-source-line-end="46"> العود الكينام المحلي </h3><p class="text-muted-foreground mb-4" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="47" data-source-line-end="49"> نستخدم العود الكينام من المناطق المحلية المتخصصة، المعروفة بجودتها العالية وخصائصها العطرية الفريدة </p><ul class="space-y-2 text-sm text-muted-foreground" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="50" data-source-line-end="59"><li class="flex items-start gap-2" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="51" data-source-line-end="54"><span class="text-accent mt-1" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="52" data-source-line-end="52">✓</span><span data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="53" data-source-line-end="53">معايير جودة صارمة</span></li><li class="flex items-start gap-2" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="55" data-source-line-end="58"><span class="text-accent mt-1" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="56" data-source-line-end="56">✓</span><span data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="57" data-source-line-end="57">مزارعون موثوقون</span></li></ul></div><div class="p-6 rounded-xl border border-border/30 bg-card hover:shadow-card transition-shadow" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="63" data-source-line-end="80"><h3 class="text-xl font-bold text-foreground mb-3" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="64" data-source-line-end="66"> جنوب شرق آسيا </h3><p class="text-muted-foreground mb-4" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="67" data-source-line-end="69"> هاينان وفيتنام وقوانغشي توفر بعضاً من أفضل أنواع العود في العالم بخصائص عطرية متميزة </p><ul class="space-y-2 text-sm text-muted-foreground" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="70" data-source-line-end="79"><li class="flex items-start gap-2" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="71" data-source-line-end="74"><span class="text-accent mt-1" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="72" data-source-line-end="72">✓</span><span data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="73" data-source-line-end="73">تراث عريق في الزراعة</span></li><li class="flex items-start gap-2" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="75" data-source-line-end="78"><span class="text-accent mt-1" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="76" data-source-line-end="76">✓</span><span data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="77" data-source-line-end="77">مناخ مثالي للنمو</span></li></ul></div><div class="p-6 rounded-xl border border-border/30 bg-card hover:shadow-card transition-shadow" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="83" data-source-line-end="100"><h3 class="text-xl font-bold text-foreground mb-3" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="84" data-source-line-end="86"> عملية التعتيق </h3><p class="text-muted-foreground mb-4" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="87" data-source-line-end="89"> جميع مواد خامنا تخضع لعملية تعتيق لا تقل عن 3 سنوات لضمان عمق الرائحة والجودة </p><ul class="space-y-2 text-sm text-muted-foreground" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="90" data-source-line-end="99"><li class="flex items-start gap-2" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="91" data-source-line-end="94"><span class="text-accent mt-1" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="92" data-source-line-end="92">✓</span><span data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="93" data-source-line-end="93">تطور الخصائص العطرية</span></li><li class="flex items-start gap-2" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="95" data-source-line-end="98"><span class="text-accent mt-1" data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="96" data-source-line-end="96">✓</span><span data-source-file="src/components/sourcing-craft/SourcingMap.vue" data-source-line-start="97" data-source-line-end="97">تحسن الجودة مع الوقت</span></li></ul></div></div></div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sourcing-craft/SourcingMap.vue"), _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SourcingMap = _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = defineComponent({ __name: "ProcessStepCard", props: { step: {}, isVisible: { type: Boolean, default: true } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = {};
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: ["rounded-xl overflow-hidden border border-border/30 bg-card shadow-soft hover:shadow-card transition-all duration-500", $props.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"] }, _attrs, { "data-source-file": "src/components/sourcing-craft/ProcessStepCard.vue", "data-source-line-start": "16", "data-source-line-end": "48" }))}><div class="relative h-64 overflow-hidden bg-muted" data-source-file="src/components/sourcing-craft/ProcessStepCard.vue" data-source-line-start="21" data-source-line-end="31"><img${ssrRenderAttr("src", $props.step.imageUrl)}${ssrRenderAttr("alt", $props.step.title_ar)} class="w-full h-full object-cover hover-scale" data-source-file="src/components/sourcing-craft/ProcessStepCard.vue" data-source-line-start="22" data-source-line-end="26"><div class="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg" data-source-file="src/components/sourcing-craft/ProcessStepCard.vue" data-source-line-start="28" data-source-line-end="30">${ssrInterpolate($props.step.step)}</div></div><div class="p-6 md:p-8" data-source-file="src/components/sourcing-craft/ProcessStepCard.vue" data-source-line-start="34" data-source-line-end="47"><h3 class="text-2xl font-bold text-foreground mb-3" data-source-file="src/components/sourcing-craft/ProcessStepCard.vue" data-source-line-start="35" data-source-line-end="37">${ssrInterpolate($props.step.title_ar)}</h3><p class="text-sm text-muted-foreground mb-4" data-source-file="src/components/sourcing-craft/ProcessStepCard.vue" data-source-line-start="38" data-source-line-end="40">${ssrInterpolate($props.step.title_en)}</p><p class="text-base text-foreground leading-relaxed" data-source-file="src/components/sourcing-craft/ProcessStepCard.vue" data-source-line-start="41" data-source-line-end="43">${ssrInterpolate($props.step.summary_ar)}</p><p class="text-sm text-muted-foreground mt-4 italic" data-source-file="src/components/sourcing-craft/ProcessStepCard.vue" data-source-line-start="44" data-source-line-end="46">${ssrInterpolate($props.step.summary_en)}</p></div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sourcing-craft/ProcessStepCard.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProcessStepCard = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({ __name: "ProcessTimeline", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), visibleSteps = ref([]);
  onMounted(() => {
    isClient.value = false, PROCESS_STEPS.forEach((_, index) => {
      setTimeout(() => {
        visibleSteps.value.push(index);
      }, index * 150);
    }), requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, visibleSteps, get PROCESS_STEPS() {
    return PROCESS_STEPS;
  }, ProcessStepCard };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 gap-8" }, _attrs, { "data-source-file": "src/components/sourcing-craft/ProcessTimeline.vue", "data-source-line-start": "27", "data-source-line-end": "34" }))}><!--[-->`), ssrRenderList($setup.PROCESS_STEPS, (step, index) => {
    _push(ssrRenderComponent($setup.ProcessStepCard, { key: step.step, step, "is-visible": ($setup.isClient || true) && $setup.visibleSteps.includes(index), "data-source-file": "src/components/sourcing-craft/ProcessTimeline.vue", "data-source-line-start": "28", "data-source-line-end": "33" }, null, _parent));
  }), _push("<!--]--></div>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sourcing-craft/ProcessTimeline.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProcessTimeline = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "MaterialExplanation", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { materials: [{ id: "resin-content", title: "محتوى الراتنج والكثافة", titleEn: "Resin Content & Density", content: "نختار العود بمحتوى راتنجي يتراوح بين 15% و 40%، وهو النطاق المثالي للحصول على توازن بين الرائحة والاحتراق النظيف. نستخدم تقنية الكربنة المنخفضة الحرارة والمواد اللاصقة النباتية لتقليل الدخان بنسبة 60% أثناء الحرق، مما يضمن عدم وجود رائحة قاسية أو بقايا سوداء.", contentEn: "We select Oud with resin content between 15% and 40%, the ideal range for balancing fragrance and clean burning. Using low-temperature charring and plant-based binders, we reduce smoke by 60% during burning, ensuring no harsh odors or black residue." }, { id: "burning-time", title: "وقت الاحتراق المتحكم فيه", titleEn: "Controlled Burning Time", content: "من خلال ضبط كثافة العود وتكوين الخيط الأساسي، نحقق أوقات احتراق يمكن التحكم فيها. الأعواد القصيرة تحترق بثبات لمدة 30 دقيقة، بينما الأعواد الطويلة قد تصل إلى ساعتين. هذا يضمن إطلاق الرائحة بشكل متساوٍ ومستمر دون تقلبات.", contentEn: "By adjusting Oud density and core composition, we achieve controlled burning times. Short sticks burn steadily for 30 minutes, while long sticks reach up to 2 hours. This ensures consistent and even fragrance release without fluctuations." }, { id: "extraction-methods", title: "طرق استخلاص الزيوت العطرية", titleEn: "Essential Oil Extraction Methods", content: "نستخدم طريقتين رئيسيتين: الاستخلاص بثاني أكسيد الكربون فوق الحرج (عملية حديثة، درجة حرارة منخفضة، بدون بقايا كيميائية، سعر أقل) والتقطير بالبخار (الطريقة التقليدية، تحافظ على الرائحة الطبيعية، معدل استخراج أقل، سعر أعلى). كلا الطريقتين توفران نقاء عالياً وخصائص عطرية متميزة.", contentEn: "We employ two primary methods: Supercritical CO2 Extraction (modern, low-temperature, no chemical residue, lower cost) and Steam Distillation (traditional, preserves natural aroma, lower yield, higher cost). Both deliver high purity and exceptional aromatic properties." }, { id: "quality-control", title: "مراقبة الجودة والاختبار", titleEn: "Quality Control & Testing", content: "كل دفعة من منتجاتنا تخضع لاختبارات صارمة تشمل: اختبار الاحتراق (للتحقق من نقاء الدخان)، اختبار الرائحة (للتأكد من اتساق الخصائص العطرية)، واختبار السلامة (للتحقق من خلو المنتج من المواد الكيميائية الضارة). نحتفظ بسجلات مفصلة لكل دفعة لضمان الشفافية والمساءلة.", contentEn: "Every batch undergoes rigorous testing including: burn tests (smoke purity), aroma tests (aromatic consistency), and safety tests (harmful chemical absence). We maintain detailed batch records for full transparency and accountability." }], get Accordion() {
    return Accordion;
  }, get AccordionContent() {
    return AccordionContent;
  }, get AccordionItem() {
    return AccordionItem;
  }, get AccordionTrigger() {
    return AccordionTrigger;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs, { "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "45", "data-source-line-end": "88" }))}><div class="text-center mb-12" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="47" data-source-line-end="54"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="48" data-source-line-end="50"> شرح المواد والعمليات </h2><p class="text-lg text-muted-foreground max-w-2xl mx-auto" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="51" data-source-line-end="53"> فهم عميق لكل جانب من جوانب إنتاجنا </p></div>`), _push(ssrRenderComponent($setup.Accordion, { type: "single", collapsible: "", class: "w-full space-y-4", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "57", "data-source-line-end": "87" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2("<!--[-->"), ssrRenderList($setup.materials, (material) => {
      _push2(ssrRenderComponent($setup.AccordionItem, { key: material.id, value: material.id, class: "border border-border/30 rounded-xl px-6 overflow-hidden", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "58", "data-source-line-end": "86" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(ssrRenderComponent($setup.AccordionTrigger, { class: "hover:no-underline py-6", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "64", "data-source-line-end": "75" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`<div class="flex items-start gap-4 text-right flex-1" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="65" data-source-line-end="74"${_scopeId3}><div class="flex-1" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="66" data-source-line-end="73"${_scopeId3}><h3 class="text-lg font-bold text-foreground text-right" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="67" data-source-line-end="69"${_scopeId3}>${ssrInterpolate(material.title)}</h3><p class="text-sm text-muted-foreground text-right mt-1" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="70" data-source-line-end="72"${_scopeId3}>${ssrInterpolate(material.titleEn)}</p></div></div>`);
          else return [createVNode("div", { class: "flex items-start gap-4 text-right flex-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "65", "data-source-line-end": "74" }, [createVNode("div", { class: "flex-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "66", "data-source-line-end": "73" }, [createVNode("h3", { class: "text-lg font-bold text-foreground text-right", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "67", "data-source-line-end": "69" }, toDisplayString(material.title), 1), createVNode("p", { class: "text-sm text-muted-foreground text-right mt-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "70", "data-source-line-end": "72" }, toDisplayString(material.titleEn), 1)])])];
        }), _: 2 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.AccordionContent, { class: "pb-6 pt-0", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "76", "data-source-line-end": "85" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`<div class="space-y-4 text-right" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="77" data-source-line-end="84"${_scopeId3}><p class="text-base text-foreground leading-relaxed" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="78" data-source-line-end="80"${_scopeId3}>${ssrInterpolate(material.content)}</p><p class="text-sm text-muted-foreground italic" data-source-file="src/components/sourcing-craft/MaterialExplanation.vue" data-source-line-start="81" data-source-line-end="83"${_scopeId3}>${ssrInterpolate(material.contentEn)}</p></div>`);
          else return [createVNode("div", { class: "space-y-4 text-right", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "77", "data-source-line-end": "84" }, [createVNode("p", { class: "text-base text-foreground leading-relaxed", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "78", "data-source-line-end": "80" }, toDisplayString(material.content), 1), createVNode("p", { class: "text-sm text-muted-foreground italic", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "81", "data-source-line-end": "83" }, toDisplayString(material.contentEn), 1)])];
        }), _: 2 }, _parent3, _scopeId2));
        else return [createVNode($setup.AccordionTrigger, { class: "hover:no-underline py-6", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "64", "data-source-line-end": "75" }, { default: withCtx(() => [createVNode("div", { class: "flex items-start gap-4 text-right flex-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "65", "data-source-line-end": "74" }, [createVNode("div", { class: "flex-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "66", "data-source-line-end": "73" }, [createVNode("h3", { class: "text-lg font-bold text-foreground text-right", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "67", "data-source-line-end": "69" }, toDisplayString(material.title), 1), createVNode("p", { class: "text-sm text-muted-foreground text-right mt-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "70", "data-source-line-end": "72" }, toDisplayString(material.titleEn), 1)])])]), _: 2 }, 1024), createVNode($setup.AccordionContent, { class: "pb-6 pt-0", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "76", "data-source-line-end": "85" }, { default: withCtx(() => [createVNode("div", { class: "space-y-4 text-right", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "77", "data-source-line-end": "84" }, [createVNode("p", { class: "text-base text-foreground leading-relaxed", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "78", "data-source-line-end": "80" }, toDisplayString(material.content), 1), createVNode("p", { class: "text-sm text-muted-foreground italic", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "81", "data-source-line-end": "83" }, toDisplayString(material.contentEn), 1)])]), _: 2 }, 1024)];
      }), _: 2 }, _parent2, _scopeId));
    }), _push2("<!--]-->");
    else return [(openBlock(), createBlock(Fragment, null, renderList($setup.materials, (material) => createVNode($setup.AccordionItem, { key: material.id, value: material.id, class: "border border-border/30 rounded-xl px-6 overflow-hidden", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "58", "data-source-line-end": "86" }, { default: withCtx(() => [createVNode($setup.AccordionTrigger, { class: "hover:no-underline py-6", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "64", "data-source-line-end": "75" }, { default: withCtx(() => [createVNode("div", { class: "flex items-start gap-4 text-right flex-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "65", "data-source-line-end": "74" }, [createVNode("div", { class: "flex-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "66", "data-source-line-end": "73" }, [createVNode("h3", { class: "text-lg font-bold text-foreground text-right", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "67", "data-source-line-end": "69" }, toDisplayString(material.title), 1), createVNode("p", { class: "text-sm text-muted-foreground text-right mt-1", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "70", "data-source-line-end": "72" }, toDisplayString(material.titleEn), 1)])])]), _: 2 }, 1024), createVNode($setup.AccordionContent, { class: "pb-6 pt-0", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "76", "data-source-line-end": "85" }, { default: withCtx(() => [createVNode("div", { class: "space-y-4 text-right", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "77", "data-source-line-end": "84" }, [createVNode("p", { class: "text-base text-foreground leading-relaxed", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "78", "data-source-line-end": "80" }, toDisplayString(material.content), 1), createVNode("p", { class: "text-sm text-muted-foreground italic", "data-source-file": "src/components/sourcing-craft/MaterialExplanation.vue", "data-source-line-start": "81", "data-source-line-end": "83" }, toDisplayString(material.contentEn), 1)])]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"])), 64))];
  }), _: 1 }, _parent)), _push("</div>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sourcing-craft/MaterialExplanation.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const MaterialExplanation = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "QualityPromiseSection", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, certifications: [{ icon: "Shield", label: "شهادة السلامة المادية", labelEn: "Material Safety Certificate" }, { icon: "Leaf", label: "شهادة الاستدامة", labelEn: "Sustainability Certificate" }, { icon: "CheckCircle", label: "شهادة الجودة", labelEn: "Quality Assurance" }, { icon: "Zap", label: "اختبار الاحتراق", labelEn: "Burn Test Report" }], SafeIcon, get QUALITY_PROMISE_HIGHLIGHTS() {
    return QUALITY_PROMISE_HIGHLIGHTS;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs, { "data-source-file": "src/components/sourcing-craft/QualityPromiseSection.vue", "data-source-line-start": "27", "data-source-line-end": "87" }))}><div class="${ssrRenderClass([($setup.isClient, "opacity-100"), "rounded-2xl border border-border/30 bg-card p-8 md:p-12 transition-all duration-500"])}" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="29" data-source-line-end="42"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="33" data-source-line-end="35">${ssrInterpolate($setup.QUALITY_PROMISE_HIGHLIGHTS.title_ar)}</h2><p class="text-lg text-foreground leading-relaxed mb-8" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="36" data-source-line-end="38">${ssrInterpolate($setup.QUALITY_PROMISE_HIGHLIGHTS.summary_ar)}</p><p class="text-base text-muted-foreground italic" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="39" data-source-line-end="41">${ssrInterpolate($setup.QUALITY_PROMISE_HIGHLIGHTS.summary_en)}</p></div><div data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="45" data-source-line-end="66"><h3 class="text-2xl font-bold text-foreground mb-8 text-center" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="46" data-source-line-end="48"> الشهادات والاختبارات </h3><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="49" data-source-line-end="65"><!--[-->`), ssrRenderList($setup.certifications, (cert) => {
    _push('<div class="flex flex-col items-center text-center p-6 rounded-xl border border-border/30 bg-background hover:shadow-card transition-shadow" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="50" data-source-line-end="64"><div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="55" data-source-line-end="57">'), _push(ssrRenderComponent($setup.SafeIcon, { name: cert.icon, size: 32, class: "text-accent", "data-source-file": "src/components/sourcing-craft/QualityPromiseSection.vue", "data-source-line-start": "56", "data-source-line-end": "56" }, null, _parent)), _push(`</div><h4 class="font-bold text-foreground mb-2" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="58" data-source-line-end="60">${ssrInterpolate(cert.label)}</h4><p class="text-sm text-muted-foreground" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="61" data-source-line-end="63">${ssrInterpolate(cert.labelEn)}</p></div>`);
  }), _push('<!--]--></div></div><div class="bg-card rounded-xl p-8 border border-border/30" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="69" data-source-line-end="86"><h3 class="text-xl font-bold text-foreground mb-6" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="70" data-source-line-end="72"> وثائق الامتثال والشفافية </h3><div class="grid grid-cols-1 md:grid-cols-3 gap-4" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="73" data-source-line-end="85"><!--[-->'), ssrRenderList($setup.QUALITY_PROMISE_HIGHLIGHTS.complianceLinks, (link) => {
    _push(`<a${ssrRenderAttr("href", link.url)} class="flex items-center justify-between p-4 rounded-lg border border-border/30 hover:bg-background transition-colors group" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="74" data-source-line-end="84"><span class="font-medium text-foreground group-hover:text-primary transition-colors" data-source-file="src/components/sourcing-craft/QualityPromiseSection.vue" data-source-line-start="80" data-source-line-end="82">${ssrInterpolate(link.title_ar)}</span>`), _push(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "text-muted-foreground group-hover:text-primary transition-colors", "data-source-file": "src/components/sourcing-craft/QualityPromiseSection.vue", "data-source-line-start": "83", "data-source-line-end": "83" }, null, _parent)), _push("</a>");
  }), _push("<!--]--></div></div></div>");
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sourcing-craft/QualityPromiseSection.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const QualityPromiseSection = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "SourcingCTA", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-2xl bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 p-8 md:p-12" }, _attrs, { "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "8", "data-source-line-end": "53" }))}><div class="max-w-3xl mx-auto text-center space-y-6" data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="9" data-source-line-end="52"><h2 class="text-3xl md:text-4xl font-bold text-foreground" data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="10" data-source-line-end="12"> هل أنت مستعد لاستكشاف منتجاتنا؟ </h2><p class="text-lg text-muted-foreground" data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="13" data-source-line-end="15"> الآن بعد أن تعرفت على عملية الإنتاج والالتزام بالجودة، اكتشف مجموعتنا الكاملة من منتجات العود الفاخرة </p><div class="flex flex-col sm:flex-row gap-4 justify-center pt-4" data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="17" data-source-line-end="41">`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground", as: "a", href: "./collections.html", "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "19", "data-source-line-end": "27" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(`<span data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="25" data-source-line-end="25"${_scopeId}>استكشف المجموعة</span>`), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "26", "data-source-line-end": "26" }, null, _parent2, _scopeId));
    else return [createVNode("span", { "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "25", "data-source-line-end": "25" }, "استكشف المجموعة"), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "26", "data-source-line-end": "26" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", as: "a", href: "https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن منتجاتكم والمصدر والحرفة", target: "_blank", rel: "noopener noreferrer", "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "30", "data-source-line-end": "40" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 20, class: "ml-2", "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "38", "data-source-line-end": "38" }, null, _parent2, _scopeId)), _push2(`<span data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="39" data-source-line-end="39"${_scopeId}>تواصل عبر واتساب</span>`);
    else return [createVNode($setup.SafeIcon, { name: "MessageCircle", size: 20, class: "ml-2", "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "38", "data-source-line-end": "38" }), createVNode("span", { "data-source-file": "src/components/sourcing-craft/SourcingCTA.vue", "data-source-line-start": "39", "data-source-line-end": "39" }, "تواصل عبر واتساب")];
  }), _: 1 }, _parent)), _push('</div><div class="pt-8 border-t border-border/30" data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="44" data-source-line-end="51"><p class="text-sm text-muted-foreground" data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="45" data-source-line-end="50"> لديك أسئلة حول عملية الإنتاج أو المواد؟ <a href="./help-center.html" class="text-primary font-medium hover:underline" data-source-file="src/components/sourcing-craft/SourcingCTA.vue" data-source-line-start="47" data-source-line-end="49"> زر مركز المساعدة </a></p></div></div></div>');
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/sourcing-craft/SourcingCTA.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SourcingCTA = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const $$SourcingCraft = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "المصدر والحرفة | نفحة NAFHA" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="16" data-source-line-end="69" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="19" data-source-line-end="65" class="flex-1">
      <!-- Hero Section -->
      ${renderComponent($$result2, "SourcingHero", SourcingHero, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/sourcing-craft/SourcingHero.vue", "client:component-export": "default" })}
      
      <!-- Sourcing Map Section -->
      <section data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="24" data-source-line-end="28" class="py-12 md:py-20 bg-background">
        <div data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="25" data-source-line-end="27" class="container mx-auto px-4">
          ${renderComponent($$result2, "SourcingMap", SourcingMap, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/sourcing-craft/SourcingMap.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Process Timeline Section -->
      <section data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="31" data-source-line-end="43" class="py-12 md:py-20 bg-card/50">
        <div data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="32" data-source-line-end="42" class="container mx-auto px-4">
          <div data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="33" data-source-line-end="40" class="mb-12">
            <h2 data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="34" data-source-line-end="36" class="text-3xl md:text-4xl font-bold text-foreground mb-4">
              عملية الإنتاج المتقنة
            </h2>
            <p data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="37" data-source-line-end="39" class="text-lg text-muted-foreground max-w-2xl">
              نتابع معايير صارمة في كل مرحلة من مراحل الإنتاج لضمان أعلى جودة وأنظف احتراق
            </p>
          </div>
          ${renderComponent($$result2, "ProcessTimeline", ProcessTimeline, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/sourcing-craft/ProcessTimeline.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Material Explanation Section -->
      <section data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="46" data-source-line-end="50" class="py-12 md:py-20 bg-background">
        <div data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="47" data-source-line-end="49" class="container mx-auto px-4">
          ${renderComponent($$result2, "MaterialExplanation", MaterialExplanation, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/sourcing-craft/MaterialExplanation.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Quality Promise Section -->
      <section data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="53" data-source-line-end="57" class="py-12 md:py-20 bg-card/50">
        <div data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="54" data-source-line-end="56" class="container mx-auto px-4">
          ${renderComponent($$result2, "QualityPromiseSection", QualityPromiseSection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/sourcing-craft/QualityPromiseSection.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- CTA Section -->
      <section data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="60" data-source-line-end="64" class="py-12 md:py-20 bg-background">
        <div data-source-file="src/pages/sourcing-craft.astro" data-source-line-start="61" data-source-line-end="63" class="container mx-auto px-4">
          ${renderComponent($$result2, "SourcingCTA", SourcingCTA, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/sourcing-craft/SourcingCTA.vue", "client:component-export": "default" })}
        </div>
      </section>
    </main>
    
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { variant: "complex" })}
    ${renderComponent($$result2, "WhatsAppFloatingButton", WhatsAppFloatingButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/WhatsAppFloatingButton.vue", "client:component-export": "default" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/sourcing-craft.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/sourcing-craft.astro";
const $$url = "/sourcing-craft.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$SourcingCraft,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
