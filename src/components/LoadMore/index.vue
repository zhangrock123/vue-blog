<template>
  <div class="scroll-box" v-scroll="scrollParams">
    <slot></slot>
    {{isLoading}}
  </div>
</template>

<script>
export default {
  props: {
    loadMore: {
      type: Function,
      required: true
    },
    offset: {
      type: Number,
      default: 50
    }
  },
  data() {
    return {
      isLoading: false,
      isLoadAll: false
    };
  },
  computed: {
    scrollParams() {
      return {
        offset: this.offset,
        loadMoreFunc: this.loadMore,
        isLoading: this.isLoading,
        isLoadAll: this.isLoadAll
      };
    }
  },
  directives: {
    scroll: {
      bind: (el, binding) => {
        let val = binding.value;
        el.addEventListener("scroll", () => {
          if (val.isLoading || val.isLoadAll) {
            return;
          }
          if (el.scrollTop + el.offsetHeight + val.offset > el.scrollHeight) {
            val.isLoading = true;
            val.loadMoreFunc({
              loaded() {
                val.isLoading = false;
              },
              loadAll() {
                val.isLoadAll = true;
              }
            });
          }
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.scroll-box {
  height: 100%;
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>

