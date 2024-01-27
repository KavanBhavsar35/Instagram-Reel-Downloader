document.addEventListener('DOMContentLoaded', function () {
  let darkModeButton = document.getElementById('darkModeButton')
  let lightModeButton = document.getElementById('lightModeButton')
  let inputBox = document.getElementById('inputBox')
  let inputDownloadButton = document.getElementById('inputDownloadButton')
  let body = document.body;
  let theme = localStorage.getItem('theme')
  let inputPasteButton = document.getElementById('inputPasteButton')
  let notyf = new Notyf({
    duration: 1500,
    ripple: false,
    position: {
      x: 'left',
      y: 'top'
    },
    dismissible: false,
    types: [
      {
        type: 'denied',
        className: 'clipboard-error'
      }
    ]
  });
  let loader = document.getElementById('loader');
  let resultSlider = document.getElementById('resultSlider');
  let sliderNav = document.querySelector('.slider-nav');



  if (theme != null) {
    if (theme == 'light') {
      darkModeButton.style.display = 'none'; // Trigger click event on darkModeButton
      body.setAttribute('data-color-scheme', 'light');
    } else {
      lightModeButton.style.display = 'none'; // Trigger click event on darkModeButton
      body.setAttribute('data-color-scheme', 'dark');

    }
  }
  else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkModeButton.style.display = 'none'; // Trigger click event on darkModeButton
    body.setAttribute('data-color-scheme', 'dark');

  } else {
    lightModeButton.style.display = 'none'; // Trigger click event on darkModeButton
    body.setAttribute('data-color-scheme', 'light');


  }

  function toggleColorScheme(scheme) {
    let isScrollBarVisible = body.scrollHeight > body.clientHeight
    if (!isScrollBarVisible) {
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
    localStorage.setItem('theme', scheme)
  }

  darkModeButton.addEventListener('click', () => toggleColorScheme('dark'));
  lightModeButton.addEventListener('click', () => toggleColorScheme('light'));



  inputDownloadButton.addEventListener('click', async function (e) {
    // e.preventDefault();
    // let instagramUrl = inputBox.val(); //for input box
    // let instagramUrl = 'https%3A%2F%2Fwww.instagram.com%2Fp%2FCsl65Top8rQ%2F%3Figshid%3DNTc4MTIwNjQ2YQ%3D%3D' //a;bum post
    // let instagramUrl = encodeURIComponent('https://www.instagram.com/p/C2etxpnvUCE/?utm_source=ig_web_copy_link') //video album
    // let instagramUrl = encodeURIComponent('https://www.instagram.com/stories/highlights/17977884286971919') //highlights - not worked
    // let instagramUrl = encodeURIComponent('https://www.instagram.com/p/C2U_xfqoza4/?igsh=ZHc4eDdwazhtcHFu') //hybrid
    let instagramUrl = encodeURIComponent('https://www.instagram.com/stories/mememandir/3288657461091414763/') //story
    let url = `https://instagram-downloader.p.rapidapi.com/index?url=${instagramUrl}`;
    let options = {
      method: 'GET',
      headers: {
        // 'X-RapidAPI-Key': 'a8328de202msh554a03f011a90c3p1d7cfcjsn3c89ba0db308',  //kvbhavsar35
        'X-RapidAPI-Key': '60dbc0b92fmsh648a522ca6c84fdp1a8267jsn8f948c32ca41', //kavan0305

        'X-RapidAPI-Host': 'instagram-downloader.p.rapidapi.com'
      }
    };
    loader.style.display = 'block'
    let result;
    try {
      // let response = await fetch(url, options);
      // let result = await response.text();
      // console.table(result);
      result = {
        "status": true,
        "result": {
          "id": "5447961237",
          "username": "pun_bible",
          "caption": "Can a person of science explain to us in the comments why a heater wouldn’t be 100 percent efficient? 🤔\n-\n-\n-\n-\n#fbmemes #facebookmemes #fbmemesdaily #fbmemespage #explore #explorepage #aesthetic #frogs #drawing #crystals #rings #fairygrunge #fairy #fairycore #cats #badlydrawn #converse #fairy #spotify #shoes #tattoos #pinterest",
          "is_video": false,
          "is_album": true,
          "video_img": "./images/test-poster.jpg",
          "image_url": "./images/test-poster.jpg"
        },
        "album": [
          {
            "url": "./images/test.mp4",
            "video_img": "./images/test-poster.jpg",
            "FileType": "video"
          },
          {
            "url": "./images/test.mp4",
            "video_img": "./images/test-poster.jpg",
            "FileType": "video"
          },
          {
            "url": "./images/test.mp4",
            "video_img": "./images/test-poster.jpg",
            "FileType": "video"
          },
          {
            "url": "./images/test.mp4",
            "video_img": "./images/test-poster.jpg",
            "FileType": "video"
          },
          {
            "url": "./images/test.mp4",
            "video_img": "./images/test-poster.jpg",
            "FileType": "video"
          },
          {
            "url": "./images/background.jpeg",
            "FileType": "image"
          }
        ]
      }
      loadLinks(result);
    } catch (error) {
      console.error(error);
    } finally {
      loader.style.display = 'none'
    }
  });
  inputPasteButton.addEventListener('click', function () {
    navigator.clipboard.readText()
      .then(text => {
        inputBox.value = text;
      }).catch(e => {

        console.log(e);
        // alert(e);
        // notyf.dismissAll();
        notyf.dismissAll()
        notyf.open({
          type: 'denied',
          message: "Clipboard access denied. Please grant permission from Settings above. ",
        })
      })
  });
  function loadLinks(response) {

    if (!response?.result) {
      console.error('No result');
    }
    let result = response?.result;
    if (result?.is_album == false) {
      //handle one video logic
    } else {
      let imageCount = 0
      let sliderWrapper = ``;
      let sliderNavWrapper = ``;
      let album = response?.album
      for (let i = 0; i < album.length; i++) {
        element = album[i]
        console.log(element);
        if (element.FileType == 'image') {
          sliderWrapper += `
            <img src="${element.url}" alt="image ${imageCount + 1}" id="element${i + 1}">
          `;
          imageCount++;
        } else {
          sliderWrapper += `
          <video id="element${i + 1}" class="result-video" src="${element.url}" poster="${element.video_img}" disablepictureinpicture></video>
          `;
        }

        if (i == 0) {
          sliderNavWrapper += `
            <a href="#element${i + 1}" active></a>
            
            `
        } else {
          sliderNavWrapper += `
            <a href="#element${i + 1}"></a>
          `
        }

      }
      console.log(sliderWrapper);
      console.log(sliderNavWrapper);

      // console.log(sliderWrapper);
      resultSlider.innerHTML = sliderWrapper;
      sliderNav.innerHTML = sliderNavWrapper;

      const resultWrapper = document.querySelector('.result-wrapper');
      const sliderNavLinks = document.querySelectorAll('.slider-nav a');

      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const videoId = entry.target.id;
            sliderNavLinks.forEach(link => {
              link.removeAttribute('active');
              if (link.hash === `#${videoId}`) {
                link.setAttribute('active', '');
              }
            });
          }
        });
      }, { threshold: 0.5 }); // Set the threshold to 0.5 to trigger the observer when the video is halfway visible

      const resultVideos = document.querySelectorAll('.result-slider video , .result-slider img');
      console.log(resultVideos);
      console.log(resultVideos.length);
      resultVideos.forEach(video => observer.observe(video));

      // Trigger the observer for the middle video element on page load
      const middleIndex = Math.floor(resultVideos.length / 2);
      const middleVideo = resultVideos[middleIndex];
      observer.observe(middleVideo);
      middleVideo.classList.add('is-intersecting');

    }
  }

});