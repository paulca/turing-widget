import Vue from "vue";
import vueCustomElement from "vue-custom-element";

Vue.use(vueCustomElement);

import App from "./app/App.vue";
import "../css/form.css";

Vue.customElement("turing-widget", App);

// document.addEventListener("DOMContentLoaded", function() {
//   new Vue({
//     el: "#turing-widget-framework",
//     render: h => h(App)
//   });
// });

export default {};
