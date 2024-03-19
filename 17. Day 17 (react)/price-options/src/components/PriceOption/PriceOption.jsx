import PropTypes from 'prop-types'
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features}=option;
    return (
        <div className='bg-blue-300 rounded-xl p-4 flex flex-col'>
            <h2>
                <span className='text-3xl'>{price}$</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h4 className='text-4xl'> {name}</h4>
            <h4 className='text-3xl'>Features :</h4>
            <ul className='px-5 flex-grow'>
                {
                    features.map((feature,idx)=><Feature feature={feature} key={idx}></Feature>)
                }
            </ul>
            <button className='hover:bg-green-600 duration-1000 mt-6 bg-green-300 p-3 font-lg text-xl'>Buy Now</button>
            
        </div>
    );
};

PriceOption.propTypes={
    option : PropTypes.object.isRequired
}

export default PriceOption;