<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
</script>

<Sample>
    <p>
        <span class="quot quot_start">«</span>Lorem ipsum dolor sit amet consectetur adipisicing elit.<span class="quot quot_end">»</span>
    </p>
</Sample>

<style>
    p {
        margin: 0 1em;
        border: 1px solid;
        font-size: 24px;
    }

    .quot {
        position: absolute;
    }

    .quot_start {
        transform: translateX(-100%);
    }
</style>
