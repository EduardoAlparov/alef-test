<template>
    <div class="cart">
         <div class="container cart__container">
            <div class="cart__gallery">

                <CartGallery
                    :images="cart.images"
                    @switchThumb="switchThumb"
                    :activeImage="activeImage"
                />

            </div>
            <div class="cart__info">

                <CartInfo
                    :cart="cart"
                    @countItem="countItem"
                    @addOrderToCart="addOrderToCart"
                />

            </div>

        </div>
    </div>
</template>
<script>
import CartGallery from './CartGallery.vue';
import CartInfo from './CartInfo.vue';

export default {
    name: "CartMain",
    components: {
        CartGallery,
        CartInfo
    },
    props: {
        cart: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            activeImage: this.cart.images[0].path
        }
    },
    methods: {
        countItem(counter) {
            this.$emit("countItem",
            {
                "count": counter,
                "id": this.cart.id
            });
        },
        switchThumb(imageId) {
            this.activeImage = this.cart.images.find(el => el.id === imageId).path;
        },
        addOrderToCart(cartInfo) {
            this.$emit('addOrderToCart', cartInfo);
        }
    }
}
</script>
