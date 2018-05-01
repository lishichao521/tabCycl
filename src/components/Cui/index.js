import Table from "./c-table";
import tableColumn from "./c-table-column";
import button from "./c-button";
import Loadings from "./Loading";
import NavTop from "./NavTop";
import LeftNav from "./LeftNav";

const MyTable = {
  install: function (Vue) {
    Vue.component("c-table", Table);
    Vue.component("c-table-column", tableColumn);
    Vue.component("c-button", button);
    Vue.component("c-NavTop", NavTop);
    Vue.component("c-LeftNav", LeftNav);
    Vue.directive("loading", {
      update: function (el, binding, vnode, oldVnode) {
        el.style.position = "relative"
        let loaingText = el.getAttribute('loaing')
          if (binding.value) {
          let _p = document.createElement("p");
          _p.setAttribute("id", "loading");
          let loading = Vue.extend(Loadings)
          el.append(_p);
          new loading().$mount('#loading')
          document.getElementById('loading-text').innerText = loaingText
        } else {
          let tab = el.firstElementChild;
          el.innerHTML = ''
          el.append(tab);
        }
      }
    });
  }
};
export default MyTable;
// 导出组件
