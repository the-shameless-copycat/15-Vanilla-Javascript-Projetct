console.log("hello friend");

const botonModal = document.querySelector(".modal-btn").addEventListener("click", ()=>{    
    document.querySelector(".modal-overlay").classList.add("open-modal");
});

const botonCerrar=  document.querySelector(".close-btn").addEventListener("click", () =>{
    document.querySelector(".modal-overlay").classList.remove("open-modal");
});