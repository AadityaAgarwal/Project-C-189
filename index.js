AFRAME.registerComponent(
    "bike", {

    init: function () {
        var gamestate = this.el.getAttribute("gamestate");
        // if(gamestate=='play'){
        this.driving()
        // }
    },
    driving: function () {
        var rot = 0;
        var pos = 0;
        var pos1;
        var bike_rot = -95;
        window.addEventListener('keydown', function (e) {
            bike = document.querySelector("#bike_entity");
            cam = document.querySelector("#camera-controls");

            cam_rot = cam.getAttribute("rotation");
            cam_pos = cam.getAttribute("position");
            cam_speed = cam.getAttribute("movement-controls");

            cam_direction = new THREE.Vector3();
            cam.object3D.getWorldDirection(cam_direction);
            city = document.querySelector("#City");
            city_pos = city.getAttribute("position");
            city_rot=city.getAttribute("rotation");

            if (e.key == 'ArrowRight') {
                bike_rot += 1;
                cam_rot.y -= 10;
                cam_rot.z -= 5;
                cam.setAttribute('rotation', { x: 0, y: 90, z: 0 });

                // cam.setAttribute('movement-controls', { 'speed': cam_speed.speed + 0.005 });
                // bike.setAttribute('rotation', { x: 0, y: bike_rot, z: 0 });
            }
            if (e.key == 'ArrowLeft') {
                bike_rot -= 1;
                cam_rot.y += 5;
                 cam.setAttribute('rotation', { x: 0, y: cam_rot.y, z: 0 });

                // console.log(city_rot.y)
                // cam.setAttribute('movement-controls', { 'speed': cam_speed.speed + 0.005 });

            }
            if (e.key == 'ArrowUp') {
                pos += 0.5;
                pos1 = pos * pos * -1;
                if (pos <= 100 && cam_pos.z >= -500) {
                    cam.setAttribute('movement-controls', { 'speed': cam_speed.speed + 0.005 });
                    // handle.setAttribute('position', { x: 0, y: -1, z: pos })
                    // cam.setAttribute('position', { x: 49, y: 2, z: pos })
                }
            }
        })

    }
},

);

AFRAME.registerComponent("terrain", {
    schema: {
        rot_speed: { type: 'number', default: 0 },
    },
    init: function () {
        window.addEventListener('keydown', e => {
            if (e.key === "ArrowRight") {
                this.data.rot_speed -= 0.5;
            }
            if (e.key === "ArrowLeft") {
                this.data.rot_speed += 0.5;
            }
        })
    },
    tick: function () {
        var rot = this.el.getAttribute("rotation");
        rot.y += this.data.rot_speed;
        this.el.setAttribute("rotation", {
            x: rot.x,
            y: rot.y,
            z: rot.z,
        });
    }
});
AFRAME.registerComponent("timer",{
    schema:{
        game_state:{type:"string",default:"start"},
    },
    init:function(){
        counter=document.querySelector("#counter");
        this.startTimer(counter);
    },
    startTimer:function(c){
        var min,sec;
        duration=0
        setInterval(()=>{
            this.data.game_state="start";
            duration++;
            // console.log(duration);
            min=parseInt(duration/60);
            sec=parseInt(duration%60);
            if(min<10){
                min="0"+min;
            }
            if(sec<10) sec="0"+sec;
            
            console.log(sec);
            c.setAttribute('text',{value:min+":"+sec});
        },
        100
        )
        
    },
})