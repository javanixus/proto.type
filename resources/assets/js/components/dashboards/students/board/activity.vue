<template>
    <div class="boardStorage">
    <task-sidebar></task-sidebar>
        <div class="taskNavbar">
            <div class="taskNavbar--left">
                <h3>
                    JVNX Activity
                </h3>
            </div>
            <div class="taskNavbar--right">
                <div class="sidebar-small" @click="sidebarOpen"></div>
            </div>
        </div>
</div>
</template>
<script>
import taskSidebar from './../popup/sidebar';
export default {
    data(){
        return {

        }
    },
    components: {
        'task-sidebar': taskSidebar
    },
    methods: {
        sidebarOpen(){
        this.$modal.show('task-sidebar');
        }
  },
}
</script>

