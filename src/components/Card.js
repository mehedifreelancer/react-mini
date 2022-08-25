function Card({data,isClicked}) {


    return (

        <>
            <div onClick={()=>isClicked(data.id)} role='button' data-bs-toggle="modal" data-bs-target="#exampleModal" className="card h-100" >
                <img className="card-img-top" src={data.thumbnail} alt="Card image cap"/>
                <div className="card-body d-flex flex-column justify-content-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                    <a href="#" className="btn btn-primary btn-sm">Add To Bag</a>
                </div>
            </div>
        </>
    );
}

export default Card;