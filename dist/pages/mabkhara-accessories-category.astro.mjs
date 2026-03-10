import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { _ as _export_sfc, B as Button, S as SafeIcon, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { W as WhatsAppFloatingButton } from "../WhatsAppFloatingButton.BvsIxmp4.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { P as PRODUCT_CATEGORIES, a as PRODUCT_BADGES, g as getProductsByCategory } from "../products.ZiwpglYo.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
/* empty css                                                 */
import { A as AccordionTrigger, a as AccordionItem, b as AccordionContent, c as Accordion } from "../AccordionTrigger.DZr2FGXC.js";
import { g as getFaqsByCategory } from "../faqs.Cc0HTa3I.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$4 = defineComponent({ __name: "HeroSection", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), categoryData = PRODUCT_CATEGORIES.mabkhara_accessory;
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, categoryData, get Button() {
    return Button;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[500px] md:h-[600px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/mabkhara-accessories-category/HeroSection.vue", "data-source-line-start": "21", "data-source-line-end": "78" }))} data-v-7ce2f0c4><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url('${$setup.categoryData.heroImage}')`, backgroundPosition: "center" })}" data-source-file="src/components/mabkhara-accessories-category/HeroSection.vue" data-source-line-start="23" data-source-line-end="32" data-v-7ce2f0c4><div class="absolute inset-0 bg-black/30" data-source-file="src/components/mabkhara-accessories-category/HeroSection.vue" data-source-line-start="31" data-source-line-end="31" data-v-7ce2f0c4></div></div><div class="relative h-full flex flex-col items-center justify-center px-4 md:px-8" data-source-file="src/components/mabkhara-accessories-category/HeroSection.vue" data-source-line-start="35" data-source-line-end="77" data-v-7ce2f0c4><div class="text-center max-w-2xl mx-auto" data-source-file="src/components/mabkhara-accessories-category/HeroSection.vue" data-source-line-start="36" data-source-line-end="76" data-v-7ce2f0c4><h1 class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700"])}" data-source-file="src/components/mabkhara-accessories-category/HeroSection.vue" data-source-line-start="38" data-source-line-end="43" data-v-7ce2f0c4>${ssrInterpolate($setup.categoryData.title_ar)}</h1><p class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "text-lg md:text-xl text-white/90 mb-8 transition-all duration-700 delay-100"])}" data-source-file="src/components/mabkhara-accessories-category/HeroSection.vue" data-source-line-start="46" data-source-line-end="51" data-v-7ce2f0c4>${ssrInterpolate($setup.categoryData.heroSubtitle_ar)}</p><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200"])}" data-source-file="src/components/mabkhara-accessories-category/HeroSection.vue" data-source-line-start="54" data-source-line-end="75" data-v-7ce2f0c4>`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-white font-semibold", as: "a", href: "./mabkhara-accessories-category.html", "data-source-file": "src/components/mabkhara-accessories-category/HeroSection.vue", "data-source-line-start": "58", "data-source-line-end": "65" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" استكشف المجموعة ");
    else return [createTextVNode(" استكشف المجموعة ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", class: "border-white text-white hover:bg-white/10 font-semibold", as: "a", href: "./help-center.html", "data-source-file": "src/components/mabkhara-accessories-category/HeroSection.vue", "data-source-line-start": "66", "data-source-line-end": "74" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" تعرّف على الاستخدام ");
    else return [createTextVNode(" تعرّف على الاستخدام ")];
  }), _: 1 }, _parent)), _push("</div></div></div></section>");
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/mabkhara-accessories-category/HeroSection.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const HeroSection = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-7ce2f0c4"]]);
const _sfc_main$3 = defineComponent({ __name: "USPSection", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), categoryData = PRODUCT_CATEGORIES.mabkhara_accessory;
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, categoryData, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-12 md:py-16 px-4 md:px-8 bg-background" }, _attrs, { "data-source-file": "src/components/mabkhara-accessories-category/USPSection.vue", "data-source-line-start": "21", "data-source-line-end": "58" }))}><div class="container mx-auto" data-source-file="src/components/mabkhara-accessories-category/USPSection.vue" data-source-line-start="22" data-source-line-end="57"><h2 class="text-3xl md:text-4xl font-bold text-foreground text-center mb-12" data-source-file="src/components/mabkhara-accessories-category/USPSection.vue" data-source-line-start="24" data-source-line-end="26"> لماذا تختار منتجاتنا؟ </h2><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" data-source-file="src/components/mabkhara-accessories-category/USPSection.vue" data-source-line-start="29" data-source-line-end="56"><!--[-->`), ssrRenderList($setup.categoryData.usps, (usp, index) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "flex flex-col items-center text-center p-6 rounded-lg border border-border/20 bg-card transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: $setup.isClient ? `${index * 100}ms` : "0ms" })}" data-source-file="src/components/mabkhara-accessories-category/USPSection.vue" data-source-line-start="30" data-source-line-end="55"><div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4" data-source-file="src/components/mabkhara-accessories-category/USPSection.vue" data-source-line-start="38" data-source-line-end="44">`), _push(ssrRenderComponent($setup.SafeIcon, { name: usp.iconName, size: 32, class: "text-accent", "data-source-file": "src/components/mabkhara-accessories-category/USPSection.vue", "data-source-line-start": "39", "data-source-line-end": "43" }, null, _parent)), _push(`</div><h3 class="text-lg font-semibold text-foreground mb-2" data-source-file="src/components/mabkhara-accessories-category/USPSection.vue" data-source-line-start="47" data-source-line-end="49">${ssrInterpolate(usp.title_ar)}</h3><p class="text-sm text-muted-foreground" data-source-file="src/components/mabkhara-accessories-category/USPSection.vue" data-source-line-start="52" data-source-line-end="54">${ssrInterpolate(usp.title_en)}</p></div>`);
  }), _push("<!--]--></div></div></section>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/mabkhara-accessories-category/USPSection.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const USPSection = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "ProductCard", props: { product: {}, isClient: { type: Boolean } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { get PRODUCT_BADGES() {
    return PRODUCT_BADGES;
  }, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: ["rounded-lg border border-border/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-card", $props.isClient ? "hover:shadow-card" : ""] }, _attrs, { "data-source-file": "src/components/mabkhara-accessories-category/ProductCard.vue", "data-source-line-start": "17", "data-source-line-end": "91" }))}><div class="relative w-full h-64 md:h-72 overflow-hidden bg-muted" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="22" data-source-line-end="42"><img${ssrRenderAttr("src", $props.product.imageUrl)}${ssrRenderAttr("alt", $props.product.name_ar)} class="${ssrRenderClass([$props.isClient ? "hover:scale-105" : "", "w-full h-full object-cover transition-transform duration-300"])}" loading="lazy" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="23" data-source-line-end="29"><div class="absolute top-3 right-3 flex flex-col gap-2" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="32" data-source-line-end="41"><!--[-->`), ssrRenderList($props.product.badges, (badgeId) => {
    _push(`<div class="px-3 py-1 rounded-full text-xs font-semibold text-white" style="${ssrRenderStyle({ backgroundColor: $setup.PRODUCT_BADGES[badgeId].color })}" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="33" data-source-line-end="40">${ssrInterpolate($setup.PRODUCT_BADGES[badgeId].label_ar)}</div>`);
  }), _push(`<!--]--></div></div><div class="p-4 md:p-6" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="45" data-source-line-end="90"><h3 class="text-lg font-semibold text-foreground mb-2 line-clamp-2" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="47" data-source-line-end="49">${ssrInterpolate($props.product.name_ar)}</h3><p class="text-sm text-muted-foreground mb-4 line-clamp-1" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="52" data-source-line-end="54">${ssrInterpolate($props.product.name_en)}</p><div class="mb-4" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="57" data-source-line-end="64"><p class="text-lg font-bold text-primary" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="58" data-source-line-end="60">${ssrInterpolate($props.product.priceRange_ar)}</p><p class="text-xs text-muted-foreground" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="61" data-source-line-end="63">${ssrInterpolate($props.product.priceRange_en)}</p></div><div class="flex gap-2" data-source-file="src/components/mabkhara-accessories-category/ProductCard.vue" data-source-line-start="67" data-source-line-end="89">`), _push(ssrRenderComponent($setup.Button, { variant: "default", size: "sm", class: "flex-1 bg-primary hover:bg-primary/90", as: "a", href: $props.product.detailUrl, "data-source-file": "src/components/mabkhara-accessories-category/ProductCard.vue", "data-source-line-start": "68", "data-source-line-end": "76" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" عرض التفاصيل ");
    else return [createTextVNode(" عرض التفاصيل ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { variant: "outline", size: "sm", class: "flex-1", as: "a", href: $props.product.whatsappInquiryUrl_ar, target: "_blank", rel: "noopener noreferrer", "data-source-file": "src/components/mabkhara-accessories-category/ProductCard.vue", "data-source-line-start": "77", "data-source-line-end": "88" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 16, class: "mr-1", "data-source-file": "src/components/mabkhara-accessories-category/ProductCard.vue", "data-source-line-start": "86", "data-source-line-end": "86" }, null, _parent2, _scopeId)), _push2(" واتساب ");
    else return [createVNode($setup.SafeIcon, { name: "MessageCircle", size: 16, class: "mr-1", "data-source-file": "src/components/mabkhara-accessories-category/ProductCard.vue", "data-source-line-start": "86", "data-source-line-end": "86" }), createTextVNode(" واتساب ")];
  }), _: 1 }, _parent)), _push("</div></div></div>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/mabkhara-accessories-category/ProductCard.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductCard = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "ProductGrid", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), products = getProductsByCategory("mabkhara_accessory");
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, products, ProductCard };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-12 md:py-16 px-4 md:px-8 bg-background" }, _attrs, { "data-source-file": "src/components/mabkhara-accessories-category/ProductGrid.vue", "data-source-line-start": "21", "data-source-line-end": "51" }))}><div class="container mx-auto" data-source-file="src/components/mabkhara-accessories-category/ProductGrid.vue" data-source-line-start="22" data-source-line-end="50"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-12" data-source-file="src/components/mabkhara-accessories-category/ProductGrid.vue" data-source-line-start="24" data-source-line-end="26"> منتجاتنا </h2><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-source-file="src/components/mabkhara-accessories-category/ProductGrid.vue" data-source-line-start="29" data-source-line-end="42"><!--[-->`), ssrRenderList($setup.products, (product, index) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: $setup.isClient ? `${index * 100}ms` : "0ms" })}" data-source-file="src/components/mabkhara-accessories-category/ProductGrid.vue" data-source-line-start="30" data-source-line-end="41">`), _push(ssrRenderComponent($setup.ProductCard, { product, "is-client": $setup.isClient, "data-source-file": "src/components/mabkhara-accessories-category/ProductGrid.vue", "data-source-line-start": "37", "data-source-line-end": "40" }, null, _parent)), _push("</div>");
  }), _push("<!--]--></div>"), $setup.products.length === 0 ? _push('<div class="text-center py-12" data-source-file="src/components/mabkhara-accessories-category/ProductGrid.vue" data-source-line-start="45" data-source-line-end="49"><p class="text-muted-foreground text-lg" data-source-file="src/components/mabkhara-accessories-category/ProductGrid.vue" data-source-line-start="46" data-source-line-end="48"> لا توجد منتجات متاحة حالياً </p></div>') : _push("<!---->"), _push("</div></section>");
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/mabkhara-accessories-category/ProductGrid.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductGrid = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "FAQSection", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), faqs = getFaqsByCategory("general", 4);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, faqs, get Accordion() {
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
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-12 md:py-16 px-4 md:px-8 bg-muted/30" }, _attrs, { "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "26", "data-source-line-end": "72" }))}><div class="container mx-auto max-w-3xl" data-source-file="src/components/mabkhara-accessories-category/FAQSection.vue" data-source-line-start="27" data-source-line-end="71"><h2 class="text-3xl md:text-4xl font-bold text-foreground text-center mb-12" data-source-file="src/components/mabkhara-accessories-category/FAQSection.vue" data-source-line-start="29" data-source-line-end="31"> أسئلة شائعة </h2>`), _push(ssrRenderComponent($setup.Accordion, { type: "single", collapsible: "", class: "w-full", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "34", "data-source-line-end": "57" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2("<!--[-->"), ssrRenderList($setup.faqs, (faq, index) => {
      _push2(ssrRenderComponent($setup.AccordionItem, { key: faq.id, value: faq.id, class: ["border-b border-border/20 transition-all duration-500", $setup.isClient ? "opacity-100" : "opacity-0"], style: { transitionDelay: $setup.isClient ? `${index * 50}ms` : "0ms" }, "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "35", "data-source-line-end": "56" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(ssrRenderComponent($setup.AccordionTrigger, { class: "text-right hover:text-primary transition-colors py-4", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "43", "data-source-line-end": "47" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`<span class="text-lg font-semibold text-foreground" data-source-file="src/components/mabkhara-accessories-category/FAQSection.vue" data-source-line-start="44" data-source-line-end="46"${_scopeId3}>${ssrInterpolate(faq.question_ar)}</span>`);
          else return [createVNode("span", { class: "text-lg font-semibold text-foreground", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "44", "data-source-line-end": "46" }, toDisplayString(faq.question_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.AccordionContent, { class: "text-muted-foreground pb-4", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "48", "data-source-line-end": "55" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`<p class="text-base leading-relaxed" data-source-file="src/components/mabkhara-accessories-category/FAQSection.vue" data-source-line-start="49" data-source-line-end="51"${_scopeId3}>${ssrInterpolate(faq.answer_ar)}</p><p class="text-sm text-muted-foreground mt-2 italic" data-source-file="src/components/mabkhara-accessories-category/FAQSection.vue" data-source-line-start="52" data-source-line-end="54"${_scopeId3}>${ssrInterpolate(faq.answer_en)}</p>`);
          else return [createVNode("p", { class: "text-base leading-relaxed", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "49", "data-source-line-end": "51" }, toDisplayString(faq.answer_ar), 1), createVNode("p", { class: "text-sm text-muted-foreground mt-2 italic", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "52", "data-source-line-end": "54" }, toDisplayString(faq.answer_en), 1)];
        }), _: 2 }, _parent3, _scopeId2));
        else return [createVNode($setup.AccordionTrigger, { class: "text-right hover:text-primary transition-colors py-4", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "43", "data-source-line-end": "47" }, { default: withCtx(() => [createVNode("span", { class: "text-lg font-semibold text-foreground", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "44", "data-source-line-end": "46" }, toDisplayString(faq.question_ar), 1)]), _: 2 }, 1024), createVNode($setup.AccordionContent, { class: "text-muted-foreground pb-4", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "48", "data-source-line-end": "55" }, { default: withCtx(() => [createVNode("p", { class: "text-base leading-relaxed", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "49", "data-source-line-end": "51" }, toDisplayString(faq.answer_ar), 1), createVNode("p", { class: "text-sm text-muted-foreground mt-2 italic", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "52", "data-source-line-end": "54" }, toDisplayString(faq.answer_en), 1)]), _: 2 }, 1024)];
      }), _: 2 }, _parent2, _scopeId));
    }), _push2("<!--]-->");
    else return [(openBlock(true), createBlock(Fragment, null, renderList($setup.faqs, (faq, index) => (openBlock(), createBlock($setup.AccordionItem, { key: faq.id, value: faq.id, class: ["border-b border-border/20 transition-all duration-500", $setup.isClient ? "opacity-100" : "opacity-0"], style: { transitionDelay: $setup.isClient ? `${index * 50}ms` : "0ms" }, "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "35", "data-source-line-end": "56" }, { default: withCtx(() => [createVNode($setup.AccordionTrigger, { class: "text-right hover:text-primary transition-colors py-4", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "43", "data-source-line-end": "47" }, { default: withCtx(() => [createVNode("span", { class: "text-lg font-semibold text-foreground", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "44", "data-source-line-end": "46" }, toDisplayString(faq.question_ar), 1)]), _: 2 }, 1024), createVNode($setup.AccordionContent, { class: "text-muted-foreground pb-4", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "48", "data-source-line-end": "55" }, { default: withCtx(() => [createVNode("p", { class: "text-base leading-relaxed", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "49", "data-source-line-end": "51" }, toDisplayString(faq.answer_ar), 1), createVNode("p", { class: "text-sm text-muted-foreground mt-2 italic", "data-source-file": "src/components/mabkhara-accessories-category/FAQSection.vue", "data-source-line-start": "52", "data-source-line-end": "54" }, toDisplayString(faq.answer_en), 1)]), _: 2 }, 1024)]), _: 2 }, 1032, ["value", "class", "style"]))), 128))];
  }), _: 1 }, _parent)), _push('<div class="text-center mt-12" data-source-file="src/components/mabkhara-accessories-category/FAQSection.vue" data-source-line-start="60" data-source-line-end="70"><p class="text-muted-foreground mb-4" data-source-file="src/components/mabkhara-accessories-category/FAQSection.vue" data-source-line-start="61" data-source-line-end="63"> هل لديك أسئلة أخرى؟ </p><a href="./help-center.html" class="inline-block px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors" data-source-file="src/components/mabkhara-accessories-category/FAQSection.vue" data-source-line-start="64" data-source-line-end="69"> زيارة مركز المساعدة </a></div></div></section>');
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/mabkhara-accessories-category/FAQSection.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FAQSection = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const $$MabkharaAccessoriesCategory = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "المباخر والملحقات | نفحة NAFHA" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/mabkhara-accessories-category.astro" data-source-line-start="14" data-source-line-end="33" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/mabkhara-accessories-category.astro" data-source-line-start="17" data-source-line-end="29" class="flex-1">
      <!-- Hero Section -->
      ${renderComponent($$result2, "HeroSection", HeroSection, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/mabkhara-accessories-category/HeroSection.vue", "client:component-export": "default" })}
      
      <!-- USP Section -->
      ${renderComponent($$result2, "USPSection", USPSection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/mabkhara-accessories-category/USPSection.vue", "client:component-export": "default" })}
      
      <!-- Product Grid Section -->
      ${renderComponent($$result2, "ProductGrid", ProductGrid, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/mabkhara-accessories-category/ProductGrid.vue", "client:component-export": "default" })}
      
      <!-- FAQ Section -->
      ${renderComponent($$result2, "FAQSection", FAQSection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/mabkhara-accessories-category/FAQSection.vue", "client:component-export": "default" })}
    </main>
    
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { variant: "complex" })}
    ${renderComponent($$result2, "WhatsAppFloatingButton", WhatsAppFloatingButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/WhatsAppFloatingButton.vue", "client:component-export": "default" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/mabkhara-accessories-category.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/mabkhara-accessories-category.astro";
const $$url = "/mabkhara-accessories-category.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$MabkharaAccessoriesCategory,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
