//I'm selecting some of the elements on the screen, the ones I'll be using only of course. I'll be refering to these elements as the name of the variables or event.target eventually, so keep in mind that it's practially the same doing : 
//btn1.id
//event.target.id 
const btn1 = document.getElementById("btn-1")
const btn2 = document.getElementById("btn-2")
const btn3 = document.getElementById("btn-3")
const nav = document.querySelector(".container__nav")
const span = document.querySelector(".container__span")

function showEventTarget (e){

  //This "target" variable represents the same as "btn1", "btn2", etc...
  //First of all the event.target is the same as a querySelector or a getElementById, it's an object that represents an html tag. In this case, this only variable will be a different tag depending on how many times we assign the function showEventTarget to an event OR how up we used the function; this means that if we used it only once but on a tag that has several tags inside, then the event will be "forwarded" most likely to every single children tag
  const target = e.target

  //We can start treating the target as a tag, hence using it's properties/attributes like getting the id, the class, the text content, etc. This way we can conditionally do different things on tag match
  const targetTag = `<${target.tagName.toLowerCase()}/>`
  const targetClass = target.className
  const targetId = target.id
  span.textContent = `The event target is ${targetTag} with class ${targetClass} and id ${targetId}.`

}

btn1.addEventListener("click",showEventTarget)
btn2.addEventListener("click",showEventTarget)
btn3.addEventListener("click",showEventTarget)

//You can uncomment this bit and comment lines 21-23 to see that it still works but it also can display a new target other than buttons
//nav.addEventListener("click",showEventTarget)