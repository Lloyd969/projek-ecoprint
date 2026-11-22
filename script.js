const products = [
  {name:'Masukkan Teks',image:'images/ranting-senja.jpg',plant:'Daun jati',category:'Botani',symbol:'❋',flower:'#997451',flower2:'#84916b',bg:'linear-gradient(145deg,#d4d8c5,#b2c0a6)',description:'Daun jati meninggalkan bentuk urat yang tegas dengan rona cokelat kemerahan. Polanya terasa hangat seperti cahaya sore dan cocok untuk menemani aktivitas sehari-hari.',detail:'Daun: jati · Karakter: urat tegas, warna bumi · Tiap cetakan memiliki susunan yang berbeda.'},
  {name:'Masukkan Teks',image:'images/kembang-pagi.jpg',plant:'Daun jarak & bunga',category:'Bunga',symbol:'✿',flower:'#b36d62',flower2:'#87936a',bg:'linear-gradient(135deg,#e5d5c7,#c9c9b0)',description:'Perpaduan daun jarak dan bunga kecil memberi siluet bundar yang lembut. Warna merah bata dan hijau alami membuat motifnya terasa ceria.',detail:'Daun dan bunga: jarak, bunga taman · Karakter: bentuk bundar, warna lembut · Disusun manual sebelum dikukus.'},
  {name:'Masukkan Teks',image:'images/jejak-pakis.jpg',plant:'Daun pakis',category:'Botani',symbol:'❧',flower:'#587954',flower2:'#a98159',bg:'linear-gradient(135deg,#dce1d1,#b5c0a2)',description:'Daun pakis menghadirkan pola berulang yang mengalir seperti tumbuh di tepi hutan. Jejak tulang daunnya memberi detail yang khas.',detail:'Daun: pakis · Karakter: pola berulang dan memanjang · Warna muncul dari pigmen daun dan proses ecoprint.'},
  {name:'Masukkan Teks',image:'images/mekar-liar.jpg',plant:'Daun eucalyptus',category:'Bunga',symbol:'❀',flower:'#a96250',flower2:'#7f9167',bg:'linear-gradient(135deg,#e3d8c8,#c9c3aa)',description:'Daun eucalyptus menghasilkan bentuk bulat lonjong dengan nuansa hijau zaitun. Tata letaknya dibiarkan spontan agar setiap tas punya komposisi sendiri.',detail:'Daun: eucalyptus · Karakter: bentuk bulat lonjong, hijau zaitun · Motif dibuat satu per satu.'},
  {name:'Masukkan Teks',image:'images/daun-teduh.jpg',plant:'Daun monstera',category:'Minimal',symbol:'♧',flower:'#617b54',flower2:'#84906d',bg:'linear-gradient(135deg,#d7dfd0,#b6c2af)',description:'Satu daun monstera menjadi pusat perhatian dengan bentuk lebar dan belahan khas. Pilihan sederhana untuk yang menyukai motif yang lapang.',detail:'Daun: monstera · Karakter: satu bentuk daun lebar dengan ruang kosong · Tata letak tiap karya tetap unik.'},
  {name:'Masukkan Teks',image:'images/kebun-kecil.jpg',plant:'Daun & bunga kebun',category:'Botani',symbol:'❁',flower:'#a47858',flower2:'#778764',bg:'linear-gradient(135deg,#ddd8c4,#bdc4a9)',description:'Kolase daun dan bunga kecil mengingatkan pada kebun di pagi hari. Bentuk-bentuknya disusun dengan tangan tanpa pola cetak berulang.',detail:'Daun dan bunga: pilihan dari kebun · Karakter: kolase spontan dengan warna bumi · Satu-satunya untuk setiap tas.'}
];
const grid = document.querySelector('#productGrid');
const dialog = document.querySelector('#motifDialog');
function renderProducts(){
  grid.innerHTML = products.map((p,i)=>`<article class="product-card">
    <div class="product-media-row">
      <button class="product-photo" type="button" data-index="${i}" aria-label="Lihat detail ${p.name}" style="--bg:${p.bg};--flower:${p.flower};--flower2:${p.flower2}">
        <img class="product-image" src="${p.image}" alt="Totebag ecoprint ${p.name}" onerror="this.hidden=true"><span class="product-bag"><span>${p.symbol}</span></span>
      </button>
      <button class="motif-button" type="button" data-index="${i}" aria-label="Informasi motif ${p.name}">i&nbsp; Motif</button>
    </div>
    <div class="product-meta"><div><h3>${p.name}</h3><small>${p.plant} · Kanvas katun</small></div></div>
  </article>`).join('');
  grid.querySelectorAll('.motif-button,.product-photo').forEach(button=>button.addEventListener('click',()=>{const p=products[Number(button.dataset.index)];window.botanicalNavigate('motif.html?motif='+encodeURIComponent(p.name))}));
}
renderProducts();

const cinematicVideo = document.querySelector('#cinematicVideo');
if (cinematicVideo) {
  cinematicVideo.addEventListener('playing', () => cinematicVideo.parentElement.classList.add('has-video'));
  cinematicVideo.play().catch(() => {});
}






