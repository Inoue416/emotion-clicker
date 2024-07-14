<script lang="ts">
    import Button from "$/components/ui/button/Button.svelte";
    import type { SelectEmotionButtonInterface } from "$/types/select-emotion/SelectEmotion";
    export let happyButtonProps: SelectEmotionButtonInterface;
    export let angryButtonProps: SelectEmotionButtonInterface;
</script>

<div class="flex justify-center">
    <div>
        <Button 
            buttonClass={happyButtonProps.buttonClass}
            buttonText={happyButtonProps.buttonText}
            path={happyButtonProps.path}
            onClick={happyButtonProps.onClickEvent}
        />
    </div>
    <div>
        <Button
            buttonClass={angryButtonProps.buttonClass}
            buttonText={angryButtonProps.buttonText}
            path={angryButtonProps.path}
            onClick={angryButtonProps.onClickEvent}
        />
    </div>
</div>