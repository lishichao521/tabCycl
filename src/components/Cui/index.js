import Table from "./c-table";
import tableColumn from "./c-table-column";
import button from "./c-button";
import Loadings from "./Loading";

const MyTable = {
  install: function (Vue) {
    Vue.component("c-table", Table);
    Vue.component("c-table-column", tableColumn);
    Vue.component("c-button", button);
    Vue.directive("loading", {
      update: function (el, binding, vnode, oldVnode) {
        if (binding.value) {
          let _p = document.createElement("p");
          _p.setAttribute("id", "aa");
          let loading = Vue.extend(Loadings)
          el.append(_p);
          new loading().$mount('#aa')
        } else {
          let tab = el.firstElementChild;
          el.innerHTML = ''
          el.append(tab);
        }
      }
    });
    // Vue.directive("loading", function () {
    //   let loadingE = Vue.extend(Loading)
    //   console.log(loadingE.$el)
    // });
  }
};
export default MyTable;
// 导出组件
