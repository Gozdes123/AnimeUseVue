<template>
  <nav class="container navbar">
    <ul class="float-nav clearfix">
      <li>
        <a href="index.html">{{ nav.Anime }}</a>
      </li>
      <li><a href="#" class="rename" onclick="Login()"></a></li>
      <li>
        <a href="#" onclick="Favorite()">{{ nav.MyFavorite }}</a>
      </li>
      <li>
        <a href="recommend.html">{{ nav.Recommend }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: {
        Anime: "Anime",
        MyFavorite: "My Favorite",
        Recommend: "Recommend",
      },
    };
  },
};
</script>

<style>
/* global start */
@import url("https://fonts.googleapis.com/css2?family=Klee+One&display=swap");
/* font-family: 'Klee One', cursive; */
@import url("https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi&display=swap");
/* font-family: 'Kaisei HarunoUmi', serif; */
@import url("https://fonts.googleapis.com/css2?family=Kosugi+Maru&display=swap");
/* font-family: 'Kosugi Maru', sans-serif; */
@import url("https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&display=swap");
/* font-family: 'Mochiy Pop One', sans-serif; */
:root {
  --primaryColor: #ff6a48;
}
body {
  height: 2000px;
  background-color: #e3f2fd98;
}
* {
  box-sizing: border-box;
  /* font-family: '微軟正黑體'; */
}
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
body {
  width: 100%;
  overflow-x: hidden;
}
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul,
li,
img {
  margin: 0;
  padding: 0;
  border: 0;
}

ul {
  padding: 0;
  margin: 0;
}
/* grid for desktop  */
.container {
  width: 100%;
}

.col-1 {
  width: calc(100% / 12 * 1);
}

.col-2 {
  width: calc(100% / 12 * 2);
}
.col-3 {
  width: calc(100% / 12 * 3);
}
.col-4 {
  width: calc(100% / 12 * 4);
}

.col-5 {
  width: calc(100% / 12 * 5);
}

.col-6 {
  width: calc(100% / 12 * 6);
}

.col-7 {
  width: calc(100% / 12 * 7);
}
.col-8 {
  width: calc(100% / 12 * 8);
}

.col-9 {
  width: calc(100% / 12 * 9);
}

.col-10 {
  width: calc(100% / 12 * 10);
}

.col-11 {
  width: calc(100% / 12 * 11);
}

.col-12 {
  width: calc(100% / 12 * 12);
}
[class*="col"] {
  float: left;
  padding: 20px;
}
.nopa {
  padding: 0 !important;
}

.no {
  margin: 0 -15px;
}
.top {
  position: fixed;
  z-index: 2022; /*比其他數字大就是上面*/
  right: 20px;
  bottom: 20px;
  border-radius: 100%;
  background-color: #cae9ff83;
  height: 60px;
  width: 60px;
  text-align: center;
}
.top a {
  line-height: 60px;
  text-decoration: none;
  font-family: "Kosugi Maru", sans-serif;
  font-weight: 700;
  color: #000000;
}
/* nav */
.navbar {
  background-color: #cae9ff;
  position: absolute;
  top: 10px;
}
nav {
  width: 100vw;
  padding-top: 20px;
}
nav ul {
  list-style: none; /* 移除項目符號 */
  margin: 0;
  padding: 0;
}
nav a {
  color: #003049;
  display: block; /* 讓 <a> 填滿 <li> */
  font-size: 1.2rem;
  padding: 10px;
  text-decoration: none; /* 移除超連結底線 */
  position: relative;
  font-family: "Orbitron", sans-serif;
}

/* 滑鼠移到 <a> 時變成底線 */
nav a:after {
  position: absolute;
  content: "";
  bottom: -1px;
  left: 0;
  width: 0%;
  border-bottom: 2px solid #000000;
  transition: 0.4s;
}
nav a:hover:after {
  width: 100%;
}
.float-nav li {
  float: right;
  position: relative;
  right: 10%;
  padding-left: 30px;
}
.float-nav a {
  padding-right: 30px;
}
.float-nav li:first-child {
  float: left;
  left: 10%;
}
</style>
