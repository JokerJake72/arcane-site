const copyBtn = document.getElementById('copyBtn');
const ipText = document.getElementById('ipText');
if(copyBtn && ipText){
  copyBtn.addEventListener('click', async () => {
    try{
      await navigator.clipboard.writeText(ipText.textContent.trim());
      copyBtn.textContent = 'Copied!';
      copyBtn.classList.add('copied');
      setTimeout(() => {
        copyBtn.textContent = 'Copy';
        copyBtn.classList.remove('copied');
      }, 1800);
    }catch(e){
      copyBtn.textContent = 'Select & Copy';
    }
  });
}
const field = document.getElementById('sigilField');
if(field && !window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const runeChars = ['*','+','o','x','<>','^','~','/'];
  const count = window.innerWidth < 640 ? 10 : 18;
  for(let index = 0; index < count; index++){
    const rune = document.createElement('span');
    rune.className = 'rune';
    rune.textContent = runeChars[Math.floor(Math.random() * runeChars.length)];
    rune.style.left = Math.random() * 100 + 'vw';
    rune.style.animationDuration = 18 + Math.random() * 22 + 's';
    rune.style.animationDelay = Math.random() * 20 + 's';
    rune.style.fontSize = 10 + Math.random() * 10 + 'px';
    field.appendChild(rune);
  }
}
