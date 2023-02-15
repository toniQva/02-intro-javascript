// const getImagenPromesa = () =>   new Promise( (resolve)=>   resolve('http://ajskdhasmkfe.com')   )
// getImagenPromesa().then(console.log);


const getImage = async() =>{


  try {

    const apiKey = 'T2hBBgCgljVQgQu2G7vlHjdYCnxGSEso';
    const resp = await fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);
    const {data} = await resp.json();
   
    const {url} = data.images.original;
    const img = document.createElement('img');
    img.src = url;
  
    document.body.append(img);
  

    
  } catch (error) {

    console.error(error);
    // manejo del error
    
  }
  
  
}

getImage();
 






// petition
// .then(resp => resp.json())
// .then( ({data}) => {

//   const {url} = data.images.original;

//   const img = document.createElement('img');
//   img.src = url;

//   document.body.append(img);
  
// })
// .catch(console.warn);