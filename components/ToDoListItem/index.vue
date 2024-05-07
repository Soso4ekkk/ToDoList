<template>
  <li class="to-do-list-item">
    <label class="to-do-list-item__label">
      <input type="checkbox" @change="toggleTask" :checked="task.completed" class="to-do-list-item__checkbox">
        <span class="to-do-list-item__text">
          {{ task.name }}
        </span>
    </label>
    <button class="to-do-list-item__remove-button" @click="removeTask">
      <nuxt-icon name="wastebasket" />
    </button>
  </li>
</template>

<script>
export default {
  emits: ['toggle', 'remove'],
  props: ['task'],
  methods: {
    toggleTask() {
      this.$emit('toggle', this.task.id);
    },
    removeTask() {
      this.$emit('remove', this.task.id);
    }
  }
}
</script>

<style scoped lang="scss">
.to-do-list-item {
  min-height: 33px;
  margin-bottom: 7px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 10px;

  &__label {
    position: relative;
    padding-left: 44px;
    user-select: none;
    outline: none;
    line-height: 18px;
    min-height: 33px;
    display: flex;
    align-items: center;

    &:before{
      border: 2px solid #333;
      border-radius: 5px;
    }

    &:has(input:checked):after{
      content: '✔';
      color: #96ac87;
      font-size: 18pt;
    }

    &:before, &:after {
      content: "";
      display: flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      position: absolute;
      left: 0;
      top: 0;
      color: #333;
      box-sizing: border-box;
    }
  }

  &__text {
    font-size: 20pt;
    line-height: 20pt;
    word-break: break-word;
  }

  &__checkbox {
    display: none;
  }

  &__remove-button {
    width: 30px;
    min-width: 30px;
    height: 30px;
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #96ac87;
    border: none;
    padding: 0;
  }
}

</style>