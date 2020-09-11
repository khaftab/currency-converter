const fixer_api_key = "e2224f988ead83597e30e315435ec264";
const fixer_api = `http://data.fixer.io/api/latest?access_key=${fixer_api_key}`;
const rest_countries_api = `https://restcountries.eu/rest/v2/currency`;

// Fetch data about currencies

const getExchangeRate = async (fromCurrency, toCurrency) => {
  const {
    data: { rates },
  } = await axios.get(fixer_api);

  const euro = 1 / rates[fromCurrency];
  const exchangeRate = euro * rates[toCurrency];
  return exchangeRate;
};

getExchangeRate("USD", "AUD");

// Fetch data about country

const getCountries = async (countryCode) => {
  const { data } = await axios.get(`${rest_countries_api}/${countryCode}`);

  return data.map(({ name }) => console.log(name));
};

getCountries("AUD");

// Output

const convertCurrency = (fromCurrency, toCurrency, amount) => {
  fromCurrency = fromCurrency.toUpperCase();
  toCurrency = toCurrency.toUpperCase();

  const [exchangeRate, countries] = await Promise.all([
   await getExchangeRate(fromCurrency, toCurrency),
    await getCountries(toCurrency),
   
  ])

//   const countries = await getCountries(toCurrency); 2s delay await just resolve the promise
//   const exchangeRate = await getExchangeRate(fromCurrency, toCurrency) 2s delay so 2s is waste


  const convertedAmount = (amount * exchangeRate).toFixed(2)
  console.log(convertedAmount)
};

convertCurrency("usd", "aud", 20);
