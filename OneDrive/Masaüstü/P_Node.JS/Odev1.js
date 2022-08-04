/*
 * Node.JS Komut Satırı Kullanımı
 * Daire alanı = pi*r^2
 *  Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan parametre olarak girerek alanı bulma
 *  Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.
 */
let pi =3.12
function daireAlan(Yarıcap){
    let Alan = Math.PI * Math.pow(Yarıcap,2)
    return Alan
}

let Yarıcap = daireAlan(process.argv.slice(2))
console.log(Yarıcap)