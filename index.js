var num = Math.ceil(Math.random() * 6);
var imgsource="images/dice" + num +".png";
document.querySelectorAll("img")[0].setAttribute("src",imgsource);
var num2=Math.ceil(Math.random()*6);
var imgSource2="images/dice" + num2 +".png";
document.querySelectorAll("img")[1].setAttribute("src",imgSource2);
if(num>num2)
{
  document.querySelector("h1").innerHTML="🚩Player 1 wins";
}
else if(num2>num)
{
  document.querySelector("h1").innerHTML="Player2 wins🚩";
}
else
{
  document.querySelector("h1").innerHTML="🚩 Drawn!!🚩"
}
