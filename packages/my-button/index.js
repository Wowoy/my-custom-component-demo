// 导入组件，组件必须声明 name
import MyButton from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
MyButton.install = function (Vue) {
    Vue.component(MyButton.name, MyButton)
}

export default MyButton