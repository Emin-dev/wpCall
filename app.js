window.addEventListener('load', load());

function load() {

    let idli = 1;
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
            li.innerHTML = ` <img src="user.png" alt="">`
            li.appendChild(h6)
            li.setAttribute("id", `id${idli}`);
            idli++;
            ul.appendChild(li);
        }
        ul.scrollTop = ul.scrollHeight;

        let call=document.querySelector(".call")
        let endbtn = document.querySelector("#end")
    endbtn.addEventListener("click", function () {
        call.classList.add("d-none");
    })
       
        let list = document.querySelector("ul");
        function myid() {
            let pName=document.querySelector(`#${this.id}`).innerText

            call.classList.remove("d-none");
            let callName=document.querySelector(".callName")
            callName.innerText=pName;
            
        }

        list.children[list.childElementCount - 1].addEventListener("click", myid);


    })




}