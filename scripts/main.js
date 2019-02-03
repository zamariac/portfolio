var workSection = document.querySelector('.projects');
var infoSection = document.querySelector('.info');

var showWork = document.querySelector('.work-tab');
var showInfo = document.querySelector('.info-tab');

showWork.addEventListener('click', showWorkSection);
showInfo.addEventListener('click', showInfoSection);

window.onload = function() {
	infoSection.style.display = 'none';

};

function showWorkSection(){
    infoSection.style.display = 'none';
    workSection.style.display = 'flex';  

};

function showInfoSection(){
	workSection.style.display = 'none';
    infoSection.style.display = 'flex';
};

// var showOne = document.querySelector('.bodinuity');
// var showTwo = document.querySelector('.nenas-website');
// var showThree = document.querySelector('.intagram-clone');

// var projectOne = document.querySelector('.one');
// var projectTwo = document.querySelector('.two');
// var projectThree = document.querySelector('.three');


// function showCurrentOne (){
//     showTwo.style.display = 'none';
//     showThree.style.display = 'none';
//     showOne.style.display = 'block';
    
// };
// projectOne.addEventListener('click', showCurrentOne);

// function showCurrentTwo (){
//     showOne.style.display = 'none';
//     showThree.style.display = 'none';
//     showTwo.style.display = 'block';

// };
// projectTwo.addEventListener('click', showCurrentTwo);

// function showCurrentThree (){
//     showOne.style.display = 'none';
//     showTwo.style.display = 'none';
//     showThree.style.display = 'block';

// };
// projectThree.addEventListener('click', showCurrentThree);


