<script>
	import logo from '$lib/images/calclogo.png';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner">
		<a href="#">
			<img src={logo} alt="SvelteKit" />
		</a>
	</div>

	<div class="corner">
		<a href="https://github.com/chatissantos/svelte-mini-calculator">
			<img src={github} alt="GitHub" />
		</a>
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	.corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
