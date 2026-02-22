<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
</script>

<Sample>
    <h1>
        <span class="clone">
            Hello world
        </span>
        Hello world
    </h1>
</Sample>

<style>
    h1 {
        margin: 0;
        padding: 1em 0;
    }

    .clone {
        position: absolute;
        color: transparent;
        text-decoration: 3px underline var(--text-primary);
        animation: inset 1s ease-in-out infinite alternate;
    }

    @keyframes inset {
        from {
            transform: translateX(-10px);
        }
        to {
            transform: translateX(10px);
        }
    }
</style>
