/* ====== UBAH DI SINI ====== */
const C={
  name:'Ulan', from:'Topan', pass:'120407',
  date:'12 APRIL 2007 · HARI PALING SPESIAL',
  wish:'Happy Birthday! Ulan yang paling istimewa 🌸',
  letter:'Di hari ulang tahunmu ini, aku berharap semua mimpimu terwujud, semua doamu dikabulkan, dan semua kebahagiaanmu berlipat ganda. Kamu layak mendapatkan semua hal indah yang ditawarkan dunia ini.',
  bouquet:['Kamu secantik bunga tulip di musim semi, segar dan penuh harapan baru.','Kamu seperti kembang sepatu yang mekar penuh — selalu cerah, selalu memikat.','Kamu hangat seperti bunga matahari yang membuat hariku terang.','Kamu manis dan lembut, seperti mawar yang kupilih sendiri.','Kamu istimewa, dan aku bersyukur bisa mengenalmu.'],
  /* foto: isi src dengan nama file/URL fotomu, contoh 'foto1.jpg' */
  photos:[
    {t:'Pesona yang Memukau',q:'Seseorang membuat waktu terasa berhenti sejenak.',src:'assets/foto1.png'},
    {t:'Saat di Pantai',q:'Hari terbaik selalu dimulai bersamamu.',src:'assets/foto2.png'},
    {t:'Gantung Tanpa Tara',q:'Kebahagiaan ada di tempat sederhana.',src:'assets/foto3.png'},
    {t:'Aura Hangat Mu',q:'Kebahagiaanmu membuat sejuk di sekitarmu.',src:'assets/foto4.png'},
    {t:'Penuh Karaktermu',q:'Setiap detail darimu menceritakan kisah yang indah.',src:'assets/foto5.png'},
    {t:'Tenang dan Damai',q:'Bersamamu, aku menemukan ketenangan.',src:'assets/foto6.png'}
  ],
  story:[['✨','Titik Awal','Pertemuan yang Tak Pernah Direncanakan','Semesta mempertemukan kita begitu saja, hingga waktu terasa berjalan lambat dan menumbuhkan rasa penasaran.'],
         ['💬','Malam-Malam Panjang','Percakapan yang Tak Pernah Terasa Cukup','Obrolan intens sampai larut malam yang membuatku selalu menunggu notifikasimu.'],
         ['💗','Hari Itu','Keberanian untuk Bilang Iya','Tulis kisahmu sendiri di sini.'],
         ['🌍','Sampai Sekarang','Tumbuh Bersama','Tulis kisahmu sendiri di sini.']],
  /* lagu: isi src dengan file mp3 kalau mau benar-benar bunyi */
  songs:[{t:'Kitakan Lewati Berdua',a:'Artis',e:'💗',src:'assets/lagu1.mpeg'},{t:'Masa Ini, Dan Masa Indah Lainya',a:'Artis',e:'🌸',src:'assets/lagu2.mpeg'},{t:'Shape Of My Heart',a:'Artis',e:'🌷',src:'assets/lagu3.mpeg'}],
  notes:['Terima kasih telah menjadi pendengar terbaik di setiap malam panjang kita.','Terima kasih telah mempercayaiku dan berjalan di sampingku.','Terima kasih untuk tawa yang membuat hariku ringan.','Terima kasih telah sabar menghadapiku.','Terima kasih untuk setiap pelukan yang terasa seperti rumah.','Terima kasih telah menjadi dirimu sendiri.','Terima kasih untuk semangat yang selalu kamu berikan.','Terima kasih karena kamu ada.'],
  final:'Dengan segenap cintaku.'
};
/* ========================== */
const $=s=>document.querySelector(s),mk=(t,c,h)=>{const e=document.createElement(t);if(c)e.className=c;if(h!==undefined)e.innerHTML=h;return e};
const show=id=>{document.querySelectorAll('.screen').forEach(s=>s.classList.add('hidden'));if(id)$(id).classList.remove('hidden')};
const FL=['🌸','🌼','🌺','🌻','🌷','🌹'];

/* loader -> lock */
setTimeout(()=>show('#lockS'),2200);

/* keypad */
let code='';const dots=$('#dots');
for(let i=0;i<6;i++)dots.append(mk('i'));
const draw=()=>[...dots.children].forEach((d,i)=>d.classList.toggle('on',i<code.length));
const keys=['1','2','3','4','5','6','7','8','9','✕','0','✓'];
keys.forEach(k=>{const b=mk('button',k==='✓'?'go':'',k);b.type='button';b.onclick=()=>press(k);$('#pad').append(b)});
function press(k){
  $('#err').textContent='';
  if(k==='✕'){code=code.slice(0,-1)}
  else if(k==='✓'){check();return}
  else if(code.length<6){code+=k}
  draw();if(code.length===6)setTimeout(check,150);
}
function check(){
  if(code===C.pass){show('#giftS')}
  else{const b=$('#lockBox');b.classList.remove('shake');void b.offsetWidth;b.classList.add('shake');$('#err').textContent='Kode belum tepat, coba lagi ya 💭';code='';draw()}
}
document.addEventListener('keydown',e=>{if($('#lockS').classList.contains('hidden'))return;if(/^\d$/.test(e.key))press(e.key);if(e.key==='Backspace')press('✕');if(e.key==='Enter')press('✓')});

/* gift -> flower burst -> dashboard */
$('#gift').onclick=()=>{
  const b=$('#burst');
  for(let i=0;i<70;i++){const s=mk('span','',FL[i%FL.length]);s.style.left=Math.random()*100+'vw';s.style.fontSize=(28+Math.random()*50)+'px';s.style.animationDuration=(2+Math.random()*2.2)+'s';s.style.animationDelay=Math.random()*.9+'s';b.append(s)}
  setTimeout(()=>{show(null);$('#dash').classList.remove('hidden');$('#mb').classList.remove('hidden');b.innerHTML='';window.scrollTo(0,0)},3200);
};

/* background flowers */
for(let i=0;i<14;i++){const s=mk('span','',FL[i%FL.length]);s.style.left=Math.random()*100+'vw';s.style.fontSize=(14+Math.random()*16)+'px';s.style.animationDuration=(22+Math.random()*22)+'s';s.style.animationDelay=-Math.random()*40+'s';$('#bgf').append(s)}

/* fill content */
$('#nm').textContent=C.name;$('#dt').textContent=C.date;$('#wish').textContent=C.wish;
$('#letter').innerHTML=`“${C.letter}”<b>${C.final}<br>${C.from}</b>`;
$('#fin').textContent=`Dibuat dengan cinta oleh ${C.from} untuk ${C.name} 🌸`;

/* cake */
$('#cake').onclick=()=>{
  $('#cake').classList.toggle('out');
  if($('#cake').classList.contains('out'))confetti();
};
function confetti(){
  const cs=['#f7a8c8','#ffd36b','#8ec5ff','#ec5f9a','#fff'];
  for(let i=0;i<60;i++){const c=mk('i','cf');c.style.left=Math.random()*100+'vw';c.style.background=cs[i%5];c.style.animationDelay=Math.random()*.6+'s';c.style.animationDuration=(1.8+Math.random()*1.6)+'s';document.body.append(c);setTimeout(()=>c.remove(),4500)}
}

/* bouquet */
const pos=[[30,58],[80,38],[110,20],[150,38],[190,58]],em=['🌷','🌺','🌻','🌹','🌸'];
pos.forEach((p,i)=>{const b=mk('button','fl',em[i]);b.style.left=p[0]+'px';b.style.top=p[1]+'px';b.type='button';
  b.onclick=()=>{document.querySelectorAll('.fl').forEach(x=>x.classList.remove('sel'));b.classList.add('sel');$('#q').textContent='“'+C.bouquet[i]+'”';if(i%2)confetti()};$('#bq').append(b)});

/* gallery */
C.photos.forEach(p=>{
  const c=mk('div','pc',`<div class="ph"><span>📷<br>Ketuk untuk mengungkap</span></div><h4>${p.t}</h4><p>“${p.q}”</p>`);
  if(p.src)c.style.setProperty('--img',`url("${p.src}")`);
  c.onclick=()=>c.classList.toggle('open');$('#grid').append(c)
});

/* timeline */
C.story.forEach((s,i)=>{$('#tl').append(mk('div','ti'+(i%2?' r':''),`<div><h3>${s[0]} ${s[1]}</h3><b style="color:#fff">${s[2]}</b><br>${s[3]}</div>`))});

/* playlist */
let cur=0,playing=false,prog=0,timer,au=null;
const trs=$('#trs');
function renderTr(){trs.innerHTML='';C.songs.forEach((s,i)=>{const r=mk('div','trk'+(i===cur?' on':''),`<span>${i+1}&nbsp; <b>${s.t}</b><small>${s.a}</small></span><span>${s.e}</span>`);r.onclick=()=>{cur=i;load(true)};trs.append(r)});
  $('#tt').textContent=C.songs[cur].t;$('#ta').textContent=C.songs[cur].a}
function load(go){clearInterval(timer);prog=0;$('#pg').style.width='0';if(au){au.pause();au=null}
  const s=C.songs[cur];if(s.src){au=new Audio(s.src);au.onended=()=>{cur=(cur+1)%C.songs.length;load(true)}}
  playing=false;renderTr();if(go)toggle()}
function toggle(){playing=!playing;$('#pp').textContent=playing?'❚❚':'▶';$('#vin').classList.toggle('spin',playing);$('#mb').style.opacity=playing?1:.7;
  if(au){playing?au.play():au.pause()}
  clearInterval(timer);if(playing)timer=setInterval(()=>{if(au&&au.duration)prog=au.currentTime/au.duration*100;else prog=(prog+.4)%100;$('#pg').style.width=prog+'%'},500)}
$('#pp').onclick=toggle;$('#nx').onclick=()=>{cur=(cur+1)%C.songs.length;load(playing)};$('#pv').onclick=()=>{cur=(cur+C.songs.length-1)%C.songs.length;load(playing)};
$('#mb').onclick=()=>{toggle();};
load(false);

/* jar */
let ni=0;
$('#shake').onclick=()=>{const j=$('#jar');j.classList.remove('sk');void j.offsetWidth;j.classList.add('sk');confetti();
  const n=$('#note');n.classList.remove('hidden');n.innerHTML=`<div style="font-size:18px;margin-bottom:6px">💫</div>“${C.notes[ni%C.notes.length]}”<small>CATATAN ${ni%C.notes.length+1} DARI ${C.notes.length}</small>`;ni++};