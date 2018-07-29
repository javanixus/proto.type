<template>
  <div id="boardOverview">
    <div class="overview__content">
      <aside class="overviewContent__sidebar">
        <span>Project info:</span>
        <div class="overviewSidebar-title">
          <h2>{{$route.params.id}}</h2>
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
      </aside>
      <content class="overviewContent__core">
        <div class="overviewCore-wrap">
          <div class="overviewCore-summary">
            <label for="overviewSummary">Summary:</label>
            <div id="overviewSummary">
              <div class="overviewSummary--item">
                <span>Project type</span>
                <p>Private</p>
              </div>
              <div class="overviewSummary--item">
                <span>Members</span>
                <p>4</p>
              </div>
              <div class="overviewSummary--item">
                <span>Status</span>
                <p>Development</p>
              </div>
              <div class="overviewSummary--item">
                <span>Deadline</span>
                <p>28 Days left</p>
              </div>
              <div class="overviewSummary--item">
                <span>Member actives</span>
                <p style="color: #25c782;">3/4</p>
              </div>
            </div>
          </div>
          <label for=""></label>
          <div id="overviewCore-activity">

          </div>
        </div>
      </content>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      sidebar : {
        desc: 'flexible tools are designed for any project or workflow.'
      }
    }
  }
}
</script>
