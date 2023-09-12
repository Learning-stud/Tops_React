import React from 'react'

export default function Contact() {
  return (
<div>
  <div className="contact_section layout_padding">
    <div className="container">
      <h1 className="contact_text">Contact Us</h1>
    </div>
  </div>
  <div className="contact_section_2 layout_padding">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 padding_0">
          <div className="mail_section">
            <div className="email_text">
              <div className="form-group">
                <input type="text" className="email-bt" placeholder="Name" name="Email" />
              </div>
              <div className="form-group">
                <input type="text" className="email-bt" placeholder="Email" name="Email" />
              </div>
              <div className="form-group">
                <input type="text" className="email-bt" placeholder="Phone Numbar" name="Email" />
              </div>
              <div className="form-group">
                <textarea className="massage-bt" placeholder="Massage" rows={5} id="comment" name="Massage" defaultValue={""} />
              </div>
              <div className="send_btn">
                <div type="text" className="main_bt"><a href="#">SEND</a></div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 padding_0">
          <div className="map-responsive">
            <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France" width={600} height={508} frameBorder={0} style={{border: 0, width: '100%'}} allowFullScreen />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
