<script lang="ts">
    import Sample from './Sample.svelte';
    import url from './circle.svg?url'
</script>

<Sample>
    <img src={url} alt="Демонстрационное изображение">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci ipsum expedita itaque sapiente eveniet voluptate amet nihil! Laudantium voluptatibus, temporibus odio tempora amet sit est animi culpa esse voluptas.

    <div class="clearfix"></div>
</Sample>

<style>
    img {
        width: 75px;
        height: 75px;
        float: left;
        margin: 0 10px 0 0;
        shape-outside: circle(50%);
    }

    .clearfix {
        clear: both;
    }
</style>
