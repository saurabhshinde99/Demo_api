// fetch('https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=chhichhore&page=1&include_adult=false')
//     .then(function (response) {
//         console.log(response)
//         response.json().then(function (data) {
//             console.log(data);
//             console.log(data.results[0].title)
//             $("#name").append(data.results[0].title)
//             $("#str").append(data.results[0].title)
//             $("#date").append(data.results[0].release_date)
//             $("#overview").append(data.results[0].overview)
//             $("#popularity").append(data.results[0].popularity)
//             $("#img").attr('src','https://image.tmdb.org/t/p/w500/'+(data.results[0].poster_path)).height(250).width(250)
//         })
//     });
// $("button").click(function () {
//     // alert("Value: " + $("#test").val());
//     let v1 = $("input").val();
//     $("h3").append(v1);
//     // console.log(v1)
// });


let l1 = 'chhichhore'
url1 = `https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=${l1}&page=1&include_adult=false`
url2 = 'https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=avengers endgame&page=1&include_adult=false'
url3 = 'https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=phir hera pheri&page=1&include_adult=false'
url4 = 'https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=Tenet&page=1&include_adult=false'
url5 = 'https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=Dark&page=1&include_adult=false'
url6 = 'https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=Captain America: Civil War&page=1&include_adult=false'
url7 = 'https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=ms dhoni&page=1&include_adult=false'
url8 = 'https://api.themoviedb.org/3/search/movie?api_key=52364270e03d88b2f26ad29cff466e81&language=en-US&query=Bahubali&page=1&include_adult=false'
Promise.all([
    fetch(url1).then(value => value.json()),
    fetch(url2).then(value => value.json()),
    fetch(url3).then(value => value.json()),
    fetch(url4).then(value => value.json()),
    fetch(url5).then(value => value.json()),
    fetch(url6).then(value => value.json()),
    fetch(url7).then(value => value.json()),
    fetch(url8).then(value => value.json())
])
    .then((value) => {
        console.log(value)
        $("#name").append(value[0].results[0].title)
        $("#date").append(value[0].results[0].release_date)
        $("#overview").append(value[0].results[0].overview)
        $("#popularity").append(value[0].results[0].popularity)
        $("#img").attr('src', 'https://image.tmdb.org/t/p/w500/' + (value[0].results[0].poster_path)).height(250).width(250)

        // Second movie
        $("#name1").append(value[1].results[0].title)
        $("#date1").append(value[1].results[0].release_date)
        $("#overview1").append(value[1].results[0].overview)
        $("#popularity1").append(value[1].results[0].popularity)
        $("#img1").attr('src','https://image.tmdb.org/t/p/w500/'+(value[1].results[0].poster_path)).height(250).width(250)

        //Third Movie
        $("#name2").append(value[2].results[0].title)
        $("#date2").append(value[2].results[0].release_date)
        $("#overview2").append(value[2].results[0].overview)
        $("#popularity2").append(value[2].results[0].popularity)
        $("#img2").attr('src','https://image.tmdb.org/t/p/w500/'+(value[2].results[0].poster_path)).height(250).width(250)

        //Card 1
        $("#name3").append(value[3].results[0].title)
        $("#date3").append(value[3].results[0].release_date)
        $("#overview3").append(value[3].results[0].overview)
        $("#popularity3").append(value[3].results[0].popularity)
        $("#img3").attr('src','https://image.tmdb.org/t/p/w500/'+(value[3].results[0].poster_path)).height(250).width(250)

        //Card 2
        $("#name4").append(value[4].results[0].title)
        $("#date4").append(value[4].results[0].release_date)
        $("#overview4").append(value[4].results[0].overview)
        $("#popularity4").append(value[4].results[0].popularity)
        $("#img4").attr('src','https://image.tmdb.org/t/p/w500/'+(value[4].results[0].poster_path)).height(250).width(250)

        //Card 3
        $("#name5").append(value[5].results[0].title)
        $("#date5").append(value[5].results[0].release_date)
        $("#overview5").append(value[5].results[0].overview)
        $("#popularity5").append(value[5].results[0].popularity)
        $("#img5").attr('src','https://image.tmdb.org/t/p/w500/'+(value[5].results[0].poster_path)).height(250).width(250)

        //Card 4
        $("#name6").append(value[6].results[0].title)
        $("#date6").append(value[6].results[0].release_date)
        $("#overview6").append(value[6].results[0].overview)
        $("#popularity6").append(value[6].results[0].popularity)
        $("#img6").attr('src','https://image.tmdb.org/t/p/w500/'+(value[6].results[0].poster_path)).height(250).width(250)

        //Card 5
        $("#name7").append(value[7].results[0].title)
        $("#date7").append(value[7].results[0].release_date)
        $("#overview7").append(value[7].results[0].overview)
        $("#popularity7").append(value[7].results[0].popularity)
        $("#img7").attr('src','https://image.tmdb.org/t/p/w500/'+(value[7].results[0].poster_path)).height(250).width(250)
    })
    .catch((err) => {
        console.log(err);
    });
