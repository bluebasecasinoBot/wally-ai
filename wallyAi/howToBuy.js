import { __c , __SYD, __sC, __p} from "./sydneyDom_v2.js"



__SYD.buyToken = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({
                method:'add',style:{
                    height:'fit-content',
                    justifyContent:'flex-start',
                    background:'transparent',
                    padding:'20px 10px',
                    gap:"20px"
                }
            }),
            id:'buyGuide'
        },
        [
            __c('h1',{class:"" , style:`color:#fff;font-family:sunrise;font-weight:900;padding:10px 0;font-weight:700;font-size:${__p(['buyToken','__size'],'4rem')}`},['How To Buy']),
            // __SYD.how_to_buy_opening(),
            __c(
                "div",
                {
                    style:"display:flex;gap:50px;height:fit-content;width:100%;justify-content:center;flex-wrap:wrap;"
                },
                [
                    __SYD.buy_tabs(
                        {content:`You’ll need a cryptocurrency wallet to store and trade your Wally Ai` ,title:`Set Up a Crypto Wallet` , index:"01" , img:"wallet"}
                    ),
                    __SYD.buy_tabs({
                        content:`Choose your desired token and enter the amount you wish to purchase.`,title:`Select Token and Amount`,
                        index:"02" , img:"stake"
                    }),
                    __SYD.buy_tabs({
                        content:`Click “Buy Now” and follow the on-screen instructions from your wallet`,title:`Buy and Stake $Wally`,index:"03" , img:"buy"
                    })
                ]
            )
        ],
        {
            createState:{
                stateName:'buyToken',
                state:{__size:'4.5rem',__flex_child:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem'}},{size:'<700px',prop:{__flex_child:'column'}}],
                defState:{__size:'4.5rem',__flex_child:'row'}
            }
        }
    )
}

__SYD.buy_tabs = ({title = '' , content = '' , index = "01" , img = "basePlus2"}) =>{
    return __c(
        'div',
        {
            style:'width:100%;max-width:400px;height:fit-content;border-radius:30px;',
            class:"tabs_3d"
        },
        [
            __c("div",{class:"count" , style:"font-family:sunrise;"},[`${index}`]),
            __c(
                'div',
                {
                    style:`height:fit-content;min-height:250px;padding:10px 20px;width:100%;background:unset;display:flex;align-items:${__p(['buyToken','__flex_child'],'row') === 'row' ? 'center' : 'flex-start'};column-gap:20px;row-gap:20px;flex-direction:column;`
                },
                [
                    __c(
                        "img",
                        {
                            style:"width:100%;height:auto;",
                            src:`./assets/${img}.png`
                        }
                    ),
                    __c(
                        'div',
                        {
                            style:'width:100%;display:flex;flex-direction:column;gap:10px;'
                        },
                        [
                            __c('p',{style:'font-size:20px;text-align:center;text-transform:capitalize;color:#fff;font-family:sunrise;font-weight:700;margin-bottom:15px;'},[title]),
                            __c('p',{style:'font-size: 1rem;line-height: 1.75rem;text-align:center;font-weight:500;color:#fff'},[
                                content
                            ])
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.how_to_buy_opening = () =>{
    return __c('p',{style:'font-size:18px;line-height: 1.75rem;text-align:center;max-width:500px;font-weight:700;'},[
        `Getting Kodak Blue is easy. Load up on Base ETH, swap on a Base DEX, and boom—you’re part of the movement. Stack it, flex it, or ride it to the moon. 🌊💎`
    ])
}