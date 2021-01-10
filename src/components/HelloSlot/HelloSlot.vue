<template>
    <div>
        <div>HelloSlot</div>
        <slot v-for="item in list" :item="item"></slot>
    </div>
</template>

<style src="./HelloSlot.scss" lang="scss" scoped></style>
