<template>
  <div id="index">
    <div id="banner">
      <h2>系學會網站系統</h2>
      <p>The Website of Department Student Association</p>
      <div class="flow red"></div>
      <div class="flow green"></div>
      <div class="flow blue"></div>
    </div>
    <div id="wrapper">
      <div id="plans">
        <h3>系會日程</h3>
        <p>Plans</p>
      </div>
      <div id="news">
        <h3>活動消息</h3>
        <p>Events News</p>
      </div>
      <div id="announcement">
        <h3>系會公告</h3>
        <p>Announcement</p>
      </div>
    </div>
    <div id="info">
      <h3>關於 [學系]</h3>
      <p>About the Department of [Something]</p>
      <div class="content">
      </div>
      <a href="https://www.nkust.edu.tw/" target="_blank">
        <div class="link">
          國立高雄科技大學 (請改為學系官網)
        </div>
      </a>
    </div>
  </div>
</template>

<style scoped>
#banner {
  padding: 150px 90px;
  border-bottom: 1px rgba(0, 0, 0, 0.5) solid;
}

.flow {
  position: absolute;
  width: 30%;
  height: 30px;
  margin-top: 30px;
}

.flow.red {
  left: 30%;
  background: #f00;
  animation-name: flow-red;
  animation-duration: 7s;
}

@keyframes flow-red {
  from {
    left: 0;
  }
  to {
    left: 30%;
  }
}

.flow.green {
  left: 50%;
  background: #0f0;
  animation-name: flow-green;
  animation-duration: 5s;
}

@keyframes flow-green {
  from {
    left: 0;
  }
  to {
    left: 50%;
  }
}

.flow.blue {
  left: 70%;
  background: #00f;
  animation-name: flow-blue;
  animation-duration: 2s;
}

@keyframes flow-blue {
  from {
    left: 0;
  }
  to {
    left: 70%;
  }
}

#wrapper {
  display: flex;
  height: 350px;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: center;
  border-bottom: 1px rgba(0, 0, 0, 0.5) solid;
}

#wrapper div {
  width: 300px;
  margin: 0 auto;
}

#info {
  text-align: center;
  margin-bottom: 90px;
}

#info a {
  color: #000;
  text-decoration: none;
}

#info .content {
  margin: 0 auto;
  text-align: left;
  width: 70%;
}

#info .link {
  width: 300px;
  margin: 25px auto;
  text-align: center;
  border: 1px rgba(0, 0, 0, 0.5) solid;
  border-radius: 10px;
  padding: 20px 0;
}

#info .link:hover {
  background: rgba(25, 25, 25, 0.7);
}

#info .link:active {
  background: #aaa;
}

@media screen and (max-width: 950px) {
  #banner {
    padding: 150px 50px;
    padding-top: 50px;
  }
}
</style>
