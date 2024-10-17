var inputele = document.getElementById('input')
var buttonele = document.getElementById('bet')
var msg = document.getElementById('msg')

buttonele.onclick = function() {
  var iv = inputele.value;
msg.innerHTML=iv
inputele.value=""
}

















  let search = document.querySelector(".search input");
  search.addEventListener("keyup",function(){
    let se = this.value.toLowerCase();
    let img =document.querySelectorAll(".img img,h6")
    for (let i of img){
      let gg = i.innerHTML.toLowerCase();
      if(gg.indexOf(se)== -1){
        i.classList.add('hide');
      }else{
        this.classList.remove('hide');        
      }

    }
  })