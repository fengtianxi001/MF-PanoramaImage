<template>
	<base-panel title="全景图片" :buttons="buttons">
		<div class="container" ref="container">
		</div>
	</base-panel>
	<base-dialog />
</template>
<script setup lang="ts">
import { markerType } from "#/index";
import { useImage } from "@/hooks/useImage"
interface PropsType {
	markers: Array<markerType>,
	src: string
}
const props = defineProps<PropsType>()
const container = ref()
const buttons = [
	{
		icon: "mfs mf-reply",
		tip: "撤销上一步",
		click: () => { }
	},
	{
		icon: "mfs mf-image",
		tip: "导入图片",
		click: () => { }
	}
]
const { canvas } = useImage(container, props.markers, props.src)
console.log(canvas)
</script>
<style lang="scss" scoped>
.container {
	overflow: scroll;
	width: 100%;
	height: 100%;
	font-size: 0px;
}
</style>