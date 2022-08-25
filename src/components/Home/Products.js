import { useState } from "react";
import { products } from "../../data/home";
import Card from "../Card";
import ViewModal from "../ViewModal";



function Products() {

    const [modalData , setModalData] = useState(0);
    const singleProduct = (id) =>{
        //Fetching single data
       let singleData =  products.find((item)=> {return item.id == id });
       setModalData(singleData);
    }
    
    return ( 

        <>

            <ViewModal modalData={modalData}/>
            <section style={{marginTop:'120px'}} className="container">
                <div className="row">
                {
                    products.map((item) =>
                        <div className="col-12 col-md-4 mb-4">
                        <Card isClicked={singleProduct} key={item.id} data={item}/>
                        </div>
                    )
                }
                </div>
            </section>
        </>
     );
}

export default Products;