<template>
	<main class="space-y-36 lg:space-y-52 relative">
		<section class="pt-36 xl-pt-40 fold animate hero ">
			<div class="flex flex-col space-between items-center container mx-auto">
			<div class="flex justify-center items-center flex-col space-y-4">
			<h1 class="text-4xl text-purple-dark">Hi, my name is Jessica  </h1>
			<h2 class="text-3xl text-purple-dark opacity-80"> I design and build things for the web.</h2>
			<ArrowLink label="Check out my projects" :underlineLink="true" link="#projects" />
		</div>
		<div class="image-container">
			<img  class="mt-24" src="@/assets/images/home/avatar.png"/>
		</div>
	</div>

		</section>
	</main>
</template>
<script setup>
import '@/assets/css/tailwind.css'

const route = useRoute()

const data = reactive({
	mobileMenuOpen: false
})
</script>