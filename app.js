
for(let i = 3, j = 1; i <= 8, j <= 6; i++, j++ ){
  document.querySelectorAll("i")[i].addEventListener("click", PegaId);
}

var cont = 0;
function PegaId(e){

 
   for(let i = 1; i <= 6; i++){
   document.getElementById("resposta" + i).style.display="none";
   }

   const item = e.target;
   const Total = (item.parentElement).id;
   var num_obj = Total.replace(/\D/g,'');

   document.getElementById("resposta" + num_obj).style.display="block";

}

