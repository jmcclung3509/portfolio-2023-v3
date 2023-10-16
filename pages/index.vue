<template>
	<main class="space-y-36 lg:space-y-52 relative light-section ">
		<section class="section pt-64 xl-pt-40 fold animate hero light">
			<div
				class="flex flex-col space-between items-center container mx-auto space-y-14">
				<div
					class="flex justify-center items-center flex-col space-y-4">
					<h1 class="text-3xl text-purple-dark">
						Hi, my name is Jessica
					</h1>
					<h2 class="text-2xl text-purple-dark opacity-80">
						I design and build things for the web.
					</h2>
					<ArrowLink
						label="Check out my projects"
						:underlineLink="true"
						link="#projects" />
				</div>
				<div class="image-container">
					<!-- <img  class="mt-24" src="@/assets/images/home/avatar.png"/> -->
					<Avatar />
				</div>
			</div>
		</section>
		<section class="section info bg-default-dark dark">
			<div class="container mx-auto pt-36 space-y-4">
				<SkillMain />
			</div>
		</section>
		<section class="section info bg-light-peach light">
			<div class="container mx-auto pt-36 space-y-4">
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

const route = useRoute();

const data = reactive({
	mobileMenuOpen: false,
});
</script>
