<template>
  <div id="project">
      <div class="project__content" v-if="hasProject">
        <div class="projectCore">
          <div v-if="hasProject" class="projectContentTitle">
            <label for="projectItems">5 project showed</label>
          </div>
          <div id="projectItems" class="marginTop-s">
            <pi v-for="item in items" :key="item.title" :status="item.status" :headline="item.headline" :title="item.title" :members="item.members" :desc="item.desc" :bg="item.bg" :href="item.url" />
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
    hasProject: true,
    items: [
      {
        headline: 'Deployed v3.0',
        title: 'meta /p256',
        desc: 'Encrypt pattern using unicode and crypto.',
        bg: '/images/card5.png',
        url: 'b/jvnx',
        status: 'done',
        members: [
          '/images/avatar/3.jpg',
          '/images/avatar/2.jpg'
        ]
      },
      {
        headline: 'Vertification delay...',
        title: 'Fluidity CSS framework',
        desc: 'A futuristic css framework with fluid design',
        bg: '/images/card2.png',
        url: 'b/jvnx',
        status: 'pending',
        members: [
          '/images/avatar/1.jpg',
          '/images/avatar/2.jpg',
          '/images/avatar/people1.png'
        ]
      }
    ]
  }),
  components:{
    'pi': () => import('./project-item')
  }
}
</script>
