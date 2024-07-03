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
    <div class="border-b border-gray-200 border-dashed">
        <img :src="href" :alt="caption" class="m-0 px-2 py-4" />
        <div class="py-2 text-center text-sm italic">{{ caption }}</div>
    </div>
</template>