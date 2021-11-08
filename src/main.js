import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
import Index from "./Index.vue";
import router from "./routes";
import vueRouter from "vue-router";
import API from "./api";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.prototype.$http = API;

Vue.use(BootstrapVue);
Vue.use(vueRouter);

new Vue({
    render: (h) => h(Index),
    router,
    components: { Index },
}).$mount("#app");
