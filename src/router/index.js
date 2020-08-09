import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/Index'
import Direct from '@/views/Direct/Index'
import Explode from '@/views/Explode/Index'
import Profile from '@/views/Profile/Index'
import IGTV from '@/views/Profile/IGTV'
import Save from '@/views/Profile/Save'
import Tag from '@/views/Profile/Tag'
import Settings from '@/views/Profile/Settings'
import Post from "@/views/Profile/Post"

Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/direct',
        name: 'Direct',
        component: Direct
    }, {
        path: '/explore',
        name: 'Explore',
        component: Explode
    }, {
        path: '/profile',
        name: 'Profile',
        component: Profile,
        children: [
            {
                path: '',
                name: 'ProfilePost',
                component: Post
            },
            {
                path: 'igtv',
                name: 'ProfileIGTV',
                component: IGTV
            },
            {
                path: 'save',
                name: 'ProfileSave',
                component: Save
            },
            {
                path: 'tag',
                name: 'ProfileTag',
                component: Tag
            }
        ]
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
