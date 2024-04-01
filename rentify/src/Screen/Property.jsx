import '../css/Property.css'
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";
import axios from 'axios';
function Property() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    sname: '',
    saddress: '',
    sarea: '',
    scity: '',
    sstate: '',
    shouse: '',
    sprice: '',
    stype: '',
    savail: '',
    sdescript: '',
    images: null
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleImageChange = (e) => {
    setFormData({ ...formData, image: e.target.files[0] });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      formData.sname.trim() === '' ||
      formData.saddress.trim() === '' ||
      formData.sarea.trim() === '' ||
      formData.scity.trim() === '' ||
      formData.sstate.trim() === '' ||
      formData.shouse.trim() === '' ||
      formData.sprice.trim() === '' ||
      formData.stype.trim() === '' ||
      formData.savail.trim() === '' ||
      formData.sdescript.trim() === ''
    ) {
      alert('Please fill out all required fields');
      return;
    }
    const formDataToSend = new FormData();
    for (let key in formData) {
      formDataToSend.append(key, formData[key]);
    }

 
    
    try {
      // Send POST request to your backend API endpoint
      const response = await axios.post('http://localhost:5000/api/property', formDataToSend);

      // If submission is successful, navigate to the next page
      console.log('Property listed successfully:', response.data);
      navigate('/');
    } catch (error) {
      console.error('Error listing property:', error);
    }
  };


   
  
  return (
    <>
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <title>new property</title>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inria+Sans%3A400%2C700"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C500%2C600%2C700"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Poppins%3A400%2C500%2C600"
      />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Inria+Serif%3A700"
      />
      <link rel="stylesheet" href="./styles/new-property.css" />
      <div className="new-property-7yy">
        <div className="frame-3-4PR">
          <p className="h3-Yxo">List Your Property </p>
          <form onSubmit={handleSubmit}>
          <div className="group-1902-otj">
            <div className="auto-group-7wah-iVu">
              <div className="auto-group-tj4d-GXR">
                <p className="form-control-oGT">
                  <span className="form-control-oGT-sub-0"> Owner Name</span>
                  <span className="form-control-oGT-sub-1"> </span>
                  <span className="form-control-oGT-sub-2">*</span>
                </p>
                <p className="form-control-ueF">
                  <span className="form-control-ueF-sub-0">Address</span>
                  <span className="form-control-ueF-sub-1"> </span>
                  <span className="form-control-ueF-sub-2">*</span>
                </p>
                <p className="form-control-CWs">
                  <span className="form-control-CWs-sub-0">Area </span>
                  <span className="form-control-CWs-sub-1">*</span>
                </p>
              </div>
            </div>
            <div className="auto-group-prq9-nV5">
              <input
                type="text"
                className="select-i7q"
                name="sname"
                id="name"
                placeholder="Enter Your Full Name"
                value={formData.sname}
                onChange={handleInputChange}

              required
              />

              <input
                type="text"
                className="select-5cb option-p4P"
                name="saddress"
                id="address"
                placeholder="Enter Address"
                value={formData.saddress}
                onChange={handleInputChange}
                required
              />

              <input
                type="text"
                className="form-control-input-style-1-qkB inputform-control-aSs"
                name="sarea"
                id="area"
                placeholder="Enter Area"
                value={formData.sarea}
                onChange={handleInputChange}

                required
              />
            </div>
          </div>
          <div className="auto-group-zhwm-E1d">
            <p className="form-control-vv3">
              <span className="form-control-vv3-sub-0">City</span>
              <span className="form-control-vv3-sub-1"> </span>
              <span className="form-control-vv3-sub-2">*</span>
            </p>
            <p className="form-control-495">
              <span className="form-control-495-sub-0">State</span>
              <span className="form-control-495-sub-1"> </span>
              <span className="form-control-495-sub-2">*</span>
            </p>
            <p className="form-control-mBu">
              <span className="form-control-mBu-sub-0">House Type</span>
              <span className="form-control-mBu-sub-1"> </span>
              <span className="form-control-mBu-sub-2">*</span>
            </p>
          </div>
          <div className="auto-group-z97s-7uy">
            <select
              className="select-32w option-zTy"
              name="scity"
              id="city"
              value={formData.scity}
              onChange={handleInputChange}

              required
            >
              <option value="">Select City</option>
              <option value="rajkot">Rajkot</option>
              <option value="diu">Diu</option>
              <option value="bhuj">Bhuj</option>
              <option value="ahmedabad">Ahmedabad</option>
            </select>

            <select
              className="select-TcT option-owD"
              name="sstate"
              id="state"
              value={formData.sstate}
              onChange={handleInputChange}

              required
            >
              <option value="">Select State</option>
              <option value="gujarat">Gujarat</option>
              <option value="up">UP</option>
              <option value="maharashtra">Maharashtra</option>
              <option value="rajasthan">Rajasthan</option>
            </select>

            <select
              className="select-KYB option-frw"
              name="shouse"
              id="house"
              value={formData.shouse}
              onChange={handleInputChange}

              required
            >
              <option value="">Select House Type</option>
              <option value="2bhk">2BHK</option>
              <option value="3bhk">3BHK</option>
              <option value="4bhk">4BHK</option>
            </select>
          </div>
          <div className="auto-group-tym7-dxB">
            <input
              type="number"
              className="select-m2o option-X1y"
              name="sprice"
              id="price"
              placeholder="Enter Price"
              value={formData.sprice}
              onChange={handleInputChange}

              required
            />

            <select
              className="select-xsy option-is9"
              name="stype"
              id="type"
              value={formData.stype}
              onChange={handleInputChange}

              required
            >
              <option value="">Select Type</option>
              <option value="furnished">Furnished</option>
              <option value="unfurnished">Unfurnished</option>
              <option value="fully">Fully Furnished</option>
            </select>

            <select
              className="select-tf9 option-SwZ"
              name="savail"
              id="avail"
              value={formData.savail}
              onChange={handleInputChange}

              required
            >
              <option value="">Select Availability</option>
              <option value="girl">Girls</option>
              <option value="boy">Boys</option>
              <option value="family">Family</option>
            </select>
          </div>
          <div className="auto-group-6gx7-cUf">
            <p className="form-control-jpB">
              <span className="form-control-jpB-sub-0">Price</span>
              <span className="form-control-jpB-sub-1"> </span>
              <span className="form-control-jpB-sub-2">*</span>
            </p>
            <p className="form-control-fbM">
              <span className="form-control-fbM-sub-0"> Type</span>
              <span className="form-control-fbM-sub-1"> </span>
              <span className="form-control-fbM-sub-2">*</span>
            </p>
            <p className="form-control-btK">
              <span className="form-control-btK-sub-0">Available For </span>
              <span className="form-control-btK-sub-1">*</span>
            </p>
          </div>
          <div className="auto-group-gi6r-jNF">
            <div className="inputform-control-rxf">Enter Description</div>
            <p className="upload-photos-JZm">Upload Photos</p>
            <div className="rectangle-97-Cv3"></div>
            <div className="group-1901-XSX">
              <p className="form-control-FtK">
                <span className="form-control-FtK-sub-0">Description </span>
                <span className="form-control-FtK-sub-1">*</span>
                <input
                  className="inputform-control-rxf"
                  type="text"
                  name="sdescript"
                  id="descript"
                  placeholder="Enter Description"
                  value={formData.sdescript}
                  onChange={handleInputChange}

                  required
                />
              </p>
              <div>
                <div
                  className="drag-your-images-here-or-browse-LHV"
                >
                  <span className="drag-your-images-here-or-browse-LHV-sub-0">
                    Drag your images here, or{' '}
                  </span>
                  <span className="drag-your-images-here-or-browse-LHV-sub-1">browse</span>
                </div>
                <input
                  type="file"
                  accept=".jpg, .jpeg, .png"
                  className="supported-jpg-jpeg-png-Qgf"
                  multiple
                  onChange={handleImageChange}
                />
              </div>
            </div>
          </div>
          <button className="group-1686550893-hQs" onClick={handleSubmit}>List Your Property</button></form>
        </div>
        <div className="taskbar-hZH">
          <img className="ellipse-45-ymh" src="./assets/ellipse-45.png" />
          <div className="group-1686550877-7d1">
            <div className="rectangle-9661-qJ7"></div>
            <p className="list-your-property-ArB">List your property</p>
          </div>
          <p className="sign-up-ryu"><a href="/signup">Sign Up</a></p>
          <p className="login-mb5"><a href="/login">Login</a></p>
        </div>
      </div>
    </>
  );
}

export default Property;
