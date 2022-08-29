function FilterCard() {


  return (
    <>
      <div className="card card_filter">
        <article className="card-group-item">
          <header className="card-header">
            <h6 className="title">Range input </h6>
          </header>
          <div className="filter-content">
            <div className="card-body">
              <div className="form-row">
                <div className="form-group col-12 col-xl-6">
                  <label>Min</label>
                  <input 
                    type="number"
                    className="form-control min_"
                    id="inputEmail4"
                    placeholder="$0"
                  />
                </div>
                <div className="form-group col-12 col-xl-6 text-right">
                  <label>Max</label>
                  <input  
                    type="number"
                    className="form-control "
                    placeholder="$1,0000"
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
        <article className="card-group-item">
          <header className="card-header">
            <h6 className="title">Selection </h6>
          </header>
          <div className="filter-content">
            <div className="card-body">
              <div className="custom-control custom-checkbox d-flex gap-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="Check1"
                />
                <label className="custom-control-label" htmlFor="Check1">
                  Samsung
                </label>
              </div>

              <div className="custom-control custom-checkbox d-flex gap-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="Check2"
                />
                <label className="custom-control-label" htmlFor="Check2">
                  Black berry
                </label>
              </div>

              <div className="custom-control custom-checkbox d-flex gap-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="Check3"
                />
                <label className="custom-control-label" htmlFor="Check3">
                  Samsung
                </label>
              </div>
              <div className="custom-control custom-checkbox d-flex gap-2">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="Check4"
                />
                <label className="custom-control-label" htmlFor="Check4">
                  Other Brand
                </label>
              </div>
            </div>
          </div>
        </article>
        <div className="filter-content">
          <div className="card-body d-flex gap-2">
            <label className="btn btn-danger">
              <input className="" type="checkbox" name="myradio" value="" />
              <span className="form-check-label">Red</span>
            </label>
            <label className="btn btn-success">
              <input className="" type="checkbox" name="myradio" value="" />
              <span className="form-check-label">Green</span>
            </label>
            <label className="btn btn-primary">
              <input className="" type="checkbox" name="myradio" value="" />
              <span className="form-check-label">Blue</span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterCard;
