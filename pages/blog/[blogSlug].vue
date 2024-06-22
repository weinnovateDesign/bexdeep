<template>
	<div class="my-2 py-2">
		<NuxtLink to="/">Home</NuxtLink> > <NuxtLink to="/blog">Blog posts</NuxtLink>
	</div>
	<ContentDoc v-slot="{ doc }">
		<h1>{{ doc.title }}</h1>
		<div>
			Published on: {{ new Date(doc.publishedDate).toLocaleDateString('en-US', {
				year: 'numeric', month: 'long', day: 'numeric'
			}) }}
		</div>
		<ContentRenderer :value="doc" />
	</ContentDoc>
</template>
<script setup>
const route = useRoute();
</script>
