function ViewModal({modalData}) {
// console.log(modalData);
    return ( 
        <>

        {
            <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">{modalData.title} </h5>

                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <img className="img-fluid" src={modalData.thumbnail} alt={modalData.thumbnail}/>
                    <div>
                        {modalData.description}
                    </div>
                </div>

                <div className="card" >
                <div className="card-header"><b>Price {modalData.price} Tk <span>{`(${modalData.discountPercentage}% off )`}</span></b></div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Stock <span className="badge bg-info">{modalData.stock} pices</span></li>
                    <li className="list-group-item"><span style={{textTransform:'capitalize'}}>{`${modalData.category} >>`} </span> {modalData.brand} </li>
                    <li className="list-group-item">Product id #{modalData.id}</li>
                </ul>
                </div>
                <div className="modal-footer d-flex justify-content-between">
                    <button type="button" className="btn btn-primary">Add To Bag</button>
                </div>
                </div>
            </div>
            </div>

        }
        </>
     );
}

export default ViewModal;