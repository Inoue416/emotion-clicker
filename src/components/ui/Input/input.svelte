<script>
    export let placeholder: string;
    export let type: "text" | "password" | "email" | "number";
</script>

<input type={type} placeholder={placeholder} class="input input-bordered w-full max-w-xs" />