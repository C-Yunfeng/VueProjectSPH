import {reqCategoryList} from "@/api";
// state：仓库存储数据的地方
const state = {
    // 初始值参考实际数据，若服务器返回值为数组，则初始值设置为数据。若为对象则设置为对象
    categoryList:[]
}
// mutations：修改state的唯一手段
const mutations = {
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList
    }
}
// action：处理action，可以书写业务逻辑，也可以处理异步
const actions = {
    // 解构context:https://vuex.vuejs.org/zh/guide/actions.html
    categoryList({commit}){
        reqCategoryList().then(
            res => {
                if(res.code===200){
                    commit("CATEGORYLIST",res.data)
                }
            },
            err => {
                console.log(err)
            }
        )
    }
}
// 理解为计算属性，用于简化仓库数据，让组件获取仓库的数据更加方便
const getters = {

}
export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}