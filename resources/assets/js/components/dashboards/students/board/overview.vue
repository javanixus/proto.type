<template>
  <div id="boardOverview">
    <div class="overview__content">
      <sidebar class="overviewContent__sidebar">
        <span>Project info:</span>
        <div class="overviewSidebar-title">
          <h2>{{sidebar.title}}</h2>
        </div>
        <div class="overviewSidebar-team">
          <div class="sidebarTeam">
            <div class="projectPeople">
              <div class="avatar avatar--xs avatar--border-white--2" style="background-image: url(/images/avatar/1.jpg);"></div>
              <div class="avatar avatar--xs avatar--border-white--2" style="background-image: url(/images/avatar/3.jpg);"></div>
              <div class="avatar avatar--xs avatar--border-white--2" style="background-image: url(/images/avatar/2.jpg);"></div>
            </div>
          </div>
        </div>
        <div class="overviewSidebar-desc">
          <span>{{sidebar.desc}}</span>
        </div>
      </sidebar>
      <content class="overviewContent__core"></content> 
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      sidebar : {
        title: 'Project Javanixus',
        desc: 'some title it can make ur brain working some title it'
      }
    }
  }
}
</script>
