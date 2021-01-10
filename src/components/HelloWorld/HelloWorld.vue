<template>
    <div class="hello">
        <div>
            <slot name="header"></slot>
            <div>{{ msg }}</div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style src="./HelloWorld.scss" lang="scss" scoped></style>
