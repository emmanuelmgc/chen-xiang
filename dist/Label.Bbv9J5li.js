import { defineComponent, useSSRContext, mergeProps, withCtx, renderSlot } from "vue";
import { _ as _export_sfc, c as cn } from "./CommonFooter.D_YqJw8P.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
import { reactiveOmit } from "@vueuse/core";
import { Label as Label$1 } from "reka-ui";
const _sfc_main$1 = defineComponent({ __name: "Textarea", props: { class: {}, modelValue: {} }, emits: ["update:modelValue"], setup(__props, { expose: __expose, emit: __emit }) {
  __expose();
  const __returned__ = { props: __props, emit: __emit, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  let _temp0;
  _push(`<textarea${ssrRenderAttrs(_temp0 = mergeProps({ class: $setup.cn("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", $setup.props.class), value: $props.modelValue }, _attrs, { "data-source-file": "src/components/ui/textarea/Textarea.vue", "data-source-line-start": "17", "data-source-line-end": "23" }), "textarea")}>${ssrInterpolate("value" in _temp0 ? _temp0.value : `    <slot />
  `)}</textarea>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/textarea/Textarea.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Textarea = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "Label", props: { for: {}, asChild: { type: Boolean }, as: {}, class: { type: [Boolean, null, String, Object, Array] } }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, delegatedProps = reactiveOmit(props, "class"), __returned__ = { props, delegatedProps, get Label() {
    return Label$1;
  }, get cn() {
    return cn;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup.Label, mergeProps($setup.delegatedProps, { class: $setup.cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", $setup.props.class) }, _attrs, { "data-source-file": "src/components/ui/label/Label.vue", "data-source-line-start": "14", "data-source-line-end": "24" }), { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
    else return [renderSlot(_ctx.$slots, "default")];
  }), _: 3 }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/label/Label.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Label = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Label as L,
  Textarea as T
};
