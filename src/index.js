const greet = (name) => {
  return `Hello ${name}, how are you?`
}

// what we're looking for:
// - a properly written function and parameter
// - correct return value (NOT Console.log)
// - Correct string interpolation with spacing

const getRating = (movieName, review) => {
  if (review === 'bad' || review === 'awful') {
    console.log("*")
  } else if (review === 'good') {
    console.log('**')
  } else if (review === 'great') {
    console.log('***')
  } else {
    console.log("???")
  }

  console.log(`Movie: ${movieName}`)
}


// what we're looking for:
// - Proper use of if else statement
// - proper use of or operator
// - Understand that a function can return AND log

const hideAndSeekCounter = (endNumber) => {
  for (let i = 1; i < endNumber; i++) {
    console.log(`${i}...`)
  }
  console.log(`${endNumber}!`)
  console.log('Ready or not, here I come!')
}

// what we're looking for:
// - proper use of a for loop
// - last element is different

const cheer = (word) => {
  for (let i = 0; i < word.length; i++) {
    console.log(`Give me an ${word[i].toUppercase()}!`)
  }
  console.log("What's it spell?")
  console.log(`${word}! ${word}! ${word}!`)
}

const cheer2 = (word) => {
  const vowelsPlus = 'aefhilmnorsx';
  for (let i = 0; i < word.length; i++) {
    const letter = word[i]
    let anOrA = 'a';
    if (vowelsPlus.includes(letter)) anOrA = 'an';
    console.log(`Give me ${anOrA} ${letter.toUpperCase()}!`)
  }
  console.log("What's it spell?")
  console.log(`${word}! ${word}! ${word}!`)
}

const onlyOddsOrEvens = (number) => {
  const start = number % 2 ? 1 : 2
  for (let i = start; i <= number; i += 2) {
    console.log(i)
  }
}

const noVowels = (word) => {
  let vowels = 'aeiouAEIOU'
  for (let i = 1; i < word.length; i++) {
    let character = word[i]
    if (vowels.includes(character)) {
      continue
    }
    console.log(character)
  }
}

noVowels('Anyway')
noVowels('Evidently')