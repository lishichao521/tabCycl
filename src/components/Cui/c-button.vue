<template>
  <button :style="{background:bg}" :class="button" @click="clickButton" @mousedown="scaleFunc" @mouseup="scaleFunc1">{{name}}</button>
</template>
<script>
export default {
  props: {
    name: {
      type: String,
      default: "默认按钮"
    },
    type: {
      type: [String, Boolean],
      default: true
    }
  },
  name: "c-button",
  data() {
    return {
      bg: null,
      button: {
        "c-button": this.type == true,
        "c-button-primary": this.type == "primary",
        "c-button-success": this.type == "success",
        "c-button-info": this.type == "info",
        "c-button-warning": this.type == "warning",
        "c-button-danger": this.type == "danger",
        "c-button-text": this.type == "text"
      }
    };
  },
  methods: {
    clickButton() {
      this.$emit("click");
    },
    scaleFunc() {
      // switch (this.type) {
      //   case true:
      //     this.bg = "#fff";
      //     break;
      //   case "primary":
      //     this.bg = "#409eff";
      //     break;
      //   case "success":
      //     this.bg = "#67c23a";
      //     break;
      //   case "info":
      //     this.bg = "#909399";
      //     break;
      //   case "warning":
      //     this.bg = "#e6a23c";
      //     break;
      //   case "danger":
      //     this.bg = "#f56c6c";
      //     break;
      // }
    },
    scaleFunc1() {
      // switch (this.type) {
      //   case true:
      //     this.bg = "#ecf5ff";
      //     break;
      //   case "primary":
      //     this.bg = "#66b1ff";
      //     break;
      //   case "success":
      //     this.bg = "#85ce61";
      //     break;
      //   case "info":
      //     this.bg = "#a6a9ad";
      //     break;
      //   case "warning":
      //     this.bg = "#ebb563";
      //     break;
      //   case "danger":
      //     this.bg = "#f78989";
      //     break;
      // }
    }
  }
};
</script>
<style scoped>
.c-button,
.c-button-primary,
.c-button-success,
.c-button-info,
.c-button-warning,
.c-button-danger {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  border-color: #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.c-button:focus,
.c-button:hover {
  color: #409eff;
  border-color: #c6e2ff;
  background-color: #ecf5ff;
}
.c-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
}
.c-button-primary:focus,
.c-button-primary:hover {
  background: #66b1ff;
  border-color: #66b1ff;
  color: #fff;
}
.c-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
}
.c-button-success:focus,
.c-button-success:hover {
  background: #85ce61;
  border-color: #85ce61;
  color: #fff;
}
.c-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
}
.c-button-info:focus,
.c-button-info:hover {
  background: #a6a9ad;
  border-color: #a6a9ad;
  color: #fff;
}
.c-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
}
.c-button-warning:focus,
.c-button-warning:hover {
  background: #ebb563;
  border-color: #ebb563;
  color: #fff;
}
.c-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
}
.c-button-danger:focus,
.c-button-danger:hover {
  background: #f78989;
  border-color: #f78989;
  color: #fff;
}
.c-button-text {
  background: #fff;
  border: 1px solid #fff;
  color: #409eff;
  cursor: pointer;
}
.c-button-text:focus,
.c-button-text:hover {
  color: #66b1ff;
}
</style>
