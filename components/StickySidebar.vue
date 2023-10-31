<template>
	<div class="hidden lg:block sidebar-container w-[100px]">
		<div class="flex flex-col items-center gap-4">


<div class="flex flex-col space-y-4 items-center">
	<a href="https://github.com/jmcclung3509" targe="_blank">
					<font-awesome-icon
				class="social-icon text-1.5xl text-light-peach hover:text-dark-purple"
				:icon="['fab', 'fa-github']"

				 /></a>
				 <a href= "https://www.linkedin.com/in/jessica-turner-94b549229/" target="_blank">
			<font-awesome-icon
			class="social-icon text-1.5xl text-light-peach hover:text-dark-purple"
				:icon="['fab', 'fa-linkedin']"
				/>
				</a>
</div>
			<div class="sidebar-line social-icon w-[2px] h-[80px]" ></div>
		</div>
	</div>
</template>
<script setup>

</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";


.sidebar-container {

	position: fixed;
	bottom: 0px;
	right: 0px;
	z-index: 10;
	.social-icon{
		color:$default-dark;
		&.light{
			color: $light-purple;
		}
	}
	.sidebar-line{
		background-color: $default-dark;
		&.light{
			background-color: $light-purple;
		}
	}

}
</style>
