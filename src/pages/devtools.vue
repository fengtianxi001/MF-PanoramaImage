<template>
	<div class="devtools">
		<div class="panel">
			<the-image :markers="markers" :src="src"></the-image>
			<the-code :markers="markers"></the-code>
		</div>
		<the-three :markers="markers" :src="src"></the-three>
	</div>
</template>
<script setup lang="ts">
import src from "../assets/texture.jpeg"
// import { fetchURL } from "@/utils/index"
const markers = reactive([])
// const src = ref(fetchURL("../assets/texture.jpeg"))

</script>
<style lang="scss" scoped>
.devtools {
	width: 100vw;
	height: 100vh;
	padding: 10px;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 1.2fr 1fr;
	background-image: url(../assets/desert.jpeg);
	background-size: cover;

	.panel {
		width: 100%;
		height: calc(100vh - 20px);
		display: flex;
		grid-gap: 10px;
		flex-direction: column;

		:deep(.base-panel:nth-child(1)) {
			flex-shrink: 0;
		}

		:deep(.base-panel:nth-child(2)) {
			flex: 1;
		}
	}
}
</style>