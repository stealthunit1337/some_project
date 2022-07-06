<template>
    <div>
        <my-carousel-item v-for="item in carousel_data" :key="item.id" :item_data="item"></my-carousel-item>
    </div>
</template>

<script>
import MyCarouselItem from './MyCarouselItem.vue'

export default {
    components: {
        MyCarouselItem
    },
    name: 'my-carousel',
    props: {
        carousel_data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {

        }
    },
}
</script>

<style lang="scss" scoped>
</style>