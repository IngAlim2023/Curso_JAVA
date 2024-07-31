// Video Jorge
let videoUno = document.getElementById("modal-1");
let target = document.getElementById("jorge");
let closeVu = document.getElementById("close-j");

target.addEventListener('click', ()=>{
    videoUno.showModal();
})
closeVu.addEventListener('click', ()=>{
    videoUno.close();
})

//Video Andres
let videoDos = document.getElementById("modal-2");
let target2 = document.getElementById("andres");
let closeVd = document.getElementById("close-a");

target2.addEventListener('click', ()=>{
    videoDos.showModal();
})
closeVd.addEventListener('click', ()=>{
    videoDos.close();
})

//Video Jeison
let videoTre = document.getElementById("modal-3");
let target3 = document.getElementById("jeison");
let closeVt = document.getElementById("close-je");

target3.addEventListener('click', ()=>{
    videoTre.showModal();
})
closeVt.addEventListener('click', ()=>{
    videoTre.close();
})