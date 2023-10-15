<template>
	<div class="sidebar-container w-[100px]">
		<div class="flex flex-col items-center gap-4">


<div class="flex flex-col space-y-4 items-center">
			<font-awesome-icon
				class="social-icon text-1.5xl hover:text-dark-purple"
				:icon="['fab', 'github']"

				 />
			<font-awesome-icon
				class="social-icon text-1.5xl hover:text-dark-purple"
				:icon="['fab', 'linkedin']"
				/>
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
	bottom: 20px;
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
