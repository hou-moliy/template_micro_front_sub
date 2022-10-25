import globalModule from "./globalModule";
// 注册globalState ,{vuex实例} store, {qiankun下发的props} props
function registerGlobalModule (store, props = {}) {
  if (!store || !store.hasModule) {
    return;
  }
  // 获取初始化的state
  const initState = (props.getGlobalState && props.getGlobalState()) || {};
  if (!store.hasModule("global")) {
    GenerateGlobal(store, props, initState);
  } else {
    console.log("再次渲染", props.getGlobalState());
    // 每次mount时，都同步一次主应用的数据
    store.dispatch("global/initGlobalState", initState);
  }
}

// 生成vuex中的global对象
function GenerateGlobal (store, props, initState) {
  // 将父应用的数据存储到子应用中，命名空间固定为global
  if (!store.hasModule("global")) {
    globalModule.state = initState;
    globalModule.mutations.EMIT__GLOBAL_STATE = (state) => {
      if (props.setGlobalState) {
        props.setGlobalState(state);
      }
    };
    console.log(globalModule, "xxx");
    store.registerModule("global", globalModule);
  }
}
export default registerGlobalModule;
