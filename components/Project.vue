<template>
	<div class="animate flex  flex-nowrap md:flex-row flex-col items-start justify-center md:gap-20 lg: gap-24" :class="[{'md:flex-row-reverse': props.reverse}, {'md:flex-row':!props.reverse}]">
		<div class="flex image-container grow-0 w-1/2" :class="props.reverse ? 'right-image' : 'left-image'">
			<img
			class=" w-4/5"
			:class="props.reverse ? 'mr-20 right-image' : 'ml-20 left-image'"
				:src="props.imageSrc"
				:alt="`${props.projectTitle} project image`" />
		</div>
		<div class="project-info flex-col items-start space-y-4 w-1/2">
			<h2 class="text-2xl text-orange pb-4">{{ props.projectTitle }}</h2>
			<slot name="description" />
			<p class="text-1xl text-orange font-normal">How I built it:</p>
			<div
				class="tag-container justify-start items-center inline-flex flex-nowrap "
				v-for="(tag, i) in props.projectTags"
				:key="i">
				<h3 class="tag text-default-dark text-xs w-fit mr-4">{{ tag }}</h3>
			</div>
			<div
				class="button-container flex justify-start items-center " >
				<a v-for="( button, i) in props.buttons" :key="i" class="button purple mr-4" :href = "button.link" target="_blank"> {{button.label}}</a>
			</div>
		</div>
	</div>
</template>

<script setup>
const props = defineProps({
	reverse: {
		type: Boolean,
		default: false,
	},
	imageSrc: String,
	projectTitle: String,
	projectTags: Array,
	buttons: Array
});
</script>
