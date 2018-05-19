<template>
  <div id="boardTask">
      <div class="boardTask-main">
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
                  <draggable style="min-height: 30px;" v-model="el.task" :options="{group:'fix', dragOptions, animation:200,ghostClass: 'ghost',dragClass:'drag'}" :move="onMove" @start="isDragging=true" @end="isDragging=false">
                    <div v-for="task in el.task" :key="task.id" class="task-card">
                      <div class="task-card__desc">
                        <span class="task-card__desc-title">{{task.name}}</span>
                      </div>
                    </div>
                  </draggable>
                  <template>
                    <draggable style="min-height: 30px;" :options="{group:'fix', dragOptions, animation:200,ghostClass: 'ghost',dragClass:'drag'}">
                      <div v-for="(todo, index) in todos" :key="index" class="task-card">
                        <div class="task-card__desc">
                          <span class="task-card__desc-title">{{todo.body}}</span>
                        </div>
                      </div>
                    </draggable>
                    <input type="text" :value="newTodo" @change="getTodo">
                    <button @click="addTodo">Add task</button>
                  </template>
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
                name: "Leanne Graham",
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
      }]
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
  },
  computed: {
    dragOptions () {
      return  {
        ghostClass: 'ghost'
      };
    },
    newTodo(){
      return this.$store.getters.newTodo
    },
    todos(){
      return this.$store.state.todos
    }
  },
  methods: {
    onMove ({relatedContext, draggedContext}) {
      const relatedElement = relatedContext.element;
      const draggedElement = draggedContext.element;
      return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
    },
    getTodo(e){
      this.$store.dispatch('getTodo', e.target.value)
    },
    addTodo(){
      this.$store.dispatch('addTodo')
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
