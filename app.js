
document.querySelectorAll("i")[3].addEventListener("click", PegaId)

function PegaId(e){
   const item = e.target;
   const Total = (item.parentElement).id

   console.log(Total)
  MostraPErgunta()
}

function MostraPErgunta(){
   document.getElementById("resposta1").style.display="block"
}

