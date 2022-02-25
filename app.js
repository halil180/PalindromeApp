let btn = document.querySelector('#btn')
let res = document.querySelector('#res')
const reverse = (pWord) =>{
    let reverser = pWord.split('').reverse().join('').toUpperCase().replace(/[^a-zA-Z ]/g, "").replace(/ /g, "")
    return reverser
}
btn.addEventListener('click',function () {
  let backward = reverse(document.querySelector('#input').value)
  let forward = document.querySelector('#input').value.split('').join('').toUpperCase().replace(/[^a-zA-Z ]/g, "").replace(/ /g, "")
  console.log(`${backward} backward === ${forward} forward`)
  if (backward == forward ) {
    swal({
      title: 'Palindrom',
      text: '',
      icon: 'success',
      timer: 2000,
      buttons: false,
  })
  .then(() => {
      dispatch(redirect('/'));
  })
  }else{
    swal({
      title: 'Thats not a palindrome',
      text: '',
      icon: 'error',
      timer: 2000,
      buttons: false,
  })
  .then(() => {
      dispatch(redirect('/'));
  })
  }
})


