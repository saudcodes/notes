// 3 way7s to call an event


// way 1
  let btn = document.querySelector("#btn")
function random() {
  return Math.floor(Math.random() * 360);
}
   
       
      // this triggers a function on click of the selected element, here it is button
      btn.addEventListener("click", function() {
            let color = `hsl(${random()}, 90%, 50%`
document.body.style.backgroundColor = color;
      })
        

document.queryselector("#container") - //takes the div  from html  file
dcument.createElement("div") - //creates a new div we can store it in some variable
variable.classList.add("content") -// adds class to tthe  craeted div
variable.textConetennt = "This is a text"- //addstext to selected variable in htm;
div.style.cssText = "color: blue; " - //adds css rules to selected .class

Container.appendChild (vvariable); - //places the variable in a div
