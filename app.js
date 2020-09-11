import axios from "axios";
const proxy = "https://cors-anywhere.herokuapp.com/";

const fixer_api_key = "e2224f988ead83597e30e315435ec264";
const fixer_api = `${proxy}http://data.fixer.io/api/latest?access_key=${fixer_api_key}`;
const rest_countries_api = `${proxy}https://restcountries.eu/rest/v2/currency"`;

// Fetch data about currencies

const getExchangeRate = async (fromCurrency, toCurrency) => {
  const { data } = await axios.get(fixer_api);

  //   const rates = await resonse
  //     .json()
  //     .then((data) => data.rates)
  //     .catch((err) => err);

  //   const euro = 1 / rates[fromCurrency];
  //   const exchangeRate = euro * rates[toCurrency];
  //   return exchangeRate;

  console.log(data);
};

getExchangeRate("USD", "AUD");

// Fetch data about country

const getCountries = async (countryCode) => {
  const response = await fetch(`${rest_countries_api}/${countryCode}`);
  const data = await response.json().then((val) => val);

  return data.map(({ name }) => name);
};

getCountries("AUD");

// Output
