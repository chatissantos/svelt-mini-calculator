<script lang="ts">
	import {screenDigitsWritable} from './store';
	let screenDigits = '0';
	const watch = screenDigitsWritable.subscribe((value) => {
		screenDigits = value;
	});
</script>

<div class="container">
	<div class="line">
		{#each Array.from(screenDigits) as digit}
			<div>{digit}</div>
		{/each}
	</div>
</div>

<style>
	.container {
		height: 190px;
		display: flex;
		justify-content: right;
		max-width: 100%;
		margin-bottom: 10px;
	}
	.line {
		height: 100%;
		display: flex;
		align-items: flex-end;
		justify-content: right;
		flex-wrap: wrap;
		color: #fff;
		padding: 10px;
		font-size: 3rem;
		width: 100%;
		max-width: 100%;
	}
</style>
