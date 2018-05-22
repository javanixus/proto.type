<template>
        <div class="task-list">
            <div class="task-list__core">
                <div class="task-listCore__header">
                  <h5>{{title}}</h5>
                </div>
                <div class="task-listCore__content">
                  <draggable v-model="draggables" style="min-height: 30px;" :options="{group:'fix', dragOptions, animation:200,ghostClass: 'ghost',dragClass:'drag'}" @start="isDragging=true" @end="isDragging=false">
                      <div v-for="item in items" :key="item.id">
                        <item :item="item"></item>
                      </div>
                  </draggable>
                </div> 
            </div>
        </div>
</template>
<script>
import draggable from 'vuedraggable';
import TaskCardItem from './taskCardItem';

export default {
  name: 'TaskCard',
  props: ['items', 'title', 'id'],
  components: {
    item: TaskCardItem,
    draggable
  },
  computed: {
    itemCount() {
      if (!this.items) return '';
      if (this.items.length === 1) return '1 task';
      return `${this.items.length} tasks`;
    },
    draggables: {
      get() {
        return this.items;
      },
      set(items) {
        this.$store.commit('updateItems', {
          items,
          id: this.id
        });
      }
    },
    dragOptions () {
      return  {
        ghostClass: 'ghost'
      };
    },
  }
};
</script>

