<script>
	import NavBar from '$lib/components/NavBar.svelte';
</script>

<svelte:head>
	<title>damn</title>
</svelte:head>
<NavBar />
<div class="container">
	<slot />
</div>

<style>
	/* .container {
		padding: 0.5rem 6rem;
		color: rgba(243, 243, 243, 0.9);
		font-size: 1.5rem;
		text-align: center;
	} */
</style>
