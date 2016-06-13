/**
 * @author Houssam KARRACH
 * @define Main qui fait le traitement de la mandibule qui permet de selectionner 
 *         2 parties de la mandibule, ensuite on change la couleur de toute la partie entre les 2 objets séléctionnés
 */
/**
 * Initialisation des variables
 */
var renderer , scene , camera  , geometry , controls, mesh ,raycaster,mousevar ,intersected;
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var groupe = new THREE.Object3D();
var objects = [];
var number_mandibule = [];
var number_vide = [];
var intersectColor = 0x00D66B;
var baseColor = 0xFFFFFF;
var foundColor = 0x12C0E3;
var selectionner = false;
/**
 * @function : permet l'initialisation de la scène et le chargement de l'image
 * @description : utilisation de la fonction affichageMandibule() pour  l'affichage de 16 objets de la mandibules
 */
function init() { 
    renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(400, 400);
    document.body.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    var ambient = new THREE.AmbientLight(0x404040,0.7);
    scene.add(ambient);    
    var hemiLight =  new THREE.HemisphereLight( 0xffffff, 0xffffff, 1 );
    hemiLight.color.set(0xd3d3d3);
	hemiLight.groundColor.setHSL( 0, 0, 0 );
	scene.add( hemiLight );
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 20000 );
        camera.position.z = 100;
        camera.position.y = 0;
        camera.position.x = 0;
        scene.add(camera);   
        affichageMandibule();  
     window.addEventListener('resize', onWindowResize, false);  
     window.addEventListener( 'click', onMouseMove, false );
}
/**
 * @description: permet de gérer les evenements de la souris
 */
function onMouseMove( event ) {
 
	mouse.x = ( (event.clientX-renderer.domElement.offsetLeft) / renderer.domElement.width ) * 2 - 1;
	mouse.y = - ( (event.clientY-renderer.domElement.offsetTop ) / renderer.domElement.height ) * 2 + 1;	
    console.log("mouse.x , mouse.y ",mouse.x,mouse.y);
    console.log("event.clientX , event.clientY",event.clientX,event.clientY);
    raycaster.setFromCamera( mouse, camera );
    var intersections = raycaster.intersectObjects( objects );
	if ( intersections.length > 0 ) {
				if ( intersected != intersections[ 0 ].object ) {
                    if (selectionner) {
                        for(i=0 ;i<26;i++){               
                            objects[i].material.color.setHex(baseColor);
                        }
                    }
					intersected = intersections[ 0 ].object;
					intersected.material.color.setHex( intersectColor );
                    number_mandibule.push(intersected.name);
				}
				document.body.style.cursor = 'pointer';
			}
			else if ( intersected ) {
				intersected = null;
				document.body.style.cursor = 'auto';     
			}  
    if(number_mandibule.length==2){
        selectionner = true;
         var max_of_array = Math.max.apply(Math, number_mandibule);
         var min_of_array = Math.min.apply(Math, number_mandibule); 
         //console.log("min_of_array",min_of_array,"max_of_array",max_of_array) ; 
         sessionStorage.setItem("min_of_array",min_of_array);
         sessionStorage.setItem("max_of_array",max_of_array);  
         var min = min_of_array-1;
         var max = max_of_array-1; 
        // console.log("min",min,"max",max) ; 
        for (var i = 0; i < 26 ; i++) {        
               if(objects[i].name>=min_of_array && objects[i].name<=max_of_array){
                    objects[i].material.color.setHex( 0xff6954 );
               }
               else{
                   number_vide.push(objects[i].name); 
                    objects[i].material.color.setHex( 0xffffff );        
                   }                    
         }
        console.log(mandibuleMaxMin);
       while(number_mandibule.length>0) number_mandibule.pop();
        }
    }
/**
 * @description : permet de reduire la taille de l'objet en fonction de la taille de l'ecran
 */
function onWindowResize() {
		    windowHalfX = window.innerWidth / 2;
		    windowHalfY = window.innerHeight / 2;
		    camera.aspect = window.innerWidth / window.innerHeight;
		    camera.updateProjectionMatrix();
		    renderer.setSize(window.innerWidth, window.innerHeight);
		}
/**
 * @description : permet de boucler infinement la scene 
 */
function render(){
    controls.update();
	requestAnimationFrame(render);
	renderer.render(scene,camera);	
}
init();
render();
