import Vue from "vue";
import App from "./app/App.vue";
import "../css/form.css";

document.addEventListener("DOMContentLoaded", function() {
  new Vue({
    el: "#turing-widget-framework",
    render: h => h(App)
  });
});

export default {};
