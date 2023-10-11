const btn1 = document.querySelector('#myBtn1');
let counter = 0;

btn1.addEventListener('click', () => {
    counter++;
  btn1.innerText = 'myBtn1 : I have been clicked !';
  console.log('onClickHandlerForBtn1::click');

  if(counter === 5){
    btn1.innerText = 'Bravo, bel échauffaument'
  }
  if(counter === 10){
    btn1.innerText = 'Ouesh, t\'es le pro du click mdr.'
  }
});


