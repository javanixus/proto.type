<template>
     <modal name="task-sidebar" classes="nice-modal" class="overflow-disable" :pivotX="0.971" :pivotY="0.27" transtition="nice-modal-fade" :min-width="170" :min-height="200" :adaptive="true" :reset="true" width="170px" height="auto" :clickToClose="true">
         <div class="task-sidebar__content">
             <ul>
                 <li><router-link :to="{name: 'studentboardtask'}" active-class="nav-active" exact>Task</router-link></li>
                 <li><router-link :to="{name: 'studentboardactivity'}" active-class="nav-active">Activity</router-link></li>
             </ul>
         </div>
     </modal>
</template>
