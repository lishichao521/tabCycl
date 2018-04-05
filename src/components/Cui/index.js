import Table from './c-table'
import tableColumn from './c-table-column'
import button from './c-button'

export const MyTable = {
    install: function (Vue) {
        Vue.component('c-table', Table)
        Vue.component('c-table-column', tableColumn)
        Vue.component('c-button', button)
    }
}
// 导出组件