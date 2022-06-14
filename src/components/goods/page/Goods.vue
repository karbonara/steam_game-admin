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
        <li>Товар</li>
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
      <h1 class="title">Товар</h1>
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
                  v-model="titleInput"
                  required
                  placeholder="Название"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Приоритет</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <div class="wrapper">
                  <input
                    class="range"
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    v-model="value"
                  />
                  <input type="number" v-model="value" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Ссылка на оплату</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="linkBuyInput"
                  required
                  placeholder="ссылка"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Название для ссылки</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="linkNameInput"
                  required
                  placeholder="ссылка"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Цена</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="number"
                  v-model="priceInput"
                  required
                  placeholder="цена"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Скидка</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input class="input" type="text" placeholder="скидка" />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Тип товара</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select>
                  <option>test</option>
                  <option>test</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Активация</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select>
                  <option>test</option>
                  <option>test</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Мини картинка</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="miniImgInput"
                  required
                  placeholder="Мини картинка"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Галерея картинок</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="galleryImgInput"
                  required
                  placeholder="Ввод через пробел"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Видео игры</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input class="input" type="text" placeholder="Видео игры" />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Картинка для слайдера</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="text"
                  placeholder="Ввод через пробел"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Описание для слайдера</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input
                  class="input"
                  type="text"
                  v-model="descriptionSliderInput"
                  required
                  placeholder="Описание для слайдера"
                />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Описание игры</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <textarea
                  class="textarea"
                  v-model="descriptionInput"
                  required
                  placeholder="Описание игры"
                >
                </textarea>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Жанр</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select>
                  <option>test</option>
                  <option>test</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Разработчик</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select>
                  <option>test</option>
                  <option>test</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Издатель</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select>
                  <option>test</option>
                  <option>test</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Дата выхода</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input class="input" type="date" />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Размер игры</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <input class="input" type="text" placeholder="Размер игры" />
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Теги</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select>
                  <option>test</option>
                  <option>test</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Подборка</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select>
                  <option>test</option>
                  <option>test</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Операционная система</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select v-model="osSelect" required>
                  <option
                    class="qwe"
                    :selected="index === 0 ? selected : ''"
                    v-for="(select, index) in osSelects"
                    :key="index"
                  >
                    {{ select.name }}
                  </option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Процессор</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select v-model="cpu1Select" required>
                  <option>intel 5</option>
                  <option>intel 7</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>

            <div class="field">
              <label class="label">Частота</label>
              <div class="control icons-left">
                <select v-model="cpu2Select" required>
                  <option>3.4</option>
                  <option>2.5</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Видеокарта</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select v-model="videoCardSelect" required>
                  <option>3060</option>
                  <option>3070</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Ditectx</label>
          <div class="field-body">
            <div class="field">
              <div class="control icons-left">
                <select v-model="ditectxSelect" required>
                  <option>11</option>
                  <option>12</option>
                </select>
                <span class="icon left"><i class="mdi mdi-account"></i></span>
              </div>
            </div>
          </div>
        </div>

        <table class="resp-tab">
          <thead>
            <tr>
              <th>Локализация Ru</th>
              <th>Локализация En</th>
              <th>Возрастное ограничение</th>
              <th>Клиентская игра</th>
              <th>Онлайн игра</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <span>Локализация Ru</span
                ><input class="input checkbox" type="checkbox" placeholder="" />
              </td>
              <td>
                <span>Локализация En</span
                ><input class="input checkbox" type="checkbox" placeholder="" />
              </td>
              <td>
                <span>Возрастное ограничение</span
                ><input class="input checkbox" type="checkbox" placeholder="" />
              </td>
              <td>
                <span>Клиентская игра</span
                ><input class="input checkbox" type="checkbox" placeholder="" />
              </td>
              <td>
                <span>Онлайн игра</span
                ><input class="input checkbox" type="checkbox" placeholder="" />
              </td>
            </tr>
          </tbody>
        </table>

        <div class="field grouped">
          <div class="control">
            <button
              :disabled="validate"
              @click.prevent="submit"
              class="button button-goods green"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style >
</style>

<script>
export default {
  data() {
    return {
      osSelects: [{ name: "Windows 10" }, { name: "Windows 11" }],

      value: 50,
      titleInput: null,
      linkBuyInput: null,
      linkNameInputL: null,
      priceInput: null,
      miniImgInput: null,
      galleryImgInput: null,
      descriptionSliderInput: null,
      descriptionInput: null,
      ditectxSelect: null,
      videoCardSelect: null,
      cpu1Select: null,
      cpu2Select: null,
      osSelect: null,
    };
  },

  created() {
    this.initInputsValue();
  },

  computed: {
    validate() {
      return (
        !!!this.titleInput &&
        !!!this.linkBuyInput &&
        !!!this.linkNameInput &&
        isNaN(Number(this.priceInput)) &&
        !this.priceInput &&
        !!!this.miniImgInput &&
        !!!this.galleryImgInput &&
        !!!this.descriptionSliderInput &&
        !!!this.descriptionInput &&
        !!!this.ditectxSelect &&
        !!!this.videoCardSelect &&
        !!!this.cpu1Select &&
        !!!this.cpu2Select &&
        !!!this.osSelect
      ); // !! - преобразование в Bool, !!! - преобразование в орбатный bool
    },
  },

  methods: {
    initInputsValue() {
      this.isSelect = this.osSelects[0];
    },

    submit() {
      this.titleInput = this.titleInput.trim();
      this.linkBuyInput = this.linkBuyInput.trim();
      this.linkNameInput = this.linkNameInput.trim();
      this.miniImgInput = this.miniImgInput.trim();
      this.galleryImgInput = this.galleryImgInput.trim();
      this.descriptionSliderInput = this.descriptionSliderInput.trim();
      this.descriptionInput = this.descriptionInput.trim();
      this.ditectxSelect = this.ditectxSelect.trim();
      this.videoCardSelect = this.videoCardSelect.trim();
      this.cpu1Select = this.cpu1Select.trim();
      this.cpu2Select = this.cpu2Select.trim();
      this.osSelect = this.osSelect.trim();
      // Отправка запроса

      this.titleInput = null;
      this.linkBuyInput = null;
      this.linkNameInput = null;
      this.priceInput = null;
      this.miniImgInput = null;
      this.galleryImgInput = null;
      this.descriptionSliderInput = null;
      this.descriptionInput = null;
      this.ditectxSelect = null;
      this.videoCardSelect = null;
      this.cpu1Select = null;
      this.cpu2Select = null;
      this.osSelect = null;
    },
  },
};
</script>