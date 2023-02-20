export class BuilderEnviroment {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        // this.dictionary  = {
        //     "assets":{
        //         "floorTexture" : {
        //             "id": "floorTexture",
        //             "src": "../assets/textures/floor.jpg",
        //             "type": "img",
        //         },
        //         "wallTexture" : {
        //             "id": "wallTexture",
        //             "src": "../assets/textures/wall.png",
        //             "type": "img",
        //         },
        //         "ceilingTexture" : {
        //             "id": "ceilingTexture",
        //             "src": "../assets/textures/ceiling.jpg",
        //             "type": "img",
        //         },
        //         "marbleTexture" : {
        //             "id": "marbleTexture",
        //             "src": "../assets/textures/marble.jpg",
        //             "type": "img",
        //         },
        //         "compensar" : {
        //             "id": "compensar",
        //             "src": "../assets/rooms/logo_compensar.png",
        //             "type": "img",
        //         },
        //         "volverThumbnail" : {
        //             "id": "volverThumbnail",
        //             "src": "../assets/rooms/volverThumbnail.png",
        //             "type": "img",
        //         },
        //         "lamp-obj" : {
        //             "id": "lamp-obj",
        //             "src": "../assets/objects/lamp.obj",
        //             "type": "a-asset-item",
        //         },
        //         "lamp-mtl" : {
        //             "id": "lamp-mtl",
        //             "src": "../assets/objects/lamp.mlt",
        //             "type": "a-asset-item",
        //         },
        //         "marble-col-obj" : {
        //             "id": "marble-col-obj",
        //             "src": "../assets/objects/column.obj",
        //             "type": "a-asset-item",
        //         },
        //         "marble-col-mtl" : {
        //             "id": "marble-col-mtl",
        //             "src": "../assets/objects/column.mlt",
        //             "type": "a-asset-item",
        //         },
        //     }
        // };
    }
  
    builder(){
        
        try {
            // Build assets
            // for (const asset in this.dictionary['assets']) {
            //     // //console.log(asset);
            //     var id = this.dictionary["assets"][asset]["id"]
            //     var src = this.dictionary["assets"][asset]["src"]
            //     var type = this.dictionary["assets"][asset]["type"]
                
            //     var new_asset = document.createElement(type); 
            //     new_asset.setAttribute('id', id);
            //     new_asset.setAttribute('src', src);
            //     document.querySelector('#assets-galleries').appendChild(new_asset);
            // }
            // Get the userCamera element to append to
            var userCamera = document.getElementById('userCamera');

            // Create the camera rig element
            var cameraRig = document.createElement('a-entity');
            cameraRig.id = 'cameraRig';
            cameraRig.setAttribute('wasd-controls', '');
            cameraRig.setAttribute('look-controls', 'pointerLockEnabled: false');
            cameraRig.setAttribute('simple-navmesh-constraint', 'navmesh:.navmesh;fall:0.5;height:0.8;exclude:.navmesh-hole;');
            cameraRig.setAttribute('movement-controls', 'speed:0.5;camera:#head;');
            cameraRig.setAttribute('position', '10 0.8 50');
            cameraRig.setAttribute('rotation', '0 0 0');

            // Create the head element
            var head = document.createElement('a-entity');
            head.id = 'head';
            head.setAttribute('camera', 'near:0.01;');
            head.setAttribute('position', '0 2.65 0');

            // Create the main cursor element
            var mainCursor = document.createElement('a-cursor');
            mainCursor.id = 'mainCursor';
            mainCursor.setAttribute('position', '0 0 -0.5');
            mainCursor.setAttribute('geometry', 'primitive: ring; radiusInner: 0.0045; radiusOuter: 0.008');
            mainCursor.setAttribute('material', 'opacity: 0.6; shader: flat');
            mainCursor.setAttribute('cursor', 'rayOrigin: mouse');

            // Append the main cursor to the head element
            head.appendChild(mainCursor);

            // Append the head to the camera rig element
            cameraRig.appendChild(head);

            // Append the camera rig to the userCamera
            userCamera.appendChild(cameraRig);

           
        } catch (error) {
          console.error("An error occurred while processing the API call: " + error);
        }
     }
    
  }