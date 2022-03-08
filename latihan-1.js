function hitungLuasPersegiPanjang(p,l){
   return p * l
}
   var p = parseInt(prompt('masukan nilai panjang :'));
   var l = parseInt(prompt('masukan nilai lebar :'));
   var hasil = hitungLuasPersegiPanjang(p,l);
   document.write('Luas persegi panjang : ',hasil,'cm²');