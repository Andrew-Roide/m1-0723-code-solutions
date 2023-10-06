/* exported titleCase */
function titleCase(title) {
  const minorWords = ['and', 'or', 'nor', 'but', 'the', 'per', 'for'];
  const words = title.toLowerCase().split(' ');

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    if (word.includes('javascript')) {
      word = word.replace('j', 'J');
      word = word.replace('s', 'S');
      words[i] = word;
    } else if (word === 'api') {
      words[i] = word.toUpperCase();
    } else if (
      word === 'i' ||
      (word.length >= 3 && !minorWords.includes(word))
    ) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (word.includes('-')) {
      const parts = word.split('-');
      parts.forEach((part, index) => {
        parts[index] = part.charAt(0).toUpperCase() + part.slice(1);
      });
      words[i] = parts.join('-');
    }

    if (i > 0 && words[i - 1].endsWith(':')) {
      words[i] = word.charAt(0).toUpperCase() + word.slice(1);
    }
  }

  words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);

  return words.join(' ');
}
