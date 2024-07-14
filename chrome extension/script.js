fetch(' https://icanhazdadjoke.com/slack').then(data => data.json()).then(jokeData => {
    const jokeText=jokeData.attachments[0].text;
    const jokeElement= document.getElementById('jokeElement');
    jokeElement.innerHTML=jokeText;
})
// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://football-prediction-api.p.rapidapi.com/api/v2/predictions',
//   params: {
//     market: 'classic',
//     iso_date: '2018-12-01',
//     federation: 'UEFA'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
//     'X-RapidAPI-Host': 'football-prediction-api.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
// fetch('https://rapidapi.com/weatherapi/api/weatherapi-com/').then(data=>data.json())