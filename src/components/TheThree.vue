<template>
	<base-panel title="全景场景" :buttons="buttons">
		<div class="three" ref="threeRef"></div>
	</base-panel>
</template>
<script setup lang="ts">
import { markerType } from "#/index";
import { useThree } from "@/hooks/useThree"
interface PropsType {
	markers: Array<markerType>,
	src: string
}
const props = defineProps<PropsType>()
const threeRef = ref()
const buttons =[
	{
		icon: "mfs mf-arrow-alt-left",
		tip: "上一个点位",
		click: () => { }
	},
	{
		icon: "mfs mf-arrow-alt-right",
		tip: "下一个点位",
		click: () => { }
	},
]
useThree(threeRef, props.markers, props.src)
</script>
<style lang="scss" scoped>
.three {
	width: 100%;
	height: 100%;
	background-color: red;
}
</style>