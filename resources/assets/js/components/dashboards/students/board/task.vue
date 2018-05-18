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
                  <div v-for="task in el.task" :key="task.id" class="task-card">
                    <div class="task-card__desc">
                      <span class="task-card__desc-title">
                        {{task.name}}
                      </span>
                    </div>
                  </div>
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
export default {
  data(){
    return {
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
  }
}
</script>
