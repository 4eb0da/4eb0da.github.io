<script lang="ts">
</script>

<div class="group">
    <div class="gradient gradient_0">
        shorter hue
    </div>
    <div class="gradient gradient_1">
        longer hue
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
        background: linear-gradient(to right in oklch shorter hue, blue, red);
    }

    .gradient_1 {
        background: linear-gradient(to right in oklch longer hue, blue, red);
    }
</style>
