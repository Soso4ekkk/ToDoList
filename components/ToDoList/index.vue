<template>
  <div class="to-do-list">
    <p class="to-do-list__title">{{ title }}:</p>
    <ul class="to-do-list__list">
      <template v-for="item in filteredTasks" :key="item.id" >
        <to-do-list-item :task="item" @toggle="toggleTaskStatus" @remove="removeTask" />
      </template>
    </ul>
  </div>
</template>

<script>
export default {
  emits: ['toggle', 'remove'],
  props: {
    tasks: Array,
    title: String
  },
  methods: {
    toggleTaskStatus (id) {
      this.$emit('toggle', id);
    },
    removeTask(id) {
      this.$emit('remove', id);
    }
  },
  computed: {
    filteredTasks() {
      return this.tasks
    }
  }
}
</script>

<style scoped lang="scss">
.to-do-list {
  padding: 10px;
  background-color: #ffffff;
  border-radius: 8px;
  margin-bottom: 10px;
  box-shadow: 2px 2px 2px #000;

  &__title {
    font-size: 20pt;
    font-weight: bold;
    margin-bottom: 14px;
    margin-top: 0;
  }

  &__list {
    list-style-type: none;
    margin: 0;
    padding: 0;

    &--completed {
      background-color: aqua;
    }
  }
}
</style>