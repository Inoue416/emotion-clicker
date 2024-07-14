<script lang="ts">
    import SelectEmotion from "$/features/select-emotion/SelectEmotion.svelte";
    import SelectEmotionButton from "$/features/select-emotion-button/SelectEmotionButton.svelte";
    import type { SelectEmotionButtonInterface } from "$/types/select-emotion/SelectEmotion";

    let happyButtonClass = "btn btn-accent mr-5";
    let angryButtonClass = "btn btn-secondary";
    let happyButtonText = "Happy!!";
    let angryButtonText = "Angry!!";
    let happyPath = "/";
    let angryPath = "/";
    let title = "Emotion Clicker";
    let description = "嬉しいこと、怒りをボタン連打で発散しよう！\n下のボタンからモードを選択してね。";

    let happyButtonProps: SelectEmotionButtonInterface = {
        buttonClass: happyButtonClass,
        buttonText: happyButtonText,
        path: happyPath,
        onClickEvent: () => {}
    };

    let angryButtonProps: SelectEmotionButtonInterface = {
        buttonClass: angryButtonClass,
        buttonText: angryButtonText,
        path: angryPath,
        onClickEvent: () => {}
    };
</script>

<SelectEmotion title={title} description={description}>
    <SelectEmotionButton 
        happyButtonProps={happyButtonProps}
        angryButtonProps={angryButtonProps}
        
    />
</SelectEmotion>