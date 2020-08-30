<template>
  <div v-if="navTopData && navTopData.length" :class="{fixed:isFixedNav}">
    <div class="navTop" :style="{'background-color':backgroundColor,'color':textColor,'height':height,'line-height': height-2+'px'}">
      <div class="navTop-logo fl cursor" :style="{'width':logoImgWidth+'px'}" v-if="isShowLogo">
        <img :style="{'height':'100%','vertical-align':'middle'}" :src="logoImg" alt="">
      </div>
      <div class="navTop-box fl cursor">
        <div class="fl" :style="{'color':activeIndexs == k ? activeTextColor : '','background': activeIndexs == k ? hoverBackground : '', 'border-bottom':activeIndexs == k ? '2px solid'+activeTextColor:''}" @click="activeIndexs = k,activeFunc(time,k)" @mouseout="mouseoutFunc(k)" @mouseover="mouseoverFunc(k)" v-for="(time,k) in navTopData" :key="time[props.id]">
          <div class="navTop-box-txt" :style="{'background':ishoverStyle[k] ? hoverBackground : ''}">{{time[props.label]}}</div>
        </div>
      </div>
      <div class="navTop-box fr cursor"></div>
      <div class="navTop-userBox fr cursor" v-if="isShowUser">
        <div class="navTop-userBox-img" @click="isEsc = !isEsc">
          <span>{{userName}}</span>
          <span>
            <i style="font-size:12px;" class="iconfont icon-unfold"></i>
          </span>
          &nbsp;
          <img :style="{height:'40px',width:'40px','border-radius':'50%','vertical-align':'middle'}" :src="userImg" alt="" />
        </div>
        <div class="escBox" :style="{background:backgroundColor}" v-if="isEsc">
          <div>退出</div>
        </div>
      </div>
    </div>
    <div :style="{'height':H ? '100%':'0'}" style="width:1200px;margin:auto;overflow: hidden;">
      <h1>用法</h1>
      <textarea style="width:1200px;height:510px;font-size:20px;" disabled="disabled">

        <template>
          <c-NavTop :navTopData="navTopData"></c-NavTop>
        </template>

        <script>
        export default {
          data() {
            return {
              navTopData: [{
                  methodName: "首页"
                },
                {
                  methodName: "组织管理"
                },
                {
                  methodName: "用户管理"
                },
                {
                  methodName: "资源管理"
                },
                {
                  methodName: "财务管理"
                },
                {
                  methodName: "内容管理"
                }
              ]
            }
          }
        }
        </script>
      </textarea>
      <h1>属性</h1>
      <table style="width: 100%;text-align:center;" border="1" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>isFixedNav</td>
            <td>固定菜单</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>false</td>
            <td>:navTopData="62"</td>
          </tr>
          <tr>
            <td>height</td>
            <td>菜单高度</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
            <td>:navTopData="62"</td>
          </tr>
          <tr>
            <td>navTopData</td>
            <td>菜单数据</td>
            <td>Array</td>
            <td>—</td>
            <td>—</td>
            <td>:navTopData="Array"</td>
          </tr>
          <tr>
            <td>backgroundColor</td>
            <td>菜单背景色</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>backgroundColor="#ccc"</td>
          </tr>
          <tr>
            <td>textColor</td>
            <td>文字颜色</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>textColor="#ccc"</td>
          </tr>
          <tr>
            <td>activeTextColor</td>
            <td>选中状态文字颜色</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>activeTextColor="#ccc"</td>
          </tr>
          <tr>
            <td>hoverBackground</td>
            <td>鼠标移入背景颜色</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>hoverBackground="#cccc"</td>
          </tr>
          <tr>
            <td>activeIndex</td>
            <td>选中菜单的下标值</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
            <td>:activeIndex="0"</td>
          </tr>
          <tr>
            <td>userName</td>
            <td>用户名字</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>userName="cc"</td>
          </tr>
          <tr>
            <td>userImg</td>
            <td>登录账号头像</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>userImg="xxx.jpg"(不限图片格式)</td>
          </tr>
          <tr>
            <td>isShowUser</td>
            <td>是否显示账号信息</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>true</td>
            <td>:isShowUser="false"</td>
          </tr>
          <tr>
            <td>logoImg</td>
            <td>网站logo</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>logoImg="xxx.jpg"(不限图片格式)</td>
          </tr>
          <tr>
            <td>logoImgWidth</td>
            <td>网站logo宽度</td>
            <td>Number</td>
            <td>—</td>
            <td>—</td>
            <td>:logoImgWidth="100"</td>
          </tr>
          <tr>
            <td>isShowLogo</td>
            <td>是否显示logo</td>
            <td>Boolean</td>
            <td>true/false</td>
            <td>true</td>
            <td>:isShowLogo="false"</td>
          </tr>
        </tbody>
      </table>
      <h1>Props</h1>
      <table style="width: 100%;text-align:center;" border="1" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>参数</th>
            <th>说明</th>
            <th>类型</th>
            <th>可选值</th>
            <th>默认值</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>label</td>
            <td>设置菜单数据的key值</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>:props="{ labek: 'methodName', value: 'methodNameId' }"</td>
          </tr>
          <tr>
            <td>value</td>
            <td>设置菜单数据的key值</td>
            <td>String</td>
            <td>—</td>
            <td>—</td>
            <td>:props="{ labek: 'methodName', value: 'methodNameId' }"</td>
          </tr>
        </tbody>
      </table>
      <h1>回调方法</h1>
      <table style="width: 100%;text-align:center;" border="1" cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>方法名</th>
            <th>说明</th>
            <th>参数</th>
            <th>备注</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>clickNavTop</td>
            <td>点击菜单的回调方法</td>
            <td>返回两个参数,1.当前菜单的数据2.当前菜单的下标值</td>
            <td>—</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div style="text-align:center">
      <br/>
      <a href="javaScript:" @click="H = !H">{{H ? '关闭代码' : '显示代码'}}</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavTop",
  props: {
    props: {
      type: Object,
      default: function () {
        return {
          label: "methodName",
          value: "methodNameId"
        };
      }
    },
    isFixedNav: {
      type: [Boolean],
      default: false
    },
    height: {
      type: [Number],
      default: 62
    },
    navTopData: {
      type: Array,
      default: function () {
        return [
          { methodName: "首页", id: 1 },
          { methodName: "组织管理", id: 2 },
          { methodName: "用户管理", id: 3 },
          { methodName: "资源管理", id: 4 },
          { methodName: "财务管理", id: 5 },
          { methodName: "内容管理", id: 6 }
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
      H:true,
      navTopDatas: [],
      isEsc: false,
      ishoverStyle: [false],
      activeIndexs: this.activeIndex,
      isCollapse: false
    };
  },
  methods: {
    mouseoutFunc(k) {
      this.$set(this.ishoverStyle, k, false);
      this.ishoverStyle[k] = false;
    },
    mouseoverFunc(k) {
      this.$set(this.ishoverStyle, k, true);
      this.ishoverStyle[k] = true;
    },
    activeFunc(e, k) {
      this.$emit("clickNavTop", e, k);
    }
  },
  created() { },
  mounted() { },
  watch: {
    activeIndex: function (v1, v2) {
      this.activeIndexs = v1;
    }
  }
};
</script>
<style scoped>
img {
  vertical-align: middle;
}
textarea {
  resize: none;
}
tr {
  height: 50px;
}
.fl {
  float: left;
}
.fr {
  float: right;
}
.transition {
  transition: all 0.5s;
}
.fixed {
  position: fixed;
  top: 0;
}
.cursor {
  cursor: pointer;
}
.navTop {
  font-size: 14px;
  height: 62px;
  line-height: 60px;
  background: rgba(84, 92, 100);
  color: #fff;
}
.navTop-logo {
  height: 100%;
  overflow: hidden;
  text-align: center;
}
.navTop-box-txt {
  padding: 0 20px;
}
.navTop-userBox {
  margin-right: 100px;
  position: relative;
}
.navTop-userBox-img {
  width: 200px;
}
.escBox {
  position: absolute;
  left: 0;
  top: 65px;
  text-align: center;
  line-height: initial;
  padding: 10px 30px;
  box-shadow: 0 2px 10px #111;
}
</style>


