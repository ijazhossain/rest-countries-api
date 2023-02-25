const loadCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const data = await res.json();
    displayCountries(data);
}
const displayCountries = (countries) => {
    const countriesContainer = document.getElementById('countries-container');

    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
        <img src="${country.flags.png}">
        <h3>Name:${country.name.common}</h3>
        <p>Population:${country.population} </p>
        <button onclick="loadCountryDetail('${country.cca2}')">See Details</button>
        `;
        countriesContainer.appendChild(countryDiv);
    });
}

const loadCountryDetail = async (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    try {
        const res = await fetch(url);
        const data = await res.json();
        displaySingleCountry(data[0]);
    } catch (error) {
        console.error('error', error);
    }
}

const displaySingleCountry = data => {
    const singleCountryContainer = document.getElementById('single-country-container');
    singleCountryContainer.textContent = '';
    const singleCountry = document.createElement('div');
    singleCountry.className = 'country'
    singleCountry.style.textAlign = 'center'
    singleCountry.style.margin = '50px';
    singleCountry.style.backgroundColor = 'lightskyblue';
    singleCountry.innerHTML = `
    <img src="${data.flags.png}">
        <h3>Name:${data.name.common}</h3>
        <p>Population:${data.population} </p>
    `;
    singleCountryContainer.appendChild(singleCountry);
}
loadCountries()