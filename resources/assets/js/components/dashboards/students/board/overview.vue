<template>
  <div id="boardOverview">
    <div class="overview__content">
      <aside class="overviewContent__sidebar">
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
      </aside>
      <content class="overviewContent__core">
        <div class="overviewCore-wrap">
          <div class="overviewCore-summary">
            <label for="overviewSummary">Summary:</label>
            <div id="overviewSummary">
              <div class="overviewSummary--item">
                <div class="overviewSummaryItem__count">Private</div>
                <div class="overviewSummaryItem__title">Project type</div>
              </div>
              <div class="overviewSummary--item">
                <div class="overviewSummaryItem__count">4</div>
                <div class="overviewSummaryItem__title">Members</div>
              </div>
              <div class="overviewSummary--item">
                <div class="overviewSummaryItem__count">Development</div>
                <div class="overviewSummaryItem__title">Status</div>
              </div>
              <div class="overviewSummary--item">
                <div class="overviewSummaryItem__count">28 Days</div>
                <div class="overviewSummaryItem__title">Deadline</div>
              </div>
              <div class="overviewSummary--item">
                <div class="overviewSummaryItem__count" style="color: #25c782;">3/4</div>
                <div class="overviewSummaryItem__title">Member actives</div>
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
        title: 'Project Javanixus',
        desc: 'flexible tools are designed for any project or workflow.'
      }
    }
  }
}
</script>
