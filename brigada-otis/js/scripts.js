const routes=['inicio','quienes','prensa','contacto'];
function show(route){
  const r=routes.includes(route)?route:'inicio';
  document.querySelectorAll('.view').forEach(v=>v.classList.toggle('active',v.id===r));
  document.querySelectorAll('nav a').forEach(a=>{
    const id=a.getAttribute('href').slice(1);
    a.setAttribute('aria-current',id===r?'page':'false');
  });
}
function onNav(e){
  const a=e.target.closest('a[href^="#"]');if(!a)return;
  const id=a.getAttribute('href').slice(1);
  if(routes.includes(id)){e.preventDefault();history.replaceState(null,'','#'+id);show(id);}
}
addEventListener('hashchange',()=>show(location.hash.slice(1)));
document.addEventListener('click',onNav);
show(location.hash.slice(1)||'inicio');
// Toast
document.addEventListener('DOMContentLoaded',()=>{
  const form=document.getElementById('contactForm');
  const toastEl=document.getElementById('toastOk');
  const toast=toastEl?new bootstrap.Toast(toastEl,{delay:2500}):null;
  form&&form.addEventListener('submit',e=>{e.preventDefault();toast&&toast.show();form.reset();});
});
// Loader
document.addEventListener('DOMContentLoaded',()=>{
  const tryPlay=()=>video.play().catch(()=>hide());
  if(video.readyState>=3)tryPlay();
  else video.addEventListener('canplaythrough',tryPlay,{once:true});
});