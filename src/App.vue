<template>
	<my-header></my-header>
	<div class="app">
		<router-view></router-view>
	</div>
	<my-footer></my-footer>


</template>

<script>
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'

export default {
	name: 'App',
	components: {
		// HelloWorld,
		MyHeader,
		MyFooter
	}
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	max-width: 1200px;
}

p {
	font-size: 50px;
	/* background-color: rgba(244, 243, 253, 0.747); */
}

.app {
	/* border: 3px green solid; */
	/* background-color: lightgrey; */
	min-height: 1500px;
	max-width: 1200px;
}
</style>
