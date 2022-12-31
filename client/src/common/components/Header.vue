<template>
    <header class="app-header">
        <div class='flex items-center'>
            <h1 class="inline-block my-0 mr-4 font-semibold text-xl">Blogging</h1>
            <nav class='flex'>
                <router-link class='mr-2' to="/">Home</router-link>
                <router-link class="mr-2" to="/about">About</router-link>
            </nav>
        </div>
        <div>
            <router-link class='btn mr-2' to="/signup">Sign up</router-link>
            <router-link class='btn-secondary' to='/login'>Login</router-link>
        </div>
    </header>
</template>

<script lang="ts" setup>

</script>

<style scoped>
.app-header {
    border-bottom: 1px solid var(--primary-gray);
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px;
}

.app-header__title {
    font-size: 1.5rem;
}
</style>