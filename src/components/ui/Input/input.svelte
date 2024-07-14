<script lang="ts">
    import type { InputType } from "$/types/input-emotion/InputEmotion";
    export let placeholder: string;
    export let type: InputType;
</script>

<input type={type} placeholder={placeholder} class="input input-bordered w-full max-w-xs" />