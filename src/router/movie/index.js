export default {
    path : '/movie',
    component : () => import('@/views/Movie'),
    children : [
        {
            path : 'city',
            component : () => import('@/components/City')
        },
        {
            path : 'nowPlaying',
            component : () => import('@/components/NowPlaying')
        },
        {
            path : 'comingSoon',
            component : () => import('@/components/ComingSoon')
        },
        {
            path : 'search',
            component : () => import('@/components/Search')
        },
        {
            path : 'detail/1/:movieId',
            components : {
                default : ()=> import('@/components/NowPlaying'),
                detail : ()=> import('@/views/Movie/detail')
            },
            props : {
               
                detail : true//路由组件传参路由组件传参,将movieId传给组件
            }
        },
        {
            path : 'detail/2/:movieId',
            components : {
                default : ()=> import('@/components/ComingSoon'),
                detail : ()=> import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        {
            path : 'detail/search/:movieId',
            components : {
                default : ()=> import('@/components/Search'),
                detail : ()=> import('@/views/Movie/detail')
            },
            props : {
                detail : true
            }
        },
        {
            path : '/movie',
            redirect : '/movie/nowPlaying'
        }
    ] 
}