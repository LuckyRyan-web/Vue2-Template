import { Component, Prop, Vue, Inject } from 'vue-property-decorator'
import template from './HelloSlot.vue'

@Component({
    name: 'HelloSlot',
    mixins: [template],
    components: {}
})
export default class HelloSlot extends Vue {
    protected list = [1, 2, 3]

    @Prop({ default: '' })
    protected msg!: string

    // @Prop({ default: '' })
    // protected count!: number
}
