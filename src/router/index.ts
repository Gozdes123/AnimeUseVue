import Vue from "vue";
import VueRouter from "vue-router";
import CarouselClass from "../views/CarouselClass.vue";
import ScheduleClass from "../views/ScheduleClass.vue";
import RecommendClass from "../views/RecommendClass.vue";
RecommendClass;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    components: {
      Carousel: CarouselClass,
      Schedule: ScheduleClass,
    },
  },
  {
    path: "/recommend",
    component: RecommendClass,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
