<template>
  <div class="add-to-do-input">
    <input type="text" v-model="inputValue" class="text-input" placeholder="Введите здесь новую задачу..">
    <div class="buttons">
      <button @click="clickHandler" class="button-input">Отмена</button>
      <button @click="add" class="button-input">Добавить</button>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['cancel-click', 'add-to-do'],
  data () {
    return {
      inputValue: ''
    }
  },
  methods: {
    clickHandler () {
      this.$emit('cancel-click')
      this.inputValue = ''
    },
    add () {
      this.$emit('add-to-do', this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style scoped lang="scss">
.add-to-do-input {
  position: fixed;
  bottom: 0;
  background-color: #cfc59f;
  width: 100%;
  padding: 20px;
  left: 0;
  right: 0;
}
.text-input {
  width: 100%;
  height: 80px;
  border: 0;
  font-size: 12pt;
  margin-bottom: 10px;
  outline: 0;
  padding: 1rem;
  border-radius: 8px;
}
.button-input {
  width: 49%;
  height: 60px;
  border: 0;
  background-color: #96ac87;
  font-size: 18pt;
  border-radius: 8px;
}
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
</style>