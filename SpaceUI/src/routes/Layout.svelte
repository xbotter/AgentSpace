<svelte:head>
	<script src="//unpkg.com/simplebar@latest/dist/simplebar.min.js"></script>
	<script src="//cdn.jsdelivr.net/npm/simplebar@latest/dist/simplebar.min.js"></script>
</svelte:head>
<script>
  import VerticalLayout from "../routes/VerticalLayout/Index.svelte";

  let layoutType = "vertical";
  let component = VerticalLayout;
</script>

<svelte:component this={component}>
  <slot />
</svelte:component>