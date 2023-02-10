
    function makeRed(){
    document.body.style.backgroundColor='red';
}
// function makeBlue(){
//     document.body.style.backgroundColor='blue';
// }

//   const makeBlueButton=document.getElementById('make-blue');
//   makeBlueButton.onclick=makeBlue;
const makeBuluButton=document.getElementById('make-blue');
  makeBuluButton.onclick=blueBtn;

  function blueBtn(){
    document.body.style.backgroundColor='blue';
  }



const makeGreenButton=document.getElementById('green-btn');
      makeGreenButton.onclick=greenBtn;
function greenBtn(){
    document.body.style.backgroundColor='#00FF00';
}

const pinkButton=document.getElementById("make-pink");
// console.log(pinkButton);
pinkButton.addEventListener('click', makePink);

function makePink(){
    document.body.style.backgroundColor='pink';
}

document.getElementById('make-goldenRod').addEventListener('click', function(){
    document.body.style.backgroundColor='#DAA520';
})