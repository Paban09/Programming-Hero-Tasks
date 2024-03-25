import Cousin from "../Cousin/Cousin";

const Aunty = () => {
    return (
        <div >
           <h2>Aunty</h2> 
           <section className="flex">
                <Cousin name={'tabab'}></Cousin>
                <Cousin name={'haga'}></Cousin>
                <Cousin name={'Abugagal'}></Cousin>
                
           </section>
            
        </div>
    );
};

export default Aunty;