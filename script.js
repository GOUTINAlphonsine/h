document.addEventListener("DOMContentLoaded", function(){
   const progression = document.querySelectorAll(".pro");
    progression.forEach(pro => {
        let percent = pro.getAttribute("data-percent");
        pro.style.width = percent + "%";
    } );
});

function affichermessage(){
      event.preventDefault();
      let nom = document.getElementById("nom _prénom").value;
      let mail = document.getElementById("email").value ;
      let objets = document.getElementById("Objet").value ;
      let Messages = document.getElementById("message").value ;

      if(nom === "" || mail === "" || objets === "" || Messages === ""){
        alert("Renprissez toute les chamsps");
      } else{
        document.getElementById("Mes").textContent = "Bonjour " + nom + " Votre message est envoyer avec succès" ;
        this.reset();
      }
}

document.addEventListener("DOMContentLoaded", function(){
    const menuToggle = document.querySelector(".small_menu");
    const menu = document.querySelector(".lis");

    if(menuToggle && menu) {
        menuToggle.addEventListener("click", function(){
            menu.classList.toggle("small");
            menuToggle.classList.toggle("active");
        });
    }
});


window.addEventListener("scroll", function(){
    let header = this.document.querySelector("header");
    header.classList.toggle("scrolled", this.window.scrollY > 50 );
});