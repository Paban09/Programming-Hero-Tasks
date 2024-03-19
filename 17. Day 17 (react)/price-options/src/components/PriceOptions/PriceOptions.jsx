import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
    const priceOptions=[
        {
          "id": "001",
          "name": "Basic Membership",
          "price": 50,
          "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": "002",
          "name": "Premium Membership",
          "price": 80,
          "features": [
            "Access to all gym facilities",
            "Unlimited group fitness classes",
            "Personal trainer consultation",
            "Towel service"
          ]
        },
        {
          "id": "003",
          "name": "Student Membership",
          "price": 30,
          "features": [
            "Access to cardio area",
            "Access to weightlifting area",
            "Locker room access",
            "Valid student ID required"
          ]
        }
    ];
      
    return (
        <div className="p-10 space-y-5">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
                {
                    priceOptions.map(option=>
                        <PriceOption 
                            key={option.id} 
                            option={option}
                        ></PriceOption>
                    )
                }
            </div>
            
        </div>
    );
};

export default PriceOptions;