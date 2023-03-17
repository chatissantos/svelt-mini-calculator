<script lang="ts">
	import Screen from './Screen.svelte';
	import Key from './Key.svelte';
</script>

<div class="container">
	<Screen />
	<div class="line">
		<Key type="clear" value="C" />
		<Key type="back-space" value="<-" />
		<Key type="operator" value="%" />
		<Key type="divide" value="/" />
	</div>
	<div class="line">
		<Key type="number" value="7" />
		<Key type="number" value="8" />
		<Key type="number" value="9" />
		<Key type="times" value="X" />
	</div>
	<div class="line">
		<Key type="number" value="4" />
		<Key type="number" value="5" />
		<Key type="number" value="6" />
		<Key type="minus" value="-" />
	</div>
	<div class="line">
		<Key type="number" value="1" />
		<Key type="number" value="2" />
		<Key type="number" value="3" />
		<Key type="plus" value="+" />
	</div>
	<div class="line">
		<Key type="number" value="0" />
		<Key type="period" value="." />
		<Key type="equal" value="=" />
	</div>
</div>

<style>
	.container {
		margin: 1rem 0;
		background-color: #2d2d2d;
		padding: 1em;
		border-radius: 30px;
		width: 300px;
	}
	.line {
		display: flex;
		gap: 1em;
		margin-top: 1em;
	}

</style>
