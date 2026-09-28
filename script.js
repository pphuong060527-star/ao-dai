const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(toggle&&nav){toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open?'true':'false')})}

document.querySelectorAll('.thumbs img').forEach(t=>t.addEventListener('click',()=>{
  const target=document.getElementById(t.dataset.target); if(!target)return;
  target.src=t.src;
  const group=t.parentElement; group.querySelectorAll('img').forEach(x=>x.classList.remove('selected')); t.classList.add('selected');
}));

document.querySelectorAll('#contactForm').forEach(form=>form.addEventListener('submit',e=>{
 e.preventDefault(); const notice=document.getElementById('formNotice');
 if(notice){notice.hidden=false;notice.textContent='Lời nhắn đã được ghi nhận trên giao diện mô phỏng. Đây chưa phải biểu mẫu gửi email thật.';}
 form.reset();
}));

document.querySelectorAll('#year').forEach(el=>el.textContent=new Date().getFullYear());
