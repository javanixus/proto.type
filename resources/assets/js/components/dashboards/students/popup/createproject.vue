<template>
    <modal name="create-project" classes="nice-modal" transition="scale" :reset="true" width="500px" height="500px" :clickToClose="false">
        <div class="createProjectPopup__header">
            <button class="btn--close" @click="close">
                <svg width="26" height="26" viewBox="0 0 26 26" xmlns="http://www.w3.org/2000/svg"><path d="M11.586 13l-2.293 2.293a1 1 0 0 0 1.414 1.414L13 14.414l2.293 2.293a1 1 0 0 0 1.414-1.414L14.414 13l2.293-2.293a1 1 0 0 0-1.414-1.414L13 11.586l-2.293-2.293a1 1 0 0 0-1.414 1.414L11.586 13z" fill="currentColor" fill-rule="nonzero"></path></svg>
            </button>
        </div>
        <div class="createProjectPopup__content">
            <div class="createProjectPopup__content__cover">
                <img src="/images/block.svg" alt="">
                <p>{{projectTitle}}</p>
                <div class="createProjectCover--tips">
                    <span>You can add emoticon 👏 beside your project title, make unique as possible regrads 🍻.</span>
                </div>
            </div>
            <form>
                <div class="createProjectPopup__content__title">
                    <input v-model="projectTitle" type="text" value="Project title" class="input input--primary" placeholder="fill project title">
                </div>
                <!-- <div class="createProjectPopup__content__desc">
                    <textarea name="" id="" rows="8" placeholder="fill the desc">We need to create a few different alternative for a colorfull, fun and vibrant sidebar. So far our best sources of inspirations are in bucket on the team.</textarea>
                </div> -->
            </form>
        </div>
        <div class="createProjectPopup__footer">
            <button class="btn btn--primary" type="submit">Next</button>
        </div>
    </modal>
</template>
<style>

</style>
<script>
export default {
  data:() =>({
      projectTitle:'Name your new project 😍'
  }),
  methods: {
      close(){
          this.$modal.hide('create-project')
      },
      create(){
          console.log('create');
      }
  }
}
</script>
