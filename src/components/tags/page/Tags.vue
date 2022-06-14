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
        <li>Теги</li>
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
      <h1 class="title">Теги</h1>
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
                  v-model="userInput"
                  required
                  placeholder="ru name"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>
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
                  placeholder="en name"
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
      return !!!this.userInput + !!!this.userInput2; // !! - преобразование в Bool, !!! - преобразование в орбатный bool
    },
  },

  methods: {
    submit() {
      this.userInput = this.userInput.trim();
      this.userInput2 = this.userInput2.trim();

      // Отправка запроса

      console.log(this.userInput);
      this.userInput = null;
      this.userInput2 = null;
    },
  },
};
</script>