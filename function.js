/** 
 * @author Houssam KARARCH
 * affichageMandibuleV2() à modifier problème du nom de la mesh
*/


 function affichageMandibuleV2(){

           var manager = new THREE.LoadingManager();
                        manager.onProgress = function ( item, loaded, total ) {
                            console.log( item, loaded, total );
                        };
        
            var onProgress = function ( xhr ) {
                            if ( xhr.lengthComputable ) {
                                var percentComplete = xhr.loaded / xhr.total * 100;
                                console.log( Math.round(percentComplete, 2) + '% downloaded' );
                            }
                        };

            var onError = function ( xhr ) {
                        };
                        
            controls =  new THREE.OrbitControls( camera , renderer.domElement); 
            var loader = new THREE.OBJLoader(manager);
            var mesh = [];
            var name_mesh;
            for(var i=1 ; i<=16 ; i++){
                name_mesh= "img/mandible_"+i+".obj"
                loader.load(name_mesh, function(object){      
                object.traverse( function (child) {
                    if( child instanceof THREE.Mesh){                  
                        geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                        mesh[i] = new THREE.Mesh(geometry, child.material );
                        mesh[i].name = i;
                        mesh[i].rotation.set(-0.64,0,-0.7);                          
                        objects.push(mesh[i]);
                        groupe.add(mesh[i]);
                        scene.add(mesh[i]);
                    }       
                    })         
                }) 
            }

 }
 /**
  * @author Houssam KARRACH
  * @param URl des differents objets  dans le dossier img
  */


    function affichageMandibule(){
    var manager = new THREE.LoadingManager();
                manager.onProgress = function ( item, loaded, total ) {
                    console.log( item, loaded, total );
                };
   
    var onProgress = function ( xhr ) {
                    if ( xhr.lengthComputable ) {
                        var percentComplete = xhr.loaded / xhr.total * 100;
                        console.log( Math.round(percentComplete, 2) + '% downloaded' );
                    }
                };

    var onError = function ( xhr ) {
                };
                
    controls =  new THREE.OrbitControls( camera , renderer.domElement); 
    var loader = new THREE.OBJLoader(manager);
    
    loader.load("img/mandible_1.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh1 = new THREE.Mesh(geometry, child.material );
                 mesh1.name = 1;
                 mesh1.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh1);
                 groupe.add(mesh1);
                 scene.add(mesh1);
            }       
         })         
        }) 
        loader.load("img/mandible_2.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh2 = new THREE.Mesh(geometry, child.material );
                 mesh2.name = 2;
                 mesh2.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh2);
                 groupe.add(mesh2);
                 scene.add(mesh2);
            }       
         })         
        }) 
        loader.load("img/mandible_3.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh3 = new THREE.Mesh(geometry, child.material );
                 mesh3.name = 3;
                 mesh3.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh3);
                 groupe.add(mesh3);
                 scene.add(mesh3);
            }       
         })         
        }) 
        loader.load("img/mandible_4.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh4 = new THREE.Mesh(geometry, child.material );
                 mesh4.name = 4;
                 mesh4.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh4);
                 groupe.add(mesh4);
                 scene.add(mesh4);
            }       
         })         
        }) 
        loader.load("img/mandible_5.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh5 = new THREE.Mesh(geometry, child.material );
                 mesh5.name = 5;
                 mesh5.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh5);
                 groupe.add(mesh5);
                 scene.add(mesh5);
            }       
         })         
        }) 
        loader.load("img/mandible_6.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh6 = new THREE.Mesh(geometry, child.material );
                 mesh6.name = 6;
                 mesh6.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh6);
                 groupe.add(mesh6);
                 scene.add(mesh6);
            }       
         })         
        }) 
        loader.load("img/mandible_7.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh7 = new THREE.Mesh(geometry, child.material );
                 mesh7.name = 7;
                 mesh7.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh7);
                 groupe.add(mesh7);
                 scene.add(mesh7);
            }       
         })         
        }) 
        loader.load("img/mandible_8.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh8 = new THREE.Mesh(geometry, child.material );
                 mesh8.name = 8;
                 mesh8.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh8);
                 groupe.add(mesh8);
                 scene.add(mesh8);
            }       
         })         
        }) 
        loader.load("img/mandible_9.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh9 = new THREE.Mesh(geometry, child.material );
                 mesh9.name = 9;
                 mesh9.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh9);
                 groupe.add(mesh9);
                 scene.add(mesh9);
            }       
         })         
        }) 
        loader.load("img/mandible_10.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh10 = new THREE.Mesh(geometry, child.material );
                 mesh10.name = 10;
                 mesh10.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh10);
                 groupe.add(mesh10);
                 scene.add(mesh10);
            }       
         })         
        }) 
        loader.load("img/mandible_11.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh11 = new THREE.Mesh(geometry, child.material );
                 mesh11.name =11;
                 mesh11.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh11);
                 groupe.add(mesh11);
                 scene.add(mesh11);
            }       
         })         
        }) 
        loader.load("img/mandible_12.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh12 = new THREE.Mesh(geometry, child.material );
                 mesh12.name = 12;
                 mesh12.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh12);
                 groupe.add(mesh12);
                 scene.add(mesh12);
            }       
         })         
        }) 
        loader.load("img/mandible_13.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh13 = new THREE.Mesh(geometry, child.material );
                 mesh13.name = 13;
                 mesh13.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh13);
                 groupe.add(mesh13);
                 scene.add(mesh13);
            }       
         })         
        }) 
        loader.load("img/mandible_14.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh14 = new THREE.Mesh(geometry, child.material );
                 mesh14.name = 14;
                 mesh14.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh14);
                 groupe.add(mesh14);
                 scene.add(mesh14);
            }       
         })         
        }) 
        loader.load("img/mandible_15.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh15 = new THREE.Mesh(geometry, child.material );
                 mesh15.name = 15;
                 mesh15.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh15);
                 groupe.add(mesh15);
                 scene.add(mesh15);
            }       
         })         
        }) 
        loader.load("img/mandible_16.obj", function(object){       
        object.traverse( function (child) {
            if( child instanceof THREE.Mesh){                  
                geometry = new THREE.Geometry().fromBufferGeometry(child.geometry);
                 var mesh16 = new THREE.Mesh(geometry, child.material );
                 mesh16.name = 16;
                 mesh16.rotation.set(-0.64,0,-0.7);                          
                 objects.push(mesh16);
                 groupe.add(mesh16);
                 scene.add(mesh16);
            }       
         })         
        }) 
}