<template>
    <div class="container">
        <loading v-if="loading"/>
        <router-view v-else></router-view>
    </div>
</template>
<style>
</style>
<script>
    export default{
        data: () => ({
            loading: true
        }),
        components: {
            'loading' : () => import('./components/loading')
        },
        created(){
            setTimeout(() =>{
                this.loading = false
            },3000)
        }
    }
</script>