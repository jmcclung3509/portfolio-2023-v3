<template>
	<header class="main flex w-full h-28">
		<div class="container m-auto flex justify-between items-center z-10 w-full">
			<div class="left flex items-center justify-center gap-4">
				<Nuxt-Link to="/">
				<img class="logo max-h-[60px]"
					src="@/assets/images/logos/bee.png" />
				</Nuxt-Link>
				<Nuxt-Link to="/">
					<h4 v-show="!['sm', 'md'].includes(size)"
					class="text-2xl pt-4"> Jessica Turner</h4>
				</Nuxt-Link>
			</div>

<div class="right flex items center justify-center gap-4">
				<Nuxt-link to="/">
					<font-awesome-icon
				class=" text-1.5xl hover:text-dark-purple"
				:icon="['fas', 'fa-close']"

				 />
				</Nuxt-Link>
			</div>

		</div>
	</header>
</template>
