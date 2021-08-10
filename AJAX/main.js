let pageCounter =1;
let btn = document.getElementById("btn");
let animalContainer = document.getElementById("animal-info");

btn.addEventListener("click", function(){
    let ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-'+pageCounter+'.json');
    //what happens when data is loaded
    ourRequest.onload = function(){
    
        var ourData = JSON.parse(ourRequest.responseText);
        //by default browser interprets the data as plain text not json
        renderHTML(ourData);
        pageCounter++;
        
    };
    
    
    ourRequest.send();
})

function renderHTML(data){

    var htmlStirng="";

    for(i=0;i<data.length;i++){
        htmlStirng +="<p>"+data[i].name + " is a "+ data[i].species + ".</p>";
    }

    animalContainer.insertAdjacentHTML('beforeend',htmlStirng);
}
