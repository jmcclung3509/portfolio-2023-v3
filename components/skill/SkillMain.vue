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
		<div class="contents w-full">
			<template v-if="data.selectedSection === 'about'">
				<SkillContent>
					<template #paragraph>
						<div class="flex justify-center ">
							<div
								class="flex flex-col w-1/2 items-start space-y-7">
								<p class="text-light-peach text-fine">
									Hey there! I'm Jessica Turner, a developer
									based in the Bay Area, and I absolutely love
									what I do. Lucky, right!? I find immense
									satisfaction in the interplay between
									analytical development and creative design,
									blending technical knowledge with a strong
									design sensibility to craft beautiful,
									dynamic, and user-centric products.
								</p>

								<p class="text-light-peach text-fine">
									With over two years of professional
									experience, I've honed my skills in Vue,
									Nuxt, and WordPress to create high-quality
									websites and applications. I relish tackling
									technical challenges with creative
									problem-solving and staying up-to-date with
									the latest web technologies.
								</p>
							</div>

							<div class="w-1/2 image-container">
								<img
									class="mx-auto "
									src="@/assets/images/home/headshot.png"
									alt="Jessica Turner headshot" />
							</div>
						</div>
					</template>
					<template #bullet-section> </template>
				</SkillContent>
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
<style lang="scss" scoped>
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
.image-container {
	position: relative;
	transform: translateX(20%);
	img {
		position: absolute;
		z-index: 30;
		left: 40px;
	}
	&:before {
		content: "";
		position: absolute;
		width: 79%;
		height: 93%;
		background-image: linear-gradient($default-dark, $default-dark),
			linear-gradient(45deg, $dark-purple, $orange);

		border: 4px solid transparent;
		background-origin: border-box;
		background-clip: content-box, border-box;
	}
	&:before {
		left: 60px;
		top: 25px;
		z-index: 20;
	}
}
</style>
