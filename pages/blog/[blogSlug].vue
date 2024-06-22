<template>
	<div class="container mx-auto px-4 py-4 prose">
		<ContentDoc v-slot="{ doc }">
			<h1>{{ doc.title }}</h1>
			<div>
				{{ doc.publishedDate }}
			</div>
			<ContentRenderer :value="doc" />
		</ContentDoc>
	</div>
</template>
<script setup>
const route = useRoute();
</script>
