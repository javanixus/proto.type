<template>
<div id="dashstudent">
    <div class="dashstudent__content">
        <div id="appHeader" class="nav navbar--primary">
            <div class="appHeader__content">
                <div class="appHeader__content__navigation">
                    <div role="button" class="appHeader__content__logo">
                        <div class="logo-small" style="margin-left: 10px;">
                            <img src="/images/proto.type-logo-primary.svg" alt="">
                        </div>
                    </div>
                    <ul class="navigationWrap-items">
                        <li>
                            <router-link :to="{name: 'studentproject'}" active-class="nav-active" exact>Project</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'studentexplore'}" active-class="nav-active">Explore</router-link>
                        </li>
                    </ul>
                </div>
                <div class="appHeader__content__project">
                    <button class="btn btn--primary" @click.prevent="createproject">Create new project</button>
                </div>
                <div class="appHeader__content__navigation--secondary">
                    <ul>
                        <li>
                            <div class="searchWrap">
                                <div class="searchicon"></div>
                                <input type="text" disabled class="search" placeholder="Search here...">
                            </div>
                        </li>
                        <li>
                            <div class="avatarWrap">
                                <div @click.prevent="menuProfileClick" class="avatar avatar--xs avatarWrap" style="background-image: url(/images/sample.jpg);" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="appContent">
            <router-view></router-view>
            <create-project-popup></create-project-popup>
            <menu-profile-popup></menu-profile-popup>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    components: {
        'create-project-popup': () => import('./popup/createproject'),
        'menu-profile-popup': () => import('./popup/menuprofile')
    },
    methods: {
        createproject(){
            this.$modal.show('create-project');
        },
        menuProfileClick(){
            this.$modal.show('menu-profile');
        }
    }
}
</script>
