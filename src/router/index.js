import { createRouter, createWebHistory} from "vue-router";
// this is where all the routes function are defined in vue
// this is where all the routeing rules are defined in vue
import Homeview from '../view/Homeview.vue';
import Aboutview from '../view/Aboutview.vue';
const routes = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:Homeview
        },
        {
            path:'/about',
            name:'about',
            component:Aboutview
        }
    ]
});

export default routes;