<template>

<svg width="71" height="61" viewBox="0 0 120 100"
				preserveAspectRatio="xMidYMid meet"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				ref="svg">
				<g transform="translate(25, 5)">
				<path
					d="M49.2784 23.4491C50.2782 18.2023 51.2702 12.9477 52.27 7.70093L49.2784 23.4491Z"
					fill="white" />
				<path
					class="right-attenna"
					d="M49.2784 23.4491C50.2782 18.2023 51.2702 12.9477 52.27 7.70093"
					stroke="#301F40"
					stroke-miterlimit="10" />
				<path
					class="right-attenna"
					d="M49.5807 0.384857C48.1547 1.43112 48.9065 4.32964 49.8985 5.88741C50.1775 6.32916 51.1462 7.82493 52.2777 7.70093C53.5487 7.56142 54.2695 5.4379 54.3393 4.01189C54.3703 3.39964 54.4323 2.12862 53.5255 1.13661C52.5025 0.020604 50.6115 -0.35915 49.5885 0.384857H49.5807Z"
					fill="#301F40" />
				<path
					class="left-attenna"
					d="M70.1804 17.218C70.9632 15.9548 72.8309 14.6682 74.6134 15.3425C75.9 15.823 76.9075 17.2258 76.737 18.4658C76.5665 19.7135 75.528 20.4421 74.9234 20.8451C74.6754 21.0078 72.3659 22.5113 70.7384 21.4108C69.9711 20.8916 69.7309 20.0545 69.6767 19.8453C69.3279 18.582 69.9867 17.5203 70.1727 17.218H70.1804Z"
					fill="#301F40" />
				<path
					class="left-attenna"
					d="M56.9355 29.6646C58.1911 27.2931 61.3608 22.1703 67.5532 19.7833C68.8397 19.2873 70.0874 18.9695 71.2422 18.7835"
					stroke="#301F40"
					stroke-miterlimit="10" />
				<path
					d="M58.3151 36.7249C57.5013 41.0185 53.9518 44.351 49.9218 45.4593C49.17 45.6685 46.9922 46.242 44.3805 45.6375C39.3274 44.4828 33.3831 39.112 34.6851 32.2377C35.8554 26.0763 42.0942 22.0851 48.6198 23.3251C53.262 24.2086 55.9513 27.6186 56.2536 28.0449C56.8658 28.8974 59.1521 32.3152 58.3151 36.7249Z"
					fill="#301F40" />
				<path
					d="M36.5684 36.6707C38.5911 34.8107 43.5202 37.6395 44.4424 38.1665C46.5427 39.3755 50.7045 42.3748 50.007 44.661C49.6737 45.7538 48.3717 46.2343 46.8837 46.7846C45.3259 47.3581 41.7144 48.6988 38.7616 46.5985C36.1731 44.7618 35.9019 41.5843 35.8244 40.6C35.7081 39.2592 35.5686 37.5852 36.5761 36.663L36.5684 36.6707Z"
					fill="#FFF4F0" />
				<path
					class="stinger"
					d="M20.9597 75.8629C19.8282 75.1034 19.9677 71.3291 21.9595 70.6161C23.4242 70.0891 25.478 71.3601 25.6485 72.6776C25.8888 74.5764 22.192 76.6921 20.9597 75.8706V75.8629Z"
					fill="#301F40" />
				<path
					d="M43.2416 67.2726C49.6333 60.2703 49.8098 50.0253 43.6358 44.3897C37.4618 38.7541 27.2754 39.8619 20.8837 46.8641C14.492 53.8664 14.3156 64.1114 20.4895 69.747C26.6635 75.3826 36.85 74.2748 43.2416 67.2726Z"
					fill="#FFF4F0" />
				<path
					d="M38.0099 50.5511C39.0561 51.0084 40.8774 51.7756 43.2566 51.5509C45.1554 51.3726 47.7129 50.5356 47.6897 49.6754C47.6664 48.6988 44.3262 48.9158 40.0636 46.8698C34.8246 44.3511 32.6313 40.5303 31.6238 41.189C30.8798 41.6773 31.6005 44.0876 32.1895 45.3741C33.7008 48.6834 36.8008 50.0319 38.0021 50.5589L38.0099 50.5511Z"
					fill="#301F40" />
				<path
					d="M24.3232 43.8706C25.7492 43.1343 28.5548 49.8149 35.9561 54.2402C41.8771 57.782 47.3719 57.875 47.2712 59.1072C47.1937 60.0372 44.0394 60.696 41.5206 60.7347C34.5378 60.8355 26.9737 56.1932 24.641 49.3654C23.9745 47.4124 23.4087 44.3356 24.3232 43.8628V43.8706Z"
					fill="#301F40" />
				<path
					d="M18.8904 50.9929C19.7662 50.5279 22.1609 58.0454 30.2675 62.6722C37.6533 66.8883 44.4347 65.6715 44.4579 66.7255C44.4812 67.9578 35.2896 71.4918 27.958 67.671C19.5802 63.3077 17.8287 51.5431 18.8904 50.9851V50.9929Z"
					fill="#301F40" />
				<path
					class="right-wing right-wing-animation" @mouseover="startAnimation()" @mouseleave="pauseAnimation()"
					d="M43.2335 48.1408C43.652 46.769 46.8295 46.4745 53.1691 45.9475C57.0208 45.6298 60.5084 45.529 65.4839 45.5678C76.5355 45.6608 78.6125 46.3195 80.1703 47.0015C84.3321 48.7995 86.5021 51.3881 87.3004 52.4343C88.5869 54.1238 90.6639 56.8596 89.9896 59.7426C89.2301 63.0132 85.3939 64.5477 83.4951 65.3072C76.2178 68.2212 68.9792 65.7334 65.9334 64.6872C62.1591 63.3929 58.9351 61.1609 52.4948 56.6969C46.2095 52.3413 42.7142 49.8768 43.2412 48.1408H43.2335Z"
					fill="url(#paint0_linear_224_246)"
					stroke="#301F40"
					stroke-miterlimit="10" />
				<path
					class="right-wing right-wing-animation" @mouseover="startAnimation()" @mouseleave="pauseAnimation()"
					d="M63.1822 79.1256C65.7707 77.1261 64.9104 72.4915 64.6779 71.2515C63.9959 67.578 61.9266 65.1057 60.6711 63.6952C59.7566 62.6645 46.6823 48.0478 42.7297 50.7681C39.9707 52.6591 43.2102 61.8817 44.1712 64.6407C45.9072 69.5775 48.1625 72.4915 49.2398 73.7626C50.906 75.7233 52.9288 78.0561 56.3698 79.1954C57.8811 79.6991 61.0741 80.7531 63.1822 79.1334V79.1256Z"
					fill="url(#paint1_linear_224_246)"
					stroke="#301F40"
					stroke-miterlimit="10" />
				<path
					class="left-wing left-wing-animation" @mouseover="startAnimation()" @mouseleave="pauseAnimation()"
					d="M8.45884 2.09764C11.9231 0.152373 16.7824 3.2834 17.6504 3.84141C19.867 5.26742 21.2 7.02669 23.215 10.336C26.935 16.443 29.1903 21.6046 30.159 23.8908C30.3528 24.3481 32.0036 29.5096 35.2896 39.825C36.0569 42.2198 36.4211 43.4288 35.8553 44.01C33.4838 46.4358 19.6189 36.1205 18.4797 35.2679C16.0462 33.4389 14.3334 31.9277 12.6671 30.0832C11.1404 28.3936 9.00135 25.9834 7.35058 22.2711C6.64533 20.6901 5.11081 17.1328 5.15731 12.3355C5.19606 8.96421 5.24257 3.88791 8.4666 2.08214L8.45884 2.09764Z"
					fill="url(#paint2_linear_224_246)"
					stroke="#301F40"
					stroke-miterlimit="10" />
				<path
					class="left-wing left-wing-animation" @mouseover="startAnimation()" @mouseleave="pauseAnimation()"
					d="M3.25855 33.0669C5.00232 31.5634 6.97083 31.2922 7.69159 31.1914C10.4429 30.8117 12.4889 31.9509 17.9449 34.5007C22.7965 36.7637 27.245 39.8482 32.1663 41.964C32.9103 42.2818 34.8556 43.0878 35.0726 44.5525C35.1656 45.1803 34.9098 45.6995 34.8246 45.8623C34.2278 46.9551 32.7786 47.6138 26.1988 48.3036C23.4785 48.5903 22.1067 48.6523 20.6962 48.6213C15.3254 48.5051 11.3574 47.0636 10.1949 46.6296C6.18808 45.1183 3.1268 43.9635 1.75503 40.9488C1.53803 40.476 0.383272 37.9495 1.43728 35.4462C1.96429 34.1907 2.80904 33.4544 3.2508 33.0669H3.25855Z"
					fill="url(#paint3_linear_224_246)"
					stroke="#301F40"
					stroke-miterlimit="10" />
				</g>
				<defs>
					<linearGradient
						id="paint0_linear_224_246"
						x1="66.655"
						y1="45.5599"
						x2="66.655"
						y2="66.6754"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#FBE7E1" />
						<stop
							offset="1"
							stop-color="#E2D1F0" />
					</linearGradient>
					<linearGradient
						id="paint1_linear_224_246"
						x1="53.3215"
						y1="50.4312"
						x2="53.3215"
						y2="80"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#FFF4F0" />
						<stop
							offset="1"
							stop-color="#E2D1F0" />
					</linearGradient>
					<linearGradient
						id="paint2_linear_224_246"
						x1="20.6435"
						y1="1.4679"
						x2="20.6435"
						y2="44.3784"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#FFF4F0" />
						<stop
							offset="1"
							stop-color="#E2D1F0" />
					</linearGradient>
					<linearGradient
						id="paint3_linear_224_246"
						x1="18.0463"
						y1="31.12"
						x2="18.0463"
						y2="48.6286"
						gradientUnits="userSpaceOnUse">
						<stop stop-color="#FFF4F0" />
						<stop
							offset="1"
							stop-color="#E2D1F0" />
					</linearGradient>
				</defs>
			</svg>


</template>
<script setup>
import { ref, onMounted } from 'vue';

const leftWings = ref(null);
const rightWings = ref(null);

const pauseAnimation = () => {
  leftWings.value.forEach((wing) => {
    setTimeout(() => {
      wing.classList.remove("left-wing-animation");
    }, 400);
  });
  rightWings.value.forEach((wing) => {
    setTimeout(() => {
      wing.classList.remove("right-wing-animation");
    }, 400);
  });
};

const startAnimation= ()=>{
	leftWings.value.forEach((wing) => {

      wing.classList.add("left-wing-animation");

  });
  rightWings.value.forEach((wing) => {

      wing.classList.add("right-wing-animation");

  });
}


onMounted(() => {
  leftWings.value = document.querySelectorAll(".left-wing");
  rightWings.value = document.querySelectorAll(".right-wing");
  pauseAnimation()
});
</script>

<style lang="scss">

.left-wing {
	transform-origin: bottom;
	transform-box: fill-box;


	&.left-wing-animation{
		animation: rotateBox1 .2s  infinite ease-in-out;
	}
}
.right-wing {
	transform-origin: bottom;
	transform-box: fill-box;



	&.right-wing-animation{
		animation: rotateBox2 .2s  infinite ease-in-out;
	}
}

@keyframes rotateBox1 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1.0); // Smooth start
  }
  33% {
    transform: rotate(-60deg);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1.0); // Flap fast
  }
  100% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1.0); // Smooth end with ease-out
  }
}

@keyframes rotateBox2 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1.0); // Smooth start
  }
  33% {
    transform: rotate(30deg);
    animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1.0); // Flap fast
  }
  100% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.25, 1, 0.5, 1.0); // Smooth end with ease-out
  }
}
</style>
