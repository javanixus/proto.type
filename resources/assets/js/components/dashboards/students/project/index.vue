<template>
  <div id="project">
      <div class="project__content" v-if="hasProjects">
        <div class="projectCore">
          <div class="projectContentTitle">
            <label for="projectItems">{{items.length}} project showed</label>
          </div>
          <div id="projectItems" class="marginTop-s">
            <pi v-for="item in items" :key="item.keyId" :status="item.status" :headline="item.headline" :title="item.title" :members="item.members" :desc="item.desc" :bg="item.bg" :href="item.url" />
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
import { mapState } from 'vuex'
export default {
  data: () => ({
    hover: false,
  }),
  components:{
    'pi': () => import('./project-item')
  },
  computed: {
    ...mapState({
      items: state => state.project.items,
      hasProjects: state => state.project.hasProject
    })
  },
  created(){
    this.$store.dispatch('project/getProject')
    this.items.length === 0 ? this.$store.dispatch('project/validateProject', false) : this.$store.dispatch('project/validateProject', true)
  }
}
</script>
