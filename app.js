const products = [

{
name:"GNR Casca",
price:15000,
category:"GNR",
image:"https://picsum.photos/300/200?1"
},

{
name:"GNR Pentium",
price:25000,
category:"GNR",
image:"https://picsum.photos/300/200?2"
},

{
name:"GNR Gold",
price:40000,
category:"GNR",
image:"https://picsum.photos/300/200?3"
}

];


let panier = [];



// CHANGER DE PAGE

function openPage(pageId){

document.querySelectorAll(".page")
.forEach(page=>{
page.classList.remove("active");
});


document.getElementById(pageId)
.classList.add("active");

}




// AFFICHER PRODUITS

function showProducts(liste, emplacement){


let zone=document.getElementById(emplacement);


if(!zone) return;


zone.innerHTML="";



liste.forEach((produit)=>{


zone.innerHTML += `

<div class="product">


<img src="${produit.image}">


<h3>
${produit.name}
</h3>


<p class="price">
${produit.price} FCFA
</p>


<button onclick="addCart('${produit.name}')">

Ajouter

</button>


</div>

`;

});


}





// FILTRE GNR

function filter(categorie){


let resultat = products.filter(
produit => produit.category === categorie
);


showProducts(resultat,"products");


}






// AJOUT PANIER

function addCart(nom){


let produit = products.find(
p => p.name === nom
);


panier.push(produit);


updateCart();


}





// PANIER

function updateCart(){


let zone=document.getElementById("cartItems");

let totalZone=document.getElementById("total");


if(panier.length===0){

zone.innerHTML="Panier vide";

totalZone.innerHTML="0";

return;

}


let total=0;


zone.innerHTML="";


panier.forEach(produit=>{


total += produit.price;


zone.innerHTML += `

<p>
${produit.name} - ${produit.price} FCFA
</p>

`;

});


totalZone.innerHTML=total;


}





// COMMANDE

function checkout(){


if(panier.length===0){

alert("Votre panier est vide");

return;

}


alert(
"Commande Vente CTV envoyée !"
);


}





// AU LANCEMENT

showProducts(products,"popular");