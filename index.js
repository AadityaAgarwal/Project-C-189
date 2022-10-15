AFRAME.registerComponent(
    "bike",{
        init:function(){
            var gamestate=this.el.getAttribute("gamestate");
            if(gamestate=='play'){
                this.driving()
            }
        },
        driving:function(){
            rot=0;
            window.addEventListener('keydown',function(e){
                handle=document.querySelector("#bike_entity");
                cam=document.querySelector("#camera");

                if(e.code=='ArrowRight'){
                    rot-=5;
                    handle.setAttribute('rotation',{x:0,y:-95,z:rot})
                    cam.setAttribute('rotation',{x:0,y:-95,z:rot})
                }
                if(e.code=='ArrowLeft'){
                    rot+=5;
                    handle.setAttribute('rotation',{x:0,y:-95,z:rot})
                    cam.setAttribute('rotation',{x:0,y:-95,z:rot})
                }
                
            })
        }
    },
    
    )