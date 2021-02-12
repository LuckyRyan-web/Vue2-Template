import { Component, Vue, Provide } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld/HelloWorld' // @ is an alias to /src
import HelloSlot from '@/components/HelloSlot/HelloSlot'
import template from './Home.vue'

@Component({
    name: 'Home',
    mixins: [template],
    components: {
        HelloWorld,
        HelloSlot
    }
})
export default class Home extends Vue {}
