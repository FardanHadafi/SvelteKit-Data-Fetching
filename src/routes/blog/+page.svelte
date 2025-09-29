<script lang="ts">
	let { data } = $props();
</script>

<h1>Blog</h1>

<ul>
	{#each data.summaries as { slug, title }}
		<li><a href="/blog/{slug}">{title}</a></li>
	{/each}
</ul>

<style>
	h1 {
		font-size: 50px;
		margin: auto;
		width: 100px;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	li {
		margin: 20px;
	}

	li a {
		font-weight: bold;
	}
</style>
