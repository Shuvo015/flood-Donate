function showButtonById(id){
  document.getElementById('donate-main').classList.add('hidden')
  document.getElementById('history-div').classList.add('hidden')

  document.getElementById(id).classList.remove('hidden')

}

