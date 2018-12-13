<template>
  <div class="nav_box">
    <ul
      class="cursor nav_content_ul fl"
      :style="{'width': width+'px'}"
      v-for="(time_ul,F)  in childrenNum+1"
      :key="time_ul"
    >
      <li
        class="nav-list"
        :style="{'height':'50px','line-height':'50px'}"
        v-for="(time,W) in  childrenData[F]"
        :key="time.id"
        @mouseenter="aaa(F,W,time.children)"
      >
        <span class="fl">{{time.methodName}}</span>
        <span class="fr">
          <svg
            t="1544706884297"
            class="icon"
            style
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="1226"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="18"
            height="18"
          >
            <path
              d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
              p-id="1227"
            ></path>
          </svg>
        </span>
      </li>
    </ul>
    <!-- {{childrenData}} -->
    <div class="dock_bottom">欢迎咨询10086</div>
  </div>
</template>
<script>
export default {
  name: "LeftNav",
  components: {},
  props: {
    isFixedNav: {
      type: [Boolean],
      default: false
    },
    width: {
      type: [Number],
      default: 240
    },
    height: {
      type: [Number],
      default: 62
    },
    navTopData: {
      type: Array,
      default: function() {
        return [
          { methodName: "首页", id: 1, children: [] },
          {
            methodName: "组织管理",
            id: 2,
            children: [
              {
                methodName: "组织管理-1",
                id: 22,
                children: [
                  {
                    methodName: "组织管理-1-1",
                    id: 222,
                    children: [
                      { methodName: "组织管理-1-1-1", id: 2222, children: [] }
                    ]
                  }
                ]
              }
            ]
          },
          {
            methodName: "用户管理",
            id: 3,
            children: [
              {
                methodName: "用户管理-1",
                id: 33,
                children: [
                  { methodName: "用户管理-1-1", id: 333, children: [] }
                ]
              }
            ]
          },
          {
            methodName: "资源管理",
            id: 4,
            children: [{ methodName: "资源管理-1", id: 44, children: [] }]
          },
          {
            methodName: "财务管理",
            id: 5,
            children: [{ methodName: "财务管理-1", id: 55, children: [] }]
          },
          {
            methodName: "内容管理",
            id: 6,
            children: [{ methodName: "内容管理-1", id: 66, children: [] }]
          }
        ];
      }
    },
    backgroundColor: {
      type: [String],
      default: "#555"
    },
    textColor: {
      type: [String],
      default: "#fff"
    },
    activeTextColor: {
      type: [String],
      default: "#ffd04b"
    },
    hoverBackground: {
      type: [String],
      default: "#444"
    },
    activeIndex: {
      type: [Number],
      default: 0
    },
    userName: {
      type: [String],
      default: "userName"
    },
    userImg: {
      type: [String],
      default:
        "http://f.elnplus.com/data/images/user/photo/1347379288888909_f5f689bad0d54e7b9872146765484335.jpg"
    },
    isShowUser: {
      type: [Boolean],
      default: true
    },
    logoImg: {
      type: [String],
      default: "http://www.logoaplus.com/themes/logoplus/img/logo-darken.svg"
    },
    logoImgWidth: {
      type: [Number],
      default: 240
    },
    isShowLogo: {
      type: [Boolean],
      default: true
    }
  },
  data() {
    return {
      childrenData: [],
      childrenNum: 0,
      num: 0
    };
  },
  methods: {
    aaa(F, W, chil) {
      if (chil.length) {
        this.childrenNum = F + 1;
      } else {
        if (F === 0) {
          this.childrenNum = 0;
          return;
        }
        this.childrenNum = F;
      }
      this.$set(this.childrenData, F + 1, chil);
      console.log(F, W, chil);
    }
  },
  created() {
    this.childrenData.push(this.navTopData);
  },
  mounted() {},
  watch: {}
};
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
}
html,
body {
  height: 100%;
  width: 100%;
}
.w50 {
  width: 49%;
}
li {
  list-style-type: none;
}
img {
  vertical-align: middle;
}
textarea {
  resize: none;
}
.icon {
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.cursor {
  cursor: pointer;
}
.nav-list {
  padding: 0 20px;
}
.nav-list:hover {
  background: #ccc;
  color: aquamarine;
}
.nav_box {
  /* background: #ccc; */
  height: 100%;
  position: fixed;
  /* top: 50px; */
  position: relative;
}
.dock_bottom {
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 25px;
}
.nav_content_ul {
  border: 1px solid red;
  height: 100%;
}
</style>


