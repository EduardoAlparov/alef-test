<template>
    <div class="popup">
        <div
            class="popup__body"
            v-if="dist === 'cart'"
        >
            <h2 class="popup__text">Tовар "{{ name }}" в количестве {{ value }} единиц добавлен в корзину</h2>
        </div>

        <div
            class="popup__body"
            v-else
        >
            <h2 class="popup__text">Tовар "{{ name }}" добавлен в избранное</h2>
        </div>
    </div>
</template>
<script>
export default {
    name: "Popup",
    props: {
        name: {
            type: String,
            default: ''
        },
        value: {
            type: Number,
            default: 0
        },
        dist: {
            type: String,
            default: ''
        },
    }
}
</script>
