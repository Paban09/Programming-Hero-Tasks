import Cousin from "../Cousin/Cousin";

const Uncle = ({asset}) => {
    return (
        <div >
           <h2>Uncle</h2> 
           <section className="flex">
                <Cousin name={'Abul'} asset={asset}></Cousin>
                <Cousin name={'asdfgsdfAbul'}></Cousin>
                <Cousin name={'asdfAbul'}></Cousin>
           </section>
            
        </div>
    );
};

export default Uncle;