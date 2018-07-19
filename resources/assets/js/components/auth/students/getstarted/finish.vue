<template>
    <div class="start__header" style="padding-top: 30px;">
        <p>🍻</p>
        <p>Your set is nearly finish.</p>
        <div class="start__header--desc">
            <span>Wait for a few seconds, let me secure all of your stored data with strong encryption.</span>
        </div>
        <div class="start__content ">
            <img class="start--loading paddingBottom-m paddingTop-m" src="/images/proto.type-logo.svg" alt="loading">
        </div>
    </div>
</template>
<script>
export default {
    created(){
        setTimeout(() =>{
            this.$router.push({name: 'studentproject'})
        },4000)
    }
}
</script>

