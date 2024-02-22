pesanwhatsapp = "";
  
const body = dokumen.querySelector("body"); const swalst = Swal.mixin({timer: 2777,allowOutsideClick: false, showConfirmButton: false, timerProgressBar: true, imageHeight: 90,}); audio = Audio baru('' + linkmp3.src);

/* Hati Berjatuhan */
fungsi jatuhan() {
  const hati = dokumen.createElement("div");
  heart.innerHTML = "<svg class='putaran garis' style='opacity:.4;' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><g transform='translate(2.550170, 3.550158)'><jalur d='M0.371729633,8.89614246 C -0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.347857538 8.20372963,0.150142462 9.50072 963,1.93914246 C10.7237296,0.0841424625 13.0727296,-0.343857538 14.9207296,0.249142462 C18.4367296,1.38114246 19.6987296,5.5461 4246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z'></path><jalur d='M13. 23843,4.013842 C14.44543,4.137842 15.20043,5.094842 15.15543,6.435842'></jalur ></g></svg>";
  heart.className = "ikon hati";
  hati.gaya.kiri = (Matematika.acak() * 95) + "vw";
  heart.style.animationDuration = (Math.random() * 3) + 2 + "s";
  document.body.appendChild(hati);
}

setInterval(fungsi() {
  var heartArr = dokumen.querySelectorAll(".heart-icon");
  if (heartArr.length > 100) {
    heartArr[0].hapus();
  }
}, 100);
//setInterval(berjatuhan, 200);
/* Akhir Hati Berjatuhan */

/*teksjudulakhir =akhir judul.innerHTML; judulakhir.innerHTML="";
tekskalimatakhir = kalimatakhir.innerHTML; kalimatakhir.innerHTML="";
tekspalingakhir = palingakhir.innerHTML; palingakhir.innerHTML="";
*/
  initextsec2 = textsec2.innerHTML;textsec2.innerHTML="";
  fungsi mulaitextseco(){
  	teks4.style="margin-top:-75px;margin-bottom:15px;transform:scale(.8);transition:all .7s ease";
  	scrollContainer.style="transformasi: skala(1)";
  	TypeIt baru("#textsec2", {
      string: ["" + initextsec2], startDelay: 200, kecepatan: 35, kursor: true,
      setelah Selesai: fungsi(){
      	textsec2.innerHTML = initextsec2;
          setInterval(berjatuhan,200);
          clearInterval(scrollInterval);
          
          teks4.style="margin-top:-75px;margin-bottom:15px;transform:scale(0);transition:all .7s ease";
          setTimeout(fungsi(){
          	teks4.style="margin-top:-75px;margin-bottom:15px;transform:scale(.8);transition:all .7s ease";
              stikersec2.src = stikersec2b.src;
          },300);
          
          /*var nim = document.getElementById("nimasi");
          nim.classList.add("textspin");
          */
         
          //smn();
      },}).pergi();
   }
   
fungsi=0;fungsiklik=0;skrg=1;iniaja=0;
fungsi tes(){
  sentuh.style="margin-top:100px;transform:scale(2)";
  setTimeout(fungsi() {
        if(fungsi==0){
           //initom.style="opacity:0;bawah:0;";
           window.scrollBy({atas: tinggi,perilaku: 'halus'});
           fungsi = 1;
           skrg++;
           skrg++;
           //if(skrg==3){fungsi=0;setTimeout(mulaitextseco,1200);setTimeout(function() {teks4.style="transform:scale(1);transition:all .7s ease";}, 700 );}
           if(skrg==3){fungsi=0;setTimeout(mulaitextseco,500);}
           if(skrg==4){setTimeout(katateksnimasi,700);}
           jika(skrg==5){}
           //if(skrg>=6){initom.style="opacity:0;bottom:0;";}
        }
  }, 100);
}
  fungsi smn(){fungsi=0;initom.style="";}

  function muncultombol(){fungtom=1;Tombol.style="opacity:1;transform:scale(1)";}
  function muncultombol2(){Tombol2.style="opacity:1;transform:scale(1)";}
  
fungsi aksiakhir() {
  if(fungsiklik==0){
    fungsiklik=1;
    setTimeout(katajudul,100)
  }
}

fungsi katajudul(){
  	new TypeIt("#judulakhir", {
      string: ["" + teksjudulakhir], startDelay: 50, kecepatan: 50, kursor: true,
      setelah Selesai: fungsi(){
      	judulakhir.innerHTML = teksjudulakhir;
          setTimeout(katakata,400);
      },}).pergi();
}
fungsi katakata(){
	  new TypeIt("#kalimatakhir", {
      string: ["" + tekskalimatakhir], startDelay: 50, kecepatan: 48, kursor: true,
      setelah Selesai: fungsi(){
      	kalimatakhir.innerHTML = tekskalimatakhir;
          //judulakhir.style="opacity:0;transform:scale(0);";
          setTimeout(teksmuncul,20);
          setInterval(berjatuhan,200);
          setTimeout(kataakhir,700);
      },}).pergi();
}
fungsi teksmuncul(){
  //teksjudulakhir2 = "Aku Cinta Kamu âœ¨";
	//judulakhir.innerHTML=teksjudulakhir2;
	//judulakhir.style="font-family:var(--caveat);ukuran font:27px";
	//setTimeout(jjteksnim,300);
	stikerakhir.style="opacity:0;transform:scale(0)";
	setTimeout(gantifotoakhir,400);
}
function jjteksnim(){judulakhir.style.animation="rto .8s alternatif tak terbatas";}
function gantifotoakhir(){stikerakhir.src=stikerakhir2.src;stikerakhir.style="";}
fungsi kataakhir(){
	  new TypeIt("#palingakhir", {
      string: ["" + tekspalingakhir], startDelay: 50, kecepatan: 50, kursor: true,
      setelah Selesai: fungsi(){
      	palingakhir.innerHTML = tekspalingakhir;
          setTimeout(muncultombol3,500);
      },}).pergi();
}
function muncultombol3(){fungtom2=1;TombolWA.style="opacity:1;transform:scale(1)";}
function menuju(){if(fungtom2==1){window.location = "https://api.whatsapp.com/send?phone=&text=" + pesanwhatsapp;}}

tinggi = inisection.offsetHeight;
function menetapkantinggi(){tinggi = inisection.offsetHeight;}
setInterval(tentukantinggi,200);
console.log(tinggi);

fungsiAud=0;fungsi playaud(){if(fungsiAud==0){fungsiAud=1;audio.play();}}
fungsi keatas(){window.scrollTo(0, 0);}

fungsi mulaiyuk(){
    jendela.scrollTo(0, 0);
    setTimeout(keatas,500);
    
    var overlay = document.querySelector(".loading-message");
    overlay.style.display = "tidak ada";
    var tomlv = dokumen.querySelector(".blocklove");
    tomlv.style.display = "fleksibel";
    
}
setTimeout(mulaiyuk,1400);
first_stiker.style="transformasi: skala(0)";
sentuh.style="transformasi: skala(0)";
fungsi showSentuh(){sentuh.style="transform: scale(1);";}
vgantiTeks1 = 0;
fungsi gantiTeks1(){
    if(vgantiTeks1 == 0){gantiFoto1();teks1.style="transform: scale(.3);transition:all .75s ease";vgantiTeks1++;setTimeout(gantiTeks1,300);}
    else {vgantiTeks1 = teks2.innerHTML;teks1.innerHTML = "";teks1.style="transform: scale(.9);transition:all .75s ease";gantiTeks1nimasi();}
}
fungsi gantiFoto1(){
    first_stiker.style="transformasi: skala(0);";
    setTimeout(fungsi() {
        first_stiker.style.transform = "skala(1)";
        inistiker1.src = inistiker2.src;
    }, 300);
}
fungsi gantiTeks1nimasi(){
  	TypeIt baru("#teks1", {
      string: ["" + vgantiTeks1], startDelay: 10, kecepatan: 35, kursor: true,
      setelah Selesai: fungsi(){
          teks1.innerHTML = vgantiTeks1;
          tampilkanSentuh();
      },}).pergi();
   }

var sudahKlik = false;
sudahKlik = benar;
    document.getElementById('loveIn').innerHTML = '<style>.lovein svg{animation:none;stroke:#ff0000;stroke-width:1.3;fill:none;width:35px;height:35px}</style> <label class="lovein"><svg class="line" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g transform="translate(2.550170, 3.550158)"><jalur d="M0.371729633,8.89614246 C-0.701270367,5.54614246 0.553729633,1.38114246 4.07072963,0.249142462 C5.92072963,-0.3 C 18 .4367296,1.38114246 19.6987296,5.54614246 18.6267296,8.89614246 C16.9567296,14.2061425 11.1297296,16.9721425 9.50072963,16.9 721425 C7.87272963,16.9721425 2.09772963,14.2681425 0.371729633,8.89614246 Z"></path><jalur d="M13.23843,4.013842 C14 .44543,4.137842 15.20043,5.094842 15.15543,6.435842"></path></g></svg></label><p id="ket">Sentuh LOVEnya!</p>';
document.getElementById("loveIn").onclick = function() {
    if (sudahKlik) {
    bermainaud();
    var overlay = dokumen.querySelector(".overlay");
    overlay.style.display = "tidak ada";
    //initom.gaya="";
    first_stiker.style="transformasi: skala(1)";

    //setTimeout(gantiTeks1, 3000);
    setTimeout(showSentuh, 400);

    ScrollReveal({ setel ulang: benar });
    ScrollReveal().reveal(".show-once", { reset: false});
    ScrollReveal().reveal(".txt", {durasi: 500,asal: "atas",jarak: "50px"});
    ScrollReveal().reveal(".title", {delay: 20, durasi: 1500,asal: "top",jarak: "50px", easing: "cubic-bezier(0.5, 0, 0, 1)", putar : { x: 20, z: -10 }});
    ScrollReveal().reveal(".fade-in", {delay: 200, durasi: 2400,move: 0});
    ScrollReveal().reveal(".scaleUp", {delay: 100, durasi: 1500, skala: .5, perpindahan: 0});
    ScrollReveal().reveal(".flip", {delay: 200, durasi: 2000, putar: { x: 20, z: 20}});
    ScrollReveal().reveal(".slide-right", {durasi: 1000,asal: "kiri",jarak: "300px",easing: "ease-in-out"});
    ScrollReveal().reveal(".slide-up", {durasi: 1000, asal: "bawah", jarak: "100px", pelonggaran: "cubic-bezier(.37,.01,.74,1)", opasitas: 0, skala: 0,5});
    
    document.addEventListener('scroll', function(e) {
        biarkan documentHeight = document.body.scrollHeight;
        biarkan currentScroll = window.scrollY + window.innerHeight;
        biarkan pengubah = 200;
        if(Gulir Saat Ini + pengubah > tinggi dokumen) {
            console.log('Sudah sampai bawah!');
            //initom.style="opacity:0;bawah:0";
            //setTimeout(aksiakhir,10);
        } kalau tidak {
            //initom.gaya="";
        }
    })
} kalau tidak {
    
}
}

  const scrollContainer = document.getElementById("scroll-container");
  const textContainer = dokumen.getElementById("textsec2");

fungsi gulir otomatis() {
    scrollContainer.scrollTop += 10;
}

const scrollInterval = setInterval(autoScroll, 50);
