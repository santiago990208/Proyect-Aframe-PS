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

            //jasmines
            var jasmines = document.getElementById('jasmines');

            for (var i = 17; i >= -17; i--) {
                var jasmine = document.createElement('a-entity');
                jasmine.id = 'cameraRig';
                jasmine.innerHTML = ' <a-entity gltf-model="#jasmine-glft"  position="'+i+' -1 17.5" rotation="0 90 0" scale="0.6 0.6 0.6"></a-entity>';
                // Append the new element to the container
                jasmines.appendChild(jasmine); 
            }
            
           
        } catch (error) {
          console.error("An error occurred while processing the API call: " + error);
        }
     }
    
  }