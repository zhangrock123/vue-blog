<template>
  <div class="app-flex app-flex-full">
    <div class="item-cover">
      <div class="coverImg" :style="{'backgroundImage':`url(${itemData.coverUrl})`}"></div>
    </div>
    <div class="col-1 item-section">
      <header class="text-cut2">{{itemData.title}}</header>
      <section class="text-cut2">{{itemData.describ}}</section>
      <footer>
        <span>
          <i class="icon-eye"></i>
          <b>{{itemData.viewCount}}</b>
        </span>
        {{itemData.createTime | setTimeAgo}}
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    itemData: {
      type: Object,
      required: true,
      default() {
        return {};
      }
    }
  }
};
</script>

<style lang="less" scoped>
.item-cover div {
  width: 100px;
  height: 100px;
  margin-right: 10px;
}
.item-section {
  > header {
    font-size: 16px;
    color: #222;
    font-weight: 500;
  }
  > section {
    font-size: 13px;
    color: #888;
    line-height: 1.5;
    margin: 10px 0;
  }
  > footer {
    color: #9e9e9e;
    span {
      color: #009a61;
      display: inline-block;
      margin-right: 10px;
      b {
        font-weight: 500;
      }
    }
    i {
      width: 20px;
      height: 20px;
      display: inline-block;
      border-radius: 50%;
      background-color: rgba(1, 126, 102, 0.08);
      color: #009a61;
      text-align: center;
      line-height: 20px;
    }
  }
}
</style>

