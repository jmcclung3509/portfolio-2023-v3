<template>
	<Html lang="en">
		<Body :class="['page-' + route.name]">
			<Overlay></Overlay>
			<div
				class="relative flex flex-wrap"
				:class="{ 'mobile-menu-open': isMobileMenuOpen}">
				<HeaderMain @mobileMenuClick="onMobileMenuClick" />
				<div class="wrap-inner w-full overflow-hidden">
					<StickySidebar />
					<slot />
				</div>

			</div>
			<HeaderMobileMenu :class="{ 'mobile-menu-open': isMobileMenuOpen }"></HeaderMobileMenu>
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

};
const isMobileMenuOpen = computed(() => {

	return data.mobileMenuOpen && isMobile.value;
});


onMounted(() => {
	setTimeout(() => {
		useAnimateObserver();
		useGoToAnchor();
	}, 100);
});
onUpdated(() => {
	setTimeout(() => {
		useAnimateObserver();
		useGoToAnchor();
	}, 100);
});
</script>
