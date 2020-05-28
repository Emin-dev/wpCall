let ul = document.querySelector("#one")
let btn = document.querySelector("#btnone")
btn.addEventListener("click", function () {
    let txt = document.querySelector("#personone").value
    if (txt != "") {
        let txt2 = document.querySelector("#personone")
        txt2.value = '';
        let li = document.createElement("LI");
        let h6 = document.createElement("h6");
        h6.textContent = txt;
        li.innerHTML=` <img src="user.png" alt="">`
        li.appendChild(h6)
        ul.appendChild(li);
     }
    ul.scrollTop = ul.scrollHeight;
   
})
