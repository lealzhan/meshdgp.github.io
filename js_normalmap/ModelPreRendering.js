if (!Detector.webgl) Detector.addGetWebGLMessage();
// for change renderer reload
var camera, scene, renderer;

// set for OBJLoader
var manager, onProgress, onError, loader;

// for change model color reload
var model_omt, model_2k = null;
var model_disk = null;

// model normalmap texture
var NormalMap;

// normal map flag
var isNormalMap = false;

// model material
var modelMaterial;

// model changeable color
var modelColor = 0x8763ea;

// save render image
var strDownloadMime = "image/octet-stream";

// OMT Disk or Conformal Disk
var diskModelType = '';

// only wireframe model flag
var wireframeFlag = false;

// wireframe renderer flag
var isWireFrameRenderer = false;

// on Loading
var isLoading = false;

// url for different models and textures
var modelUrl, textureUrl;
// modelUrl init || buddha omt model
modelUrl = 'Models/angel/angel_origin.obj';
// textureUrl init || buddha normalmap
textureUrl = 'Models/textures/normalMap/normalMap_angel.png';

init();
loadOMT();
animate();

function init() {

	if (scene === undefined && camera === undefined) {
		scene = new THREE.Scene();
		camera = new THREE.PerspectiveCamera(27, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 1200;
	}
	if (renderer !== undefined) {
		document.body.removeChild(renderer.domElement);
	}

	if (isWireFrameRenderer) {
		renderer = new THREE.CanvasRenderer({
			antialias: true,
			preserveDrawingBuffer: true
		});
	} else {
		renderer = new THREE.WebGLRenderer({
			antialias: true,
			preserveDrawingBuffer: true
		});
	}

	renderer.setClearColor(0x00ffffff);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	document.body.appendChild(renderer.domElement);

	controls = new THREE.OrbitControls(camera, renderer.domElement);
	// set visible angle
	// controls.maxPolarAngle = Math.PI;
	// rerender when obj move
	// controls.addEventListener( 'change', render );
	// controls.update();
	window.addEventListener('resize', onWindowResize, false);

	// set for OBJLoader
	manager = new THREE.LoadingManager();
	manager.onProgress = function(item, loaded, total) {

		console.log(item, loaded, total);

	};

	onProgress = function(xhr) {
		if (xhr.lengthComputable) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log(Math.round(percentComplete, 100) + '% downloaded');
			document.getElementById("demo").innerHTML = Math.round(percentComplete, 2) + '% downloaded';
			document.getElementById("bar").style.width = Math.round(percentComplete, 2) + "%";
			if (percentComplete == 100) {
				document.getElementById("demo").innerHTML = "";
				document.getElementById("type").innerHTML = "";
				document.getElementById("bar").style.width = 0 + "%";
			}
		}
	};

	onError = function(xhr) {};

	loader = new THREE.OBJLoader(manager);

}

function initLoading() {
	// set state to "isLoading"
	onload();

	// remove all lights
	for (let i = scene.children.length - 1; i >= 0; i--) {
		let child = scene.children[i];

		if (child !== camera) { // plane & camera are stored earlier
			scene.remove(child);
		}
	}

	// change model color
	modelMaterial = new THREE.MeshPhongMaterial({
		wireframe: wireframeFlag,
		color: modelColor,
		specular: 0x222222,
		shininess: 15,
	});
}

function loadOMT() {
	initLoading();

	document.getElementById("type").innerHTML = "OMT Model";

	// setup lights
	var directionalLight, pointLight, ambientLight;

	var ambientLight = new THREE.AmbientLight(0x444444, 1.5);
	scene.add(ambientLight);

	var pointLightF = new THREE.PointLight(0xffffff, 0.65, 1000);
	pointLightF.position.set(0, 200, 200);
	scene.add(pointLightF);

	// change from 0.6 to 0.3
	var pointLightU = new THREE.PointLight(0xffffff, 0.3, 1000);
	pointLightU.position.set(0, 400, -75);
	scene.add(pointLightU);

	var pointLightFace = new THREE.PointLight(0xffffff, 0.4, 1000);
	pointLightFace.position.set(0, -200, 25);
	scene.add(pointLightFace);

	var directionalLightB = new THREE.DirectionalLight(0xffffff, 0.35);
	directionalLightB.position.set(0, -3, -5);
	scene.add(directionalLightB);

	var pointLightL = new THREE.PointLight(0xffffff, 0.6, 1000);
	pointLightL.position.set(500, 300, -200);
	scene.add(pointLightL);

	var pointLightR = new THREE.PointLight(0xffffff, 0.6, 1000);
	pointLightR.position.set(-500, 300, -200);
	scene.add(pointLightR);

	// // Baicai downside light
	// var pointLightD = new THREE.PointLight(0xffffff, 0.3, 1000);
	// pointLightD.position.set(0, -200, 200);
	// scene.add(pointLightD);

	loader.load(modelUrl, function(object) {

		object.traverse(function(child) {

			if (child instanceof THREE.Mesh) {
				child.material = modelMaterial;
			}

		});
		object.scale.multiplyScalar(500);
		scene.add(object);
		model_omt = object;
		onload();
	}, onProgress, onError);

	model_2k = null;
	model_disk = null;
}

// load Simplified Model || 2k || with normalMap
function load2k() {
	initLoading();

	if (isNormalMap) {
		document.getElementById("type").innerHTML = "1k Model with NormalMap";
	} else {
		document.getElementById("type").innerHTML = "1k Model";
	}

	// set up new lights

	var directionalLight, pointLight, ambientLight;

	var ambientLight = new THREE.AmbientLight(0x444444, 1.5);
	scene.add(ambientLight);

	var pointLightF = new THREE.PointLight(0xffffff, 0.8, 1000);
	pointLightF.position.set(0, -50, 400);
	scene.add(pointLightF);

	var pointLightU = new THREE.PointLight(0xffffff, 0.55, 1000);
	pointLightU.position.set(0, 200, 25);
	scene.add(pointLightU);

	var pointLightFace = new THREE.PointLight(0xffffff, 0.4, 1000);
	pointLightFace.position.set(0, -200, 25);
	scene.add(pointLightFace);

	var directionalLightB = new THREE.DirectionalLight(0xffffff, 0.45);
	directionalLightB.position.set(0, -3, -5);
	scene.add(directionalLightB);

	var pointLightL = new THREE.PointLight(0xffffff, 0.6, 1000);
	pointLightL.position.set(500, 300, -200);
	scene.add(pointLightL);

	var pointLightR = new THREE.PointLight(0xffffff, 0.6, 1000);
	pointLightR.position.set(-500, 300, -200);
	scene.add(pointLightR);

	// load model
	loader.load(modelUrl, function(object) {

		object.traverse(function(child) {

			if (child instanceof THREE.Mesh) {
				if (isNormalMap) {
					NormalMap = new THREE.TextureLoader().load(textureUrl);
					modelMaterial.normalMap = NormalMap;
				}
				child.material = modelMaterial;
			}

		});

		object.scale.multiplyScalar(500);
		scene.add(object);
		model_2k = object;
		onload();
	}, onProgress, onError);

	model_omt = null;
	model_disk = null;
}


function loadDiskModel() {
	initLoading();

	if (diskModelType === "OMT") {
		document.getElementById("type").innerHTML = "OMT Disk Model";
	} else if (diskModelType === "Conformal") {
		document.getElementById("type").innerHTML = "Conformal Disk Model";
	}

	// set up new lights
	var directionalLight, pointLight, ambientLight;

	var ambientLight = new THREE.AmbientLight(0x444444, 1.5);
	scene.add(ambientLight);

	var pointLightF = new THREE.PointLight(0xffffff, 1.2, 1000);
	pointLightF.position.set(0, 700, 400);
	scene.add(pointLightF);

	// var pointLightU = new THREE.PointLight(0xffffff, 0.7, 1000);
	// pointLightU.position.set(0, 200, 25);
	// scene.add(pointLightU);

	var pointLightFace = new THREE.PointLight(0xffffff, 1.2, 1000);
	pointLightFace.position.set(0, -300, 400);
	scene.add(pointLightFace);

	// var directionalLightB = new THREE.DirectionalLight(0xffffff, 0.45);
	// directionalLightB.position.set(0, -3, -5);
	// scene.add(directionalLightB);

	// var pointLightL = new THREE.PointLight(0xffffff, 0.6, 1000);
	// pointLightL.position.set(500, 300, -200);
	// scene.add(pointLightL);

	// var pointLightR = new THREE.PointLight(0xffffff, 0.6, 1000);
	// pointLightR.position.set(-500, 300, -200);
	// scene.add(pointLightR);

	loader.load(modelUrl, function(object) {

		object.traverse(function(child) {

			if (child instanceof THREE.Mesh) {
				child.material = modelMaterial;
			}

		});

		object.scale.multiplyScalar(450);
		object.position.y = object.position.y + 40;

		scene.add(object);
		model_disk = object;
		onload();
	}, onProgress, onError);

	model_omt = null;
	model_2k = null;
}

// show normal map
function showNormalMap() {
	initLoading();

	var geometry = new THREE.PlaneGeometry(400, 400, 1, 1);
	geometry.vertices[0].uv = new THREE.Vector2(0, 0);
	geometry.vertices[1].uv = new THREE.Vector2(2, 0);
	geometry.vertices[2].uv = new THREE.Vector2(2, 2);
	geometry.vertices[3].uv = new THREE.Vector2(0, 2);

	var NormalMap = new THREE.TextureLoader().load(textureUrl);
	var material = new THREE.MeshBasicMaterial({
		map: NormalMap
	});
	var mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);
	mesh.position.y = mesh.position.y + 50;

	onload();
}

// change to canvas renderer (2d rendering)
function changeRenderer() {
	isWireFrameRenderer = !isWireFrameRenderer;
	init();
}

// wireframe model switch
function changeWireframe() {
	wireframeFlag = !wireframeFlag;
	if (model_omt !== null) {
		loadOMT();
	} else if (model_2k !== null) {
		load2k();
	}
}

// change model color
function changeColor() {
	var nextColor;
	nextColor = parseColor(document.getElementById("color").value);
	if (modelColor != nextColor) {
		// ??color type
		modelColor = Number(nextColor);
		if (model_omt !== null) {
			loadOMT();
		} else if (model_2k !== null) {
			load2k();
		} else if (model_disk !== null) {
			loadDiskModel();
		}
	}

}

// parse hex color in js with '0x'
function parseColor(data) {
	var result;
	result = data.replace('#', '');
	result = "0x" + result;
	return result;
}

// contorl loading progress
function onload() {
	isLoading = !isLoading;
	console.log(isLoading);
}

// export render image
function saveAsImage() {
	var imgData, imgNode;
	try {
		var strMime = "image/jpeg";
		imgData = renderer.domElement.toDataURL(strMime);
		saveFile(imgData.replace(strMime, strDownloadMime), "test.jpg");
	} catch (e) {
		console.log(e);
		return;
	}
}

var saveFile = function(strData, filename) {
	var link = document.createElement('a');
	if (typeof link.download === 'string') {
		document.body.appendChild(link); //Firefox requires the link to be in the body
		link.download = filename;
		link.href = strData;
		link.click();
		document.body.removeChild(link); //remove the link when done
	} else {
		location.replace(uri);
	}
};

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
	requestAnimationFrame(animate);
	changeColor();
	render();
}

function render() {
	camera.lookAt(scene.position);
	renderer.render(scene, camera);
}