const tgl1 = document.getElementById(tgl1);
const satu = document.getElementById(satu);
const dua = document.getElementById(dua);
const tiga = document.getElementById(tiga);
const empat = document.getElementById(empat);
const lima = document.getElementById(lima);

tgl1.onclick = function(){
    satu.classList.toggle('satu')
    dua.classList.toggle('satu')
    tiga.classList.toggle('satu')
    empat.classList.toggle('satu')
    lima.classList.toggle('satu')
}