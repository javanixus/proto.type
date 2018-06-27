<template>
<div v-if="loading">
    loading...
</div>
  <div v-else id="dashstudent">
      <div class="dashstudent__content">
        <div id="appHeader" class="nav navbar--primary">
            <div class="appHeader__content">
                <div class="appHeader__content__navigation">
                    <div role="button" class="appHeader__content__logo">
                        <div class="logo-small" style="margin-left: 30px;">
                            <img src="/images/proto.type-logo-primary.svg" alt="">
                        </div>
                    </div>
                    <ul class="navigationWrap-items">
                        <li>
                            <router-link :to="{name: 'studentproject'}" active-class="nav-active" exact>Project</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'studentteam'}" active-class="nav-active">Todos</router-link>
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
            <!-- <new-popup></new-popup> -->
            <create-project-popup></create-project-popup>
            <menu-profile-popup></menu-profile-popup>
        </div>
      </div>
  </div>
</template>
<script>
// import newPopup from './../students/popup/new';
import createProjectPopup from './../students/popup/createproject';
import menuProfilePopup from './../students/popup/menuprofile';

export default {
    data: () => ({
        loading: true
    }),
    components: {
        // 'new-popup' : newPopup,
        'create-project-popup': createProjectPopup,
        'menu-profile-popup': menuProfilePopup
    },
    created(){
        setTimeout(() => {
            this.loading = false;
        },100);
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
