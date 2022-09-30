(function() {
  
  const txt = document.getElementById('txt')
  const clear = document.getElementById('clear')
  const nums = [...document.querySelectorAll('.numButton')]
  const equeal = document.getElementById('equal')

  clear.addEventListener('click', () => {
    txt.value = ''
  })

  nums.map(num => {
    num.addEventListener('click', () => {
      txt.value += num.textContent
    })
  })

  equeal.addEventListener('click', () => {
    txt.value = eval(txt.value)
  })

}())