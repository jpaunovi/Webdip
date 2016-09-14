<?php
?>
    <!DOCTYPE html>
    <html>
    <body>
    
    <meta charset="UTF-8">
    <?php include 'heder.php'; ?>
    <h2>Dokumentacija</h2>
    <nav id="nav"><ul><li><a href='index.php'>Pocetna</a></li><li><a href='prijava.php'>Prijava</a></li><li><a href='registracija.php'>Registracija</a></li><li><a href='NeregistriranKorisnik.php'>Prikaz filmova po lokciji</a></li></ul></nav>

    <section>
        <h3>Opis projekta</h3>

        <p>Projekt iz kolegija Web dizajn i programiranje: Kino</p>
        <p>Projekt izdađen u skladu sa zahtjevima gdje se naglasak stavlja na razine ovlasti korisnika i njihovu interakciju sa sustavom. </p>

        <ul>
            <li>Neregistrirani korisnik</li>
            <li>Registrirani korisnik</li>
            <li>Moderator</li>
            <li>Administrator</li>
        </ul>

        <h4>Neregistrirani korisnik</h4>
        <p>Vidi popis lokacija i odabirom lokacije vidi popis sa prve tri projekcije koje počinju nakon trenutnog vremena za odabranu lokaciju.</p>

        <h4>Registrirani korisnik</h4>
        <p>Korisnik odabire lokaciju i nakon toga projekciju. Vidi broj slobodnih mjesta, ako nema mjesta ili nije datumski dostupan ne može napraviti rezervaciju. Isti korisnik može rezervirati više mjesta za isti termin projekcije. Korisnik može pregledavati potvrđene i ne potvrđene svoje rezervacije.
            Korisnik može kliknuti na gumb „sviđa mi se“ ili „ne sviđa mi se“ za projekciju i/ili lokaciju.Postavlja sliku ulaznice za projekcije za koje ima potvrđene rezervacije pri čemu može svaku sliku označiti. Svoje slike može filtrirati na temelju oznaka prikazujući slike u obliku galerije.Korisnik može na Google mapi vidjeti lokacije kina.</p>

        <h4>Moderator</h4>
        <p>Definira projekcije (filmove) za lokaciju za koju je zadužen kao moderator sa vremenom trajanja projekcije.
            Definira termine projekcija.
            Svaki termin ima vrijeme i datum kada je on dostupan (od-do) i ima ograničen broj korisnika koji smije pristupiti.
            Može potvrditi/odbiti rezervaciju za projekciju.
            Korisniku se automatski šalje mail sa informacijom da li mu je rezervacija potvrđena ili odbijena.
            Odabirom projekcije može vidjeti popis korisnika (ime i prezime) koji su postavili sliku ulaznice za odabranu projekciju.
            Vidi aplikativnu statistiku klikova „sviđa mi se“ i „ne sviđa mi se“ po lokacijama ili po projekcijama. Uz to može filtrirati po vremenskom periodu.</p>

        <h4>Administrator</h4>
        <p>Definira lokacije (VŽ, ZG Arena, ČK, …) kino multipleksa i dodjeljuje moderatore lokaciji.
            Dodaje adresu (država, grad, ulica, broj) za svaku lokaciju kina.Može preko csv datoteke popuniti ili ažurirati (sa novim podacima) tablice (min. 2) koje predstavljaju katalog (npr. lokacije kina).
            Vidi statistiku posjećenosti pojedinih stranica (za minimalno 5 stranica) i statistiku za minimalno pet upita nad bazom podataka koji se koriste u aplikaciji. Statistiku posjećenosti stranica može filtrirati po korisnicima i vremenskom periodu te sortirati po datumu i vremenu.
            A statistiku upita može filtrati po korisnicima i sortirati po datumu i vremenu.</p>
    </section>

    <section>
        <h3>Skripte korištene u izradi projekta</h3>
        <ul>
            <h4>Php file</h4>
            <li>aktivacija.php -za aktivaciju racuna</li>
            <li>autentikacija.php- za atentikaciju racuna</li>
            <li>bazaclass.php - za sšajanje na bazu</li>
            <li>crud.php- za stvaranje,updatanje i brisanje tablica</li>
            <li>csv.php -za uploada podataka na bazu</li>
            <li>dnevnik.php- za zapis u dnevnik</li>
            <li>dohvatiPomak.php- za dobivanje pomaka</li>
            <li>footer.php</li>
            <li>galerija.php- za ispis slika u obliku galerije</li>
            <li>heder.php</li>
            <li>index.php- pocetna stranica</li>
            <li>IspsiKorisnikaAdmin.php -ispis korisnika</li>
            <li>Izradajsona.php -za izradu jsona</li>
            <li>JsonSveTablice.php- za ispisivanje jsona</li>
            <li>korisnik.php -klasa korisnik</li>
            <li>LokcijeAdmin.php -za ispis lokacija</li>
            <li>mail.php -za slanje emaila</li>
            <li>ModeratorProjekcija.php ispis projekcija,rezervacija</li>
            <li>NeregistriranKorisnik.php za nergistrranog korisnika</li>
            <li>NewPass.php - za novu sifru</li>
            <li>oAutoru.php - o meni</li>
            <li>odjava.php</li>
            <li>PregledRezervacija.php - korisnik pregled rezervacija</li>
            <li>prijava.php - ulazak u sustav</li>
            <li>ProvjeraKorisnickogimena.php</li>
            <li>RadSbazom.php - za izradu upita</li>
            <li>registracija.php - za registriranje u sustav</li>
            <li>RegistriranKorisnik.php - za ulogu registriranog korisnika</li>
            <li>StatistikaAdmin.php - statistika posječenosti i upiti</li>
            <li>StatistikaModerator.php- statistika like/dislike</li>
            <li>StatistikaPosjcenostUpit.php - za izradu statistike</li>
            <li>uploder.php- za upload slike</li>
            <li>IspisTabliceJson.php ispis jsona</li>
            <h4>Js</h4>
            <li>dnevink.js - za ispis dnevnika</li>
            <li>galerija.js - za ispis slika</li>
            <li>IspisKorisnika.js- za ispis korisnika</li>
            <li>IspisRezervacija.js - - za ispis rezervacija</li>
            <li>IspisTablica.js- za ispis tablica</li>
            <li>IspsiKorisnikaAdmin.js-- za ispis korisnika</li>
            <li>KorisnickoImeProvjera.js-provjera kor imena</li>
            <li>LoakacijeAdmin.js-- za ispis lokacija</li>
            <li>ModeratorProjekcija.js - za moderatora</li>
            <li>NeRegistriranKorisnik.js - za nergistrranog korisnika</li>
            <li>RegistracijaProvjera.js -provjera registracije</li>
            <li>RegistriranKorisnik.js- za regstriranog korisnika</li>
            <li>StatistikaAdmin.js - za statistiku</li>
            <li>statistikaModerator.js- za statistiku</li>
            <li>jquery.dataTables.js- vnjaska za datatablicce</li>



        </ul>
    </section>

    <section>
        <h3>Korištene tehnologije</h3>
        <ul>
            <li>PHP - služi za programiranje strane poslužitelja</li>
            <li>PHPStorm - aplikacija za izradu projekta</li>
            <li>CSS - položaj elemenata na stranici</li>
            <li>JS - u svemu</li>
        </ul>
    </section>

    <section>
        <h3>Rješenje projekta</h3>
        <p>
            Zbog nedostatka vremena projekt nije u potpunosti dovršen, većina funkcionalnosti je implementirana.

        <ul>
            <li>Registracija
                <ul>
                    <li>Implementirana je provjera korisnickog imena AJAX-om, CHAPTCA sustav je implementiran, validacija na strani klijenta i servera, omogućena je aktivacija korisnickog racuna emailom, postoji .htaccess ispis korisnika </li>
                    <li>Administrator<li>
                    <li>Moderator<li>
                    <li>Korisnik<li>
                    <li>Neregistriran Korisnik<li>
                </ul>
            </li>

            <li>Prijava
                <ul>
                    <li>Pamćenje korisnika u cookie, omogućena prijava HTTPS-om, odjava sa sustava, zaključavanje korisničkog računa, mogućnost nove lozinke</li>
                </ul>
            </li>

            <li>Rad sustava
                <ul><li>
                        Pretrazivanje straničenjem peko dataTables, prenošenje podataka bez osvježavanja implementirano na nekoliko tablica, omogućen pomak vremena, bilježenje u dnevnik omogućeno, prilagođavanje mediju , sortiranje kolona nije implementirano
                    </li>
                </ul>
            </li>
            <li>Neregistrirani korisnik
                <ul><li>
                        Omogućena uloga neregistrirani korisnik i prikazi sukladno tome
                    </li>
                </ul>

            </li>

            <li>Registrirani korisnik
                <ul>
                    <li>Ima mogućnost ocjenjivanja sadržaja, ima galeriju slika i filtriranje na temelju oznaka, ostale funkcionalnosti: sviđa mi se/ne sviđa mi se,pregled lokacja,rezervacija,projekcija,slika i pregled kina na google mapi</li>
                </ul>
            </li>

            <li>Moderator
                <ul>
                    <li>Ima mogućnost definiranja vlastitih elemenata, ima mogućnost potvrde ili odbijanja rezervacije, ima mogućnost pregleda statistike "lajkova"</li>
                </ul>
            </li>

            <li>Administrator
                <ul><li>
                        Može otključavati/zaključavati račune, ima mogućnost konfiguracije sustava, ima mogućnosti pregleda svih tablica i upravljanje istima, može dodjeliti moderatora, može definirati adrese lokacje,ima  mogućnost uploada CSV datoteke, ima mogućnost pregleda statistike.
                    </li>
                </ul>
            </li>

            <li>Posebne osobine
                <ul><li>
                        Od posebnih osobina implementirana je google mapa za prikaz kina.
                    </li></ul>
            </li>

            <li>Pogreške u radu
                <ul><li>
                        Kod implementiranih funkcionalnosti nisam naišao na pogreške
                    </li>
                </ul>
            </li>
        </ul>
        </p>

    </section>
        <div><img src="slike/era.png"></div>


    </body>






<?php
include 'footer.php';
?>
</html>
