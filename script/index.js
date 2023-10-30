  const scroll_btn = window.document.getElementById('profile_btn');
  const target = window.document.getElementById('hobby1');
  scroll_btn.addEventListener('click', ()=>{
    target.scrollIntoView({behavior:"smooth"});
  })