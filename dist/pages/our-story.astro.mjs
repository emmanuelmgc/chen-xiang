import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { S as SafeIcon, _ as _export_sfc, B as Button, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { B as BreadcrumbNav } from "../BreadcrumbNav.CAZ3ctap.js";
import { W as WhatsAppFloatingButton } from "../WhatsAppFloatingButton.BvsIxmp4.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { B as BRAND_STORY_CONTENT, a as BRAND_VALUES, P as PROCESS_STEPS } from "../brand_story.Bn8c_GUj.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$4 = defineComponent({ __name: "OurStoryHero", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[500px] md:h-[600px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/our-story/OurStoryHero.vue", "data-source-line-start": "18", "data-source-line-end": "58" }))}><div class="absolute inset-0" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="20" data-source-line-end="28"><img src="https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/d3648fe4-c40b-4f1a-82ea-d692b0910b73.png" alt="قصة نفحة" class="w-full h-full object-cover" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="21" data-source-line-end="25"><div class="absolute inset-0 bg-black/30" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="27" data-source-line-end="27"></div></div><div class="relative h-full flex flex-col items-center justify-center px-4 text-center" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="31" data-source-line-end="57"><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out"])}" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="32" data-source-line-end="45"><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="36" data-source-line-end="38"> قصتنا </h1><p class="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="39" data-source-line-end="41"> من الزراعة إلى الطقس: رحلة احترام التراث والحداثة </p><p class="text-base md:text-lg text-white/80 font-light" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="42" data-source-line-end="44"> A journey of respect, craft, and ritual </p></div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100" : "opacity-0", "absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-opacity duration-700"])}" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="48" data-source-line-end="56"><div class="flex flex-col items-center gap-2" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="52" data-source-line-end="55"><p class="text-sm text-white/70" data-source-file="src/components/our-story/OurStoryHero.vue" data-source-line-start="53" data-source-line-end="53">اكتشف المزيد</p>`), _push(ssrRenderComponent($setup.SafeIcon, { name: "ChevronDown", size: 24, class: "text-white/70 animate-bounce", "data-source-file": "src/components/our-story/OurStoryHero.vue", "data-source-line-start": "54", "data-source-line-end": "54" }, null, _parent)), _push("</div></div></div></section>");
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/our-story/OurStoryHero.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const OurStoryHero = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({ __name: "BrandStorySection", setup(__props, { expose: __expose }) {
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
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-24 bg-background" }, _attrs, { "data-source-file": "src/components/our-story/BrandStorySection.vue", "data-source-line-start": "17", "data-source-line-end": "83" }))}><div class="container mx-auto px-4" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="18" data-source-line-end="82"><div class="mb-16 text-center" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="20" data-source-line-end="32"><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out"])}" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="21" data-source-line-end="31"><p class="text-primary text-lg md:text-xl font-semibold mb-4" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="25" data-source-line-end="27">${ssrInterpolate($setup.BRAND_STORY_CONTENT.shortClaim_ar)}</p><p class="text-muted-foreground text-base md:text-lg" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="28" data-source-line-end="30">${ssrInterpolate($setup.BRAND_STORY_CONTENT.shortClaim_en)}</p></div></div><div class="mb-16 max-w-3xl mx-auto" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="35" data-source-line-end="47"><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out delay-100"])}" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="36" data-source-line-end="46"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="40" data-source-line-end="42">${ssrInterpolate($setup.BRAND_STORY_CONTENT.brandPrinciple_ar)}</h2><p class="text-muted-foreground text-base md:text-lg leading-relaxed" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="43" data-source-line-end="45">${ssrInterpolate($setup.BRAND_STORY_CONTENT.brandPrinciple_en)}</p></div></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="50" data-source-line-end="81"><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out delay-200"])}" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="52" data-source-line-end="65"><h3 class="text-2xl md:text-3xl font-bold text-foreground mb-6" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="56" data-source-line-end="58"> رحلتنا من الجذور إلى الطقس </h3><p class="text-foreground/80 text-base md:text-lg leading-relaxed mb-6" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="59" data-source-line-end="61">${ssrInterpolate($setup.BRAND_STORY_CONTENT.longStory_ar)}</p><p class="text-muted-foreground text-sm italic" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="62" data-source-line-end="64">${ssrInterpolate($setup.BRAND_STORY_CONTENT.longStory_en)}</p></div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 scale-100" : "opacity-0 scale-95", "transition-all duration-700 ease-out delay-300"])}" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="68" data-source-line-end="80"><img${ssrRenderAttr("src", $setup.BRAND_STORY_CONTENT.sourcingMapImage)} alt="خريطة المصادر" class="w-full h-auto rounded-lg shadow-card" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="72" data-source-line-end="76"><p class="text-sm text-muted-foreground mt-4 text-center" data-source-file="src/components/our-story/BrandStorySection.vue" data-source-line-start="77" data-source-line-end="79">${ssrInterpolate($setup.BRAND_STORY_CONTENT.sourcingDescription_ar)}</p></div></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/our-story/BrandStorySection.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BrandStorySection = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "BrandValuesGrid", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, get BRAND_VALUES() {
    return BRAND_VALUES;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-24 bg-secondary/30" }, _attrs, { "data-source-file": "src/components/our-story/BrandValuesGrid.vue", "data-source-line-start": "18", "data-source-line-end": "67" }))}><div class="container mx-auto px-4" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="19" data-source-line-end="66"><div class="text-center mb-16" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="21" data-source-line-end="33"><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out"])}" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="22" data-source-line-end="32"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="26" data-source-line-end="28"> قيمنا الأساسية </h2><p class="text-muted-foreground text-lg max-w-2xl mx-auto" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="29" data-source-line-end="31"> ثلاث ركائز تحدد هويتنا وتوجه كل قراراتنا </p></div></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="36" data-source-line-end="65"><!--[-->`), ssrRenderList($setup.BRAND_VALUES, (value, index) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out rounded-lg border border-border/30 bg-background p-8 hover:shadow-card hover:border-primary/30"])}" style="${ssrRenderStyle({ transitionDelay: `${(index + 1) * 100}ms` })}" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="37" data-source-line-end="64"><div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-6" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="45" data-source-line-end="47">`), _push(ssrRenderComponent($setup.SafeIcon, { name: value.iconName, size: 32, class: "text-accent", "data-source-file": "src/components/our-story/BrandValuesGrid.vue", "data-source-line-start": "46", "data-source-line-end": "46" }, null, _parent)), _push(`</div><h3 class="text-xl font-bold text-foreground mb-3" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="50" data-source-line-end="52">${ssrInterpolate(value.title_ar)}</h3><p class="text-sm text-muted-foreground mb-4 font-light" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="53" data-source-line-end="55">${ssrInterpolate(value.title_en)}</p><p class="text-foreground/80 text-base leading-relaxed mb-4" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="58" data-source-line-end="60">${ssrInterpolate(value.description_ar)}</p><p class="text-muted-foreground text-sm italic" data-source-file="src/components/our-story/BrandValuesGrid.vue" data-source-line-start="61" data-source-line-end="63">${ssrInterpolate(value.description_en)}</p></div>`);
  }), _push("<!--]--></div></div></section>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/our-story/BrandValuesGrid.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BrandValuesGrid = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "ProcessStepsTimeline", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, get PROCESS_STEPS() {
    return PROCESS_STEPS;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-24 bg-background" }, _attrs, { "data-source-file": "src/components/our-story/ProcessStepsTimeline.vue", "data-source-line-start": "17", "data-source-line-end": "94" }))}><div class="container mx-auto px-4" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="18" data-source-line-end="93"><div class="text-center mb-16" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="20" data-source-line-end="32"><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out"])}" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="21" data-source-line-end="31"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="25" data-source-line-end="27"> عملية الحرفة الدقيقة </h2><p class="text-muted-foreground text-lg max-w-2xl mx-auto" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="28" data-source-line-end="30"> من اختيار العود المعتق إلى الطقس النهائي: رحلة الجودة والاحترام </p></div></div><div class="space-y-12" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="35" data-source-line-end="92"><!--[-->`), ssrRenderList($setup.PROCESS_STEPS, (step, index) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out"])}" style="${ssrRenderStyle({ transitionDelay: `${(index + 1) * 100}ms` })}" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="36" data-source-line-end="91"><div class="${ssrRenderClass([{ "md:grid-flow-dense": index % 2 === 1 }, "grid grid-cols-1 md:grid-cols-2 gap-8 items-center"])}" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="43" data-source-line-end="87"><div class="${ssrRenderClass([{ "md:order-1": index % 2 === 1 }, "order-2"])}" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="48" data-source-line-end="57"><img${ssrRenderAttr("src", step.imageUrl)}${ssrRenderAttr("alt", step.title_ar)} class="w-full h-auto rounded-lg shadow-card" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="52" data-source-line-end="56"></div><div class="${ssrRenderClass([{ "md:order-2": index % 2 === 1 }, "order-1"])}" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="60" data-source-line-end="86"><div class="flex items-center gap-4 mb-4" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="65" data-source-line-end="72"><div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="66" data-source-line-end="68"><span class="text-lg font-bold text-primary" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="67" data-source-line-end="67">${ssrInterpolate(step.step)}</span></div><h3 class="text-2xl font-bold text-foreground" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="69" data-source-line-end="71">${ssrInterpolate(step.title_ar)}</h3></div><p class="text-sm text-muted-foreground font-light mb-4" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="75" data-source-line-end="77">${ssrInterpolate(step.title_en)}</p><p class="text-foreground/80 text-base leading-relaxed mb-4" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="80" data-source-line-end="82">${ssrInterpolate(step.summary_ar)}</p><p class="text-muted-foreground text-sm italic" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="83" data-source-line-end="85">${ssrInterpolate(step.summary_en)}</p></div></div>`), index < $setup.PROCESS_STEPS.length - 1 ? _push('<div class="h-px bg-border/30 mt-12" data-source-file="src/components/our-story/ProcessStepsTimeline.vue" data-source-line-start="90" data-source-line-end="90"></div>') : _push("<!---->"), _push("</div>");
  }), _push("<!--]--></div></div></section>");
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/our-story/ProcessStepsTimeline.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProcessStepsTimeline = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "CTASection", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-24 bg-secondary/30" }, _attrs, { "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "18", "data-source-line-end": "81" }))}><div class="container mx-auto px-4" data-source-file="src/components/our-story/CTASection.vue" data-source-line-start="19" data-source-line-end="80"><div class="max-w-3xl mx-auto text-center" data-source-file="src/components/our-story/CTASection.vue" data-source-line-start="20" data-source-line-end="79"><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out mb-8"])}" data-source-file="src/components/our-story/CTASection.vue" data-source-line-start="22" data-source-line-end="32"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/our-story/CTASection.vue" data-source-line-start="26" data-source-line-end="28"> هل أنت مستعد لاكتشاف الفرق؟ </h2><p class="text-muted-foreground text-lg mb-8" data-source-file="src/components/our-story/CTASection.vue" data-source-line-start="29" data-source-line-end="31"> استكشف مجموعتنا الكاملة من منتجات العود منخفضة الدخان والبخور الفاخر </p></div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out delay-100 flex flex-col sm:flex-row gap-4 justify-center"])}" data-source-file="src/components/our-story/CTASection.vue" data-source-line-start="35" data-source-line-end="57">`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground", as: "a", href: "./collections.html", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "39", "data-source-line-end": "47" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" استكشف المجموعة "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "46", "data-source-line-end": "46" }, null, _parent2, _scopeId));
    else return [createTextVNode(" استكشف المجموعة "), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "46", "data-source-line-end": "46" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", as: "a", href: "./sourcing-craft.html", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "48", "data-source-line-end": "56" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" تعرف على المصدر والحرفة "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "BookOpen", size: 20, class: "mr-2", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "55", "data-source-line-end": "55" }, null, _parent2, _scopeId));
    else return [createTextVNode(" تعرف على المصدر والحرفة "), createVNode($setup.SafeIcon, { name: "BookOpen", size: 20, class: "mr-2", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "55", "data-source-line-end": "55" })];
  }), _: 1 }, _parent)), _push(`</div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-700 ease-out delay-200 mt-12 pt-12 border-t border-border/30"])}" data-source-file="src/components/our-story/CTASection.vue" data-source-line-start="60" data-source-line-end="78"><p class="text-muted-foreground text-base mb-6" data-source-file="src/components/our-story/CTASection.vue" data-source-line-start="64" data-source-line-end="66"> هل لديك أسئلة حول منتجاتنا أو خدماتنا؟ </p>`), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "default", as: "a", href: "https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن منتجات نفحة", target: "_blank", rel: "noopener noreferrer", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "67", "data-source-line-end": "77" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 20, class: "mr-2", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "75", "data-source-line-end": "75" }, null, _parent2, _scopeId)), _push2(" تواصل عبر واتساب ");
    else return [createVNode($setup.SafeIcon, { name: "MessageCircle", size: 20, class: "mr-2", "data-source-file": "src/components/our-story/CTASection.vue", "data-source-line-start": "75", "data-source-line-end": "75" }), createTextVNode(" تواصل عبر واتساب ")];
  }), _: 1 }, _parent)), _push("</div></div></div></section>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/our-story/CTASection.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CTASection = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const $$OurStory = createComponent(($$result, $$props, $$slots) => {
  const breadcrumbItems = [{ label: "الرئيسية", href: "./collections.html" }, { label: "من نحن", href: "./about.html" }, { label: "قصتنا", href: "./our-story.html" }];
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "قصتنا - نفحة NAFHA" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/our-story.astro" data-source-line-start="22" data-source-line-end="49" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/our-story.astro" data-source-line-start="25" data-source-line-end="45" class="flex-1">
      <!-- Breadcrumb -->
      <div data-source-file="src/pages/our-story.astro" data-source-line-start="27" data-source-line-end="29" class="container mx-auto px-4 py-6">
        ${renderComponent($$result2, "BreadcrumbNav", BreadcrumbNav, { items: breadcrumbItems })}
      </div>

      <!-- Hero Section -->
      ${renderComponent($$result2, "OurStoryHero", OurStoryHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/our-story/OurStoryHero.vue", "client:component-export": "default" })}

      <!-- Brand Story Section -->
      ${renderComponent($$result2, "BrandStorySection", BrandStorySection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/our-story/BrandStorySection.vue", "client:component-export": "default" })}

      <!-- Brand Values Grid -->
      ${renderComponent($$result2, "BrandValuesGrid", BrandValuesGrid, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/our-story/BrandValuesGrid.vue", "client:component-export": "default" })}

      <!-- Process Steps Timeline -->
      ${renderComponent($$result2, "ProcessStepsTimeline", ProcessStepsTimeline, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/our-story/ProcessStepsTimeline.vue", "client:component-export": "default" })}

      <!-- CTA Section -->
      ${renderComponent($$result2, "CTASection", CTASection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/our-story/CTASection.vue", "client:component-export": "default" })}
    </main>

    ${renderComponent($$result2, "CommonFooter", CommonFooter, { variant: "complex" })}
    ${renderComponent($$result2, "WhatsAppFloatingButton", WhatsAppFloatingButton, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/common/WhatsAppFloatingButton.vue", "client:component-export": "default" })}
  </div>
` })}`;
}, "/workspaces/chen-xiang/src/pages/our-story.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/our-story.astro";
const $$url = "/our-story.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$OurStory,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
