// 导入组件，组件必须声明 name
import MyVModel from './src/main.vue'

// 为组件添加 install 方法，用于按需引入
MyVModel.install = function (Vue) {
    Vue.component(MyVModel.name, MyVModel)
}

export default MyVModel