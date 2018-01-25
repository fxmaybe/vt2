<template>
    <div>
		<h2>我来组成中间</h2>
		<!-- <router-link to="/nav">我只看中间></router-link> -->
	    <div>
			<router-link to="/detail/1">新闻标题一</router-link>
	    </div>
	    <div>
			<router-link to="/detail/2">新闻标题二</router-link>
	    </div>
	    <div>
			<router-link to="/detail/3">新闻标题三</router-link>
	    </div>
	    <div>
			<router-link to="/detail/4">新闻标题四</router-link>
	    </div>
	</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
  	return {

  	};
  }
}
</script>

<style>
</style>
