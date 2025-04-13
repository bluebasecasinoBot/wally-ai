import { __SYD, __c, __sC, __p } from "./sydneyDom_v2.js";


__SYD.comm = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    backgroundImage:'url("./assets/howToBuy.jpeg")',
                    // flexDirection:__p(['comm','__flex'],'row'),
                    justifyContent:'center',
                    alignItems:"center",
                    // backgroundAttachment:"fixed",
                    padding:'20px 10px',
                    backgroundPosition:"left bottom",
                    marginBottom:"unset",
                    minHeight:"unset"
                    // transform:'unset'
                }
            }),
            id:'about'
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;width:100%;display:flex;flex-direction:${__p(['comm','__flex'],'row')};justify-content:flex-start;max-width:1600px;background:transparent;border-radius:15px;`
                },
                [
                    // __c(
                    //     'div',
                    //     {
                    //         style:`min-height:${__p(['comm','__size'],'4.5rem') === '4.5rem' ? '80vh' : '300px'};min-width:${__p(['comm','__size'],'3rem') === '3rem' ? '60%' : '100%'};border-radius:15px;display:flex;justify-content:center;align-items:center;flex-direction:column;row-gap:20px;padding:20px 30px;`
                    //     },
                    //     [
                    //         __SYD.ca_section()
                    //     ]
                    // ),
                    __c(
                        'div',
                        {
                            style:'width:100%;height:fit-content;display:flex;justify-content:flex-start;align-items:center;flex-direction:column;gap:20px;background:transparent;border-radius:inherit;border-top-left-radius:unset;border-bottom-left-radius:unset;'
                        },
                        [
                            __c('h1',{class:'',style:`height:fit-content;width:100%;text-align:center;padding-left:10px;font-family:sunrise;font-weight:700;font-size:${__p(['comm','__size'],'4.5rem')};color:#fff;`},['RoadMap']),
                            __SYD.comm_text(),
                            __c("div" , {style:"margin-top:30px;min-height:100%;height:fit-content;width:100%;position:relative;display:flex;flex-direction:column;gap:10px;"},[
                                __c("div" , {style:"height:100%;width:12px;position:absolute;top:0px;left:50%;transform:translateX(-50%);background:linear-gradient(to right, rgb(8, 30, 50),rgb(18, 61, 92),rgb(80, 130, 170),rgb(18, 61, 92),rgb(8, 30, 50));" , class:"rod"}),
                                __SYD.h_t_buy_imgTemplate({index:1 , titleText:`
Launched the idea & smart contract

Built the brand, website, and socials

Kicked off community and viral memes
                                `}),
                                __SYD.h_t_buy_imgTemplate({type:"right" , index:2 , titleText:
                                    `
Listed on Uniswap (DEX)

Dropped WallyBot v0.1 (AI meme bot)

Hit 1,000 holders with NFT airdrops

Listed on CoinGecko & CoinMarketCap
                                    `
                                }),
                                __SYD.h_t_buy_imgTemplate({index:3 , titleText:
                                    `
Upgraded WallyBot with smarter features

Released merch

Targeted CEX listings

Funded mini dev projects through Wally Labs
                                    `
                                }),
                                __SYD.h_t_buy_imgTemplate({type:"right" , index:4 , titleText:
                                    `
Tested WallyChain (L2 concept)

Launched mini-games & meme competitions

Built an NFT marketplace for community creators
                                    `
                                })
                            ])
                        ]
                    )
                ]       
            )
        ],
        {
            genericStyle:["bg_cover"],
            createState:{
                stateName:'comm',
                state:{__size:'4.5rem',__flex:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem',__flex:'column'}}],
                defState:{__size:'4.5rem',__flex:'row'}
            }
        }
    )
}

__SYD.h_t_buy_imgTemplate = ({type = "left" , index , titleText}) =>{
    return __c(
        "img",
        {
            style:`position:sticky;left:50%;height:auto;width:50%;max-width:300px;transform:translateX(${type === "right" ? "-100%" : "0%"})`,
            src:`./assets/tab${index}.png`,
            title:titleText
        },
        [

        ],
        {

        }
    )
}

__SYD.comm_text = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:left;font-weight:700;color:#fff;'},[
        `Connect wallet, bridge ETH to Base, and swap for $Wally on Uniswap.`
    ])
}

__SYD.ca_section = () =>{
    return __c(
        'div',
        {style:'display:flex;flex-direction:column;width:100%;gap:20px;align-items:center;text-align:left'},
        [
            __c('h1',{class:'',style:`width:100%;text-align:left;border-left:8px solid #fff;padding-left:10px;font-family:sunrise;font-weight:700;font-size:${__p(['comm','__size'],'3rem')};color:#fff;`},['Contract Address']),
            __c(
                'div',
                {
                    style:`padding:30px 10px;width:100%;font-family:sticker;font-size:${__p(['_p2','_flex'],'row') === 'row' ? '20px' : '13px'};font-weight:900;text-align:center;cursor:pointer;color:#fff;border-radius:15px;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;`,
                    class:"ca_button_3d"
                },
                [
                    '-------------------------------------'
    
                ],
                {
                    events:{
                        onclick:() =>{
                            navigator.clipboard.writeText('-------------------------------------')
                            __v['c_a'].textContent = 'Contract Address Copied'
    
                            const timer = setTimeout(() =>{
                            __v['c_a'].textContent = '-------------------------------------'
                            clearTimeout(timer)
                            },1500)
                        }
                    },
                    type:'c_a'
                }
            ),
            __c('h1',{class:'',style:`width:100%;text-align:left;border-left:8px solid #fff;padding-left:10px;font-family:sunrise;font-weight:700;font-size:${__p(['comm','__size'],'3rem')};color:#fff;`},['Buy Coin Now']),
        ]
    )
}
