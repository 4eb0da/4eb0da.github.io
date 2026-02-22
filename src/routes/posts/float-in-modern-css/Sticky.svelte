<script lang="ts">
    import Sample from '$lib/components/Sample.svelte';
    import url from './img.svg?url'
</script>

<Sample>
    <div class="parent">
        <img src={url} alt="Демонстрационное изображение">

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci ipsum expedita itaque sapiente eveniet voluptate amet nihil! Laudantium voluptatibus, temporibus odio tempora amet sit est animi culpa esse voluptas.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, ratione rem consequatur sequi ab cumque ex, harum vero quasi corrupti id rerum? Enim, sapiente voluptate. Impedit eaque voluptatem porro neque?
    </div>

    <div class="clearfix"></div>
</Sample>

<style>
    .parent {
        overflow-y: scroll;
        height: 100px;
    }

    img {
        position: sticky;
        top: 0;
        width: 75px;
        height: 50px;
        float: left;
        margin: 0 10px 0 0;
        background: var(--bg-primary);
    }

    .clearfix {
        clear: both;
    }
</style>
