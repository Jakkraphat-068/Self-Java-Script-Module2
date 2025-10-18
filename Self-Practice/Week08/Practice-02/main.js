/*
// แบบใช่ CSS
const box = document.getElementById("box")
const buttons = document.getElementsByTagName("button")
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", () => {
    //write code here....
    const color = button.dataset.color
    box.style.background = color
    console.log(`Change to color ${color}`);
  })
})

*/
/* ได้เหมือนกัน
const buttons = document.getElementsByTagName("button")
const box = document.getElementById('box')
const color = document.createAttribute('style')
color.value = "background-color:"
box.setAttributeNode(color)
console.log(box.attributes);
 
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', () => {
        //write code here.......
        console.log(button.textContent);
        if(button.textContent === "สีแดง"){
            color.value = "background-color:red"
        }
        else if (button.textContent === "สีน้ำเงิน") {
            color.value = "background-color:blue"
        }
        else {
            color.value = "background-color:green"
        }
    })
})
*/