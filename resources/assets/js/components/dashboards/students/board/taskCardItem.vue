<template>
    <div class="task-card">
        <div class="task-card__desc">
            <span class="task-card__desc-title">{{item.text}}</span>
        </div>
    </div>
</template>
<script>
export default {
  name: 'TaskCardItem',
  props: ['item'],
};
</script>