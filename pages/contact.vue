<template>
	<NuxtLayout name="nonav">
		<div
			class="flex justify-center items-center flex-col space-y-28 mt-48 container mx-auto">
			<div
				class="flex justify-center items-center flex-col space-y-4 w-1/2 mx-auto">
				<h2 class="text-default-dark text-2xl">Let's connect!</h2>
				<p class="text-center text-1.2xl text-default-dark">
					My virtual door is always open for a friendly chat or to
					answer any questions. Feel free to drop me a line.
				</p>
			</div>
			<form
				class="w-1/2 mx-auto"
				action="https://usebasin.com/f/8babbc19d473"
				method="POST">
				<div
					class="flex flex-row flex-nowrap justify-between items-center">
					<div
						class="flex flex-col items-start justify-center w-[45%] space-y-2">
						<label for="first"> First name: </label>
						<input
							class="small-label w-full px-2 py-4"
							type="name"
							id="name"
							name="name"
							required />
					</div>
					<div
						class="flex flex-col items-start justify-center w-[45%] space-y-2">
						<label for="email"> Email: </label>
						<input
							class="small-box w-full px-2 py-4"
							type="email"
							id="email"
							name="email"
							required />
					</div>
				</div>
				<div
					class="flex flex-col items-start justify-center space-y-2 w-full my-10 space-y-1">
					<label for="message"> Message: </label>
					<textarea
						rows="5"
						cols="10"
						class="w-full px-2 py-4 large-box"
						id="message"
						name="message"
						required />
				</div>

				<input
					class="submit flex justify-center button mx-auto"
					type="submit"
					value="Submit" />
			</form>
		</div>
	</NuxtLayout>
</template>

<script setup>
definePageMeta({
	layout: false,
});
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

.textarea[rows] {
	height: initial;
}
.button {
	&.submit {
		padding: 10px 16px;
		background: linear-gradient($medium-purple, $dark-purple);
		color: $light-peach;
		font-size: 1.2rem;
	}
}
input {
	font-size: 1.2rem;
}
</style>
