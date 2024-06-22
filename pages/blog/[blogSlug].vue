<template>
	<NuxtLink to="/blog">
		<h2>Back to Blog posts</h2>
	</NuxtLink>
	<ContentDoc v-slot="{ doc }">
		<h1>{{ doc.title }}</h1>
		<div>
			{{ doc.publishedDate }}
		</div>
		<ContentRenderer :value="doc" />
	</ContentDoc>
</template>
<script setup>
const route = useRoute();
</script>
