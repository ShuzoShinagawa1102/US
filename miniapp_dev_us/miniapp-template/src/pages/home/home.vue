<template>
	<view>
		<!-- こちらがパッケージ化後、ミニアプリ上で動作するパスの指定 -->
		<!-- ※なお、このパスの指定方法だと、Webブラウザ（Chrome、Safari等）では404 not foundが出る。 -->
		<!-- <web-view :webview-styles="webviewStyles" src="/hybrid/html/local.html"></web-view> -->

		<!-- こちらがお手持ちのPCで開発時、Webブラウザで動作するパスの指定 -->
		<!-- ※なお、このパスの指定方法だと、パッケージ化後、ミニアプリで動作させるとuni-appの動作不能エラーが出る。 -->
		<web-view :webview-styles="webviewStyles" src="/hybrid/html/home.html"></web-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		}
	}
</script>

<style>

</style>