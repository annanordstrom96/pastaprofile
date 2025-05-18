// Image paths for character elements
const characterElements = {
  bodies: [
    'characters/bodies/bowtie-body.png',
    'characters/bodies/lasanga-body.png',
    'characters/bodies/macaroni-body.png',
    'characters/bodies/ravioli-body.png',
    'characters/bodies/spaghetti-body.png',
    'characters/bodies/shell-body.png',
    'characters/bodies/penne-body.png',
    // Add all your body images here
  ],
  eyes: [
    'characters/Eyes/anger-eyes.png',
    'characters/Eyes/dizzy-eyes.png',
    'characters/Eyes/half-closed-eyes.png',
    'characters/Eyes/heart-eyes.png',
    'characters/Eyes/normal-eyes.png',
    'characters/Eyes/star-eyes.png',
    'characters/Eyes/surprise-eyes.png',
    'characters/Eyes/wink-eyes.png',
    // Add all your eye images here
  ],
  mouths: [
    'characters/Mouths/happy-mouth.png',
    'characters/Mouths/line-mouth.png',
    'characters/Mouths/mild-smile-mouth.png',
    'characters/Mouths/really-happy-mouth.png',
    'characters/Mouths/sad-mouth.png',
    // Add all your mouth images here
  ],
  arms: [
    'characters/Arms/crossed-arms.png',
    'characters/Arms/dance-arms.png',
    'characters/Arms/disco-arms.png',
    'characters/Arms/hands-on-hips-arms.png',
    'characters/Arms/standard-arms.png',
    'characters/Arms/wave-arms.png',
    // Add all your arm images here
  ],
  accessories: [
    'characters/Accessories/bowtie-accessories.png',
    'characters/Accessories/crown-accessories.png',
    'characters/Accessories/ears-accessories.png',
    'characters/Accessories/hat-accessories.png',
    // Add all your accessory images here
  ]
};

// Selected elements
const selectedElements = {
  body: null,
  eyes: null,
  mouth: null,
  arms: null,
  accessory: null
};

// DOM Elements
const bodyLayer = document.getElementById('bodyLayer');
const eyesLayer = document.getElementById('eyesLayer');
const mouthLayer = document.getElementById('mouthLayer');
const armsLayer = document.getElementById('armsLayer');
const accessoryLayer = document.getElementById('accessoryLayer');

const bodySelector = document.getElementById('bodySelector');
const eyesSelector = document.getElementById('eyesSelector');
const mouthSelector = document.getElementById('mouthSelector');
const armsSelector = document.getElementById('armsSelector');
const accessorySelector = document.getElementById('accessorySelector');

const randomButton = document.getElementById('randomButton');

// Initialize the app
function init() {
  // Populate selectors
  populateSelector(bodySelector, characterElements.bodies, 'body');
  populateSelector(eyesSelector, characterElements.eyes, 'eyes');
  populateSelector(mouthSelector, characterElements.mouths, 'mouth');
  populateSelector(armsSelector, characterElements.arms, 'arms');
  populateSelector(accessorySelector, characterElements.accessories, 'accessory', true);
  
  // Add event listener for random button
  randomButton.addEventListener('click', generateRandomCharacter);
  
  // Generate a random character initially
  generateRandomCharacter();
}

// Populate a selector with images
function populateSelector(selector, images, elementType, includeNone = false) {
  // Clear existing content
  selector.innerHTML = '';
  
  // Add "None" option for accessories
  if (includeNone) {
    const noneOption = document.createElement('div');
    noneOption.className = 'option-item none';
    noneOption.dataset.type = elementType;
    noneOption.dataset.src = '';
    noneOption.addEventListener('click', () => selectElement(noneOption, elementType));
    selector.appendChild(noneOption);
  }
  
  // Add options for each image
  images.forEach((imageSrc, index) => {
    const option = document.createElement('div');
    option.className = 'option-item';
    option.dataset.type = elementType;
    option.dataset.src = imageSrc;
    option.style.backgroundImage = `url(${imageSrc})`;
    option.addEventListener('click', () => selectElement(option, elementType));
    selector.appendChild(option);
  });
}

// Handle element selection
function selectElement(element, elementType) {
  // Remove selected class from all options in this selector
  const siblings = element.parentNode.querySelectorAll('.option-item');
  siblings.forEach(sibling => sibling.classList.remove('selected'));
  
  // Add selected class to clicked element
  element.classList.add('selected');
  
  // Update selected elements object
  selectedElements[elementType] = element.dataset.src;
  
  // Update character preview
  updateCharacterPreview();
}

// Update character preview based on selections
function updateCharacterPreview() {
  // Update each layer with the selected image
  bodyLayer.style.backgroundImage = selectedElements.body ? `url(${selectedElements.body})` : 'none';
  eyesLayer.style.backgroundImage = selectedElements.eyes ? `url(${selectedElements.eyes})` : 'none';
  mouthLayer.style.backgroundImage = selectedElements.mouth ? `url(${selectedElements.mouth})` : 'none';
  armsLayer.style.backgroundImage = selectedElements.arms ? `url(${selectedElements.arms})` : 'none';
  accessoryLayer.style.backgroundImage = selectedElements.accessory ? `url(${selectedElements.accessory})` : 'none';
}

// Generate a random character
function generateRandomCharacter() {
  // Select random elements (required: body, eyes, mouth, arms)
  selectRandomElement('body', bodySelector);
  selectRandomElement('eyes', eyesSelector);
  selectRandomElement('mouth', mouthSelector);
  selectRandomElement('arms', armsSelector);
  
  // Accessory is optional (50% chance)
  if (Math.random() > 0.5) {
    selectRandomElement('accessory', accessorySelector);
  } else {
    // Select "None" for accessory
    const noneOption = accessorySelector.querySelector('.option-item.none');
    if (noneOption) {
      selectElement(noneOption, 'accessory');
    }
  }
}

// Select a random element for a specific type
function selectRandomElement(elementType, selector) {
  // Get all options except "None"
  const options = Array.from(selector.querySelectorAll('.option-item:not(.none)'));
  
  // Select a random option
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomOption = options[randomIndex];
  
  // Trigger selection
  selectElement(randomOption, elementType);
}

// Initialize the app when the DOM is loaded
document.addEventListener('DOMContentLoaded', init);
// Add this to your script.js file

// Array of pasta puns and jokes
const pastaJokes = [
  "I'm pasta point of no return with these noodle jokes!",
  "Why do pasta chefs make the best comedians? Their jokes are spaghetti-ng funnier all the time!",
  "I'm feeling cannelloni today... it's a kind of pasta emptiness.",
  "What do you call pasta that got angry? Spätzle!",
  "My pasta business is doing great... I'm making spaghetti of money!",
  "What did the pasta say to the fork? You've got me twisted!",
  "Pasta la vista, baby!",
  "Life is too short for sad pasta.",
  "You want a pizza me? Sorry, wrong Italian food...",
  "What's a pasta's favorite type of music? Macaron-i and cheese!",
  "Why did the pasta break up with the sauce? It felt smothered.",
  "I've got a lot on my plate right now... mostly pasta.",
  "Fusilli reasons, pasta makes me happy!",
  "I find your lack of pasta disturbing.",
  "That's an impasta! It's not real pasta!",
  "You're pasta-tively amazing!",
  "Let me tell you a pasta story. I promise it's not fusilli!",
  "I'm on a seafood diet. I see food, especially pasta, and I eat it!",
  "The pasta chef was arrested for being an impasta.",
  "What's a pasta's favorite day? Spaghetti-day!"
];

// Get reference to the joke element
const pastaJokeElement = document.getElementById('pastaJoke');

// Function to generate a random pasta joke
function generateRandomJoke() {
  const randomIndex = Math.floor(Math.random() * pastaJokes.length);
  return pastaJokes[randomIndex];
}

// Update the generateRandomCharacter function to also show a joke
function generateRandomCharacter() {
  // Select random elements (required: body, eyes, mouth, arms)
  selectRandomElement('body', bodySelector);
  selectRandomElement('eyes', eyesSelector);
  selectRandomElement('mouth', mouthSelector);
  selectRandomElement('arms', armsSelector);
  
  // Accessory is optional (50% chance)
  if (Math.random() > 0.5) {
    selectRandomElement('accessory', accessorySelector);
  } else {
    // Select "None" for accessory
    const noneOption = accessorySelector.querySelector('.option-item.none');
    if (noneOption) {
      selectElement(noneOption, 'accessory');
    }
  }
  
  // Display a random pasta joke
  pastaJokeElement.textContent = generateRandomJoke();
}
// Function to download the pasta character as an image
// Get reference to download button
const downloadButton = document.getElementById('downloadButton');

// Add event listener to download button
downloadButton.addEventListener('click', function() {
  // Create a "download view" for optimal screenshots
  const downloadViewHTML = `
    <div class="download-view" style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: #f8e9e9; z-index: 1000; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 20px;">
      <h2 style="color: #c64242; margin-bottom: 20px;">Your Pasta Character</h2>
      
      <div style="background: #f0d6d6; width: 400px; height: 400px; border-radius: 50%; position: relative; margin-bottom: 20px; overflow: hidden;">
        <!-- We'll clone the character layers here -->
      </div>
      
      <p style="font-style: italic; color: #c64242; margin-bottom: 30px; font-size: 1.2rem;">"${document.getElementById('pastaJoke').textContent.replace(/['"]/g, '')}"</p>
      
      <p style="margin-bottom: 15px;">Take a screenshot now to save your pasta character!</p>
      
      <button id="closeDownloadView" style="background: #c64242; color: white; border: none; padding: 10px 20px; border-radius: 30px; cursor: pointer; margin-top: 20px;">Back to Editor</button>
    </div>
  `;
  
  // Add download view to body
  const downloadViewEl = document.createElement('div');
  downloadViewEl.innerHTML = downloadViewHTML;
  document.body.appendChild(downloadViewEl);
  
  // Clone the character layers into the download view
  const originalPreview = document.getElementById('characterPreview');
  const downloadPreview = downloadViewEl.querySelector('div[style*="border-radius: 50%"]');
  
  // Clone each layer
  const layers = originalPreview.querySelectorAll('.character-layer');
  layers.forEach(layer => {
    const clonedLayer = layer.cloneNode(true);
    clonedLayer.style.position = 'absolute';
    clonedLayer.style.top = '0';
    clonedLayer.style.left = '0';
    clonedLayer.style.width = '100%';
    clonedLayer.style.height = '100%';
    clonedLayer.style.backgroundPosition = 'center';
    clonedLayer.style.backgroundRepeat = 'no-repeat';
    clonedLayer.style.backgroundSize = 'contain';
    downloadPreview.appendChild(clonedLayer);
  });
  
  // Add event listener to close button
  downloadViewEl.querySelector('#closeDownloadView').addEventListener('click', function() {
    document.body.removeChild(downloadViewEl);
  });
});