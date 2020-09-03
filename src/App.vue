<template>
  <div>
    <div id="header">
      <router-link to="/">
        <img id="logo" src="@/assets/logo.png" />
      </router-link>
      <div id="title">
        <h1>{{ title.current.major }}</h1>
        <p>{{ title.current.minor }}</p>
      </div>
      <div @mouseleave="menuOpener(false)" class="dropdown">
        <div title="Menu" @click="menuOpener" id="menu-opener">=</div>
        <nav v-show="displayMenu" id="menu">
          <a
            v-for="(item, itemId) in menu"
            :key="itemId"
            @click.prevent="menuHanle(item)"
            href="#"
          >
            <div class="nav-item">{{ item }}</div>
          </a>
        </nav>
      </div>
    </div>
    <div id="content">
      <router-view class="child-view" />
    </div>
    <div id="footer">
      109學年智慧商務系學會 辦公地點：MA302A
      <div id="copyright">
        Copyright&copy; 2020 NKUST IC All Rights Reserved.
      </div>
      <div id="sns-list">
        <a title="Facebook" href="https://www.facebook.com/NKUSTICSA">
          <img alt="Facebook" src="@/assets/sns/facebook.png" />
        </a>
        <a title="Instagram" href="https://www.instagram.com/109th_ic">
          <img alt="Instagram" src="@/assets/sns/instagram.png" />
        </a>
        <a title="LINE" href="https://nav.cx/eIuGlgR">
          <img alt="LINE" src="@/assets/sns/line.png" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayMenu: false,
      title: {
        pc: {
          major: "國立高雄科技大學 智慧商務系學會",
          minor:
            "National Kaohsiung University of Science and Technology Department of Intelligent Commerce",
        },
        mobile: {
          major: "國立高雄科技大學",
          minor: "智慧商務系學會",
        },
        current: {
          major: "",
          minor: "",
        },
      },
      menu: [
        "系網首頁",
        "新生專區",
        "系會介紹",
        "歷屆幹部",
        "組織章程",
      ],
    };
  },
  methods: {
    resizeUI() {
      this.title.current =
        window.innerWidth > 950 ? this.title.pc : this.title.mobile;
    },
    menuOpener(specify = null) {
      this.displayMenu = specify === null ? !this.displayMenu : specify;
    },
    menuHanle(routeName) {
      this.$router.push({ name: routeName });
      this.displayMenu = false;
    },
  },
  created() {
    this.resizeUI();
    window.addEventListener("resize", this.resizeUI);
  },
  destroyed() {
    window.removeEventListener("resize", this.resizeUI);
  },
};
</script>

<style>
#header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(200, 200, 200, 0.1);
  border-bottom: 1px rgba(0, 0, 0, 0.5) solid;
}

#content {
  min-height: 500px;
}

#footer {
  padding: 25px;
  background: rgba(100, 100, 100, 0.1);
  border-top: 1px rgba(0, 0, 0, 0.5) solid;
}

#logo {
  width: 150px;
  height: auto;
}

#title {
  font-family: "Noto Sans TC", sans-serif;
}

#title h1 {
  margin: 10px auto;
  font-weight: normal;
}

#menu-opener {
  width: 90px;
  height: auto;
  cursor: pointer;
  background: none;
  font-size: 29px;
  text-align: center;
  border-radius: 10px;
}

nav {
  display: block;
  position: absolute;
  width: 300px;
  max-height: 500px;
  text-align: center;
  background: #fff;
  border: 1px #000 solid;
  overflow: scroll;
  padding: 10px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  right: 10px;
  z-index: 10;
}

.nav-item {
  margin: 5px auto;
}

.dropdown {
  position: relative;
  display: inline-block;
}

nav a {
  display: block;
  color: black;
  padding: 10px;
  text-decoration: none;
  border-radius: 10px;
}

nav a:hover {
  background-color: #ddd;
}

#copyright {
  float: right;
}

#sns-list {
  margin-top: 10px;
}

#sns-list a {
  margin: 5px;
}

@media screen and (max-width: 950px) {
  #logo {
    width: 90px;
    height: auto;
  }

  h1 {
    font-size: 20px;
  }

  #footer {
    text-align: center;
  }

  #copyright {
    float: none;
  }
}
</style>
