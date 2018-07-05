<template>
  <div id="project">
      <div class="project__content" v-if="hasProject">
        <div class="projectCore">
          <div v-if="hasProject" class="projectContentTitle">
            <label for="projectItems">5 project showed</label>
          </div>
          <div id="projectItems" class="marginTop-s">
            <!-- item list -->
            <div class="projectItems__item">
            <span class="headlineProjectItem headline--done">28 days left</span>
              <div class="project__item__header" style="background-image: url(/images/card.png);"></div>
              <div class="overlay"></div>
              <div class="project__item__content">
                <div class="project__item__core__title">
                  <h5>
                    Deno
                  </h5>
                  <p>A secure TypeScript runtime on V8</p>
                </div>
                <div class="project__item__core__content">
                  <div class="projectPeople">
                    <div class="avatar avatar--xxs avatar--border-white--2" style="background-image: url(/images/avatar/1.jpg);"></div>
                    <div class="avatar avatar--xxs avatar--border-white--2" style="background-image: url(/images/avatar/3.jpg);"></div>
                    <div class="avatar avatar--xxs avatar--border-white--2" style="background-image: url(/images/avatar/2.jpg);"></div>
                  </div>
                </div>
                <div class="project__item__core__footer"></div>
              </div>
            </div>
            <!-- item list -->
          </div>
        </div>
      </div>
      <div v-else>
        <div class="nothingShow">
            <img src="/images/folder.png" alt="">
            <h3>Look like you dont have any project</h3>
            <p>Your cloud storage is haunted by ghosts.</p>
        </div>
      </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    hover: false,
    hasProject: true
  })
}
</script>
