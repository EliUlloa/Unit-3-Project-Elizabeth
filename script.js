


let title= document.querySelector(".title");
let StoryOpening= document.querySelector(".story-opening");
let Buttons = document.querySelector(".buttons");
let StoryPart2Fashion = document.querySelector(".option-one-screen");
let StoryPart2Makeup =  document.querySelector (".option-two-screen");
let StoryPart3Fashion = document.querySelector (".option-one-end");
let StoryPart3Makeup =  document.querySelector (".option-two-end");
let planeButton = document.querySelector (".Fashion");
let planeButton2 = document.querySelector (".Makeup");

planeButton.onclick=function(){
     StoryPart2Fashion.style.display="block";
     StoryPart2Makeup.style.display="none";
};
 planeButton2.onclick=function(){
     StoryPart2Makeup.style.display="block";
     StoryPart2Fashion.style.display="none";
};
