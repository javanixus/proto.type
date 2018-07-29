<template>
    <router-link :to="{path: 'b/' + href}">
        <div class="projectItems__item">
            <span class="headlineProjectItem" :class="headmsg">{{headline}}</span>
            <div class="project__item__header" :style="{ backgroundImage: 'url(' + bg + ')' }"></div>
            <div class="overlay"></div>
            <div class="project__item__content">
                <div class="project__item__core__title">
                    <h5>{{title}}</h5>
                    <p>{{desc}}</p>
                </div>
                <div class="project__item__core__content">
                    <div class="projectPeople">
                        <div v-for="member in members" :key="member" class="avatar avatar--xxs avatar--border-white--2" :style="{ backgroundImage: 'url(' + member + ')' }"></div>
                    </div>
                </div>
                <div class="project__item__core__footer"></div>
            </div>
        </div>
    </router-link>
</template>
<script>
export default {
    data: () => ({
        headmsg: ''
    }),
    props: [
        'headline',
        'bg',
        'title',
        'desc',
        'href',
        'status',
        'members'
    ],
    created() {
        if(this.status == 'done'){
            this.headmsg = 'headline--done'
        } else if(this.status == 'pending'){
            this.headmsg = 'headline--waiting'
        } else if(this.status == 'disabled'){
            this.headmsg = 'headline--disabled'
        } else {
            this.headmsg = 'headline--warning'
        }
    }
}
</script>
