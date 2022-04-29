<template>
    <div class="gallery">
        <div class="gallery__main-display">
            <img
                :src="require(`../../assets/images/gallery/${activeImage}`)"
            >
        </div>
        <ul class="gallery__thumbs">
            <li
                v-for="image in images"
                :key="image.id"

            >
                <button
                    class="gallery__thumb"
                    @click="$emit('switchThumb', image.id)"
                >
                    <img
                    :src="require(`../../assets/images/gallery/${image.path}`)"
                    >
                </button>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "CartGallery",
    props: {
        images: {
            type: Array,
            required: true
        },
        activeImage: {
            type: String,
            default: 'image-1.jpg'
        }
    },
}
</script>
