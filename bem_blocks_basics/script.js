const overlays = document.querySelectorAll(".overlay")

let current;

overlays.forEach(overlay => {

    overlay.addEventListener("mouseenter", (e) => {
      if(current){
        current.classList.remove("active")
        Array.from(current.children).forEach(child=>{
          child.classList.remove("child")
        })
      }
      current = e.currentTarget
      const className = current.className
      //stripe the word overlay 
      const classList = className.split(" ").filter(name => name !== "overlay")
      
      //search each class in the array classList with querySelectorAll and add the class active
      classList.forEach(name => {
        const element = document.querySelectorAll("." + name)
        console.log(element)
      })

      current.classList.add("active")
      Array.from(current.children).forEach(child=>{
        child.classList.add("child")
      })
    })

    overlay.addEventListener("mouseleave", () => {
      current.classList.remove("active")
      Array.from(current.children).forEach(child=>{
        child.classList.remove("child")
      })
      current.parentNode.dispatchEvent(new MouseEvent("mouseenter"))
    })

})