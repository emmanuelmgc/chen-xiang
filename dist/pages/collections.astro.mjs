import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { S as SafeIcon, _ as _export_sfc, B as Button, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createTextVNode, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
/* empty css                               */
import { T as TrustIconBar } from "../TrustIconBar.Ml2XtLc6.js";
import { P as PRODUCT_CATEGORIES, a as PRODUCT_BADGES, b as PRODUCTS_LIST } from "../products.ZiwpglYo.js";
import { W as WhatsAppFloatingButton } from "../WhatsAppFloatingButton.BvsIxmp4.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$4 = defineComponent({ __name: "CollectionsHero", setup(__props, { expose: __expose }) {
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[500px] md:h-[600px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/collections/CollectionsHero.vue", "data-source-line-start": "19", "data-source-line-end": "83" }))} data-v-7170a32f><div class="absolute inset-0" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="21" data-source-line-end="29" data-v-7170a32f><img src="https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/2e7297be-4a3c-4f3a-bd52-c7a15da1a42e.png" alt="مجموعات العود والبخور الفاخرة" class="w-full h-full object-cover" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="22" data-source-line-end="26" data-v-7170a32f><div class="absolute inset-0 bg-black/30" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="28" data-source-line-end="28" data-v-7170a32f></div></div><div class="relative h-full flex flex-col items-center justify-center px-4 text-center" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="32" data-source-line-end="74" data-v-7170a32f><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "space-y-4 mb-8 transition-all duration-700"])}" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="34" data-source-line-end="47" data-v-7170a32f><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="38" data-source-line-end="40" data-v-7170a32f> استكشف مجموعات نفحة </h1><p class="text-lg md:text-xl text-white/90 max-w-2xl mx-auto" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="41" data-source-line-end="43" data-v-7170a32f> تجربة عطرية فاخرة من الأعود والبخور المختارة بعناية </p><p class="text-sm md:text-base text-white/70" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="44" data-source-line-end="46" data-v-7170a32f> A Clean Ritual of Oud </p></div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-100"])}" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="50" data-source-line-end="73" data-v-7170a32f>`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8", as: "a", href: "./incense-sticks-category.html", "data-source-file": "src/components/collections/CollectionsHero.vue", "data-source-line-start": "54", "data-source-line-end": "62" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" استكشف المجموعة "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/collections/CollectionsHero.vue", "data-source-line-start": "61", "data-source-line-end": "61" }, null, _parent2, _scopeId));
    else return [createTextVNode(" استكشف المجموعة "), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 20, class: "mr-2", "data-source-file": "src/components/collections/CollectionsHero.vue", "data-source-line-start": "61", "data-source-line-end": "61" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", class: "border-white text-white hover:bg-white/10 font-bold px-8", as: "a", href: "./gift-sets-category.html", "data-source-file": "src/components/collections/CollectionsHero.vue", "data-source-line-start": "63", "data-source-line-end": "72" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" الهدايا الفاخرة "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "Gift", size: 20, class: "mr-2", "data-source-file": "src/components/collections/CollectionsHero.vue", "data-source-line-start": "71", "data-source-line-end": "71" }, null, _parent2, _scopeId));
    else return [createTextVNode(" الهدايا الفاخرة "), createVNode($setup.SafeIcon, { name: "Gift", size: 20, class: "mr-2", "data-source-file": "src/components/collections/CollectionsHero.vue", "data-source-line-start": "71", "data-source-line-end": "71" })];
  }), _: 1 }, _parent)), _push(`</div></div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100" : "opacity-0", "absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce"])}" data-source-file="src/components/collections/CollectionsHero.vue" data-source-line-start="77" data-source-line-end="82" data-v-7170a32f>`), _push(ssrRenderComponent($setup.SafeIcon, { name: "ChevronDown", size: 24, class: "text-white", "data-source-file": "src/components/collections/CollectionsHero.vue", "data-source-line-start": "81", "data-source-line-end": "81" }, null, _parent)), _push("</div></section>");
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/collections/CollectionsHero.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CollectionsHero = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-7170a32f"]]);
const _sfc_main$3 = defineComponent({ __name: "CategoryCard", props: { category: {}, categoryId: {} }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, isHovered = ref(false), __returned__ = { props, isHovered, categoryRoutes: { incense_stick: "./incense-sticks-category.html", bakhoor: "./bakhoor-category.html", mabkhara_accessory: "./mabkhara-accessories-category.html", gift_set: "./gift-sets-category.html" }, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative rounded-lg overflow-hidden border border-border/30 bg-card hover:shadow-card transition-all duration-300 h-full flex flex-col" }, _attrs, { "data-source-file": "src/components/collections/CategoryCard.vue", "data-source-line-start": "26", "data-source-line-end": "77" }))}><div class="relative h-48 md:h-56 overflow-hidden bg-muted" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="32" data-source-line-end="41"><img${ssrRenderAttr("src", $props.category.heroImage)}${ssrRenderAttr("alt", $props.category.title_ar)} class="${ssrRenderClass([$setup.isHovered ? "scale-105" : "scale-100", "w-full h-full object-cover transition-transform duration-500"])}" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="33" data-source-line-end="38"><div class="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="40" data-source-line-end="40"></div></div><div class="flex-1 p-6 flex flex-col justify-between" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="44" data-source-line-end="76"><div class="mb-4" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="46" data-source-line-end="53"><h3 class="text-xl font-bold text-foreground mb-2" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="47" data-source-line-end="49">${ssrInterpolate($props.category.title_ar)}</h3><p class="text-sm text-muted-foreground line-clamp-2" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="50" data-source-line-end="52">${ssrInterpolate($props.category.heroSubtitle_ar)}</p></div><div class="mb-6 space-y-2" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="56" data-source-line-end="65"><!--[-->`), ssrRenderList($props.category.usps, (usp) => {
    _push('<div class="flex items-center gap-2 text-sm text-foreground" data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="57" data-source-line-end="64">'), _push(ssrRenderComponent($setup.SafeIcon, { name: usp.iconName, size: 16, class: "text-accent flex-shrink-0", "data-source-file": "src/components/collections/CategoryCard.vue", "data-source-line-start": "62", "data-source-line-end": "62" }, null, _parent)), _push(`<span data-source-file="src/components/collections/CategoryCard.vue" data-source-line-start="63" data-source-line-end="63">${ssrInterpolate(usp.title_ar)}</span></div>`);
  }), _push("<!--]--></div>"), _push(ssrRenderComponent($setup.Button, { class: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold", as: "a", href: $setup.categoryRoutes[$props.categoryId], "data-source-file": "src/components/collections/CategoryCard.vue", "data-source-line-start": "68", "data-source-line-end": "75" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" استكشف الفئة "), _push2(ssrRenderComponent($setup.SafeIcon, { name: "ArrowLeft", size: 18, class: "mr-2", "data-source-file": "src/components/collections/CategoryCard.vue", "data-source-line-start": "74", "data-source-line-end": "74" }, null, _parent2, _scopeId));
    else return [createTextVNode(" استكشف الفئة "), createVNode($setup.SafeIcon, { name: "ArrowLeft", size: 18, class: "mr-2", "data-source-file": "src/components/collections/CategoryCard.vue", "data-source-line-start": "74", "data-source-line-end": "74" })];
  }), _: 1 }, _parent)), _push("</div></div>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/collections/CategoryCard.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CategoryCard = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "CategoryGrid", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), categories = ["incense_stick", "bakhoor", "mabkhara_accessory", "gift_set"];
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, categories, get PRODUCT_CATEGORIES() {
    return PRODUCT_CATEGORIES;
  }, CategoryCard };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, _attrs, { "data-source-file": "src/components/collections/CategoryGrid.vue", "data-source-line-start": "22", "data-source-line-end": "35" }))}><!--[-->`), ssrRenderList($setup.categories, (category, index) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", "transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: $setup.isClient ? `${index * 100}ms` : "0ms" })}" data-source-file="src/components/collections/CategoryGrid.vue" data-source-line-start="23" data-source-line-end="34">`), _push(ssrRenderComponent($setup.CategoryCard, { category: $setup.PRODUCT_CATEGORIES[category], categoryId: category, "data-source-file": "src/components/collections/CategoryGrid.vue", "data-source-line-start": "30", "data-source-line-end": "33" }, null, _parent)), _push("</div>");
  }), _push("<!--]--></div>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/collections/CategoryGrid.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CategoryGrid = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "ProductCard", props: { product: {} }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, isHovered = ref(false), __returned__ = { props, isHovered, getBadgeColor: (badgeId) => PRODUCT_BADGES[badgeId]?.color || "#C4A464", getBadgeLabel: (badgeId) => PRODUCT_BADGES[badgeId]?.label_ar || "", getBadgeIcon: (badgeId) => PRODUCT_BADGES[badgeId]?.iconName || "Star", get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "group relative rounded-lg border border-border/30 bg-card overflow-hidden hover:shadow-card transition-all duration-300 flex flex-col h-full" }, _attrs, { "data-source-file": "src/components/collections/ProductCard.vue", "data-source-line-start": "34", "data-source-line-end": "108" }))}><div class="relative h-48 md:h-56 overflow-hidden bg-muted" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="40" data-source-line-end="65"><img${ssrRenderAttr("src", $props.product.imageUrl)}${ssrRenderAttr("alt", $props.product.name_ar)} class="${ssrRenderClass([$setup.isHovered ? "scale-105" : "scale-100", "w-full h-full object-cover transition-transform duration-500"])}" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="41" data-source-line-end="46"><div class="absolute top-3 right-3 flex flex-col gap-2" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="49" data-source-line-end="64"><!--[-->`), ssrRenderList($props.product.badges, (badgeId) => {
    _push('<div class="flex items-center gap-1 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="50" data-source-line-end="63">'), _push(ssrRenderComponent($setup.SafeIcon, { name: $setup.getBadgeIcon(badgeId), size: 14, color: $setup.getBadgeColor(badgeId), "data-source-file": "src/components/collections/ProductCard.vue", "data-source-line-start": "55", "data-source-line-end": "59" }, null, _parent)), _push(`<span class="text-xs font-bold" style="${ssrRenderStyle({ color: $setup.getBadgeColor(badgeId) })}" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="60" data-source-line-end="62">${ssrInterpolate($setup.getBadgeLabel(badgeId))}</span></div>`);
  }), _push(`<!--]--></div></div><div class="flex-1 p-4 md:p-5 flex flex-col justify-between" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="68" data-source-line-end="107"><h3 class="text-base md:text-lg font-bold text-foreground mb-2 line-clamp-2" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="70" data-source-line-end="72">${ssrInterpolate($props.product.name_ar)}</h3><div class="mb-4" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="75" data-source-line-end="82"><p class="text-sm font-bold text-primary mb-1" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="76" data-source-line-end="78">${ssrInterpolate($props.product.priceRange_ar)}</p><p class="text-xs text-muted-foreground" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="79" data-source-line-end="81"> ابتداءً من ... مع تمارا/تابي </p></div><div class="flex gap-2" data-source-file="src/components/collections/ProductCard.vue" data-source-line-start="85" data-source-line-end="106">`), _push(ssrRenderComponent($setup.Button, { variant: "default", size: "sm", class: "flex-1 bg-primary hover:bg-primary/90 text-primary-foreground font-bold", as: "a", href: $props.product.detailUrl, "data-source-file": "src/components/collections/ProductCard.vue", "data-source-line-start": "86", "data-source-line-end": "94" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" عرض التفاصيل ");
    else return [createTextVNode(" عرض التفاصيل ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { variant: "outline", size: "sm", class: "flex-1", as: "a", href: $props.product.whatsappInquiryUrl_ar, target: "_blank", rel: "noopener noreferrer", "data-source-file": "src/components/collections/ProductCard.vue", "data-source-line-start": "95", "data-source-line-end": "105" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 16, "data-source-file": "src/components/collections/ProductCard.vue", "data-source-line-start": "104", "data-source-line-end": "104" }, null, _parent2, _scopeId));
    else return [createVNode($setup.SafeIcon, { name: "MessageCircle", size: 16, "data-source-file": "src/components/collections/ProductCard.vue", "data-source-line-start": "104", "data-source-line-end": "104" })];
  }), _: 1 }, _parent)), _push("</div></div></div>");
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/collections/ProductCard.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ProductCard = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "FeaturedProducts", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), featuredProducts = [PRODUCTS_LIST.find((p) => p.id === "stick_sandal_classic"), PRODUCTS_LIST.find((p) => p.id === "bakhoor_oud_patchouli"), PRODUCTS_LIST.find((p) => p.id === "mabkhara_electric_gold"), PRODUCTS_LIST.find((p) => p.id === "gift_eid_deluxe")].filter(Boolean);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, featuredProducts, ProductCard };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" }, _attrs, { "data-source-file": "src/components/collections/FeaturedProducts.vue", "data-source-line-start": "27", "data-source-line-end": "37" }))}><!--[-->`), ssrRenderList($setup.featuredProducts, (product, index) => {
    _push(`<div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8", "transition-all duration-500"])}" style="${ssrRenderStyle({ transitionDelay: $setup.isClient ? `${index * 100}ms` : "0ms" })}" data-source-file="src/components/collections/FeaturedProducts.vue" data-source-line-start="28" data-source-line-end="36">`), _push(product ? ssrRenderComponent($setup.ProductCard, { product, "data-source-file": "src/components/collections/FeaturedProducts.vue", "data-source-line-start": "35", "data-source-line-end": "35" }, null, _parent) : "<!---->"), _push("</div>");
  }), _push("<!--]--></div>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/collections/FeaturedProducts.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const FeaturedProducts = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const $$Collections = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "المتجر - نفحة NAFHA" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/collections.astro" data-source-line-start="14" data-source-line-end="61" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/collections.astro" data-source-line-start="17" data-source-line-end="57" class="flex-1">
      <!-- Hero Section -->
      ${renderComponent($$result2, "CollectionsHero", CollectionsHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/collections/CollectionsHero.vue", "client:component-export": "default" })}
      
      <!-- Trust Icon Bar -->
      <section data-source-file="src/pages/collections.astro" data-source-line-start="22" data-source-line-end="26" class="py-8 md:py-12 bg-card border-b border-border/20">
        <div data-source-file="src/pages/collections.astro" data-source-line-start="23" data-source-line-end="25" class="container mx-auto px-4">
          ${renderComponent($$result2, "TrustIconBar", TrustIconBar, {})}
        </div>
      </section>
      
      <!-- Category Grid -->
      <section data-source-file="src/pages/collections.astro" data-source-line-start="29" data-source-line-end="41" class="py-12 md:py-16">
        <div data-source-file="src/pages/collections.astro" data-source-line-start="30" data-source-line-end="40" class="container mx-auto px-4">
          <div data-source-file="src/pages/collections.astro" data-source-line-start="31" data-source-line-end="38" class="mb-8">
            <h2 data-source-file="src/pages/collections.astro" data-source-line-start="32" data-source-line-end="34" class="text-3xl md:text-4xl font-bold text-foreground mb-2">
              استكشف مجموعاتنا
            </h2>
            <p data-source-file="src/pages/collections.astro" data-source-line-start="35" data-source-line-end="37" class="text-lg text-muted-foreground">
              اختر من بين أربع فئات رئيسية من منتجات العود والبخور الفاخرة
            </p>
          </div>
          ${renderComponent($$result2, "CategoryGrid", CategoryGrid, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/collections/CategoryGrid.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Featured Products -->
      <section data-source-file="src/pages/collections.astro" data-source-line-start="44" data-source-line-end="56" class="py-12 md:py-16 bg-card/50">
        <div data-source-file="src/pages/collections.astro" data-source-line-start="45" data-source-line-end="55" class="container mx-auto px-4">
          <div data-source-file="src/pages/collections.astro" data-source-line-start="46" data-source-line-end="53" class="mb-8">
            <h2 data-source-file="src/pages/collections.astro" data-source-line-start="47" data-source-line-end="49" class="text-3xl md:text-4xl font-bold text-foreground mb-2">
              المنتجات المميزة
            </h2>
            <p data-source-file="src/pages/collections.astro" data-source-line-start="50" data-source-line-end="52" class="text-lg text-muted-foreground">
              اكتشف أفضل اختياراتنا من العملاء والمتخصصين
            </p>
          </div>
          ${renderComponent($$result2, "FeaturedProducts", FeaturedProducts, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/collections/FeaturedProducts.vue", "client:component-export": "default" })}
        </div>
      </section>
    </main>
    
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { variant: "complex" })}
    ${renderComponent($$result2, "WhatsAppFloatingButton", WhatsAppFloatingButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/WhatsAppFloatingButton.vue", "client:component-export": "default" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/collections.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/collections.astro";
const $$url = "/collections.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Collections,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
