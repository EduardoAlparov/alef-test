<template>
    <footer class="footer">
        <div class="container footer__container">
            <div class="footer__menu">

                <div class="menu-footer">
                    <div class="menu-footer__title">
                        <span>
                            покупателям
                        </span>
                    </div>
                    <ul class="menu-footer__list">
                        <li class="menu-footer__item">
                            <a href="" class="menu-footer__link">
                                Каталог
                            </a>
                        </li>
                        <li class="menu-footer__item">
                            <a href="" class="menu-footer__link">
                                Акции
                            </a>
                        </li>
                        <li class="menu-footer__item">
                            <a href="" class="menu-footer__link">
                                Бренды
                            </a>
                        </li>
                    </ul>
                </div>

                <div class="menu-footer">

                    <div class="menu-footer">
                        <div class="menu-footer__title">
                            <span>
                                о нас
                            </span>
                        </div>
                        <ul class="menu-footer__list">
                            <li class="menu-footer__item">
                                <a href="" class="menu-footer__link">
                                    О компании
                                </a>
                            </li>
                            <li class="menu-footer__item">
                                <a href="" class="menu-footer__link">
                                    Новости
                                </a>
                            </li>
                            <li class="menu-footer__item">
                                <a href="" class="menu-footer__link">
                                    Команда
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div class="footer__feedback">
                <form
                    class="feedback"
                    @submit.prevent="$emit('checkForm', email)"
                >

                    <div class="feedback__tltle">
                        Узнайте первыми о новинках и акциях
                    </div>

                    <div class="feedback__submit">

                        <label class="feedback__label">

                            <input
                                type="text"
                                class="feedback__input"
                                placeholder="Адрес электронной почты"
                                v-model="email"
                            >

                            <button
                                v-show="isVisible"
                                class="feedback__input-icon"
                                @click.prevent="email = ''"
                            >
                                <svg class="feedback__input-svg">
                                    <use xlink:href="../assets/images/svg/close.svg#close"></use>
                                </svg>
                            </button>

                            <div class="feedback__input-error">
                                {{ error }}
                            </div>

                        </label>
                    </div>

                    <button
                        type="submit"
                        class="feedback__button"
                    >
                        Подписаться
                    </button>

                </form>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "Footer",
    data() {
        return {
            email: '',
        }
    },
    props: {
        error: {
            type: String,
            default: ''
        }
    },
    computed:{
        isVisible:  function()  {
            if (this.email.length < 1) {
                return false;
            } else {
                return true;
            }
        }
    },
}
</script>
