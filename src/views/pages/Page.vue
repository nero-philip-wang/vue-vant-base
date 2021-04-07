<template>
  <div class="page">
    <div class="header">
      <div class="left" @click="back">
        back
      </div>
      <div class="center">
        title
      </div>
      <div class="right"></div>
    </div>
    <div ref="content" class="content" @scroll="scroll">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data() {
    return {
      scrollTop: 0
    }
  },
  activated() {
    this.$refs.content.scrollTop = this.scrollTop
  },
  methods: {
    back() {
      window.history.back()
    },
    scroll() {
      this.scrollTop = this.$refs.content.scrollTop
    }
  }
}
</script>

<style>
.page {
  position: relative;
  height: 100%;
}

.header {
  position: absolute;
  top: 0;
  display: flex;
  width: 100%;
  height: 48px;
  line-height: 48px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
}

.left,
.right {
  width: 40px;
  padding: 0 10px;
  cursor: pointer;
}

.center {
  flex: 1;
  text-align: center;
}

.content {
  position: absolute;
  top: 49px;
  bottom: 0;
  box-sizing: border-box;
  width: 100%;
  padding: 0 10px;
  overflow: auto;
}
</style>
