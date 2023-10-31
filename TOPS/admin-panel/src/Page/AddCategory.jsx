import React from 'react'

function AddCategory() {
    return (
        <div>
            <div id="page-wrapper">
                <div id="page-inner">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="page-head-line">Add Category</h1>
                        </div>
                    </div>
                    {/* /. ROW  */}
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    Add Coffee Type
                                </div>
                                <div className="panel-body">
                                    <form role="form">
                                        <div className="form-group">
                                            <label>Enter Type</label>
                                            <input className="form-control" type="text" />
                                            <p className="help-block">Type of Coffee</p>
                                        </div>
                                        <div className="form-group">
                                            <label>Enter Title</label>
                                            <input className="form-control" type="text" />
                                            <p className="help-block">Title to diplay</p>
                                        </div>
                                       
                                        <div className="form-group">
                                            <label>About</label>
                                            <textarea className="form-control" rows={3} defaultValue={""} />
                                        </div>
                                        <button type="submit" className="btn btn-info">Add Category</button>
                                    </form>
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

export default AddCategory