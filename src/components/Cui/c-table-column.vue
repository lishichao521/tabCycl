<template>
  <!--<th :style="{minWidth:minWidth,width:width,textAlign:'left'}" style="border-bottom:1px solid #333">
    {{label}}
  </th>-->
  <td :style="{minWidth:minWidth,width:width}">
    <div class="c-table-column" :style="title" style="padding-left:20px;">
      {{label}}
    </div>
    <div v-for="(itme,k) in this.$parent.tabData" :key="k" style="border-bottom:1px solid #ccc;line-height:50px; height:50px;padding-left:20px;">
      <slot :row="k" :index="k"></slot>
      <div>
        {{itme[prop]}}
      </div>
    </div>
  </td>
</template>

<script>
export default {
  props: {
    keys: [String],
    prop: [String],
    minWidth: [String],
    width: [String],
    label: [String]
  },
  name: "c-table-column",
  data() {
    return {
      thWith: "",
      title: {
        borderBottom: "1px solid #ccc",
        height: "50px",
        lineHeight:'50px',
        background: "#eee"
      }
    };
  },
  mounted() {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
