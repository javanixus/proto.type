<template>
    <modal name="create-project" class="overflow-disable" transtition="nice-modal-fade" :min-width="300" :min-height="200" :adaptive="true" :reset="true" width="38%" height="auto" :clickToClose="false">
        <div class="createProjectPopup__header">
            <p>Create a project</p>
        </div>
        <div class="createProjectPopup__content">
            <div class="createProjectPopup__content__cover" style="background-image: url(/images/wallpaper.jpg);">
                
            </div>
            <form>
                <div class="createProjectPopup__content__title">
                    <input type="text" value="Project title" placeholder="fill project title">
                </div>
                <div class="createProjectPopup__content__desc">
                    <textarea name="" id="" rows="8" placeholder="fill the desc">We need to create a few different alternative for a colorfull, fun and vibrant sidebar. So far our best sources of inspirations are in bucket on the team.</textarea>
                </div>
            </form>
        </div>
        <div class="createProjectPopup__footer">
            <button class="btn btn--big btn--danger" @click.prevent="close">Cancel</button>
            <button class="btn btn--big" type="submit">Create</button>
        </div>
    </modal>
</template>
<style>

</style>
<script>
export default {
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
