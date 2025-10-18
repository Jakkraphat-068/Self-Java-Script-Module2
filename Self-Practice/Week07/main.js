/*console.log(document.body)
console.log(document.body.nodeName)
console.log(document.body.nodeType)
console.log(document.body.nodeValue)

if (document.body.nodeType === Node.ELEMENT_NODE)
  console.log(`body is an element node type`)
if (document.body.nodeType === Node.ATTRIBUTE_NODE)
  console.log(`body is an attribute node type`)
if (document.body.nodeType === Node.TEXT_NODE)
  console.log(`body is a text node type`)*/

console.log("///////////////////////////////////////////////////////")

/*โจทย์ 1
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <div>
      <h1>Dom Example</h1>
    </div>
    <div>
      <p>#1</p>
      <p>#2</p>
    </div> */

/*function checkNodeType(node) {
        console.log("Node Name:", node.nodeName);
        console.log("Node Type:", node.nodeType);
 
        switch (node.nodeType) {
          case Node.ELEMENT_NODE:
            console.log("This is an ELEMENT NODE.");
            break;
          case Node.ATTRIBUTE_NODE:
            console.log("This is an ATTRIBUTE NODE.");
            break;
          case Node.TEXT_NODE:
            console.log("This is a TEXT NODE.");
            break;
          case Node.COMMENT_NODE:
            console.log("This is a COMMENT NODE.");
            break;
          case Node.DOCUMENT_NODE:
            console.log("This is a DOCUMENT NODE.");
            break;
          default:
            console.log("Unknown node type.");
        }
      }
 
      const bodyElement = document.body;
      checkNodeType(bodyElement);*/

console.log("///////////////////////////////////////////////////////")

/* โจทย์ 2
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <div id="exampleElement" style="font-size: 10pt"><!-- this is a comment node -->
      This is some <span style="display: none">hidden</span> text content.
    </div>
    <script src="./main.js"></script>
  </body>
</html>
  */

//query div element with id "exampleElement"
const divElement = document.getElementById("exampleElement")
// div  childNodes
const divChildNodes = divElement.childNodes //return NodeList data type
console.log(`length: ${divElement.childNodes.length}`)
divChildNodes.forEach((child) => {
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})
//div children
const divChildren = divElement.children //return HTMLCollection data type
console.log(`length: ${divElement.children.length}`)
Array.from(divChildren).forEach((child) => {
  console.log(child.nodeName)
  console.log(child.nodeType)
  console.log(child.nodeValue)
})
 
console.log("///////////////////////////////////////////////////////")

/* โจทย์ 3
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <div id="subject">
      <p>INT140</p>
      <!-- <p></p> -->
    </div>
    <script src="./main.js"></script>
  </body>
</html>
  */

// create <p id='int141'>INT141</p> as a child of <div id="subject">
//1. create <p element
const divElement = document.getElementById("subject")
const pElement = document.createElement("p")
//1.5 create attribute id
// const idAttr = document.createAttribute("id")
// idAttr.value = "int141"
// pElement.setAttributeNode(idAttr)
pElement.setAttribute("id", "int141")
pElement.setAttribute("style", "color:red")
pElement.setAttribute("name", "core")

//2. create text node then 3. append to <p> child
const pText = document.createTextNode("INT141")
pElement.appendChild(pText)
// pElement.textContent = "INT141"

//4.append <p> with text node to div element
divElement.appendChild(pElement)

//get attribute value of 'id'
console.log(pElement.getAttribute("id")) //int141
console.log(pElement.attributes[0]) //id="int141"
console.log(pElement.attributes[0].ownerElement) //<p id="int141">INT141</p>

const pAttributes = pElement.attributes //get all attributes
for (let i = 0; i < pAttributes.length; i++) {
  const name = pAttributes[i].name //get attribute name
  const value = pAttributes[i].value //get attribute value
  if (pAttributes[i].name === "id") console.log(name, value)
}
 
console.log("///////////////////////////////////////////////////////")
/* โจทย์ 4
<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
    <div id="demo">
      <b>Hello</b>
      <span style="display: none">hidden</span>
      world
    </div>

    <script src="./main.js"></script>
  </body>
</html>
 */

let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.textContent)
const pElement = document.createElement("p")
// pElement.innerHTML = "<i>Sample Content</i>"
// pElement.textContent = "<i>Sample Content</i>"
pElement.innerText = "<i>Sample Content</i>"
document.body.appendChild(pElement)
 
console.log("///////////////////////////////////////////////////////")

/*<html lang="en">
  <head>
    <title>Document</title>
  </head>
  <body>
      <ul id="drink">
        <li>coffee</li>
        <li>Tea</li>
        <li>Chocolate</li>
        <li>Juice</li>
      </ul>
    </div>
<!-- 1. find all drinks under <ul id="drink"> -->
<!-- 2. get <li>Tea</li>  and then
 2.1 previous element sibling
 2.2 next element sibling
 2.3 parent element  -->

    <script src="./main.js"></script>
  </body>
</html>
 */

let el = document.getElementById("drink")
const allDrinks = el.children //child element
Array.from(allDrinks).forEach((drink) => console.log(drink))

let teaDrink = allDrinks[1]
console.log(teaDrink.textContent)

console.log(teaDrink.previousElementSibling)
console.log(teaDrink.nextElementSibling)
console.log(teaDrink.parentElement)
 