import { GLTFLoader } from "GLTFLoader";
import * as THREE from "three";

// 장면 추가
const scene = new THREE.Scene();
// scene.add(new THREE.AxesHelper(5));

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
const light = new THREE.AmbientLight(0xffffff, 1.7);
light.position.set(1, 1, 1);
scene.add(light);

// instantiate a loader
const GLTFloader = new GLTFLoader();
const GLTFObjGroup = new THREE.Object3D();

// load a resource
GLTFloader.load("../air_jordan_1_1985/scene.gltf", function(gltf){
  const GLTFObj = gltf.scene
  GLTFObj.scale.set(0.005, 0.005, 0.005)
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
  duration: 1,
  x: 0,
  y: -0.6,
  z: 4, 
})

// 기준점
modelAni.to(GLTFObjGroup.rotation,{
  x: 0,
  y: 0,
  z: 0,
  scrollTrigger: {
    trigger:"header",
    start: "top bottom",
    end: "top bottom",
    scrub: 1,
    // markers: true,
},
})

modelAni.to(camera.position,{
  x: 0,
  y: -0.6,
  z: 0.1, 
  scrollTrigger: {
    trigger: ".section1",
    start: "top bottom",
    end: "top bottom",
    // markers: true,
  }
})


// content1 
modelAni.to(GLTFObjGroup.rotation,{
  x: 10,
  y: 3,
  z: -3.4,
  scrollTrigger: {
    trigger:"header",
    start: "top top",
    end: "bottom top",
    scrub: 1,
    // markers: true,
}
})

modelAni.to(camera.position,{
  x: 0.8,
  y: -0.6,
  z: 3, 
  scrollTrigger: {
    trigger: "header",
    start: "top top",
    end: "bottom top",
    // markers: true,
  }
})

// content2
modelAni.to(GLTFObjGroup.rotation,{
  x: 5,
  y: -0.8,
  z: -3.4,
  scrollTrigger: {
    trigger: ".section1",
    start: "10% top",
    end: "40% top",
    // markers: true,
  }
})

modelAni.to(camera.position,{
  x: -1,
  y: -0.6,
  z: 3,
  scrollTrigger: {
    trigger: ".section1",
    start: "10% top",
    end: "40% top",
    // markers: true,
  }
})

// content3
modelAni.to(GLTFObjGroup.rotation,{
  x: -16,
  y: 3.1,
  z: -3.4,
  scrollTrigger: {
    trigger: ".section1",
    start: "50% top",
    end: "60% top",
    // markers: true,
  }
})

modelAni.to(camera.position,{
  x: 1.2,
  y: -0.2,
  z: 3,
  scrollTrigger: {
    trigger: ".section1",
    start: "50% top",
    end: "60% top",
    // markers: true,
  }
})

// 애니메이션 함수
function animate(currentTime){
  requestAnimationFrame(animate)
  renderer.render(scene, camera)
}

animate()