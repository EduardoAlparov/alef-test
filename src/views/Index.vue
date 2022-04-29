<template>
    <main
        class="content"
    >

        <section
            class="content__header"
            :class="{'content__header_down': downHeaderClass, 'content__header_up': upHeaderClass }"
        >

            <Header
                @openMenu="openMenu"
                :isMenuOpen="isMenuOpen"
            />

        </section>

        <section class="content__carts">

            <CartMain
                v-for="cart in parsedCarts"
                :key="cart.id"
                :cart="cart"
                @countItem="countItem"
                @addOrderToCart="addOrderToCart"
            />

        </section>

        <section class="content__intermediate-link intermediate-link">

            <a href="#" class="info-cart__link">
                Посмотреть все стили
            </a>

        </section>

        <section class="content__media-gallerys media-gallerys">
            <div class="container  media-gallerys__container">
                <div class="media-gallerys__b-grid b-grid">

                    <div class="b-grid__big-area b-grid__big-area_one media-gallerys__interactive-block">
                        <img src="../assets/images/media-gallerys/image-2.jpg" alt="">

                        <div class="media-gallerys__hover-wrapper">
                            <div class="media-gallerys__hover-wrapper-body">

                                <button class="media-gallerys__fullscreen-btn">
                                    <svg class="media-gallerys__fullscreen-btn-svg">
                                        <use xlink:href="../assets/images/svg/full-screen.svg#full-screen"></use>
                                    </svg>
                                </button>

                                <a href="#" class="media-gallerys__about-link">

                                    <div class="media-gallerys__about-icon">
                                        <svg class="media-gallerys__about-icon-svg">
                                            <use xlink:href="../assets/images/svg/bag.svg#bag"></use>
                                        </svg>
                                    </div>

                                    <div class="media-gallerys__about-text">
                                        <span>
                                            Узнай, что на мне
                                        </span>
                                    </div>

                                </a>

                                <div class="media-gallerys__likes">
                                    <div class="media-gallerys__likes-icon">
                                        <svg class="media-gallerys__likes-icon-svg">
                                            <use xlink:href="../assets/images/svg/favorite-full.svg#favorite-full"></use>
                                        </svg>
                                    </div>
                                    <div class="media-gallerys__likes-value">200</div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="b-grid__big-area b-grid__small-area media-gallerys__interactive-block">
                        <img src="../assets/images/media-gallerys/image-1.jpg" alt="">

                         <div class="media-gallerys__hover-wrapper">
                            <div class="media-gallerys__hover-wrapper-body">

                                <button class="media-gallerys__fullscreen-btn">
                                    <svg class="media-gallerys__fullscreen-btn-svg">
                                        <use xlink:href="../assets/images/svg/full-screen.svg#full-screen"></use>
                                    </svg>
                                </button>

                                <a href="#" class="media-gallerys__about-link">

                                    <div class="media-gallerys__about-icon">
                                        <svg class="media-gallerys__about-icon-svg">
                                            <use xlink:href="../assets/images/svg/bag.svg#bag"></use>
                                        </svg>
                                    </div>

                                    <div class="media-gallerys__about-text">
                                        <span>
                                            Узнай, что на мне
                                        </span>
                                    </div>

                                </a>

                                <div class="media-gallerys__likes">
                                    <div class="media-gallerys__likes-icon">
                                        <svg class="media-gallerys__likes-icon-svg">
                                            <use xlink:href="../assets/images/svg/favorite-full.svg#favorite-full"></use>
                                        </svg>
                                    </div>
                                    <div class="media-gallerys__likes-value">200</div>
                                </div>

                            </div>
                        </div>

                    </div>

                    <div class="b-grid__big-area b-grid__small-area_two media-gallerys__interactive-block">
                        <img src="../assets/images/media-gallerys/image-3.jpg" alt="">

                        <div class="media-gallerys__hover-wrapper">
                            <div class="media-gallerys__hover-wrapper-body">

                                <button class="media-gallerys__fullscreen-btn">
                                    <svg class="media-gallerys__fullscreen-btn-svg">
                                        <use xlink:href="../assets/images/svg/full-screen.svg#full-screen"></use>
                                    </svg>
                                </button>

                                <a href="#" class="media-gallerys__about-link">

                                    <div class="media-gallerys__about-icon">
                                        <svg class="media-gallerys__about-icon-svg">
                                            <use xlink:href="../assets/images/svg/bag.svg#bag"></use>
                                        </svg>
                                    </div>

                                    <div class="media-gallerys__about-text">
                                        <span>
                                            Узнай, что на мне
                                        </span>
                                    </div>

                                </a>

                                <div class="media-gallerys__likes">
                                    <div class="media-gallerys__likes-icon">
                                        <svg class="media-gallerys__likes-icon-svg">
                                            <use xlink:href="../assets/images/svg/favorite-full.svg#favorite-full"></use>
                                        </svg>
                                    </div>
                                    <div class="media-gallerys__likes-value">200</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="b-grid__big-area b-grid__small-area_three media-gallerys__interactive-block">
                        <img src="../assets/images/media-gallerys/image-4.jpg" alt="">

                        <div class="media-gallerys__hover-wrapper">
                            <div class="media-gallerys__hover-wrapper-body">

                                <button class="media-gallerys__fullscreen-btn">
                                    <svg class="media-gallerys__fullscreen-btn-svg">
                                        <use xlink:href="../assets/images/svg/full-screen.svg#full-screen"></use>
                                    </svg>
                                </button>

                                <a href="#" class="media-gallerys__about-link">

                                    <div class="media-gallerys__about-icon">
                                        <svg class="media-gallerys__about-icon-svg">
                                            <use xlink:href="../assets/images/svg/bag.svg#bag"></use>
                                        </svg>
                                    </div>

                                    <div class="media-gallerys__about-text">
                                        <span>
                                            Узнай, что на мне
                                        </span>
                                    </div>

                                </a>

                                <div class="media-gallerys__likes">
                                    <div class="media-gallerys__likes-icon">
                                        <svg class="media-gallerys__likes-icon-svg">
                                            <use xlink:href="../assets/images/svg/favorite-full.svg#favorite-full"></use>
                                        </svg>
                                    </div>
                                    <div class="media-gallerys__likes-value">200</div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="b-grid__big-area b-grid__small-area_four media-gallerys__interactive-block">
                        <img src="../assets/images/media-gallerys/image-5.jpg" alt="">

                                                <div class="media-gallerys__hover-wrapper">
                            <div class="media-gallerys__hover-wrapper-body">

                                <button class="media-gallerys__fullscreen-btn">
                                    <svg class="media-gallerys__fullscreen-btn-svg">
                                        <use xlink:href="../assets/images/svg/full-screen.svg#full-screen"></use>
                                    </svg>
                                </button>

                                <a href="#" class="media-gallerys__about-link">

                                    <div class="media-gallerys__about-icon">
                                        <svg class="media-gallerys__about-icon-svg">
                                            <use xlink:href="../assets/images/svg/bag.svg#bag"></use>
                                        </svg>
                                    </div>

                                    <div class="media-gallerys__about-text">
                                        <span>
                                            Узнай, что на мне
                                        </span>
                                    </div>

                                </a>

                                <div class="media-gallerys__likes">
                                    <div class="media-gallerys__likes-icon">
                                        <svg class="media-gallerys__likes-icon-svg">
                                            <use xlink:href="../assets/images/svg/favorite-full.svg#favorite-full"></use>
                                        </svg>
                                    </div>
                                    <div class="media-gallerys__likes-value">200</div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <Footer
            @checkForm="checkForm"
            :error="error"
        />

        <Popup
            v-show="showPopup"
            :name="cartName"
            :value="cartCount"
            :dist="dist"
        />
    </main>

</template>
<script>
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import Popup from '../components/Popup.vue';
import CartMain from '../modules/Cart/CartMain.vue';

import carts from '../static/carts';

export default {
    name: "Index",
    components: {
        Header,
        CartMain,
        Footer,
        Popup
    },
    data() {
        return {
            parsedCarts: [],
            error: '',
            scrollPosition: 0,
            downHeaderClass: false,
            upHeaderClass:  false,
            isMenuOpen: false,
            showPopup: false,
            cartName: '',
            cartCount: 0,
            dist: '',
        }
    },
    created() {
        this.parsedCarts = carts.map( (item) => {
            return {
                ...item
            };
        })
        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
        openMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
        countItem(info) {
            this.parsedCarts.find(el => info.id === el.id).info.counter = info.count;
        },
        checkForm: function (email) {
            this.error = '';

            if (!email) {
                this.error = 'Укажите электронную почту.';
                setTimeout(() => this.error = '', 2000);
            } else if (!this.validEmail(email)) {
                this.error = 'Укажите корректный адрес электронной почты.';
                setTimeout(() => this.error = '', 2000);
            }

            if (email.length) {
                return true;
            }

        },
        validEmail: function (email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        handleScroll() {
            let currentScrollPosition = window.top.scrollY;
            if (currentScrollPosition > this.scrollPosition) {
                this.downHeaderClass = false;
                this.upHeaderClass = true;

            } else if (currentScrollPosition < this.scrollPosition) {
                this.downHeaderClass = true;
                this.upHeaderClass = false;
            }
            this.scrollPosition = currentScrollPosition;
        },
        closeMenuClickListener() {
            window.addEventListener('click', (e) => {
                if( !e.target.closest('header') ) {
                    this.isMenuOpen = false;
                }
            });
        },
        addOrderToCart(cartInfo) {
            this.cartName = this.parsedCarts.find((el) => el.id === cartInfo.id).info.name;
            this.cartCount = this.parsedCarts.find((el) => el.id === cartInfo.id).info.counter;
            this.dist = cartInfo.mode;

            this.showPopup = !this.showPopup;

            setTimeout(() =>  {
                this.showPopup = !this.showPopup;
            }, 2000);
        }
    },
    watch: {
        isMenuOpen(newVal) {
            if ( newVal === true ) {
                this.closeMenuClickListener();
            } else {
                return;
            }
        }
    }
}
</script>
