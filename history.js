document.getElementById('donation-btn')
.addEventListener('click', function(){
  showButtonById('donate-main')
  document.getElementById('donation-btn').classList.add('bg-[#B4F461]')
  document.getElementById('history-btn').classList.remove('bg-[#B4F461]','font-bold')
  document.getElementById('footer').classList.remove('hidden')

});

document.getElementById('history-btn')
.addEventListener('click', function(){
  showButtonById('history-div')
  document.getElementById('footer').classList.add('hidden')
  document.getElementById('history-btn').classList.add('bg-[#B4F461]','font-bold')
  document.getElementById('donation-btn').classList.remove('bg-[#B4F461]')

});














