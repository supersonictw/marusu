<template>
  <div id="fresh">
    <div id="banner">
      <h2>歡迎加入智慧商務系</h2>
      <p>這裡是新生專區(๑•̀ㅂ•́)و✧</p>
    </div>
    <div id="wrapper">
      <router-link to="/director">
        <div class="wrapper-item first">系主任的話</div>
      </router-link>
      <div class="wrapper-item second">課規表</div>
      <div class="wrapper-item third">系上空間介紹</div>
    </div>
  </div>
</template>

<style scoped>
#banner {
  text-align: center;
  padding: 19px 0;
  color: #08a;
  background: #afe;
}

#wrapper {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0px;
  text-align: center;
  background: rgba(225, 225, 225, 0.5);
}

a {
  text-decoration: none;
}

.wrapper-item {
  width: 150px;
  padding: 75px 0;
  margin: 60px 15px;
  border: 1px rgba(0, 0, 0, 0.2) solid;
  border-radius: 10px;
  color: #fff;
  font-size: 20px;
}

.wrapper-item.first {
  background: rgb(223, 15, 225);
}

.wrapper-item.second {
  background: rgb(123, 0, 255);
}

.wrapper-item.third {
  background: rgb(0, 123, 255);
}

.wrapper-item:hover {
  background: rgba(0, 0, 0, 0.5);
}

.wrapper-item:active {
  color: #000;
  background: rgba(255, 255, 255, 1);
}
</style>
