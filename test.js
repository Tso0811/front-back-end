// function a(){
//     for (i=1;i<=10;i++){
//         console.log(i)
//     }
// }

// a()
// window.addEventListener("load",function(){
//     document.getElementsByClassName("makeirBrown")
//     document.getElementsById("btn");
//     document.getElementsById("link");


// const buttonElement = document.getElementById("btn");
// buttonElement.addEventListener("click",function(){
//     alert("Element clicked through function()");
//     console.log(123);
// });
// });

// window.addEventListener("click",function(){
//     document.getElementById("link").innerHTML="ok";
// });

document.addEventListener('DOMContentLoaded', function () {

    let uploadBtn = document.getElementById("upload");
    let textContent = document.getElementById("textContent");

    uploadBtn.addEventListener("click", function () {
        let currentTime = new Date();
        let formattedTime = currentTime.toLocaleString();
        uploadBtn.style.pointerEvents = "none";
        let message = document.createElement("div");
        message.classList.add("copyArea");
        message.id = "showMessage";
        message.innerHTML = `
            <div class="row rounded-5 p-4">
                <div class="col d-flex bg-secondry rounded-top-4">
                    <div class="col-1 text-warning" id="getUsergender">男</div>
                    <div class="col-3 text-warning text-truncate" id="getUsername">名字</div>
                    <div class="col-1"></div>
                    <div class="col-5 text-warning ml-auto" id="getTime">2023/11/26 下午15:26:20</div>
                    <button class="btn btn-danger btn-sm d-flex" id="deletMessage">刪除</button>
                </div> 
            
                <div class="parent-element text-wrap bg-white p-3 rounded-1 text-break">
                    <div class="w-auto d-inline-block parent-element" id="copyText"></div>
                </div>
            </div>`;
        message.querySelector("#copyText").textContent = textContent.value;
        message.querySelector("#getTime").textContent = formattedTime;
        placeMessage.appendChild(message);

    });
})
