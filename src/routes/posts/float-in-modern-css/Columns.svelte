<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
</script>

<Sample>
    <div class="parent">
        <div class="float">
            float
        </div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </div>

    <div class="clearfix"></div>
</Sample>

<style>
    .parent {
        columns: 2;
        height: 75px;
    }

    .float {
        width: 10px;
        height: 100px;
        float: left;
        margin: 0 10px 0 0;
        object-fit: cover;
        /* background: no-repeat 50% 50% url(./circle.svg);
        background-size: cover; */
        border: 10px solid var(--accent);
        border-radius: 10px;
        word-break: break-all;
        font-size: 10px;
    }

    .clearfix {
        clear: both;
    }
</style>
