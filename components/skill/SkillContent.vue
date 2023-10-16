<template>
	<div class="flex flex-col items-start space-y-14">
		<div class="paragraph">
			<slot name="paragraph"/>
		</div>
		<div class="bullet-section ">
			<ul class=" ">
				<slot name="list-items"/>
			</ul>

		</div>
	</div>
</template>