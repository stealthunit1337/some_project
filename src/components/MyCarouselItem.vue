<template>
    <div>
        <img src="require('@')" alt="">
    </div>
</template>

<script>
export default {
    name: 'my-carousel-item',
    props: {
        item_data: {
            type: Object,
            default: () => { }
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