function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

let storyText = ':insertx: :inserty: :insertz: :inserta:.';
let insertX = ['Tá', 'An bhfuil', 'Níl', 'Bhí', 'An raibh', 'Ní raibh', 'Beidh', 'An mbeidh', 'Ní bheidh', 'Bíonn', 'An mbíonn', 'Ní bhím'];
let insertY = ['an t-arán', 'an t-im', 'an t-uachtar', 'an tsubh', 'an císte', 'an cat', 'an madra', 'an bord', 'an chathaoir', 'an geata', 'an ghloine', 'an ceacht', 'an milséan', 'an reoiteog', 'an teilifís', 'an pictiúr', 'an chailc', 'an rothar', 'an charr', 'an punt', 'an t-airgead', 'an mála', 'an bosca', 'an bóthar', 'an tsráid', 'an bhróg', 'an t-urlár', 'an bainne', 'an túll', 'an fear', 'an bhean', 'an páiste', 'an cailín', 'an buachaill', 'an múinteoir'];
let insertZ = ['tógtha', 'dúnta', 'glanta', 'díolta', 'gearrtha', 'caillte', 'curtha', 'bainte', 'caite', 'briste', 'ólta', 'fágtha', 'dóite', 'nite', 'léite', 'scríofa', 'líonta', 'tugtha', 'ite', 'cloiste', 'beirthe', 'ráite', 'déanta', 'faighte', 'feicthe', 'ceannaithe', 'tosaithe', 'críochnaithe', 'cruinnithe', 'deisithe', 'foghlamtha', 'oscailte', 'ceangailte', 'imeartha' ];
let insertA = ['agam', 'agat', 'aige', 'aici', 'againn', 'agaibh', 'acu']

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);
  let aItem = randomValueFromArray(insertA);


  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':inserta:',aItem);

  

  story.textContent = newStory;
  story.style.visibility = 'visible';
}