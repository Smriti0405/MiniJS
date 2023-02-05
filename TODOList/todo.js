
document.getElementById("btn").addEventListener("click",function(e){
    e.preventDefault()
    display();  
})
// document.getElementById("btn").onclick=()=>{
//     display(); 
// }
function display(){
    let str = document.getElementById("text-space").value;

    if(str.length==0){
        alert("Note field cannot be empty")
    }
    else{
        document.getElementById("notes-layout").innerHTML +=
        `<div class="note_content">
        <p class="note-text">${str}</p>
        <div class="icons">
            <i class="fa-solid fa-pen-to-square edit"></i>
            <i class="fa-solid fa-trash delete"></i>
        </div>
    </div>`
    document.getElementById("text-space").value = '';
    let del = document.getElementsByClassName("delete")
    for(let i=0; i<del.length; i++){
        del[i].onclick=function(){
            this.parentNode.parentNode.remove()
        }
    }
    }

    let ed = document.querySelectorAll(".edit")
    for(let i=0; i<ed.length; i++){
        ed[i].onclick=function(){
            let s = document.getElementsByClassName("note-text")[i].innerHTML;
            document.getElementById("text-space").value = s;
            this.parentNode.parentNode.remove()
            // console.log(s)
        }
    }
}
