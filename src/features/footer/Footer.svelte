<script lang="ts">
    export let copyrightText: string;
</script>

<footer class="footer footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © ${new Date().getFullYear()} - {copyrightText}</p>
    </aside>
</footer>