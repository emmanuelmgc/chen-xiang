import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { _ as _export_sfc, S as SafeIcon, B as Button, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
/* empty css                         */
import { B as BRAND_STORY_CONTENT, a as BRAND_VALUES } from "../brand_story.Bn8c_GUj.js";
import { C as CardTitle, a as CardHeader, b as CardDescription, c as CardContent, d as Card } from "../CardTitle.CY6jTBdJ.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$5 = defineComponent({ __name: "AboutHero", setup(__props, { expose: __expose }) {
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
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[500px] md:h-[600px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/about/AboutHero.vue", "data-source-line-start": "19", "data-source-line-end": "54" }))} data-v-3208a84e><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: "url(http://image_generate?size=1920x1080&query=A%20luxurious%20Middle%20Eastern%20living%20space%20with%20warm%20golden%20light%20illuminating%20burning%20oud%20incense%20and%20traditional%20mabkhara%20brazier%20emitting%20fragrant%20smoke.%20Elegant%20wooden%20furniture%20and%20fine%20textiles%20create%20an%20atmosphere%20of%20refined%20Arabian%20luxury%20and%20timeless%20scent%20ritual.)", backgroundAttachment: "fixed" })}" data-source-file="src/components/about/AboutHero.vue" data-source-line-start="21" data-source-line-end="27" data-v-3208a84e></div><div class="absolute inset-0 bg-black/30" data-source-file="src/components/about/AboutHero.vue" data-source-line-start="30" data-source-line-end="30" data-v-3208a84e></div><div class="relative h-full flex flex-col items-center justify-center px-4 md:px-8" data-source-file="src/components/about/AboutHero.vue" data-source-line-start="33" data-source-line-end="53" data-v-3208a84e><div class="${ssrRenderClass([($setup.isClient, "opacity-100 translate-y-0"), "text-center max-w-2xl transition-all duration-700"])}" data-source-file="src/components/about/AboutHero.vue" data-source-line-start="34" data-source-line-end="52" data-v-3208a84e><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight" data-source-file="src/components/about/AboutHero.vue" data-source-line-start="39" data-source-line-end="41" data-v-3208a84e> عن نفحة </h1><p class="text-lg md:text-xl text-white/90 mb-6 font-light" data-source-file="src/components/about/AboutHero.vue" data-source-line-start="44" data-source-line-end="46" data-v-3208a84e> قصة العود، والحرفة، والاحترام </p><p class="text-sm md:text-base text-white/80 font-light tracking-wide" data-source-file="src/components/about/AboutHero.vue" data-source-line-start="49" data-source-line-end="51" data-v-3208a84e> A clean ritual of Oud </p></div></div></section>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/AboutHero.vue"), _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const AboutHero = _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-3208a84e"]]);
const _sfc_main$4 = defineComponent({ __name: "BrandClaimSection", setup(__props, { expose: __expose }) {
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-24 px-4 md:px-8 bg-background" }, _attrs, { "data-source-file": "src/components/about/BrandClaimSection.vue", "data-source-line-start": "18", "data-source-line-end": "43" }))}><div class="container mx-auto max-w-3xl" data-source-file="src/components/about/BrandClaimSection.vue" data-source-line-start="19" data-source-line-end="42"><div class="${ssrRenderClass([($setup.isClient, "opacity-100 translate-y-0"), "text-center transition-all duration-700"])}" data-source-file="src/components/about/BrandClaimSection.vue" data-source-line-start="20" data-source-line-end="41"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/about/BrandClaimSection.vue" data-source-line-start="25" data-source-line-end="27">${ssrInterpolate($setup.BRAND_STORY_CONTENT.shortClaim_ar)}</h2><p class="text-lg md:text-xl text-muted-foreground font-light mb-8" data-source-file="src/components/about/BrandClaimSection.vue" data-source-line-start="30" data-source-line-end="32">${ssrInterpolate($setup.BRAND_STORY_CONTENT.shortClaim_en)}</p><div class="w-12 h-1 bg-primary mx-auto mb-8" data-source-file="src/components/about/BrandClaimSection.vue" data-source-line-start="35" data-source-line-end="35"></div><p class="text-base md:text-lg text-foreground leading-relaxed" data-source-file="src/components/about/BrandClaimSection.vue" data-source-line-start="38" data-source-line-end="40">${ssrInterpolate($setup.BRAND_STORY_CONTENT.brandPrinciple_ar)}</p></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/BrandClaimSection.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BrandClaimSection = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({ __name: "BrandStorySection", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const storyParagraphs = BRAND_STORY_CONTENT.longStory_ar.split("。").filter((p) => p.trim()), __returned__ = { isClient, storyParagraphs, get BRAND_STORY_CONTENT() {
    return BRAND_STORY_CONTENT;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-24 px-4 md:px-8 bg-white/50" }, _attrs, { "data-source-file": "src/components/about/BrandStorySection.vue", "data-source-line-start": "21", "data-source-line-end": "64" }))}><div class="container mx-auto max-w-3xl" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="22" data-source-line-end="63"><div class="${ssrRenderClass([($setup.isClient, "opacity-100 translate-y-0"), "mb-12 transition-all duration-700"])}" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="24" data-source-line-end="32"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="28" data-source-line-end="30"> قصتنا الكاملة </h2><div class="w-12 h-1 bg-primary" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="31" data-source-line-end="31"></div></div><div class="space-y-6 md:space-y-8" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="35" data-source-line-end="45"><!--[-->`), ssrRenderList($setup.storyParagraphs, (paragraph, index) => {
    _push(`<p class="${ssrRenderClass([($setup.isClient, "opacity-100 translate-y-0"), "text-base md:text-lg text-foreground leading-relaxed transition-all duration-700"])}" style="${ssrRenderStyle({ transitionDelay: `${(index + 1) * 100}ms` })}" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="36" data-source-line-end="44">${ssrInterpolate(paragraph)}。 </p>`);
  }), _push(`<!--]--></div><div class="${ssrRenderClass([($setup.isClient, "opacity-100 translate-y-0"), "mt-16 md:mt-20 transition-all duration-700"])}" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="48" data-source-line-end="62"><div class="rounded-lg overflow-hidden shadow-card mb-6" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="52" data-source-line-end="58"><img${ssrRenderAttr("src", $setup.BRAND_STORY_CONTENT.sourcingMapImage)} alt="خريطة مصادر العود" class="w-full h-auto object-cover" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="53" data-source-line-end="57"></div><p class="text-base md:text-lg text-foreground leading-relaxed" data-source-file="src/components/about/BrandStorySection.vue" data-source-line-start="59" data-source-line-end="61">${ssrInterpolate($setup.BRAND_STORY_CONTENT.sourcingDescription_ar)}</p></div></div></section>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/BrandStorySection.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BrandStorySection = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "ValueCard", props: { value: {} }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { SafeIcon, get Card() {
    return Card;
  }, get CardContent() {
    return CardContent;
  }, get CardDescription() {
    return CardDescription;
  }, get CardHeader() {
    return CardHeader;
  }, get CardTitle() {
    return CardTitle;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.Card, mergeProps({ class: "h-full border border-border/30 hover:shadow-card transition-shadow duration-300" }, _attrs, { "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "15", "data-source-line-end": "42" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.CardHeader, { class: "text-center", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "16", "data-source-line-end": "31" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3(`<div class="flex justify-center mb-4" data-source-file="src/components/about/ValueCard.vue" data-source-line-start="18" data-source-line-end="22"${_scopeId2}><div class="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center" data-source-file="src/components/about/ValueCard.vue" data-source-line-start="19" data-source-line-end="21"${_scopeId2}>`), _push3(ssrRenderComponent($setup.SafeIcon, { name: $props.value.iconName, size: 32, class: "text-accent", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "20", "data-source-line-end": "20" }, null, _parent3, _scopeId2)), _push3("</div></div>"), _push3(ssrRenderComponent($setup.CardTitle, { class: "text-xl md:text-2xl text-foreground", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "25", "data-source-line-end": "27" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4(`${ssrInterpolate($props.value.title_ar)}`);
        else return [createTextVNode(toDisplayString($props.value.title_ar), 1)];
      }), _: 1 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.CardDescription, { class: "text-sm text-muted-foreground mt-2", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "28", "data-source-line-end": "30" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4(`${ssrInterpolate($props.value.title_en)}`);
        else return [createTextVNode(toDisplayString($props.value.title_en), 1)];
      }), _: 1 }, _parent3, _scopeId2));
      else return [createVNode("div", { class: "flex justify-center mb-4", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "18", "data-source-line-end": "22" }, [createVNode("div", { class: "w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "19", "data-source-line-end": "21" }, [createVNode($setup.SafeIcon, { name: $props.value.iconName, size: 32, class: "text-accent", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "20", "data-source-line-end": "20" }, null, 8, ["name"])])]), createVNode($setup.CardTitle, { class: "text-xl md:text-2xl text-foreground", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "25", "data-source-line-end": "27" }, { default: withCtx(() => [createTextVNode(toDisplayString($props.value.title_ar), 1)]), _: 1 }), createVNode($setup.CardDescription, { class: "text-sm text-muted-foreground mt-2", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "28", "data-source-line-end": "30" }, { default: withCtx(() => [createTextVNode(toDisplayString($props.value.title_en), 1)]), _: 1 })];
    }), _: 1 }, _parent2, _scopeId)), _push2(ssrRenderComponent($setup.CardContent, { "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "33", "data-source-line-end": "41" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3(`<p class="text-base text-foreground leading-relaxed mb-3" data-source-file="src/components/about/ValueCard.vue" data-source-line-start="35" data-source-line-end="37"${_scopeId2}>${ssrInterpolate($props.value.description_ar)}</p><p class="text-sm text-muted-foreground leading-relaxed" data-source-file="src/components/about/ValueCard.vue" data-source-line-start="38" data-source-line-end="40"${_scopeId2}>${ssrInterpolate($props.value.description_en)}</p>`);
      else return [createVNode("p", { class: "text-base text-foreground leading-relaxed mb-3", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, toDisplayString($props.value.description_ar), 1), createVNode("p", { class: "text-sm text-muted-foreground leading-relaxed", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "38", "data-source-line-end": "40" }, toDisplayString($props.value.description_en), 1)];
    }), _: 1 }, _parent2, _scopeId));
    else return [createVNode($setup.CardHeader, { class: "text-center", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "16", "data-source-line-end": "31" }, { default: withCtx(() => [createVNode("div", { class: "flex justify-center mb-4", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "18", "data-source-line-end": "22" }, [createVNode("div", { class: "w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "19", "data-source-line-end": "21" }, [createVNode($setup.SafeIcon, { name: $props.value.iconName, size: 32, class: "text-accent", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "20", "data-source-line-end": "20" }, null, 8, ["name"])])]), createVNode($setup.CardTitle, { class: "text-xl md:text-2xl text-foreground", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "25", "data-source-line-end": "27" }, { default: withCtx(() => [createTextVNode(toDisplayString($props.value.title_ar), 1)]), _: 1 }), createVNode($setup.CardDescription, { class: "text-sm text-muted-foreground mt-2", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "28", "data-source-line-end": "30" }, { default: withCtx(() => [createTextVNode(toDisplayString($props.value.title_en), 1)]), _: 1 })]), _: 1 }), createVNode($setup.CardContent, { "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "33", "data-source-line-end": "41" }, { default: withCtx(() => [createVNode("p", { class: "text-base text-foreground leading-relaxed mb-3", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, toDisplayString($props.value.description_ar), 1), createVNode("p", { class: "text-sm text-muted-foreground leading-relaxed", "data-source-file": "src/components/about/ValueCard.vue", "data-source-line-start": "38", "data-source-line-end": "40" }, toDisplayString($props.value.description_en), 1)]), _: 1 })];
  }), _: 1 }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/ValueCard.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ValueCard = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "BrandValuesGrid", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, get BRAND_VALUES() {
    return BRAND_VALUES;
  }, ValueCard };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-24 px-4 md:px-8 bg-background" }, _attrs, { "data-source-file": "src/components/about/BrandValuesGrid.vue", "data-source-line-start": "19", "data-source-line-end": "47" }))}><div class="container mx-auto" data-source-file="src/components/about/BrandValuesGrid.vue" data-source-line-start="20" data-source-line-end="46"><div class="${ssrRenderClass([($setup.isClient, "opacity-100 translate-y-0"), "text-center mb-12 md:mb-16 transition-all duration-700"])}" data-source-file="src/components/about/BrandValuesGrid.vue" data-source-line-start="22" data-source-line-end="32"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-4" data-source-file="src/components/about/BrandValuesGrid.vue" data-source-line-start="26" data-source-line-end="28"> قيمنا الأساسية </h2><p class="text-lg text-muted-foreground" data-source-file="src/components/about/BrandValuesGrid.vue" data-source-line-start="29" data-source-line-end="31"> ثلاث ركائز تحدد هويتنا وتوجه كل قراراتنا </p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8" data-source-file="src/components/about/BrandValuesGrid.vue" data-source-line-start="35" data-source-line-end="45"><!--[-->`), ssrRenderList($setup.BRAND_VALUES, (value, index) => {
    _push(`<div class="${ssrRenderClass([($setup.isClient, "opacity-100 translate-y-0"), "transition-all duration-700"])}" style="${ssrRenderStyle({ transitionDelay: `${(index + 1) * 150}ms` })}" data-source-file="src/components/about/BrandValuesGrid.vue" data-source-line-start="36" data-source-line-end="44">`), _push(ssrRenderComponent($setup.ValueCard, { value, "data-source-file": "src/components/about/BrandValuesGrid.vue", "data-source-line-start": "43", "data-source-line-end": "43" }, null, _parent)), _push("</div>");
  }), _push("<!--]--></div></div></section>");
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/BrandValuesGrid.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BrandValuesGrid = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "CallToActionSection", setup(__props, { expose: __expose }) {
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-16 md:py-24 px-4 md:px-8 bg-white/50" }, _attrs, { "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "19", "data-source-line-end": "81" }))}><div class="container mx-auto max-w-3xl" data-source-file="src/components/about/CallToActionSection.vue" data-source-line-start="20" data-source-line-end="80"><div class="${ssrRenderClass([($setup.isClient, "opacity-100 translate-y-0"), "text-center transition-all duration-700"])}" data-source-file="src/components/about/CallToActionSection.vue" data-source-line-start="21" data-source-line-end="79"><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6" data-source-file="src/components/about/CallToActionSection.vue" data-source-line-start="26" data-source-line-end="28"> استكشف رحلتنا بعمق أكثر </h2><p class="text-lg text-muted-foreground mb-8 leading-relaxed" data-source-file="src/components/about/CallToActionSection.vue" data-source-line-start="31" data-source-line-end="33"> تعرّف على كيفية اختيارنا للمواد الخام، وعمليات الإنتاج الدقيقة، والالتزام بالجودة والشفافية </p><div class="flex flex-col md:flex-row gap-4 justify-center" data-source-file="src/components/about/CallToActionSection.vue" data-source-line-start="36" data-source-line-end="59">`), _push(ssrRenderComponent($setup.Button, { as: "a", href: "./sourcing-craft.html", size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "38", "data-source-line-end": "46" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "Leaf", size: 20, class: "ml-2", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "44", "data-source-line-end": "44" }, null, _parent2, _scopeId)), _push2(" تعرّف على المصدر والحرفة ");
    else return [createVNode($setup.SafeIcon, { name: "Leaf", size: 20, class: "ml-2", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "44", "data-source-line-end": "44" }), createTextVNode(" تعرّف على المصدر والحرفة ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { as: "a", href: "./quality-promise.html", variant: "outline", size: "lg", class: "border-primary text-primary hover:bg-primary/5", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "49", "data-source-line-end": "58" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "CheckCircle", size: 20, class: "ml-2", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "56", "data-source-line-end": "56" }, null, _parent2, _scopeId)), _push2(" وعد الجودة ");
    else return [createVNode($setup.SafeIcon, { name: "CheckCircle", size: 20, class: "ml-2", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "56", "data-source-line-end": "56" }), createTextVNode(" وعد الجودة ")];
  }), _: 1 }, _parent)), _push('</div><div class="my-8 md:my-12 border-t border-border/30" data-source-file="src/components/about/CallToActionSection.vue" data-source-line-start="62" data-source-line-end="62"></div><div data-source-file="src/components/about/CallToActionSection.vue" data-source-line-start="65" data-source-line-end="78"><p class="text-base text-muted-foreground mb-4" data-source-file="src/components/about/CallToActionSection.vue" data-source-line-start="66" data-source-line-end="68"> جاهز لاستكشاف منتجاتنا؟ </p>'), _push(ssrRenderComponent($setup.Button, { as: "a", href: "./collections.html", size: "lg", class: "bg-accent hover:bg-accent/90 text-accent-foreground", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "69", "data-source-line-end": "77" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "ShoppingBag", size: 20, class: "ml-2", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "75", "data-source-line-end": "75" }, null, _parent2, _scopeId)), _push2(" استكشف المجموعة ");
    else return [createVNode($setup.SafeIcon, { name: "ShoppingBag", size: 20, class: "ml-2", "data-source-file": "src/components/about/CallToActionSection.vue", "data-source-line-start": "75", "data-source-line-end": "75" }), createTextVNode(" استكشف المجموعة ")];
  }), _: 1 }, _parent)), _push("</div></div></div></section>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/about/CallToActionSection.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CallToActionSection = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const $$About = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "عن نفحة NAFHA - قصتنا وقيمنا" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/about.astro" data-source-line-start="14" data-source-line-end="35" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/about.astro" data-source-line-start="17" data-source-line-end="32" class="flex-1">
      <!-- Hero Section -->
      ${renderComponent($$result2, "AboutHero", AboutHero, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/about/AboutHero.vue", "client:component-export": "default" })}
      
      <!-- Brand Claim Section -->
      ${renderComponent($$result2, "BrandClaimSection", BrandClaimSection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/about/BrandClaimSection.vue", "client:component-export": "default" })}
      
      <!-- Brand Story Section -->
      ${renderComponent($$result2, "BrandStorySection", BrandStorySection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/about/BrandStorySection.vue", "client:component-export": "default" })}
      
      <!-- Brand Values Grid -->
      ${renderComponent($$result2, "BrandValuesGrid", BrandValuesGrid, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/about/BrandValuesGrid.vue", "client:component-export": "default" })}
      
      <!-- Call to Action Section -->
      ${renderComponent($$result2, "CallToActionSection", CallToActionSection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/about/CallToActionSection.vue", "client:component-export": "default" })}
    </main>
    
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { "client:load": true, variant: "complex", "client:component-hydration": "load", "client:component-path": "@/components/common/CommonFooter.vue", "client:component-export": "default" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/about.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/about.astro";
const $$url = "/about.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
