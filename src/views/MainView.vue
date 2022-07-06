<template>
    <h1>Welcome home</h1>
    <div class="some__blocks">
        <div class="some__block">
            <my-input v-model="account.username" placeholder="username"></my-input>
            <my-input v-model="account.password" placeholder="password"></my-input>
            <my-button @click="saveAccount">click me</my-button>
            <div v-for="account in accountsArray" :key="account.value">{{ account }}</div>
        </div>
        <div class="some__block">
            <my-select v-model="selectedOption" :options="selectOptions"></my-select>
            <div v-if="selectedOption === 'baobab'">baobab</div>
            <div v-if="selectedOption === 'kaktus'">kaktus</div>
        </div>
        <div class="some__block"></div>
    </div>
</template>

<script>
import MyButton from '@/components/UI/MyButton.vue'
export default {
    data() {
        return {
            accountsArray: [],
            account: {
                username: "",
                password: ""
            },
            selectOptions: [
                { value: "baobab", name: "ya baobab" },
                { value: "kaktus", name: "ya kaktus" }
            ],
            selectedOption: "",
        };
    },
    components: { MyButton },
    methods: {
        saveAccount() {
            this.account.id = Date.now();
            // this.$emit('create', this.account)
            this.accountsArray.push(this.account)
            this.account = {
                username: '',
                password: ''
            }

        }
    }
}
</script>

<style lang="scss" scoped>
.some__blocks {
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: row;
}

.some__block {
    border: 2px solid black;
    height: 450px;
    width: 340px;
    margin: 5px;
    padding: 5px;
}
</style>