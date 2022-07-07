
<template >
	<div class="container">

		<div class="main1">
			<!-- <my-carousel :carousel_data="sliderItems"></my-carousel> -->
			<img class="bg" src="@/assets/bg.jpg" alt="">
			<div class="icons__block">
				<div class="text "> <img src="@/assets/icons/good.png" alt="">Разъяснения закона и дальнейших действий
				</div>
				<div class="text "><img src="@/assets/icons/good.png" alt="">Анализ вашей ситуации и документов</div>
				<div class="text "><img src="@/assets/icons/good.png" alt="">Возможность получить несколько мнений
				</div>
				<div class="text "><img src="@/assets/icons/good.png" alt="">Консультации онлайн в удобное время</div>
			</div>

		</div>
		<!-- <img src="@/assets/line.png" alt=""> -->
		<div class="main2">
			<h2>Как работает сервис?</h2>
			<div class="blocks1">
				<div class="block"><img src="@/assets/icons/1.png" alt="">
					<h3>Оформите подписку</h3>
					<p>Оплатите по заданным реквизитам. С вами свяжется менеджер и в течении пяти минут ознакомит с
						возможностями
						Сайта. Для вас выделена команда специалистов различных направлений. Опишите вопрос и получите
						исчерпывающий
						ответ с правовым обоснованием в течении часа.</p>
				</div>
				<div class="block vector__block">
					<div><img src="@/assets/Vector.svg" alt=""></div>
					<div class='vector__block2'>
						<h4>Вы можете взять пробный пакет «Разовый»</h4>
						Он позволит оценить качество сервиса и убедиться, что
						специалисты нашей платформы решат любую проблему. Пакет услуг действует без ограничений по
						периоду
						времени.
					</div>
				</div>
			</div>
			<div class="blocks1">
				<div class="block"><img src="@/assets/icons/1.png" alt="">
					<h3>Эксперты готовы к решению любой задачи</h3>
					<p>Моментальные ответы. Команда всегда на связи. Представленные возможности для бизнеса полностью
						заменят
						штатного юриста, который не может быть экспертом во всех областях права. Команда юристов,
						бухгалтеров,
						кадастровых инженеров разрешит любую проблему. </p>
				</div>
				<div class="block"><img src="@/assets/icons/1.png" alt="">
					<h3>Мгновенное решение проблемы</h3>
					<p>В пакет услуг входят любые хозяйственные документы для организации, а также аналитика и
						разработка
						договоров. Решение проблем с госорганами по Гос.закупкам, с налоговой и др. Иски любой
						сложности,
						жалобы
						на должностных лиц и иные индивидуально-составные документы заказываются отдельно.</p>
				</div>
			</div>
			<div class="btns1">
				<button class="btn btn_blue">Подписаться</button>
				<button class="btn btn_green">Позвонить</button>
			</div>
		</div>
	</div>

</template>


<script>
// import MyCarousel from '@/components/MyCarousel.vue'
// import { CContainer } from '@coreui/vue'

export default {
	components: {
		// MyCarousel
		// CContainer
	},
	data() {
		return {
			sliderItems:
				[
					{ id: 1, name: 'img1', img: '1.jpg' },
					{ id: 2, name: 'img2', img: '2.jpg' },
					{ id: 3, name: 'img3', img: '3.jpg' },
					{ id: 4, name: 'img4', img: '4.jpg' },
					{ id: 5, name: 'img5', img: '5.jpg' },
				]

		}
	}

}
</script>

<style lang="scss" scoped>
@import "@/scss/mixins";

* {
	margin: 0;
	padding: 0;
}

.main1 {
	// max-width: 1200px;
	overflow: hidden;


	.bg {
		height: 100%;
		width: 100%;
	}

	// .icons {
	//     display: flex;
	//     justify-content: space-evenly
	// }

	.icons__block {
		display: flex;
		@include direction;
		justify-content: space-evenly;
		padding: 64px 0;
		border-radius: 48px 48px 0px 0px;
		background: #FFFFFF;

		.text {
			display: flex;
			@include direction2;
			align-items: center;
			text-align: center;
		}
	}

	// @include styler($window-width); 
	// position: absolute;
	// width: 1200px;
	// top: 496px;
	// height: 256px;
	// left: 0px;



}

.main2 {
	margin-top: 65px;
	padding: 0 30px;
	background: #FFFFFF;

	.blocks1 {
		display: flex;
		@include direction;
		align-items: center;
		justify-content: space-evenly;


		.block {
			padding: 0 15px;
			margin-top: 32px;
		}

		.vector__block {
			display: flex;
			flex-direction: row;

			.vector__block2 {
				display: flex;
				flex-direction: column;
				text-align: left;
				justify-content: center;
				margin-left: 30px;
			}
		}
	}

	.btns1 {
		margin-top: 20px;
		margin-left: 3px;

		.btn {
			@include btn
		}

		.btn_green {
			background: #00C38B;
			box-shadow: 0px 6px 12px rgba(0, 195, 139, 0.16);
		}

		.btn_blue {
			background: #229BF4;
			box-shadow: 0px 6px 12px rgba(34, 155, 244, 0.16);
		}
	}
}

h2 {
	padding: 0 15px;
}

h3 {
	@include h3
}

h4 {
	@include h4
}

p {
	@include p
}
</style>