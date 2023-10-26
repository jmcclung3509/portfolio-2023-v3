<template>
	<NuxtLayout name="project">
		<template #header>
			<HeaderProjectNav
				projectLinkPrev="/projects/quizzical"
				projectTitleNext="Quizzical"></HeaderProjectNav>
		</template>
		<div class="container mx-auto space-y-14 flex flex-col mt-48 space-y-14">
			<div class="flex flex-col space-y-4 items-center justify-center">
				<h2 class="text-orange text-2xl flex justify-center">
				Portfolio
				</h2>
				<p class="w-[75%] mx-auto">
					My personal website, past and present.  I strive to unleash my creativity when designing and developing my personal website, which provides me with the opportunity to explore new ideas. Sometimes they succeed, and sometimes they don't, but it always serves as a valuable learning experience.
				</p>
			</div>

			<div class="carousel-container">
				<CarouselImageText
					:images="sitezeusImages"
					v-slot="slotProps">
					<div
						class="text-left space-y-4 lg:w-[80%] lg:mr-auto"
						v-if="slotProps.realIndex === 0">
						<p>
							My current portfolio is constructed using Vue, Nuxt, and Tailwind. The design process began in Figma, and I crafted vector images using Adobe Illustrator. Building my portfolio has been an enjoyable journey. It marked my first venture into vector image creation, which proved to be a valuable learning experience. To infuse life into these vector images, I converted them into Vue components, enabling animations. My primary goal was to achieve a clean and user-friendly design, presenting information in an organized, easily navigable format.
						</p>



					</div>
					<div
					class="text-left space-y-4 lg:w-[80%] lg:mr-auto"
						v-if="slotProps.realIndex === 1">
						<p>

My previous website, dated 2022, was designed in Figma and constructed with Vanilla JavaScript and Bootstrap. I embraced a clean and minimalist design approach. This project represented one of my initial explorations into animation and advanced CSS techniques, which involved employing different keyframes to animate the hero text upon page load and creating captivating hover effects for the buttons.
						</p>
						<div class="button-container flex flex-row gap-7 pt-7">
							<Nuxt-link
								class="button purple"
								to="https://portfolio-main-blond.vercel.app/">
								See it live</Nuxt-link
							>
						</div>
					</div>


				</CarouselImageText>
			</div>
		</div>
	</NuxtLayout>
</template>

<script setup>
definePageMeta({
	layout: false,
});

const sitezeusImages = [
	{
		src: "/static/images/pages/project-pages/sitezeus-homepage-recording.mp4",
		type: "video/mp4",
		alt: "SiteZeus homepage",
	},

	{
		src: "/static/images/pages/project-pages/portfolio-v1-recording.mp4",
		type: "video/mp4",
		alt: "Portfolio v1",
	},
];
</script>
