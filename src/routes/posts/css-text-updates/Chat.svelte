<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
</script>

<Sample>
    <div class="message">
        <div class="main">
            Многострочное сообщение
        </div>
        <div class="clone">
            Многострочное сообщение
        </div>
    </div>
</Sample>

<style>
    .message {
        position: relative;
        max-width: 170px;
        margin: 2em auto;
        padding: 10px 20px;
        /* font-size: 32px; */
        background: var(--accent);
        color: #000;
        border-radius: 20px 20px 0 20px;
    }

    .main {
        background-color: rgba(128, 0, 128, 0.305);
    }

    .clone {
        top: 10px;
        left: 20px;
        position: absolute;
        width: min-content;
        background: var(--accent);
    }
</style>
