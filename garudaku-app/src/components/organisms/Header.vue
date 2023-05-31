<script>
import Logo from '../atoms/Logo.vue';

export default {
    name: "Header",
    components: {
        Logo
    }
}
</script>

<template>
    <div style="display: flex; justify-content: space-between; margin-left: 20px; margin-right: 20px;">
        <Logo/>
        <h2>Wikarsa Hamdany</h2>
    </div>
</template>