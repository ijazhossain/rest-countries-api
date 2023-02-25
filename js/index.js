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
        `;
        countriesContainer.appendChild(countryDiv);
    });
}
loadCountries()