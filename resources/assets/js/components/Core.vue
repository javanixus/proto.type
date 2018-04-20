<template>
    <div class="container">
        <div>
            <router-view>

            </router-view>
            <p class="red">first</p>
            <ul>
                    <li><router-link to="">login</router-link></li>
                    <li><router-link to="">forgot</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
    }
</script>