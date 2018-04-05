<template>
  <td :class="{border1:border}" :style="{minWidth:minWidth,width:width,tdType}">
    <div :style="title" style="padding-left:20px;">
      {{label}}
      <span v-if="sortable" @click="sortFunc" :style="{cursor:'pointer'}">
        <span :class="{up:at,down:!at}">↑</span>
        <span :class="{up:!at,down:at}">↓</span>
      </span>
    </div>
    <div v-for="(itme,k) in $parent.tabData" :key="k" style="border-bottom:1px solid #eee;line-height:50px; min-height:50px;padding-left:20px;">
      <div>
        {{itme[prop]}}
      </div>
      <slot :row="k" :index="k"></slot>
    </div>
  </td>
</template>

<script>
export default {
  props: {
    sortable: [Boolean],
    prop: [String],
    minWidth: [String],
    width: [String],
    label: [String]
  },
  name: "c-table-column",
  data() {
    return {
      tableData: [],
      at: true,
      tdType: {},
      border: false,
      thWith: "",
      title: {
        borderBottom: "1px solid #eee",
        minHeight: "50px",
        lineHeight: "50px"
        // background: "#eee"
      }
    };
  },
  methods: {
    sortFunc() {
      this.at = !this.at;
      this.tableData = this.$parent.$parent.tableData;
      this.$parent.$parent.tableData = [];
      let arr = [];
      this.tableData.forEach((data, k) => {
        arr[this.tableData.length - (k + 1)] = data;
      });
      this.$parent.$parent.tableData = arr;
    }
  },
  mounted() {
    this.border = this.$parent.border;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.border1 {
  border: 1px solid #eee;
  border-bottom: 0 solid;
}
.up {
  color: #409eff;
}
</style>
