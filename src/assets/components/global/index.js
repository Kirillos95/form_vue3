import Uinput from './Uinput.vue'
import UFile from './UFile.vue'
import UChecbox from './UChecbox.vue'
import URadio from './URadio.vue'

const components  = [                       // добавляем компоненты в список 
    {name: 'Uinput', component: Uinput},
    {name: 'UFile', component: UFile},
    {name: 'UChecbox', component: UChecbox},
    {name: 'URadio', component: URadio}
]

export default {                            //экспортируем компоненты
    install(app) {
    components.forEach(({name, component}) => {
        app.component(name, component)
    })
    }
}