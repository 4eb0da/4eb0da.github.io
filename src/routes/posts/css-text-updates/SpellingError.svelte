<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
</script>

<Sample>
    <p>
        Lorem <span class="spelling-error">ipsum dolor sit amet</span> consectetur <span class="grammar-error">adipisicing elit</span>.
    </p>
</Sample>

<style>
    p {
        margin: 0;
    }

    .spelling-error {
        text-decoration: spelling-error;
    }

    .grammar-error {
        text-decoration: grammar-error;
    }
</style>
