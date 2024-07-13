<script lang="ts">
    export let buttonClass;
    export let path;
    export let buttonText;
    export let onClick;
</script>

{#if path === ""}
<button class="{buttonClass}"><a href={path}>{buttonText}</a></button>
{:else}
<button class="{buttonClass}" on:click={onClick}>{buttonText}</button>
{/if}