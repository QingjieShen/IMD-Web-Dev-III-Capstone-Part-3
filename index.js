
// references for different pages
const homePage = document.getElementById('home-page');
const questionPage = document.getElementById('question-page')
const detailPage = document.getElementById('details-page')
const resultPage = document.getElementById('result-page')

// references for different buttons
const startBtn = document.getElementById('start-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const goResultBtn = document.getElementById('go-result-btn');
const goDetailBtn = document.getElementById('go-details-btn');
const goHomeBtn = document.getElementById('go-home-btn');

// listening to the buttons click event
homePage.addEventListener('click', function () {
    homePage.classList.add('hidden');
    questionPage.classList.remove('hidden');
})

prevBtn.addEventListener('click', function () {
    questionPage.classList.add('hidden');
    homePage.classList.remove('hidden');
})

nextBtn.addEventListener('click', function () {
    questionPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
})

goHomeBtn.addEventListener('click', function () {
    resultPage.classList.add('hidden');
    homePage.classList.remove('hidden');
})

goDetailBtn.addEventListener('click', function () {
    resultPage.classList.add('hidden');
    detailPage.classList.remove('hidden');
})

goResultBtn.addEventListener('click', function () {
    detailPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
})