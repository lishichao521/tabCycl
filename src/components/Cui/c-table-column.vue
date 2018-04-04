<template>
  <!--<th :style="{minWidth:minWidth,width:width,textAlign:'left'}" style="border-bottom:1px solid #333">
    {{label}}
  </th>-->
  <td :style="{minWidth:minWidth,width:width,textAlign:'left'}">
      <div class="c-table-column" style="border-bottom:1px solid #ccc;padding:20px;background:#eee">
        {{label}}
      </div>
      <div v-for="(itme,k) in this.$parent.tabData" :key="k" style="border-bottom:1px solid #ccc;padding:20px;">
        <div >{{itme[prop]}}</div>
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
    label: [String],
  },
  name: 'c-table-column',
  data() {
    return {
      thWith: ''
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
