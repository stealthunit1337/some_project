<template>
	<div class="container">
		<header class="header">
			<my-button class="home__btn" @click="$router.push('/')">home</my-button>
			<div class="header__btns">
				<my-button @click="$router.push('/header-view')">header button</my-button>
				<my-button @click="$router.push('/zakon-biz')">zakon-biz</my-button>
			</div>
		</header>
	</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
	background: lightpink;
	width: 100%;
	height: 70px;
	align-items: center;
	display: flex;
	margin: 0;
	padding: 0;
	position: sticky;
	top: 0px;
}

.header__btns {
	margin-left: auto;
	padding: 0 15px;
}

.home__btn {
	position: absolute;
	left: 15px
}
</style>