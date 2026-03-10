import { defineComponent, useSSRContext, mergeProps, withCtx, renderSlot, computed, defineAsyncComponent, createVNode, resolveDynamicComponent, ref, onMounted, createTextVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from "vue";
import { Primitive, SheetRoot, SheetContent as SheetContent$1, SheetTrigger as SheetTrigger$1 } from "reka-ui";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderVNode, ssrInterpolate, ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrGetDynamicModelProps } from "vue/server-renderer";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useVModel } from "@vueuse/core";
import { Circle } from "lucide-vue-next";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$8 = defineComponent({ __name: "Button", props: { variant: {}, size: {}, class: { type: [Boolean, null, String, Object, Array] }, asChild: { type: Boolean }, as: { default: "button" } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get Primitive() {
    return Primitive;
  }, get cn() {
    return cn;
  }, get buttonVariants() {
    return buttonVariants;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$8(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.Primitive, mergeProps({ as: $props.as, "as-child": $props.asChild, class: $setup.cn($setup.buttonVariants({ variant: $props.variant, size: $props.size }), $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/button/Button.vue", "data-source-line-start": "21", "data-source-line-end": "27" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
    else return [renderSlot(_ctx.$slots, "default")];
  }), _: 3 }, _parent));
}
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/button/Button.vue"), _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Button = _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$8]]);
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        "default": "h-10 px-4 py-2",
        "sm": "h-9 rounded-md px-3",
        "lg": "h-11 rounded-md px-8",
        "icon": "h-10 w-10",
        "icon-sm": "size-9",
        "icon-lg": "size-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const _sfc_main$7 = defineComponent({ __name: "Sheet", props: { asChild: { type: Boolean }, as: { default: "div" } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get SheetPrimitive() {
    return SheetRoot;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.SheetPrimitive, mergeProps($setup.props, _attrs, { "data-source-file": "src/components/ui/sheet/Sheet.vue", "data-source-line-start": "13", "data-source-line-end": "15" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
    else return [renderSlot(_ctx.$slots, "default")];
  }), _: 3 }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/sheet/Sheet.vue"), _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Sheet = _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = defineComponent({ __name: "SheetContent", props: { class: {}, asChild: { type: Boolean }, as: { default: "div" } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get SheetContentPrimitive() {
    return SheetContent$1;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.SheetContentPrimitive, mergeProps({ class: $setup.cn("fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500", $setup.props.class) }, $setup.props, _attrs, { "data-source-file": "src/components/ui/sheet/SheetContent.vue", "data-source-line-start": "16", "data-source-line-end": "21" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
    else return [renderSlot(_ctx.$slots, "default")];
  }), _: 3 }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/sheet/SheetContent.vue"), _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const SheetContent = _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = defineComponent({ __name: "SheetTrigger", props: { asChild: { type: Boolean }, as: { default: "button" } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get SheetTriggerPrimitive() {
    return SheetTrigger$1;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.SheetTriggerPrimitive, mergeProps($setup.props, _attrs, { "data-source-file": "src/components/ui/sheet/SheetTrigger.vue", "data-source-line-start": "13", "data-source-line-end": "15" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
    else return [renderSlot(_ctx.$slots, "default")];
  }), _: 3 }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/sheet/SheetTrigger.vue"), _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const SheetTrigger = _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = defineComponent({ __name: "SafeIcon", props: { name: {}, size: { default: 24 }, color: {}, strokeWidth: { default: 2 }, class: {} }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, IconComponent = computed(() => {
    try {
      return defineAsyncComponent(() => import("lucide-vue-next").then((module) => {
        const icon = module[props.name];
        return icon || (console.warn(`Icon "${props.name}" not found in lucide-vue-next, using fallback`), Circle);
      }).catch(() => (console.warn(`Failed to load icon "${props.name}", using fallback`), Circle)));
    } catch {
      return Circle;
    }
  }), __returned__ = { props, IconComponent };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  ssrRenderVNode(_push, createVNode(resolveDynamicComponent($setup.IconComponent), mergeProps({ size: $props.size, color: $props.color, "stroke-width": $props.strokeWidth, class: $setup.props.class }, _attrs, { "data-source-file": "src/components/common/SafeIcon.vue", "data-source-line-start": "43", "data-source-line-end": "49" }), null), _parent);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/SafeIcon.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const SafeIcon = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({ __name: "LanguageSwitcher", setup(__props, { expose: __expose }) {
  __expose();
  const currentLang = ref("ar");
  onMounted(() => {
    if (typeof window < "u") {
      const savedLang = localStorage.getItem("preferred-lang");
      savedLang && (currentLang.value = savedLang, updateDocumentLang(savedLang));
    }
  });
  function toggleLanguage() {
    const newLang = currentLang.value === "ar" ? "en" : "ar";
    currentLang.value = newLang, typeof window < "u" && (localStorage.setItem("preferred-lang", newLang), updateDocumentLang(newLang));
  }
  function updateDocumentLang(lang) {
    typeof document < "u" && (document.documentElement.setAttribute("dir", lang === "ar" ? "rtl" : "ltr"), document.documentElement.setAttribute("lang", lang === "ar" ? "ar-SA" : "en"));
  }
  const __returned__ = { currentLang, toggleLanguage, updateDocumentLang, get Button() {
    return Button;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.Button, mergeProps({ variant: "ghost", size: "sm", onClick: $setup.toggleLanguage, class: "font-medium" }, _attrs, { "data-source-file": "src/components/common/LanguageSwitcher.vue", "data-source-line-start": "37", "data-source-line-end": "44" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(`${ssrInterpolate($setup.currentLang === "ar" ? "EN" : "ع")}`);
    else return [createTextVNode(toDisplayString($setup.currentLang === "ar" ? "EN" : "ع"), 1)];
  }), _: 1 }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/LanguageSwitcher.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const LanguageSwitcher = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "CommonHeader", setup(__props, { expose: __expose }) {
  __expose();
  const isMenuOpen = ref(false), isScrolled = ref(false), navItems = [{ label: "المتجر", labelEn: "Collections", href: "./collections.html" }, { label: "الهدايا", labelEn: "Gifts", href: "./gift-sets-category.html" }, { label: "الأعمال", labelEn: "B2B", href: "./b2b-hotels-venues.html" }, { label: "من نحن", labelEn: "About", href: "./about.html" }, { label: "المساعدة", labelEn: "Help", href: "./help-center.html" }];
  onMounted(() => {
    if (typeof window < "u") {
      const handleScroll = () => {
        isScrolled.value = window.scrollY > 20;
      };
      return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
    }
  });
  const __returned__ = { isMenuOpen, isScrolled, navItems, get Button() {
    return Button;
  }, get Sheet() {
    return Sheet;
  }, get SheetContent() {
    return SheetContent;
  }, get SheetTrigger() {
    return SheetTrigger;
  }, SafeIcon, LanguageSwitcher };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<header${ssrRenderAttrs(mergeProps({ class: ["sticky top-0 z-50 w-full transition-all duration-300", $setup.isScrolled ? "bg-background/95 backdrop-blur-sm shadow-soft" : "bg-background"] }, _attrs, { "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "32", "data-source-line-end": "106" }))}><div class="container mx-auto px-4" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="36" data-source-line-end="105"><div class="flex items-center justify-between h-16 md:h-20" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="37" data-source-line-end="104"><div class="md:hidden" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="39" data-source-line-end="60">`), _push(ssrRenderComponent($setup.Sheet, { open: $setup.isMenuOpen, "onUpdate:open": ($event) => $setup.isMenuOpen = $event, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "40", "data-source-line-end": "59" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SheetTrigger, { "as-child": "", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "41", "data-source-line-end": "45" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3(ssrRenderComponent($setup.Button, { variant: "ghost", size: "icon", "aria-label": "القائمة", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "42", "data-source-line-end": "44" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
        if (_push4) _push4(ssrRenderComponent($setup.SafeIcon, { name: "Menu", size: 24, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "43", "data-source-line-end": "43" }, null, _parent4, _scopeId3));
        else return [createVNode($setup.SafeIcon, { name: "Menu", size: 24, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "43", "data-source-line-end": "43" })];
      }), _: 1 }, _parent3, _scopeId2));
      else return [createVNode($setup.Button, { variant: "ghost", size: "icon", "aria-label": "القائمة", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "42", "data-source-line-end": "44" }, { default: withCtx(() => [createVNode($setup.SafeIcon, { name: "Menu", size: 24, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "43", "data-source-line-end": "43" })]), _: 1 })];
    }), _: 1 }, _parent2, _scopeId)), _push2(ssrRenderComponent($setup.SheetContent, { side: "right", class: "w-[280px]", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "46", "data-source-line-end": "58" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3(`<nav class="flex flex-col gap-4 mt-8" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="47" data-source-line-end="57"${_scopeId2}><!--[-->`), ssrRenderList($setup.navItems, (item) => {
        _push3(`<a${ssrRenderAttr("href", item.href)} class="text-lg font-medium text-foreground hover:text-primary transition-colors py-2" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="48" data-source-line-end="56"${_scopeId2}>${ssrInterpolate(item.label)}</a>`);
      }), _push3("<!--]--></nav>");
      else return [createVNode("nav", { class: "flex flex-col gap-4 mt-8", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "47", "data-source-line-end": "57" }, [(openBlock(), createBlock(Fragment, null, renderList($setup.navItems, (item) => createVNode("a", { key: item.href, href: item.href, class: "text-lg font-medium text-foreground hover:text-primary transition-colors py-2", onClick: ($event) => $setup.isMenuOpen = false, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "48", "data-source-line-end": "56" }, toDisplayString(item.label), 9, ["href", "onClick"])), 64))])];
    }), _: 1 }, _parent2, _scopeId));
    else return [createVNode($setup.SheetTrigger, { "as-child": "", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "41", "data-source-line-end": "45" }, { default: withCtx(() => [createVNode($setup.Button, { variant: "ghost", size: "icon", "aria-label": "القائمة", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "42", "data-source-line-end": "44" }, { default: withCtx(() => [createVNode($setup.SafeIcon, { name: "Menu", size: 24, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "43", "data-source-line-end": "43" })]), _: 1 })]), _: 1 }), createVNode($setup.SheetContent, { side: "right", class: "w-[280px]", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "46", "data-source-line-end": "58" }, { default: withCtx(() => [createVNode("nav", { class: "flex flex-col gap-4 mt-8", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "47", "data-source-line-end": "57" }, [(openBlock(), createBlock(Fragment, null, renderList($setup.navItems, (item) => createVNode("a", { key: item.href, href: item.href, class: "text-lg font-medium text-foreground hover:text-primary transition-colors py-2", onClick: ($event) => $setup.isMenuOpen = false, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "48", "data-source-line-end": "56" }, toDisplayString(item.label), 9, ["href", "onClick"])), 64))])]), _: 1 })];
  }), _: 1 }, _parent)), _push('</div><div class="flex-1 flex justify-center md:justify-start" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="63" data-source-line-end="72"><a href="./collections.html" class="flex items-center gap-2" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="64" data-source-line-end="71"><span class="text-2xl md:text-3xl font-bold text-foreground" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="65" data-source-line-end="67"> نفحة </span><span class="text-sm md:text-base text-muted-foreground font-medium" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="68" data-source-line-end="70"> NAFHA </span></a></div><nav class="hidden md:flex items-center gap-6 flex-1 justify-center" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="75" data-source-line-end="84"><!--[-->'), ssrRenderList($setup.navItems, (item) => {
    _push(`<a${ssrRenderAttr("href", item.href)} class="text-sm font-medium text-foreground hover:text-primary transition-colors" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="76" data-source-line-end="83">${ssrInterpolate(item.label)}</a>`);
  }), _push('<!--]--></nav><div class="flex items-center gap-2" data-source-file="src/components/common/CommonHeader.vue" data-source-line-start="87" data-source-line-end="103">'), _push(ssrRenderComponent($setup.LanguageSwitcher, { "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "88", "data-source-line-end": "88" }, null, _parent)), _push(ssrRenderComponent($setup.Button, { variant: "ghost", size: "icon", "aria-label": "البحث", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "89", "data-source-line-end": "91" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "Search", size: 20, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "90", "data-source-line-end": "90" }, null, _parent2, _scopeId));
    else return [createVNode($setup.SafeIcon, { name: "Search", size: 20, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "90", "data-source-line-end": "90" })];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Button, { variant: "ghost", size: "icon", "aria-label": "واتساب", as: "a", href: "https://wa.me/966500000000", target: "_blank", rel: "noopener noreferrer", "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "92", "data-source-line-end": "102" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 20, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "101", "data-source-line-end": "101" }, null, _parent2, _scopeId));
    else return [createVNode($setup.SafeIcon, { name: "MessageCircle", size: 20, "data-source-file": "src/components/common/CommonHeader.vue", "data-source-line-start": "101", "data-source-line-end": "101" })];
  }), _: 1 }, _parent)), _push("</div></div></div></header>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/CommonHeader.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const CommonHeader = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "Input", props: { defaultValue: {}, modelValue: {}, class: { type: [Boolean, null, String, Object, Array] } }, emits: ["update:modelValue"], setup(__props, { expose: __expose, emit: __emit }) {
  __expose();
  const props = __props, emits = __emit, modelValue = useVModel(props, "modelValue", emits, { passive: true, defaultValue: props.defaultValue }), __returned__ = { props, emits, modelValue, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<input${ssrRenderAttrs((_temp0 = mergeProps({ class: $setup.cn("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/input/Input.vue", "data-source-line-start": "23", "data-source-line-end": "23" }), mergeProps(_temp0, ssrGetDynamicModelProps(_temp0, $setup.modelValue))))}>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/input/Input.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Input = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "CommonFooter", props: { variant: { default: "simple" } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { serviceLinks: [{ label: "كيفية الاستخدام", href: "./help-center.html" }, { label: "السلامة والتخزين", href: "./help-center.html" }, { label: "الاستفسار والتسعير", href: "./help-center.html" }], companyLinks: [{ label: "من نحن", href: "./about.html" }, { label: "قصتنا", href: "./our-story.html" }, { label: "المصدر والحرفة", href: "./sourcing-craft.html" }, { label: "وعد الجودة", href: "./quality-promise.html" }], legalLinks: [{ label: "الخصوصية وملفات تعريف الارتباط", href: "./privacy-cookie-policy.html" }, { label: "شروط الخدمة", href: "./terms-of-service.html" }, { label: "إشعار سلامة المنتج", href: "./product-safety-notice.html" }, { label: "معلومات الشركة", href: "./company-identity-card.html" }], socialLinks: [{ icon: "Instagram", href: "#", label: "Instagram" }, { icon: "Twitter", href: "#", label: "Twitter" }, { icon: "Facebook", href: "#", label: "Facebook" }], get Button() {
    return Button;
  }, get Input() {
    return Input;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-background border-t border-border/30 mt-auto" }, _attrs, { "data-source-file": "src/components/common/CommonFooter.vue", "data-source-line-start": "43", "data-source-line-end": "147" }))}>`), $props.variant === "complex" ? (_push('<div class="container mx-auto px-4 py-12" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="45" data-source-line-end="123"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="46" data-source-line-end="100"><div data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="48" data-source-line-end="57"><h3 class="text-sm font-bold text-foreground mb-4" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="49" data-source-line-end="49">الخدمات</h3><ul class="space-y-2" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="50" data-source-line-end="56"><!--[-->'), ssrRenderList($setup.serviceLinks, (link) => {
    _push(`<li data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="51" data-source-line-end="55"><a${ssrRenderAttr("href", link.href)} class="text-sm text-muted-foreground hover:text-primary transition-colors" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="52" data-source-line-end="54">${ssrInterpolate(link.label)}</a></li>`);
  }), _push('<!--]--></ul></div><div data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="60" data-source-line-end="69"><h3 class="text-sm font-bold text-foreground mb-4" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="61" data-source-line-end="61">الشركة</h3><ul class="space-y-2" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="62" data-source-line-end="68"><!--[-->'), ssrRenderList($setup.companyLinks, (link) => {
    _push(`<li data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="63" data-source-line-end="67"><a${ssrRenderAttr("href", link.href)} class="text-sm text-muted-foreground hover:text-primary transition-colors" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="64" data-source-line-end="66">${ssrInterpolate(link.label)}</a></li>`);
  }), _push('<!--]--></ul></div><div data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="72" data-source-line-end="81"><h3 class="text-sm font-bold text-foreground mb-4" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="73" data-source-line-end="73">القانونية</h3><ul class="space-y-2" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="74" data-source-line-end="80"><!--[-->'), ssrRenderList($setup.legalLinks, (link) => {
    _push(`<li data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="75" data-source-line-end="79"><a${ssrRenderAttr("href", link.href)} class="text-sm text-muted-foreground hover:text-primary transition-colors" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="76" data-source-line-end="78">${ssrInterpolate(link.label)}</a></li>`);
  }), _push('<!--]--></ul></div><div data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="84" data-source-line-end="99"><h3 class="text-sm font-bold text-foreground mb-4" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="85" data-source-line-end="85">ابق على اطلاع</h3><p class="text-sm text-muted-foreground mb-4" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="86" data-source-line-end="88"> اشترك للحصول على آخر الأخبار والعروض </p><div class="flex gap-2" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="89" data-source-line-end="98">'), _push(ssrRenderComponent($setup.Input, { type: "email", placeholder: "بريدك الإلكتروني", class: "flex-1", "data-source-file": "src/components/common/CommonFooter.vue", "data-source-line-start": "90", "data-source-line-end": "94" }, null, _parent)), _push(ssrRenderComponent($setup.Button, { variant: "default", size: "icon", "data-source-file": "src/components/common/CommonFooter.vue", "data-source-line-start": "95", "data-source-line-end": "97" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "Send", size: 18, "data-source-file": "src/components/common/CommonFooter.vue", "data-source-line-start": "96", "data-source-line-end": "96" }, null, _parent2, _scopeId));
    else return [createVNode($setup.SafeIcon, { name: "Send", size: 18, "data-source-file": "src/components/common/CommonFooter.vue", "data-source-line-start": "96", "data-source-line-end": "96" })];
  }), _: 1 }, _parent)), _push('</div></div></div><div class="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="103" data-source-line-end="122"><div class="flex items-center gap-2" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="104" data-source-line-end="118"><!--[-->'), ssrRenderList($setup.socialLinks, (social) => {
    _push(ssrRenderComponent($setup.Button, { key: social.label, variant: "ghost", size: "icon", "aria-label": social.label, as: "a", href: social.href, target: "_blank", rel: "noopener noreferrer", "data-source-file": "src/components/common/CommonFooter.vue", "data-source-line-start": "105", "data-source-line-end": "117" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: social.icon, size: 20, "data-source-file": "src/components/common/CommonFooter.vue", "data-source-line-start": "116", "data-source-line-end": "116" }, null, _parent2, _scopeId));
      else return [createVNode($setup.SafeIcon, { name: social.icon, size: 20, "data-source-file": "src/components/common/CommonFooter.vue", "data-source-line-start": "116", "data-source-line-end": "116" }, null, 8, ["name"])];
    }), _: 2 }, _parent));
  }), _push('<!--]--></div><p id="iih8fl" class="text-sm text-muted-foreground" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="119" data-source-line-end="121"> ©2026 نفحة NAFHA. جميع الحقوق محفوظة. </p></div></div>')) : _push('<div class="container mx-auto px-4 py-6" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="126" data-source-line-end="146"><div class="flex flex-col md:flex-row justify-between items-center gap-4" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="127" data-source-line-end="145"><div class="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="128" data-source-line-end="141"><a href="./about.html" class="text-sm text-muted-foreground hover:text-primary transition-colors" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="129" data-source-line-end="131"> من نحن </a><a href="./help-center.html" class="text-sm text-muted-foreground hover:text-primary transition-colors" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="132" data-source-line-end="134"> المساعدة </a><a href="./compliance-safety.html" class="text-sm text-muted-foreground hover:text-primary transition-colors" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="135" data-source-line-end="137"> الامتثال والسلامة </a><a href="./contact.html" class="text-sm text-muted-foreground hover:text-primary transition-colors" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="138" data-source-line-end="140"> اتصل بنا </a></div><p class="text-sm text-muted-foreground" data-source-file="src/components/common/CommonFooter.vue" data-source-line-start="142" data-source-line-end="144"> © 2024 نفحة NAFHA </p></div></div>'), _push("</footer>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/CommonFooter.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const CommonFooter = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Button as B,
  CommonHeader as C,
  Input as I,
  SafeIcon as S,
  _export_sfc as _,
  CommonFooter as a,
  cn as c
};
