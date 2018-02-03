<template>
    <div>
		<h2>我来组成中间</h2>
	    <router-view name="modA" />
	    <router-view name="modB" />
	    <router-view name="modC" />
	</div>
</template>

<script>
export default {
  name: 'Nav',
  data () {
  	return {

  	};
  }
}
</script>

<style>
</style>
