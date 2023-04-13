const items = document.querySelectorAll("article")

const aside = document.querySelector("aside")
const close = aside.querySelector("span")

for (let el of items) {
    el.addEventListener("mouseenter", function(e) {
        e.currentTarget.querySelector("video").play();
    });
    
    el.addEventListener("mouseleave", function(e) {
        e.currentTarget.querySelector("video").pause();
    });

    el.addEventListener("click", function(e) {
        let tit = e.currentTarget.querySelector("h2").innerText;
        let txt = e.currentTarget.querySelector("p").innerText;
        let vidSrc = e.currentTarget.querySelector("video").getAttribute("src");

        aside.querySelector("h1").innerText = tit;
        aside.querySelector("p").innerHTML = txt;
        aside.querySelector("video").setAttribute("src", vidSrc);

        aside.querySelector("video").play();
        aside.classList.add("on")
    })

    close.addEventListener("click", function() {
        aside.classList.remove("on");
        aside.querySelector("video").pause();
    })
}