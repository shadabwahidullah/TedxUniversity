const speakers = {
  first: {
    name: 'Tim Urban',
    position: 'Writer at Wait But Why, New York, NY, United States',
    about: 'With Wait But Why, Tim Urban demonstrates that complex and long-form writing can stand out in an online wilderness choked with listicles and clickbait.',
    image: 'images/speakers/tim.jpeg',
  },
  second: {
    name: 'Stacey Abrams',
    position: 'Former Georgia House Democratic Leader Stacey Abrams made history in 2018',
    about: "Stacey Abrams's 2018 campaign for governor of Georgia turned more voters than any Democrat in Georgia history, including former ",
    image: 'images/speakers/stacey.jpg',
  },
  third: {
    name: 'Jose Antonio',
    position: 'José Antonio Abreu founded El Sistema in 1975 to help Venezuelan kids learn to play musical instruments and be part of an orchestra. ',
    about: 'In Venezuela, the gulf between rich and poor is one of the starkest in the world. José Antonio Abreu -- economist, musician and reformer -- founded El Sistema',
    image: 'images/speakers/jose.jpg',
  },
  fourth: {
    name: 'Thomas Abt',
    position: 'Thomas Abt developed an innovative, evidence-informed model to reduce urban violence.',
    about: 'A senior fellow at the Council on Criminal Justice, Thomas Abt is a leading expert on reducing urban violence. In his book Bleeding Out: The Devastating Consequences',
    image: 'images/speakers/thomas.jpg',
  },
  fifth: {
    name: 'Aziz Abu Sarah',
    position: 'Aziz Abu Sarah helps people break down cultural and historical barriers through tourism.',
    about: 'When Aziz Abu Sarah was a boy, his older brother was arrested on charges of throwing stones. He was taken to prison and beaten ',
    image: 'images/speakers/aziz.jpg',
  },
  sixth: {
    name: 'Leyla Acaroglu',
    position: 'Leyla Acaroglu uses innovative design and systems thinking to create positive change.',
    about: 'Leyla Acaroglu breaks through our deeply entrenched environmental folklore in order to reveal the true impact of the products and materials we use every day.',
    image: 'images/speakers/leyla.jpg',
  },
};

const menubtn = document.getElementById('menu-icon');
const closebtn = document.getElementById('close-icon');
const popupMenu = document.querySelector('.popup-menu');
const morebtn = document.querySelector('.morebtn');

const speakersCards = document.querySelector('.grid');
let speaker = null;

Object.keys(speakers).forEach((element) => {
  speaker = document.createElement('div');
  speaker.classList.add('flex', 'speaker-card');

  const image = document.createElement('img');
  image.classList.add('speaker-photo');
  image.src = speakers[element].image;

  const body = document.createElement('div');
  body.classList.add('speaker-body');

  const name = document.createElement('h3');
  name.classList.add('speaker-name');
  name.innerHTML = speakers[element].name;

  const position = document.createElement('p');
  position.classList.add('speaker-position');
  position.innerText = speakers[element].position;

  const line = document.createElement('hr');
  line.classList.add('speaker-line');

  const desc = document.createElement('p');
  desc.classList.add('speaker-desc');
  desc.innerText = speakers[element].about;

  body.appendChild(name);
  body.appendChild(position);
  body.appendChild(line);
  body.appendChild(desc);

  speaker.appendChild(image);
  speaker.appendChild(body);

  speakersCards.appendChild(speaker);
});

menubtn.addEventListener('click', () => {
  popupMenu.classList.toggle('hidden');
  menubtn.classList.toggle('hidden');
});

closebtn.addEventListener('click', () => {
  popupMenu.classList.toggle('hidden');
  menubtn.classList.toggle('hidden');
});

morebtn.addEventListener('click',() => {
  document.getElementById('partnerlist').classList.remove('homep');
  document.getElementById('footer').classList.remove('homef');
  morebtn.classList.add('hidden');
})