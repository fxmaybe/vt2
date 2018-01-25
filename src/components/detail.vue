<template>
 <div>
    <h2 style="color:red;">新闻标题的ID为: {{id}}</h2>
    <div>
      <a href="javascript: history.back();">返回</a><br>
      这是新闻标题{{id}}的内容<br>
      ..........
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
    }
  },
  created() {
  },
  computed: {
    id() {

      return this.$route.params.id;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
</style>
