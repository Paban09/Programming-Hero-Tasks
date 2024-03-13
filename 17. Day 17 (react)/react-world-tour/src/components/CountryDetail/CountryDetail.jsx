import CountrySpec from "../CountrySpec/CountrySpec";

const CountryDetail = (props) => {
    // const {country,handleVisitedCountry,handleVisitedFlags}=props;

    return (
        <div>
            <h4>Country Details</h4>
            <hr />
            {/* <CountrySpec
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            >
            </CountrySpec> */}
            <CountrySpec {...props}></CountrySpec>
        </div>
    );
};

export default CountryDetail;