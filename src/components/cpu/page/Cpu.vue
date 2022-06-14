<template>
  <section class="is-title-bar">
    <div
      class="
        flex flex-col
        md:flex-row
        items-center
        justify-between
        space-y-6
        md:space-y-0
      "
    >
      <ul>
        <li><RouterLink to="/">Главная</RouterLink></li>
        <li>Процессор</li>
      </ul>
    </div>
  </section>

  <section class="is-hero-bar">
    <div
      class="
        flex flex-col
        md:flex-row
        items-center
        justify-between
        space-y-6
        md:space-y-0
      "
    >
      <h1 class="title">Процессор</h1>
      <button class="button light">Button</button>
    </div>
  </section>

  <section class="section main-section">
    <div class="card mb-6">
      <div class="card-content">
        <div class="field">
          <label class="label">Название</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="userInput2"
                  required
                  placeholder="intel i5"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <label class="label">Частота</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="number"
                  placeholder="3.2"
                  v-model="userInput"
                  required
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="field grouped">
          <div class="control">
            <button :disabled="validate" @click="submit" class="button green">
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      userInput: null,
      userInput2: null,
    };
  },
  computed: {
    validate() {
      return (
        isNaN(Number(this.userInput)) ||
        !this.userInput + isNaN(Number(this.userInput2)) ||
        !this.userInput2
      );
    },
  },

  methods: {
    submit() {
      // Отправляем запрос

      this.userInput = null;
      this.userInput2 = null;
    },
  },
};
</script>