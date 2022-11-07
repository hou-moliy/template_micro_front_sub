<template>
  <div class="about">
    <h4>This is an about page 子应用</h4>
    <h5>主应用带过来的消息：{{ $store.state.global.userInfo.name }}</h5>
    <button @click="changeName">
      改变名字
    </button>
  </div>
</template>
<script>

export default {
  name: "AboutView",
  components: {
  },
  created () {
    console.log(this.$store.state);
  },
  methods: {
    changeName () {
      const state = { ...this.$store.state.global };
      const userInfo = { ...this.$store.state.global.userInfo };
      console.log(userInfo, "....");
      this.$store.dispatch("global/setGlobalState", {
        ...state,
        userInfo: {
          ...userInfo,
          name: "子应用改主应用的名字：李四",
        },
      });
    },
  },
};
</script>
