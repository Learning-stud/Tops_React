import React from 'react';

function Form() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="page-head-line">Basic Forms</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-8 col-xs-12">
                        <div className="panel panel-info">
                            <div className="panel-heading">
                                BASIC FORM
                            </div>
                            <div className="panel-body">
                                <form role="form">
                                    <div className="form-group">
                                        <label>Enter Name</label>
                                        <input className="form-control" type="text" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Enter Email</label>
                                        <input className="form-control" type="text" />
                                        <p className="help-block">Help text here.</p>
                                    </div>
                                    <div className="form-group">
                                        <label>Text area</label>
                                        <textarea className="form-control" rows={3} defaultValue={""} />
                                    </div>
                                    <button type="submit" className="btn btn-info">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>
        </div>
    );
}

export default Form;
