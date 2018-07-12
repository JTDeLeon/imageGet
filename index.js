
let images = document.querySelectorAll('img');
let array = [];
images.forEach((img,index) => {
    array[index] = img.src;
})

let newEl = document.createElement('div');
newEl.classList = 'images-to-pull';
let instruction = document.createElement('h1');
instruction.textContent = 'All Images (<img>) On Page - [CMD/Ctr] Click on links below to download:';
newEl.appendChild(instruction);

array.forEach((item,index)=>{
    if(document.querySelector('a').src === item){
        console.log()
    }
    let para = document.createElement('p');
    let aTag = document.createElement('a');

    aTag.href = item;
    aTag.textContent = item;
    aTag.download = item;
    aTag.classList = 'download-links';
    aTag.target = '_blank';

    para.appendChild(aTag);
    newEl.appendChild(para);
})

document.querySelector('body').appendChild(newEl);


//To get background section image urls
let sections = document.querySelectorAll('section');
let sectionArray = [];

const sectionEl = document.createElement('div');
sectionEl.classList = 'section-urls';
let sectionInstruct = document.createElement('h1');
sectionInstruct.textContent = 'Section Background Images - [CMD/Ctr] Click on links below to download:';
sectionEl.appendChild(sectionInstruct);

sections.forEach(item=>{
    var style = window.getComputedStyle(item);
    if(style.getPropertyValue(style[12]) != 'none'){
        sectionArray.push(style.getPropertyValue(style[12]).slice(5,-2));
    }
})

//Put into the DOM
sectionArray.forEach(url => {
    let para = document.createElement('p');
    let aTag = document.createElement('a');

    aTag.href = url;
    aTag.textContent = url;
    aTag.download = url;
    aTag.target = '_blank';

    para.appendChild(aTag);
    sectionEl.appendChild(para);
});

document.querySelector('body').appendChild(sectionEl);
