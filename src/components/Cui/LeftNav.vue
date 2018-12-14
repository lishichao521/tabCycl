<template>
    <div
        class="nav_box"
        :style="{background: BGColor, color: initTcolor,top: menuTop}"
        @mouseleave="mouseleaveNav"
    >
        <ul
            class="nav_content_ul boxSizing fl"
            :style="{'width': menuW+'px'}"
            v-for="(time_ul,F)  in childrenNum+1"
            :key="time_ul[props.value]"
        >
            <li
                class="cursor nav_list boxSizing text_overflow"
                v-for="(time,W) in  childrenData[F]"
                :key="time[props.value]"
                :style="{color: W == num[F] ? ATcolor :'',height: menuH+'px', 'line-height':  menuH+'px'}"
                @mouseenter="mouseenterLi(F,W,time[props.children])"
                @click="clickChilMenu(F,W,time[props.children],time)"
            >
                <span class="icons fl">
                    <img
                        :src="time.url"
                        alt=""
                        srcset=""
                    >
                </span>
                <span>
                    <span
                        :style="{width: menuW-100 +'px' }"
                        class="menuTitle text_overflow"
                        v-show="isFold"
                    >
                        {{time[props.label]}}
                    </span>
                </span>

                <span v-show="isFold && time[props.children].length">
                    <svg
                        :style="{'margin-top': menuH - 35 +'px'}"
                        t="1544706884297"
                        class="icon fr"
                        fill="#ccc"
                        viewBox="0 0 1024 1024"
                        version="1.1"
                        p-id="1226"
                        width="20"
                        height="20"
                    >
                        <path
                            d="M312.888889 995.555556c-17.066667 0-28.444444-5.688889-39.822222-17.066667-22.755556-22.755556-17.066667-56.888889 5.688889-79.644445l364.088888-329.955555c11.377778-11.377778 17.066667-22.755556 17.066667-34.133333 0-11.377778-5.688889-22.755556-17.066667-34.133334L273.066667 187.733333c-22.755556-22.755556-28.444444-56.888889-5.688889-79.644444 22.755556-22.755556 56.888889-28.444444 79.644444-5.688889l364.088889 312.888889c34.133333 28.444444 56.888889 73.955556 56.888889 119.466667s-17.066667 85.333333-51.2 119.466666l-364.088889 329.955556c-11.377778 5.688889-28.444444 11.377778-39.822222 11.377778z"
                            p-id="1227"
                        ></path>
                    </svg>
                </span>
            </li>
        </ul>
        <div class="clear"></div>
        <div
            class="dock_bottom"
            :style="{'width': menuW+'px'}"
            v-show="isFold"
        >欢迎咨询10086</div>
    </div>
</template>
<script>
export default {
    name: "LeftNav",
    components: {},
    props: {
        menuH: {
            type: [Number],
            default: 50
        },
        // 默认key值
        props: {
            type: Object,
            default: function() {
                return {
                    label: "name",
                    value: "id",
                    url: "url",
                    children: "children"
                };
            }
        },
        // 菜单顶部距离
        menuTop: {
            type: [String],
            default: "50px"
        },
        // 展开收起菜单
        isFold: {
            type: [Boolean],
            default: false
        },
        // 菜单宽度
        menuW: {
            type: [Number],
            default: 200
        },
        // 菜单数据
        navTopData: {
            type: Array,
            default: function() {
                return [
                    {
                        name: "首页",
                        id: "1",
                        url: "https://cn.vuejs.org/images/logo.png",
                        children: []
                    },
                    {
                        name: "组织管理",
                        id: "2",
                        url: "https://cn.vuejs.org/images/logo.png",
                        children: [
                            {
                                name: "组织管理2-1",
                                id: "2-1",
                                url: "https://cn.vuejs.org/images/logo.png",
                                children: [
                                    {
                                        name: "组织管理2-1-1",
                                        id: "2-1-1",
                                        url:
                                            "https://cn.vuejs.org/images/logo.png",
                                        children: [
                                            {
                                                name: "组织管理2-1-1-1",
                                                id: "2-1-1-1",
                                                url:
                                                    "https://cn.vuejs.org/images/logo.png",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                name: "组织管理2-2",
                                id: "2-2",
                                url: "https://cn.vuejs.org/images/logo.png",
                                children: [
                                    {
                                        name: "组织管理2-2-1",
                                        id: "2-2-1",
                                        url:
                                            "https://cn.vuejs.org/images/logo.png",
                                        children: [
                                            {
                                                name: "组织管理2-2-1-1",
                                                id: "2-2-1-1",
                                                url:
                                                    "https://cn.vuejs.org/images/logo.png",
                                                children: []
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "用户管理",
                        id: "3",
                        url: "https://cn.vuejs.org/images/logo.png",
                        children: [
                            {
                                name: "用户管理3-1",
                                id: "3-1",
                                url: "https://cn.vuejs.org/images/logo.png",
                                children: [
                                    {
                                        name: "用户管理3-1-1",
                                        id: "3-1-1",
                                        url:
                                            "https://cn.vuejs.org/images/logo.png",
                                        children: []
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "资源管理",
                        id: "4",
                        url: "https://cn.vuejs.org/images/logo.png",
                        children: [
                            {
                                name: "资源管理4-1",
                                id: "3-1",
                                url: "https://cn.vuejs.org/images/logo.png",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "财务管理",
                        id: "5",
                        url: "https://cn.vuejs.org/images/logo.png",
                        children: [
                            {
                                name: "财务管理5-1",
                                id: "5-1",
                                url: "https://cn.vuejs.org/images/logo.png",
                                children: []
                            }
                        ]
                    },
                    {
                        name: "内容管理",
                        id: "6",
                        url: "https://cn.vuejs.org/images/logo.png",
                        children: [
                            {
                                name: "内容管理6-1",
                                id: "6-1",
                                url: "https://cn.vuejs.org/images/logo.png",
                                children: []
                            }
                        ]
                    }
                ];
            }
        },
        // 菜单背景色
        BGColor: {
            type: [String],
            default: "#7c97ac"
        },
        // 默认文字颜色
        initTcolor: {
            type: [String],
            default: "#fff"
        },
        //文字选中颜色
        ATcolor: {
            type: [String],
            default: "aquamarine"
        },
        // 文字选中背景--未使用
        ATbackground: {
            type: [String],
            default: ""
        },
        // 当前选择位置--未使用
        activeIndex: {
            type: [Number],
            default: 0
        },
        // false为点击展开true为鼠标移入展开
        isClickHover: {
            type: [Boolean],
            default: false
        }
    },
    data() {
        return {
            childrenData: [],
            childrenNum: 0,
            num: [],
            maxBoxW: ""
        };
    },
    computed: {},
    methods: {
        // 点击菜单
        clickChilMenu(F, W, chil, time) {
            this.$set(this.num, F, W);
            if (this.isFold === false || this.isClickHover == true) return;
            if (chil.length) {
                this.childrenNum = F + 1;
                this.maxBoxW.style.width =
                    this.menuW * (this.childrenNum + 1) + "px";
            } else {
                if (F === 0) {
                    this.childrenNum = 0;
                    this.maxBoxW.style.width = this.menuW + "px";
                }
                this.childrenNum = F;
            }
            this.num.splice(F + 1, 1);
            this.$set(this.childrenData, F + 1, chil);
            this.$emit("menuClick", F, W, time);
        },
        // 鼠标移入
        mouseenterLi(F, W, chil) {
            this.$set(this.num, F, W);
            if (this.isFold === false || this.isClickHover == false) return;
            if (chil.length) {
                this.childrenNum = F + 1;
                this.maxBoxW.style.width =
                    this.menuW * (this.childrenNum + 1) + "px";
            } else {
                if (F === 0) {
                    this.childrenNum = 0;
                    this.maxBoxW.style.width = this.menuW + "px";
                }
                this.childrenNum = F;
            }
            this.num.splice(F + 1, 1);
            this.$set(this.childrenData, F + 1, chil);
        },
        // 鼠标移出
        mouseleaveNav() {
            if (this.isFold === false) return;
            // this.maxBoxW.style.width = this.menuW + "px";
            // this.num = [];
        }
    },
    created() {
        this.childrenData.push(this.navTopData);
    },
    mounted() {
        this.maxBoxW = document.getElementsByClassName("nav_box")[0];
        this.maxBoxW.style.width = this.isFold ? this.menuW + "px" : "60px";
    },
    watch: {
        isFold: function(o, v) {
            this.$nextTick(() => {
                this.maxBoxW.style.width = o ? this.menuW + "px" : "60px";
            });
        }
    }
};
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
}
html,
body {
    height: 100%;
    width: 100%;
}
.clear {
    clear: both;
}
.icons {
}
.icons img {
    height: 30px;
}
.menuTitle {
    display: inline-block;
    width: 80px;
    /* margin-left: 10px; */
    padding-left: 10px;
}
li {
    list-style-type: none;
}
img {
    vertical-align: middle;
}
textarea {
    resize: none;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
.cursor {
    cursor: pointer;
}
.nav_list {
    height: 70px;
    line-height: 70px;
    padding: 0 15px;
    border-bottom: 1px solid #ccc;
    transition: all 0.4s;
}
.text_overflow {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.nav_box {
    height: 100%;
    display: inline-block;
    position: fixed;
    left: 0;
    overflow: hidden;
    transition: all 0.4s;
    color: #fff;
}
.dock_bottom {
    width: 100%;
    text-align: center;
    position: absolute;
    bottom: 25px;
}
.nav_content_ul {
    height: 100%;
    border-right: 1px solid #ccc;
}
.boxSizing {
    box-sizing: border-box;
    -moz-box-sizing: border-box; /* Firefox */
    -webkit-box-sizing: border-box; /* Safari */
}
</style>


