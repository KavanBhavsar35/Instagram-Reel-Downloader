document.addEventListener('DOMContentLoaded', function () {
  let darkModeButton = document.getElementById('darkModeButton')
  let lightModeButton = document.getElementById('lightModeButton')
  let inputBox = document.getElementById('inputBox')
  let inputDownloadButton = document.getElementById('inputDownloadButton')
  let body = document.body;
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkModeButton.style.display = 'none'; // Trigger click event on darkModeButton
  } else {
    lightModeButton.style.display = 'none'; // Trigger click event on darkModeButton

  }

  function toggleColorScheme(scheme) {
    let isScrollBarVisible = body.scrollHeight > body.clientHeight
    if(!isScrollBarVisible){
      body.classList.add('disable-scroll')
      setTimeout(() => {
        body.classList.remove('disable-scroll')
        
      }, 700);
    }
    if (scheme === 'dark') {
      darkModeButton.style.display = 'none';
      lightModeButton.style.display = 'block';
    } else {
      lightModeButton.style.display = 'none';
      darkModeButton.style.display = 'block';
    }
    body.setAttribute('data-color-scheme', scheme);
  }
  
  darkModeButton.addEventListener('click', () => toggleColorScheme('dark'));
  lightModeButton.addEventListener('click', () => toggleColorScheme('light'));


  
  inputDownloadButton.addEventListener('click', async function () {
    // let instagramUrl = inputBox.val();
    let instagramUrl = 'https%3A%2F%2Fwww.instagram.com%2Fp%2FCsl65Top8rQ%2F%3Figshid%3DNTc4MTIwNjQ2YQ%3D%3D'

    let url = `https://instagram-downloader.p.rapidapi.com/index?url=${instagramUrl}`;
    let options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'a8328de202msh554a03f011a90c3p1d7cfcjsn3c89ba0db308',
        'X-RapidAPI-Host': 'instagram-downloader.p.rapidapi.com'
      }
    };

    try {
      let response = await fetch(url, options);
      let result = await response.text();
      console.table(result);
    } catch (error) {
      console.error(error);
    }
  });
});