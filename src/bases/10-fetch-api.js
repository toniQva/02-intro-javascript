const apiKey = 'T2hBBgCgljVQgQu2G7vlHjdYCnxGSEso';

const petition = fetch(`https://api.giphy.com/v1/gifs/random?apikey=${apiKey}`);

petition
.then(resp => resp.json())
.then( ({data}) => {

  const {url} = data.images.original;

  const img = document.createElement('img');
  img.src = url;

  document.body.append(img);
  
})
.catch(console.warn);