fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => getAllCountry(data))
const getAllCountry = (data) => {
    for (const country of data) {
        // console.log(country);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card country-card" style="width: 18rem;">
            <img src="${country.flags.png}" class="card-img-top flag" alt="...">
        <div class="card-body">
                <h4 class="card-title">Neme:${country.name.common.slice(0, 15)}</h4>
                <h5>Official:${country.name.official.slice(0, 15)}</h5>
                <h5>Capital:${country.capital}</h5>
                <h6>Region:${country.region}</h6>
                <p class="card-text">Population: ${country.population}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
        
        </div>
    </div>`
        document.getElementById('show-country-card').appendChild(div)
    }
}
const searchCountry = () => {
    const inputText = document.getElementById('search-input');
    const inputValue = inputText.value;
    const warning = document.getElementById('error-message');
    if (inputValue == '') {
        warning.style.display = 'block'
    }
    else {
        warning.style.display = 'none';
        document.getElementById('show-country-card').textContent = '';
        const url = `https://restcountries.com/v3.1/name/${inputValue}`;
        fetch(url)
            .then(res => res.json())
            .then(data => countryDetails(data))
    }
}
const countryDetails = (country) => {
    for (const countryDetail of country) {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card country-card" style="width: 18rem;">
    <img src="${countryDetail.flags.png}" class="card-img-top flag" alt="...">
<div class="card-body">
        <h4 class="card-title">Neme:${countryDetail.name.common.slice(0, 15)}</h4>
        <h5>Official:${countryDetail.name.official.slice(0, 15)}</h5>
        <h5>Capital:${countryDetail.capital}</h5>
        <p class="card-text">Population: ${countryDetail.population}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
        document.getElementById('show-country-card').appendChild(div)
    }
}
// asia
const getAsia = () => {
    document.getElementById('show-country-card').textContent = '';
    // console.log(data);
    fetch('https://restcountries.com/v3.1/region/asia')
        .then(res => res.json())
        .then(data => getAsiaCountry(data))
}
const getAsiaCountry = (data) => {
    for (const country of data) {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card country-card" style="width: 18rem;">
    <img src="${country.flags.png}" class="card-img-top flag" alt="...">
<div class="card-body">
        <h4 class="card-title">Neme:${country.name.common.slice(0, 15)}</h4>
        <h5>Official:${country.name.official.slice(0, 15)}</h5>
        <h5>Capital:${country.capital}</h5>
        <p class="card-text">Population: ${country.population}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
        document.getElementById('show-country-card').appendChild(div)
    }
}
// europe
const getEurope = () => {
    document.getElementById('show-country-card').textContent = '';
    // console.log(data);
    fetch('https://restcountries.com/v3.1/region/europe')
        .then(res => res.json())
        .then(data => getAsiaCountry(data))
}
const getEuropeCountry = (data) => {
    for (const country of data) {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card country-card" style="width: 18rem;">
    <img src="${country.flags.png}" class="card-img-top flag" alt="...">
<div class="card-body">
        <h4 class="card-title">Neme:${country.name.common.slice(0, 15)}</h4>
        <h5>Official:${country.name.official.slice(0, 15)}</h5>
        <h5>Capital:${country.capital}</h5>
        <p class="card-text">Population: ${country.population}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
        document.getElementById('show-country-card').appendChild(div)
    }
}
// Africa
const getAfrica = () => {
    document.getElementById('show-country-card').textContent = '';
    // console.log(data);
    fetch('https://restcountries.com/v3.1/region/africa')
        .then(res => res.json())
        .then(data => getAsiaCountry(data))
}
const getAfricaCountry = (data) => {
    for (const country of data) {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card country-card" style="width: 18rem;">
    <img src="${country.flags.png}" class="card-img-top flag" alt="...">
<div class="card-body">
        <h4 class="card-title">Neme:${country.name.common.slice(0, 15)}</h4>
        <h5>Official:${country.name.official.slice(0, 15)}</h5>
        <h5>Capital:${country.capital}</h5>
        <p class="card-text">Population: ${country.population}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
        document.getElementById('show-country-card').appendChild(div)
    }
}
// americas
const getAmericas = () => {
    document.getElementById('show-country-card').textContent = '';
    // console.log(data);
    fetch('https://restcountries.com/v3.1/region/americas')
        .then(res => res.json())
        .then(data => getAsiaCountry(data))
}
const getAmericasCountry = (data) => {
    for (const country of data) {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card country-card" style="width: 18rem;">
    <img src="${country.flags.png}" class="card-img-top flag" alt="...">
<div class="card-body">
        <h4 class="card-title">Neme:${country.name.common.slice(0, 15)}</h4>
        <h5>Official:${country.name.official.slice(0, 15)}</h5>
        <h5>Capital:${country.capital}</h5>
        <p class="card-text">Population: ${country.population}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
        document.getElementById('show-country-card').appendChild(div)
    }
}
// Oceania
const getOceania = () => {
    document.getElementById('show-country-card').textContent = '';
    // console.log(data);
    fetch('https://restcountries.com/v3.1/region/Oceania')
        .then(res => res.json())
        .then(data => getAsiaCountry(data))
}
const getOceaniaCountry = (data) => {
    for (const country of data) {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `<div class="card country-card" style="width: 18rem;">
    <img src="${country.flags.png}" class="card-img-top flag" alt="...">
<div class="card-body">
        <h4 class="card-title">Neme:${country.name.common.slice(0, 15)}</h4>
        <h5>Official:${country.name.official.slice(0, 15)}</h5>
        <h5>Capital:${country.capital}</h5>
        <p class="card-text">Population: ${country.population}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`
        document.getElementById('show-country-card').appendChild(div)
    }
}