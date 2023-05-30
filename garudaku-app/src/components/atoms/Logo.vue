<script>

export default {
    name: "Logo",
}
</script>

<template>
    <div>
        <img id="logoPix" src="../../assets/logos/garudaku.png" class="main-logo" />
        <h1>Garudaku</h1>
    </div>
</template>

<style lang="scss" scoped>
div {
    font-family: 'Orca-Chase', sans-serif;
    display: flex;
}

h1{
    color: red;
    text-shadow: 2px 1px 5px rgb(171, 171, 171);
    transition: .5s;
    cursor: pointer;
    align-self: center;
}

h1:hover{
    color: rgb(255, 194, 194);
}

$logo-size : 5em;

.main-logo {
    width: $logo-size;
    transform: rotate(-20deg);
}

.main-logo:hover {
    filter: hue-rotate(50deg);
    animation: logoAnim 2s infinite;
}

@keyframes logoAnim {
    0% {
        transform: rotate(-20deg);
    }

    50% {
        transform: rotate(40deg);
    }

    100% {
        transform: rotate(-20deg);
    }
}
</style>