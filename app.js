'use strict';
 //Global
 let firstImageElement = document.getElementById('first-image') ; 
 let secondImageElement = document.getElementById('second-image') ;  
 let thirdImageElement = document.getElementById('third-image') ;
 let allProduct = [];  
 let clickCounter = 0
 let maxAttempts = 25;
//  let maxAttempts1 = prompt('enter your maximum Attempts you want, its 25 by defult')
//  maxAttempts1 = parseInt (maxAttempts1)
 
 
 
let firstImageIndex;
let secondImageIndex;
let thirdImageIndex;

 //Constractor 
 function ProDucts(name , source){
     this.name=name
     this.source=source
     this.votes = 0 ;
     this.shown = 0 ;
     allProduct.push(this);
 }
 
new ProDucts ('bag','images/bag.jpg');
new ProDucts ('banana','images/banana.jpg');
new ProDucts ('bathroom','images/bathroom.jpg');
new ProDucts ('boots','images/boots.jpg');
new ProDucts ('breakfast','images/breakfast.jpg');
new ProDucts ('bubblegum','images/bubblegum.jpg');
new ProDucts ('chair','images/chair.jpg');
new ProDucts ('cthulhu','images/cthulhu.jpg');
new ProDucts ('dog-duck','images/dog-duck.jpg');
new ProDucts ('dragon','images/dragon.jpg');
new ProDucts ('pen','images/pen.jpg');
new ProDucts ('pet-sweep','images/pet-sweep.jpg');
new ProDucts ('scissors','images/scissors.jpg');
new ProDucts ('sweep','images/sweep.png');
new ProDucts ('shark','images/shark.jpg');
new ProDucts ('tauntaun','images/tauntaun.jpg');
new ProDucts ('unicorn','images/unicorn.jpg');
new ProDucts ('water-can','images/water-can.jpg');
new ProDucts ('wine-glass','images/wine-glass.jpg');

//Random number



function generateRandomIndex() {
    return Math.floor(Math.random() * allProduct.length);
}


// Render function
function renderThreeImages(){
    firstImageIndex = generateRandomIndex();
    secondImageIndex = generateRandomIndex();
    thirdImageIndex = generateRandomIndex();
    while (firstImageIndex===secondImageIndex || firstImageIndex===thirdImageIndex
        || secondImageIndex===thirdImageIndex) {
            firstImageIndex = generateRandomIndex();
            secondImageIndex = generateRandomIndex();
    }

    firstImageElement.src = allProduct[firstImageIndex].source;
    allProduct[firstImageIndex].shown++;
    secondImageElement.src = allProduct[secondImageIndex].source;
    allProduct[secondImageIndex].shown++;
    thirdImageElement.src = allProduct[thirdImageIndex].source;
    allProduct[thirdImageIndex].shown++;
    // console.log(allProduct);
}

renderThreeImages();

// event listener

firstImageElement.addEventListener('click', handleUserClick)
secondImageElement.addEventListener('click', handleUserClick)
thirdImageElement.addEventListener('click', handleUserClick)

function handleUserClick(event) {
    // if (prombt) {
    //     maxAttempts = maxAttempts1
    // }
    if (clickCounter<maxAttempts) {
        if (event.target.id === 'first-image') {
            allProduct[firstImageIndex].votes = allProduct[firstImageIndex].votes + 1;
        } else if(event.target.id === 'second-image'){ 
            allProduct[secondImageIndex].votes = allProduct[secondImageIndex].votes + 1;

        } else{allProduct[thirdImageIndex].votes = allProduct[thirdImageIndex].votes + 1;}
        clickCounter++;
        renderThreeImages();
    }
    else{
        firstImageElement.removeEventListener('click', handleUserClick)
        secondImageElement.removeEventListener('click', handleUserClick)
        thirdImageElement.removeEventListener('click', handleUserClick)


        let list = document.getElementById('result');
        let btn=document.getElementById('btn');
        btn.addEventListener('click' , clickit)
        function clickit(){
        let liElement;
        for (let i = 0; i < allProduct.length; i++) {
            liElement = document.createElement('li');
            list.appendChild(liElement);
            liElement.textContent = `${allProduct[i].name} has ${allProduct[i].votes}  votes , shown ${allProduct[i].shown}`;
        }
    }
    }
}

///////////////////////////////////////////anas bet5awath//////////////////////////

// function eqlArray(arr){
//     let sum1 =0;
//     let sum2 =0;


//     let integerArray = math.floor((arr.length/2));

//     if(arr.length%2 === 0){
//     for (let i = 0; i < integerArray; i++) {
//         sum1 += arr[i];
//         sum2 += arr[i+(integerArray)];

        
//     }
//     } 
//     else{
//     for (let i = 0; i < integerArray; i++) {
//         sum1 += arr[i];
//         sum2 += arr[i+(integerArray+1)];

        
//         }
//     }
//     if (sum1===sum2) {
//       console.log(`${sum1} = ${sum2}`)  
//     }
//     else {
//         console.log(`${sum1} not = ${sum2}`)
//     }


// }
// let marks = [10,8,2,9,9]
// eqlArray(marks);

//////////////////////////////////////////