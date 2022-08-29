import { useEffect, useMemo, useState } from "react";
import ReactPaginate from "react-paginate";
import { products } from "../../data/home";
import Card from "../Card";
import FilterCard from "../FilterCard";
import ViewModal from "../ViewModal";





function Products() {

  // States for handeling data 
  const [data, setData] = useState(products);
  const [modalData, setModalData] = useState(0);
  var arr = [];
  // States for handeling  max and min price 
  for (let index = 0; index < products.length; index++) {
     let price  =+ products[index].price;
     arr.push(parseInt(price));
  }
  
  console.log(arr);
  const getMaxData = Math.max(...arr);
  const getMinData = Math.min(...arr);




  //States for handeling  pagination
  const [currentproducts, setCurrentproducts] = useState(data);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const productsPerPage = 12;



  //Fetcing page data inside useeffect   --------------------
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const endOffset = itemOffset + productsPerPage;
    setCurrentproducts(data.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(data.length / productsPerPage));
  }, [itemOffset, productsPerPage,data]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * productsPerPage) % data.length;
    setItemOffset(newOffset);
  };





  //Fetching single data-------
  const singleProduct = (id) => {
    let singleData = data.find((item) => {
      return item.id == id;
    })
    setModalData(singleData);
  };

  


  return (
    <>
      <ViewModal modalData={modalData} />
      <section style={{ marginTop: "120px" }} className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <FilterCard     />
          </div>

          <div className="col-12 col-md-9">
            <div className="row">
              {currentproducts.map((item, index) => (
                <div key={index} className="col-12 col-sm-6 col-xl-4 mb-4">
                  <Card isClicked={singleProduct} key={index}  data={item}/>
                </div>
              ))}


            <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    className='page-link'
                />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Products;
