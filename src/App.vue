<template>
  <div id="app">
    <!-- <router-view/> -->
    <br>
    <br>
    <c-table :tabData="tableData" border>
      <c-table-column label="电影" min-width="100px" prop='dy'></c-table-column>
      <c-table-column label="音乐" prop='yy'> </c-table-column>
      <c-table-column label="美剧" prop='mj'></c-table-column>
      <c-table-column label="动漫" prop='dm'></c-table-column>
      <c-table-column label="体育" prop='ty'></c-table-column>
      <c-table-column label="操作">
        <template slot-scope="scope">
          <c-button name="删除" type="danger" @click="aa(scope.row)"></c-button>
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
        }
      ]
    };
  },
  methods:{
    aa(v){
      console.log(v)
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
</style>
