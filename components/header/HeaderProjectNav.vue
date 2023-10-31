<template>
	<header class="main flex w-full h-28">
		<div class="container m-auto flex justify-between items-center z-10 w-full">
			<div class="left flex items-center justify-center gap-4">
				<Nuxt-Link to="/">
				<SVGBee/>
				</Nuxt-Link>
				<Nuxt-Link to="/">
					<h4 v-show="!['sm', 'md'].includes(size)"
					class="text-2xl pt-4"> Jessica Turner</h4>
				</Nuxt-Link>
			</div>
<template v-if="!['sm', 'md'].includes(size)">
<div class="right flex items-center justify-center gap-20">
	<Nuxt-link :to="props.projectLinkPrev" v-show="props.projectTitlePrev" class="prev text-dark-purple animate-arrow-prev">
  {{props.projectTitlePrev}}
</Nuxt-Link>
	<Nuxt-link :to="props.projectLinkNext" v-show="props.projectTitleNext" class="next text-dark-purple animate-arrow">
  {{props.projectTitleNext}}
</Nuxt-Link>
			</div>
</template>
<template v-else>
	<div class="right flex items-center justify-center gap-4">
	<Nuxt-link :to="props.projectLinkPrev" v-show="props.projectTitlePrev" class="prev text-dark-purple animate-arrow-prev">

</Nuxt-Link>
	<Nuxt-link :to="props.projectLinkNext" v-show="props.projectTitleNext" class="next text-dark-purple animate-arrow">

</Nuxt-Link>
			</div>
</template>

		</div>
	</header>
</template>
<script setup>

const size = useScreenSize().size
console.log(size)



const props=defineProps({
	projectLinkNext: String,
	projectTitleNext: String,
	projectLinkPrev: String,
	projectTitlePrev: String
})
</script>
