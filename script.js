const body = document.querySelector("body");
body.addEventListener('click', (e) => {
    console.log(e.clientX, e.clientY);
    const circleElement = document.createElement("div");
    circleElement.classList.add("circle");
    circleElement.textContent ="Hii" ;
    const colour = ["red", "blue", "pink", "red", "orange", "yellow"];
    circleElement.style.backgroundColor = colour[Math.floor(Math.random() * 6)];
    circleElement.style.position = "fixed";

    circleElement.style.top= `${e.clientX}px`;
    circleElement.style.left= `${e.clientY}px`;
    body.append(circleElement);
    console.log(body);
    setTimeout(()=>{
        circleElement.remove();
    },5000);
})
