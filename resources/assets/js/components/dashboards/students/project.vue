<template>
  <div id="project">
      <div class="project__content">
        <div class="projectCore">
          <div v-if="hasProject" class="projectContentTitle">
            <label for="projectItems">5 project showed</label>
          </div>
          <div id="projectItems" v-if="hasProject" class="marginTop-s">
            <!-- item list -->
            <div class="projectItems__item">
              <div class="project__item__header" style="background-image: url(/images/wallpaper.jpg);"></div>
              <div class="overlay"></div>
              <div class="project__item__content">
                <div class="project__item__core__title">
                  <h5>
                    Project A
                  </h5>
                </div>
                <div class="project__item__core__content">
                  
                </div>
                <div class="project__item__core__footer"></div>
              </div>
            </div>
            <!-- item list -->
            <div class="projectItems__item">
            <span class="headlineProjectItem">28 days left</span>
              <div class="project__item__header" style="background-image: url(/images/image.png);"></div>
              <div class="overlay"></div>
              <div class="project__item__content">
                <div class="project__item__core__title">
                  <h5>
                    Project B
                  </h5>
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
            <div class="projectItems__item">
              <div class="project__item__header" style="background-image: url(/images/image2.jpg);"></div>
              <div class="overlay"></div>
              <div class="project__item__content">
                <div class="project__item__core__title">
                  <h5>
                    Project C
                  </h5>
                </div>
                <div class="project__item__core__content"></div>
                <div class="project__item__core__footer"></div>
              </div>
            </div>
            <!-- item list -->
            <div class="projectItems__item">
              <div class="project__item__header" style="background-image: url(/images/sample2.png);"></div>
              <div class="overlay"></div>
              <div class="project__item__content">
                <div class="project__item__core__title">
                  <h5>
                    Project D
                  </h5>
                </div>
                <div class="project__item__core__content"></div>
                <div class="project__item__core__footer"></div>
              </div>
            </div>
          </div>
          <div v-else>
            <div class="nothingShow">
              <span>Nothing to show</span>
            </div>
          </div>
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
