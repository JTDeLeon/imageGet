#### Pre-requisites: 
Google Chrome Web Browser

# Use Case: 
When optimizing a web page for page speed performance, photos and images on the page make up a significant amount of the whole page size. Therefore we need to grab all the images and background images that the page is utilizing and then compress & minify these photos. Once images have been processed, the new images can be reimplemented back into the page to replace the old unprocessed images. 

A large and tedious task for this type of page optimization is having to manually go through and grab each photo on the page as well as downloading all the background images that are being set through a css background-image url.



<strong>Previously:</strong> this task would include, scrolling through the page to find and image, inspecting the image, copying the href value or the url value, navigating to this url value on a new tab, and saving the image from this new tab. 



<strong>Now:</strong> with this new script we are able to run the script and at the bottom of the page all of the images on the page and images set as a background within the page are now represented as a download link where all you need to do is [ CMD/Ctr ] + Click and this link will automatically download the file to your computer's download directory. 

# How To Implement & Use:
It's very simple to run this code within google chrome web browser environment. You have 2 main ways you can implement this code: 

1. Copy/Paste within chrome's developer console
2. Use a bookmarklet to be able to run the code on any web page


## Copy / Paste within chrome developer console (Recommended): 
1. Open up the developer console by either using keyboard shortcuts [ CMD ] + Option + i on macbook and ____ on windows. Or at the google chrome menu bar select view → Developer → JavaScript console . 
2. Paste the following code within your console: 

<code>
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
</code>

3. Scroll to bottom of web page and [ CMD/Ctr ] + Click to download each of the blue links. 


## Implement with Google Chrome Bookmarklet: 
(TBD)



