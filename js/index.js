class Addbook{


    static Aler(message){
    
        const divelem = document.createElement("div");
    divelem.innerHTML = `
                           <div class="alert alert-success"> 
                           ${message}
                           <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                           <span aria-hidden="true">&times;</span>
                         </button></div>
                        ` ; 
     let dom = document.getElementById("container");
      dom.insertBefore(divelem, dom.childNodes[2]);

    }

    static add(name , author , code){
        const row = document.createElement("tr");
        row.innerHTML = `
                       <td>${name}</td>
                       <td>${author}</td>
                       <td>${code}</td>
                       <td> <button class="btn btn-sm btn-danger float-right clear"  type="button">x</button> </td>
                       `
        const tab = document.getElementById("tbody").appendChild(row);
    }
    static clearinp(){
        document.getElementById("name").value ="";
        document.getElementById("author").value="";
        document.getElementById("code").value="";
    }


    // remove book 

    static removebook(el){
        if (el.classList.contains("clear")){
            el.parentElement.parentElement.remove();
        }
    }
    static removealert(){
        setTimeout(() => {
            document.querySelector(".alert").remove(); // remove alert after 3s 
         }, 1500);
    }
}



// add book 
const but = document.getElementById("btn") ; 
but.addEventListener("click",() => {

 if ( document.getElementById("name").value === "" || document.getElementById("author").value=== "" || document.getElementById("code").value===""){
    Addbook.Aler('please fill all the information ! ') ;
 
}else{
    let name = document.getElementById("name").value ; 
    let author = document.getElementById("author").value ;
    let code = document.getElementById("code").value ;
  
    Addbook.add(name, author , code ); // add the book 
    Addbook.clearinp();   // clear inputs after adding the book 
    Addbook.Aler('book added');// show alert after adding the book 
    Addbook.removealert();


}

});

// remove book 
document.getElementById("tbody").addEventListener("click", (e) => {
   Addbook.removebook(e.target) ; 
   Addbook.Aler('book added');// show alert after adding the book 
  Addbook.removealert();
});


