<template>
	<main class="relative light-section">
		<section
			class=" section pt-44 lg:pt-52 xl-pt-40 fold  hero light">
			<div
				class=" flex flex-col justify-center items-center container mx-auto">
				<div
					class=" animate flex justify-center items-center flex-col space-y-4">
					<h1
						class="text-2xl lg:text-3xl text-center text-purple-dark">
						Hi, my name is Jessica
					</h1>
					<h2
						class="text-1xl lg:text-2xl text-center text-purple-dark opacity-80">
						I design and build things for the web.
					</h2>
					<ArrowLink
						label="Check out my projects"
						:underlineLink="true"
						link="#projects" />
				</div>
				<div
					v-if="['lg', 'xl'].includes(size)"
					class="svg-container">
					<Avatar />
				</div>
				<div
					v-else
					class="svg-container">
					<img
						class=""
						src="@/assets/images/home/mobile-avatar-2.png" />
				</div>
			</div>
		</section>
		<section class=" section info bg-default-dark dark">
			<div class="animate container mx-auto py-36 space-y-4">
				<template v-if="['lg', 'xl'].includes(size)">
					<SkillMain />
				</template>
				<template v-else>
					<SkillMobile />
				</template>
			</div>
		</section>
		<section class="section projects bg-linear-gradient-4 light pb-52">
			<div class="container  mx-auto space-y-14 py-36">
				<h2 class="text-2xl text-default-dark">Projects</h2>
				<div class="projects-container space-y-48">
					<Project
						imageSrc="/static/images/projects/sitezeus-homepage.png"
						projectTitle="SiteZeus Website"
						:projectTags="['Vue/Nuxt', 'tailwind', 'sass']"
						:buttons="siteZeusButtons">
						<template #description
							>The
							<a
								href="https://sitezeus.com"
								target="_blank">
								SiteZeus</a
							>
							website showcases my dual experience modernizing
							existing WordPress pages into a sleek Vue/Nuxt
							framework, as well as crafting numerous new, dynamic
							and user-centeric webpages.</template
						>
					</Project>
					<Project
						:reverse="true"
						imageSrc="/static/images/projects/insites-homepage.png"
						projectTitle="SiteZeus Insites"
						:projectTags="['WordPress', 'PHP', 'sass']"
						:buttons="insitesButtons">
						<template #description
							>Maintained the existing WordPress webpages on
							<a
								href="https://insites.sitezeus.com"
								target="_blank"
								>Insites</a
							>
							while continuously infusing the website with fresh
							and engaging content, including new webpages,
							webinar landing pages, and captivatng blog posts.
						</template>
					</Project>
					<Project
						imageSrc="/static/images/projects/nicks-homepage.png"
						projectTitle="Nick's Restaurant Website"
						:projectTags="['VUE/Nuxt', 'Tailwind', 'sass', 'Figma']"
						:buttons="nicksButtons">
						<template #description
							>Revitalized the online presence of
							<a
								href="https://deft-gingersnap-b9df5d.netlify.app/"
								target="_blank">
								Nick's Restaurant,</a
							>
							a beloved family-owned establishment in my hometown.
							By redesigning their website, we were able to create
							a more engaging and interactive platform,
							strengthening their connection with customers and
							enhancing their online visibility.
						</template>
					</Project>
					<Project
						:reverse="true"
						imageSrc="/static/images/projects/sticky-notes-app.png"
						projectTitle="Sticky Notes App"
						:projectTags="['React', 'Figma', 'Bootstrap']"
						:buttons="stickyButtons">
						<template #description
							><a href="https://super-sticky-notes.vercel.app/"

								target="_blank"
								>Sticky Notes App</a
							> is a CRUD note organizing application with a fun UI.  Each note resembles a "post-it" and users can click into the note to add the title and description.  The user can edit, search  and delete individual notes from the page.
						</template>
					</Project>
					<Project
						imageSrc="/static/images/projects/quizzical-app.png"
						projectTitle="Quizzical App"
						:projectTags="['React', 'Figma', 'React hooks']"
						:buttons="quizzicalButtons">
						<template #description
							>
							<a
								href="https://my-quizzical-app.vercel.app/"
								target="_blank">
								Quizzical</a
							>
						is a fun trivia game that fetches data from an open source trivia API and displays the results</template
						>
					</Project>
				</div>
			</div>
		</section>
		<section class="section animate bg-default-dark dark relative contact">
<div class="mx-auto contact-container w-full absolute top-[-50px] left-0 right-0">
			<div class="animated-btn contact   h-[100px] w-1/6   z-100 mx-auto rounded-2xl flex flex-col items-center justify-center space-y-4 button">
				<!-- <h2 class="text-light-peach justify-center text-2xl"> Want to chat? </h2> -->

				<Nuxt-link to="/contact" class=" inner-button gradient-purple text-2xl"> Let's chat!</Nuxt-link>

			</div>
		</div>

			<div class=" container mx-auto pt-36 space-y-4 ">
				<div class="flex flex-col space-y-7 items-center">
					<Yoda/>

					<p class="quote w-1/2 mx-auto text-light-purple text-center">Pass on what you have learned. Strength, mastery, hmmm... but weakness, folly, failure, also. Yes, failure, most of all. The greatest teacher, failure is.</p>
					<p class="cite text-light-peach caps"> &mdash; Yoda </p>
				</div>
			</div>

		</section>
		<section class="section footer bg-default-dark pt-24">
			<div class="container mx-auto animate">
			<div class="flex justify-center ">
				<p class=" text-[12px] caps text-light-purple font-light">Designed & developed by me using Adobe Illustrator, Figma, Vue, Nuxt and Tailwind 💜 2023 </p>

			</div>
		</div>
		</section>
	</main>
</template>

<script setup>
import "@/assets/css/tailwind.css";

const size = useScreenSize().size;

const route = useRoute();

const data = reactive({
	mobileMenuOpen: false,
});
const siteZeusButtons = [
	{
		link: "https://sitezeus.com",
		label: "Live",
	},
	{
		link: "/projects/sitezeus",
		label: "Learn more",
	},
];
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
];const quizzicalButtons = [
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
