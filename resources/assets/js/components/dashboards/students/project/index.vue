<template>
  <div id="project">
      <div class="project__content" v-if="this.$store.state.hasProject">
        <div class="projectCore">
          <div v-if="this.$store.state.hasProject" class="projectContentTitle">
            <label for="projectItems">{{count}} project showed</label>
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
    items: []
  }),
  components:{
    'pi': () => import('./project-item')
  },
  computed: mapState({
      count: state => state.items.length
    }),
  created(){
    this.items = this.$store.state.items
    this.items.length === 0 ? this.$store.state.hasProject = false : this.$store.state.hasProject = true
  }
}
</script>
