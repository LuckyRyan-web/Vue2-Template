import Enums from '@/constants'
import { Component, Prop, Vue } from 'vue-property-decorator'
import template from './HelloWorld.vue'
@Component({
    name: 'HelloWorld',
    mixins: [template],
    components: {}
})
export default class HelloWorld extends Vue {
    @Prop({ default: '' })
    protected msg!: string

    protected test: ApiTypes.user.UserInfo = {
        id: '1',
        name: '1'
    }

    protected name = Enums.HttpResponseCode.Success
}
