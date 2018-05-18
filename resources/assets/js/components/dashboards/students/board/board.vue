<template>
      <div id="board">
        <div id="appHeader" class="nav navbar--primary navbar--extend">
            <div class="appHeader__content">
                <div class="appHeader__content__navigation">
                    <ul class="navigationWrap-items--extended">
                        <li>
                            <router-link :to="{name: 'studentboard'}" active-class="nav-active" exact>Overview</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'studentboardstorage'}" active-class="nav-active">Files</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'studentboardtask'}" active-class="nav-active">Tasks</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'studentboardteam'}" active-class="nav-active">My team</router-link>
                        </li>
                        <li>
                            <router-link :to="{name: 'studentboardsetting'}" active-class="nav-active">Settings</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="boardApp">
            <router-view></router-view>
        </div>
      </div>
</template>
<script>
export default {
  
}
</script>
