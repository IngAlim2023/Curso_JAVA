let videoUno = document.getElementById("modal-1");
let target = document.getElementById("jorge");
let closeVu = document.getElementById("close-j");

target.addEventListener('click', ()=>{
    videoUno.showModal();
})
closeVu.addEventListener('click', ()=>{
    videoUno.close();
})