const motifList = [
  {name:'Masukkan Teks',image:'images/ranting-senja.jpg',video:'videos/ranting-senja.mp4',plant:'Masukkan Teks',description:'Masukkan Teks',facts:'Masukkan Teks'},
  {name:'Masukkan Teks',image:'images/kembang-pagi.jpg',video:'videos/kembang-pagi.mp4',plant:'Masukkan Teks',description:'Masukkan Teks',facts:'Masukkan Teks'},
  {name:'Masukkan Teks',image:'images/jejak-pakis.jpg',video:'videos/jejak-pakis.mp4',plant:'Masukkan Teks',description:'Masukkan Teks',facts:'Masukkan Teks'},
  {name:'Masukkan Teks',image:'images/mekar-liar.jpg',video:'videos/mekar-liar.mp4',plant:'Masukkan Teks',description:'Masukkan Teks',facts:'Masukkan Teks'},
  {name:'Masukkan Teks',image:'images/daun-teduh.jpg',video:'videos/daun-teduh.mp4',plant:'Masukkan Teks',description:'Masukkan Teks',facts:'Masukkan Teks'},
  {name:'Masukkan Teks',image:'images/kebun-kecil.jpg',video:'videos/kebun-kecil.mp4',plant:'Masukkan Teks',description:'Masukkan Teks',facts:'Masukkan Teks'}
];
const requestedName = new URLSearchParams(window.location.search).get('motif');
const motif = motifList.find(item => item.name === requestedName) || motifList[0];
document.title = `${motif.name} — Rona Rimba`;
document.querySelector('#motifTitle').textContent = motif.name;
document.querySelector('#motifPlant').textContent = motif.plant;
document.querySelector('#motifDescription').textContent = motif.description;
document.querySelector('#motifFacts').textContent = motif.facts;
const motifImage = document.querySelector('#motifImage');
motifImage.src = motif.image;
motifImage.alt = `Totebag ecoprint ${motif.name} dengan motif ${motif.plant}`;
const video = document.querySelector('#processVideo');
const toggle = document.querySelector('#videoToggle');
const message = document.querySelector('#videoMessage');
video.src = motif.video;
video.loop = true;
video.muted = true;
video.playsInline = true;
function updateVideoButton(){toggle.textContent = video.paused ? '▶' : 'Ⅱ';toggle.setAttribute('aria-label',video.paused ? 'Putar video' : 'Jeda video')}
toggle.addEventListener('click',()=>{if(video.paused){video.play().catch(()=>{message.textContent='Tekan tombol putar untuk melihat video.'})}else{video.pause()}updateVideoButton()});
video.addEventListener('play',updateVideoButton);
video.addEventListener('pause',updateVideoButton);
video.addEventListener('error',()=>{message.textContent=`Tambahkan video ${motif.video} ke folder geografi.`;toggle.textContent='▶';toggle.setAttribute('aria-label','Video belum tersedia')});
video.play().then(updateVideoButton).catch(()=>{message.textContent='Tekan tombol putar untuk memulai video.';updateVideoButton()});
