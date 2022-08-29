import Vue from "vue";
import VueRouter from "vue-router";
import NavBarClass from "../views/NavBarClass.vue";
import CarouselClass from "../views/CarouselClass.vue";
import ScheduleClass from "../views/ScheduleClass.vue";
import RecommendClass from "../views/RecommendClass.vue";
import MyFavoriteClass from "../views/MyFavoriteClass.vue";
import ImgBrowseClass from "../views/ImgBrowseClass.vue";
import LoginClass from "../views/LoginClass.vue";
import FooterClass from "../views/FooterClass.vue";
RecommendClass;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    components: {
      Carousel: CarouselClass,
      Schedule: ScheduleClass,
      ImgBrowse: ImgBrowseClass,
      Nav: NavBarClass,
      Footer: FooterClass,
    },
  },
  {
    path: "/recommend",
    components: {
      Recommend: RecommendClass,
      Nav: NavBarClass,
      Footer: FooterClass,
    },
  },
  {
    path: "/myfavorite",
    components: {
      MyFavorite: MyFavoriteClass,
      Nav: NavBarClass,
      Footer: FooterClass,
    },
  },
  {
    path: "/login",
    component: LoginClass,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
