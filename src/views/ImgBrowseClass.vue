<template>
  <!-- 圖片導覽 -->
  <div class="container container_img clearfix">
    <div class="col-12 clearpadding clearfix">
      <div class="col-12 img_nav">
        <ul class="img_nav_ul">
          <li>
            <button class="gateclick">分類</button>
          </li>
          <li class="search">
            <input
              class="search-bar"
              type="search"
              name="search"
              id="search"
              placeholder="輸入名稱"
            />
            <button class="search-btn" onclick="clicked()">
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </li>
        </ul>
      </div>
      <div class="col-12 img_nav_content_outside">
        <div class="col-12 img_nav_content">
          <ul class="img_nav_content_ul">
            <div class="btn-container"></div>
          </ul>
        </div>
      </div>
    </div>
    <!-- 類別按鈕 -->
    <div class="section-center col-12 clearfix">
      <p :menus="title">{{ menus }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    menus: String,
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
/* 圖片NAV  */
.container_img .img_nav {
  position: relative;
}
.container_img .img_nav_ul li {
  list-style: none;
  float: left;
  position: absolute;
}
.container_img .img_nav_ul li h1 {
  font-family: "Klee One", cursive;
}
.container_img .img_nav_ul .search {
  position: absolute;
  left: 76%;
  top: 45%;
}
.container_img .img_nav_ul .search .search-bar {
  border-radius: 10px;
  width: 300px;
  height: 40px;
  font-size: 20px;
  border: 3px solid black;
  background-color: white;
}
.container_img .img_nav_ul .search input::placeholder {
  font-family: "Kosugi Maru", sans-serif;
  color: black;
}
.container_img .img_nav_ul .search .search-btn {
  border-radius: 10px;
  width: 40px;
  height: 40px;
  background-color: black;
  color: #efe9e7;
  outline: none;
  border: 2px solid #3d1101;
  cursor: pointer;
  position: absolute;
  top: 1.8%;
  left: 101%;
}

.gateclick {
  cursor: pointer;
  width: 150px;
  height: 50px;
  background-color: #cae9ff;
  border-radius: 20px;
  border-color: rgba(255, 255, 255, 0);
  font-family: "Kosugi Maru", sans-serif;
  font-size: 20px;
}
.gateclick:hover {
  background-color: #32dbfd;
}
.img_nav_content_outside {
  display: none;
}
.img_nav_content {
  padding-bottom: 0;
}
.clearpadding {
  padding-bottom: 0;
}
.img_nav_ul li input {
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
}
.img_nav_content_ul li {
  list-style: none;
  float: left;
  padding-left: 20px;
  padding-top: 10px;
}
.img_nav_content_ul li input {
  border-radius: 50px;
  background-color: #cae9ff;
  font-family: "Kosugi Maru", sans-serif;
  font-size: 20px;
  border-style: none;
  cursor: pointer;
}
.img_nav_content_ul li input:hover {
  background-color: #32dbfd;
}
#img_nav li {
  float: left;
  padding-left: 40px;
  list-style: none;
}
#img_nav li h1 {
  font-family: "Orbitron", sans-serif;
}
/* 圖片導覽 */

.container_img h1 {
  font-family: "Kaisei HarunoUmi", serif;
  font-size: 16px;
  background-color: #cae9ff;
}
.col-2 img {
  flex-shrink: 0;
  object-fit: cover;
}
/* 燈箱 */
#myImg {
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}

#myImg:hover {
  opacity: 0.7;
}

/* The Modal (background) */
.modal {
  display: none;
  /* Hidden by default */
  position: fixed;
  /* Stay in place */
  z-index: 1;
  /* Sit on top */
  padding-top: 0px;
  /* Location of the box */
  left: 0;
  top: 0;
  width: 100%;
  /* Full width */
  height: 100%;
  /* Full height */
  overflow: hidden;
  /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.8);
  /* Fallback color */
  /* background-color: rgba(0, 0, 0, 0.9); */
  /* Black w/ opacity */
}

/* Modal Content (image) */
.modal-content {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 400px;
}

/* Caption of Modal Image */
#caption {
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
  text-align: center;
  color: #ccc;
  padding: 10px 0;
  height: 150px;
}

/* Add Animation */
.modal-content,
#caption {
  -webkit-animation-name: zoom;
  -webkit-animation-duration: 0.6s;
  animation-name: zoom;
  animation-duration: 0.6s;
}
#subText {
  line-height: 35px;
  font-size: 20px;
  font-family: "Kosugi Maru", sans-serif;
}
#caption #btn {
  font-size: 20px;
  font-family: "Kosugi Maru", sans-serif;
  color: white;
}
</style>
