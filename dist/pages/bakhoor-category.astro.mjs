import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { S as SafeIcon, _ as _export_sfc, B as Button, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode, computed, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { P as PRODUCT_CATEGORIES, a as PRODUCT_BADGES, g as getProductsByCategory } from "../products.ZiwpglYo.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
/* empty css                                    */
import { S as SelectValue, a as SelectTrigger, b as SelectItem, c as SelectContent, d as Select } from "../SelectValue.gl2_I9V2.js";
import { A as AccordionTrigger, a as AccordionItem, b as AccordionContent, c as Accordion } from "../AccordionTrigger.DZr2FGXC.js";
import { g as getFaqsByCategory } from "../faqs.Cc0HTa3I.js";
import { T as TrustIconBar } from "../TrustIconBar.Ml2XtLc6.js";
import { W as WhatsAppFloatingButton } from "../WhatsAppFloatingButton.BvsIxmp4.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$4 = defineComponent({ __name: "BakhoorHero", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), categoryData = PRODUCT_CATEGORIES.bakhoor;
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/bakhoor-category/BakhoorHero.vue", "data-source-line-start": "22", "data-source-line-end": "89" }))} data-v-60dc87de><div class="absolute inset-0" data-source-file="src/components/bakhoor-category/BakhoorHero.vue" data-source-line-start="24" data-source-line-end="32" data-v-60dc87de><img${ssrRenderAttr("src", $setup.categoryData.heroImage)} alt="البخور والعود" class="w-full h-full object-cover" data-source-file="src/components/bakhoor-category/BakhoorHero.vue" data-source-line-start="25" data-source-line-end="29" data-v-60dc87de><div class="absolute inset-0 bg-black/30" data-source-file="src/components/bakhoor-category/BakhoorHero.vue" data-source-line-start="31" data-source-line-end="31" data-v-60dc87de></div></div><div class="relative h-full flex flex-col items-center justify-center px-4 text-center" data-source-file="src/components/bakhoor-category/BakhoorHero.vue" data-source-line-start="35" data-source-line-end="88" data-v-60dc87de><h1 class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 transition-all duration-700"])}" data-source-file="src/components/bakhoor-category/BakhoorHero.vue" data-source-line-start="37" data-source-line-end="42" data-v-60dc87de> البخور ورقائق العود </h1><p class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "text-lg md:text-xl text-white/90 mb-8 max-w-2xl transition-all duration-700 delay-100"])}" data-source-file="src/components/bakhoor-category/BakhoorHero.vue" data-source-line-start="45" data-source-line-end="50" data-v-60dc87de>${ssrInterpolate($setup.categoryData.heroSubtitle_ar)}</p><p class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "text-sm md:text-base text-white/70 mb-8 transition-all duration-700 delay-200"])}" data-source-file="src/components/bakhoor-category/BakhoorHero.vue" data-source-line-start="53" data-source-line-end="58" data-v-60dc87de>${ssrInterpolate($setup.categoryData.heroSubtitle_en)}</p><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-300"])}" data-source-file="src/components/bakhoor-category/BakhoorHero.vue" data-source-line-start="61" data-source-line-end="87" data-v-60dc87de>`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold", as: "a", href: "#products", "data-source-file": "src/components/bakhoor-category/BakhoorHero.vue", "data-source-line-start": "66", "data-source-line-end": "74" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" تسوق الآن "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ShoppingBag", size: 20, class: "mr-2", "data-source-file": "src/components/bakhoor-category/BakhoorHero.vue", "data-source-line-start": "73", "data-source-line-end": "73" }, null, _parent2, _scopeId));
    else return [createTextVNode(" تسوق الآن "), createVNode($setup.SafeIcon, { name: "ShoppingBag", size: 20, class: "mr-2", "data-source-file": "src/components/bakhoor-category/BakhoorHero.vue", "data-source-line-start": "73", "data-source-line-end": "73" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", class: "border-white text-white hover:bg-white/10", as: "a", href: "./gift-sets-category.html", "data-source-file": "src/components/bakhoor-category/BakhoorHero.vue", "data-source-line-start": "77", "data-source-line-end": "86" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" استكشف الهدايا "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "Gift", size: 20, class: "mr-2", "data-source-file": "src/components/bakhoor-category/BakhoorHero.vue", "data-source-line-start": "85", "data-source-line-end": "85" }, null, _parent2, _scopeId));
    else return [createTextVNode(" استكشف الهدايا "), createVNode($setup.SafeIcon, { name: "Gift", size: 20, class: "mr-2", "data-source-file": "src/components/bakhoor-category/BakhoorHero.vue", "data-source-line-start": "85", "data-source-line-end": "85" })];
  }), _: 1 }, _parent)), _push("</div></div></section>");
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/bakhoor-category/BakhoorHero.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BakhoorHero = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-60dc87de"]]);
const _sfc_main$3 = defineComponent({ __name: "BakhoorUSPCards", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), categoryData = PRODUCT_CATEGORIES.bakhoor;
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  function getUSPDescription(title) {
    return { "أفضل للخلق الكهربائي": "رقائق عود مختارة بعناية لتحقيق أفضل أداء مع المباخر الكهربائية، مع توزيع حرارة متساوٍ وانتشار رائحة ثابت.", "أصناف فاخرة": "نختار أفضل درجات العود من مصادر موثوقة، مما يضمن جودة عالية وتجربة عطرية غنية ومعقدة.", "رائحة غنية مركبة": "كل دفعة من البخور تتميز برائحة متعددة الطبقات تتطور مع الوقت، مما يخلق تجربة حسية متكاملة." }[title] || "تجربة عطرية فريدة من نوعها";
  }
  const __returned__ = { isClient, categoryData, getUSPDescription, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 md:py-16 lg:py-20 bg-background" }, _attrs, { "data-source-file": "src/components/bakhoor-category/BakhoorUSPCards.vue", "data-source-line-start": "28", "data-source-line-end": "69" }))} data-v-8e85c9ea><div class="container mx-auto px-4" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="29" data-source-line-end="68" data-v-8e85c9ea><div class="text-center mb-12" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="31" data-source-line-end="38" data-v-8e85c9ea><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="32" data-source-line-end="34" data-v-8e85c9ea> لماذا تختار بخورنا؟ </h2><p class="text-lg text-muted-foreground max-w-2xl mx-auto" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="35" data-source-line-end="37" data-v-8e85c9ea> مزيج من الجودة والتقليد والابتكار لتجربة عطرية لا تُنسى </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="41" data-source-line-end="67" data-v-8e85c9ea><!--[-->`), ssrRenderList($setup.categoryData.usps, (usp, index) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", "group relative p-6 md:p-8 rounded-2xl border border-border/30 bg-card hover:shadow-card transition-all duration-300"])}" style="${ssrRenderStyle({ transitionDelay: $setup.isClient ? `${index * 100}ms` : "0ms" })}" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="42" data-source-line-end="66" data-v-8e85c9ea><div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="50" data-source-line-end="52" data-v-8e85c9ea>`), _push(ssrRenderComponent($setup.SafeIcon, { name: usp.iconName, size: 32, class: "text-accent", "data-source-file": "src/components/bakhoor-category/BakhoorUSPCards.vue", "data-source-line-start": "51", "data-source-line-end": "51" }, null, _parent)), _push(`</div><h3 class="text-xl font-bold text-foreground mb-3" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="55" data-source-line-end="57" data-v-8e85c9ea>${ssrInterpolate(usp.title_ar)}</h3><p class="text-sm text-muted-foreground leading-relaxed" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="60" data-source-line-end="62" data-v-8e85c9ea>${ssrInterpolate($setup.getUSPDescription(usp.title_ar))}</p><div class="absolute inset-0 rounded-2xl border-2 border-primary/0 group-hover:border-primary/30 transition-colors duration-300 pointer-events-none" data-source-file="src/components/bakhoor-category/BakhoorUSPCards.vue" data-source-line-start="65" data-source-line-end="65" data-v-8e85c9ea></div></div>`);
  }), _push("<!--]--></div></div></section>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/bakhoor-category/BakhoorUSPCards.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BakhoorUSPCards = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-8e85c9ea"]]);
const _sfc_main$2 = defineComponent({ __name: "BakhoorProductCard", props: { product: {} }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, isHovered = ref(false), __returned__ = { props, isHovered, getBadgeColor: (badgeId) => PRODUCT_BADGES[badgeId]?.color || "#C4A464", getBadgeLabel: (badgeId) => PRODUCT_BADGES[badgeId]?.label_ar || "", getBadgeIcon: (badgeId) => PRODUCT_BADGES[badgeId]?.iconName || "Star", get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative rounded-2xl border border-border/30 bg-card overflow-hidden transition-all duration-300 hover:shadow-card" }, _attrs, { "data-source-file": "src/components/bakhoor-category/BakhoorProductCard.vue", "data-source-line-start": "32", "data-source-line-end": "116" }))} data-v-eee50862><div class="relative w-full h-64 md:h-72 overflow-hidden bg-muted" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="38" data-source-line-end="64" data-v-eee50862><img${ssrRenderAttr("src", $props.product.imageUrl)}${ssrRenderAttr("alt", $props.product.name_ar)} class="${ssrRenderClass([$setup.isHovered ? "scale-105" : "scale-100", "w-full h-full object-cover transition-transform duration-300"])}" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="39" data-source-line-end="44" data-v-eee50862><div class="absolute top-4 right-4 flex flex-col gap-2" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="47" data-source-line-end="57" data-v-eee50862><!--[-->`), ssrRenderList($props.product.badges, (badgeId) => {
    _push(`<div class="flex items-center gap-1 px-3 py-1 rounded-full text-white text-xs font-semibold" style="${ssrRenderStyle({ backgroundColor: $setup.getBadgeColor(badgeId) })}" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="48" data-source-line-end="56" data-v-eee50862>`), _push(ssrRenderComponent($setup.SafeIcon, { name: $setup.getBadgeIcon(badgeId), size: 14, "data-source-file": "src/components/bakhoor-category/BakhoorProductCard.vue", "data-source-line-start": "54", "data-source-line-end": "54" }, null, _parent)), _push(`<span data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="55" data-source-line-end="55" data-v-eee50862>${ssrInterpolate($setup.getBadgeLabel(badgeId))}</span></div>`);
  }), _push(`<!--]--></div><div class="${ssrRenderClass([$setup.isHovered ? "bg-black/20" : "bg-black/0", "absolute inset-0 bg-black/0 transition-colors duration-300"])}" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="60" data-source-line-end="63" data-v-eee50862></div></div><div class="p-4 md:p-6" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="67" data-source-line-end="115" data-v-eee50862><h3 class="text-lg font-bold text-foreground mb-2 line-clamp-2" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="69" data-source-line-end="71" data-v-eee50862>${ssrInterpolate($props.product.name_ar)}</h3><p class="text-xs text-muted-foreground mb-3" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="74" data-source-line-end="76" data-v-eee50862>${ssrInterpolate($props.product.name_en)}</p><div class="mb-4" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="79" data-source-line-end="86" data-v-eee50862><p class="text-sm font-semibold text-primary" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="80" data-source-line-end="82" data-v-eee50862>${ssrInterpolate($props.product.priceRange_ar)}</p><p class="text-xs text-muted-foreground" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="83" data-source-line-end="85" data-v-eee50862> ابتداءً من ... مع تمارا/تابي </p></div><div class="flex gap-2" data-source-file="src/components/bakhoor-category/BakhoorProductCard.vue" data-source-line-start="89" data-source-line-end="114" data-v-eee50862>`), _push(ssrRenderComponent($setup.Button, { variant: "outline", size: "sm", class: "flex-1", as: "a", href: $props.product.detailUrl, "data-source-file": "src/components/bakhoor-category/BakhoorProductCard.vue", "data-source-line-start": "91", "data-source-line-end": "100" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" عرض التفاصيل "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ChevronLeft", size: 16, class: "mr-1", "data-source-file": "src/components/bakhoor-category/BakhoorProductCard.vue", "data-source-line-start": "99", "data-source-line-end": "99" }, null, _parent2, _scopeId));
    else return [createTextVNode(" عرض التفاصيل "), createVNode($setup.SafeIcon, { name: "ChevronLeft", size: 16, class: "mr-1", "data-source-file": "src/components/bakhoor-category/BakhoorProductCard.vue", "data-source-line-start": "99", "data-source-line-end": "99" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "sm", class: "bg-primary hover:bg-primary/90", as: "a", href: $props.product.whatsappInquiryUrl_ar, target: "_blank", rel: "noopener noreferrer", "aria-label": "تواصل عبر واتساب", "data-source-file": "src/components/bakhoor-category/BakhoorProductCard.vue", "data-source-line-start": "103", "data-source-line-end": "113" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 16, "data-source-file": "src/components/bakhoor-category/BakhoorProductCard.vue", "data-source-line-start": "112", "data-source-line-end": "112" }, null, _parent2, _scopeId));
    else return [createVNode($setup.SafeIcon, { name: "MessageCircle", size: 16, "data-source-file": "src/components/bakhoor-category/BakhoorProductCard.vue", "data-source-line-start": "112", "data-source-line-end": "112" })];
  }), _: 1 }, _parent)), _push("</div></div></div>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/bakhoor-category/BakhoorProductCard.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BakhoorProductCard = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-eee50862"]]);
const _sfc_main$1 = defineComponent({ __name: "BakhoorProductGrid", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), sortBy = ref("newest"), products = getProductsByCategory("bakhoor"), sortedProducts = computed(() => {
    const sorted = [...products];
    return sortBy.value === "price-low" ? sorted.sort((a, b) => {
      const aPrice = parseInt(a.priceRange_ar.split("-")[0]), bPrice = parseInt(b.priceRange_ar.split("-")[0]);
      return aPrice - bPrice;
    }) : sortBy.value === "price-high" && sorted.sort((a, b) => {
      const aPrice = parseInt(a.priceRange_ar.split("-")[1]);
      return parseInt(b.priceRange_ar.split("-")[1]) - aPrice;
    }), sorted;
  });
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, sortBy, products, sortedProducts, get Button() {
    return Button;
  }, get Select() {
    return Select;
  }, get SelectContent() {
    return SelectContent;
  }, get SelectItem() {
    return SelectItem;
  }, get SelectTrigger() {
    return SelectTrigger;
  }, get SelectValue() {
    return SelectValue;
  }, SafeIcon, BakhoorProductCard };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ id: "products", class: "py-12 md:py-16 lg:py-20 bg-background" }, _attrs, { "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "47", "data-source-line-end": "105" }))} data-v-287dcfad><div class="container mx-auto px-4" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="48" data-source-line-end="104" data-v-287dcfad><div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="50" data-source-line-end="74" data-v-287dcfad><div data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="51" data-source-line-end="58" data-v-287dcfad><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-2" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="52" data-source-line-end="54" data-v-287dcfad> مجموعة البخور </h2><p class="text-muted-foreground" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="55" data-source-line-end="57" data-v-287dcfad>${ssrInterpolate($setup.products.length)} منتج متاح </p></div><div class="w-full md:w-auto" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="61" data-source-line-end="73" data-v-287dcfad>`), _push(ssrRenderComponent($setup.Select, { modelValue: $setup.sortBy, "onUpdate:modelValue": ($event) => $setup.sortBy = $event, "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "62", "data-source-line-end": "72" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SelectTrigger, { class: "w-full md:w-[200px]", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "63", "data-source-line-end": "65" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3(ssrRenderComponent($setup.SelectValue, { placeholder: "ترتيب حسب", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "64", "data-source-line-end": "64" }, null, _parent3, _scopeId2));
      else return [createVNode($setup.SelectValue, { placeholder: "ترتيب حسب", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "64", "data-source-line-end": "64" })];
    }), _: 1 }, _parent2, _scopeId)), _push2(ssrRenderComponent($setup.SelectContent, { "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "66", "data-source-line-end": "71" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3(ssrRenderComponent($setup.SelectItem, { value: "newest", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "67", "data-source-line-end": "67" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4("الأحدث أولاً");
        else return [createTextVNode("الأحدث أولاً")];
      }), _: 1 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.SelectItem, { value: "price-low", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "68", "data-source-line-end": "68" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4("السعر: من الأقل للأعلى");
        else return [createTextVNode("السعر: من الأقل للأعلى")];
      }), _: 1 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.SelectItem, { value: "price-high", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "69", "data-source-line-end": "69" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4("السعر: من الأعلى للأقل");
        else return [createTextVNode("السعر: من الأعلى للأقل")];
      }), _: 1 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.SelectItem, { value: "popular", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "70", "data-source-line-end": "70" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4("الأكثر شهرة");
        else return [createTextVNode("الأكثر شهرة")];
      }), _: 1 }, _parent3, _scopeId2));
      else return [createVNode($setup.SelectItem, { value: "newest", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "67", "data-source-line-end": "67" }, { default: withCtx(() => [createTextVNode("الأحدث أولاً")]), _: 1 }), createVNode($setup.SelectItem, { value: "price-low", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "68", "data-source-line-end": "68" }, { default: withCtx(() => [createTextVNode("السعر: من الأقل للأعلى")]), _: 1 }), createVNode($setup.SelectItem, { value: "price-high", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "69", "data-source-line-end": "69" }, { default: withCtx(() => [createTextVNode("السعر: من الأعلى للأقل")]), _: 1 }), createVNode($setup.SelectItem, { value: "popular", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "70", "data-source-line-end": "70" }, { default: withCtx(() => [createTextVNode("الأكثر شهرة")]), _: 1 })];
    }), _: 1 }, _parent2, _scopeId));
    else return [createVNode($setup.SelectTrigger, { class: "w-full md:w-[200px]", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "63", "data-source-line-end": "65" }, { default: withCtx(() => [createVNode($setup.SelectValue, { placeholder: "ترتيب حسب", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "64", "data-source-line-end": "64" })]), _: 1 }), createVNode($setup.SelectContent, { "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "66", "data-source-line-end": "71" }, { default: withCtx(() => [createVNode($setup.SelectItem, { value: "newest", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "67", "data-source-line-end": "67" }, { default: withCtx(() => [createTextVNode("الأحدث أولاً")]), _: 1 }), createVNode($setup.SelectItem, { value: "price-low", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "68", "data-source-line-end": "68" }, { default: withCtx(() => [createTextVNode("السعر: من الأقل للأعلى")]), _: 1 }), createVNode($setup.SelectItem, { value: "price-high", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "69", "data-source-line-end": "69" }, { default: withCtx(() => [createTextVNode("السعر: من الأعلى للأقل")]), _: 1 }), createVNode($setup.SelectItem, { value: "popular", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "70", "data-source-line-end": "70" }, { default: withCtx(() => [createTextVNode("الأكثر شهرة")]), _: 1 })]), _: 1 })];
  }), _: 1 }, _parent)), _push('</div></div><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="77" data-source-line-end="87" data-v-287dcfad><!--[-->'), ssrRenderList($setup.sortedProducts, (product, index) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", "transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: $setup.isClient ? `${index * 50}ms` : "0ms" })}" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="78" data-source-line-end="86" data-v-287dcfad>`), _push(ssrRenderComponent($setup.BakhoorProductCard, { product, "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "85", "data-source-line-end": "85" }, null, _parent)), _push("</div>");
  }), _push("<!--]--></div>"), $setup.products.length === 0 ? (_push('<div class="text-center py-12" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="90" data-source-line-end="95" data-v-287dcfad>'), _push(ssrRenderComponent($setup.SafeIcon, { name: "Package", size: 48, class: "mx-auto text-muted-foreground mb-4", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "91", "data-source-line-end": "91" }, null, _parent)), _push('<p class="text-lg text-muted-foreground" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="92" data-source-line-end="94" data-v-287dcfad> لا توجد منتجات متاحة حالياً </p></div>')) : _push("<!---->"), _push('<div class="flex justify-center mt-12" data-source-file="src/components/bakhoor-category/BakhoorProductGrid.vue" data-source-line-start="98" data-source-line-end="103" data-v-287dcfad>'), _push(ssrRenderComponent($setup.Button, { variant: "outline", size: "lg", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "99", "data-source-line-end": "102" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" عرض المزيد "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ChevronDown", size: 20, class: "mr-2", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "101", "data-source-line-end": "101" }, null, _parent2, _scopeId));
    else return [createTextVNode(" عرض المزيد "), createVNode($setup.SafeIcon, { name: "ChevronDown", size: 20, class: "mr-2", "data-source-file": "src/components/bakhoor-category/BakhoorProductGrid.vue", "data-source-line-start": "101", "data-source-line-end": "101" })];
  }), _: 1 }, _parent)), _push("</div></div></section>");
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/bakhoor-category/BakhoorProductGrid.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BakhoorProductGrid = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-287dcfad"]]);
const _sfc_main = defineComponent({ __name: "BakhoorFAQSection", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), faqs = getFaqsByCategory("bakhoor", 3);
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
  }, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 md:py-16 lg:py-20 bg-card border-t border-border/20" }, _attrs, { "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "26", "data-source-line-end": "75" }))} data-v-889be848><div class="container mx-auto px-4" data-source-file="src/components/bakhoor-category/BakhoorFAQSection.vue" data-source-line-start="27" data-source-line-end="74" data-v-889be848><div class="text-center mb-12" data-source-file="src/components/bakhoor-category/BakhoorFAQSection.vue" data-source-line-start="29" data-source-line-end="36" data-v-889be848><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/bakhoor-category/BakhoorFAQSection.vue" data-source-line-start="30" data-source-line-end="32" data-v-889be848> أسئلة شائعة </h2><p class="text-lg text-muted-foreground max-w-2xl mx-auto" data-source-file="src/components/bakhoor-category/BakhoorFAQSection.vue" data-source-line-start="33" data-source-line-end="35" data-v-889be848> إجابات سريعة على أكثر الأسئلة التي يطرحها عملاؤنا حول البخور </p></div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", "max-w-3xl mx-auto transition-all duration-700"])}" data-source-file="src/components/bakhoor-category/BakhoorFAQSection.vue" data-source-line-start="39" data-source-line-end="60" data-v-889be848>`), _push(ssrRenderComponent($setup.Accordion, { type: "single", collapsible: "", class: "w-full", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "43", "data-source-line-end": "59" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2("<!--[-->"), ssrRenderList($setup.faqs, (faq, index) => {
      _push2(ssrRenderComponent($setup.AccordionItem, { key: faq.id, value: faq.id, class: "border-b border-border/30 last:border-b-0", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "44", "data-source-line-end": "58" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(ssrRenderComponent($setup.AccordionTrigger, { class: "py-4 md:py-6 hover:no-underline group", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "50", "data-source-line-end": "54" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`<span class="text-right text-lg font-semibold text-foreground group-hover:text-primary transition-colors" data-source-file="src/components/bakhoor-category/BakhoorFAQSection.vue" data-source-line-start="51" data-source-line-end="53" data-v-889be848${_scopeId3}>${ssrInterpolate(faq.question_ar)}</span>`);
          else return [createVNode("span", { class: "text-right text-lg font-semibold text-foreground group-hover:text-primary transition-colors", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "51", "data-source-line-end": "53" }, toDisplayString(faq.question_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.AccordionContent, { class: "pb-4 md:pb-6 text-muted-foreground leading-relaxed", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "55", "data-source-line-end": "57" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`${ssrInterpolate(faq.answer_ar)}`);
          else return [createTextVNode(toDisplayString(faq.answer_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2));
        else return [createVNode($setup.AccordionTrigger, { class: "py-4 md:py-6 hover:no-underline group", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "50", "data-source-line-end": "54" }, { default: withCtx(() => [createVNode("span", { class: "text-right text-lg font-semibold text-foreground group-hover:text-primary transition-colors", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "51", "data-source-line-end": "53" }, toDisplayString(faq.question_ar), 1)]), _: 2 }, 1024), createVNode($setup.AccordionContent, { class: "pb-4 md:pb-6 text-muted-foreground leading-relaxed", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "55", "data-source-line-end": "57" }, { default: withCtx(() => [createTextVNode(toDisplayString(faq.answer_ar), 1)]), _: 2 }, 1024)];
      }), _: 2 }, _parent2, _scopeId));
    }), _push2("<!--]-->");
    else return [(openBlock(true), createBlock(Fragment, null, renderList($setup.faqs, (faq, index) => (openBlock(), createBlock($setup.AccordionItem, { key: faq.id, value: faq.id, class: "border-b border-border/30 last:border-b-0", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "44", "data-source-line-end": "58" }, { default: withCtx(() => [createVNode($setup.AccordionTrigger, { class: "py-4 md:py-6 hover:no-underline group", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "50", "data-source-line-end": "54" }, { default: withCtx(() => [createVNode("span", { class: "text-right text-lg font-semibold text-foreground group-hover:text-primary transition-colors", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "51", "data-source-line-end": "53" }, toDisplayString(faq.question_ar), 1)]), _: 2 }, 1024), createVNode($setup.AccordionContent, { class: "pb-4 md:pb-6 text-muted-foreground leading-relaxed", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "55", "data-source-line-end": "57" }, { default: withCtx(() => [createTextVNode(toDisplayString(faq.answer_ar), 1)]), _: 2 }, 1024)]), _: 2 }, 1032, ["value"]))), 128))];
  }), _: 1 }, _parent)), _push('</div><div class="flex justify-center mt-12" data-source-file="src/components/bakhoor-category/BakhoorFAQSection.vue" data-source-line-start="63" data-source-line-end="73" data-v-889be848>'), _push(ssrRenderComponent($setup.Button, { variant: "outline", size: "lg", as: "a", href: "./help-center.html", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "64", "data-source-line-end": "72" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" عرض جميع الأسئلة الشائعة "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "HelpCircle", size: 20, class: "mr-2", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "71", "data-source-line-end": "71" }, null, _parent2, _scopeId));
    else return [createTextVNode(" عرض جميع الأسئلة الشائعة "), createVNode($setup.SafeIcon, { name: "HelpCircle", size: 20, class: "mr-2", "data-source-file": "src/components/bakhoor-category/BakhoorFAQSection.vue", "data-source-line-start": "71", "data-source-line-end": "71" })];
  }), _: 1 }, _parent)), _push("</div></div></section>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/bakhoor-category/BakhoorFAQSection.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BakhoorFAQSection = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-889be848"]]);
const $$BakhoorCategory = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "البخور ورقائق العود | نفحة NAFHA", description: "استكشف مجموعة البخور الفاخرة من نفحة - رقائق عود أصيلة للضيافة التقليدية والمناسبات الخاصة" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/bakhoor-category.astro" data-source-line-start="18" data-source-line-end="49" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    <!-- Header -->
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}

    <!-- Main Content -->
    <main data-source-file="src/pages/bakhoor-category.astro" data-source-line-start="23" data-source-line-end="42" class="flex-1">
      <!-- Hero Section -->
      ${renderComponent($$result2, "BakhoorHero", BakhoorHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/bakhoor-category/BakhoorHero.vue", "client:component-export": "default" })}

      <!-- Trust Icon Bar -->
      <section data-source-file="src/pages/bakhoor-category.astro" data-source-line-start="28" data-source-line-end="32" class="py-8 md:py-12 bg-card border-b border-border/20">
        <div data-source-file="src/pages/bakhoor-category.astro" data-source-line-start="29" data-source-line-end="31" class="container mx-auto px-4">
          ${renderComponent($$result2, "TrustIconBar", TrustIconBar, {})}
        </div>
      </section>

      <!-- USP Cards Section -->
      ${renderComponent($$result2, "BakhoorUSPCards", BakhoorUSPCards, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/bakhoor-category/BakhoorUSPCards.vue", "client:component-export": "default" })}

      <!-- Product Grid Section -->
      ${renderComponent($$result2, "BakhoorProductGrid", BakhoorProductGrid, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/bakhoor-category/BakhoorProductGrid.vue", "client:component-export": "default" })}

      <!-- FAQ Section -->
      ${renderComponent($$result2, "BakhoorFAQSection", BakhoorFAQSection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/bakhoor-category/BakhoorFAQSection.vue", "client:component-export": "default" })}
    </main>

    <!-- Footer -->
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { "client:load": true, variant: "complex", "client:component-hydration": "load", "client:component-path": "@/components/common/CommonFooter.vue", "client:component-export": "default" })}

    <!-- WhatsApp Floating Button -->
    ${renderComponent($$result2, "WhatsAppFloatingButton", WhatsAppFloatingButton, { "client:load": true, phoneNumber: "966500000000", message: "مرحباً، أود الاستفسار عن منتجات البخور", "client:component-hydration": "load", "client:component-path": "@/components/common/WhatsAppFloatingButton.vue", "client:component-export": "default" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/bakhoor-category.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/bakhoor-category.astro";
const $$url = "/bakhoor-category.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$BakhoorCategory,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
