<template>
  <div class="app-box">
    <load-more :load-more="loadMore">
      <div class="app-header-nav-warp">
        <div class="app-header-nav app-flex app-flex-center col-1 text-center">
          <div>
            <a href="javascript:;">
              <i class="icon-thumbs-o-up"></i>
              近期热门
            </a>
          </div>
          <div>
            <a href="javascript:;">
              <i class="icon-heart-o"></i>
              最新内容
            </a>
          </div>
          <div>
            <a href="javascript:;" @click="toggleTag">
              更多标签
              <i class="icon-angle-down" :class="{'dropdown': isTagToggle}"></i>
            </a>
          </div>
        </div>
      </div>
      <div class="index-content app-flex app-flex-full">
        <div class="app-tag">
          <ul class="tag-box" :class="{'toggled': isTagToggle}">
            <li class="app-ellipsis">
              <a href="javascript:;" class="active">
                <i class="coverImg" :style="{'backgroundImage':'url(https://sfault-avatar.b0.upaiyun.com/399/739/3997397795-5a6edc1c3167f_small)'}"></i>
                标签0
              </a>
            </li>
            <li class="app-ellipsis" v-for="i in 5" :key="i">
              <a href="javascript:;">
                <i class="coverImg" :style="{'backgroundImage':'url(https://sfault-avatar.b0.upaiyun.com/399/739/3997397795-5a6edc1c3167f_small)'}"></i>
                标签{{i+1}}
              </a>
            </li>
          </ul>
        </div>
        <div class="col-1">
          <ul class="news">
            <li class="item-card pointer" v-for="(item, $idx) in dataList" :key="$idx" @click="toDetail(item)">
              <artical-item :item-data="item"></artical-item>
            </li>
          </ul>
        </div>
        <div>

        </div>
      </div>
    </load-more>
  </div>
</template>

<script>
const LoadMore = () => import("@/components/LoadMore/index.vue");
const ArticalItem = () => import("@/components/ArticalItem/index.vue");

export default {
  data() {
    return {
      count: 100,
      dataList: [],
      isTagToggle: false
    };
  },
  components: {
    LoadMore,
    ArticalItem
  },
  methods: {
    toggleTag() {
      this.isTagToggle = !this.isTagToggle;
    },
    getDataList() {
      let data = {
        id: "112233",
        title: "测试标题,测试标题测试标题",
        describ:
          "以前iOS版本降级使用 Helvetica。 中文字体设置为华文黑体STHeiTi， iOS 9+ 就开始支持 -apple-system 参数了， Chrome 使用 BlinkMacSystemFont ，兼容 iOS/MacOS。现在很多设计师的字体都是PingFang，所以这里",
        viewCount: 100,
        createTime: "1410501101602",
        coverUrl: "https://segmentfault.com/img/bVbcXWQ?w=500&amp;h=500"
      };
      let res = new Array(10).fill(data);

      this.dataList = [...this.dataList, ...res];
    },
    loadMore(action) {
      console.log("loadMore");
      setTimeout(() => {
        this.getDataList();
        action.loaded();
      }, 2000);
    },
    toDetail(data) {
      console.log(data);
      this.$router.push({
        name: "detail",
        params: {
          id: data.id
        }
      });
    }
  },
  mounted() {
    this.getDataList();
  }
};
</script>

<style lang="less" scoped>
.app-header-nav-warp {
  display: none;
}

.app-tag {
  width: 120px;
  padding-right: 20px;
  .tag-box {
    a {
      i {
        width: 16px;
        height: 16px;
        position: absolute;
        left: 8px;
        top: 50%;
        transform: translate(0, -50%);
      }
      display: block;
      position: relative;
      padding: 8px 0;
      border-radius: 2px;
      text-align: center;
      text-decoration: none;
      color: #666;
      transition: all 0.3s ease;
      &:hover {
        background-color: #a9c9e2;
        transition: all 0.3s ease;
      }
    }
  }
}
.item-card {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
@media screen and (max-width: 500px) {
  .app-header-nav-warp {
    display: block;
    height: 50px;
    .app-header-nav {
      position: fixed;
      top: 0;
      left: 0;
      height: 50px;
      box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1), 0 1px rgba(0, 0, 0, 0.1);
      background: #fafafa;
      a {
        text-decoration: none;
        color: #333;
        font-size: 14px;
        i {
          font-size: 14px;
          display: inline-block;
          transition: all 0.3s ease;
          &.dropdown {
            transform: rotate(-180deg);
            transition: all 0.3s ease;
          }
        }
      }
    }
  }
  .app-box .index-content {
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .app-tag {
    width: 100%;
    padding: 0;
    box-sizing: border-box;
  }
  .tag-box {
    position: fixed;
    top: 50px;
    left: 0;
    opacity: 0;
    width: 100%;
    box-sizing: border-box;
    transition: all 0.3s ease;
    background-color: #fff;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 0 3px #eee;
    &.toggled {
      opacity: 1;
      transition: all 0.3s ease;
    }
    li {
      display: inline-block;
      width: 33%;
      box-sizing: border-box;
      overflow: hidden;
      margin-bottom: 10px;
      a {
        font-size: 14px;
      }
    }
  }
}
</style>
