import {createRouter,createWebHistory} from 'vue-router'
import Index from '../views/index.vue'
import Main from '../views/main.vue'
import IncT from '../components/IncT.vue'
import DecT from '../components/DecT.vue'
import Bag from '../views/bag.vue'
import Qrcode from '../components/QRcode.vue'
import Finish from '../components/finsh.vue'

//
import Script1 from '../script/story1/script.vue'
import Popcorn from  '../script/story1/1-1/popcorn.vue'
import  Sea from '../script/story1/1-1/sea.vue'
import  Dagon from '../script/story1/1-2/dagon.vue'
import  Magic from '../script/story1/1-2/magic.vue'
import  Twtea from '../script/story1/1-2/twtea.vue'
import  Yisuiping from '../script/story1/1-2/yisuiping.vue'
import  Yiu from '../script/story1/1-2/yiu.vue'
import  Ziouz from '../script/story1/1-2/ziouz.vue'
import  Sanling from '../script/story1/1-3/sanling.vue'

//
import Clue from '../script/story2/2-1/clue1.vue'
import Pencli from '../script/story2/2-2/pencil.vue'
import Book from '../script/story2/2-2/book.vue'
import Siz from '../script/story2/2-2/sizhoungname.vue'
import Teachername from '../script/story2/2-2/teachername.vue'
import Yingfa from '../script/story2/2-2/yingfa.vue'
import Not from '../script/story2/2-3/not.vue'
import Script2 from '../script/story2/script.vue'
import Apple from '../script/story3/3-1/apple.vue'
import Bad from '../script/story3/3-1/bad.vue'
import Gooddrink from '../script/story3/3-1/gooddrink.vue'
import Tree from '../script/story3/3-1/tree.vue'
import Water from '../script/story3/3-1/water.vue'
import Good from '../script/story3/3-2/good.vue'
import Script3 from '../script/story3/script.vue'
import Black from '../script/story4/4-1/black.vue'
import Big from '../script/story4/4-2/big.vue'
import Egg from '../script/story4/4-2/egg.vue'
import Oi from '../script/story4/4-2/oi.vue'
import Ant from '../script/story4/4-3/ant.vue'
import Clown from '../script/story4/4-3/clown.vue'
import Punch from '../script/story4/4-3/punch.vue'
import Happy from '../script/story4/4-4/happy.vue'
import Wiz from '../script/story4/4-4/happy.vue'
import Script4 from '../script/story4/script.vue'
import Blue from '../script/story5/5-1/blue.vue'
import Small from '../script/story5/5-1/small.vue'
import Dance from '../script/story5/5-2/dance.vue'
import Pingan from '../script/story5/5-2/pingan.vue'
import Sqhy from '../script/story5/5-2/sqhy.vue'
import Wood from '../script/story5/5-2/wood.vue'
import Clue2 from '../script/story5/5-3/clue.vue'
import Sorry from '../script/story5/5-3/sorry.vue'
import Three from '../script/story5/5-3/three.vue'
import Zero from '../script/story5/5-3/zero.vue'
import Script5 from '../script/story5/script.vue'
const routes = [
    {
        path:'/',
        name:'Index',
        component:Index
    },
    {
        path: '/main',
        name:'Main',
        component: Main
    },
    {
        path: '/incT',
        name:'IncT',
        component: IncT,
    },
    {
        path: '/decT',
        name:'DecT',
        component: DecT
    },
    {
        path: '/bag',
        name:'Bag',
        component: Bag,
    },
    {
        path: '/qrcode',
        name:'qrcode',
        component: Qrcode,
    },
    {
        path: '/finish',
        name:'finish',
        component: Finish
    },

    //story1
    {
        path:'/s1',
        name:'s1',
        component:Script1,
    },
    {
        path: '/popcorn',
        name: 'popcorn',
        component: Popcorn
    },
    {
        path: "/sea",
        name: "sea",
        component: Sea
    },
    {
        path: "/dagon",
        name:"dagon",
        component:Dagon
    },
    {
        path: "/magic",
        name:"magic",
        component:Magic
    },
    {
        path: "/twtea",
        name:"twtea",
        component:Twtea
    },
    {
        path: "/yisuiping",
        name:"yisuiping",
        component:Yisuiping
    },
    {
        path: "/yiu",
        name:"yiu",
        component:Yiu
    },
    {
        path: "/ziouz",
        name:"ziouz",
        component:Ziouz
    },
    {
        path: "/sanling",
        name:"sanling",
        component:Sanling
    },
    //
    {
        path: '/clue1',
        name: 'clue',
        component: Clue
    },
    {
        path: '/book',
        name: 'Book',
        component: Book
    },
    {
        path: '/pencli',
        name: 'Pencli',
        component: Pencli

    },
    {
        path: '/sizhoungname',
        name: 'Sizhoungname',
        component: Siz

    },
    {
        path: '/teachername',
        name: 'Teachername',
        component:Teachername

    },
    {
        path: '/not',
        name: 'not',
        component:Not

    },
    {
        path: '/yinfa',
        name: 'Yinfa',
        component: Yingfa

    },
    {
        path: '/script',
        name: 'Script',
        component: Script2

    },
    {
        path: '/apple',
        name: 'Apple',
        component: Apple

    },
    {
        path: '/bad',
        name: 'Bad',
        component: Bad

    },
    {
        path: '/gooddrink',
        name: 'Gooddrink',
        component: Gooddrink

    },
    {
        path: '/tree',
        name: 'Tree',
        component: Tree
    },
    {
        path: '/water',
        name: 'Water',
        component: Water
    },
    {
        path: '/good',
        name: 'Good',
        component: Good
    },
    {
        path: '/script3',
        name: 'Script3',
        component: Script3
    },
    {
        path: '/black',
        name: 'Black',
        component: Black
    },
    {
        path: '/big',
        name: 'Big',
        component: Big
    },
    {
        path: '/egg',
        name: 'Egg',
        component: Egg
    },
    {
        path: '/oi',
        name: 'Oi',
        component: Oi
    },
    {
        path: '/ant',
        name: 'Ant',
        component: Ant
    },
    {
        path: '/clown',
        name: 'Clown',
        component: Clown

    },
    {
        path: '/punch',
        name: 'Punch',
        component: Punch

    },
    {
        path: '/happy',
        name: 'Happy',
        component: Happy

    },
    {
        path: '/wiz',
        name: 'Wiz',
        component: Wiz

    },
    {
        path: '/script4',
        name: 'Script4',
        component: Script4

    },
    {
        path: '/blue',
        name: 'Blue',
        component: Blue

    },
    {
        path: '/small',
        name: 'Small',
        component: Small

    },
    {
        path: '/dance',
        name: 'Dance',
        component: Dance

    },
    {
        path: '/pingan',
        name: 'Pingan',
        component: Pingan

    },
    {
        path: '/sqhy',
        name: 'Sqhy',
        component: Sqhy

    },
    {
        path: '/wood',
        name: 'Wood',
        component: Wood

    },
    {
        path: '/clue2',
        name: 'Clue',
        component: Clue2

    },
    {
        path: '/sorry',
        name: 'Sorry',
        component: Sorry

    },
    {
        path: '/three',
        name: 'Three',
        component: Three

    },
    {
        path: '/zero',
        name: 'Zero',
        component: Zero

    },
    {
        path: '/script5',
        name: 'Script5',
        component: Script5

    }

]

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router