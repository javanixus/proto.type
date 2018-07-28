<template>
    <div>
        <input :value="value" v-on:input="updateValue($event.target.value)" :id="id" :type="type" :name="name" :class="{'input': true, 'input-danger': errors.has(name)}" v-validate="validate" @focus="$event.target.select()" class="input input--primary" :placeholder="placeholder">
        <p v-if="add" v-show="errors.has(name)" class="help is-danger">{{ errors.first(name) }}</p>
    </div>
</template>
<script>
export default {
    props: [
        'value',
        'id',
        'type',
        'name',
        'add',
        'validate',
        'placeholder'
    ],
    methods: {
        updateValue(value){
            this.$emit('input', value)
        }
    }
}
</script>

