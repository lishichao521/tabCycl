<template>
  <div id="app">
    <!-- <router-view/> -->
    <br>
    <c-button name="添加一列" type="primary" @click="addList"></c-button>
    <c-button name="显示loading" type="primary" @click="loading = !loading"></c-button>
    <br>
    <br>
    <c-table :tabData="tableData" border v-loading="loading">
      <c-table-column label="电影" min-width="50px" prop='dy'></c-table-column>
      <c-table-column label="音乐" prop='yy'> </c-table-column>
      <c-table-column label="美剧" prop='mj'></c-table-column>
      <c-table-column label="动漫" prop='dm'></c-table-column>
      <c-table-column label="体育" prop='ty'></c-table-column>
      <c-table-column label="操作" sortable>
        <template slot-scope="scope">
          <c-button name="删除" type="text" @click="delList(scope.index)"></c-button>
        </template>
      </c-table-column>
      <!-- <c-table-column label="电影" slot="content" slot-scope="slotProps" :keys="slotProps.content.yy"></c-table-column> -->
    </c-table>
    <br>
    <c-button></c-button>
    <c-button name="主要按钮" type="primary"></c-button>
    <c-button name="成功按钮" type="success"></c-button>
    <c-button name="信息按钮" type="info"></c-button>
    <c-button name="警告按钮" type="warning"></c-button>
    <c-button name="危险按钮" type="danger"></c-button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      loading: true,
      butCode:'<c-button></c-button>',
      butCode1:'<c-button name="主要按钮" type="primary"></c-button>',
      butCode2:'<c-button name="成功按钮" type="success"></c-button>',
      butCode3:'<c-button name="信息按钮" type="info"></c-button>',
      butCode4:'<c-button name="警告按钮" type="warning"></c-button>',
      butCode5:'<c-button name="危险按钮" type="danger"></c-button>',
      tableData: [
        {
          yy: "空空如也",
          dy: "变形金刚",
          mj: "权利的游戏",
          dm: "斗罗大陆",
          ty: "足球"
        },
        {
          yy: "桃花朵朵开",
          dy: "蜘蛛侠",
          mj: "行尸走肉",
          dm: "海贼王",
          ty: "篮球"
        },
        {
          yy: "依恋",
          dy: "黑豹",
          mj: "西部世界",
          dm: "镇魂街",
          ty: "羽毛球"
        }
      ]
    };
  },
  methods: {
    delList(v) {
      this.tableData.splice(v, 1);
    },
    addList() {
      let num = parseInt(Math.random() * this.tableData.length + 1);
      this.tableData.push(this.tableData[num - 1]);
    }
  },
  mounted() {}
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#app {
  width: 1200px;
  height: 100%;
  margin: auto;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

input,
button,
select,
textarea {
  outline: none;
}

textarea {
  resize: none;
}
.loading {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
}
.loading-box {
  color: #409eff;
  top: 50%;
  margin-top: -21px;
  width: 100%;
  text-align: center;
  position: absolute;
}
</style>
