<template>
	<div class="base-panel">
		<div class="base-panel__inner">
			<div class="base-panel__header">
				<div class="logo">
					<img src="@/assets/logo.png" alt="" />
					<span class="title">{{ title }}</span>
				</div>
				<div class="buttons">
					<template v-for="(button, index) in buttons" :key="index">
						<el-tooltip effect="dark" :content="button.tip" placement="bottom-end">
							<div class="panel-button">
								<i :class="button.icon"></i>
							</div>
						</el-tooltip>
					</template>
				</div>
			</div>
			<div class="base-panel__body">
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import { PanelButtonType } from "#/index";
interface PropsType {
	title: string,
	buttons?: Array<PanelButtonType>
}
const props = defineProps<PropsType>()
</script>
<style lang="scss" scoped>
.base-panel {
	width: 100%;
	// height: 100%;
	border-radius: 2px;
	padding: 4px;
	box-shadow: 2px 1px 20px #00000054;
	overflow: hidden;
	background-color: transparent;

	.base-panel__inner {
		width: 100%;
		height: 100%;
		// max-height: calc(100vh - 30px);
		// background-color: #fff;
		border-radius: 2px;
		// border: 1px solid #dfdfdf;
		overflow: hidden;

		.base-panel__header {
			height: 45px;
			color: #bebebe;
			font-size: 18px;
			font-weight: 700;
			padding: 0 10px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			user-select: none;
			background-color: #fff;

			.logo {
				display: flex;
				align-items: center;

				img {
					width: 25px;
					height: 25px;
					margin-right: 6px;
				}

				.title {
					color: #3a42f5;
					font-weight: bolder;
					font-size: 16px;
				}
			}

			.buttons {
				display: flex;
				align-items: center;
				grid-column-gap: 6px;

				.panel-button {
					width: 24px;
					height: 24px;
					// background-color: #dedede;
					border-radius: 2px;
					color: #5a9cf8;
					border: 1px solid #dedede;
					// background-color: red;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
					font-size: 12px;
				}
			}
		}

		.base-panel__body {
			width: 100%;
			height: calc(100% - 45px);
			padding: 0px 10px 10px 10px;
			background-color: #fff;
		}

	}
}
</style>