<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
</script>

<Sample>
    <div class="float float_1">1</div>
    <div class="float float_2">2</div>
    <div class="float float_3">3</div>
    <div class="float float_4">4</div>

    <div class="clearfix"></div>
</Sample>

<style>
    .float {
        float: left;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border: 2px solid var(--accent);
        border-radius: 4px;
        font-size: 20px;
    }

    .float_1 {
        width: 100px;
        height: 100px;
    }

    .float_2 {
        width: 150px;
        height: 90px;
    }

    .float_3 {
        width: 150px;
    }

    .clearfix {
        clear: both;
    }
</style>
