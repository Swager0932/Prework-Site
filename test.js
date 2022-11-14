
const example = `<a href="./index.html" class="logo">Marcy Lab</a>
<input class="side-menu" type="checkbox" id="side-menu"/>
<label class="hamb" for="side-menu"><span class="hamb-line"></span></label>
<nav class="nav">
  <ul class="menu">
    <li><a href="./1-variables.html">&larr; Variables</a></li>
    <li><a href="./index.html">Home</a></li>
    <li><a href="./3-flow-control.html">Flow Control &rarr;</a></li>
    <li class="mobl-nav"><a href="./0-getting-started.html" rel="noopener noreferrer">Lesson 0: Getting Started</a></li>
    <li class="mobl-nav"><a href="./1-variables.html" rel="noopener noreferrer">Lesson 1: Variables</a></li>
    <li class="mobl-nav"><a href="./2-functions.html" rel="noopener noreferrer">Lesson 2: Functions</a></li>
    <li class="mobl-nav"><a href="./3-flow-control.html" rel="noopener noreferrer">Lesson 3: Flow Control</a></li>
    <li class="mobl-nav"><a href="./4-strings.html" rel="noopener noreferrer">Lesson 4: Strings</a></li>
    <li class="mobl-nav"><a href="./5-loops.html" rel="noopener noreferrer">Lesson 5: Loops</a></li>
    <li class="mobl-nav"><a href="./6-problem-solving.html" rel="noopener noreferrer">Lesson 6: Problem Solving</a></li>
    <li class="mobl-nav"><a href="./7-application-questions.html" rel="noopener noreferrer">Application Questions</a></li>
    <li class="mobl-nav"><a href="./7-resources.html" rel="noopener noreferrer">Resources</a></li>
  </ul>
</nav>`


const pages = [
  'getting-started',
  'variables',
  'functions',
  'flow-control',
  'strings',
  'loops',
  'problem-solving',
  'helpful-resources',
]

const makeNav = (currentPageNum) => {
  const ul = document.createElement('ul')
  ul.class = 'menu'
  makeTop3(ul,2)
  ul.children[1].insertAdjacentHTML('beforebegin', `<li><a href="./index.html">Home</a></li>`)
  console.log('ul:', ul.innerHTML);
}

const makeTop3 = (parentUl, currentPageNum) => {
  [-1,1].forEach((val) => {
    const li = document.createElement('li');
    const aEl = document.createElement('a');
    const goToVal = (currentPageNum + val) % pages.length;

    const capitalWords = pages[goToVal].split('-').map(word => word[0].toUpperCase() + word.slice(1)).join(' ');

    aEl.textContent = val === -1 ? `&larr; ${capitalWords}` : `${capitalWords} &rarr;`;
    aEl.href = `./${goToVal}-${pages[goToVal]}.html`
    aEl.rel = rel="noopener noreferrer"

    li.append(aEl)
    parentUl.append(li)
  })
}


document.addEventListener('DOMContentLoaded', (event) => {
  const pageNum = window.location.pathname[1]
  const header =
  if (!isNaN(pageNum)) {
    makeNav(pageNum);
  } else {

  }
});