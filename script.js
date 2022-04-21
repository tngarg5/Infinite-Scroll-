// link containers from html and photosArray declaration
const image_Container = document.getElementById('img-container');
const loader = document.getElementById('loader');
let photosArray = [];

// Function for set attribute through seperate function(just for eliminating repeated values)
// funtion setAttributess(element,attributes){
//     for(const key in attributes){
//         Element.setAttribute(key,attributes[key]);
//     }
// }
//
//Display photos function using 
function displayPhotos(){
    //Run funtion for each photo of the array
    photosArray.forEach((photo) => {
        //create an achor <a> to link to unspalsh .com for each photo
        const item = document.createElement('a');
       item.setAttribute('href', photo.links.html);
    //    setAttributes(item,{
    //        href: photo.links.html
//          });
       item.setAttribute('target', '_blank');
        //create a <img> element for photos
        const img = document.createElement('img');
        if(!photo.alt_description){
            img.setAttribute('title',photo.description);
            img.setAttribute('alt', photo.description); 
        }
        else{
        img.setAttribute('title',photo.alt_description);
        img.setAttribute('alt', photo.alt_description);
        }
        img.setAttribute('src', photo.urls.regular);
        //Put <img> inside the anchor element and anchor element inside the imageContainer
        item.appendChild(img);
        image_Container.appendChild(item);

        //check when each image has finished loading
        img.addEventListener('load', imageLoaded);
     
    });

}


// Unsplash API
const apiKey =`UdNuujnNsHH7LTJLPCUu85zRm9LmvMJnMvIINFaaAuM`;
const count = 10;
const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

//Get Photos vrom Unspalsh API
async function getPhotos(){
    try {
        const response = await fetch(apiURL);
        photosArray = await response.json();
        console.log(photosArray)  ;
        displayPhotos();
    } catch (error) {
        //Catch Error
    }
}
//
function imageLoaded(){
    console.log('image loaded');
}
//Checking when the item is scrolled at last 
window.addEventListener('scroll', ()=>{
    console.log('scrolled');
});
//On Loading
getPhotos();