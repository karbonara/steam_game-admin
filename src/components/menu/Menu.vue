<template>
  <button @click="addClass" class="button light button__menu">Меню</button>
  <aside
    :class="{ myClass: isAddClass }"
    class="aside is-placed-left is-expanded"
  >
    <div class="aside-tools">
      <div>Админка</div>
    </div>
    <div class="menu is-menu-main">
      <ul class="menu-list">
        <li class="--set-active-index-html active">
          <RouterLink to="/">
            <span class="icon"><i class="mdi mdi-desktop-mac"></i></span>
            <span class="menu-item-label">Главная</span>
          </RouterLink>
        </li>
      </ul>
      <ul class="menu-list">
        <li>
          <a @click="open = !open" class="dropdown">
            <span class="icon"><i class="mdi mdi-view-list"></i></span>
            <span class="menu-item-label">Меню с товарами</span>
            <span class="icon"><i class="mdi mdi-plus"></i></span>
          </a>
          <ul v-if="open">
            <li>
              <RouterLink to="/goods">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Товары</span>
              </RouterLink>
            </li>
            <li class="--set-active-forms-html">
              <RouterLink to="/directx">
                <span class="icon"
                  ><i class="mdi mdi-square-edit-outline"></i
                ></span>
                <span class="menu-item-label">Directx</span>
              </RouterLink>
            </li>
            <li class="--set-active-forms-html">
              <RouterLink to="/video-card">
                <span class="icon"
                  ><i class="mdi mdi-square-edit-outline"></i
                ></span>
                <span class="menu-item-label">Видеокарта</span>
              </RouterLink>
            </li>
            <li class="--set-active-forms-html">
              <RouterLink to="/cpu">
                <span class="icon"
                  ><i class="mdi mdi-square-edit-outline"></i
                ></span>
                <span class="menu-item-label">Процессор</span>
              </RouterLink>
            </li>
            <li class="--set-active-forms-html">
              <RouterLink to="/os">
                <span class="icon"
                  ><i class="mdi mdi-square-edit-outline"></i
                ></span>
                <span class="menu-item-label">Os</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/tags">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Тэги</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/publisher">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Издатель</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/developers">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Разработчик</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/genre">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Жанры</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/platform">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Платформа</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/types">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Типы</span>
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/selections">
                <span class="icon"><i class="mdi mdi-lock"></i></span>
                <span class="menu-item-label">Selections</span>
              </RouterLink>
            </li>
          </ul>
        </li>
        <li class="--set-active-tables-html">
          <RouterLink to="/slider">
            <span class="icon"><i class="mdi mdi-table"></i></span>
            <span class="menu-item-label">Слайдер</span>
          </RouterLink>
        </li>
        <li class="--set-active-tables-html">
          <RouterLink to="/tables">
            <span class="icon"><i class="mdi mdi-table"></i></span>
            <span class="menu-item-label">Таблицы</span>
          </RouterLink>
        </li>
        <li class="--set-active-forms-html">
          <RouterLink to="/form">
            <span class="icon"
              ><i class="mdi mdi-square-edit-outline"></i
            ></span>
            <span class="menu-item-label">Форма</span>
          </RouterLink>
        </li>

        <li>
          <RouterLink to="/profile">
            <span class="icon"><i class="mdi mdi-account-circle"></i></span>
            <span class="menu-item-label">Профиль</span>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/login">
            <span class="icon"><i class="mdi mdi-lock"></i></span>
            <span class="menu-item-label">Логин</span>
          </RouterLink>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      isAddClass: false,
    };
  },
  methods: {
    addClass: function () {
      this.isAddClass = true;
    },
  },
};
</script>

   