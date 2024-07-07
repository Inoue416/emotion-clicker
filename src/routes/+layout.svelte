<script lang="ts">
    import "$/app.css";
    import Header from "$/features/Header/Header.svelte";
    import type { NaviItem } from "$/types/navi-item/NaviItem";
    const appTitle: string = "Emotion Clicker";
    const appMenu: NaviItem[] = [
        { title: "嬉しさを共有", path: "/" },
        { title: "怒りを発散", path: "/" },
        { title: "使い方", path: "/" },
    ];
</script>
<Header title={appTitle} menu={appMenu}/>
<slot />