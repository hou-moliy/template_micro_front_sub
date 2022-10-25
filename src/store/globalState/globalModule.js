// 这里是主应用和子应用需要共享的东西

// 定义state
const state = {};
// 定义getters
const getters = {};
// 定义actions映射
const actions = {
  // 子应用改变state并通知父应用
  setGlobalState ({ commit }, payload) {
    commit("SET_GLOBAL_STATE", payload);
    commit("EMIT__GLOBAL_STATE", payload);
  },
  // 初始化，只用于mount时同步父应用的数据
  initGlobalState ({ commit }, payload) {
    commit("SET_GLOBAL_STATE", payload);
  },
};

// 定义mutations真正用于修改数据的方法
const mutations = {
  SET_GLOBAL_STATE (state, payload) {
    Object.assign(state, payload);
  },
  // 通知父应用
  EMIT__GLOBAL_STATE (state) { },
};

// 导出所有配置
export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
