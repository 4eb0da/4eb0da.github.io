<script lang="ts">
    import Sample from './Sample.svelte';
</script>

<Sample>
    <div class="parent">
        <div class="parent__label">
            parent
        </div>

        <div class="float">float</div>
    </div>

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
        margin: 0 10px;
        border: 2px solid var(--accent);
        border-radius: 4px;
        font-size: 20px;
    }

    .clearfix {
        clear: both;
    }

    .parent {
        position: relative;
        padding: 20px;
        border: 2px solid;
    }

    .parent__label {
        position: absolute;
        top: 4px;
        right: 4px;
    }
</style>
