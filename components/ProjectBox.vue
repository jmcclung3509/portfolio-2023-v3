<template>
	<div
		class="project-box w-full md:w-1/2 p-7 lg:w-1/3 border-box"
		:class="props.slug"
		@mouseover="data.boxIsHovering = true"
		@mouseleave="data.boxIsHovering = false">
		<transition name="zoom-out">
			<div class="inner-box relative w-full h-full rounded-lg">
				<div
					v-if="!data.boxIsHovering"
					class="front-box flex flex-col items-center justify-center space-y-4 relative border-box"
					ref="frontBox">
					<div class="project-image-container relative w-full">
						<img
							class="w-full rounded-lg"
							:src="props.imageSrc"
							:alt="`${props.imageSrc} homepage`" />
					</div>
					<div
						class="text-container absolute z-100 top-0 bottom-0 left-0 right-0 flex justify-center items-center">
						<h2 class="text-light-peach text-2xl">
							{{ props.title }}
						</h2>
					</div>
				</div>
				<div
					v-else
					class="back-box bg-default-dark flex flex-col items-center justify-center space-y-4 rounded-lg"
					:style="{ height: backBoxHeight }">
					<slot name="description" />
					<nuxt-link
						:to="props.link"
						class="button purple">
						Learn more
					</nuxt-link>
				</div>
			</div>
		</transition>
	</div>
</template>

<script setup>
const props = defineProps({
	slug: String,
	link: String,
	title: String,
	imageSrc: String,
});

const data = reactive({
	boxIsHovering: false,
});

const backBoxHeight = ref("auto");
const frontBox = ref(null);

const updateBackBoxHeight = () => {
	if (frontBox.value) {
		const frontBoxHeight = frontBox.value.clientHeight + "px";
		backBoxHeight.value = frontBoxHeight;
	}
};
onMounted(() => {
	frontBox.value = document.querySelector(".front-box");
	updateBackBoxHeight();
	window.addEventListener("resize", updateBackBoxHeight);
});
// beforeDestroy(()=>{
// 	window.removeEventListener('resize', updateBackBoxHeight())
// })
</script>

<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";
@import "@/assets/scss/transitions.scss";
.inner-box {

	.front-box,
	.back-box {
		width: 100%;
		height: 100%;
	}
}
.project-image-container {
	&:after {
		content: "";
		background-image: $overlay-gradient;
		background-size: cover;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		z-index: 2;
		border-radius: 0.5rem;
	}
}
.text-container {
	z-index: 10;
}
</style>
