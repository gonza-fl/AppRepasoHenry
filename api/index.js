//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
const { Superheros } = require('./src/db')

// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  const superheros = []
  //const superheros = await axios.get(`https://superheroapi.com/api/${API_TOKEN}/${id}`)

  for (let i = 1; i <= 40; i++) {

    const hero = await axios.get(`https://superheroapi.com/api/10159320796634539/${i}`)

      .then(

        result => {
          //console.log(result)
          Superheros.findOrCreate({
            where: {
              //id: hero.id,
              name: result.data.name,
              //powerstats: result.data.powerstats,
              image: result.data.image.url, 
              // appearance: result.results.appearance,
              // alignment: result.results.alignment
            }
          })
        }
      )
  }

  console.log(superheros)




  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


/*

if (countries !== [] || typeof countries === 'undefined') {
    axios
      .get("https://restcountries.eu/rest/v2/all")
      .then((respuesta) => {
        const result = respuesta.data;
        if (typeof result != "undefined") {
          result.map((country) => {
            Country.findOrCreate({
              where: {
                id: country.alpha3Code,
                name: country.name,
                flag: country.flag,
                region: country.region,
                capit
              }
            })
*/

//CONST CREANDOPAIS = AWAIT AXIOS.GET('HTTPS://RESTCOUNTRIES.EU/REST/V2/ALL')
  // .THEN(RESPONSE => {     
  //       FOR(VAR I= 0; RESPONSE.DATA.LENGTH; I++){
  //      PAISES.CREATE({
  //           ALPHA3CODE: RESPONSE.DATA[I].ALPHA3CODE, 
  //           NAME:  RESPONSE.DATA[I].NAME,
  //           FLAG: RESPONSE.DATA[I].FLAG,
  //           REGION: RESPONSE.DATA[I].REGION,
  //           CAPITAL: RESPONSE.DATA[I].CAPITAL,
  //           SUBREGION: RESPONSE.DATA[I].SUBREGION,
  //           AR