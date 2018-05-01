<template>
  <div :style="{'width':width+'px'}">
    <ul class="cursor">
      <li class="nav-list" :style="{'height':'50px','line-height':'50px'}" v-for="time in navTopData" :key="time.id">{{time.methodName}}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftNav",
  props: {
    isFixedNav:{
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
          { methodName: "首页",id:1 },
          { methodName: "组织管理", id:2},
          { methodName: "用户管理", id:3 },
          { methodName: "资源管理", id:4 },
          { methodName: "财务管理", id:5 },
          { methodName: "内容管理", id:6 }
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
    userName:{
      type: [String],
      default: "userName"
    },
    userImg: {
      type: [String],
      default: "http://f.elnplus.com/data/images/user/photo/1347379288888909_f5f689bad0d54e7b9872146765484335.jpg"
    },
    isShowUser:{
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
    isShowLogo:{
      type: [Boolean],
      default: true
    }
  },
  data() {
    return {
    };
  },
  methods: {
    
  },
  created() {
  },
  mounted() {},
  watch: {
  }
};
</script>
<style scoped>
*{
  padding: 0;
  margin: 0;
}
li{
  list-style-type: none;
}
img {
  vertical-align: middle;
}
textarea {
  resize: none;
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
.nav-list{
  padding: 0 20px;
}
.nav-list:hover{
  background: #ccc;
}
</style>


