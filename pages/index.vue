<template>
	<main class="relative light-section">
		<section class="section  fold hero light flex justify-center items-center relative">
			<div class="flex flex-col space-y-4  mt-[-65%] lg:mt-[-18%] xl:mt-[-25%]container mx-auto text-container items-star  md:items-center  py-7"
				id="text-container">
				<h1 class="text-2xl md:text-3xl xxl:text-4xl md:text-center">

					<span v-for="(letter, index) in formattedHeroText" class="letter" :key="index"
						:style="{ 'animation-delay': index * 0.1 + 's' }">{{ letter }} </span>

				</h1>
				<h2 class="text-1xl lg:text-1.5xl xl:text-2xl text-purple-dark md:text-center appear">
					I design and build things for the web.
				</h2>
				<div class="link-container animate-underline orange slide-in">
					<a href="#" class="text-dark-purple animate-arrow orange w-fit" data-go-to="projects">Skip to
						projects</a>
				</div>
			</div>
			<div class="svg-container" id="svg-container">
				<template v-if="!isMobile">
					<SVGAvatar />
				</template>

				<template v-else>
					<img class="svg-container" src="@/assets/images/home/mobile-avatar-2.png" />
				</template>
			</div>
		</section>
		<section class="section info bg-default-dark dark">
			<div class="animate container mx-auto py-36 space-y-4">
				<template v-if="!isMobile">
					<SkillMain />
				</template>
				<template v-else>
					<SkillMobile />
				</template>
			</div>
		</section>
		<section id="projects" class="section projects bg-light-peach pb-52">
			<div class="container mx-auto space-y-14 py-36 px-20">
				<h2 class="text-2xl text-default-dark ml-20">Projects</h2>
				<div class="projects-container flex flex-col justify-center items-center md:flex-row md:flex-wrap">
					<FlipBox title="SiteZeus" link="/projects/sitezeus" slug="sitezeus"
						imageSrc="static/images/pages/home/sitezeus-homepage.png" :tagArray="['Vue', 'Nuxt', 'Tailwind']">
					</FlipBox>
					<FlipBox title="Insites" link="/projects/insites" slug="insites"
						imageSrc="/static/images/pages/home/insites-homepage.png"
						:tagArray="['WordPress', 'PHP', 'Vanilla JavaScript']">
					</FlipBox>
					<FlipBox title="Nick's Restaurant" link="projects/nicks" slug="nicks"
						imageSrc="/static/images/pages/home/nicks-homepage.png" :tagArray="['Vue', 'Nuxt', 'Tailwind']">
					</FlipBox>
					<FlipBox title="Sticky Notes App" link="projects/sticky-notes-app" slug="sticky-notes"
						imageSrc="/static/images/pages/home/sticky-notes-app.png"
						:tagArray="['React', 'Bootstrap', 'Figma']">
					</FlipBox>
					<FlipBox title="Quizzical" link="/projects/quizzical" slug="quizzical"
						imageSrc="/static/images/pages/home/quizzial.png" :tagArray="[
							'React',
							'React hooks',
							'API',
							'Figma',
						]"></FlipBox>

					<FlipBox title="Portfolio" link="projects/portfolio" slug="quizzical"
						imageSrc="/static/images/pages/home/portfolio.png" :tagArray="['Vue', 'Nuxt', 'Tailwind']">
					</FlipBox>
				</div>
			</div>
		</section>
		<section class="section animate bg-default-dark dark relative contact space-y-14">
			<div class="mx-auto contact-container w-full absolute top-[-50px] left-0 right-0">
				<div
					class="animated-btn contact h-[100px] w-1/6 min-w-fit p-4 z-100 mx-auto rounded-2xl flex flex-col items-center justify-center space-y-4 button">
					<Nuxt-link to="/contact" class="inner-button text-light-peach text-2xl">
						Let's chat!</Nuxt-link>
				</div>
			</div>

			<div class="container mx-auto pt-36 space-y-7">
				<div class="flex flex-col space-y-7 items-center">
					<Yoda />

					<p class="quote w-full md:w-2/3 lg:w-1/2 mx-auto text-light-purple text-center">
						Pass on what you have learned. Strength, mastery,
						hmmm... but weakness, folly, failure, also. Yes,
						failure, most of all. The greatest teacher, failure is.
					</p>
					<p class="cite text-light-peach caps">&mdash; Yoda</p>
				</div>
			</div>

			<div class="container mx-auto animate space-y-7">
				<div class="social-icons flex flex-row justify-center gap-7" v-show="['sm', 'md'].includes(size)">
					<a href="https://github.com/jmcclung3509" target="_blank">
						<font-awesome-icon class="social-icon text-1.5xl text-light-peach hover:text-dark-purple"
							:icon="['fab', 'github']" /></a>
					<a href="https://www.linkedin.com/in/jessica-turner-94b549229/" target="_blank">
						<font-awesome-icon class="social-icon text-1.5xl text-light-peach hover:text-dark-purple"
							:icon="['fab', 'linkedin']" />
					</a>
				</div>
				<div class="flex justify-center pt-14">
					<p class="text-[12px] caps text-light-purple font-light">
						Designed & developed by me using Adobe Illustrator,
						Figma, Vue, Nuxt and Tailwind 💜 2023
					</p>
				</div>
			</div>
		</section>
	</main>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const size = useScreenSize().size;
const { isMobile } = useScreenSize();
const host = config.BASE_API_BROWSER_URL;
const title = "Jessica Turner | 2023";
const desc = " Personal website of Jessica Turner";

const image = host + "/static/images/featured-image.png";
const url = host + route.fullPath;

useHead({
	titleTemplate: title,
	meta: [
		{ name: "title", content: "title" },
		{ name: "description", content: "desc" },
		{ hid: "og:type", property: "og:type", content: "website" },
		{ hid: "og:title", property: "og:title", content: title },
		{ hid: "og:url", property: "og:url", content: url },
		{ hid: "og:description", property: "og:description", content: desc },
		{ hid: "og:image", property: "og:image", content: image },
	],
});

import "@/assets/css/tailwind.css";


const data = reactive({
	mobileMenuOpen: false,

});

const formattedHeroText = computed(() => {
	return "Hi, I'm Jessica.".split('');
})
const insitesButtons = [
	{
		link: "https://insites.sitezeus.com",
		label: "Live",
	},
	{
		link: "/projects/insites",
		label: "Learn more",
	},
];
const nicksButtons = [
	{
		link: "https://deft-gingersnap-b9df5d.netlify.app/",
		label: "Live",
	},
	{
		link: "https://github.com/jmcclung3509/nuxt-nicks-restaurant",
		label: "Repo",
	},
	{
		link: "/projects/nicks",
		label: "Learn more",
	},
];
const stickyButtons = [
	{
		link: "https://super-sticky-notes.vercel.app/",
		label: "Live",
	},
	{
		link: "https://github.com/jmcclung3509/super-sticky-notes",
		label: "Repo",
	},
	{
		link: "/projects/sticky",
		label: "Learn more",
	},
];
const quizzicalButtons = [
	{
		link: "https://my-quizzical-app.vercel.app/",
		label: "Live",
	},
	{
		link: "https://github.com/jmcclung3509/quizzical_react_project_scrimba",
		label: "Repo",
	},
	{
		link: "/projects/quizzical",
		label: "Learn more",
	},
];
</script>

<style lang="scss">
.letter {

	animation-name: slideDownAnimation;
	animation-duration: 0.8s;
	animation-fill-mode: both;
	opacity: 0;

}
</style>