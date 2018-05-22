<template>
  <div>
  <div class="notif notif--danger">
            <p>whoops ! we tracked a mysterious person, go check it now !</p>
        </div>
        <div class="notif notif--warning">
            <p>we warn to update your security settings, to avoid hacker.</p>
        </div>
        <div class="notif notif--done">
            <p>your command has been done master.</p>
        </div>
        <div class="notif notif--dev">
            <p>Hooray 🎉 !, we just updated version to 2.0 <a href="javascript:void(0)">check what updates now.</a></p>
        </div>
        <div class="notif notif--owner">
            <p>welcome back my owner 🙇‍ . our app is getting optimized.</p>
        </div>
  </div>
</template>
<template>
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
</template>
<template>
                      <div v-for="task in el.task" :key="task.id" class="task-card">
                      <div class="task-card__desc">
                        <span class="task-card__desc-title">{{task.name}}</span>
                      </div>
                    </div>
</template>
