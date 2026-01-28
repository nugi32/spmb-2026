document.addEventListener('DOMContentLoaded',()=>{
  const menuBtn=document.getElementById('menuBtn');
  const nav=document.getElementById('nav');
  const search=document.getElementById('search');
  const episodesGrid=document.getElementById('episodesGrid');
  const cards=[...episodesGrid.querySelectorAll('.card')];
  const lightbox=document.getElementById('lightbox');
  const lbImg=document.getElementById('lbImg');
  const closeLb=document.getElementById('closeLb');

  menuBtn.addEventListener('click',()=>{
    if(nav.style.display==='flex')nav.style.display='';else nav.style.display='flex';
  });

  search.addEventListener('input',e=>{
    const q=e.target.value.trim().toLowerCase();
    cards.forEach(c=>{
      const title=c.dataset.title.toLowerCase();
      c.style.display= title.includes(q)?'block':'none';
    })
  });

  // open image in lightbox
  document.body.addEventListener('click',e=>{
    const img=e.target.closest('.card img, .char img');
    if(!img) return;
    lbImg.src=img.src;
    lightbox.setAttribute('aria-hidden','false');
  });
  closeLb.addEventListener('click',()=>{ lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; });
  lightbox.addEventListener('click',e=>{ if(e.target===lightbox) { lightbox.setAttribute('aria-hidden','true'); lbImg.src=''; } });
});