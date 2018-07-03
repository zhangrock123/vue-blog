<template>
  <div class="app-box">
    <div class="app-flex app-flex-full">
      <div class="app-tag">
        <ul class="tag-box">
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
          <load-more :load-more="loadMore">
            <ul class="news">
              <li class="item-card" v-for="(item, $idx) in dataList" :key="$idx">
                <div class="app-flex app-flex-full">
                  <div class="item-cover">
                    <div class="coverImg" :style="{'backgroundImage':`url(${item.coverUrl})`}"></div>
                  </div>
                  <div class="col-1 item-section">
                    <header class="text-cut2">{{item.title}}</header>
                    <section class="text-cut2">{{item.describ}}</section>
                    <footer>
                      <i class="icon-eye"></i>
                      {{item.viewCount}}
                      {{item.createTime | setTimeAgo}}
                    </footer>
                  </div>
                </div>
              </li>
            </ul>
          </load-more>
      </div>
      <div>

      </div>
    </div>
  </div>
</template>

<script>
const LoadMore = () => import("@/components/LoadMore/index.vue");

export default {
  data() {
    return {
      count: 100,
      dataList: []
    };
  },
  components: {
    LoadMore
  },
  methods: {
    getDataList() {
      let data = {
        title: "测试标题",
        describ:
          "以前iOS版本降级使用 Helvetica。 中文字体设置为华文黑体STHeiTi， iOS 9+ 就开始支持 -apple-system 参数了， Chrome 使用 BlinkMacSystemFont ，兼容 iOS/MacOS。现在很多设计师的字体都是PingFang，所以这里...",
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
    }
  },
  mounted() {
    this.getDataList();
  }
};
</script>

<style lang="less" scoped>
.app-box {
  width: 970px;
  height: 100%;
  margin: auto;
  position: relative;
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
  .item-cover div {
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
  .item-section {
    > header {
      font-size: 18px;
      color: #222;
    }
    > section {
      font-size: 13px;
      color: #888;
      line-height: 1.5;
    }
    > footer {
      color: #666;
      i {
        width: 20px;
        height: 20px;
        display: inline-block;
        border-radius: 50%;
        background-color: #eee;
        color: #fff;
      }
    }
  }
}
</style>
