<template>
	<header class="main flex w-full h-28">
		<div class="container m-auto flex justify-between items-center z-10 w-full">
			<div class="left flex items-center justify-center gap-4">
				<Nuxt-Link to="/">
				<img class="logo max-h-[60px]"
					src="@/assets/images/logos/bee.png" />
				</Nuxt-Link>
				<Nuxt-Link to="/">
					<h4 v-show="!isMobile"
					class="text-2xl pt-4"> Jessica Turner</h4>
				</Nuxt-Link>
			</div>

<div class="right flex items-center justify-center gap-20">
	<Nuxt-link :to="props.projectLinkPrev" v-show="props.projectTitlePrev" class="prev text-default-dark animate-arrow-prev">
  {{props.projectTitlePrev}}
</Nuxt-Link>
	<Nuxt-link :to="props.projectLinkNext" v-show="props.projectTitleNext" class="next text-default-dark animate-arrow">
  {{props.projectTitleNext}}
</Nuxt-Link>
			</div>

		</div>
	</header>
</template>
<script setup>
const route=useRoute()

const {isMobile}= useScreenSize()



const props=defineProps({
	projectLinkNext: String,
	projectTitleNext: String,
	projectLinkPrev: String,
	projectTitlePrev: String
})
</script>
