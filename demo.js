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
Promise.all([
    fetch(url1).then(value => value.json()),
    fetch(url2).then(value => value.json()),
    fetch(url3).then(value => value.json())
])
    .then((value) => {
        console.log(value)
        $("#name").append(value[0].results[0].title)
        $("#date").append(value[0].results[0].release_date)
        $("#overview").append(value[0].results[0].overview)
        $("#popularity").append(value[0].results[0].popularity)
        $("#img").attr('src', 'https://image.tmdb.org/t/p/w500/' + (value[0].results[0].poster_path)).height(250).width(250)

        // Next movie
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
    })
    .catch((err) => {
        console.log(err);
    });
