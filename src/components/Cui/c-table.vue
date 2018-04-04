<template>
    <div class="c-table">
        <table :style="{ height: height+'px'}">
            <slot></slot>
        </table>
    </div>
</template>

<script>

import Child from './c-table-column'
export default {
    props: {
        tabData: {
            type: Array,
            default: function() {
                return []
            }
        },
        height: [String, Number],
        border: Boolean
    },
    name: 'c-table',
    data() {
        return {

        }
    },
    components: {
    },
    mounted() {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    width: 100%;
    border-collapse: collapse;
    /*border: 1px solid red;*/
}

input,
button,
select,
textarea {
    outline: none;
}
</style>
