<template>
  <div class="add_comment" id="add_comment">
    <div class="textarea">
    <textarea placeholder="请输入评论内容" v-model="value"></textarea>
    </div>
    <button @click="() => $emit('AddComment',value,num)">add comment</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      value:'',//textarea输入框的值
    }
  },
  props:['num'],
};
</script>
<style scoped>
.add_comment{
  position: relative;
}
.textarea{
  position: relative;
}
.textarea textarea{
  position: relative;
  height: 80px;
  width: 500px;
  resize: none;
  padding:5px 10px;
}
button{
  padding:2px 5px;
  cursor: pointer;
}
</style>