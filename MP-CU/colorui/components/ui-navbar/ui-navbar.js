import config from '../../../config/index'
import tools from '../../../utils/tools'

Component({
    data: {
        statusCur: '',
        capsuleStyle: {},
        capsuleBack: {},
        opacityVal: 0,
        sys_statusBar: config.sys_statusBar,
        sys_navBar: config.sys_navBar,
        isFristPage: true
    },
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    properties: {
        back: {
            //是否返回上一页
            type: Boolean,
            value: true
        },
        backtext: {
            //返回文本
            type: String,
            value: ''
        },
        bg: {
            type: String,
            value: 'bg-blur'
        },
        status: {
            //状态栏颜色 可以选择light dark/其他字符串视为黑色
            type: String,
            value: ''
        },
        img: {
            //如果bg == bg-img 则加载对应的图片
            type: String,
            value: ''
        },
        opacity: {
            //是否开启滑动渐变
            type: Boolean,
            value: false
        },
        opacityChange: {
            //开启滑动渐变后 文本样式是否翻转
            type: Boolean,
            value: false
        },
        opacityBg: {
            //开启滑动渐变后 返回按钮是否添加背景
            type: Boolean,
            value: false
        },
        noFixed: {
            //是否浮动
            type: Boolean,
            value: false
        },
        ui: {
            type: String,
            value: ''
        },
        capsule: {
            //是否开启胶囊返回
            type: Boolean,
            value: false
        },
        stopBack: {
            type: Boolean,
            value: false
        },
        placeholder: {
            type: Boolean,
            value: true
        },
        statusBar: {
            type: Number,
            value: 0
        },
        navBar: {
            type: Number,
            value: 0
        },
        isSlot: {
            type: Boolean,
            value: true
        },
        isCenter: {
            type: Boolean,
            value: false
        },
        isRight: {
            type: Boolean,
            value: false
        },
        scrollTop: {
            type: Number,
            value: 0
        },
    },
    lifetimes: {
        created() {
            this.opacityStatus();
        },
        attached() {
            this.setData({
                isFristPage: tools.sys_isFirstPage()
            });
        },
        ready() {

        },
    },
    observers: {
        'scrollTop'(res) {
            this.opacityStatus();
        },
    },
    methods: {
        opacityStatus() {
            let top = this.data.scrollTop;
            let val = top > this.data.sys_navBar ? 1 : top * 0.01;
            this.setData({
                opacityVal: val
            })
        },
        _navBack() {
            if (this.stopBack) {
                this.triggerEvent("navback");
            } else {
                tools._backPage();
            }
        },
        _navHome() {
            tools._toHome();
        },
    }
})