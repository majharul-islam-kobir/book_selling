
function getImage(name) {
    const myImage =new URL (name, import.meta.url).href;
    return myImage
 
    
  }
  export default getImage;
  
  
  