import { defineComponent, useSSRContext, mergeProps, withCtx, renderSlot, createVNode } from "vue";
import { useForwardPropsEmits, AccordionRoot, AccordionContent as AccordionContent$1, useForwardProps, AccordionItem as AccordionItem$1, AccordionTrigger as AccordionTrigger$1, AccordionHeader } from "reka-ui";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass } from "vue/server-renderer";
import { _ as _export_sfc, c as cn } from "./CommonFooter.DAC1pK2d.js";
import { reactiveOmit } from "@vueuse/core";
import { ChevronDown } from "lucide-vue-next";
const _sfc_main$3 = defineComponent({ __name: "Accordion", props: { collapsible: { type: Boolean }, disabled: { type: Boolean }, dir: {}, orientation: {}, unmountOnHide: { type: Boolean }, asChild: { type: Boolean }, as: {}, type: {}, modelValue: {}, defaultValue: {} }, emits: ["update:modelValue"], setup(__props, { expose: __expose, emit: __emit }) {
  __expose();
  const props = __props, emits = __emit, forwarded = useForwardPropsEmits(props, emits), __returned__ = { props, emits, forwarded, get AccordionRoot() {
    return AccordionRoot;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.AccordionRoot, mergeProps($setup.forwarded, _attrs, { "data-source-file": "src/components/ui/accordion/Accordion.vue", "data-source-line-start": "16", "data-source-line-end": "18" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
    else return [renderSlot(_ctx.$slots, "default")];
  }), _: 3 }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/accordion/Accordion.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Accordion = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "AccordionContent", props: { forceMount: { type: Boolean }, asChild: { type: Boolean }, as: {}, class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, delegatedProps = reactiveOmit(props, "class"), __returned__ = { props, delegatedProps, get AccordionContent() {
    return AccordionContent$1;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.AccordionContent, mergeProps($setup.delegatedProps, { class: "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" }, _attrs, { "data-source-file": "src/components/ui/accordion/AccordionContent.vue", "data-source-line-start": "14", "data-source-line-end": "21" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(`<div class="${ssrRenderClass($setup.cn("pb-4 pt-0", $setup.props.class))}" data-source-file="src/components/ui/accordion/AccordionContent.vue" data-source-line-start="18" data-source-line-end="20"${_scopeId}>`), ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId), _push2("</div>");
    else return [createVNode("div", { class: $setup.cn("pb-4 pt-0", $setup.props.class), "data-source-file": "src/components/ui/accordion/AccordionContent.vue", "data-source-line-start": "18", "data-source-line-end": "20" }, [renderSlot(_ctx.$slots, "default")], 2)];
  }), _: 3 }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/accordion/AccordionContent.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AccordionContent = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "AccordionItem", props: { disabled: { type: Boolean }, value: {}, unmountOnHide: { type: Boolean }, asChild: { type: Boolean }, as: {}, class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, delegatedProps = reactiveOmit(props, "class"), forwardedProps = useForwardProps(delegatedProps), __returned__ = { props, delegatedProps, forwardedProps, get AccordionItem() {
    return AccordionItem$1;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.AccordionItem, mergeProps($setup.forwardedProps, { class: $setup.cn("border-b", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/accordion/AccordionItem.vue", "data-source-line-start": "16", "data-source-line-end": "21" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
    else return [renderSlot(_ctx.$slots, "default")];
  }), _: 3 }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/accordion/AccordionItem.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AccordionItem = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "AccordionTrigger", props: { asChild: { type: Boolean }, as: {}, class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, delegatedProps = reactiveOmit(props, "class"), __returned__ = { props, delegatedProps, get ChevronDown() {
    return ChevronDown;
  }, get AccordionHeader() {
    return AccordionHeader;
  }, get AccordionTrigger() {
    return AccordionTrigger$1;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.AccordionHeader, mergeProps({ class: "flex" }, _attrs, { "data-source-file": "src/components/ui/accordion/AccordionTrigger.vue", "data-source-line-start": "19", "data-source-line-end": "36" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.AccordionTrigger, mergeProps($setup.delegatedProps, { class: $setup.cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", $setup.props.class), "data-source-file": "src/components/ui/accordion/AccordionTrigger.vue", "data-source-line-start": "20", "data-source-line-end": "35" }), { default: withCtx((_2, _push3, _parent3, _scopeId2) => {
      if (_push3) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2), ssrRenderSlot(_ctx.$slots, "icon", {}, () => {
        _push3(ssrRenderComponent($setup.ChevronDown, { class: "h-4 w-4 shrink-0 transition-transform duration-200", "data-source-file": "src/components/ui/accordion/AccordionTrigger.vue", "data-source-line-start": "31", "data-source-line-end": "33" }, null, _parent3, _scopeId2));
      }, _push3, _parent3, _scopeId2);
      else return [renderSlot(_ctx.$slots, "default"), renderSlot(_ctx.$slots, "icon", {}, () => [createVNode($setup.ChevronDown, { class: "h-4 w-4 shrink-0 transition-transform duration-200", "data-source-file": "src/components/ui/accordion/AccordionTrigger.vue", "data-source-line-start": "31", "data-source-line-end": "33" })])];
    }), _: 3 }, _parent2, _scopeId));
    else return [createVNode($setup.AccordionTrigger, mergeProps($setup.delegatedProps, { class: $setup.cn("flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180", $setup.props.class), "data-source-file": "src/components/ui/accordion/AccordionTrigger.vue", "data-source-line-start": "20", "data-source-line-end": "35" }), { default: withCtx(() => [renderSlot(_ctx.$slots, "default"), renderSlot(_ctx.$slots, "icon", {}, () => [createVNode($setup.ChevronDown, { class: "h-4 w-4 shrink-0 transition-transform duration-200", "data-source-file": "src/components/ui/accordion/AccordionTrigger.vue", "data-source-line-start": "31", "data-source-line-end": "33" })])]), _: 3 }, 16, ["class"])];
  }), _: 3 }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/accordion/AccordionTrigger.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const AccordionTrigger = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  AccordionTrigger as A,
  AccordionItem as a,
  AccordionContent as b,
  Accordion as c
};
