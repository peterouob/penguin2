import {defineStore} from 'pinia'

const userStore = defineStore("user",{
    persist:true,
    strict: true,
    state:()=>{
        return{
            login:false,
            power:0,
            finish:false,
            timeRemaining:3*60*60,
            teamName:"",
            finishBtn:false,
        }
    }
})

const story1Store = defineStore("story1",{
    persist:true,
    state:()=>{
        return{
            popcorn:false,
            yiu:false,
            magic:false,
            dagon:false,
            yisuiping:false,
            twtea:false,

        //    none img
            sea:false,
            ziouz:false,
            sanling:false,
            stone1:false,
        }
    }
})

const story2Store = defineStore('story2',{
    persist:true,
    state:()=>{
        return{
            clue1:false,
            ans1:false,
            mouseCum:false,
            yingfa:false,
            sizhoungname:false,
            teachername:false,
            book:false,
            penclebox:false,
            not:false,
            stone2:false,

        }
    }
})

const story3Store = defineStore('story3',{
    persist:true,
    state:()=>{
        return{
            goodM:false,
            goodDrink:false,
            apple:false,
            tree:false,
            water:false,
            badM:false,
            stone3:false
        }
    }
})

const story4Store = defineStore('story4',{
    persist:true,
    state:()=>{
        return{
            punch:false,
            egg:false,
            clown:false,
            wiz:false,
            happy:false,
            big:false,
            oi:false,
            black:false,
            ant:false,
            stone4:false
        }
    }
})

const story5Store = defineStore('stroy5',{
    persist:true,
    state:()=>{
        return{
            three:false,
            zero:false,
            sorry:false,
            wood:false,
            small:false,
            smallclue:false,
            blue:false,
            pinan:false,
            dance:false,
            sqhy:false,
            tchiling:false,
            stone5:false

        }
    }
})
export {userStore,story1Store,story2Store,story3Store,story4Store,story5Store}