<template>
	<main class="  relative light-section ">
		<section class="section pt-44 lg:pt-52 xl-pt-40 fold animate hero light">
			<div
				class="flex flex-col justify-center items-center container mx-auto ">
				<div
					class="flex justify-center items-center flex-col space-y-4 ">
					<h1 class="text-2xl lg:text-3xl text-center text-purple-dark">
						Hi, my name is Jessica
					</h1>
					<h2 class=" text-1xl lg:text-2xl text-center text-purple-dark opacity-80">
						I design and build things for the web.
					</h2>
					<ArrowLink
						label="Check out my projects"
						:underlineLink="true"
						link="#projects" />
				</div>
				<div v-if="['lg', 'xl'].includes(size)" class="svg-container">

					<Avatar />
				</div>
				<div v-else class="svg-container">
					<img  class="" src="@/assets/images/home/mobile-avatar-2.png"/>
			</div>
			</div>
		</section>
		<section class="section info bg-default-dark dark">
			<div class="container mx-auto py-36  space-y-4">
				<template v-if="['lg', 'xl'].includes(size)" class="svg-container">
				<SkillMain />
				</template>
				<template v-else>
					<SkillMobile />
				</template>

			</div>
		</section>
		<section class="section product bg-linear-gradient-1 light">
			<div class="container mx-autospace-y-4 py-36 ">
				<p class="text-light-peach">Lorem Ipsum</p>
				<p class="text-light-peach">Lorem Ipsum</p>
				<p class="text-light-peach">Lorem Ipsum</p>
				<p class="text-light-peach">Lorem Ipsum</p>
			</div>
		</section>
		<section class="section info bg-default-dark dark">
			<div class="container mx-auto pt-36 space-y-4">
				<p class="text-light-peach">Lorem Ipsum</p>
				<p class="text-light-peach">Lorem Ipsum</p>
				<p class="text-light-peach">Lorem Ipsum</p>
				<p class="text-light-peach">Lorem Ipsum</p>
			</div>
		</section>
	</main>
</template>
<script setup>

import "@/assets/css/tailwind.css";

const size = useScreenSize().size

const route = useRoute();

const data = reactive({
	mobileMenuOpen: false,
});
</script>
