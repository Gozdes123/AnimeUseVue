<template>
  <div class="carousel">
    <div class="container1">
      <img
        :src="require(`../assets/img/${ImgLink.src}`)"
        v-for="ImgLink of Carousel"
        :key="ImgLink.key"
      />
    </div>
    <div class="shift">
      <button class="btn left" @click="LeftShift"></button>
      <button class="btn right" @click="RightShift"></button>
    </div>
    <div class="bottom">
      <div
        class="indicator"
        :id="'num' + Button.id"
        v-for="Button of Carousel"
        :key="Button.id"
        @click="SetIndex(Button.id)"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      Carousel: [
        {
          id: "0",
          key: "img0",
          src: "fd23e28f-f572-40de-9b74-110f4ebad0e1.jpeg",
        },
        {
          id: "1",
          key: "img1",
          src: "e6f83eda8535bc2d5bb221f9951bdtr5.png",
        },
        {
          id: "2",
          key: "img2",
          src: "1076003.png",
        },
        {
          id: "3",
          key: "img3",
          src: "418724.png",
        },
        {
          id: "4",
          key: "img4",
          src: "201707051553259727_2016.jpg",
        },
      ],
    };
  },
  methods: {
    refresh() {
      let orange = document.querySelectorAll(".indicator");
      if (this.index < 0) {
        this.index = this.Carousel.length - 1;
      } else if (this.index >= this.Carousel.length) {
        this.index = 0;
      }
      let ini = "num" + this.index;
      let carousel = document.querySelector(".carousel");
      let width = getComputedStyle(carousel).width;
      width = Number(width.slice(0, -2));
      carousel.querySelector(".container1").style.left =
        this.index * width * -1 + "px";
      for (let k = 0; k < this.Carousel.length; k++) {
        orange[k].style.opacity = 0.3;
      }
      document.getElementById(ini).style.opacity = 1;
    },
    LeftShift() {
      this.index--;
      this.refresh();
    },
    RightShift() {
      this.index++;
      this.refresh();
    },
    SetIndex(idx) {
      this.index = idx;
      this.refresh();
    },
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
/* 輪播 */
.carousel {
  margin-top: 20px;
  width: 100%;
  height: 10%;
  position: relative;
  border-radius: 16px;
  overflow: hidden;
}
.carousel .container1 {
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  display: flex;
  /* 過渡時間1S */
  transition: all 1s;
}

.carousel .container1 img {
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  object-fit: cover;
}
.carousel .shift .btn {
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
  border-color: rgba(0, 0, 0, 0);
  width: 60px;
  height: 100%;
  border-radius: 8px;
  font-size: 80px;
  font-weight: bold;
  line-height: 50px;
  text-align: center;
  user-select: none;
}

.carousel .shift .left {
  left: 20px;
}
.carousel .shift .right {
  right: 20px;
}
.carousel .bottom {
  position: absolute;
  bottom: 20px;
  left: 0px;
  right: 0px;
  margin: 0 auto;
  width: max-content;
  display: flex;
  gap: 10px;
}
.carousel .bottom .indicator {
  height: 8px;
  width: 60px;
  background-color: white;
  cursor: pointer;
}
</style>
