const toast = document.getElementById('toast');//this function shows that message when u click on that buttons in the bottem 
			const showToast = (text)=>{
				toast.textContent = text;
				toast.classList.add('show');
				clearTimeout(showToast.tid);
				showToast.tid = setTimeout(()=> toast.classList.remove('show'), 2000);
			};

			document.querySelectorAll('.card').forEach(card=>{
				const label = card.querySelector('h3').innerText;
				card.addEventListener('click', ()=> showToast(label+' clicked'));
				card.addEventListener('keydown', (e)=>{ if(e.key === 'Enter' || e.key === ' ') { e.preventDefault(); card.click(); }});
			});

			document.querySelectorAll('.bottombar button').forEach(btn=>{
				btn.addEventListener('click', ()=>{
					document.querySelectorAll('.bottombar button').forEach(b=>b.classList.remove('active'));
					btn.classList.add('active');
					showToast(btn.textContent.trim());
				});
			});