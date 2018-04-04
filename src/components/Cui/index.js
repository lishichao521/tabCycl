import Table from './c-table'
import tableColumn from './c-table-column'

export const MyTable = {
    install: function (Vue) {
        Vue.component('c-table', Table)
        Vue.component('c-table-column', tableColumn)
    }
}
// 导出组件