<script lang="ts">
	let { data } = $props();
	$inspect(data);
</script>

<h1>{data.title}</h1>
<p>{data.content}</p>

<a href="/">Go to Home Page</a>
<a href="/blog">Go to blog entry point</a>
