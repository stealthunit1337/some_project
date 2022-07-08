<template>
    <div class="container">
        <footer class="footer">
            <div class="footer__btns">
                <my-button @click="$router.push('/footer-view')">footer button</my-button>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.footer {
    background: lightcoral;
    width: 100%;
    height: 70px;
    align-items: center;
    display: flex;
    margin: 0;
    padding: 0;
    position: sticky;
    bottom: 0px;
}

.footer__btns {
    margin-left: auto;
    padding: 0 15px;
}
</style>