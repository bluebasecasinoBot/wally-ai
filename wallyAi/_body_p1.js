import {__c,__SYD,__sS,__sC,__m,__g,__p, __u, __v} from './sydneyDom_v2.js'

__sS([
    {
        nameTag:'_body_style',
        style:{
            minHeight:'100%',
            height:'fit-content',
            width:'100%',
            display:'flex',
            alignItems:'center',
            flexDirection:'column',
            alignItems:'center',
            justifyContent:'center',
            rowGap:'20px',
            columnGap:'10px',
            padding:'35px 15px',
            textAlign:'center',
            margin:"40px 0px"
            // transform:'translateY(-20px)'
        }
    }
])

__SYD._p1 = () =>{
    return __c(
        'div',
        {
            style:__sC._body_style({method:'add',style:{rowGap:'30px',height:'fit-content',minHeight:'unset',padding:'50px 0'}})
        },
        [
            __c(
                'div',
                {
                    style:'width:90%;max-width:1000px;position:relative'
                },
                [
                //    __SYD.introVideo(),
                //    __SYD.p1_overlay()
                ],
                {
                    type:'_p1'
                }
            )
        ]
    )
}

setTimeout(() =>{
    __v['_p1'].innerHTML = `<video muted controls style = 'width:100%' loop id="autoplay">
        <source src='./assets/intro.mov' type="video/mp4">
     </video>
     <div style = 'height:50px;width:50px;position:absolute;top:10px;right:10px;border-radius:50%;background-size:70%;background-position:center;background-repeat:no-repeat;cursor:pointer;background-image:url("./assets/aud-d.png")' onclick = 'togMute()' id="aud"></div>`

     document.getElementById('autoplay').play();

},1000)

__SYD.introVideo = () =>{
    return  __c(
        'video',
        {
            style:'width:100%',
            controls:'true',
            // src:__p(['introVideo','url'],),
            autoplay:'autoplay',
            muted:true,
            loop:true

        },[
            __c(
                'source',
                {
                    src:'./assets/intro.mov',
                    type:'video/mp4'
                }
            )
        ],
        {
            createState:{
                stateName:'introVideo',
                state:{url:''}
            },
            events:{
                onloadeddata:(e) =>{
                    // console.log('loaded video');
                    // e.target.play()
                }
            }
        }
    )
}

__SYD.p1_overlay = () =>{
    return __c(
        'div',
        {
            style:`height:100%;width:100%;position:absolute;top:0;left:0;background-image:url("./assets/goatgif2.gif");display:${__p(['p1_overlay','d'],'flex')};justify-content:center;align-items:center`
        },[
            __c('div',{style:'height:120px;width:120px;background-image:url("./assets/playBtn.png");border-radius:50%;background-size:80%',class:'click animate'},
                [],
                {
                    genericStyle:['bg_fit']
                }
            )
        ],{
            genericStyle:['bg_cover'],
            createState:{
                stateName:'p1_overlay',
                state:{d:'flex'}
            },
            events:{
                onclick:() =>{
                    const p1_overlay = __g('p1_overlay');
                    const introVideo = __g('introVideo')
                    p1_overlay.d = 'none';
                    introVideo.url = './assets/intro.mov'
                    __u('introVideo',{type:'a',value:introVideo})
                    __u('p1_overlay',{type:'a',value:p1_overlay});
                }
            },
        }
    )
}