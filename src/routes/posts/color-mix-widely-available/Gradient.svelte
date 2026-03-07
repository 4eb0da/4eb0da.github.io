<script lang="ts">
</script>

<div class="group">
    <div class="gradient gradient_2">
        oklab
    </div>
    <div class="gradient gradient_1">
        oklch
    </div>
    <div class="gradient gradient_0">
        srgb
    </div>
</div>

<style>
    .group {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .gradient {
        box-sizing: border-box;
        display: flex;
        align-items: center;
        height: 32px;
        padding: 8px;
    }

    .gradient_0 {
        background: linear-gradient(to right in srgb, blue, red);
    }

    .gradient_1 {
        background: linear-gradient(to right in oklch, blue, red);
    }

    .gradient_2 {
        background: linear-gradient(to right in oklab, blue, red);
    }
</style>
