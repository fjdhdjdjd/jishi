<template>
  <div id="app">
    <header>
      <div class="logo"><span>Y</span><span>Hacker News</span></div>
      <ul>
        <li v-for="(item, i) in li_list" :key="i">{{ item }}</li>
      </ul>
    </header>
    <main>
      <div class="comments_topic">
        <p class="">
          The congnitive costs of air pollution (patrickcollison.com)<br />860
          points by 15 hours ago | hide | past | web | favorite | 232 comments.
        </p>
        <AddComment @AddComment="AddComment" />
      </div>
      <div class="comments_list">
        <CommentsList :comments_list="comments_list" />
      </div>
    </main>
  </div>
</template>

<script>
import AddComment from "./components/add_comment.vue";
import CommentsList from "./components/comment_list.vue";
export default {
  name: "App",
  data() {
    return {
      li_list: ["new", "past", "comments", "ask", "show", "jobs", "submit"], //导航栏
      comments_list: [
        {
          name: "person1",
          date: "8 hours ago",
          text: "我是第1条评论",
          add: false,
          childrens: [
            {
              name: "person2",
              date: "7 hours ago",
              text: "我是第1-1条评论",
              add: false,
              childrens: [
                {
                  name: "person3",
                  date: "7 hours ago",
                  text: "我是第1-1-1条评论",
                  add: false,
                  childrens: [],
                },
                {
                  name: "person4",
                  date: "7 hours ago",
                  text: "我是第1-1-2条评论",
                  add: false,
                  childrens: [],
                },
              ],
            },
            {
              name: "person3",
              date: "7 hours ago",
              text: "我是第1-2条评论",
              add: false,
              childrens: [],
            },
          ],
        },
        {
          name: "person5",
          date: "8 hours ago",
          text: "我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~我是评论内容~",
          add: false,
          childrens: [
            {
              name: "person6",
              date: "7 hours ago",
              text: "我是第2条评论",
              add: false,
              childrens: [
                {
                  name: "person7",
                  date: "7 hours ago",
                  text: "我是第2-1条评论",
                  add: false,
                  childrens: [
                    {
                      name: "person8",
                      date: "7 hours ago",
                      text: "我是第2-1-1条评论",
                      add: false,
                      childrens: [],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ], //评论数据
    };
  },
  methods: {
    AddComment(value) {
      if (value === "") return;
      let comment = {
        name: "person",
        date: "0 hours ago",
        text: value,
        childrens: [],
        add:false,
      };
      this.comments_list.push(comment);
    },
  },
  components: {
    AddComment,
    CommentsList,
  },
};
</script>

<style>
#app {
  position: relative;
}
header {
  position: relative;
  background-color: orangered;
  display: flex;
  align-items: center;
  padding: 2px;
}
div.logo {
  position: relative;
}
div.logo span:first-child {
  position: relative;
  display: inline-block;
  height: 24px;
  width: 24px;
  line-height: 24px;
  text-align: center;
  border: 1px solid #fff;
  color: #fff;
  margin-right: 5px;
  font-weight: 600;
}
div.logo span:last-child {
  position: relative;
  color: #fff;
  font-weight: 600;
}
header ul {
  position: relative;
  display: flex;
}
header ul li {
  position: relative;
  list-style: none;
  font-size: 15px;
  padding: 0 8px;
}
header ul li::after {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  content: "";
  right: 0;
  height: 12px;
  width: 1px;
  background-color: #000;
}
main {
  position: relative;
  padding: 10px;
}
.comments_topic {
  position: relative;
  margin-bottom: 40px;
}
.comments_topic p {
  font-size: 14px;
  color: #666;
  line-height: 20px;
  margin-bottom: 10px;
}
.comments_list {
  position: relative;
}
</style>
