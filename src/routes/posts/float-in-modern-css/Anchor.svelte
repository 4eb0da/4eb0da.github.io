<script lang="ts">
    import Sample from './Sample.svelte';
    import url from './img.svg?url'
</script>

<Sample>
    <img src={url} alt="Демонстрационное изображение">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci ipsum expedita itaque sapiente eveniet voluptate amet nihil! Laudantium voluptatibus, temporibus odio tempora amet sit est animi culpa esse voluptas.

    <div class="tooltip">
        Tooltip
    </div>

    <div class="clearfix"></div>
</Sample>

<style>
    img {
        width: 75px;
        height: 50px;
        float: left;
        margin: 0 10px 0 0;
        anchor-name: --float;
    }

    .tooltip {
        background-color: var(--bg-primary);
        border: 3px solid var(--accent);
        padding: 10px;
        border-radius: 10px;
        font-size: 1rem;
        
        position-anchor: --float;
        position: fixed;
        position-area: right center;
        margin-left: 10px;
    }

    .clearfix {
        clear: both;
    }
</style>
