import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v, createElement} from './sydneyDom_v2.js';

__sS(
    {
        nameTag:'_social_style',
        style:{
            minHeight:'50px',
            minWidth:'50px',
            cursor:'pointer',
            borderRadius:'50%',
            // backgroundColor:"",
            borderRadius:"50%",
            backgroundSize:"60%",
            boxShadow:"2px 1px 0px #000"
        }
    }
)

__SYD._p2 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    flexDirection:__p(['_p2','_flex'],'row'),
                    transform:'unset',
                    // marginBottom:'20px',
                    alignItems:'flex-start',
                    // paddingTop:"70px"
                    // marginTop:"unset"
                }
            })
        },
        [
            __c(
                'div',
                {
                    style:`min-height:fit-content;height:100%;width:${__p(['_p2','_flex'],'row') === 'row' ? '60%' : '100%'};background:unset;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px;padding:0 10px;`
                },
                [
                    __c(
                        "div",
                        {
                            style:"padding:0 15px;display:flex;flex-direction:column;row-gap:10px;width:100%;align-items:center;"
                        },
                        [
                            __c('h1',{class:'',style:`color:#fff;font-weight:900;text-align:center;width:100%;font-family:sunrise;font-size:${__p(['_p2','__font'],{1:'80px'})['1']};`},['Wally AI']),
                            __c(
                                'div',
                                {
                                    style:`height:500px;width:100%;background-image:url("./assets/basePlus.png");background-size:contain;`,class:""//url("./assets/goatx.jpg")
                                },[],
                                {
                                    genericStyle:['bg_cover'],
                                }
                            ),
                            __c(
                                "div",
                                {
                                    style:"display:flex;gap:10px;flex-wrap:wrap;justify-content:center;width:100%;"
                                },
                                [
                                    __SYD.btns__dex_buy({text:"Explore Features" , link:"#demo_features"}),
                                    __SYD.btns__dex_buy({text:"View Utilities" , link:"#demo_utils"}),
                                ]
                            ),
                            __SYD.page1Socials()
                            
                        ]
                    ),
                ]
            )
        ],
        {
            createState:{
                stateName:'_p2',
                state:{_flex:'row',__font:{1:'80px',2:'50px'}}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{_flex:'column-reverse',__font:{1:'60px',2:'40px'}}}],
                defState:{_flex:'row',__font:{1:'80px',2:'50px'}}
            }
        }
    )
}

__SYD.btns__dex_buy = ({text , link}) =>{
    return __c(
        'div',
        {
            style:'width:fit-content;padding:10px 0;display:flex;align-items:center;gap:20px;flex-wrap:wrap;justify-content:center;'
        },
        [
            __c('a',{href:link,target:'blank',style:`display:${__p(['navBar','__nav_d'],'flex')};text-decoration:none;min-width:fit-content;height:80%;width:fit-content;align-items:center;padding:25px 30px;color:#fff;border-radius:7px;justify-content:space-between;border:3px solid #fff;gap:30px;transition:all linear .3s;`,class:'btns_style mainBtn'},[
                __c("p" , {style:"min-width:fit-content;font-weight:900;text-shadow:1px 1px 0px #000;"},[`${text}`]),
                __c("i" , {style:"font-size:16px;display:flex;align-items:center;justify-content:center;height:30px;min-width:40px;border:2px solid;border-radius:5px;" , class:"fa-solid fa-arrow-right"}),
            ])
        ]
    )
}

__SYD.page1Socials = () =>{
    return __c(
        'div',
        {
            style:'width:100%;padding:10px 0;display:flex;justify-content:center;align-items:center;column-gap:20px;row-gap:20px;flex-wrap:wrap'
        },
        [
            // __SYD.page1SocialBtn({contentSrc:'dex' , link:location.href}),
            __SYD.page1SocialBtn({contentSrc:'tel' , link:"https://t.me"}),
            __SYD.page1SocialBtn({contentSrc:'x' , link:"https://x.com/wallyai_base"})
        ]
    )
}

__SYD.page1SocialBtn = ({contentSrc,link = '#'}) =>{
    return __c(
        'div',
        {//url('./assets/${contentSrc}.png') ,
            style:__sC._social_style({method:'add',style:{background:` url('./assets/${contentSrc}.png') ,radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3), transparent 40%),linear-gradient(to bottom, #5ccafc, #2fb0f6 40%, #1998dd 80%, #0e7ab8);background-size:contain;background-repeat:no-repeat;background-position:center;`}}),
            class:'click'
        },
        [],
        {
            genericStyle:['bg_fit'],
            events:{
                onclick:() =>{
                    window.location = link
                }
            }
        }
    )
}

__SYD.KodakBlue_learnMore = () =>{
    return __c(
        "div",
        {
            style:`display:flex;flex-direction:row;width:100%;height:fit-content;gap:20px;padding:10px;padding-left:0px;flex-wrap:${__p(['KodakBlue_learnMore' , 'wrap'],"no-wrap")}`
        },
        [
            __c(
                "div",
                {
                    style:"height:fit-content;min-height:20px;width:100%;display:flex;flex-direction:row;gap:10px;align-items:flex-start;padding:5px;"
                },
                [
                    __c("span" , {style:"min-height:30px;min-width:30px;background-image:url(./assets/globe.png);"},[],{genericStyle:['bg_fit']}),
                    __c("p" , {style:"font-weight:700;text-align:left;"} , ["Kodak ain’t just a rapper—he’s a whole wave."])
                ]
            ),
            __c(
                "div",
                {
                    style:"height:fit-content;min-height:20px;width:100%;display:flex;flex-direction:row;gap:10px;align-items:flex-start;padding:5px;"
                },
                [
                    __c("span" , {style:"min-height:30px;min-width:30px;background-image:url(./assets/globe.png);"},[],{genericStyle:['bg_fit']}),
                    __c("p" , {style:"font-weight:700;text-align:left;"} , ["From the studio to the blockchain, Kodak Black is always ahead."])
                ]
            )
        ],
        {
            createState:{
                stateName:"KodakBlue_learnMore",
                state:{wrap:"no-wrap"}
            },
            mediaQuery:{
                query:[
                    {size:'<500px',prop:{wrap:"wrap"}},
                    {size:'>500px',prop:{wrap:"no-wrap"}},
                ],
                defState:{
                    wrap:"no-wrap"
                }
            }
        }
    )
}

__SYD.about_text_p2= () =>{
    return __c('p',{style:'font-size: 18px;line-height: 1.75rem;text-align:left;font-weight:700;width:100%;color:#fff;'},[
        `Welcome to Kodak Blue the slickest, bluest meme, coin, splashing onto basechain , straight Outta the genius of rap King, Kodak, Black spelled, K-O-D-A-K this ain’t just a coin it’s A vibe .`
    ])
}
