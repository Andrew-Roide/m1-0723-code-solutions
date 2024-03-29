/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */

function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  if (string.charAt(0) === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  if (person.age <= 21) {
    return false;
  } else {
    return true;
  }
}

function isOldEnoughToDrive(person) {
  if (person.age > 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  return false;
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'The pH is neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'The pH is an acid';
  } else if (pH > 7 && pH <= 14) {
    return 'The pH is a base';
  } else {
    return 'Invalid pH level';
  }
}

function introduceWarnerBro(name) {
  switch (name) {
    case 'yakko':
    case 'wakko':
      return "We're the Warner Bothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre) {
  switch (genre) {
    case 'action':
      return 'John Wick';
    case 'comedy':
      return 'Caddyshack';
    case 'horror':
      return 'Texas Chainsaw Massacre';
    case 'drama':
      return 'Eternal Sunshine of the Spotless Mind';
    case 'musical':
      return 'Les Misérables';
    case 'sci-fi':
      return 'Star Wars';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
