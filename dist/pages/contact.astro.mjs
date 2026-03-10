import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from "../astro/server.BSo_k350.js";
import "piccolore";
import "html-escaper";
import { $ as $$BaseLayout } from "../BaseLayout.Cqmr_vR_.js";
import { _ as _export_sfc, S as SafeIcon, B as Button, I as Input, C as CommonHeader, a as CommonFooter } from "../CommonFooter.D_YqJw8P.js";
import { defineComponent, ref, onMounted, useSSRContext, mergeProps, withCtx, createTextVNode, toDisplayString, openBlock, createBlock, createVNode } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderClass, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList } from "vue/server-renderer";
/* empty css                           */
import { C as CONTACT_INFO } from "../contact_info.Z-eOPvq_.js";
import { L as Label, T as Textarea } from "../Label.Bbv9J5li.js";
import { T as TrustIconBar } from "../TrustIconBar.Ml2XtLc6.js";
import { W as WhatsAppFloatingButton } from "../WhatsAppFloatingButton.BvsIxmp4.js";
import { renderers } from "../renderers.mjs";
const _sfc_main$4 = defineComponent({ __name: "ContactHero", setup(__props, { expose: __expose }) {
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
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative w-full h-[400px] md:h-[500px] overflow-hidden" }, _attrs, { "data-source-file": "src/components/contact/ContactHero.vue", "data-source-line-start": "18", "data-source-line-end": "48" }))} data-v-e53a8603><div class="absolute inset-0 bg-cover bg-center" style="${ssrRenderStyle({ backgroundImage: "url(http://image_generate?size=1920x500&query=Modern%20minimalist%20office%20space%20with%20warm%20lighting%20and%20elegant%20wooden%20desk.%20Professional%20business%20environment%20with%20soft%20shadows%20and%20neutral%20tones.)", backgroundPosition: "center" })}" data-source-file="src/components/contact/ContactHero.vue" data-source-line-start="20" data-source-line-end="29" data-v-e53a8603><div class="absolute inset-0 bg-black/30" data-source-file="src/components/contact/ContactHero.vue" data-source-line-start="28" data-source-line-end="28" data-v-e53a8603></div></div><div class="relative h-full flex items-center justify-center px-4" data-source-file="src/components/contact/ContactHero.vue" data-source-line-start="32" data-source-line-end="47" data-v-e53a8603><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5", "text-center max-w-2xl transition-all duration-700"])}" data-source-file="src/components/contact/ContactHero.vue" data-source-line-start="33" data-source-line-end="46" data-v-e53a8603><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4" data-source-file="src/components/contact/ContactHero.vue" data-source-line-start="37" data-source-line-end="39" data-v-e53a8603> اتصل بنا </h1><p class="text-lg md:text-xl text-white/90 mb-6" data-source-file="src/components/contact/ContactHero.vue" data-source-line-start="40" data-source-line-end="42" data-v-e53a8603> نحن هنا للإجابة على جميع استفساراتك </p><p class="text-sm md:text-base text-white/80" data-source-file="src/components/contact/ContactHero.vue" data-source-line-start="43" data-source-line-end="45" data-v-e53a8603> Contact Us - We&#39;re Here to Help </p></div></div></section>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contact/ContactHero.vue"), _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ContactHero = _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$4], ["__scopeId", "data-v-e53a8603"]]);
const _sfc_main$3 = defineComponent({ __name: "ContactMethodCard", props: { type: {}, title: {}, subtitle: {}, description: {} }, setup(__props, { expose: __expose }) {
  __expose();
  const props = __props, isClient = ref(true), isHovered = ref(false);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { props, isClient, isHovered, getIcon: () => {
    switch (props.type) {
      case "whatsapp":
        return "MessageCircle";
      case "phone":
        return "Phone";
      case "email":
        return "Mail";
      default:
        return "Circle";
    }
  }, getContactValue: () => {
    switch (props.type) {
      case "whatsapp":
        return CONTACT_INFO.whatsappNumber;
      case "phone":
        return CONTACT_INFO.phoneNumber;
      case "email":
        return CONTACT_INFO.email;
      default:
        return "";
    }
  }, getContactHref: () => {
    switch (props.type) {
      case "whatsapp":
        return `https://wa.me/${CONTACT_INFO.whatsappNumber}`;
      case "phone":
        return `tel:${CONTACT_INFO.phoneNumber}`;
      case "email":
        return `mailto:${CONTACT_INFO.email}`;
      default:
        return "#";
    }
  }, getButtonLabel: () => {
    switch (props.type) {
      case "whatsapp":
        return "تواصل الآن";
      case "phone":
        return "اتصل بنا";
      case "email":
        return "أرسل بريداً";
      default:
        return "تواصل";
    }
  }, get Button() {
    return Button;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: ["group relative p-6 md:p-8 rounded-lg border border-border/30 bg-card hover:shadow-card transition-all duration-300", $setup.isClient ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"] }, _attrs, { "data-source-file": "src/components/contact/ContactMethodCard.vue", "data-source-line-start": "81", "data-source-line-end": "121" }))}><div class="${ssrRenderClass([$setup.isHovered ? "bg-accent/20 scale-110" : "", "w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4 transition-all duration-300"])}" data-source-file="src/components/contact/ContactMethodCard.vue" data-source-line-start="88" data-source-line-end="93">`), _push(ssrRenderComponent($setup.SafeIcon, { name: $setup.getIcon(), size: 32, class: "text-accent", "data-source-file": "src/components/contact/ContactMethodCard.vue", "data-source-line-start": "92", "data-source-line-end": "92" }, null, _parent)), _push(`</div><h3 class="text-xl font-bold text-foreground mb-1" data-source-file="src/components/contact/ContactMethodCard.vue" data-source-line-start="96" data-source-line-end="98">${ssrInterpolate($props.title)}</h3><p class="text-sm text-accent font-medium mb-3" data-source-file="src/components/contact/ContactMethodCard.vue" data-source-line-start="99" data-source-line-end="101">${ssrInterpolate($props.subtitle)}</p><p class="text-sm text-muted-foreground mb-6" data-source-file="src/components/contact/ContactMethodCard.vue" data-source-line-start="102" data-source-line-end="104">${ssrInterpolate($props.description)}</p><p class="text-base font-medium text-foreground mb-6 break-all" data-source-file="src/components/contact/ContactMethodCard.vue" data-source-line-start="107" data-source-line-end="109">${ssrInterpolate($setup.getContactValue())}</p>`), _push(ssrRenderComponent($setup.Button, { as: "a", href: $setup.getContactHref(), target: $props.type === "whatsapp" ? "_blank" : void 0, rel: $props.type === "whatsapp" ? "noopener noreferrer" : void 0, class: "w-full", "data-source-file": "src/components/contact/ContactMethodCard.vue", "data-source-line-start": "112", "data-source-line-end": "120" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(`${ssrInterpolate($setup.getButtonLabel())}`);
    else return [createTextVNode(toDisplayString($setup.getButtonLabel()), 1)];
  }), _: 1 }, _parent)), _push("</div>");
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contact/ContactMethodCard.vue"), _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ContactMethodCard = _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = defineComponent({ __name: "ContactForm", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true), isSubmitting = ref(false), submitSuccess = ref(false), submitError = ref(""), formData = ref({ name: "", email: "", phone: "", subject: "", message: "" }), errors = ref({});
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const validateForm = () => (errors.value = {}, formData.value.name.trim() || (errors.value.name = "الاسم مطلوب"), formData.value.email.trim() ? /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email) || (errors.value.email = "البريد الإلكتروني غير صحيح") : errors.value.email = "البريد الإلكتروني مطلوب", formData.value.phone.trim() || (errors.value.phone = "رقم الهاتف مطلوب"), formData.value.subject.trim() || (errors.value.subject = "الموضوع مطلوب"), formData.value.message.trim() || (errors.value.message = "الرسالة مطلوبة"), Object.keys(errors.value).length === 0), __returned__ = { isClient, isSubmitting, submitSuccess, submitError, formData, errors, validateForm, handleSubmit: async () => {
    if (validateForm()) {
      isSubmitting.value = true, submitError.value = "";
      try {
        await new Promise((resolve) => setTimeout(resolve, 1500)), submitSuccess.value = true, formData.value = { name: "", email: "", phone: "", subject: "", message: "" }, setTimeout(() => {
          submitSuccess.value = false;
        }, 5e3);
      } catch {
        submitError.value = "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.";
      } finally {
        isSubmitting.value = false;
      }
    }
  }, get Button() {
    return Button;
  }, get Input() {
    return Input;
  }, get Textarea() {
    return Textarea;
  }, get Label() {
    return Label;
  }, SafeIcon };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs, { "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "102", "data-source-line-end": "235" }))}>`), $setup.submitSuccess && $setup.isClient ? (_push('<div class="p-4 rounded-lg bg-accent/10 border border-accent/30 flex items-start gap-3 animate-fade-in-up" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="104" data-source-line-end="113">'), _push(ssrRenderComponent($setup.SafeIcon, { name: "CheckCircle", size: 20, class: "text-accent flex-shrink-0 mt-0.5", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "108", "data-source-line-end": "108" }, null, _parent)), _push('<div data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="109" data-source-line-end="112"><p class="font-medium text-accent" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="110" data-source-line-end="110">تم إرسال رسالتك بنجاح</p><p class="text-sm text-accent/80" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="111" data-source-line-end="111">سنرد عليك قريباً</p></div></div>')) : _push("<!---->"), $setup.submitError && $setup.isClient ? (_push('<div class="p-4 rounded-lg bg-destructive/10 border border-destructive/30 flex items-start gap-3" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="116" data-source-line-end="122">'), _push(ssrRenderComponent($setup.SafeIcon, { name: "AlertCircle", size: 20, class: "text-destructive flex-shrink-0 mt-0.5", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "120", "data-source-line-end": "120" }, null, _parent)), _push(`<p class="text-sm text-destructive" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="121" data-source-line-end="121">${ssrInterpolate($setup.submitError)}</p></div>`)) : _push("<!---->"), _push('<div class="space-y-2" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="125" data-source-line-end="140">'), _push(ssrRenderComponent($setup.Label, { for: "name", class: "text-foreground font-medium", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "126", "data-source-line-end": "128" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" الاسم الكامل * ");
    else return [createTextVNode(" الاسم الكامل * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "name", modelValue: $setup.formData.name, "onUpdate:modelValue": ($event) => $setup.formData.name = $event, type: "text", placeholder: "أدخل اسمك الكامل", class: $setup.errors.name ? "border-destructive" : "", disabled: $setup.isSubmitting, "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "129", "data-source-line-end": "136" }, null, _parent)), $setup.errors.name && $setup.isClient ? _push(`<p class="text-sm text-destructive" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="137" data-source-line-end="139">${ssrInterpolate($setup.errors.name)}</p>`) : _push("<!---->"), _push('</div><div class="space-y-2" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="143" data-source-line-end="158">'), _push(ssrRenderComponent($setup.Label, { for: "email", class: "text-foreground font-medium", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "144", "data-source-line-end": "146" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" البريد الإلكتروني * ");
    else return [createTextVNode(" البريد الإلكتروني * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "email", modelValue: $setup.formData.email, "onUpdate:modelValue": ($event) => $setup.formData.email = $event, type: "email", placeholder: "your@email.com", class: $setup.errors.email ? "border-destructive" : "", disabled: $setup.isSubmitting, "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "147", "data-source-line-end": "154" }, null, _parent)), $setup.errors.email && $setup.isClient ? _push(`<p class="text-sm text-destructive" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="155" data-source-line-end="157">${ssrInterpolate($setup.errors.email)}</p>`) : _push("<!---->"), _push('</div><div class="space-y-2" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="161" data-source-line-end="176">'), _push(ssrRenderComponent($setup.Label, { for: "phone", class: "text-foreground font-medium", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "162", "data-source-line-end": "164" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" رقم الهاتف * ");
    else return [createTextVNode(" رقم الهاتف * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "phone", modelValue: $setup.formData.phone, "onUpdate:modelValue": ($event) => $setup.formData.phone = $event, type: "tel", placeholder: "+966 50 000 0000", class: $setup.errors.phone ? "border-destructive" : "", disabled: $setup.isSubmitting, "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "165", "data-source-line-end": "172" }, null, _parent)), $setup.errors.phone && $setup.isClient ? _push(`<p class="text-sm text-destructive" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="173" data-source-line-end="175">${ssrInterpolate($setup.errors.phone)}</p>`) : _push("<!---->"), _push('</div><div class="space-y-2" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="179" data-source-line-end="194">'), _push(ssrRenderComponent($setup.Label, { for: "subject", class: "text-foreground font-medium", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "180", "data-source-line-end": "182" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" الموضوع * ");
    else return [createTextVNode(" الموضوع * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Input, { id: "subject", modelValue: $setup.formData.subject, "onUpdate:modelValue": ($event) => $setup.formData.subject = $event, type: "text", placeholder: "ما الذي تود الاستفسار عنه؟", class: $setup.errors.subject ? "border-destructive" : "", disabled: $setup.isSubmitting, "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "183", "data-source-line-end": "190" }, null, _parent)), $setup.errors.subject && $setup.isClient ? _push(`<p class="text-sm text-destructive" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="191" data-source-line-end="193">${ssrInterpolate($setup.errors.subject)}</p>`) : _push("<!---->"), _push('</div><div class="space-y-2" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="197" data-source-line-end="212">'), _push(ssrRenderComponent($setup.Label, { for: "message", class: "text-foreground font-medium", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "198", "data-source-line-end": "200" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) _push2(" الرسالة * ");
    else return [createTextVNode(" الرسالة * ")];
  }), _: 1 }, _parent)), _push(ssrRenderComponent($setup.Textarea, { id: "message", modelValue: $setup.formData.message, "onUpdate:modelValue": ($event) => $setup.formData.message = $event, placeholder: "أخبرنا بمزيد من التفاصيل...", rows: "6", class: $setup.errors.message ? "border-destructive" : "", disabled: $setup.isSubmitting, "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "201", "data-source-line-end": "208" }, null, _parent)), $setup.errors.message && $setup.isClient ? _push(`<p class="text-sm text-destructive" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="209" data-source-line-end="211">${ssrInterpolate($setup.errors.message)}</p>`) : _push("<!---->"), _push("</div>"), _push(ssrRenderComponent($setup.Button, { type: "submit", size: "lg", class: "w-full", disabled: $setup.isSubmitting, "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "215", "data-source-line-end": "226" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
    if (_push2) $setup.isSubmitting ? (_push2(`<span class="flex items-center gap-2" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="222" data-source-line-end="225"${_scopeId}>`), _push2(ssrRenderComponent($setup.SafeIcon, { name: "Loader2", size: 18, class: "animate-spin", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "223", "data-source-line-end": "223" }, null, _parent2, _scopeId)), _push2(" جاري الإرسال... </span>")) : _push2(`<span data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="221" data-source-line-end="221"${_scopeId}>إرسال الرسالة</span>`);
    else return [$setup.isSubmitting ? (openBlock(), createBlock("span", { key: 1, class: "flex items-center gap-2", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "222", "data-source-line-end": "225" }, [createVNode($setup.SafeIcon, { name: "Loader2", size: 18, class: "animate-spin", "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "223", "data-source-line-end": "223" }), createTextVNode(" جاري الإرسال... ")])) : (openBlock(), createBlock("span", { key: 0, "data-source-file": "src/components/contact/ContactForm.vue", "data-source-line-start": "221", "data-source-line-end": "221" }, "إرسال الرسالة"))];
  }), _: 1 }, _parent)), _push('<p class="text-xs text-muted-foreground text-center" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="229" data-source-line-end="234"> نحن نحترم خصوصيتك. اقرأ سياسة الخصوصية الخاصة بنا <a href="./privacy-cookie-policy.html" class="text-primary hover:underline" data-source-file="src/components/contact/ContactForm.vue" data-source-line-start="231" data-source-line-end="233"> هنا </a></p></form>');
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contact/ContactForm.vue"), _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const ContactForm = _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = defineComponent({ __name: "CompanyInfo", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, SafeIcon, get CONTACT_INFO() {
    return CONTACT_INFO;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12" }, _attrs, { "data-source-file": "src/components/contact/CompanyInfo.vue", "data-source-line-start": "18", "data-source-line-end": "113" }))}><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8", "transition-all duration-700"])}" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="20" data-source-line-end="95"><h2 class="text-3xl font-bold text-foreground mb-8" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="24" data-source-line-end="26"> معلومات الشركة </h2><div class="mb-8" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="29" data-source-line-end="49"><div class="flex items-start gap-4 mb-4" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="30" data-source-line-end="48"><div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="31" data-source-line-end="33">`), _push(ssrRenderComponent($setup.SafeIcon, { name: "MapPin", size: 20, class: "text-accent", "data-source-file": "src/components/contact/CompanyInfo.vue", "data-source-line-start": "32", "data-source-line-end": "32" }, null, _parent)), _push(`</div><div data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="34" data-source-line-end="47"><h3 class="font-bold text-foreground mb-1" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="35" data-source-line-end="35">العنوان</h3><p class="text-muted-foreground" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="36" data-source-line-end="38">${ssrInterpolate($setup.CONTACT_INFO.addressLine1_ar)}</p><a${ssrRenderAttr("href", $setup.CONTACT_INFO.googleMapsUrl)} target="_blank" rel="noopener noreferrer" class="text-primary hover:underline text-sm mt-2 inline-block" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="39" data-source-line-end="46"> عرض على الخريطة → </a></div></div></div><div class="mb-8" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="52" data-source-line-end="64"><div class="flex items-start gap-4 mb-4" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="53" data-source-line-end="63"><div class="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="54" data-source-line-end="56">`), _push(ssrRenderComponent($setup.SafeIcon, { name: "Clock", size: 20, class: "text-accent", "data-source-file": "src/components/contact/CompanyInfo.vue", "data-source-line-start": "55", "data-source-line-end": "55" }, null, _parent)), _push(`</div><div data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="57" data-source-line-end="62"><h3 class="font-bold text-foreground mb-1" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="58" data-source-line-end="58">ساعات العمل</h3><p class="text-muted-foreground" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="59" data-source-line-end="61">${ssrInterpolate($setup.CONTACT_INFO.workingHours_ar)}</p></div></div></div><div class="p-6 rounded-lg bg-card border border-border/30" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="67" data-source-line-end="94"><h3 class="font-bold text-foreground mb-4" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="68" data-source-line-end="68">تواصل سريع</h3><div class="space-y-3" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="69" data-source-line-end="93"><a${ssrRenderAttr("href", `tel:${$setup.CONTACT_INFO.phoneNumber}`)} class="flex items-center gap-3 text-foreground hover:text-primary transition-colors" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="70" data-source-line-end="76">`), _push(ssrRenderComponent($setup.SafeIcon, { name: "Phone", size: 18, class: "text-accent", "data-source-file": "src/components/contact/CompanyInfo.vue", "data-source-line-start": "74", "data-source-line-end": "74" }, null, _parent)), _push(`<span data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="75" data-source-line-end="75">${ssrInterpolate($setup.CONTACT_INFO.phoneNumber)}</span></a><a${ssrRenderAttr("href", `mailto:${$setup.CONTACT_INFO.email}`)} class="flex items-center gap-3 text-foreground hover:text-primary transition-colors" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="77" data-source-line-end="83">`), _push(ssrRenderComponent($setup.SafeIcon, { name: "Mail", size: 18, class: "text-accent", "data-source-file": "src/components/contact/CompanyInfo.vue", "data-source-line-start": "81", "data-source-line-end": "81" }, null, _parent)), _push(`<span data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="82" data-source-line-end="82">${ssrInterpolate($setup.CONTACT_INFO.email)}</span></a><a${ssrRenderAttr("href", `https://wa.me/${$setup.CONTACT_INFO.whatsappNumber}`)} target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 text-foreground hover:text-primary transition-colors" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="84" data-source-line-end="92">`), _push(ssrRenderComponent($setup.SafeIcon, { name: "MessageCircle", size: 18, class: "text-accent", "data-source-file": "src/components/contact/CompanyInfo.vue", "data-source-line-start": "90", "data-source-line-end": "90" }, null, _parent)), _push(`<span data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="91" data-source-line-end="91">${ssrInterpolate($setup.CONTACT_INFO.whatsappNumber)}</span></a></div></div></div><div class="${ssrRenderClass([$setup.isClient ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8", "rounded-lg overflow-hidden border border-border/30 h-[400px] md:h-[500px] transition-all duration-700"])}" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="98" data-source-line-end="112"><iframe${ssrRenderAttr("src", $setup.CONTACT_INFO.googleMapsUrl)} width="100%" height="100%" style="${ssrRenderStyle({ border: "0" })}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="موقع نفحة NAFHA على الخريطة" data-source-file="src/components/contact/CompanyInfo.vue" data-source-line-start="102" data-source-line-end="111"></iframe></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contact/CompanyInfo.vue"), _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const CompanyInfo = _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = defineComponent({ __name: "SocialLinks", setup(__props, { expose: __expose }) {
  __expose();
  const isClient = ref(true);
  onMounted(() => {
    isClient.value = false, requestAnimationFrame(() => {
      isClient.value = true;
    });
  });
  const __returned__ = { isClient, get Button() {
    return Button;
  }, SafeIcon, get CONTACT_INFO() {
    return CONTACT_INFO;
  } };
  return Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true }), __returned__;
} });
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center gap-4 flex-wrap" }, _attrs, { "data-source-file": "src/components/contact/SocialLinks.vue", "data-source-line-start": "19", "data-source-line-end": "36" }))}><!--[-->`), ssrRenderList($setup.CONTACT_INFO.socialMedia, (social) => {
    _push(ssrRenderComponent($setup.Button, { key: social.platform, variant: "outline", size: "lg", as: "a", href: social.url, target: "_blank", rel: "noopener noreferrer", "aria-label": social.platform, class: ["transition-all duration-300", $setup.isClient ? "opacity-100 scale-100" : "opacity-0 scale-95"], "data-source-file": "src/components/contact/SocialLinks.vue", "data-source-line-start": "20", "data-source-line-end": "35" }, { default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) _push2(ssrRenderComponent($setup.SafeIcon, { name: social.iconName, size: 20, class: "mr-2", "data-source-file": "src/components/contact/SocialLinks.vue", "data-source-line-start": "33", "data-source-line-end": "33" }, null, _parent2, _scopeId)), _push2(` ${ssrInterpolate(social.platform)}`);
      else return [createVNode($setup.SafeIcon, { name: social.iconName, size: 20, class: "mr-2", "data-source-file": "src/components/contact/SocialLinks.vue", "data-source-line-start": "33", "data-source-line-end": "33" }, null, 8, ["name"]), createTextVNode(" " + toDisplayString(social.platform), 1)];
    }), _: 2 }, _parent));
  }), _push("<!--]--></div>");
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  return (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/contact/SocialLinks.vue"), _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SocialLinks = _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const $$Contact = createComponent(($$result, $$props, $$slots) => renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { title: "اتصل بنا - نفحة NAFHA" }, { default: ($$result2) => renderTemplate`
  ${maybeRenderHead()}<div data-source-file="src/pages/contact.astro" data-source-line-start="16" data-source-line-end="99" dir="rtl" lang="ar-SA" class="min-h-screen flex flex-col bg-background">
    ${renderComponent($$result2, "CommonHeader", CommonHeader, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/CommonHeader.vue", "client:component-export": "default" })}
    
    <main data-source-file="src/pages/contact.astro" data-source-line-start="19" data-source-line-end="95" class="flex-1">
      <!-- Hero Section -->
      ${renderComponent($$result2, "ContactHero", ContactHero, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/contact/ContactHero.vue", "client:component-export": "default" })}
      
      <!-- Trust Bar -->
      <section data-source-file="src/pages/contact.astro" data-source-line-start="24" data-source-line-end="28" class="py-8 md:py-12 border-b border-border/20">
        <div data-source-file="src/pages/contact.astro" data-source-line-start="25" data-source-line-end="27" class="container mx-auto px-4">
          ${renderComponent($$result2, "TrustIconBar", TrustIconBar, {})}
        </div>
      </section>
      
      <!-- Contact Methods Grid -->
      <section data-source-file="src/pages/contact.astro" data-source-line-start="31" data-source-line-end="57" class="py-12 md:py-16">
        <div data-source-file="src/pages/contact.astro" data-source-line-start="32" data-source-line-end="56" class="container mx-auto px-4">
          <div data-source-file="src/pages/contact.astro" data-source-line-start="33" data-source-line-end="55" class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            ${renderComponent($$result2, "ContactMethodCard", ContactMethodCard, { "client:idle": true, type: "whatsapp", title: "واتساب", subtitle: "الرد السريع", description: "تواصل معنا عبر واتساب للحصول على إجابات فورية", "client:component-hydration": "idle", "client:component-path": "@/components/contact/ContactMethodCard.vue", "client:component-export": "default" })}
            ${renderComponent($$result2, "ContactMethodCard", ContactMethodCard, { "client:idle": true, type: "phone", title: "الهاتف", subtitle: "اتصل بنا مباشرة", description: "اتصل بفريقنا خلال ساعات العمل", "client:component-hydration": "idle", "client:component-path": "@/components/contact/ContactMethodCard.vue", "client:component-export": "default" })}
            ${renderComponent($$result2, "ContactMethodCard", ContactMethodCard, { "client:idle": true, type: "email", title: "البريد الإلكتروني", subtitle: "الاستفسارات المفصلة", description: "أرسل لنا بريداً إلكترونياً مع تفاصيل احتياجاتك", "client:component-hydration": "idle", "client:component-path": "@/components/contact/ContactMethodCard.vue", "client:component-export": "default" })}
          </div>
        </div>
      </section>
      
      <!-- Contact Form Section -->
      <section data-source-file="src/pages/contact.astro" data-source-line-start="60" data-source-line-end="72" class="py-12 md:py-16 bg-card/50">
        <div data-source-file="src/pages/contact.astro" data-source-line-start="61" data-source-line-end="71" class="container mx-auto px-4">
          <div data-source-file="src/pages/contact.astro" data-source-line-start="62" data-source-line-end="70" class="max-w-2xl mx-auto">
            <h2 data-source-file="src/pages/contact.astro" data-source-line-start="63" data-source-line-end="65" class="text-3xl md:text-4xl font-bold text-foreground mb-2 text-center">
              أرسل لنا رسالتك
            </h2>
            <p data-source-file="src/pages/contact.astro" data-source-line-start="66" data-source-line-end="68" class="text-center text-muted-foreground mb-8">
              سنرد عليك في أقرب وقت ممكن
            </p>
            ${renderComponent($$result2, "ContactForm", ContactForm, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/contact/ContactForm.vue", "client:component-export": "default" })}
          </div>
        </div>
      </section>
      
      <!-- Company Info & Map -->
      <section data-source-file="src/pages/contact.astro" data-source-line-start="75" data-source-line-end="79" class="py-12 md:py-16">
        <div data-source-file="src/pages/contact.astro" data-source-line-start="76" data-source-line-end="78" class="container mx-auto px-4">
          ${renderComponent($$result2, "CompanyInfo", CompanyInfo, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/contact/CompanyInfo.vue", "client:component-export": "default" })}
        </div>
      </section>
      
      <!-- Social Links -->
      <section data-source-file="src/pages/contact.astro" data-source-line-start="82" data-source-line-end="94" class="py-8 md:py-12 border-t border-border/20 bg-card/30">
        <div data-source-file="src/pages/contact.astro" data-source-line-start="83" data-source-line-end="93" class="container mx-auto px-4">
          <div data-source-file="src/pages/contact.astro" data-source-line-start="84" data-source-line-end="91" class="text-center mb-6">
            <h3 data-source-file="src/pages/contact.astro" data-source-line-start="85" data-source-line-end="87" class="text-xl font-bold text-foreground mb-2">
              تابعنا على وسائل التواصل
            </h3>
            <p data-source-file="src/pages/contact.astro" data-source-line-start="88" data-source-line-end="90" class="text-muted-foreground">
              ابقَ على اطلاع بآخر الأخبار والعروض
            </p>
          </div>
          ${renderComponent($$result2, "SocialLinks", SocialLinks, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components/contact/SocialLinks.vue", "client:component-export": "default" })}
        </div>
      </section>
    </main>
    
    ${renderComponent($$result2, "CommonFooter", CommonFooter, { variant: "complex" })}
    ${renderComponent($$result2, "WhatsAppFloatingButton", WhatsAppFloatingButton, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components/common/WhatsAppFloatingButton.vue", "client:component-export": "default" })}
  </div>
` })}`, "/workspaces/chen-xiang/src/pages/contact.astro", void 0);
const $$file = "/workspaces/chen-xiang/src/pages/contact.astro";
const $$url = "/contact.html";
const _page = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: "Module" }));
const page = () => _page;
export {
  page,
  renderers
};
