function VolumeDanLuasPermukaanBalok (p,l,t){
    return p * l * t;
}

var p = parseInt(prompt('Masukan nilai panjang :'));
var l = parseInt(prompt('Masukan nilai lebar :'));
var t = parseInt(prompt('Masukan nilai tinggi :'));
var volume = VolumeDanLuasPermukaanBalok(p,l,t)
var luas = 2 * (p *l) + (p * t) + (l * t)
document.write('Volume balok : ',volume,'cm³', '<br>')

document.write('Luas balok : ',luas,'cm²')
