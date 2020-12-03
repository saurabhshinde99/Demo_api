// fetch('https://api.openweathermap.org/data/2.5/weather?q=Ahmedabad&appid=ebb863ec77be5e79b1794ac1fd58a0e1')
fetch('https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=chhichhore&page=1&include_adult=false')
    .then(function (response) {
        console.log(response)
        response.json().then(function (data) {
            console.log(data);
            console.log(data.results[0].title)
            $("#name").append(data.results[0].title)
            $("#str").append(data.results[0].title)
            $("#date").append(data.results[0].release_date)
            $("#overview").append(data.results[0].overview)
            $("#popularity").append(data.results[0].popularity)
            $("#img").attr('src','https://image.tmdb.org/t/p/w500/'+(data.results[0].poster_path)).height(250).width(250)
        })
    });
    