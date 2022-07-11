<template>

	<header class="header">
		<div class="container">
			<div class="buttons">
				<div class="home__btn">
					<my-button @click="$router.push('/')">home</my-button>
				</div>
				<div class="header__btns">
					<my-button @click="$router.push('/header-view')">header button</my-button>
					<my-button @click="$router.push('/zakon-biz')">zakon-biz</my-button>
				</div>
			</div>
		</div>
	</header>
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
	margin: 0;
	padding: 0;
	position: sticky;
	top: 0px;
	display: flex;
}

.buttons {
	display: flex;
	flex-direction: row;
	// align-items: center;
}

.header__btns {
	display: flex;
	align-items: center;
	justify-content: flex-end;
	// padding: 0 15px;
}

.home__btn {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
</style>