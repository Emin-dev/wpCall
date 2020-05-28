let ul = document.querySelector("#one")
let ull = document.querySelector("#two")

let btn = document.querySelector("#btnone")
btn.addEventListener("click", function () {
    let txt = document.querySelector("#personone").value
    if (txt != "") {
        let txt2 = document.querySelector("#personone")
        txt2.value = '';
        let li = document.createElement("LI");
        let h6 = document.createElement("h6");
        h6.textContent = txt;
        li.appendChild(h6)
        ul.appendChild(li);
        ull.appendChild(li.cloneNode(true));
        h6.classList.add("fromYou")
        li.classList.add("fromMe") }
    ul.scrollTop = ul.scrollHeight;
    ull.scrollTop = ull.scrollHeight;
})
let btn2 = document.querySelector("#btntwo")
btn2.addEventListener("click", function () {
    let txt = document.querySelector("#persontwo").value
    if (txt != "") {
        let txt2 = document.querySelector("#persontwo")
        txt2.value = '';
        let li = document.createElement("LI");
        let h6 = document.createElement("h6");
        h6.textContent = txt;
        li.appendChild(h6)
        ull.appendChild(li);
        ul.appendChild(li.cloneNode(true));
        h6.classList.add("fromYou")
        li.classList.add("fromMe")  }
    ul.scrollTop = ul.scrollHeight;
    ull.scrollTop = ull.scrollHeight;
})
