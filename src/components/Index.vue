<template>
  <div id="index">
    <div id="banner">
      <h2>Intelligent Commerce</h2>
      <p>Student Association</p>
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
      <h3>關於 智慧商務系</h3>
      <p>About the Department of Intelligent Commerce</p>
      <div class="content">
        因應雲端世界來臨，國立高雄科技大學「智慧商務系」於108學年度(原)高雄應用科技大學「資訊管理系」改名與轉型而成。
        智慧商務系主要重點為結合人工智慧與大數據分析技術商業管理，為智慧科技與商務應用的跨界整合，共分為「創新網路行銷與分析」、「智慧雲端商務系統開發」、「智慧物聯網」、跨領域「智慧金融與大數據」四大學程。
        教學方向以實務研究發展為目標，與在地產業進行合作與學習，最終連結至職場實習與就業，以培育智慧商務領域所需之人才。
      </div>
      <a href="https://ic.nkust.edu.tw/" target="_blank">
        <div class="link">
          國立高雄科技大學 智慧商務系
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
</style>
