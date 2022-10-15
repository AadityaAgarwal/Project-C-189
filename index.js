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
        window.addEventListener('keydown', function (e) {
            handle = document.querySelector("#bike_entity");
            cam = document.querySelector("#camera");

            if (e.key == 'ArrowRight') {
                rot -= 5;
                handle.setAttribute('rotation', { x: rot, y: -95, z: 0 })
                cam.setAttribute('rotation', { x: rot, y: -95, z: 0 })
            }
            if (e.key == 'ArrowLeft') {
                rot += 5;
                handle.setAttribute('rotation', { x: rot, y: -95, z: 0 })
                cam.setAttribute('rotation', { x: rot, y: -95, z: 0 })

            }
            if (e.key == 'ArrowUp') {
                pos -= 0.2;
                pos1 = pos * pos * -1;
                handle.setAttribute('position', { x: 0, y: -1, z: pos })
                cam.setAttribute('position', { x: 49, y: 2, z: (pos1) })
            }
            if (e.key == 'ArrowDown') {

                pos += 0.2;
                pos1 = pos * pos * -1
                handle.setAttribute('position', { x: 0, y: -1, z: pos })
                cam.setAttribute('position', { x: 49, y: 2, z: pos1 })
                console.log(pos1)
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