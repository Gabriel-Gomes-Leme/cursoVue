import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'
//import Usuario from './components/usuario/Usuario'
//import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioEditar from './components/usuario/UsuarioEditar'
//import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'

// carregar componentes dinamicamente
const Usuario=()=>import(/* webpackChunkName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista=()=>import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioDetalhe=()=>import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioDetalhe')
const UsuarioEditar=()=>import(/* webpackChunkName: "usuario" */'./components/usuario/UsuarioEditar')
Vue.use(Router)
const router=new Router({
    mode:'history',
    scrollBehavior(to, from, savedPosition){ // tem os atributos from e savedPosition
        if (savedPosition){
            return savedPosition;
        }
        else if (to.hash){ // SE a rota de destino tem o hash, retorna...
            return {selector:to.hash} // o seletor é o hash que está na rota de destino
        }   
        else{
            return{x:0, y:0}
        }
    },
    routes:[{
        name:'inicio',
        path:'/',
       // component:Inicio // esse componente será encontrado quando navegar para o barra (/) raiz da aplicação
       components:{
           default:Inicio,
           menu:Menu,

       }
    },
    {
        path:'/usuario',
       // component:Usuario,
        props:true,// significa que todos os parâmetros serão passados por propriedades, o componente usuario receberá uma propriedade chamada Id, por conta dessa flag:true
        children:[ //rotas aninhadas
            {path:'', component:UsuarioLista}, // se colocar barra, vai pra raiz, então foi feito a concatenação do /usuario
            {path:':id', component:UsuarioDetalhe, props:true, beforeEnter:(to, from, next)=>{
                console.log('antes da rota - usuario detalhe')
                next();
            }},
            {path:':id/editar', component:UsuarioEditar, props:true, name:'editarUsuario'},
        ],
        components:{
            default:Usuario,
            menu:MenuAlt,
            menuInferior:MenuAlt,
        }
    },
{
    path:'/redirecionar',
    redirect:'/usuario'
},
{
    path:'*',
    redirect:'/'
}]
})
router.beforeEach((to, from, next)=>{ // antes de cada navegação, chama essa função callback, outra forma de interceptar é dentro da própria rota, acima
    console.log('antes das rotas -> global')
    next();
   /* if (to.path!=='/usuario'){
        next('/usuario')
    }
    else{
        next();
    } */
})
export default router;