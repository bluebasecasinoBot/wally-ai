import { __SYD, __c, __sC, __p, __g, __u } from "./sydneyDom_v2.js";


__SYD._p3 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundColor:'rgba(36, 102, 150, 0.74) ',
                    // flexDirection:__p(['_p3','__flex'],'row'),
                    justifyContent:'center',
                    alignItems:"center",
                    padding:'20px 10px',
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                "div",
                {
                    style:`min-height:80vh;height:100%;width:100%;display:flex;flex-direction:${__p(['_p3','__flex'],'row')};justify-content:flex-start;max-width:1200px;border-radius:15px;background-image:url("./assets/about.png");`
                },
                [
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px;'
                        },
                        [
                            __c('h1',{class:'',style:`width:100%;text-align:center;padding-left:10px;font-family:sunrise;font-weight:700;font-size:${__p(['_p3','__size'],'4.5rem')};color:#fff;`},['ABOUT']),
                            __c(
                                "div",
                                {
                                    style:"height:500px;width:100%;display:flex;gap:5px;flex-direction:column;align-items:center;justify-content:center;padding:20px 50px;border-radius:7px;position:relative;background-image:url('./assets/frame.png')"
                                },
                                [
                                    __SYD.about_text_header(),
                                    __SYD.about_text(),
                                    // __SYD.about_text2(),
                                    __c("i" , {style:"position:absolute;top:50%;left:5px;transform:translateY(-50%);height:35px;width:35px;border-radius:50%;font-size:18px;display:flex;justify-content:center;align-items:center;border:2px solid;" , class:"fa-solid fa-arrow-left"},[],{events:{onclick:()=>{__p(["_p3" , "slideLeft"],()=>{})()}}}),
                                    __c("i" , {style:"position:absolute;top:50%;right:5px;transform:translateY(-50%);height:35px;width:35px;border:2px solid;border-radius:50%;font-size:18px;display:flex;justify-content:center;align-items:center;" , class:"fa-solid fa-arrow-right"},[],{events:{onclick:()=>{__p(["_p3" , "slideRight"],()=>{})()}}}),
                                    // __c("img" , {style:"width:100%;height:auto" , src:`./assets/aboutScroll${__p(["_p3" , "textCount"],0)}.png`})
                                ],
                                {
                                    genericStyle:["bg_fit"]
                                }
                            ),
                        ]
                    ),
                    __c(
                        'div',
                        {
                            style:`min-height:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['_p3','__size'],'4.5rem') === '4.5rem' ? '40%' : '100%'};background-image:url("./assets/basePlus2.png");background-size:contain;border-radius:15px;`
                        },
                        [
                            
                        ],
                        {
                            genericStyle:['bg_cover'],
                        }
                    )
                ],{genericStyle:["bg_cover"]}      
            )
        ],
        {
            createState:{
                stateName:'_p3',
                state:{
                    __size:'4.5rem',
                    __flex:'row',
                    textCount:0,
                    textArray:[
                        "Wally AI DEI is a mischievous yet innovative AI on Base Chain, merging advanced blockchain tech with playful engagement.",
                        "A decentralized gambling platform featuring provably fair games (dice, slots, poker) with Wally’s signature humor and surprises.",
                        "Instantly creates custom AIs for DeFi, gaming, or social interactions—each infused with Wally’s personality.",
                        "Simplifies EVM contract deployment for DeFi, NFTs, and DAOs, combining security with user-friendly execution."
                    ],
                    textTopArray:[
                        "The Mischievous Genius of Base Chain",
                        "🎰 The Casino Bot: Where Fun Meets Fairness",
                        "🤖 AI Factory: Crafting Custom Blockchain Companions",
                        "EVM Architect: Deploying Contracts with a Wink"
                    ],
                    getText:() =>{
                        return 
                    },
                    slideLeft:() =>{
                        const state = __g("_p3");
                        state.animateText = true;
                        state.textCount > 0 ? state.textCount-- : {};
                        __u("_p3" , {type:"a" , value:state});

                        __p(["_p3" , "deactivateAnimation"],()=>{})()
                    },
                    slideRight:() =>{
                        const state = __g("_p3");
                        state.animateText = true;
                        state.textCount < 3 ? state.textCount++ : {};
                        __u("_p3" , {type:"a" , value:state});

                        __p(["_p3" , "deactivateAnimation"],()=>{})()
                    },
                    deactivateAnimation:() =>{
                        let timer = setTimeout(() => {
                            clearTimeout(timer);

                            const state = __g("_p3");
                            state.animateText = false;
                            __u("_p3" , {type:"a" , value:state});
                        }, 1000);
                    },
                    animateText:true
                }
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem',__flex:'column'}}],
                defState:{__size:'4.5rem',__flex:'row'}
            }
        }
    )
}


__SYD.about_text_header = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:center;font-weight:700;font-family:sunrise;' , class:`${__p(["_p3" , "animateText"],true) ? "opacAnimate" : ""}`},[
        `${__p(["_p3" , "textTopArray"],["The Mischievous Genius of Base Chain"])[__p(["_p3" , "textCount"],0)]}`
    ])
}


__SYD.about_text = () =>{
    return __c('p',{style:'font-size:16px;text-align:center;font-weight:700;max-width:400px;font-family:sticker;' , class:`${__p(["_p3" , "animateText"],true) ? "opacAnimate" : ""}`},[
        `${__p(["_p3" , "textArray"],["Wally AI DEI is a mischievous yet innovative AI on Base Chain, merging advanced blockchain tech with playful engagement."])[__p(["_p3" , "textCount"],0)]}`
    ])
}

__SYD.about_text2 = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:center;font-weight:700;text-indent: 2em;'},[
        `Why blue? Because Basechain glows cyan, and we’re remixing it with Kodak’s signature street vibes. This ain’t your grandma’s crypto—this is a high-speed flex, a statement, a movement.`
    ])
}