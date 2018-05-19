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
            <button class="btn btn--primary btn--done">+ Add new task</button>
          </div>
          <div class="taskNavbar--right">
            <div class="sidebar-small" @click="sidebarOpen"></div>
          </div>
        </div>
        <div class="task-canvas">
          <div class="task-canvas__core">
            <!-- list item -->
            <div v-for="el in board" :key="el.idcard" class="task-list">
              <div class="task-list__core">
                <div class="task-listCore__header">
                  <h5>{{el.title}}</h5>
                </div>
                <div class="task-listCore__content">
                  <!-- task-list -->
                  <draggable style="min-height: 30px;" v-model="el.task" :options="{group:'fix', dragOptions, animation:200,ghostClass: 'ghost',dragClass:'drag'}" @start="isDragging=true" @end="isDragging=false">
                    <div v-for="task in el.task" :key="task.id" class="task-card">
                      <div class="task-card__desc">
                        <span class="task-card__desc-title">{{task.name}}</span>
                      </div>
                    </div>
                  </draggable>
                  <!-- task-list -->
                </div> 
              </div>
            </div>
            <!-- list item -->
          </div>
        </div>
      </div>
  </div>
</template>
<script>
import axios from 'axios';
import draggable from 'vuedraggable';
import taskSidebar from './../popup/sidebar';

export default {
  data(){
    return {
      isDragging: false,
      board: [
          {
            idcard: 1,
            title: 'Team member',
            task: []
          },
          {
            idcard: 2,
            title: 'TO DO',
            task: [
              {
                id: 1,
                from: 2,
                name: "kanban test",
              },
              {
                id: 2,
                from: 2,
                name: "Fahmi irsad k",
              },
              {
                id: 3,
                from: 2,
                name: "Choco",
              },
            ]
          },
          {
            idcard: 3,
            title: 'IN PROGRESS',
            task: []
          },
          {
            idcard: 4,
            title: 'NEED REVIEW',
            task: []
          },
          {
            idcard: 5,
            title: 'DONE',
            task: []
          },
          {
            idcard: 6,
            title: 'DOCS',
            task: [
              {
                id: 34,
                from: 6,
                name: "PROTOTYPE DOCS",
              },
            ]
          }
      ]
    }
  },
  created(){
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((Response) =>{
        this.board[0].task = Response.data
        console.log(this.board);
      })
  },
  components:{
    draggable,
    'task-sidebar': taskSidebar
  },
  computed: {
    dragOptions () {
      return  {
        ghostClass: 'ghost'
      };
    },
  },
  methods: {
    sidebarOpen(){
      this.$modal.show('task-sidebar');
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
