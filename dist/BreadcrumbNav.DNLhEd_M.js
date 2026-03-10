import { defineComponent, useSSRContext, mergeProps, withCtx, renderSlot, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList } from "vue";
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc, c as cn, S as SafeIcon } from "./CommonFooter.DAC1pK2d.js";
import { MoreHorizontal, ChevronRight } from "lucide-vue-next";
import { Primitive } from "reka-ui";
const _sfc_main$7 = defineComponent({ __name: "Breadcrumb", props: { class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$7(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<nav${ssrRenderAttrs(mergeProps({ "aria-label": "breadcrumb", class: $setup.props.class }, _attrs, { "data-source-file": "src/components/ui/breadcrumb/Breadcrumb.vue", "data-source-line-start": "10", "data-source-line-end": "12" }))}>`), ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent), _push("</nav>");
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/breadcrumb/Breadcrumb.vue"), _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Breadcrumb = _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$7]]);
const _sfc_main$6 = defineComponent({ __name: "BreadcrumbEllipsis", props: { class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get MoreHorizontal() {
    return MoreHorizontal;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ role: "presentation", "aria-hidden": "true", class: $setup.cn("flex h-9 w-9 items-center justify-center", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/breadcrumb/BreadcrumbEllipsis.vue", "data-source-line-start": "12", "data-source-line-end": "21" }))}>`), ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(ssrRenderComponent($setup.MoreHorizontal, { class: "h-4 w-4", "data-source-file": "src/components/ui/breadcrumb/BreadcrumbEllipsis.vue", "data-source-line-start": "18", "data-source-line-end": "18" }, null, _parent));
  }, _push, _parent), _push('<span class="sr-only" data-source-file="src/components/ui/breadcrumb/BreadcrumbEllipsis.vue" data-source-line-start="20" data-source-line-end="20">More</span></span>');
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/breadcrumb/BreadcrumbEllipsis.vue"), _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$5 = defineComponent({ __name: "BreadcrumbItem", props: { class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${ssrRenderAttrs(mergeProps({ class: $setup.cn("inline-flex items-center gap-1.5", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/breadcrumb/BreadcrumbItem.vue", "data-source-line-start": "11", "data-source-line-end": "15" }))}>`), ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent), _push("</li>");
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/breadcrumb/BreadcrumbItem.vue"), _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const BreadcrumbItem = _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$4 = defineComponent({ __name: "BreadcrumbLink", props: { asChild: { type: Boolean }, as: { default: "a" }, class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get Primitive() {
    return Primitive;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.Primitive, mergeProps({ as: $props.as, "as-child": $props.asChild, class: $setup.cn("transition-colors hover:text-foreground", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/breadcrumb/BreadcrumbLink.vue", "data-source-line-start": "13", "data-source-line-end": "19" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
    else return [renderSlot(_ctx.$slots, "default")];
  }), _: 3 }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/breadcrumb/BreadcrumbLink.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const BreadcrumbLink = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$3 = defineComponent({ __name: "BreadcrumbList", props: { class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<ol${ssrRenderAttrs(mergeProps({ class: $setup.cn("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/breadcrumb/BreadcrumbList.vue", "data-source-line-start": "11", "data-source-line-end": "15" }))}>`), ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent), _push("</ol>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/breadcrumb/BreadcrumbList.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const BreadcrumbList = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "BreadcrumbPage", props: { class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<span${ssrRenderAttrs(mergeProps({ role: "link", "aria-disabled": "true", "aria-current": "page", class: $setup.cn("font-normal text-foreground", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/breadcrumb/BreadcrumbPage.vue", "data-source-line-start": "11", "data-source-line-end": "18" }))}>`), ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent), _push("</span>");
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/breadcrumb/BreadcrumbPage.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const BreadcrumbPage = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "BreadcrumbSeparator", props: { class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { props: __props, get ChevronRight() {
    return ChevronRight;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<li${ssrRenderAttrs(mergeProps({ role: "presentation", "aria-hidden": "true", class: $setup.cn("[&>svg]:w-3.5 [&>svg]:h-3.5", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/breadcrumb/BreadcrumbSeparator.vue", "data-source-line-start": "12", "data-source-line-end": "20" }))}>`), ssrRenderSlot(_ctx.$slots, "default", {}, () => {
    _push(ssrRenderComponent($setup.ChevronRight, { "data-source-file": "src/components/ui/breadcrumb/BreadcrumbSeparator.vue", "data-source-line-start": "18", "data-source-line-end": "18" }, null, _parent));
  }, _push, _parent), _push("</li>");
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/breadcrumb/BreadcrumbSeparator.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const BreadcrumbSeparator = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "BreadcrumbNav", props: { items: {} }, setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { get Breadcrumb() {
    return Breadcrumb;
  }, get BreadcrumbItem() {
    return BreadcrumbItem;
  }, get BreadcrumbLink() {
    return BreadcrumbLink;
  }, get BreadcrumbList() {
    return BreadcrumbList;
  }, get BreadcrumbPage() {
    return BreadcrumbPage;
  }, get BreadcrumbSeparator() {
    return BreadcrumbSeparator;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.Breadcrumb, mergeProps(_attrs, { "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "26", "data-source-line-end": "40" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.BreadcrumbList, { "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "27", "data-source-line-end": "39" }, { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) _push3("<!--[-->"), ssrRenderList($props.items, (item, index) => {
        _push3(ssrRenderComponent($setup.BreadcrumbItem, { key: index, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "28", "data-source-line-end": "38" }, { default: withCtx((_3, _push4, _parent4, _scopeId3) => {
          if (_push4) item.href ? _push4(ssrRenderComponent($setup.BreadcrumbLink, { href: item.href, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "29", "data-source-line-end": "31" }, { default: withCtx((_4, _push5, _parent5, _scopeId4) => {
            if (_push5) _push5(`${ssrInterpolate(item.label)}`);
            else return [createTextVNode(toDisplayString(item.label), 1)];
          }), _: 2 }, _parent4, _scopeId3)) : _push4(ssrRenderComponent($setup.BreadcrumbPage, { "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "32", "data-source-line-end": "34" }, { default: withCtx((_4, _push5, _parent5, _scopeId4) => {
            if (_push5) _push5(`${ssrInterpolate(item.label)}`);
            else return [createTextVNode(toDisplayString(item.label), 1)];
          }), _: 2 }, _parent4, _scopeId3)), index < $props.items.length - 1 ? _push4(ssrRenderComponent($setup.BreadcrumbSeparator, { "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, { default: withCtx((_4, _push5, _parent5, _scopeId4) => {
            if (_push5) _push5(ssrRenderComponent($setup.SafeIcon, { name: "ChevronLeft", size: 16, class: "rtl:rotate-180", "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "36", "data-source-line-end": "36" }, null, _parent5, _scopeId4));
            else return [createVNode($setup.SafeIcon, { name: "ChevronLeft", size: 16, class: "rtl:rotate-180", "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "36", "data-source-line-end": "36" })];
          }), _: 2 }, _parent4, _scopeId3)) : _push4("<!---->");
          else return [item.href ? (openBlock(), createBlock($setup.BreadcrumbLink, { key: 0, href: item.href, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "29", "data-source-line-end": "31" }, { default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]), _: 2 }, 1032, ["href"])) : (openBlock(), createBlock($setup.BreadcrumbPage, { key: 1, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "32", "data-source-line-end": "34" }, { default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]), _: 2 }, 1024)), index < $props.items.length - 1 ? (openBlock(), createBlock($setup.BreadcrumbSeparator, { key: 2, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, { default: withCtx(() => [createVNode($setup.SafeIcon, { name: "ChevronLeft", size: 16, class: "rtl:rotate-180", "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "36", "data-source-line-end": "36" })]), _: 1 })) : createCommentVNode("", true)];
        }), _: 2 }, _parent3, _scopeId2));
      }), _push3("<!--]-->");
      else return [(openBlock(true), createBlock(Fragment, null, renderList($props.items, (item, index) => (openBlock(), createBlock($setup.BreadcrumbItem, { key: index, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "28", "data-source-line-end": "38" }, { default: withCtx(() => [item.href ? (openBlock(), createBlock($setup.BreadcrumbLink, { key: 0, href: item.href, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "29", "data-source-line-end": "31" }, { default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]), _: 2 }, 1032, ["href"])) : (openBlock(), createBlock($setup.BreadcrumbPage, { key: 1, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "32", "data-source-line-end": "34" }, { default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]), _: 2 }, 1024)), index < $props.items.length - 1 ? (openBlock(), createBlock($setup.BreadcrumbSeparator, { key: 2, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, { default: withCtx(() => [createVNode($setup.SafeIcon, { name: "ChevronLeft", size: 16, class: "rtl:rotate-180", "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "36", "data-source-line-end": "36" })]), _: 1 })) : createCommentVNode("", true)]), _: 2 }, 1024))), 128))];
    }), _: 1 }, _parent2, _scopeId));
    else return [createVNode($setup.BreadcrumbList, { "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "27", "data-source-line-end": "39" }, { default: withCtx(() => [(openBlock(true), createBlock(Fragment, null, renderList($props.items, (item, index) => (openBlock(), createBlock($setup.BreadcrumbItem, { key: index, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "28", "data-source-line-end": "38" }, { default: withCtx(() => [item.href ? (openBlock(), createBlock($setup.BreadcrumbLink, { key: 0, href: item.href, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "29", "data-source-line-end": "31" }, { default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]), _: 2 }, 1032, ["href"])) : (openBlock(), createBlock($setup.BreadcrumbPage, { key: 1, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "32", "data-source-line-end": "34" }, { default: withCtx(() => [createTextVNode(toDisplayString(item.label), 1)]), _: 2 }, 1024)), index < $props.items.length - 1 ? (openBlock(), createBlock($setup.BreadcrumbSeparator, { key: 2, "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "35", "data-source-line-end": "37" }, { default: withCtx(() => [createVNode($setup.SafeIcon, { name: "ChevronLeft", size: 16, class: "rtl:rotate-180", "data-source-file": "src/components/common/BreadcrumbNav.vue", "data-source-line-start": "36", "data-source-line-end": "36" })]), _: 1 })) : createCommentVNode("", true)]), _: 2 }, 1024))), 128))]), _: 1 })];
  }), _: 1 }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/BreadcrumbNav.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BreadcrumbNav = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  BreadcrumbNav as B
};
