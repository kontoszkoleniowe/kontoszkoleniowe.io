document.querySelectorAll("nav a").forEach(a => {
    a.onclick = () => {
    console.log(a)
    document.querySelector("Stoggler").checked = false;
   }
})

const projekty = [
    {
        title: "projekt1",
        desc: "opis projektu 1",
        src: "img/Desert.jpg"
    },
    {
        title: "projekt2",
        desc: "opis projektu 2",
        src: "img/Penguins.jpg"
    },
    {
        title: "projekt3",
        desc: "opis projektu 3",
        src: "img/Tulips.jpg"
    }
]

let currentProject = 1
const displayproject = () => {
    const title = document.querySelector('#projekty h3');
   title.innerText = projekty[currentProject].title

    const subtitle = document.querySelector('#projekty p');
    subtitle.innerText = projekty[currentProject].title
    
    const Ing = document.querySelector('#projekty img');
    Ing.src = projekty[currentProject].src


}
displayproject ();


document.querySelector('.right').onclick = () => { 
currentProject++;
if(currentProject >= projekty.langth){
currentProject = 0;
}
displayproject();
}

document.querySelector('.left').onclick = () => { 
    currentProject--;
    if(currentProject <= 0){
        currentProject >= projekty.langth
    }
    displayproject();}

