<template>
	<Html lang="en">
		<Body :class="['page-' + route.name]">
			<Overlay></Overlay>
			<div
				class="relative flex flex-wrap"
				:class="{ 'mobile-menu-open': data.mobileMenuOpen }">
				<HeaderMain @mobileMenuClick="onMobileMenuClick" />
				<div class="wrap-inner w-full overflow-hidden">
					<StickySidebar />
					<slot />
				</div>

				<Footer />
			</div>
			<HeaderMobileMenu></HeaderMobileMenu>
		</Body>
	</Html>
</template>

<script setup>
const route = useRoute();

const { isMobile } = useScreenSize();

const data = reactive({
	mobileMenuOpen: false,
});
const onMobileMenuClick = (payload) => {
	data.mobileMenuOpen = payload;
	console.log(data.mobileMenuOpen);
};
const isMobileMenuOpen = computed(() => {
	return data.mobileMenuOpen && isMobile.value;
});

onMounted(() => {
	setTimeout(() => {
		useAnimateObserver();
		useGoToAnchor();
	});
});
</script>
