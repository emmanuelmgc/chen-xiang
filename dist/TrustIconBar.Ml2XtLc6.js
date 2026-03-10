import { defineComponent, useSSRContext, mergeProps } from "vue";
import { S as SafeIcon, _ as _export_sfc } from "./CommonFooter.D_YqJw8P.js";
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = defineComponent({ __name: "TrustIconBar", setup(__props, { expose: __expose }) {
  __expose();
  const __returned__ = { trustItems: [{ icon: "Wind", label: "منخفض الدخان", labelEn: "Low Smoke" }, { icon: "RefreshCw", label: "7 أيام للإرجاع", labelEn: "7-Day Returns" }, { icon: "Shield", label: "الدفع الآمن", labelEn: "Secure Payment" }, { icon: "Package", label: "استبدال الأضرار", labelEn: "Damage Replacement" }, { icon: "MessageCircle", label: "دعم واتساب", labelEn: "WhatsApp Support" }], SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full overflow-x-auto custom-scrollbar" }, _attrs, { "data-source-file": "src/components/common/TrustIconBar.vue", "data-source-line-start": "15", "data-source-line-end": "30" }))}><div class="flex md:grid md:grid-cols-5 gap-4 md:gap-6 min-w-max md:min-w-0 px-4 md:px-0" data-source-file="src/components/common/TrustIconBar.vue" data-source-line-start="16" data-source-line-end="29"><!--[-->`), ssrRenderList($setup.trustItems, (item) => {
    _push('<div class="flex flex-col items-center justify-center gap-2 min-w-[120px] md:min-w-0 py-4" data-source-file="src/components/common/TrustIconBar.vue" data-source-line-start="17" data-source-line-end="28"><div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center" data-source-file="src/components/common/TrustIconBar.vue" data-source-line-start="22" data-source-line-end="24">'), _push(ssrRenderComponent($setup.SafeIcon, { name: item.icon, size: 24, class: "text-accent", "data-source-file": "src/components/common/TrustIconBar.vue", "data-source-line-start": "23", "data-source-line-end": "23" }, null, _parent)), _push(`</div><p class="text-sm font-medium text-foreground text-center" data-source-file="src/components/common/TrustIconBar.vue" data-source-line-start="25" data-source-line-end="27">${ssrInterpolate(item.label)}</p></div>`);
  }), _push("<!--]--></div></div>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/TrustIconBar.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const TrustIconBar = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  TrustIconBar as T
};
