<template>
    <NuxtLink to="/">
        <h2>Back to Home</h2>
    </NuxtLink>
    <ContentList path="/blog">
        <template #default="{ list }">
            <div v-for="article in list" :key="article._path" class="flex items-center gap-2 py-2">
                <NuxtLink :to="article._path" class="underline">
                    {{ article.title }}
                </NuxtLink>
            </div>
        </template>
        <template #not-found>
            <p>No blog posts found.</p>
        </template>
    </ContentList>
</template>