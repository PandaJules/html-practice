console.log('I am console log')

var puppies = '';


for (var i = 1; i < 11; i += 1) {
  puppies += 'Puppy ' + i + " ";
}



document.querySelector('.paragraph-ten-thousand').innerHTML = puppies;

document.querySelector('.button-happy').onclick = function () {
  document.querySelector('.paragraph-ten-thousand').innerHTML = 'Just skip the exams';
};

document.querySelector('.button-happy').onmouseover = function () {
  document.querySelector('.paragraph-ten-thousand').innerHTML = 'Look at that PANDA!';
};

