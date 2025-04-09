import { __SYD, __c, __sC, __p, __g, __u } from "./sydneyDom_v2.js";


__SYD.demos = () =>{
    return __c(
        "div",
        {
            style:__sC._body_style({
                method:'add',style:{
                    minHeight:'fit-content',
                    // backgroundColor:'green',
                    justifyContent:'center',
                    alignItems:"center",
                    padding:'20px 10px',
                    margin:"20px 0",
                    flexWrap:"wrap",
                    flexDirection:"row"
                }
            }),
            id:"demo_utils"
        },
        [
            __c('h1',{class:"" , style:`color:#fff;font-family:sunrise;font-weight:900;padding:10px 0;font-weight:700;font-size:${__p(['demos','__size'],'4.5rem')}`},['Wally Ai Utilities']),
            __c("div",
                {
                    style:"height:fit-content;width:100%;display:inherit;justify-content:inherit;gap:20px;align-items:inherit;flex-wrap:inherit;"
                },
                [
                    __SYD.createMiniAuxTabs({i_class:"fa-brands fa-android" , text:"Wally AI Casino Bot" , link:"https://t.me/Wally_ai_casino_bot"}),
                    __SYD.createMiniAuxTabs({i_class:"fa-brands fa-magento" , text:"Wally AI agent" , link:"/agent/agent_creation/create.html"}),
                    __SYD.createMiniAuxTabs({i_class:"fa-solid fa-file-signature" , text:"Smart Contract Deploy" , link:""})
                ]
            ),
            
        ],
        {
            createState:{
                stateName:'demos',
                state:{__size:'4.5rem',__flex_child:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem'}},{size:'<700px',prop:{__flex_child:'column'}}],
                defState:{__size:'4.5rem',__flex_child:'row'}
            }
        }
    )
}

__SYD.features_sec = () =>{
    return __c(
        "div",
        {
            style:__sC._body_style({
                method:'add',style:{
                    minHeight:'fit-content',
                    justifyContent:'center',
                    alignItems:"center",
                    padding:'20px 10px',
                    margin:"20px 0",
                    flexWrap:"wrap",
                    flexDirection:"row"
                }
            }),
            id:"demo_features"
        },
        [
            __c('h1',{class:"" , style:`color:#fff;font-family:sunrise;font-weight:900;padding:10px 0;font-weight:700;font-size:${__p(['features_sec','__size'],'4.5rem')}`},['Wally Ai Features']),
            __c(
                "div",
                {
                    style:"height:fit-content;width:100%;display:inherit;justify-content:inherit;gap:20px;align-items:inherit;flex-wrap:inherit;"
                },
                [
                    __SYD.createMiniAuxTabs__features({title:"🎲 BasePulse Casino Bot" , text:"Play on-chain games directly in Telegram with provably fair outcomes and instant payouts."}),
                    __SYD.createMiniAuxTabs__features({title:"🧠 AI Agent Builder" , text:"Create custom AI bots to trade, moderate, analyze, or entertain — no coding required."}),
                    __SYD.createMiniAuxTabs__features({title:"⚡ Smart Contract Deployer" , text:"Generate and deploy secure smart contracts in minutes with guided AI assistance."}),
                    __SYD.createMiniAuxTabs__features({title:"🔁 Recursive AI Creation" , text:"AI that builds AI — deploy intelligent agents that evolve and learn over time."}),
                    __SYD.createMiniAuxTabs__features({title:"🛠️ No-Code Dev Tools" , text:"Drag-and-drop UI and AI-guided prompts make dApp building accessible to everyone."}),
                    __SYD.createMiniAuxTabs__features({title:"🔄 Real-Time On-Chain Execution" , text:"Every action is recorded on-chain for transparency, speed, and decentralization."}),
                    __SYD.createMiniAuxTabs__features({title:"🏪 AI Bot Marketplace" , text:"Buy, sell, or rent AI bots built by the community to power your own projects."}),

                ]
            )
        ],
        {
            createState:{
                stateName:'features_sec',
                state:{__size:'4.5rem',__flex_child:'row'}
            },
            mediaQuery:{
                query:[{size:'<900px',prop:{__size:'3rem'}},{size:'<700px',prop:{__flex_child:'column'}}],
                defState:{__size:'4.5rem',__flex_child:'row'}
            }
        }
    )
}

__SYD.createMiniAuxTabs = ({i_class , text , link}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;width:${__p(['auxSection__featureMain' , 'resize'], false) ? "100%" : "fit-content"};padding:30px;border-radius:15px;display:flex;gap:16px;justify-content:flex-start;align-items:center;cursor:pointer;box-shadow:2px 1px 0px #fff;background:#246696;`,
            class:`glassMorph_btn smooth_hover ${__p(['auxSection__featureMain' , 'animateTb'], false) ? "tabs_progress_animate" : ""}`
        },
        [
            __c("i" , {style:"font-size:40px;color:#fff;font-weight:900;height:40px;min-width:40px;" , class:`${i_class}`}),

            __c(
                "p",
                {
                    style:"font-size:17px;text-transform:capitalize;color:rgb(255, 255, 255);"
                },
                [
                    `${text}`
                ]
            )
        ],
        {
            events:{
                onclick: () =>{
                    location.href = `${link}`
                }
            }
        }
    )
}



__SYD.createMiniAuxTabs__features = ({title , text}) =>{
    return __c(
        "div",
        {
            style:`height:fit-content;max-width:350px;width:${__p(['auxSection__featureMain' , 'resize'], false) ? "100%" : "fit-content"};padding:30px;border-radius:15px;display:flex;gap:16px;justify-content:flex-start;align-items:center;cursor:pointer;box-shadow:2px 1px 0px #246696;background: #fff;flex-direction:column;`,
            class:`expand glassMorph_btn smooth_hover ${__p(['auxSection__featureMain' , 'animateTb'], false) ? "tabs_progress_animate" : ""}`
        },
        [
            __c(
                "p",
                {
                    style:"font-size:18px;font-weight:700;text-transform:capitalize;color:#246696;width:100%;text-align:left;"
                },
                [
                    `${title}`
                ]
            ),

            __c(
                "p",
                {
                    style:"font-size:16px;font-weight:500;text-transform:capitalize;color:#246696;text-align:left;"
                },
                [
                    `${text}`
                ]
            )
        ]
    )
}
