<template>
    <header class="app-header">
        <div class='flex items-center'>
            <h1 class="inline-block my-0 mr-4 font-semibold text-xl">Blogging</h1>
            <nav class='flex'>
                <A class='mr-2' href="/">Home</A>
                <A class="mr-2" href="/about">About</A>
            </nav>
        </div>
        <div>
            <A class='btn mr-2' href="/signup">Sign up</A>
            <A class='btn-secondary' href='/login'>Login</A>
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