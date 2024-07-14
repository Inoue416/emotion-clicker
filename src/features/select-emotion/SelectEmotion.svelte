<script lang="ts">
    export let title: string;
    export let description: string;
</script>

<div class="hero bg-base-200 min-h-screen">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">{title}</h1>
        <p class="py-6">
          {description}
        </p>
        <slot />
      </div>
    </div>
  </div>