import { GLTFLoader } from "GLTFLoader";
import * as THREE from "three";

// 장면 추가
const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5));

// 카메라 추가
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 0.5);
camera.lookAt(0, 0, 0);

// 렌더러 추가
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true,
  // canvas : document.querySelector("#canvas")
});
renderer.setSize(window.innerWidth, window.innerHeight);

const container = document.querySelector(".threejs-container");
container.appendChild(renderer.domElement);

// 빛
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1);
scene.add(light);

// instantiate a loader
const GLTFloader = new GLTFLoader();
const GLTFObjGroup = new THREE.Object3D();

// load a resource
GLTFloader.load("../nike_jordan/scene.gltf", function(gltf){
  const GLTFObj = gltf.scene
  GLTFObj.scale.set(1, 1, 1)
  GLTFObj.position.set(0, -0.1, 0)
  GLTFObjGroup.add(GLTFObj)
  scene.add(GLTFObjGroup)
},
// 불러와지는 과정
function ( xhr ) {
  console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
},
// 에러시
function ( error ) {
  console.log( 'An error happened' );
}
)

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.defaults({
  immediateRender: false,
  scrub: true,
  ease: "power1.inOut"
})

let modelAni = gsap.timeline();

modelAni.to(camera.position, {
  duration: 2,
  y: -0.2,
  z: 0.8, 
})

modelAni.to(GLTFObjGroup.rotation,{
  x: 12.5,
  y: 0.1,
  z: -0.01 ,
  scrollTrigger: {
    trigger: ".section1",
    start: "top top",
    end: "bottom center",
    markers: true
  }
})

modelAni.to(camera.position, {
  x: 0, 
  y: 0.2,
  z: -0.01,
  scrollTrigger: {
    trigger: ".section1",
    start: "top center",
    end: "bottom bottom",
    markers: true
  }
})


// 애니메이션 함수
function animate(currentTime){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()
