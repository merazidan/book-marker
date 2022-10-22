var siteNameInputt = document.getElementById("siteNameInput");
var siteUrlInputt= document.getElementById("siteUrlInput");
favBookContainer=[]

if(localStorage.getItem ('favBooks')!=null){
    favBookContainer= JSON.parse(localStorage.getItem('favBooks'))
     display();
 }

  

function addYourFavSite(){
    var x = {
        siteName : siteNameInputt.value,
        siteUrl : siteUrlInputt.value
    }
    favBookContainer.push(x)
   localStorage.setItem('favBooks',JSON.stringify(favBookContainer));
   retrieve();
   display();
}
function retrieve() {
    siteNameInputt.value=''
    siteUrlInputt.value=''
}

function display(){
    var cartona=``
    for (i=0;i<favBookContainer.length;i++){
        cartona += `<tr>
        <td class=" my-2 w-50  text-white text-center"> ${favBookContainer[i].siteName}</td>
        <td> <button class=" btn  btn-primary my-2" onclick='visit(${i})' > <a class=" text-decoration-none text-white"  href="${favBookContainer[i].siteUrl}" target="_blank"> Visit</a></button></td>
        <td><button  class=" btn  btn-danger my-2" onclick='Delete (${i})' >Delete</button></td>
     </tr> `
    }
    document.getElementById("tableBody").innerHTML=cartona;
}
function Delete (term){
favBookContainer.splice(term,1);
localStorage.setItem('favBooks',JSON.stringify(favBookContainer));
display();
}
function visit (){
siteNameInputt.value;
}
function search(term){
    var cartona=``
    for (i=0;i<favBookContainer.length;i++){
        if(favBookContainer[i].siteName.toLowerCase().includes(term.toLowerCase())==true){
        cartona += `<tr>
        <td class=" my-2 w-50  text-white text-center"> ${favBookContainer[i].siteName}</td>
        <td> <button class=" btn  btn-primary my-2" onclick='visit(${i})' > <a class=" text-decoration-none text-white"  href="${favBookContainer[i].siteUrl}" target="_blank"> Visit</a></button></td>
        <td><button  class=" btn  btn-danger my-2" onclick='Delete (${i})' >Delete</button></td>
     </tr> `
    } 
    }
    document.getElementById("tableBody").innerHTML=cartona;
   
}

    
