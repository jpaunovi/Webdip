
function ProvjeraForme(){
    var veicinaadresa=document.getElementById("adresa");
    var sifra=document.getElementById("sifra");
	var ime = document.getElementById("ime");
    var prezime= document.getElementById("prezime");
	var email = document.getElementById("email");
	var gumb=document.getElementById("RegistracijaForma");
	ime.addEventListener("blur", provjeraSlova);
	prezime.addEventListener("blur", provjeraSlova);
	sifra.addEventListener("blur", provjeraSifra);
	email.addEventListener("blur", provjeriEmail);
	veicinaadresa.addEventListener("blur", provjeraAdresa);
    
	gumb.addEventListener("submit",function(e){
        var rezultat=true;
        var greske=document.getElementsByClassName("greske");
        for (var i = 0 ; i< greske.length; i++){
            if(greske[i].innerHTML !=""){
                //greske[i].style.backgroundColor="red";
                rezultat=false;
            }
        }
        if(rezultat == false){
			e.preventDefault();
			return false; 
			}
        else{
                return true;
            
            }
	});
}
function provjeraAdresa(){
    var vrijednost=this.value;
    if(vrijednost == null){
        document.getElementById("greskaAdresa").innerHTML = "Morate unjet adresu";
        this.style.border = "1 px solid Red";
        return false;
    }
    else if(vrijednost.length >= 100 ){
        document.getElementById("greskaAdresa").innerHTML ="Mora biti manje od 100 znakova";
        this.style.border = "1px solid Red";
		this.focus();
        return false;
       
    }
    else{
    this.style.border = "1px solid blue";
	document.getElementById("greskaAdresa").innerHTML ="";
    return true;
    }
}

function provjeraSlova(){
	
    var vrijednost=this.value;
    var prvoSlovo = vrijednost[0];
	
    if(prvoSlovo !== prvoSlovo.toUpperCase()) {
		if(document.getElementById("ime").value == vrijednost){
         document.getElementById("greskaIme").innerHTML ="Prvo slovo mora biti veliko";
         this.style.border = "1px solid Red";
         

        }
        if(document.getElementById("prezime").value == vrijednost){
		 document.getElementById("greskaPrezime").innerHTML ="Prvo slovo mora biti veliko";
         this.style.border = "1px solid Red";
         
		}
        if(document.getElementById("greskaIme").value != "" && document.getElementById("greskaPrezime").value != ""){
            return false;
        }
        
    }
    else{
        if(document.getElementById("ime").value== vrijednost){
            this.style.border = "1px solid blue";
            document.getElementById("greskaIme").innerHTML ="";
       	  }
        if(document.getElementById("prezime").value == vrijednost){
            this.style.border = "1px solid blue";
            document.getElementById("greskaPrezime").innerHTML ="";
	  }
        if(document.getElementById("greskaIme").value != "" && document.getElementById("greskaPrezime").value != ""){
            return true;
        }
    }
    this.focus();
}

function provjeraSifra(){
    var pass=sifra.value;
    var velicina=false;
    var re= /^\w{10,}$/;
    if(re.test(pass)){
        velicina=true;
        
    }
   var re = /^.*([A-Z].*){1,}$/;
    var velikaSlova = false;
    if (re.test(pass)) {
        velikaSlova = true;
    }
   var re = /^.*([a-z].*){1,}$/;
    var malaSlova = false;
    if (re.test(pass)) {
        malaSlova = true;
    }    
    var re = /^.*([0-9].*){2,}$/;
    var brojke = false;
    if (re.test(pass)) {
        brojke = true;
    }
      if (!(velicina && brojke && malaSlova && velikaSlova)){
          sifra.style.border = "1px solid Red";
		  document.getElementById("greskaSifra").innerHTML ="Lozinka nije ispravna";
		  this.focus();
          return false;
      }
      else{
      sifra.style.border = "1px solid blue";
      document.getElementById("greskaSifra").innerHTML ="";	  
      return true;
        }
}
function provjeriEmail(){
    var emailProvjera=email.value;
    var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    if(emailProvjera.match(pattern)){
        email.style.border = "1px solid blue";
	    document.getElementById("greskaEmail").innerHTML ="";
        return true;
		
    }
    else{
        email.style.border = "1px solid Red";
		document.getElementById("greskaEmail").innerHTML="Email nije ispravan";
		this.focus();
		return false;
    }
}
