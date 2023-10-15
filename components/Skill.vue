<template>
	<div class="container mx-auto flex flex-col items-start space-y-14">
		<h2 class="text-2xl text-light-peach">Experience & Skills</h2>
		<div class="menu flex justify-start gap-14 pb-14">
			<h3
				class="text-1.2xl text-light-peach"
				:class="{ active: data.selectedSection === 'about' }"
				@click="showSection('about')">
				About
			</h3>
			<h3
				class="text-1.2xl text-light-peach"
				:class="{ active: data.selectedSection === 'skills' }"
				@click="showSection('skills')">
				Skills
			</h3>
			<h3
				class="text-1.2xl text-light-peach"
				:class="{ active: data.selectedSection === 'experience' }"
				@click="showSection('experience')">
				Experience
			</h3>
		</div>
		<div class="contents w-full " >
			<template v-if="data.selectedSection === 'about'">
				<div class="flex justify-center gap-14 w-full">
					<div class="w-1/2 left flex flex-col items-start space-y-7">
						<p class="text-light-peach">
							My paragraph about myself
						</p>
					</div>
					<div class="w-1/2 right">
						<img src="" />
					</div>
				</div>
			</template>
		</div>
	</div>
</template>
<script setup>
const data = reactive({
	selectedSection: "about",
});
const showSection = (section) => {
	data.selectedSection = section;
	console.log(section);
};
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";
h3 {
	display: inline-block;
	position: relative;
	padding-bottom: 2px;
	width: fit-content;
	margin: 0;

	&:before {
		content: "";
		position: absolute;
		bottom: -2px;
		left: 0;
		width: 0;
		height: 2px;
		background: $orange;
		transition: width 0.3s;
	}
	&.active {
		&:before {
			width: 100%;
		}
	}
}
</style>
