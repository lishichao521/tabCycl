/*
    创建者：cc
    创建时间：2019-11-11 17:10
    模块名称：签名
    备注：xxxx
*/
<template>
    <canvas id="myCanvas" style="border: 1px solid #000" @mouseup="mouseupF" @mousedown="mousedownF" @mousemove="mousemoveF"></canvas>
</template>

<script>
export default {
    data() {
        return {
            canvas: null,
            ctx: null,
            isShow: false //鼠标是否按下
        };
    },
    created() {},
    mounted() {
        this.canvas = document.querySelector("#myCanvas");
        this.canvas.width = this.canvas.parentNode.clientWidth;
        this.canvas.height = this.canvas.parentNode.clientHeight;
        this.ctx = this.canvas.getContext("2d");
        this.ctx.lineWidth = 5;
    },
    methods: {
        //鼠标按下
        mousedownF(e) {
            //左键
            if (e.which === 1) {
                this.ctx.moveTo(e.clientX, e.clientY);
                this.isShow = true;
            }
        },
        //鼠标松开
        mouseupF() {
            this.isShow = false;
            console.log(this.canvas.toDataURL("image/png", 1));
        },
        //鼠标移动
        mousemoveF(e) {
            if (this.isShow === true) {
                this.ctx.lineTo(e.clientX, e.clientY);
                this.ctx.stroke();
                // this.img1 = this.canvas.toDataURL("image/png", 1);
            }
        }
    }
};
</script>



<style lang="scss">
</style>
