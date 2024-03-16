const item = document.getElementById("item");
const add = document.getElementById("add-button");
const title = document.getElementById("title");
const description = document.getElementById("description");
//dohvatio sve elemente iz html-a

add.addEventListener("click" , function(){
    // add dugme koje dodaje ove span-ove za informacije
const div = document.createElement("div");
div.className = "card p-3 d-flex flex-column gap-2";
//napravio novi element tipa div

const span1 = document.createElement("span");
span1.innerHTML = title.value;
//napravio jedan span cija ce vrijednost biti jednaka vrijednosti prvog input polja "title"

const span2 = document.createElement("span");
span2.innerHTML = description.value;
//napravio drugi span cija ce vrijednost biti jednaka vrijednosti drugog input polja "description"

const button = document.createElement("button");
button.className = "btn btn-primary";
button.innerHTML = "Prikazi informacije";
//napravio dugme koje ce otvarati novu stranicu na kojoj ce se prikazivati vrijednosti iznad navedenih input polja

const button2 = document.createElement("button");
button2.className = "btn btn-danger";
button2.innerHTML = "Remove ToDo";
//napravio drugo dugme koje ce brisati kompletan ovaj element ukljucujuci 2 dugmeta i 2 spana

button2.addEventListener("click" , function(){
//dodijelijo funkciju dugmetu brisanja kompletnog div elementa
    div.remove();
});

const tempTitle = title.value;
//nova konstanta koja ce ispisivati vrijednost input polja "title" na novom prozoru
const descriptionTitle = description.value;
//ispisuje vrijednost inpout polja "description" na novom prozoru
button.addEventListener("click" , function(){
    const newWindow = window.open();
    //dodjela funkcije dugmetu koje ce otvarati novi prozor

    const p1 = document.createElement("p");
    p1.innerHTML = tempTitle;
    //napravio jedan paragraf koji ce ispisivati vrijednost "title" na novoj stranici

    const p2 = document.createElement("p");
    p2.innerHTML = descriptionTitle;
    //napravio drugi paragraf koji ce ispisivati vrijednost "description" na novoj stranici

    const btn = newWindow.document.createElement("button");
    btn.innerHTML = "Close window";
    //napravio dugme koje ce zatvarati tu novu stranicu
    btn.addEventListener("click", function(){

        newWindow.close();
        //dodijelio funkciju dugmetu koje ce zatvarati novu stranice

    });

    newWindow.document.body.append(p1);
    newWindow.document.body.append(p2);
    newWindow.document.body.append(btn);
    //dodao sve nove elemente na novu stranicu
});

div.append(span1);
div.append(span2);
div.append(button);
div.append(button2);
item.append(div);
//dodao sve nove elemente na main stranicu
});
