document.getElementById('donate1-btn').addEventListener('click', function(){
  // const noakhali = document.getElementById('noakhali')
  const inputAmount1 = parseFloat(document.getElementById('input-amount-1').value)
  const span1Input = parseFloat(document.getElementById('span1-input').innerText)
  const accountBalance = parseFloat(document.getElementById('balance').innerText) 
  
  if(!isNaN(inputAmount1)){
    const newAmount1 =  span1Input - inputAmount1 
    const newAmount2 = inputAmount1 + accountBalance 
    document.getElementById('span1-input').innerText = newAmount1
    document.getElementById('balance').innerText = newAmount2
    
    const div = document.createElement('div')
    div.classList.add('container','m-auto','border-red-500','border', 'p-4', 'rounded-md')
    div.innerHTML = `
    
             <P class='text-3xl'> <span class='text-green-500'>${inputAmount1}</span> for Donate for Flood at Noakhali, Bangladesh </p>
    `
    document.getElementById('history-div').appendChild(div);
    
  }
  else{
    alert('Please Provide Valid Amount')
  }
  
})


document.getElementById('donate2-btn').addEventListener('click', function(){

  const inputAmount1 = parseFloat(document.getElementById('input-amount-2').value)
  const span1Input = parseFloat(document.getElementById('span2-input').innerText)
  const accountBalance = parseFloat(document.getElementById('balance').innerText) 
  
  if(!isNaN(inputAmount1)){
    const newAmount1 =  span1Input - inputAmount1 
    const newAmount2 = inputAmount1 + accountBalance 
    document.getElementById('span2-input').innerText = newAmount1
    document.getElementById('balance').innerText = newAmount2

    const div = document.createElement('div')
    div.classList.add('container','m-auto','border-red-500','border', 'p-4', 'rounded-md', 'my-5')
    div.innerHTML = `
    
             <P class='text-3xl'> <span class='text-green-500'>${inputAmount1}</span> for Taka is Donated for Flood Relief in Feni,Bangladesh </p>
    `
    document.getElementById('history-div').appendChild(div);
    
  }
  else{
    alert('Please Provide Valid Amount')
  }
  
})


document.getElementById('donate3-btn').addEventListener('click', function(){

  const inputAmount1 = parseFloat(document.getElementById('input-amount-3').value)
  const span1Input = parseFloat(document.getElementById('span3-input').innerText)
  const accountBalance = parseFloat(document.getElementById('balance').innerText) 
  
  if(!isNaN(inputAmount1)){
    const newAmount1 =  span1Input - inputAmount1 
    const newAmount2 = inputAmount1 + accountBalance 
    document.getElementById('span3-input').innerText = newAmount1
    document.getElementById('balance').innerText = newAmount2

    const div = document.createElement('div')
    div.classList.add('container','m-auto','border-red-500','border', 'p-4', 'rounded-md', 'my-5')
    div.innerHTML = `
    
             <P class='text-3xl'> <span class='text-green-500'>${inputAmount1}</span> for Aid for Injured in the Quota Movement</p>
    `
    document.getElementById('history-div').appendChild(div);
    
  }
  else{
    alert('Please Provide Valid Amount')
  }
  
})



