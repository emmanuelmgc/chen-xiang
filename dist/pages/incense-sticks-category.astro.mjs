import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { S as SafeIcon, _ as _export_sfc, B as Button, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { W as WhatsAppFloatingButton } from "../WhatsAppFloatingButton.BvsIxmp4.js";
import { defineComponent, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, ref, toDisplayString, computed, openBlock, createBlock, createCommentVNode, Fragment, renderList, onMounted } from "vue";
import { a as PRODUCT_BADGES, g as getProductsByCategory, P as PRODUCT_CATEGORIES } from "../products.ZiwpglYo.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
/* empty css                                           */
import { B as Badge } from "../index.C1v01KQ3.js";
import { g as getFaqsByCategory } from "../faqs.Cc0HTa3I.js";
import { A as AccordionTrigger, a as AccordionItem, b as AccordionContent, c as Accordion } from "../AccordionTrigger.DZr2FGXC.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$5 = defineComponent({ __name: "HeroBanner", props: { categoryData: {}, isClient: { type: Boolean } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[400px] md:h-[500px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/incense-sticks-category/HeroBanner.vue", "data-source-line-start": "16", "data-source-line-end": "68" }))} data-v-87eed018><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url('${$props.categoryData.heroImage}')` })}" data-source-file="src/components/incense-sticks-category/HeroBanner.vue" data-source-line-start="18" data-source-line-end="23" data-v-87eed018><div class="absolute inset-0 bg-black/30" data-source-file="src/components/incense-sticks-category/HeroBanner.vue" data-source-line-start="22" data-source-line-end="22" data-v-87eed018></div></div><div class="relative h-full flex flex-col items-center justify-center px-4 text-center" data-source-file="src/components/incense-sticks-category/HeroBanner.vue" data-source-line-start="26" data-source-line-end="67" data-v-87eed018><div class="${ssrRenderClass([$props.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "space-y-4 max-w-2xl transition-all duration-700"])}" data-source-file="src/components/incense-sticks-category/HeroBanner.vue" data-source-line-start="27" data-source-line-end="66" data-v-87eed018><h1 class="text-4xl md:text-5xl font-bold text-white leading-tight" data-source-file="src/components/incense-sticks-category/HeroBanner.vue" data-source-line-start="32" data-source-line-end="34" data-v-87eed018>${ssrInterpolate($props.categoryData.title_ar)}</h1><p class="text-lg md:text-xl text-white/90 font-light" data-source-file="src/components/incense-sticks-category/HeroBanner.vue" data-source-line-start="37" data-source-line-end="39" data-v-87eed018>${ssrInterpolate($props.categoryData.heroSubtitle_ar)}</p><div class="flex flex-col sm:flex-row gap-4 justify-center pt-6" data-source-file="src/components/incense-sticks-category/HeroBanner.vue" data-source-line-start="42" data-source-line-end="65" data-v-87eed018>`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground font-semibold", as: "a", href: "./collections.html", "data-source-file": "src/components/incense-sticks-category/HeroBanner.vue", "data-source-line-start": "44", "data-source-line-end": "52" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" استكشف المجموعة "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/HeroBanner.vue", "data-source-line-start": "51", "data-source-line-end": "51" }, null, _parent2, _scopeId));
    else return [createTextVNode(" استكشف المجموعة "), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/HeroBanner.vue", "data-source-line-start": "51", "data-source-line-end": "51" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", class: "border-white text-white hover:bg-white/10", as: "a", href: "./contact-whatsapp-prefill.html", "data-source-file": "src/components/incense-sticks-category/HeroBanner.vue", "data-source-line-start": "55", "data-source-line-end": "64" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" تواصل عبر واتساب "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 20, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/HeroBanner.vue", "data-source-line-start": "63", "data-source-line-end": "63" }, null, _parent2, _scopeId));
    else return [createTextVNode(" تواصل عبر واتساب "), createVNode($setup.SafeIcon, { name: "MessageCircle", size: 20, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/HeroBanner.vue", "data-source-line-start": "63", "data-source-line-end": "63" })];
  }), _: 1 }, _parent)), _push("</div></div></div></div>");
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/incense-sticks-category/HeroBanner.vue"), _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const HeroBanner = _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-87eed018"]]);
const _sfc_main$4 = defineComponent({ __name: "ProductValueProposition", props: { usps: {}, isClient: { type: Boolean } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-12 md:py-16 bg-background border-b border-border/20" }, _attrs, { "data-source-file": "src/components/incense-sticks-category/ProductValueProposition.vue", "data-source-line-start": "15", "data-source-line-end": "41" }))}><div class="container mx-auto px-4" data-source-file="src/components/incense-sticks-category/ProductValueProposition.vue" data-source-line-start="16" data-source-line-end="40"><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" data-source-file="src/components/incense-sticks-category/ProductValueProposition.vue" data-source-line-start="17" data-source-line-end="39"><!--[-->`), ssrRenderList($props.usps, (usp, index) => {
    _push(`<div class="${ssrRenderClass([$props.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "flex flex-col items-center text-center gap-4 p-6 rounded-lg border border-border/20 bg-card transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: $props.isClient ? `${index * 100}ms` : "0ms" })}" data-source-file="src/components/incense-sticks-category/ProductValueProposition.vue" data-source-line-start="18" data-source-line-end="38"><div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center" data-source-file="src/components/incense-sticks-category/ProductValueProposition.vue" data-source-line-start="26" data-source-line-end="32">`), _push(ssrRenderComponent($setup.SafeIcon, { name: usp.iconName, size: 32, class: "text-accent", "data-source-file": "src/components/incense-sticks-category/ProductValueProposition.vue", "data-source-line-start": "27", "data-source-line-end": "31" }, null, _parent)), _push(`</div><h3 class="text-lg font-semibold text-foreground" data-source-file="src/components/incense-sticks-category/ProductValueProposition.vue" data-source-line-start="35" data-source-line-end="37">${ssrInterpolate(usp.title_ar)}</h3></div>`);
  }), _push("<!--]--></div></div></section>");
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/incense-sticks-category/ProductValueProposition.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProductValueProposition = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({ __name: "ProductCard", props: { product: {}, isClient: { type: Boolean }, animationDelay: { default: 0 } }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, isHovered = ref(false), __returned__ = { props, isHovered, get PRODUCT_BADGES() {
    return PRODUCT_BADGES;
  }, get Button() {
    return Button;
  }, get Badge() {
    return Badge;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: ["group rounded-lg border border-border/30 bg-card overflow-hidden transition-all duration-500 hover:shadow-card", $props.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"], style: { transitionDelay: $props.isClient ? `${$props.animationDelay}ms` : "0ms" } }, _attrs, { "data-source-file": "src/components/incense-sticks-category/ProductCard.vue", "data-source-line-start": "24", "data-source-line-end": "99" }))}><div class="relative w-full h-64 overflow-hidden bg-muted" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="32" data-source-line-end="51"><img${ssrRenderAttr("src", $props.product.imageUrl)}${ssrRenderAttr("alt", $props.product.name_ar)} class="${ssrRenderClass([$setup.isHovered && $props.isClient ? "scale-105" : "scale-100", "w-full h-full object-cover transition-transform duration-300"])}" loading="lazy" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="33" data-source-line-end="39"><div class="absolute top-3 right-3 flex flex-col gap-2" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="42" data-source-line-end="50"><!--[-->`), ssrRenderList($props.product.badges, (badgeId) => {
    _push(ssrRenderComponent($setup.Badge, { key: badgeId, class: "bg-accent text-accent-foreground text-xs font-semibold px-2 py-1", "data-source-file": "src/components/incense-sticks-category/ProductCard.vue", "data-source-line-start": "43", "data-source-line-end": "49" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(`${ssrInterpolate($setup.PRODUCT_BADGES[badgeId].label_ar)}`);
      else return [createTextVNode(toDisplayString($setup.PRODUCT_BADGES[badgeId].label_ar), 1)];
    }), _: 2 }, _parent));
  }), _push(`<!--]--></div></div><div class="p-4 md:p-6 flex flex-col gap-4" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="54" data-source-line-end="98"><h3 class="text-lg font-semibold text-foreground line-clamp-2" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="56" data-source-line-end="58">${ssrInterpolate($props.product.name_ar)}</h3><div class="flex flex-col gap-1" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="61" data-source-line-end="68"><p class="text-sm font-medium text-foreground" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="62" data-source-line-end="64">${ssrInterpolate($props.product.priceRange_ar)}</p><p class="text-xs text-muted-foreground" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="65" data-source-line-end="67"> ابتداءً من ... مع تمارا/تابي </p></div><div class="flex flex-col gap-2 pt-2" data-source-file="src/components/incense-sticks-category/ProductCard.vue" data-source-line-start="71" data-source-line-end="97">`), _push(ssrRenderComponent($setup.Button, { variant: "default", size: "sm", class: "w-full bg-primary hover:bg-primary/90", as: "a", href: $props.product.detailUrl, "data-source-file": "src/components/incense-sticks-category/ProductCard.vue", "data-source-line-start": "73", "data-source-line-end": "82" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" عرض التفاصيل "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 16, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/ProductCard.vue", "data-source-line-start": "81", "data-source-line-end": "81" }, null, _parent2, _scopeId));
    else return [createTextVNode(" عرض التفاصيل "), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 16, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/ProductCard.vue", "data-source-line-start": "81", "data-source-line-end": "81" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { variant: "outline", size: "sm", class: "w-full border-accent text-accent hover:bg-accent/10", as: "a", href: $props.product.whatsappInquiryUrl_ar, target: "_blank", rel: "noopener noreferrer", "data-source-file": "src/components/incense-sticks-category/ProductCard.vue", "data-source-line-start": "85", "data-source-line-end": "96" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" استفسر عبر واتساب "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 16, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/ProductCard.vue", "data-source-line-start": "95", "data-source-line-end": "95" }, null, _parent2, _scopeId));
    else return [createTextVNode(" استفسر عبر واتساب "), createVNode($setup.SafeIcon, { name: "MessageCircle", size: 16, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/ProductCard.vue", "data-source-line-start": "95", "data-source-line-end": "95" })];
  }), _: 1 }, _parent)), _push("</div></div></div>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/incense-sticks-category/ProductCard.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductCard = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "ProductGrid", props: { category: {}, isClient: { type: Boolean } }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, products = computed(() => getProductsByCategory(props.category)), __returned__ = { props, products, ProductCard };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-12 md:py-16 bg-background" }, _attrs, { "data-source-file": "src/components/incense-sticks-category/ProductGrid.vue", "data-source-line-start": "19", "data-source-line-end": "49" }))}><div class="container mx-auto px-4" data-source-file="src/components/incense-sticks-category/ProductGrid.vue" data-source-line-start="20" data-source-line-end="48"><div class="mb-12" data-source-file="src/components/incense-sticks-category/ProductGrid.vue" data-source-line-start="22" data-source-line-end="29"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2" data-source-file="src/components/incense-sticks-category/ProductGrid.vue" data-source-line-start="23" data-source-line-end="25"> منتجاتنا </h2><p class="text-muted-foreground text-lg" data-source-file="src/components/incense-sticks-category/ProductGrid.vue" data-source-line-start="26" data-source-line-end="28"> اختر من مجموعتنا المختارة من أعواد البخور منخفضة الدخان </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-source-file="src/components/incense-sticks-category/ProductGrid.vue" data-source-line-start="32" data-source-line-end="40"><!--[-->`), ssrRenderList($setup.products, (product, index) => {
    _push(ssrRenderComponent($setup.ProductCard, { key: product.id, product, "is-client": $props.isClient, "animation-delay": index * 50, "data-source-file": "src/components/incense-sticks-category/ProductGrid.vue", "data-source-line-start": "33", "data-source-line-end": "39" }, null, _parent));
  }), _push("<!--]--></div>"), $setup.products.length === 0 ? _push('<div class="text-center py-12" data-source-file="src/components/incense-sticks-category/ProductGrid.vue" data-source-line-start="43" data-source-line-end="47"><p class="text-muted-foreground text-lg" data-source-file="src/components/incense-sticks-category/ProductGrid.vue" data-source-line-start="44" data-source-line-end="46"> لا توجد منتجات متاحة حالياً </p></div>') : _push("<!---->"), _push("</div></section>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/incense-sticks-category/ProductGrid.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductGrid = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "FAQSection", props: { category: {}, isClient: { type: Boolean } }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, faqs = getFaqsByCategory(props.category, 3), __returned__ = { props, faqs, get Accordion() {
    return Accordion;
  }, get AccordionContent() {
    return AccordionContent;
  }, get AccordionItem() {
    return AccordionItem;
  }, get AccordionTrigger() {
    return AccordionTrigger;
  }, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "w-full py-12 md:py-16 bg-card border-t border-border/20" }, _attrs, { "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "25", "data-source-line-end": "77" }))}><div class="container mx-auto px-4" data-source-file="src/components/incense-sticks-category/FAQSection.vue" data-source-line-start="26" data-source-line-end="76"><div class="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4" data-source-file="src/components/incense-sticks-category/FAQSection.vue" data-source-line-start="28" data-source-line-end="48"><div data-source-file="src/components/incense-sticks-category/FAQSection.vue" data-source-line-start="29" data-source-line-end="36"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2" data-source-file="src/components/incense-sticks-category/FAQSection.vue" data-source-line-start="30" data-source-line-end="32"> أسئلة شائعة </h2><p class="text-muted-foreground" data-source-file="src/components/incense-sticks-category/FAQSection.vue" data-source-line-start="33" data-source-line-end="35"> إجابات سريعة على الأسئلة الشائعة حول أعواد البخور </p></div>`), _push(ssrRenderComponent($setup.Button, { variant: "outline", as: "a", href: "./help-center.html", class: "whitespace-nowrap", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "39", "data-source-line-end": "47" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" عرض جميع الأسئلة "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 16, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "46", "data-source-line-end": "46" }, null, _parent2, _scopeId));
    else return [createTextVNode(" عرض جميع الأسئلة "), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 16, class: "mr-2", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "46", "data-source-line-end": "46" })];
  }), _: 1 }, _parent)), _push("</div>"), $setup.faqs.length > 0 ? _push(ssrRenderComponent($setup.AccordionTrigger, { class: "text-lg font-semibold text-foreground hover:text-primary transition-colors py-4", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "51", "data-source-line-end": "56" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(`${ssrInterpolate($setup.faqs[0].question_ar)}`);
    else return [createTextVNode(toDisplayString($setup.faqs[0].question_ar), 1)];
  }), _: 1 }, _parent)) : _push("<!---->"), _push('<div class="max-w-3xl" data-source-file="src/components/incense-sticks-category/FAQSection.vue" data-source-line-start="59" data-source-line-end="75">'), _push(ssrRenderComponent($setup.Accordion, { type: "single", collapsible: "", class: "w-full", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "60", "data-source-line-end": "74" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2("<!--[-->"), ssrRenderList($setup.faqs, (faq, index) => {
      _push2(ssrRenderComponent($setup.AccordionItem, { key: faq.id, value: `faq-${index}`, class: "border-b border-border/20", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "61", "data-source-line-end": "73" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) index > 0 ? _push3(ssrRenderComponent($setup.AccordionTrigger, { class: "text-lg font-semibold text-foreground hover:text-primary transition-colors py-4", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "67", "data-source-line-end": "69" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`${ssrInterpolate(faq.question_ar)}`);
          else return [createTextVNode(toDisplayString(faq.question_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2)) : _push3("<!---->"), _push3(ssrRenderComponent($setup.AccordionContent, { class: "text-muted-foreground leading-relaxed pb-4", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "70", "data-source-line-end": "72" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`${ssrInterpolate(faq.answer_ar)}`);
          else return [createTextVNode(toDisplayString(faq.answer_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2));
        else return [index > 0 ? (openBlock(), createBlock($setup.AccordionTrigger, { key: 0, class: "text-lg font-semibold text-foreground hover:text-primary transition-colors py-4", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "67", "data-source-line-end": "69" }, { default: withCtx(() => [createTextVNode(toDisplayString(faq.question_ar), 1)]), _: 2 }, 1024)) : createCommentVNode("", true), createVNode($setup.AccordionContent, { class: "text-muted-foreground leading-relaxed pb-4", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "70", "data-source-line-end": "72" }, { default: withCtx(() => [createTextVNode(toDisplayString(faq.answer_ar), 1)]), _: 2 }, 1024)];
      }), _: 2 }, _parent2, _scopeId));
    }), _push2("<!--]-->");
    else return [(openBlock(true), createBlock(Fragment, null, renderList($setup.faqs, (faq, index) => (openBlock(), createBlock($setup.AccordionItem, { key: faq.id, value: `faq-${index}`, class: "border-b border-border/20", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "61", "data-source-line-end": "73" }, { default: withCtx(() => [index > 0 ? (openBlock(), createBlock($setup.AccordionTrigger, { key: 0, class: "text-lg font-semibold text-foreground hover:text-primary transition-colors py-4", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "67", "data-source-line-end": "69" }, { default: withCtx(() => [createTextVNode(toDisplayString(faq.question_ar), 1)]), _: 2 }, 1024)) : createCommentVNode("", true), createVNode($setup.AccordionContent, { class: "text-muted-foreground leading-relaxed pb-4", "data-source-file": "src/components/incense-sticks-category/FAQSection.vue", "data-source-line-start": "70", "data-source-line-end": "72" }, { default: withCtx(() => [createTextVNode(toDisplayString(faq.answer_ar), 1)]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"]))), 128))];
  }), _: 1 }, _parent)), _push("</div></div></section>");
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/incense-sticks-category/FAQSection.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FAQSection = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "CategoryPageContent", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), categoryData = PRODUCT_CATEGORIES.incense_stick;
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, categoryData, HeroBanner, ProductValueProposition, ProductGrid, FAQSection };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full" }, _attrs, { "data-source-file": "src/components/incense-sticks-category/CategoryPageContent.vue", "data-source-line-start": "26", "data-source-line-end": "50" }))}>`), _push(ssrRenderComponent($setup.HeroBanner, { "category-data": $setup.categoryData, "is-client": $setup.isClient, "data-source-file": "src/components/incense-sticks-category/CategoryPageContent.vue", "data-source-line-start": "28", "data-source-line-end": "31" }, null, _parent)), _push(ssrRenderComponent($setup.ProductValueProposition, { usps: $setup.categoryData.usps, "is-client": $setup.isClient, "data-source-file": "src/components/incense-sticks-category/CategoryPageContent.vue", "data-source-line-start": "34", "data-source-line-end": "37" }, null, _parent)), _push(ssrRenderComponent($setup.ProductGrid, { category: "incense_stick", "is-client": $setup.isClient, "data-source-file": "src/components/incense-sticks-category/CategoryPageContent.vue", "data-source-line-start": "40", "data-source-line-end": "43" }, null, _parent)), _push(ssrRenderComponent($setup.FAQSection, { category: "incense", "is-client": $setup.isClient, "data-source-file": "src/components/incense-sticks-category/CategoryPageContent.vue", "data-source-line-start": "46", "data-source-line-end": "49" }, null, _parent)), _push("</div>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/incense-sticks-category/CategoryPageContent.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CategoryPageContent = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const $$IncenseSticksCategory = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "أعواد البخور منخفضة الدخان | نفحة NAFHA", description: "اكتشف مجموعتنا من أعواد البخور منخفضة الدخان المصممة للمساحات الحضرية والصغيرة. رائحة نقية وحرق موحد." }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/incense-sticks-category.astro" data-source-line-start="14" data-source-line-end="23" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/incense-sticks-category.astro" data-source-line-start="17" data-source-line-end="19" class="flex-1">
      ${renderComponent($$result2, "CategoryPageContent", CategoryPageContent, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/incense-sticks-category/CategoryPageContent.vue", "client:component-export": "default" })}
    </main>
    
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { "client:idle": true, variant: "complex", "client:component-hydration": "idle", "client:component-path": "@/components/common/CommonFooter.vue", "client:component-export": "default" })}
    ${renderComponent($$result2, "WhatsAppFloatingButton", WhatsAppFloatingButton, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/common/WhatsAppFloatingButton.vue", "client:component-export": "default" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/incense-sticks-category.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/incense-sticks-category.astro";
const $$url = "/incense-sticks-category.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$IncenseSticksCategory,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
