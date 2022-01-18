<template>
  <div class="CommentList" id="CommentList">
    <ul>
      <li v-for="(item, i) in comments_list" :key="i">
        <div class="comment-item">
          <div class="comment-header">
            <span class="name">{{ item.name }}</span>
            <span class="date">{{ item.date }}</span>
          </div>
          <div class="comment-main">
            <p>{{ item.text }}</p>
          </div>
          <div class="comment-footer">
            <span @click="Back(i)">回复</span>
            <span @click="Up(i, $event)">收起</span>
          </div>
          <AddComment v-if="item.add" @AddComment="AddComment" :num="i" />
        </div>
        <div class="comments_list" ref="list">
          <CommentList :comments_list="item.childrens" />
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import AddComment from "./add_comment.vue";
export default {
  name: "CommentList",
  props: ["comments_list"],
  methods: {
    AddComment(value, num) {
      if (value === "") return;
      let comment = {
        name: "person",
        date: "0 hours ago",
        text: value,
        childrens: [],
        add: false,
      };
      this.comments_list[num].childrens.push(comment);
    },
    Back(num) {
      this.comments_list[num].add = !this.comments_list[num].add;
    },
    Up(num, e) {
      if (this.$refs.list[num].classList.contains("no-show")) {
        e.target.innerText = "收起";
        this.$refs.list[num].classList.remove("no-show");
      } else {
        e.target.innerText = "展开";
        this.$refs.list[num].classList.add("no-show");
      }
    },
  },
  components: {
    AddComment,
  },
  created() {},
};
</script>
<style scoped>
.CommentList {
  position: relative;
}
ul {
  position: relative;
}
li {
  position: relative;
  list-style: none;
  padding-top: 10px;
}
li .comment-item {
  position: relative;
}
.comment-header {
  position: relative;
}
.comment-header span {
  font-size: 15px;
  color: #999;
}
.comment-header span.name {
  margin-right: 5px;
}
.comment-main {
  position: relative;
}
.comment-main p {
  font-size: 15px;
  line-height: 24px;
}
.comment-footer {
  position: relative;
}
.comment-footer span {
  color: #999;
  font-size: 13px;
  cursor: pointer;
}
.comments_list {
  position: relative;
  padding-left: 50px;
}
.no-show {
  height: 0px;
  overflow: hidden;
}
</style>