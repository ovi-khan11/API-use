const loadCountryApi = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json()) 
    .then(data => displayCountry(data));
}
 loadCountryApi ()

  const uiDiv = document.getElementById('countries')

 const displayCountry = (countries)=>{
    countries.forEach(country => {
        const div = document.createElement('div')
        div.classList.add('country')
        div.innerHTML = `
           <img src="${country.flags.png}" alt="">
           <h3>Name: ${country.name.common}</h3>
           <p>Population: ${country.population}</p>
           <button onclick="loadCountryByName('${country.name.common}')">See details</button>

        `
        uiDiv.appendChild(div)
    });
 }

 const loadCountryByName = (name)=> {
    fetch(`https://restcountries.com/v3.1/name/${name}`)
    .then(res=>res.json())
    .then(data=> displaySingleCountry(data[0]));
 }
 const displaySingleCountry=(country)=>{
       window.scrollTo(0,0);
    const countryDetails = document.getElementById('country-details')
       countryDetails.classList.add('details-country')
        countryDetails.innerHTML =`
           <img src="${country.flags.png}" alt="">
           <h3>Name: ${country.name.common}</h3>
           <p>Population: ${country.population}</p>
           <p>Capital: ${country.capital}</p>
           <p>Status: ${country.status}</p>
           <p>Region: ${country.region}</p>
           <p>Languages: ${country.languages}</p>
           <a>youtube</a>
        `
        
       
 }