<template>
    <div class="home">
        <img alt="Vue logo" src="../../assets/logo.png" />
        <hello-world msg="Welcome to Your Vue.js + TypeScript App">
            <template #header>
                header
            </template>

            <template #footer>
                footer
            </template>
            <!-- <div slot="header">
                header
            </div>
            <div slot="footer">
                footer
            </div> -->
        </hello-world>

        <hello-slot v-slot="slotProps">
            <div>{{ slotProps }}</div>
        </hello-slot>
    </div>
</template>

<style src="./Home.scss" lang="scss" scoped></style>
