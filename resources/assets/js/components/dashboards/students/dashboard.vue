<template>
  <div id="dashstudent">
      <div class="dashstudent__content">
        <!-- <div class="notif notif--primary">
            <p>Thanks you for using prototype 🎉 , here some <a href="javascript:void(0)">reward</a> for you 🙌.</p>
        </div> -->
        <div class="notif notif--dev">
            <p>Hooray 🎉 ! we just updated version to 2.0 <a href="javascript:void(0)">check what's new.</a></p>
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
        </div>
      </div>
  </div>
</template>
<script>
import newPopup from './../students/popup/new';
export default {
    components: {
        'new-popup' : newPopup
    },
    mounted() {
        this.$modal.show('new');
    },
}
</script>
