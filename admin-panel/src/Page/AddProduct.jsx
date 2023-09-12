import React from 'react'

function AddProduct() {
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Cake</h1>
                        </div>
                    </div>
                    {/*/.ROW*/}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-primary">
                                <div className="panel-heading">
                                    Add Coffee
                                </div>
                                <div className="panel-body">
                                   
                                    
                                    <div className="form-group">
                                        <label>Flavour</label>
                                        <select className="form-control">
                                            <option disabled selected> -- Select -- </option>
                                            <option>Expresso</option>
                                            <option>Hot Coffee</option>
                                            <option>Cold Coffee</option>
                                            <option>latte</option>
                                            <option>Americano</option>
                                            <option>Mocha</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <div className="form-group">
                                        <label>Price</label>
                                        <select className="form-control">
                                            <option disabled selected> -- Select -- </option>
                                            <option>Rs. 0-50</option>
                                            <option>Rs. 50-100</option>
                                            <option>Rs. 100-500</option>
                                            <option>Rs. 500+</option>
                                        </select>
                                    </div>
                                    <hr />
                                    <button type="submit" className="btn btn-info">Add coffee</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* /. PAGE INNER  */}
            </div>
        </div>
    )
}

export default AddProduct