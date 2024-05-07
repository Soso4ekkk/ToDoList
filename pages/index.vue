<template>
  <div class="main-page">
    <add-to-do-button @click="showAddToDoInput" />
    <div class="main-page__lists-wrapper">
      <to-do-list title="Задачи на сегодня" :tasks="incompleteTasks" @toggle="toggleTaskStatus" @remove="removeTask" />
      <to-do-list title="Завершено сегодня" :tasks="completedTasks" @toggle="toggleTaskStatus" @remove="removeTask" />
      <remove-all-button @click="removeAllTasks" />
    </div>
    <add-to-do-input v-show="showInput" @cancel-click="hideInput" @add-to-do="addTask"/>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showInput: false,
      tasks: []
    }
  },
  computed: {
    incompleteTasks() {
      return this.tasks.filter(task => !task.completed);
    },
    completedTasks() {
      return this.tasks.filter(task => task.completed);
    }
  },
  methods: {
    showAddToDoInput () {
      this.showInput = true
    },
    hideInput () {
      this.showInput = false
    },
    addTask (todo) {
      this.tasks.push({ id: this.tasks.length + 1, name: todo, completed: false });

    },
    toggleTaskStatus(id) {
      const task = this.tasks.find(task => task.id === id);
      task.completed = !task.completed;
    },
    removeTask(id) {
      this.tasks = this.tasks.filter(task => task.id !== id);
    },
    removeAllTasks() {
      this.tasks = [];
    }
  },
  mounted() {
    const lsTasks = localStorage.getItem('tasks')
    if (JSON.parse(lsTasks)) {
      this.tasks = JSON.parse(lsTasks)
    }
  },
  watch: {
    tasks: {
      handler: function (newValue) {
        localStorage.setItem('tasks', JSON.stringify(newValue))
      },
      deep: true
    }
  }
}

</script>

<style scoped lang="scss">
.main-page {
  width: 100%;
  height: 100%;
  background-color: #fdedd8;
  padding: 20px 20px 200px;
  background-image: url("/assets/images/cat.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  overflow: scroll;
}
</style>

<style>
.nuxt-icon svg{
  margin-bottom: 0;
}
</style>