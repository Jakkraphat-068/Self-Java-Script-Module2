
const okButton = document.querySelector("button")

okButton.addEventListener("click", (e) => {
  console.log(`event.target: ${e.target}`)
  console.log(`event.currentTarget: ${e.currentTarget}`)
  console.log(`event.eventPhase: ${e.eventPhase}`)
  console.log(`event.type: ${e.type}`)
  console.log("Button was clicked!")
})
const divElement = document.querySelector("div")
divElement.addEventListener("click", (event) => {
  console.log(`event.target: ${event.target}`)
  console.log(`event.currentTarget: ${event.currentTarget}`)
  console.log(`event.eventPhase: ${event.eventPhase}`)
  console.log(`event.type: ${event.type}`)
  console.log("Div element was clicked!")
})

const bodyElement = document.body
bodyElement.addEventListener("click", (event) => {
  console.log(`event.target: ${event.target}`)
  console.log(`event.currentTarget: ${event.currentTarget}`)
  console.log(`event.eventPhase: ${event.eventPhase}`)
  console.log(`event.type: ${event.type}`)
  console.log("Body element was clicked!")
})
 
console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

/* โจทย์
<form action="/action_page.php">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" value="John" />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" value="Doe" />
      <input type="submit" value="Submit" />
</form> */
function validate() {
    const fname = document.getElementsByName('fname')[0].value
    const lname = document.getElementsByName('lname')[0].value
    if (fname.trim() == '' || lname.trim() == '') {
        console.log('input is empty');
    }
}

const submit = document.querySelector('input[type=submit]')
submit.addEventListener(
    'click',
    (e) => {
        e.preventDefault()
        validate()
    }
)

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

const aElement = document.querySelector("a")
aElement.addEventListener("click", (e) => {
  e.preventDefault()
  console.log("visit link was canceled")
})

//when click submit button, prevent default behavior and validate form data
const submitButton = document.querySelector("input[type='submit']")
console.log(submitButton)

submitButton.addEventListener("click", (e) => {
  e.preventDefault()
  //validate data
  const inputElements = document.querySelectorAll("input")
  inputElements.forEach((ele) => {
    const attr = ele.getAttribute("type")
    if (attr === "text") {
      if (ele.value.trim().length === 0) console.log("invalid data")
    }
  })
})
 
console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM is ready!')
  const heading = document.createElement('h2')
  heading.textContent = 'This was added when DOM was ready!'
  document.body.appendChild(heading)
  console.log('Heading added now.')
})
window.addEventListener('load', () => {
  console.log('All resources (images, CSS, scripts) are fully loaded!')
  console.log('Page is fully loaded')
})
 
console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

const info = document.getElementById('info')
 // Window resize event
window.addEventListener('resize', () => {
  info.textContent = `Window resized: ${window.innerWidth} x ${window.innerHeight}`
})
 // Window scroll event
window.addEventListener('scroll', () => {
  info.textContent = `Scrolled to Y: ${window.scrollY}`
})

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

const info = document.getElementById('info')

info.addEventListener('mouseout', (event) => {
  console.log('mouse out')
})
 info.addEventListener('mouseover', (event) => {
  console.log('mouse over')
})

window.addEventListener('mousemove', (event) => {
  info.textContent = `Mouse at X: ${event.clientX}, Y: ${event.clientY}`
}) 
 
console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

// <input type="text" id="message" />
const inputMessage = document.getElementById('message')
inputMessage.addEventListener('keyup', (event) => {
  if (event.key === 'Enter')  console.log(event.target.value)
})
 

/*<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <form>
      <label for="fname">First name:</label>

      <input type="text" id="fname" name="fname" value="John" />

      <label for="lname">Last name:</label>

      <input type="text" id="lname" name="lname" value="Doe" />


      <p id="message"></p>
      <input type="submit" value="Submit" />
    </form>

    <script src="./main.js"></script>
  </body>
</html>
  */

const fName = document.getElementById("fname")
const lName = document.getElementById("lname")
const message = document.getElementById("message")
fName.addEventListener("blur", (e) => {
  console.log(e.target.value)
  if (e.target.value.trim().length === 0) {
    message.style.color = "red"
    message.textContent = "your firstname is empty"
  }
})
lName.addEventListener("blur", (e) => {
  console.log(e.target.value)
  if (e.target.value.trim().length === 0) {
    message.style.color = "red"
    message.textContent = "your last name is empty"
  }
})
 
console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");


//Practice01

const createButton = document.querySelector("button#submit")

createButton.addEventListener("click", (e) => {
    e.preventDefault()
    const userInput = document.querySelector("input#username")
    const emailInput = document.querySelector("input#email")
    const passInput = document.querySelector("input#password")
    const confirmPassInput = document.querySelector("input#confirm-password")

    const display = document.querySelector('p')

    if (userInput.value.length === 0 || emailInput.value.length === 0) {
        display.textContent = "missing some values, please try again!"
        display.style.color = "red"
    }
    else if (passInput.value !== confirmPassInput.value && (passInput.value.length !== 0 || confirmPassInput.value.length !== 0 )) {
        display.textContent = "password and confirm do not match, check again"
        display.style.color = "red"
    }
    else if (passInput.value === confirmPassInput.value && (passInput.value.length !== 0 || confirmPassInput.value.length !== 0 )) {
        display.textContent = "your data complete"
        display.style.color = "green"
    }
})

console.log("///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////");

//Practice02
let text_input = document.getElementById('keyInput')
let show_keyLog = document.getElementById('keyLog')
 
const spanElement = document.createElement("span");
spanElement.style.color = "blue";
 
text_input.addEventListener("keypress",(e)=>{
    console.log(e)
        const textNode = document.createTextNode(`You pressed: ` + e.key );
        const br = document.createElement('br');
        if(e.key === "Enter"){
            show_keyLog.appendChild(spanElement);
            spanElement.appendChild(textNode)
        }else{
            show_keyLog.appendChild(textNode);
        }
        show_keyLog.appendChild(br);
})
 