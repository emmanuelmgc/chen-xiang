import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { S as SafeIcon, _ as _export_sfc, B as Button, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { P as PRODUCT_CATEGORIES, a as PRODUCT_BADGES, g as getProductsByCategory } from "../products.ZiwpglYo.js";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
/* empty css                                      */
import { A as AccordionTrigger, a as AccordionItem, b as AccordionContent, c as Accordion } from "../AccordionTrigger.DZr2FGXC.js";
import { g as getFaqsByCategory } from "../faqs.Cc0HTa3I.js";
import { W as WhatsAppFloatingButton } from "../WhatsAppFloatingButton.BvsIxmp4.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$5 = defineComponent({ __name: "GiftSetsCategoryHero", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), categoryData = PRODUCT_CATEGORIES.gift_set;
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, categoryData, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[400px] md:h-[500px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/gift-sets-category/GiftSetsCategoryHero.vue", "data-source-line-start": "22", "data-source-line-end": "76" }))} data-v-0218c5db><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: `url('${$setup.categoryData.heroImage}')` })}" data-source-file="src/components/gift-sets-category/GiftSetsCategoryHero.vue" data-source-line-start="24" data-source-line-end="30" data-v-0218c5db><div class="absolute inset-0 bg-black/30" data-source-file="src/components/gift-sets-category/GiftSetsCategoryHero.vue" data-source-line-start="29" data-source-line-end="29" data-v-0218c5db></div></div><div class="relative h-full flex flex-col items-center justify-center px-4 text-center" data-source-file="src/components/gift-sets-category/GiftSetsCategoryHero.vue" data-source-line-start="33" data-source-line-end="75" data-v-0218c5db><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "space-y-4 transition-all duration-700"])}" data-source-file="src/components/gift-sets-category/GiftSetsCategoryHero.vue" data-source-line-start="35" data-source-line-end="48" data-v-0218c5db><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-source-file="src/components/gift-sets-category/GiftSetsCategoryHero.vue" data-source-line-start="39" data-source-line-end="41" data-v-0218c5db>${ssrInterpolate($setup.categoryData.title_ar)}</h1><p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" data-source-file="src/components/gift-sets-category/GiftSetsCategoryHero.vue" data-source-line-start="42" data-source-line-end="44" data-v-0218c5db>${ssrInterpolate($setup.categoryData.heroSubtitle_ar)}</p><p class="text-sm md:text-base text-white/70" data-source-file="src/components/gift-sets-category/GiftSetsCategoryHero.vue" data-source-line-start="45" data-source-line-end="47" data-v-0218c5db>${ssrInterpolate($setup.categoryData.title_en)}</p></div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "flex flex-col sm:flex-row gap-4 mt-8 transition-all duration-700 delay-200"])}" data-source-file="src/components/gift-sets-category/GiftSetsCategoryHero.vue" data-source-line-start="51" data-source-line-end="74" data-v-0218c5db>`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold", as: "a", href: "./gift-sets-category.html#products", "data-source-file": "src/components/gift-sets-category/GiftSetsCategoryHero.vue", "data-source-line-start": "55", "data-source-line-end": "63" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" استكشف المجموعات "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/gift-sets-category/GiftSetsCategoryHero.vue", "data-source-line-start": "62", "data-source-line-end": "62" }, null, _parent2, _scopeId));
    else return [createTextVNode(" استكشف المجموعات "), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/gift-sets-category/GiftSetsCategoryHero.vue", "data-source-line-start": "62", "data-source-line-end": "62" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", class: "border-white text-white hover:bg-white/10", as: "a", href: "./b2b-hotels-venues.html", "data-source-file": "src/components/gift-sets-category/GiftSetsCategoryHero.vue", "data-source-line-start": "64", "data-source-line-end": "73" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" طلب مخصص للشركات "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "Gift", size: 20, class: "mr-2", "data-source-file": "src/components/gift-sets-category/GiftSetsCategoryHero.vue", "data-source-line-start": "72", "data-source-line-end": "72" }, null, _parent2, _scopeId));
    else return [createTextVNode(" طلب مخصص للشركات "), createVNode($setup.SafeIcon, { name: "Gift", size: 20, class: "mr-2", "data-source-file": "src/components/gift-sets-category/GiftSetsCategoryHero.vue", "data-source-line-start": "72", "data-source-line-end": "72" })];
  }), _: 1 }, _parent)), _push("</div></div></section>");
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gift-sets-category/GiftSetsCategoryHero.vue"), _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const GiftSetsCategoryHero = _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-0218c5db"]]);
const _sfc_main$4 = defineComponent({ __name: "ValuePropositionCards", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { categoryData: PRODUCT_CATEGORIES.gift_set, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs, { "data-source-file": "src/components/gift-sets-category/ValuePropositionCards.vue", "data-source-line-start": "10", "data-source-line-end": "46" }))}><div class="text-center space-y-2" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="12" data-source-line-end="19"><h2 class="text-3xl md:text-4xl font-bold text-foreground" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="13" data-source-line-end="15"> لماذا تختار مجموعات نفحة للهدايا؟ </h2><p class="text-lg text-muted-foreground max-w-2xl mx-auto" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="16" data-source-line-end="18"> كل مجموعة مصممة بعناية لتعكس الذوق الرفيع والاحتفاء بالمناسبات الخاصة </p></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="22" data-source-line-end="45"><!--[-->`), ssrRenderList($setup.categoryData.usps, (usp) => {
    _push('<div class="p-6 rounded-lg border border-border/30 bg-card hover:shadow-card transition-all duration-300 hover:border-primary/30" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="23" data-source-line-end="44"><div class="flex flex-col items-center text-center gap-4" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="28" data-source-line-end="43"><div class="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="30" data-source-line-end="32">'), _push(ssrRenderComponent($setup.SafeIcon, { name: usp.iconName, size: 28, class: "text-accent", "data-source-file": "src/components/gift-sets-category/ValuePropositionCards.vue", "data-source-line-start": "31", "data-source-line-end": "31" }, null, _parent)), _push(`</div><h3 class="text-lg font-bold text-foreground" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="35" data-source-line-end="37">${ssrInterpolate(usp.title_ar)}</h3><p class="text-sm text-muted-foreground" data-source-file="src/components/gift-sets-category/ValuePropositionCards.vue" data-source-line-start="40" data-source-line-end="42">${ssrInterpolate(usp.title_en)}</p></div></div>`);
  }), _push("<!--]--></div></div>");
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gift-sets-category/ValuePropositionCards.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ValuePropositionCards = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({ __name: "ProductCard", props: { product: {} }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, isClient = ref(true), isHovered = ref(false);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { props, isClient, isHovered, getBadgeColor: (badgeId) => PRODUCT_BADGES[badgeId]?.color || "#C4A464", get PRODUCT_BADGES() {
    return PRODUCT_BADGES;
  }, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "group rounded-lg border border-border/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-card hover:border-primary/30" }, _attrs, { "data-source-file": "src/components/gift-sets-category/ProductCard.vue", "data-source-line-start": "30", "data-source-line-end": "106" }))}><div class="relative h-64 md:h-72 overflow-hidden bg-muted" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="36" data-source-line-end="56"><img${ssrRenderAttr("src", $props.product.imageUrl)}${ssrRenderAttr("alt", $props.product.name_ar)} class="${ssrRenderClass([$setup.isHovered && $setup.isClient ? "scale-105" : "scale-100", "w-full h-full object-cover transition-transform duration-300"])}" loading="lazy" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="37" data-source-line-end="43"><div class="absolute top-4 right-4 flex flex-col gap-2" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="46" data-source-line-end="55"><!--[-->`), ssrRenderList($props.product.badges, (badgeId) => {
    _push(`<div class="px-3 py-1 rounded-full text-xs font-bold text-white backdrop-blur-sm" style="${ssrRenderStyle({ backgroundColor: $setup.getBadgeColor(badgeId) })}" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="47" data-source-line-end="54">${ssrInterpolate($setup.PRODUCT_BADGES[badgeId]?.label_ar)}</div>`);
  }), _push(`<!--]--></div></div><div class="p-6 space-y-4" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="59" data-source-line-end="105"><div class="space-y-1" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="61" data-source-line-end="68"><h3 class="text-lg font-bold text-foreground line-clamp-2" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="62" data-source-line-end="64">${ssrInterpolate($props.product.name_ar)}</h3><p class="text-sm text-muted-foreground" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="65" data-source-line-end="67">${ssrInterpolate($props.product.name_en)}</p></div><div class="space-y-1" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="71" data-source-line-end="78"><p class="text-lg font-bold text-primary" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="72" data-source-line-end="74">${ssrInterpolate($props.product.priceRange_ar)}</p><p class="text-xs text-muted-foreground" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="75" data-source-line-end="77"> ابتداءً من السعر المعروض </p></div><div class="flex gap-2 pt-2" data-source-file="src/components/gift-sets-category/ProductCard.vue" data-source-line-start="81" data-source-line-end="104">`), _push(ssrRenderComponent($setup.Button, { variant: "default", size: "sm", class: "flex-1 bg-primary hover:bg-primary/90", as: "a", href: $props.product.detailUrl, "data-source-file": "src/components/gift-sets-category/ProductCard.vue", "data-source-line-start": "82", "data-source-line-end": "91" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" عرض التفاصيل "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 16, class: "mr-1", "data-source-file": "src/components/gift-sets-category/ProductCard.vue", "data-source-line-start": "90", "data-source-line-end": "90" }, null, _parent2, _scopeId));
    else return [createTextVNode(" عرض التفاصيل "), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 16, class: "mr-1", "data-source-file": "src/components/gift-sets-category/ProductCard.vue", "data-source-line-start": "90", "data-source-line-end": "90" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { variant: "outline", size: "sm", class: "flex-1", as: "a", href: $props.product.whatsappInquiryUrl_ar, target: "_blank", rel: "noopener noreferrer", "data-source-file": "src/components/gift-sets-category/ProductCard.vue", "data-source-line-start": "92", "data-source-line-end": "103" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" واتساب "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 16, class: "mr-1", "data-source-file": "src/components/gift-sets-category/ProductCard.vue", "data-source-line-start": "102", "data-source-line-end": "102" }, null, _parent2, _scopeId));
    else return [createTextVNode(" واتساب "), createVNode($setup.SafeIcon, { name: "MessageCircle", size: 16, class: "mr-1", "data-source-file": "src/components/gift-sets-category/ProductCard.vue", "data-source-line-start": "102", "data-source-line-end": "102" })];
  }), _: 1 }, _parent)), _push("</div></div></div>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gift-sets-category/ProductCard.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ProductCard = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "ProductGrid", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { products: getProductsByCategory("gift_set"), ProductCard };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs, { "data-source-file": "src/components/gift-sets-category/ProductGrid.vue", "data-source-line-start": "10", "data-source-line-end": "37" }))}><div class="text-center space-y-2" data-source-file="src/components/gift-sets-category/ProductGrid.vue" data-source-line-start="12" data-source-line-end="19"><h2 class="text-3xl md:text-4xl font-bold text-foreground" data-source-file="src/components/gift-sets-category/ProductGrid.vue" data-source-line-start="13" data-source-line-end="15"> مجموعات الهدايا المختارة </h2><p class="text-lg text-muted-foreground" data-source-file="src/components/gift-sets-category/ProductGrid.vue" data-source-line-start="16" data-source-line-end="18"> اختر من مجموعاتنا المتنوعة لكل مناسبة </p></div><div id="products" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-source-file="src/components/gift-sets-category/ProductGrid.vue" data-source-line-start="22" data-source-line-end="29"><!--[-->`), ssrRenderList($setup.products, (product) => {
    _push(ssrRenderComponent($setup.ProductCard, { key: product.id, product, "client:idle": "", "data-source-file": "src/components/gift-sets-category/ProductGrid.vue", "data-source-line-start": "23", "data-source-line-end": "28" }, null, _parent));
  }), _push("<!--]--></div>"), $setup.products.length === 0 ? _push('<div class="text-center py-12" data-source-file="src/components/gift-sets-category/ProductGrid.vue" data-source-line-start="32" data-source-line-end="36"><p class="text-lg text-muted-foreground" data-source-file="src/components/gift-sets-category/ProductGrid.vue" data-source-line-start="33" data-source-line-end="35"> لا توجد مجموعات هدايا متاحة حالياً </p></div>') : _push("<!---->"), _push("</div>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gift-sets-category/ProductGrid.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ProductGrid = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "FAQSection", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { faqs: getFaqsByCategory("gifting", 4), get Accordion() {
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
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-8" }, _attrs, { "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "15", "data-source-line-end": "67" }))}><div class="text-center space-y-2" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="17" data-source-line-end="24"><h2 class="text-3xl md:text-4xl font-bold text-foreground" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="18" data-source-line-end="20"> أسئلة شائعة حول الهدايا </h2><p class="text-lg text-muted-foreground" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="21" data-source-line-end="23"> إجابات سريعة على الأسئلة الشائعة </p></div><div class="max-w-3xl mx-auto" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="27" data-source-line-end="50">`), _push(ssrRenderComponent($setup.Accordion, { type: "single", collapsible: "", class: "w-full", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "28", "data-source-line-end": "49" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2("<!--[-->"), ssrRenderList($setup.faqs, (faq) => {
      _push2(ssrRenderComponent($setup.AccordionItem, { key: faq.id, value: faq.id, class: "border-b border-border/30", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "29", "data-source-line-end": "48" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(ssrRenderComponent($setup.AccordionTrigger, { class: "text-right hover:text-primary transition-colors py-4", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "35", "data-source-line-end": "39" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`<span class="text-lg font-bold text-foreground" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="36" data-source-line-end="38"${_scopeId3}>${ssrInterpolate(faq.question_ar)}</span>`);
          else return [createVNode("span", { class: "text-lg font-bold text-foreground", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "36", "data-source-line-end": "38" }, toDisplayString(faq.question_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.AccordionContent, { class: "text-right pb-4", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "40", "data-source-line-end": "47" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`<p class="text-base text-muted-foreground leading-relaxed" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="41" data-source-line-end="43"${_scopeId3}>${ssrInterpolate(faq.answer_ar)}</p><p class="text-sm text-muted-foreground mt-2 italic" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="44" data-source-line-end="46"${_scopeId3}>${ssrInterpolate(faq.answer_en)}</p>`);
          else return [createVNode("p", { class: "text-base text-muted-foreground leading-relaxed", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "41", "data-source-line-end": "43" }, toDisplayString(faq.answer_ar), 1), createVNode("p", { class: "text-sm text-muted-foreground mt-2 italic", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "44", "data-source-line-end": "46" }, toDisplayString(faq.answer_en), 1)];
        }), _: 2 }, _parent3, _scopeId2));
        else return [createVNode($setup.AccordionTrigger, { class: "text-right hover:text-primary transition-colors py-4", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "35", "data-source-line-end": "39" }, { default: withCtx(() => [createVNode("span", { class: "text-lg font-bold text-foreground", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "36", "data-source-line-end": "38" }, toDisplayString(faq.question_ar), 1)]), _: 2 }, 1024), createVNode($setup.AccordionContent, { class: "text-right pb-4", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "40", "data-source-line-end": "47" }, { default: withCtx(() => [createVNode("p", { class: "text-base text-muted-foreground leading-relaxed", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "41", "data-source-line-end": "43" }, toDisplayString(faq.answer_ar), 1), createVNode("p", { class: "text-sm text-muted-foreground mt-2 italic", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "44", "data-source-line-end": "46" }, toDisplayString(faq.answer_en), 1)]), _: 2 }, 1024)];
      }), _: 2 }, _parent2, _scopeId));
    }), _push2("<!--]-->");
    else return [(openBlock(true), createBlock(Fragment, null, renderList($setup.faqs, (faq) => (openBlock(), createBlock($setup.AccordionItem, { key: faq.id, value: faq.id, class: "border-b border-border/30", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "29", "data-source-line-end": "48" }, { default: withCtx(() => [createVNode($setup.AccordionTrigger, { class: "text-right hover:text-primary transition-colors py-4", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "35", "data-source-line-end": "39" }, { default: withCtx(() => [createVNode("span", { class: "text-lg font-bold text-foreground", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "36", "data-source-line-end": "38" }, toDisplayString(faq.question_ar), 1)]), _: 2 }, 1024), createVNode($setup.AccordionContent, { class: "text-right pb-4", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "40", "data-source-line-end": "47" }, { default: withCtx(() => [createVNode("p", { class: "text-base text-muted-foreground leading-relaxed", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "41", "data-source-line-end": "43" }, toDisplayString(faq.answer_ar), 1), createVNode("p", { class: "text-sm text-muted-foreground mt-2 italic", "data-source-file": "src/components/gift-sets-category/FAQSection.vue", "data-source-line-start": "44", "data-source-line-end": "46" }, toDisplayString(faq.answer_en), 1)]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"]))), 128))];
  }), _: 1 }, _parent)), _push('</div><div class="text-center pt-4" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="53" data-source-line-end="66"><p class="text-muted-foreground mb-4" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="54" data-source-line-end="56"> هل لديك سؤال آخر؟ </p><a href="./help-center.html" class="inline-flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="57" data-source-line-end="65"> اذهب إلى مركز المساعدة <svg class="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="62" data-source-line-end="64"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-source-file="src/components/gift-sets-category/FAQSection.vue" data-source-line-start="63" data-source-line-end="63"></path></svg></a></div></div>');
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gift-sets-category/FAQSection.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const FAQSection = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const GLOBAL_TRUST_USPS = [
  {
    id: "low_smoke",
    iconName: "CloudOff",
    title_ar: "دخان منخفض",
    title_en: "Low Smoke Formula"
  },
  {
    id: "traceable",
    iconName: "ScanSearch",
    title_ar: "مصدر قابل للتتبع",
    title_en: "Traceable Sourcing"
  },
  // Note: Replacing 7-day return and secure pay (ecommerce terms) with brand-focused values
  {
    id: "safety_guide",
    iconName: "HeartHandshake",
    title_ar: "استخدام آمن",
    title_en: "Safety Guidelines Included"
  },
  {
    id: "whatsapp_support",
    iconName: "MessageCircle",
    title_ar: "استفسار عبر واتساب",
    title_en: "WhatsApp Inquiry"
  },
  {
    id: "satisfaction",
    iconName: "ShieldCheck",
    title_ar: "ضمان الجودة",
    title_en: "Quality Assurance"
  }
];
const _sfc_main = defineComponent({ __name: "TrustBar", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, SafeIcon, get GLOBAL_TRUST_USPS() {
    return GLOBAL_TRUST_USPS;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-x-auto custom-scrollbar" }, _attrs, { "data-source-file": "src/components/gift-sets-category/TrustBar.vue", "data-source-line-start": "18", "data-source-line-end": "34" }))}><div class="flex md:grid md:grid-cols-5 gap-4 md:gap-6 min-w-max md:min-w-0 px-4 md:px-0" data-source-file="src/components/gift-sets-category/TrustBar.vue" data-source-line-start="19" data-source-line-end="33"><!--[-->`), ssrRenderList($setup.GLOBAL_TRUST_USPS, (item) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 scale-100" : "opacity-75 scale-95", "flex flex-col items-center justify-center gap-2 min-w-[120px] md:min-w-0 py-4 transition-all duration-300"])}" data-source-file="src/components/gift-sets-category/TrustBar.vue" data-source-line-start="20" data-source-line-end="32"><div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center" data-source-file="src/components/gift-sets-category/TrustBar.vue" data-source-line-start="26" data-source-line-end="28">`), _push(ssrRenderComponent($setup.SafeIcon, { name: item.iconName, size: 24, class: "text-accent", "data-source-file": "src/components/gift-sets-category/TrustBar.vue", "data-source-line-start": "27", "data-source-line-end": "27" }, null, _parent)), _push(`</div><p class="text-sm font-medium text-foreground text-center" data-source-file="src/components/gift-sets-category/TrustBar.vue" data-source-line-start="29" data-source-line-end="31">${ssrInterpolate(item.title_ar)}</p></div>`);
  }), _push("<!--]--></div></div>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/gift-sets-category/TrustBar.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TrustBar = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const $$GiftSetsCategory = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "مجموعات الهدايا - نفحة NAFHA" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="15" data-source-line-end="53" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="18" data-source-line-end="49" class="flex-1">
      <!-- Hero Section -->
      ${renderComponent($$result2, "GiftSetsCategoryHero", GiftSetsCategoryHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/gift-sets-category/GiftSetsCategoryHero.vue", "client:component-export": "default" })}
      
      <!-- Trust Bar -->
      <section data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="23" data-source-line-end="27" class="py-8 md:py-12 bg-background border-b border-border/20">
        <div data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="24" data-source-line-end="26" class="container mx-auto px-4">
          ${renderComponent($$result2, "TrustBar", TrustBar, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/gift-sets-category/TrustBar.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Value Proposition -->
      <section data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="30" data-source-line-end="34" class="py-12 md:py-16 bg-background">
        <div data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="31" data-source-line-end="33" class="container mx-auto px-4">
          ${renderComponent($$result2, "ValuePropositionCards", ValuePropositionCards, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/gift-sets-category/ValuePropositionCards.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Product Grid -->
      <section data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="37" data-source-line-end="41" class="py-12 md:py-16 bg-background">
        <div data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="38" data-source-line-end="40" class="container mx-auto px-4">
          ${renderComponent($$result2, "ProductGrid", ProductGrid, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/gift-sets-category/ProductGrid.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- FAQ Section -->
      <section data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="44" data-source-line-end="48" class="py-12 md:py-16 bg-background/50">
        <div data-source-file="src/pages/gift-sets-category.astro" data-source-line-start="45" data-source-line-end="47" class="container mx-auto px-4">
          ${renderComponent($$result2, "FAQSection", FAQSection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/gift-sets-category/FAQSection.vue", "client:component-export": "default" })}
        </div>
      </section>
    </main>
    
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { "client:load": true, variant: "complex", "client:component-hydration": "load", "client:component-path": "@/components/common/CommonFooter.vue", "client:component-export": "default" })}
    ${renderComponent($$result2, "WhatsAppFloatingButton", WhatsAppFloatingButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/WhatsAppFloatingButton.vue", "client:component-export": "default" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/gift-sets-category.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/gift-sets-category.astro";
const $$url = "/gift-sets-category.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$GiftSetsCategory,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
