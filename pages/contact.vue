<template>
	<NuxtLayout name="nonav">
		<div class="flex justify-center items-center flex-col space-y-28 mt-36">
			<div
				class="container mx-auto flex justify-center items-center flex-col">
				<h2 class="text-default-dark text-2xl">Let's connect!</h2>
				<p>
					My virtual door is always open for a friendly chat or to
					answer any questions. Feel free to drop me a line
				</p>
			</div>
			<form
				action="https://usebasin.com/f/8babbc19d473"
				method="POST">
				<label for="first"> First name: </label>
				<input
					type="first"
					id="first"
					name="first"
					required />
				<label for="last"> Last name: </label>
				<input
					type="last"
					id="last"
					name="last"
					required />
				<label for="email"> Email: </label>
				<input
					type="email"
					id="email"
					name="email"
					required />
				<label for="message"> Message: </label>
				<input
					type="textarea"
					id="message"
					name="message" />
				<input
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
