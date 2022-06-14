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
        <li>Слайдер</li>
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
      <h1 class="title">Слайдер</h1>
      <button class="button light">Button</button>
    </div>
  </section>

  <section class="section main-section">
    <div class="card mb-6">
      <div class="card-content">
        <div class="field">
          <label class="label">Товар</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="userInput"
                  required
                  placeholder="разработчик"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>
        <div class="field">
          <table class="resp-tab">
            <thead>
              <tr>
                <th>Отображение</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <span>Отображение</span
                  ><input
                    class="input checkbox"
                    type="checkbox"
                    placeholder=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="field grouped">
          <div class="control">
            <button
              :disabled="validate"
              @click.prevent="submit"
              class="button green"
            >
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
    };
  },

  computed: {
    validate() {
      return !!!this.userInput; // !! - преобразование в Bool, !!! - преобразование в орбатный bool
    },
  },

  methods: {
    submit() {
      this.userInput = this.userInput.trim();
      // Отправка запроса
      this.userInput = null;
    },
  },
};
</script>