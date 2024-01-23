$(document).ready(function () {
    var darkModeButton = $('#darkModeButton'); 
    var lightModeButton = $('#lightModeButton'); 
    
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        darkModeButton.css('display','none'); // Trigger click event on darkModeButton
    } else {
        lightModeButton.css('display','none'); // Trigger click event on darkModeButton
        
    }
    
    darkModeButton.on('click', function () {
        darkModeButton.css('display', 'none');
        lightModeButton.css('display', 'block');
        document.body.setAttribute('data-color-scheme', 'dark');
    });
    
    lightModeButton.on('click', function () {
        lightModeButton.css('display', 'none');
        darkModeButton.css('display', 'block');
        document.body.setAttribute('data-color-scheme', 'light');
    });
    console.log(process.env)
    $('#inputDownloadButton').on('click', function () {
        const instagramUrl = $('#inputBox').val();
        // const instagramUrl = 'https://www.instagram.com/reel/C2UjdJNKf2v/?utm_source=ig_web_copy_link';
        // console.log(instagramUrl);
        const settings = {
            async: true,
            crossDomain: true,
            url: `https://instagram-downloader.p.rapidapi.com/index?url=${instagramUrl}`,
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'my apikey',
                'X-RapidAPI-Host': 'instagram-downloader.p.rapidapi.com'
            }
        };
        
        $.ajax(settings).done(function (response) {
            console.table(response);
        });
    });
});




/*example result
{
  "status": true,
  "result": {
    "id": "25025320",
    "username": "instagram",
    "caption": "“My personal experience of seeking to be seen, heard and understood in a world where I felt incredibly alone is at the core of my current work on Asian American identity,” says Japanese-Taiwanese-American multidisciplinary artist, activist and nail tech @ameyaokamoto (Ameya Marie Okamoto). \n \nAmeya’s nail art explores Asian American visibility through themes like identity, status, exploitation and the impact of forced migration on body politics. “I started doing nails out of my dorm room last year. I was immediately obsessed with how nail art and service work connected to Asian American identity and my own immigration story. Most Asian immigrants, including my grandparents, came to America as service.” \n \nAmeya’s #GoingHomeAgainProject is a reckoning with Asian Americans’ forgotten history. “I am currently traveling across America via train visiting and memorializing sites across the U.S. that hold particular importance to the Asian American diaspora and fight for civil rights. \n \nIt is important to me that my art complicates the idea of Asian America and helps educate young people about their hidden histories that they would otherwise not be taught in schools. When you don’t have a lot of examples of people who look like you, it’s hard to imagine who you might be able to become.” \n \nPhotos by @ameyaokamoto @visualsbyalyvia and @mattdicksonphotography",
    "is_video": false,
    "is_album": true,
    "video_img": "https://scontent.cdninstagram.com/v/t51.2885-15/348338749_147640998293835_2185606698794084194_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=XkfPfWTeJOEAX_wam0j&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwOTE1MDEzNzA5OTE1NzE1OA%3D%3D.2-ccb7-5&oh=00_AfADdUAPO6DQxQXUC6hoSjscAso5F-_Ky4vHf3Zjdql5Bg&oe=65B1245B&_nc_sid=10d13b",
    "image_url": "https://scontent.cdninstagram.com/v/t51.2885-15/348338749_147640998293835_2185606698794084194_n.jpg?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=XkfPfWTeJOEAX_wam0j&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwOTE1MDEzNzA5OTE1NzE1OA%3D%3D.2-ccb7-5&oh=00_AfADdUAPO6DQxQXUC6hoSjscAso5F-_Ky4vHf3Zjdql5Bg&oe=65B1245B&_nc_sid=10d13b"
  },
  "album": [
    {
      "url": "https://scontent.cdninstagram.com/v/t51.2885-15/348338749_147640998293835_2185606698794084194_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMzUweDE2ODcuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=XkfPfWTeJOEAX_wam0j&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwOTE1MDEzNzA5OTE1NzE1OA%3D%3D.2-ccb7-5&oh=00_AfADdUAPO6DQxQXUC6hoSjscAso5F-_Ky4vHf3Zjdql5Bg&oe=65B1245B&_nc_sid=10d13b",
      "FileType": "image"
    },
    {
      "url": "https://scontent.cdninstagram.com/v/t51.2885-15/348498038_567886012129006_7742327464968293603_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=K2yGTrFHR_YAX-cTIq3&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwOTE1MDEzNzE4MzEwNDM1OQ%3D%3D.2-ccb7-5&oh=00_AfDQUIUn2hkSA09sRPha-Je38Nyvq8hsYnveCjq5TL3NGg&oe=65B24FAD&_nc_sid=10d13b",
      "FileType": "image"
    },
    {
      "url": "https://scontent.cdninstagram.com/v/t51.2885-15/347911920_287760753692112_4128233122580496561_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=-5bXrt9eed4AX_I72_0&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwOTE1MDEzNzE2NjI4NzA2MQ%3D%3D.2-ccb7-5&oh=00_AfByBVIR-szXlJeZKzHIJxpl2kOLKbJduHCfXky3bmoQtg&oe=65B23295&_nc_sid=10d13b",
      "FileType": "image"
    },
    {
      "url": "https://scontent.cdninstagram.com/v/t51.2885-15/349003953_258717983365264_6890828823339143851_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=jozM4J-dNKsAX95P9YZ&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwOTE1MDEzNzA5MDY4MTI1OA%3D%3D.2-ccb7-5&oh=00_AfCgFUWDhJ3Ar4AYMHVVfi3Qxi-7zQo6Z7C19UYU9UYCuw&oe=65B1A580&_nc_sid=10d13b",
      "FileType": "image"
    },
    {
      "url": "https://scontent.cdninstagram.com/v/t51.2885-15/348836551_2448621258648631_3567380719205505710_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyIn0&_nc_ht=scontent.cdninstagram.com&_nc_cat=107&_nc_ohc=q4O27Q8eXFEAX_w8xuG&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzEwOTE1MDEzNzA5OTA1MjYyOA%3D%3D.2-ccb7-5&oh=00_AfBUnlY_pabsR1Oo0aKM1kuCguQaRnOQl9jX9ilBH5QMkw&oe=65B1F8BF&_nc_sid=10d13b",
      "FileType": "image"
    }
  ]
}
*/