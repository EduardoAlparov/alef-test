<template>
    <div class="info-cart">
        <div class="info-cart__heading">
            <div class="info-cart__name">{{ cart.info.name }}</div>
            <div class="info-cart__articule">Арт.{{ cart.info.articule }}</div>
            <a href="#" class="info-cart__reviews">
                <div class="info-cart__reviews-title">
                    <span>Отзывы</span>
                </div>
                <div class="info-cart__reviews-rating">
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                    <span>&#9733;</span>
                </div>
                <div href="#" class="info-cart__reviews-quantity">
                    <span>
                        {{ cart.info.reviews.length }} отзывов
                    </span>
                </div>

                <div class="info-cart__rigth-arrow">
                    <svg class="info-cart__rigth-arrow-svg">
                        <use xlink:href="../../assets/images/svg/arrow-right.svg#arrow-right"></use>
                    </svg>
                </div>
            </a>
        </div>

        <a href="#" class="info-cart__prices">
            <div class="info-cart__new-price">
                <span>{{ cart.info.newPrice }} &#8381;</span>
            </div>
            <div class="info-cart__old-price">
                <span>{{ cart.info.oldPrice}} &#8381;</span>
            </div>

            <div class="info-cart__rigth-arrow">
                <svg class="info-cart__rigth-arrow-svg">
                    <use xlink:href="../../assets/images/svg/arrow-right.svg#arrow-right"></use>
                </svg>
            </div>
        </a>

        <div class="info-cart__discount-info">

            <button class="info-cart__discount-tab" disabled>
                скидка -36%
            </button>

            <button class="info-cart__discount-tab" disabled>
                акция -20%
            </button>

        </div>

        <div class="info-cart__select-main-contianer">

            <button
                class="info-cart__select"
                :class="{'info-cart__select_open': !selectNotVisible}"
                @click="selectNotVisible = !selectNotVisible"
            >
                <span>Выбрать размер</span>

                <div class="info-cart__rigth-arrow">
                    <svg class="info-cart__rigth-arrow-svg">
                        <use xlink:href="../../assets/images/svg/arrow-right.svg#arrow-right"></use>
                    </svg>
                </div>

                <ul
                    class="info-cart__hidden-list"
                    :class="{'visually-hidden': selectNotVisible}"
                >

                    <li
                        class="info-cart__hidden-item"
                        v-for="size in cart.info.sizes"
                        :key="size.id"
                    >
                        <span>{{ size }}</span>
                    </li>

                </ul>

            </button>

            <a href="#" class="info-cart__link">
                Определить размер
            </a>

        </div>

        <div class="info-cart__order-block">

            <div class="info-cart__order">

                <div class="info-cart__counter counter">

                    <button
                        type="button"
                        class="counter__button"
                        @click="$emit('countItem', cart.info.counter + 1)"
                    >
                        <span class="visually-hidden">Меньше</span>
                        <span>+</span>
                    </button>

                    <input
                        type="text"
                        name="counter"
                        class="counter__input"
                        disabled
                        :value="cart.info.counter"
                    >

                    <button
                        type="button"
                        class="counter__button"
                        @click="$emit('countItem', cart.info.counter - 1)"
                        :disabled="cart.info.counter < 1"
                    >
                        <span class="visually-hidden">Больше</span>
                        <span>-</span>
                    </button>

                </div>

                <button
                    class="info-cart__cart-btn"
                    :disabled="cart.info.counter < 1"
                    @click="$emit('addOrderToCart', {id: cart.id, mode: 'cart'})"
                >
                    Добавить в корзину
                </button>

                <button
                    class="info-cart__favorite-btn"
                    @click="$emit('addOrderToCart', {id: cart.id, mode: 'favorit'})"
                >
                    <svg class="info-cart__favorite-btn-svg">
                        <use xlink:href="../../assets/images/svg/favorite.svg#favorite"></use>
                    </svg>
                </button>

            </div>

            <a href="#" class="info-cart__link">
                Купить в 1 клик
            </a>

        </div>

        <div class="info-cart__footer">
            <ul class="info-cart__link-list">
                <li>
                    <a href="#" class="info-cart__link">
                        <div class="info-cart__link-icon">
                            <svg class="info-cart__link-icon-svg">
                                <use xlink:href="../../assets/images/svg/closes.svg#closes"></use>
                            </svg>
                        </div>
                        <div class="info-cart__link-text">
                            Описание товара
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="info-cart__link">
                        <div class="info-cart__link-icon">
                            <svg class="info-cart__link-icon-svg">
                                <use xlink:href="../../assets/images/svg/clock.svg#clock"></use>
                            </svg>
                        </div>
                        <div class="info-cart__link-text">
                            Доставка и возврат
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#" class="info-cart__link">
                        <div class="info-cart__link-icon">
                            <svg class="info-cart__link-icon-svg">
                                <use xlink:href="../../assets/images/svg/pay.svg#pay"></use>
                            </svg>
                        </div>
                        <div class="info-cart__link-text">
                            Способы оплаты
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "CartInfo",
    props: {
        cart: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            selectNotVisible: true
        }
    }
}
</script>
