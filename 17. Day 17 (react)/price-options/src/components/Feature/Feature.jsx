import PropTypes from 'prop-types'
const Feature = ({feature}) => {
    return (
        <li className='list-disc'>
            {feature}
        </li>
    );
};

Feature.propTypes={
    feature: PropTypes.string.isRequired
}

export default Feature;