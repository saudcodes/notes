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
        
