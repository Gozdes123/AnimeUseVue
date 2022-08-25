<template>
  <!-- 時程表 -->
  <div class="container schedule">
    <div class="schedule_col-12 col-12 clearfix">
      <h1>時程表</h1>
    </div>
    <div class="col-12" id="days">
      <ul>
        <li id="Sun">
          <h1 class="date Sun">週日</h1>
          <h2 onclick="ScheduleVideo()">間諜家家酒</h2>
          <h2 onclick="ScheduleVideo()">輝夜姫想讓人告白</h2>
          <h2 onclick="ScheduleVideo()">新石記</h2>
        </li>
        <li id="Mon">
          <h1 class="date Mon">週一</h1>
          <h2 onclick="ScheduleVideo()">炎炎消防隊</h2>
          <h2 onclick="ScheduleVideo()">歡迎來到實力至上主義的教室</h2>
          <h2 onclick="ScheduleVideo()">杜鵑的婚約</h2>
        </li>
        <li id="Tue">
          <h1 class="date Tue">週二</h1>
          <h2 onclick="ScheduleVideo()">盾之勇者成名錄</h2>
          <h2 onclick="ScheduleVideo()">白領羽球部</h2>
          <h2 onclick="ScheduleVideo()">國王排名</h2>
        </li>
        <li id="Wed">
          <h1 class="date Wed">週三</h1>
          <h2 onclick="ScheduleVideo()">進擊的巨人</h2>
          <h2 onclick="ScheduleVideo()">86不存在的戰區</h2>
          <h2 onclick="ScheduleVideo()">無職轉生</h2>
          <h2 onclick="ScheduleVideo()">Lycoris Recoil 莉可麗絲</h2>
        </li>
        <li id="Thr">
          <h1 class="date Thr">週四</h1>
          <h2 onclick="ScheduleVideo()">咒術迴戰</h2>
          <h2 onclick="ScheduleVideo()">相合之物</h2>
        </li>
        <li id="Fri">
          <h1 class="date Fri">週五</h1>
          <h2 onclick="ScheduleVideo()">魔法科高中的劣等生追憶篇</h2>
          <h2 onclick="ScheduleVideo()">鬼滅之刃遊郭篇</h2>
        </li>
        <li id="Sat">
          <h1 class="date Sat">週六</h1>
          <h2 onclick="ScheduleVideo()">宿命迴響</h2>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    let date = new Date();
    let weekarray = ["Mon", "Tue", "Wed", "Thr", "Fri", "Sat", "Sun"];
    let week;
    date.getDay();
    if (date.getDay() == 1) {
      week = weekarray[0];
    } else if (date.getDay() == 0) {
      week = weekarray[6];
    } else {
      week = weekarray[date.getDay() - 1];
    }
    let day = document.querySelector("." + week);
    day.style.backgroundColor = "#7bdff2";
    day.style.color = "white";
  },
};
</script>

<style>
/* 時程表 */
.schedule ul {
  display: flex;
  list-style: none;
}
.schedule_col-12 {
  margin-left: 20px;
}
.schedule_col-12 h1 {
  font-family: "Kosugi Maru", sans-serif;
  text-align: center;
}
.schedule h2 {
  display: block;
  font-size: 18px;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;
  margin-top: 20px;
  border-bottom: 1px solid black;
  background-color: #cae9ff;
  font-family: "Kosugi Maru", sans-serif;
}
.schedule h2:hover {
  background-color: #32dbfd;
}
.schedule li {
  width: calc(100% / 7);
  padding-left: 20px;
  cursor: pointer;
}
.schedule .date {
  font-size: 26px;
  font-family: "Klee One", cursive;
  text-align: center;
}
</style>
