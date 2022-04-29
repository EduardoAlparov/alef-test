<template>
    <header class="header">
        <div class="container header__contnianer">

            <div class="header__logo">
                <a href="/" class="logo">
                    <img src="../assets/images/logo.png" alt="логотип">
                </a>
            </div>

            <div class="header__menu">
                <div class="menu-header">
                    <a href="#" class="menu-header__icon">
                        <img src="../assets/images/icons/header/Group.png" alt="">
                    </a>
                    <a href="#" class="menu-header__icon">
                        <img src="../assets/images/icons/header/Frame.png" alt="">
                    </a>
                    <a href="#" class="menu-header__icon">
                        <img src="../assets/images/icons/header/Frame-1.png" alt="">
                    </a>
                </div>
            </div>

            <div class="header__btn-menu">

                <button
                    class="btn-menu"
                    type="button"
                    @click="$emit('openMenu')"
                    :class="{ 'menu-open': this.isMenuOpen }"
                >
                    <i class="btn-menu__bars" aria-hidden="true"></i>
                    <span class="visually-hidden">Menu</span>
                </button>

                <div
                    class="hidden-menu"
                    :class="{ 'hidden-menu_open': this.isMenuOpen}"
                >
                    <div class="hidden-menu__body">

                        <ul class="hidden-menu__list">
                            <li class="hidden-menu__item">
                                <a href="#" class="hidden-menu__link">
                                    постельное белье
                                </a>
                            </li>
                            <li class="hidden-menu__item">
                                <a href="#" class="hidden-menu__link">
                                    одежда для дома
                                </a>
                            </li>
                            <li class="hidden-menu__item">
                                <a href="#" class="hidden-menu__link">
                                    Одежда для улицы
                                </a>
                            </li>
                            <li class="hidden-menu__item">
                                <a href="#" class="hidden-menu__link">
                                    ВЫход
                                </a>
                            </li>
                        </ul>

                    </div>
                </div>

            </div>

        </div>
    </header>
</template>
<script>
export default {
    name: "AppHeaderView",
    props: {
        isMenuOpen: {
            type: Boolean,
            default: false
        }
    }
}
</script>
