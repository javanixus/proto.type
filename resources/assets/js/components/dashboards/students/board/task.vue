<template>
  <div id="boardTask">
      <task-sidebar></task-sidebar>
      <div class="boardTask-main">
        <div class="taskNavbar">
          <div class="taskNavbar--left">
            <h3>
              Board JVNX
            </h3>
          </div>
          <div class="taskNavbar--center">
            <input type="text" v-model="itemText" placeholder="Add something to the backlog">
            <button class="btn btn--primary btn--done" @click="submitTask">+ Add new task</button>
          </div>
          <div class="taskNavbar--right">
            <div class="sidebar-small" @click="sidebarOpen"></div>
          </div>
        </div>
        <div class="task-canvas">
          <div class="task-canvas__core">
            <task-card id="todo" title="TO DO" :items="todoItems"></task-card>
            <task-card id="inProgress" title="In progress" :items="inProgressItems"></task-card>
            <task-card id="needReview" title="In review" :items="needReviewItems"></task-card>
            <task-card id="done" title="Done" :items="doneItems"></task-card>
            <task-card id="docs" title="DOCS" :items="docsItems"></task-card>
            <task-card id="issue" title="Issues" :items="issueItems"></task-card>
            <task-card id="misc" title="MISC" :items="miscItems"></task-card>
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import { mapState } from 'vuex'
import taskSidebar from './../popup/sidebar';
import taskCard from './TaskCard';

export default {
  data(){
    return {
      isDragging: false,
      itemText: ''
    }
  },
  components:{
    'task-sidebar': taskSidebar,
    'task-card': taskCard
  },
  computed: mapState({
    todoItems: s => s.items.todo,
    inProgressItems: s => s.items.inProgress,
    needReviewItems: s => s.items.needReview,
    doneItems: s => s.items.done,
    docsItems: s => s.items.docs,
    issueItems: s => s.items.issue,
    miscItems: s => s.items.misc
  }),
  methods: {
    sidebarOpen(){
      this.$modal.show('task-sidebar');
    },
    submitTask(){
      if (this.itemText) {
        this.$store.commit('addItem', {
          text: this.itemText
        });
        this.itemText = '';
      }
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue){
        this.delayedDragging= true
        return
      }
      this.$nextTick( () =>{
           this.delayedDragging =false
      })
    }
  }
}
</script>
