import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createVNode } from "vue";
import { S as SafeIcon, _ as _export_sfc, B as Button } from "./CommonFooter.D_YqJw8P.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const _sfc_main = defineComponent({ __name: "WhatsAppFloatingButton", props: { phoneNumber: { default: "966500000000" }, message: { default: "مرحباً، أود الاستفسار عن منتجاتكم" } }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, isElevated = ref(false), whatsappUrl = `https://wa.me/${props.phoneNumber}?text=${encodeURIComponent(props.message)}`;
  onMounted(() => {
    if (typeof window < "u") {
      const handleScroll = () => {
        const scrollPosition = window.scrollY + window.innerHeight, documentHeight = document.documentElement.scrollHeight;
        isElevated.value = scrollPosition > documentHeight - 200;
      };
      return window.addEventListener("scroll", handleScroll), () => window.removeEventListener("scroll", handleScroll);
    }
  });
  const __returned__ = { props, isElevated, whatsappUrl, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<a${ssrRenderAttrs(mergeProps({ href: $setup.whatsappUrl, target: "_blank", rel: "noopener noreferrer", class: ["fixed z-50 transition-all duration-300", ["bottom-6 left-6", $setup.isElevated ? "bottom-24" : "bottom-6"]], "aria-label": "تواصل عبر واتساب" }, _attrs, { "data-source-file": "src/components/common/WhatsAppFloatingButton.vue", "data-source-line-start": "35", "data-source-line-end": "52" }))}>`), _push(ssrRenderComponent($setup.Button, { size: "lg", class: "rounded-full w-14 h-14 shadow-card hover:shadow-lg transition-shadow", "data-source-file": "src/components/common/WhatsAppFloatingButton.vue", "data-source-line-start": "46", "data-source-line-end": "51" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 24, "data-source-file": "src/components/common/WhatsAppFloatingButton.vue", "data-source-line-start": "50", "data-source-line-end": "50" }, null, _parent2, _scopeId));
    else return [createVNode($setup.SafeIcon, { name: "MessageCircle", size: 24, "data-source-file": "src/components/common/WhatsAppFloatingButton.vue", "data-source-line-start": "50", "data-source-line-end": "50" })];
  }), _: 1 }, _parent)), _push("</a>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/common/WhatsAppFloatingButton.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const WhatsAppFloatingButton = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  WhatsAppFloatingButton as W
};
