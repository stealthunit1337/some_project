<template >
    <div class="main">
        <my-carousel :carousel_data="sliderItems"></my-carousel>
        <img class="bg" src="@/assets/1.jpg" alt="">
        <!-- 
        <div class="icons">
            <img src="@/assets/icons/good.png" alt="">
            <img src="@/assets/icons/good.png" alt="">
            <img src="@/assets/icons/good.png" alt="">
            <img src="@/assets/icons/good.png" alt="">
        </div> -->
        <div class="icons__text">
            <div class="text"> <img src="@/assets/icons/good.png" alt="">Разъяснения закона и дальнейших действий
            </div>
            <div class="text"><img src="@/assets/icons/good.png" alt="">Анализ вашей ситуации и документов</div>
            <div class="text"><img src="@/assets/icons/good.png" alt="">Возможность получить несколько мнений</div>
            <div class="text"><img src="@/assets/icons/good.png" alt="">Консультации онлайн в удобное время</div>
        </div>
    </div>
</template>

<script>
import MyCarousel from '@/components/MyCarousel.vue'

export default {
    components: {
        MyCarousel
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
.main {
    max-width: 1200px;
    overflow: hidden;
}

.bg {
    height: 100%;
    width: 100%;
}

// .icons {
//     display: flex;
//     justify-content: space-evenly
// }

.icons__text {
    display: flex;
    justify-content: space-evenly;
    margin-top: 15px;

    .text {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 20%;
        text-align: center;
    }
}

// .text {
//     max-width: 20%;
// }
</style>