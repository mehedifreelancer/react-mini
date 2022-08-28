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

  // States for handeling  max and min price 
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [isChanged, setIsChanged] = useState(false);

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

  
  // Filtering data 
 

  const filter = () =>{

    let filtered = data.filter((item) => {
        return item.price > minPrice && item.price < 5 ;
      });
      setData(filtered);

      console.log(minPrice+'> <'+maxPrice);
      console.log(filtered);
      

  }

// console.log(maxPrice);



  return (
    <>
      <ViewModal modalData={modalData} />
      <section style={{ marginTop: "120px" }} className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <FilterCard filter={filter}  setMaxPrice ={setMaxPrice} setMinPrice={setMinPrice}  />
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
