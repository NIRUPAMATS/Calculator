function btnclick(val){
   document.getElementById("screen").value+=val
}
function allclear(){
    console.log("5")
    document.getElementById("screen").value=" "
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}