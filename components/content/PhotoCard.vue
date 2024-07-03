<script setup>
defineProps({
    href: {
        type: String,
        required: true,
    },
    caption: {
        type: String,
        default: ''
    },
})
</script>

<template>
    <img :src="href" :alt="caption">
    <div>{{ caption }}</div>
</template>