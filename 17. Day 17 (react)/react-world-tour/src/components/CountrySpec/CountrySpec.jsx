const CountrySpec = (props) => {
    const {country}=props;
    // const {country,handleVisitedCountry,handleVisitedFlags}=props;
    return (
        <div>
           <p><small>Country {country.name.common}</small></p>
        </div>
    );
};

export default CountrySpec;