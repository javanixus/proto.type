<template>
  <div id="dashstudent">
      <div class="dashstudent__content">
        <!-- <div class="notif notif--primary">
            <p>Thanks you for using prototype 🎉 , here some <a href="javascript:void(0)">reward</a> for you 🙌.</p>
        </div> -->
        <div class="notif notif--danger">
            <p>🚨 whoops! we tracked a mysterious person 🕵‍, go check it now ! 🚨 </p>
        </div>
        <div id="appHeader" class="nav navbar--primary">
            <div class="appHeader__content">
                <div class="appHeader__content__navigation">
                    <div role="button" class="appHeader__content__logo">
                        <div class="logo-tag tag--red">
                            PT
                        </div>
                    </div>
                    <ul class="navigationWrap-items">
                        <li>
                            <router-link :to="{name: 'studentproject'}" active-class="nav-active" exact>Project</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'studentteam'}" active-class="nav-active">Team</router-link>
                        </li>
                        <li>
                            <span>Tasks</span>
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
                                <input type="text" class="search" placeholder="Search here...">
                            </div>
                        </li>
                        <li>
                            <div class="avatarWrap">
                                <div class="avatar avatar--xs avatarWrap" style="background-image: url(/images/sample.jpg);" />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="appContent">
            <router-view></router-view>
            <new-popup></new-popup>
            <create-project-popup></create-project-popup>
        </div>
      </div>
  </div>
</template>
<script>
import newPopup from './../students/popup/new';
import createProjectPopup from './../students/popup/createproject';

export default {
    components: {
        'new-popup' : newPopup,
        'create-project-popup': createProjectPopup
    },
    mounted() {
        this.$modal.show('new');
    },
    methods: {
        createproject(){
            this.$modal.show('create-project');
        }
    }
}
</script>
