import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { _ as _export_sfc, B as Button, S as SafeIcon, c as cn, I as Input, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, createCommentVNode, renderSlot } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
/* empty css                                     */
import { C as CardTitle, a as CardHeader, b as CardDescription, c as CardContent, d as Card } from "../CardTitle.CY6jTBdJ.js";
import { B as Badge } from "../index.C1v01KQ3.js";
import { L as Label, T as Textarea } from "../Label.Bbv9J5li.js";
import { reactiveOmit } from "@vueuse/core";
import { Check } from "lucide-vue-next";
import { useForwardPropsEmits, CheckboxRoot, CheckboxIndicator } from "reka-ui";
import { S as SelectValue, a as SelectTrigger, b as SelectItem, c as SelectContent, d as Select } from "../SelectValue.gl2_I9V2.js";
import { toast } from "vue-sonner";
import { T as TrustIconBar } from "../TrustIconBar.Ml2XtLc6.js";
import { renderers } from "../renderers.mjs";
const B2B_HERO_CONTENT = {
  heroImage: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/42bf18d9-d5f1-42c4-81e7-4020e344563c.png",
  title_ar: "NAFHA للأعمال: ارتقاء تجربة الضيافة",
  title_en: "NAFHA for Business: Elevating the Hospitality Experience",
  subtitle_ar: "حلول عود مخصصة للفنادق الفاخرة، والمنتجعات الصحية، والفعاليات الخاصة.",
  subtitle_en: "Tailored Oud solutions for luxury hotels, wellness centers, and private events."
};
const B2B_VALUE_PROPS = [
  {
    iconName: "DoorOpen",
    title_ar: "بصمة عطر ترحيبية",
    title_en: "Signature Welcome Scent",
    description_ar: "ابتكر رائحة فريدة لمدخل فندقك أو ناديك الرياضي لترك انطباع لا ينسى.",
    description_en: "Create a unique aroma for your hotel entrance or spa to leave an unforgettable impression."
  },
  {
    iconName: "Bed",
    title_ar: "تجربة الغرف الممتازة",
    title_en: "Premium Guest Room Experience",
    description_ar: "نقدم أعواد بخور منخفضة الدخان آمنة وسهلة الاستخدام، مثالية لرفاهية الضيوف في الغرف المغلقة.",
    description_en: "Provide safe, easy-to-use low-smoke incense sticks perfect for guest amenities in enclosed rooms."
  },
  {
    iconName: "Gift",
    title_ar: "هدايا ومناسبات خاصة",
    title_en: "Corporate Gifting & Events",
    description_ar: "تخصيص مجموعات هدايا فاخرة لحفلات الزفاف، المؤتمرات، وتوزيعات العيد.",
    description_en: "Customizing luxury gift sets for weddings, conferences, and Eid handouts."
  }
];
const B2B_USE_CASES = [
  {
    id: "lobby",
    title_ar: "ردهات الاستقبال (اللوبي)",
    title_en: "Lobby & Reception Areas",
    description_ar: "توفير بخور عالي الجودة يدوم طويلاً، لتعزيز أجواء الأناقة والترحيب في المساحات الواسعة.",
    description_en: "Providing high-quality, long-lasting bakhoor to enhance the atmosphere of elegance and welcome in large spaces.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/485f39dc-8e62-46b7-9edd-2c6497e5b407.png"
  },
  {
    id: "majlis",
    title_ar: "المجالس وغرف VIP",
    title_en: "Majlis and VIP Rooms",
    description_ar: "استخدام رقائق عود مختارة بعناية وطقوس تقديم راقية لأهم ضيوفك.",
    description_en: "Utilizing carefully selected oud chips and refined service rituals for your most important guests.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/deb2746a-df53-4aed-8b6a-6f401bb494f1.png"
  },
  {
    id: "guest_rooms",
    title_ar: "أجنحة الإقامة الفاخرة",
    title_en: "Luxury Guest Suites",
    description_ar: "إدخال أعواد البخور منخفضة الدخان كجزء من روتين الاسترخاء المسائي للنزلاء.",
    description_en: "Incorporating low-smoke incense sticks as part of the evening relaxation ritual for guests.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/0fa14d26-ecf0-4d71-a300-33e5cbe494e9.png"
  },
  {
    id: "wedding_gifting",
    title_ar: "توزيعات حفلات الزفاف",
    title_en: "Wedding Gifting Favors",
    description_ar: "تصميم مجموعات إهداء مخصصة للضيوف تحمل توقيع الحدث لترك ذكرى جميلة.",
    description_en: "Designing custom gift sets for wedding guests that carry the event's signature, leaving a beautiful memory.",
    imageUrl: "https://spark-builder.s3.cn-north-1.amazonaws.com.cn/image/2026/1/8/38977709-8a6e-4e4c-805f-a403d1283187.png"
  }
];
const B2B_SERVICE_PACKAGES = [
  {
    id: "basic",
    name_ar: "الباقة الأساسية",
    name_en: "Essentials Package",
    deliverables_ar: ["الوصول إلى قائمة الأسعار الخاصة بالجملة", "استشارة مجانية أولية", "تسليم دفعة واحدة"],
    deliverables_en: ["Access to wholesale pricing list", "Initial free consultation", "Single batch delivery"]
  },
  {
    id: "standard",
    name_ar: "باقة الحلول القياسية",
    name_en: "Standard Solutions Package",
    deliverables_ar: ["كل ما في الباقة الأساسية", "تخصيص خيارات التغليف", "خدمات إعادة التعبئة الدورية", "تقرير استخدام المنتج شهرياً"],
    deliverables_en: ["All Essentials features", "Custom packaging options", "Periodic replenishment services", "Monthly product usage report"]
  },
  {
    id: "tailored",
    name_ar: "الباقة المصممة خصيصاً",
    name_en: "Fully Tailored Package",
    deliverables_ar: ["كل ما في الباقة القياسية", "تطوير طيف عطري حصري (Signature Scent)", "حلول اللوغو والتسمية على المنتج (OEM)", "دعم متخصص للمناسبات الكبرى"],
    deliverables_en: ["All Standard features", "Exclusive Signature Scent development", "Product logo and labeling solutions (OEM)", "Dedicated support for major events"]
  }
];
const _sfc_main$6 = defineComponent({ __name: "B2BHero", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), isVisible = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  function scrollToForm() {
    const formElement = document.getElementById("b2b-inquiry-form");
    formElement && formElement.scrollIntoView({ behavior: "smooth" });
  }
  function navigateToWhatsApp() {
    window.open("https://wa.me/966500000000?text=مرحباً NAFHA، أود الاستفسار عن خدمات B2B", "_blank");
  }
  const __returned__ = { isClient, isVisible, scrollToForm, navigateToWhatsApp, get Button() {
    return Button;
  }, get B2B_HERO_CONTENT() {
    return B2B_HERO_CONTENT;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[500px] md:h-[600px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/b2b-hotels-venues/B2BHero.vue", "data-source-line-start": "31", "data-source-line-end": "84" }))} data-v-4df5a903><div class="absolute inset-0" data-source-file="src/components/b2b-hotels-venues/B2BHero.vue" data-source-line-start="33" data-source-line-end="40" data-v-4df5a903><img${ssrRenderAttr("src", $setup.B2B_HERO_CONTENT.heroImage)} alt="B2B Hero" class="w-full h-full object-cover" data-source-file="src/components/b2b-hotels-venues/B2BHero.vue" data-source-line-start="34" data-source-line-end="38" data-v-4df5a903><div class="absolute inset-0 bg-black/30" data-source-file="src/components/b2b-hotels-venues/B2BHero.vue" data-source-line-start="39" data-source-line-end="39" data-v-4df5a903></div></div><div class="relative h-full flex items-center justify-center" data-source-file="src/components/b2b-hotels-venues/B2BHero.vue" data-source-line-start="43" data-source-line-end="83" data-v-4df5a903><div class="container mx-auto px-4 text-center text-white" data-source-file="src/components/b2b-hotels-venues/B2BHero.vue" data-source-line-start="44" data-source-line-end="82" data-v-4df5a903><h1 class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "text-4xl md:text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700"])}" data-source-file="src/components/b2b-hotels-venues/B2BHero.vue" data-source-line-start="46" data-source-line-end="51" data-v-4df5a903>${ssrInterpolate($setup.B2B_HERO_CONTENT.title_ar)}</h1><p class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-100"])}" data-source-file="src/components/b2b-hotels-venues/B2BHero.vue" data-source-line-start="54" data-source-line-end="59" data-v-4df5a903>${ssrInterpolate($setup.B2B_HERO_CONTENT.subtitle_ar)}</p><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4", "flex flex-col md:flex-row gap-4 justify-center transition-all duration-700 delay-200"])}" data-source-file="src/components/b2b-hotels-venues/B2BHero.vue" data-source-line-start="62" data-source-line-end="81" data-v-4df5a903>`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold", onClick: $setup.scrollToForm, "data-source-file": "src/components/b2b-hotels-venues/B2BHero.vue", "data-source-line-start": "66", "data-source-line-end": "72" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" اطلب عرض سعر ");
    else return [createTextVNode(" اطلب عرض سعر ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", class: "border-white text-white hover:bg-white/10", onClick: $setup.navigateToWhatsApp, "data-source-file": "src/components/b2b-hotels-venues/B2BHero.vue", "data-source-line-start": "73", "data-source-line-end": "80" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" تواصل عبر واتساب ");
    else return [createTextVNode(" تواصل عبر واتساب ")];
  }), _: 1 }, _parent)), _push("</div></div></div></section>");
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/b2b-hotels-venues/B2BHero.vue"), _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const B2BHero = _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6], ["__scopeId", "data-v-4df5a903"]]);
const _sfc_main$5 = defineComponent({ __name: "B2BValueProps", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { valuePropItems: B2B_VALUE_PROPS, SafeIcon, get Card() {
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
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, _attrs, { "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "11", "data-source-line-end": "31" }))} data-v-d3f8b699><!--[-->`), ssrRenderList($setup.valuePropItems, (prop, index) => {
    _push(ssrRenderComponent($setup.Card, { key: index, class: "border border-border/30 hover:shadow-card transition-all duration-300 hover:border-primary/30", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "12", "data-source-line-end": "30" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(ssrRenderComponent($setup.CardHeader, { "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "17", "data-source-line-end": "24" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(`<div class="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4" data-source-file="src/components/b2b-hotels-venues/B2BValueProps.vue" data-source-line-start="18" data-source-line-end="20" data-v-d3f8b699${_scopeId2}>`), _push3(ssrRenderComponent($setup.SafeIcon, { name: prop.iconName, size: 28, class: "text-accent", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "19", "data-source-line-end": "19" }, null, _parent3, _scopeId2)), _push3("</div>"), _push3(ssrRenderComponent($setup.CardTitle, { class: "text-xl text-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "21", "data-source-line-end": "23" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`${ssrInterpolate(prop.title_ar)}`);
          else return [createTextVNode(toDisplayString(prop.title_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2));
        else return [createVNode("div", { class: "w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "18", "data-source-line-end": "20" }, [createVNode($setup.SafeIcon, { name: prop.iconName, size: 28, class: "text-accent", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "19", "data-source-line-end": "19" }, null, 8, ["name"])]), createVNode($setup.CardTitle, { class: "text-xl text-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "21", "data-source-line-end": "23" }, { default: withCtx(() => [createTextVNode(toDisplayString(prop.title_ar), 1)]), _: 2 }, 1024)];
      }), _: 2 }, _parent2, _scopeId)), _push2(ssrRenderComponent($setup.CardContent, { "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "25", "data-source-line-end": "29" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(ssrRenderComponent($setup.CardDescription, { class: "text-base text-muted-foreground leading-relaxed", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "26", "data-source-line-end": "28" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`${ssrInterpolate(prop.description_ar)}`);
          else return [createTextVNode(toDisplayString(prop.description_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2));
        else return [createVNode($setup.CardDescription, { class: "text-base text-muted-foreground leading-relaxed", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "26", "data-source-line-end": "28" }, { default: withCtx(() => [createTextVNode(toDisplayString(prop.description_ar), 1)]), _: 2 }, 1024)];
      }), _: 2 }, _parent2, _scopeId));
      else return [createVNode($setup.CardHeader, { "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "17", "data-source-line-end": "24" }, { default: withCtx(() => [createVNode("div", { class: "w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mb-4", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "18", "data-source-line-end": "20" }, [createVNode($setup.SafeIcon, { name: prop.iconName, size: 28, class: "text-accent", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "19", "data-source-line-end": "19" }, null, 8, ["name"])]), createVNode($setup.CardTitle, { class: "text-xl text-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "21", "data-source-line-end": "23" }, { default: withCtx(() => [createTextVNode(toDisplayString(prop.title_ar), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), createVNode($setup.CardContent, { "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "25", "data-source-line-end": "29" }, { default: withCtx(() => [createVNode($setup.CardDescription, { class: "text-base text-muted-foreground leading-relaxed", "data-source-file": "src/components/b2b-hotels-venues/B2BValueProps.vue", "data-source-line-start": "26", "data-source-line-end": "28" }, { default: withCtx(() => [createTextVNode(toDisplayString(prop.description_ar), 1)]), _: 2 }, 1024)]), _: 2 }, 1024)];
    }), _: 2 }, _parent));
  }), _push("<!--]--></div>");
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/b2b-hotels-venues/B2BValueProps.vue"), _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const B2BValueProps = _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5], ["__scopeId", "data-v-d3f8b699"]]);
const _sfc_main$4 = defineComponent({ __name: "B2BUseCases", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { useCases: B2B_USE_CASES };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-12" }, _attrs, { "data-source-file": "src/components/b2b-hotels-venues/B2BUseCases.vue", "data-source-line-start": "10", "data-source-line-end": "45" }))} data-v-16f49d5c><!--[-->`), ssrRenderList($setup.useCases, (useCase, index) => {
    _push(`<div class="${ssrRenderClass([index % 2 === 1 ? "md:flex-row-reverse" : "", "grid grid-cols-1 md:grid-cols-2 gap-8 items-center"])}" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="11" data-source-line-end="44" data-v-16f49d5c><div class="${ssrRenderClass([index % 2 === 1 ? "md:order-2" : "md:order-1", "relative h-80 rounded-lg overflow-hidden shadow-card"])}" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="18" data-source-line-end="27" data-v-16f49d5c><img${ssrRenderAttr("src", useCase.imageUrl)}${ssrRenderAttr("alt", useCase.title_ar)} class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="22" data-source-line-end="26" data-v-16f49d5c></div><div class="${ssrRenderClass(index % 2 === 1 ? "md:order-1" : "md:order-2")}" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="30" data-source-line-end="43" data-v-16f49d5c><h3 class="text-2xl md:text-3xl font-bold text-foreground mb-4" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="31" data-source-line-end="33" data-v-16f49d5c>${ssrInterpolate(useCase.title_ar)}</h3><p class="text-lg text-muted-foreground leading-relaxed mb-6" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="34" data-source-line-end="36" data-v-16f49d5c>${ssrInterpolate(useCase.description_ar)}</p><div class="flex items-center gap-2 text-accent font-medium" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="37" data-source-line-end="42" data-v-16f49d5c><span data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="38" data-source-line-end="38" data-v-16f49d5c>اكتشف المزيد</span><svg class="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="39" data-source-line-end="41" data-v-16f49d5c><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-source-file="src/components/b2b-hotels-venues/B2BUseCases.vue" data-source-line-start="40" data-source-line-end="40" data-v-16f49d5c></path></svg></div></div></div>`);
  }), _push("<!--]--></div>");
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/b2b-hotels-venues/B2BUseCases.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const B2BUseCases = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-16f49d5c"]]);
const _sfc_main$3 = defineComponent({ __name: "B2BServicePackages", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { packages: B2B_SERVICE_PACKAGES, packageHighlights: { basic: false, standard: false, tailored: true }, get Card() {
    return Card;
  }, get CardContent() {
    return CardContent;
  }, get CardHeader() {
    return CardHeader;
  }, get CardTitle() {
    return CardTitle;
  }, get Badge() {
    return Badge;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 md:grid-cols-3 gap-6" }, _attrs, { "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "18", "data-source-line-end": "63" }))} data-v-05543774><!--[-->`), ssrRenderList($setup.packages, (pkg) => {
    _push(ssrRenderComponent($setup.Card, { key: pkg.id, class: ["border border-border/30 relative overflow-hidden transition-all duration-300", $setup.packageHighlights[pkg.id] ? "ring-2 ring-primary shadow-card md:scale-105" : "hover:shadow-card hover:border-primary/30"], "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "19", "data-source-line-end": "62" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) $setup.packageHighlights[pkg.id] ? (_push2(`<div class="absolute top-4 right-4" data-source-file="src/components/b2b-hotels-venues/B2BServicePackages.vue" data-source-line-start="28" data-source-line-end="32" data-v-05543774${_scopeId}>`), _push2(ssrRenderComponent($setup.Badge, { class: "bg-primary text-primary-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "29", "data-source-line-end": "31" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(" الأكثر شيوعاً ");
        else return [createTextVNode(" الأكثر شيوعاً ")];
      }), _: 2 }, _parent2, _scopeId)), _push2("</div>")) : _push2("<!---->"), _push2(ssrRenderComponent($setup.CardHeader, { class: "pt-8", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "34", "data-source-line-end": "38" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(ssrRenderComponent($setup.CardTitle, { class: "text-2xl text-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) _push4(`${ssrInterpolate(pkg.name_ar)}`);
          else return [createTextVNode(toDisplayString(pkg.name_ar), 1)];
        }), _: 2 }, _parent3, _scopeId2));
        else return [createVNode($setup.CardTitle, { class: "text-2xl text-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, { default: withCtx(() => [createTextVNode(toDisplayString(pkg.name_ar), 1)]), _: 2 }, 1024)];
      }), _: 2 }, _parent2, _scopeId)), _push2(ssrRenderComponent($setup.CardContent, { "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "40", "data-source-line-end": "61" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
        if (_push3) _push3(`<ul class="space-y-3" data-source-file="src/components/b2b-hotels-venues/B2BServicePackages.vue" data-source-line-start="41" data-source-line-end="50" data-v-05543774${_scopeId2}><!--[-->`), ssrRenderList(pkg.deliverables_ar, (deliverable, index) => {
          _push3(`<li class="flex items-start gap-3" data-source-file="src/components/b2b-hotels-venues/B2BServicePackages.vue" data-source-line-start="42" data-source-line-end="49" data-v-05543774${_scopeId2}>`), _push3(ssrRenderComponent($setup.SafeIcon, { name: "Check", size: 20, class: "text-accent flex-shrink-0 mt-0.5", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "47", "data-source-line-end": "47" }, null, _parent3, _scopeId2)), _push3(`<span class="text-muted-foreground" data-source-file="src/components/b2b-hotels-venues/B2BServicePackages.vue" data-source-line-start="48" data-source-line-end="48" data-v-05543774${_scopeId2}>${ssrInterpolate(deliverable)}</span></li>`);
        }), _push3(`<!--]--></ul><button class="${ssrRenderClass([$setup.packageHighlights[pkg.id] ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/80", "w-full mt-8 py-3 px-4 rounded-lg font-bold transition-all duration-300"])}" data-source-file="src/components/b2b-hotels-venues/B2BServicePackages.vue" data-source-line-start="53" data-source-line-end="60" data-v-05543774${_scopeId2}> اختر هذه الباقة </button>`);
        else return [createVNode("ul", { class: "space-y-3", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "41", "data-source-line-end": "50" }, [(openBlock(true), createBlock(Fragment, null, renderList(pkg.deliverables_ar, (deliverable, index) => (openBlock(), createBlock("li", { key: index, class: "flex items-start gap-3", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "42", "data-source-line-end": "49" }, [createVNode($setup.SafeIcon, { name: "Check", size: 20, class: "text-accent flex-shrink-0 mt-0.5", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "47", "data-source-line-end": "47" }), createVNode("span", { class: "text-muted-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "48", "data-source-line-end": "48" }, toDisplayString(deliverable), 1)]))), 128))]), createVNode("button", { class: ["w-full mt-8 py-3 px-4 rounded-lg font-bold transition-all duration-300", $setup.packageHighlights[pkg.id] ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/80"], "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "53", "data-source-line-end": "60" }, " اختر هذه الباقة ", 2)];
      }), _: 2 }, _parent2, _scopeId));
      else return [$setup.packageHighlights[pkg.id] ? (openBlock(), createBlock("div", { key: 0, class: "absolute top-4 right-4", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "28", "data-source-line-end": "32" }, [createVNode($setup.Badge, { class: "bg-primary text-primary-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "29", "data-source-line-end": "31" }, { default: withCtx(() => [createTextVNode(" الأكثر شيوعاً ")]), _: 1 })])) : createCommentVNode("", true), createVNode($setup.CardHeader, { class: "pt-8", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "34", "data-source-line-end": "38" }, { default: withCtx(() => [createVNode($setup.CardTitle, { class: "text-2xl text-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, { default: withCtx(() => [createTextVNode(toDisplayString(pkg.name_ar), 1)]), _: 2 }, 1024)]), _: 2 }, 1024), createVNode($setup.CardContent, { "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "40", "data-source-line-end": "61" }, { default: withCtx(() => [createVNode("ul", { class: "space-y-3", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "41", "data-source-line-end": "50" }, [(openBlock(true), createBlock(Fragment, null, renderList(pkg.deliverables_ar, (deliverable, index) => (openBlock(), createBlock("li", { key: index, class: "flex items-start gap-3", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "42", "data-source-line-end": "49" }, [createVNode($setup.SafeIcon, { name: "Check", size: 20, class: "text-accent flex-shrink-0 mt-0.5", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "47", "data-source-line-end": "47" }), createVNode("span", { class: "text-muted-foreground", "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "48", "data-source-line-end": "48" }, toDisplayString(deliverable), 1)]))), 128))]), createVNode("button", { class: ["w-full mt-8 py-3 px-4 rounded-lg font-bold transition-all duration-300", $setup.packageHighlights[pkg.id] ? "bg-primary text-primary-foreground hover:bg-primary/90" : "bg-secondary text-foreground hover:bg-secondary/80"], "data-source-file": "src/components/b2b-hotels-venues/B2BServicePackages.vue", "data-source-line-start": "53", "data-source-line-end": "60" }, " اختر هذه الباقة ", 2)]), _: 2 }, 1024)];
    }), _: 2 }, _parent));
  }), _push("<!--]--></div>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/b2b-hotels-venues/B2BServicePackages.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const B2BServicePackages = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3], ["__scopeId", "data-v-05543774"]]);
const _sfc_main$2 = defineComponent({ __name: "Checkbox", props: { defaultValue: {}, modelValue: {}, disabled: { type: Boolean }, value: {}, id: {}, trueValue: {}, falseValue: {}, asChild: { type: Boolean }, as: {}, name: {}, required: { type: Boolean }, class: { type: [Boolean, null, String, Object, Array] } }, emits: ["update:modelValue"], setup(__props, { expose: __expose, emit: __emit }) {
  __expose();
  const props = __props, emits = __emit, delegatedProps = reactiveOmit(props, "class"), forwarded = useForwardPropsEmits(delegatedProps, emits), __returned__ = { props, emits, delegatedProps, forwarded, get Check() {
    return Check;
  }, get CheckboxIndicator() {
    return CheckboxIndicator;
  }, get CheckboxRoot() {
    return CheckboxRoot;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.CheckboxRoot, mergeProps($setup.forwarded, { class: $setup.cn("grid place-content-center peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/checkbox/Checkbox.vue", "data-source-line-start": "18", "data-source-line-end": "29" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.CheckboxIndicator, { class: "grid place-content-center text-current", "data-source-file": "src/components/ui/checkbox/Checkbox.vue", "data-source-line-start": "24", "data-source-line-end": "28" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push3(ssrRenderComponent($setup.Check, { class: "h-4 w-4", "data-source-file": "src/components/ui/checkbox/Checkbox.vue", "data-source-line-start": "26", "data-source-line-end": "26" }, null, _parent3, _scopeId2));
      }, _push3, _parent3, _scopeId2);
      else return [renderSlot(_ctx.$slots, "default", {}, () => [createVNode($setup.Check, { class: "h-4 w-4", "data-source-file": "src/components/ui/checkbox/Checkbox.vue", "data-source-line-start": "26", "data-source-line-end": "26" })])];
    }), _: 3 }, _parent2, _scopeId));
    else return [createVNode($setup.CheckboxIndicator, { class: "grid place-content-center text-current", "data-source-file": "src/components/ui/checkbox/Checkbox.vue", "data-source-line-start": "24", "data-source-line-end": "28" }, { default: withCtx(() => [renderSlot(_ctx.$slots, "default", {}, () => [createVNode($setup.Check, { class: "h-4 w-4", "data-source-file": "src/components/ui/checkbox/Checkbox.vue", "data-source-line-start": "26", "data-source-line-end": "26" })])]), _: 3 })];
  }), _: 3 }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/checkbox/Checkbox.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Checkbox = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "B2BInquiryForm", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), isSubmitting = ref(false), formData = ref({ company_name: "", contact_person: "", city: "", whatsapp: "", email: "", volume_range: "", interested_category: [], custom_notes: "" });
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  function toggleCategory(value) {
    const index = formData.value.interested_category.indexOf(value);
    index > -1 ? formData.value.interested_category.splice(index, 1) : formData.value.interested_category.push(value);
  }
  async function handleSubmit() {
    if (isClient.value) {
      if (!formData.value.company_name || !formData.value.contact_person || !formData.value.whatsapp) {
        toast.error("يرجى ملء جميع الحقول المطلوبة");
        return;
      }
      isSubmitting.value = true;
      try {
        await new Promise((resolve) => setTimeout(resolve, 1e3)), window.location.href = "./b2b-form-success.html";
      } catch {
        toast.error("حدث خطأ أثناء إرسال النموذج"), isSubmitting.value = false;
      }
    }
  }
  const __returned__ = { isClient, isSubmitting, formData, toggleCategory, handleSubmit, get Button() {
    return Button;
  }, get Input() {
    return Input;
  }, get Textarea() {
    return Textarea;
  }, get Label() {
    return Label;
  }, get Checkbox() {
    return Checkbox;
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
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ id: "b2b-inquiry-form", class: "bg-card rounded-lg border border-border/30 p-8 md:p-12 shadow-soft" }, _attrs, { "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "75", "data-source-line-end": "251" }))} data-v-ea162088><form class="space-y-6" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="76" data-source-line-end="250" data-v-ea162088><div class="space-y-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="78" data-source-line-end="90" data-v-ea162088>`), _push(ssrRenderComponent($setup.Label, { for: "company_name", class: "text-base font-medium", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "79", "data-source-line-end": "81" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" اسم الشركة/الفندق * ");
    else return [createTextVNode(" اسم الشركة/الفندق * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "company_name", modelValue: $setup.formData.company_name, "onUpdate:modelValue": ($event) => $setup.formData.company_name = $event, type: "text", placeholder: "اسم الفندق أو الشركة", class: "h-12", disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "82", "data-source-line-end": "89" }, null, _parent)), _push('</div><div class="space-y-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="93" data-source-line-end="105" data-v-ea162088>'), _push(ssrRenderComponent($setup.Label, { for: "contact_person", class: "text-base font-medium", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "94", "data-source-line-end": "96" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" اسم مسؤول التواصل * ");
    else return [createTextVNode(" اسم مسؤول التواصل * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "contact_person", modelValue: $setup.formData.contact_person, "onUpdate:modelValue": ($event) => $setup.formData.contact_person = $event, type: "text", placeholder: "خالد العلي", class: "h-12", disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "97", "data-source-line-end": "104" }, null, _parent)), _push('</div><div class="space-y-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="108" data-source-line-end="120" data-v-ea162088>'), _push(ssrRenderComponent($setup.Label, { for: "city", class: "text-base font-medium", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "109", "data-source-line-end": "111" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" المدينة * ");
    else return [createTextVNode(" المدينة * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "city", modelValue: $setup.formData.city, "onUpdate:modelValue": ($event) => $setup.formData.city = $event, type: "text", placeholder: "الرياض / جدة / دبي", class: "h-12", disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "112", "data-source-line-end": "119" }, null, _parent)), _push('</div><div class="space-y-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="123" data-source-line-end="135" data-v-ea162088>'), _push(ssrRenderComponent($setup.Label, { for: "whatsapp", class: "text-base font-medium", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "124", "data-source-line-end": "126" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" رقم الـ WhatsApp * ");
    else return [createTextVNode(" رقم الـ WhatsApp * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "whatsapp", modelValue: $setup.formData.whatsapp, "onUpdate:modelValue": ($event) => $setup.formData.whatsapp = $event, type: "tel", placeholder: "+966XXXXXXXXX", class: "h-12", disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "127", "data-source-line-end": "134" }, null, _parent)), _push('</div><div class="space-y-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="138" data-source-line-end="150" data-v-ea162088>'), _push(ssrRenderComponent($setup.Label, { for: "email", class: "text-base font-medium", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "139", "data-source-line-end": "141" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" البريد الإلكتروني ");
    else return [createTextVNode(" البريد الإلكتروني ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "email", modelValue: $setup.formData.email, "onUpdate:modelValue": ($event) => $setup.formData.email = $event, type: "email", placeholder: "info@company.com", class: "h-12", disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "142", "data-source-line-end": "149" }, null, _parent)), _push('</div><div class="space-y-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="153" data-source-line-end="167" data-v-ea162088>'), _push(ssrRenderComponent($setup.Label, { for: "volume_range", class: "text-base font-medium", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "154", "data-source-line-end": "156" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" نطاق الكمية المتوقعة (للدفعة الواحدة) * ");
    else return [createTextVNode(" نطاق الكمية المتوقعة (للدفعة الواحدة) * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Select, { modelValue: $setup.formData.volume_range, "onUpdate:modelValue": ($event) => $setup.formData.volume_range = $event, disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "157", "data-source-line-end": "166" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SelectTrigger, { id: "volume_range", class: "h-12", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "158", "data-source-line-end": "160" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3(ssrRenderComponent($setup.SelectValue, { placeholder: "اختر نطاق الكمية", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "159", "data-source-line-end": "159" }, null, _parent3, _scopeId2));
      else return [createVNode($setup.SelectValue, { placeholder: "اختر نطاق الكمية", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "159", "data-source-line-end": "159" })];
    }), _: 1 }, _parent2, _scopeId)), _push2(ssrRenderComponent($setup.SelectContent, { "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "161", "data-source-line-end": "165" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3(ssrRenderComponent($setup.SelectItem, { value: "1_10k", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "162", "data-source-line-end": "162" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4("1,000 - 10,000 SAR");
        else return [createTextVNode("1,000 - 10,000 SAR")];
      }), _: 1 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.SelectItem, { value: "10_50k", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "163", "data-source-line-end": "163" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4("10,000 - 50,000 SAR");
        else return [createTextVNode("10,000 - 50,000 SAR")];
      }), _: 1 }, _parent3, _scopeId2)), _push3(ssrRenderComponent($setup.SelectItem, { value: "50k_plus", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "164", "data-source-line-end": "164" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4("أكثر من 50,000 SAR");
        else return [createTextVNode("أكثر من 50,000 SAR")];
      }), _: 1 }, _parent3, _scopeId2));
      else return [createVNode($setup.SelectItem, { value: "1_10k", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "162", "data-source-line-end": "162" }, { default: withCtx(() => [createTextVNode("1,000 - 10,000 SAR")]), _: 1 }), createVNode($setup.SelectItem, { value: "10_50k", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "163", "data-source-line-end": "163" }, { default: withCtx(() => [createTextVNode("10,000 - 50,000 SAR")]), _: 1 }), createVNode($setup.SelectItem, { value: "50k_plus", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "164", "data-source-line-end": "164" }, { default: withCtx(() => [createTextVNode("أكثر من 50,000 SAR")]), _: 1 })];
    }), _: 1 }, _parent2, _scopeId));
    else return [createVNode($setup.SelectTrigger, { id: "volume_range", class: "h-12", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "158", "data-source-line-end": "160" }, { default: withCtx(() => [createVNode($setup.SelectValue, { placeholder: "اختر نطاق الكمية", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "159", "data-source-line-end": "159" })]), _: 1 }), createVNode($setup.SelectContent, { "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "161", "data-source-line-end": "165" }, { default: withCtx(() => [createVNode($setup.SelectItem, { value: "1_10k", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "162", "data-source-line-end": "162" }, { default: withCtx(() => [createTextVNode("1,000 - 10,000 SAR")]), _: 1 }), createVNode($setup.SelectItem, { value: "10_50k", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "163", "data-source-line-end": "163" }, { default: withCtx(() => [createTextVNode("10,000 - 50,000 SAR")]), _: 1 }), createVNode($setup.SelectItem, { value: "50k_plus", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "164", "data-source-line-end": "164" }, { default: withCtx(() => [createTextVNode("أكثر من 50,000 SAR")]), _: 1 })]), _: 1 })];
  }), _: 1 }, _parent)), _push('</div><div class="space-y-3" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="170" data-source-line-end="220" data-v-ea162088>'), _push(ssrRenderComponent($setup.Label, { class: "text-base font-medium", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "171", "data-source-line-end": "173" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" فئات المنتجات المهتم بها * ");
    else return [createTextVNode(" فئات المنتجات المهتم بها * ")];
  }), _: 1 }, _parent)), _push('<div class="space-y-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="174" data-source-line-end="219" data-v-ea162088><div class="flex items-center gap-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="175" data-source-line-end="185" data-v-ea162088>'), _push(ssrRenderComponent($setup.Checkbox, { id: "incense_sticks", checked: $setup.formData.interested_category.includes("incense_sticks"), "onUpdate:checked": ($event) => $setup.toggleCategory("incense_sticks"), disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "176", "data-source-line-end": "181" }, null, _parent)), _push(ssrRenderComponent($setup.Label, { for: "incense_sticks", class: "font-normal cursor-pointer", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "182", "data-source-line-end": "184" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" أعواد البخور ");
    else return [createTextVNode(" أعواد البخور ")];
  }), _: 1 }, _parent)), _push('</div><div class="flex items-center gap-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="186" data-source-line-end="196" data-v-ea162088>'), _push(ssrRenderComponent($setup.Checkbox, { id: "bakhoor", checked: $setup.formData.interested_category.includes("bakhoor"), "onUpdate:checked": ($event) => $setup.toggleCategory("bakhoor"), disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "187", "data-source-line-end": "192" }, null, _parent)), _push(ssrRenderComponent($setup.Label, { for: "bakhoor", class: "font-normal cursor-pointer", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "193", "data-source-line-end": "195" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" بخور ورقائق العود ");
    else return [createTextVNode(" بخور ورقائق العود ")];
  }), _: 1 }, _parent)), _push('</div><div class="flex items-center gap-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="197" data-source-line-end="207" data-v-ea162088>'), _push(ssrRenderComponent($setup.Checkbox, { id: "mabkhara", checked: $setup.formData.interested_category.includes("mabkhara"), "onUpdate:checked": ($event) => $setup.toggleCategory("mabkhara"), disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "198", "data-source-line-end": "203" }, null, _parent)), _push(ssrRenderComponent($setup.Label, { for: "mabkhara", class: "font-normal cursor-pointer", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "204", "data-source-line-end": "206" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" مباخر وملحقات ");
    else return [createTextVNode(" مباخر وملحقات ")];
  }), _: 1 }, _parent)), _push('</div><div class="flex items-center gap-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="208" data-source-line-end="218" data-v-ea162088>'), _push(ssrRenderComponent($setup.Checkbox, { id: "gift_sets", checked: $setup.formData.interested_category.includes("gift_sets"), "onUpdate:checked": ($event) => $setup.toggleCategory("gift_sets"), disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "209", "data-source-line-end": "214" }, null, _parent)), _push(ssrRenderComponent($setup.Label, { for: "gift_sets", class: "font-normal cursor-pointer", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "215", "data-source-line-end": "217" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" مجموعات الهدايا ");
    else return [createTextVNode(" مجموعات الهدايا ")];
  }), _: 1 }, _parent)), _push('</div></div></div><div class="space-y-2" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="223" data-source-line-end="234" data-v-ea162088>'), _push(ssrRenderComponent($setup.Label, { for: "custom_notes", class: "text-base font-medium", "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "224", "data-source-line-end": "226" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" ملاحظات إضافية (تخصيص، موعد تسليم) ");
    else return [createTextVNode(" ملاحظات إضافية (تخصيص، موعد تسليم) ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Textarea, { id: "custom_notes", modelValue: $setup.formData.custom_notes, "onUpdate:modelValue": ($event) => $setup.formData.custom_notes = $event, placeholder: "أخبرنا عن احتياجاتك الخاصة...", class: "min-h-32 resize-none", disabled: !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "227", "data-source-line-end": "233" }, null, _parent)), _push("</div>"), _push(ssrRenderComponent($setup.Button, { type: "submit", size: "lg", class: "w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-12", disabled: $setup.isSubmitting || !$setup.isClient, "data-source-file": "src/components/b2b-hotels-venues/B2BInquiryForm.vue", "data-source-line-start": "237", "data-source-line-end": "244" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(`${ssrInterpolate($setup.isSubmitting ? "جاري الإرسال..." : "إرسال الطلب")}`);
    else return [createTextVNode(toDisplayString($setup.isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"), 1)];
  }), _: 1 }, _parent)), _push('<p class="text-sm text-muted-foreground text-center" data-source-file="src/components/b2b-hotels-venues/B2BInquiryForm.vue" data-source-line-start="247" data-source-line-end="249" data-v-ea162088> نحن نحترم خصوصيتك. سيتم استخدام بيانات الاتصال الخاصة بك فقط للرد على استفسارك. </p></form></div>');
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/b2b-hotels-venues/B2BInquiryForm.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const B2BInquiryForm = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-ea162088"]]);
const _sfc_main = defineComponent({ __name: "B2BCtaSection", setup(__props, { expose: __expose }) {
  __expose();
  function navigateToWhatsApp() {
    window.open("https://wa.me/966500000000?text=مرحباً NAFHA، أود الاستفسار عن خدمات B2B", "_blank");
  }
  function navigateToContact() {
    window.location.href = "./contact.html";
  }
  const __returned__ = { navigateToWhatsApp, navigateToContact, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "py-12 md:py-20 bg-gradient-to-b from-background to-card" }, _attrs, { "data-source-file": "src/components/b2b-hotels-venues/B2BCtaSection.vue", "data-source-line-start": "16", "data-source-line-end": "68" }))} data-v-e778f6dd><div class="container mx-auto px-4" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="17" data-source-line-end="67" data-v-e778f6dd><div class="max-w-2xl mx-auto text-center" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="18" data-source-line-end="66" data-v-e778f6dd><h2 class="text-3xl md:text-4xl font-bold text-foreground mb-6" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="19" data-source-line-end="21" data-v-e778f6dd> هل لديك أسئلة؟ </h2><p class="text-lg text-muted-foreground mb-8" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="22" data-source-line-end="24" data-v-e778f6dd> فريقنا متاح للإجابة على جميع استفساراتك والمساعدة في إيجاد الحل المناسب لعملك </p><div class="flex flex-col md:flex-row gap-4 justify-center" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="26" data-source-line-end="44" data-v-e778f6dd>`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "bg-primary hover:bg-primary/90 text-primary-foreground font-bold gap-2", onClick: $setup.navigateToWhatsApp, "data-source-file": "src/components/b2b-hotels-venues/B2BCtaSection.vue", "data-source-line-start": "27", "data-source-line-end": "34" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 20, "data-source-file": "src/components/b2b-hotels-venues/B2BCtaSection.vue", "data-source-line-start": "32", "data-source-line-end": "32" }, null, _parent2, _scopeId)), _push2(" تواصل عبر واتساب ");
    else return [createVNode($setup.SafeIcon, { name: "MessageCircle", size: 20, "data-source-file": "src/components/b2b-hotels-venues/B2BCtaSection.vue", "data-source-line-start": "32", "data-source-line-end": "32" }), createTextVNode(" تواصل عبر واتساب ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { size: "lg", variant: "outline", class: "font-bold gap-2", onClick: $setup.navigateToContact, "data-source-file": "src/components/b2b-hotels-venues/B2BCtaSection.vue", "data-source-line-start": "35", "data-source-line-end": "43" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "Mail", size: 20, "data-source-file": "src/components/b2b-hotels-venues/B2BCtaSection.vue", "data-source-line-start": "41", "data-source-line-end": "41" }, null, _parent2, _scopeId)), _push2(" اتصل بنا ");
    else return [createVNode($setup.SafeIcon, { name: "Mail", size: 20, "data-source-file": "src/components/b2b-hotels-venues/B2BCtaSection.vue", "data-source-line-start": "41", "data-source-line-end": "41" }), createTextVNode(" اتصل بنا ")];
  }), _: 1 }, _parent)), _push('</div><div class="mt-12 pt-8 border-t border-border/20" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="47" data-source-line-end="65" data-v-e778f6dd><p class="text-sm text-muted-foreground mb-4" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="48" data-source-line-end="50" data-v-e778f6dd> نحن نخدم أكثر من 50 فندق وفندق فاخر في منطقة الخليج </p><div class="flex justify-center gap-8 flex-wrap" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="51" data-source-line-end="64" data-v-e778f6dd><div class="text-center" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="52" data-source-line-end="55" data-v-e778f6dd><p class="text-2xl font-bold text-primary" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="53" data-source-line-end="53" data-v-e778f6dd>50+</p><p class="text-sm text-muted-foreground" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="54" data-source-line-end="54" data-v-e778f6dd>فندق وفندق فاخر</p></div><div class="text-center" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="56" data-source-line-end="59" data-v-e778f6dd><p class="text-2xl font-bold text-primary" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="57" data-source-line-end="57" data-v-e778f6dd>1000+</p><p class="text-sm text-muted-foreground" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="58" data-source-line-end="58" data-v-e778f6dd>عميل راضٍ</p></div><div class="text-center" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="60" data-source-line-end="63" data-v-e778f6dd><p class="text-2xl font-bold text-primary" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="61" data-source-line-end="61" data-v-e778f6dd>24/7</p><p class="text-sm text-muted-foreground" data-source-file="src/components/b2b-hotels-venues/B2BCtaSection.vue" data-source-line-start="62" data-source-line-end="62" data-v-e778f6dd>دعم متخصص</p></div></div></div></div></div></section>');
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/b2b-hotels-venues/B2BCtaSection.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const B2BCtaSection = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-e778f6dd"]]);
const $$B2BHotelsVenues = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "NAFHA للأعمال - الفنادق والمنتجعات" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="16" data-source-line-end="95" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="19" data-source-line-end="92" class="flex-1">
      <!-- Hero Section -->
      ${renderComponent($$result2, "B2BHero", B2BHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/b2b-hotels-venues/B2BHero.vue", "client:component-export": "default" })}
      
      <!-- Trust Icon Bar -->
      <section data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="24" data-source-line-end="28" class="py-8 md:py-12 bg-card border-b border-border/20">
        <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="25" data-source-line-end="27" class="container mx-auto px-4">
          ${renderComponent($$result2, "TrustIconBar", TrustIconBar, {})}
        </div>
      </section>
      
      <!-- Value Props Section -->
      <section data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="31" data-source-line-end="43" class="py-12 md:py-20 bg-background">
        <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="32" data-source-line-end="42" class="container mx-auto px-4">
          <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="33" data-source-line-end="40" class="text-center mb-12">
            <h2 data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="34" data-source-line-end="36" class="text-3xl md:text-4xl font-bold text-foreground mb-4">
              لماذا تختار NAFHA للأعمال؟
            </h2>
            <p data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="37" data-source-line-end="39" class="text-lg text-muted-foreground max-w-2xl mx-auto">
              نحن نفهم احتياجات الضيافة الفاخرة ونقدم حلولاً مخصصة تعكس قيم علامتك التجارية
            </p>
          </div>
          ${renderComponent($$result2, "B2BValueProps", B2BValueProps, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/b2b-hotels-venues/B2BValueProps.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Use Cases Section -->
      <section data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="46" data-source-line-end="58" class="py-12 md:py-20 bg-card">
        <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="47" data-source-line-end="57" class="container mx-auto px-4">
          <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="48" data-source-line-end="55" class="text-center mb-12">
            <h2 data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="49" data-source-line-end="51" class="text-3xl md:text-4xl font-bold text-foreground mb-4">
              حالات الاستخدام الناجحة
            </h2>
            <p data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="52" data-source-line-end="54" class="text-lg text-muted-foreground max-w-2xl mx-auto">
              اكتشف كيف استخدمت الفنادق والمنتجعات الفاخرة منتجات NAFHA لتحسين تجربة الضيوف
            </p>
          </div>
          ${renderComponent($$result2, "B2BUseCases", B2BUseCases, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/b2b-hotels-venues/B2BUseCases.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Service Packages Section -->
      <section data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="61" data-source-line-end="73" class="py-12 md:py-20 bg-background">
        <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="62" data-source-line-end="72" class="container mx-auto px-4">
          <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="63" data-source-line-end="70" class="text-center mb-12">
            <h2 data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="64" data-source-line-end="66" class="text-3xl md:text-4xl font-bold text-foreground mb-4">
              باقات الخدمات المتخصصة
            </h2>
            <p data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="67" data-source-line-end="69" class="text-lg text-muted-foreground max-w-2xl mx-auto">
              اختر الباقة التي تناسب احتياجات عملك، من الحلول الأساسية إلى التخصيص الكامل
            </p>
          </div>
          ${renderComponent($$result2, "B2BServicePackages", B2BServicePackages, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/b2b-hotels-venues/B2BServicePackages.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Inquiry Form Section -->
      <section data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="76" data-source-line-end="88" class="py-12 md:py-20 bg-card">
        <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="77" data-source-line-end="87" class="container mx-auto px-4 max-w-3xl">
          <div data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="78" data-source-line-end="85" class="text-center mb-12">
            <h2 data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="79" data-source-line-end="81" class="text-3xl md:text-4xl font-bold text-foreground mb-4">
              اطلب عرض سعر مخصص
            </h2>
            <p data-source-file="src/pages/b2b-hotels-venues.astro" data-source-line-start="82" data-source-line-end="84" class="text-lg text-muted-foreground">
              أخبرنا عن احتياجاتك وسيتواصل معك فريقنا في غضون يوم عمل واحد
            </p>
          </div>
          ${renderComponent($$result2, "B2BInquiryForm", B2BInquiryForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/b2b-hotels-venues/B2BInquiryForm.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- CTA Section -->
      ${renderComponent($$result2, "B2BCtaSection", B2BCtaSection, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/b2b-hotels-venues/B2BCtaSection.vue", "client:component-export": "default" })}
    </main>
    
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { variant: "complex" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/b2b-hotels-venues.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/b2b-hotels-venues.astro";
const $$url = "/b2b-hotels-venues.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$B2BHotelsVenues,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
