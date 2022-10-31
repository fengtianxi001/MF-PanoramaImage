<template>
	<base-panel title="点位信息" :buttons="buttons">
		<div class="the-code">
			<el-table :data="markers" style="width: 100%" border>
				<!-- <el-table-column type="index" width="55" align="center" /> -->
				<el-table-column prop="name" label="名称" align="center" width="70px" >
					<template #default="scope">
						<el-tag>{{ scope.row.name }}</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="coordinates" label="2D坐标" align="center" width="120px">
					<template #default="scope">
						<el-tag>{{ scope.row.coordinates_2d }}</el-tag>
					</template>
				</el-table-column>
				<el-table-column prop="coordinates" label="3D坐标" align="center" >
					<template #default="scope">
						<el-tag>{{ scope.row.coordinates_3d }}</el-tag>
					</template>
				</el-table-column>
				<el-table-column fixed="right" label="操作" align="center" width="55px">
					<template #default>
						<!-- <el-button link type="primary" size="small">提示</el-button> -->
						<!-- <el-button link type="primary" size="small">编辑</el-button> -->
						<el-button link type="primary" size="small">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
		</div>
	</base-panel>
</template>
<script setup lang="ts">
import { markerType } from "#/index";
interface PropsType {
	markers: Array<markerType>,
}
const props = defineProps<PropsType>()
const buttons = [
	{
		icon: "mfs mf-save",
		tip: "保存点位",
		click: () => { }
	}
]
</script>
<style lang="scss" scoped>
.the-code {
	width: 100%;
	height: 100%;
	overflow: scroll;
	background-color: #fff;
}
</style>