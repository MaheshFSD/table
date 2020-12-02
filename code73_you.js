console.log("From Js")
var randomNum=getRandomNum();
function getRandomNum(){
    return Math.floor(Math.random()*Math.floor(99)+1)
}
//console.log(randomNum)
var count=1;
function tableMultiplication(){
    var clearSet=setInterval(function(){
        var product=randomNum*count
        var tag=document.createElement('p')
        tag.setAttribute('class','text')
        tag.innerHTML=`${randomNum}  x  ${count}  =  ${product}`
        var parent=document.getElementById('table-div')
        parent.append(tag);
        count++
        if(count>10)
            clearInterval(clearSet)
    },1000)
}
tableMultiplication()

