import '../css/Refer.css';
import  { useState } from 'react';
import axios from 'axios';
function Refer() {

  const [ownerName, setOwnerName] = useState('');
  const [ownerMobileNumber, setOwnerMobileNumber] = useState('');
  const [houseLocalityAndCity, setHouseLocalityAndCity] = useState('');
  const [yourMobileNumber, setYourMobileNumber] = useState('');
  const [yourName, setYourName] = useState('');
  const [agreeChecked, setAgreeChecked] = useState(false);
  
  const handleSubmit =async (e) => {
    e.preventDefault();
    // Validate form fields here
    if (ownerName.trim() === '' || ownerMobileNumber.trim() === '' || houseLocalityAndCity.trim() === '' || yourMobileNumber.trim() === '' || yourName.trim() === '' || !agreeChecked) {
      alert('Please fill out all required fields and agree to the terms');
      return;
    }
    try {
      // Make a POST request to the server to store form data
      const response = await axios.post('http://localhost:5000/api/storeFormData', {
        ownerName,
        ownerMobileNumber,
        houseLocalityAndCity,
        yourMobileNumber,
        yourName,
        agreeChecked
      });

      // Handle success response
      console.log(response.data.message); // Log success message
      // You can perform further actions here, such as showing a success message to the user or redirecting to another page
    } catch (error) {
      // Handle error response
      console.error('Error submitting form:', error);
      alert('Failed to submit form. Please try again later.'); // Show error message to the user
    }
    // Submit form data
    
  };
  return (
    <>
  <meta charSet="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="#000000" />
  <title>Refer house</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Inria+Sans%3A400"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400%2C600%2C700"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Poppins%3A400%2C600%2C700"
  />
  <link rel="stylesheet" href="./styles/refer-house.css" />
  <div className="refer-house-tsZ">
    <div className="taskbar-pmD">
      <div className="ellipse-45-w59"></div>
      <div className="group-1686550877-SXh">
        <div className="rectangle-9661-ZMR"></div>
        <a href="/listpro" className="list-your-property-hCj">List your property</a>
      </div>
      <a href="/signup" className="sign-up-NZm">Sign Up</a>
      <a href="/login" className="login-hrw">Login</a>
    </div>
    <form onSubmit={handleSubmit}>
    <div className="auto-group-2sg1-Eby">
      <div className="refer-2-mro">
        <p className="refer-a-house-owner-to-earn-1000-for-every-house-listing-we-publish-68P">
          Refer a house owner to earn ₹ 1000* for every house listing we publish
        </p>
        <div className="auto-group-3cuv-yT5">
          <div className="auto-group-wg53-7JP">
            <p className="the-more-you-refer-the-more-you-earnreward-will-be-sent-to-you-via-these-upi-apps-QoH">
              The more you refer, the more you earn.Reward will be sent to you
              via these UPI apps
            </p>
            <img loading="lazy" src="/image/image-12.png" className="image12" />
          </div>
          
          <p className="applicable-only-in-bengaluru-chennai-hyderabad-mumbai-pune-and-ncr-RCb">
            <br/>Applicable only in Bengaluru, Chennai, Hyderabad, Mumbai, Pune and
            NCR
          </p>
          <img className="house-2-trs" src="./assets/house-2.png" />
        </div>
      </div>
      <div className="refer-1-cXy">
        <div className="auto-group-d2hk-7jd">
          <img
            className="rectangle-9709-FL3"
            src="./assets/rectangle-9709.png"
          />
          <p className="house-owner-details-the-owner-will-be-contacted-on-these-details-N9m">
            <span className="house-owner-details-the-owner-will-be-contacted-on-these-details-N9m-sub-0">
              House owner details
              <br />
            </span>
            <span className="house-owner-details-the-owner-will-be-contacted-on-these-details-N9m-sub-1">
              The owner will be contacted on these details
            </span>
          </p>
        </div>
        <div className="auto-group-l8vt-yYs">
          <p className="india-VXD">INDIA</p>
          <div className="rectangle-9712-cbq"></div>
          <div className="line-28-we7"></div>
          <div>
  <p className="item-91-4yd">+91</p>
  <label htmlFor="ownerMobileNumber" className="owner-mobile-number-MSw">
    Owner Mobile Number*
  </label>
  <input
    type="tel"  
    id="ownerMobileNumber"
    name="ownerMobileNumber"
    placeholder="Owner Mobile Number"
    value={ownerMobileNumber}
    onChange={(e) => setOwnerMobileNumber(e.target.value)}
    className="mb"  
    required
  />
</div>
        </div>
        <input
  type="text"
  id="ownerName"
  name="ownerName"
  className="auto-group-qdwu-r8o owner"  // Add your CSS classes for styling
  placeholder="Enter owner name"
  value={ownerName}
  onChange={(e) => setOwnerName(e.target.value)}
  required
/>

<div className="auto-group-dwho-VSf">
  <img className="location-3-CM5" src="./assets/location-3.png" />
  <input
    className="house-locality-and-city-KRh"
    type="text"
    placeholder="Enter house locality and city"
    value={houseLocalityAndCity}
    onChange={(e) => setHouseLocalityAndCity(e.target.value)}
    required
  />
</div>

        <p className="add-one-more-owner-25D">+Add one more owner</p>
        <div className="auto-group-wtrf-jVR">
          <img
            className="rectangle-9710-fdy"
            src="./assets/rectangle-9710.png"
          />
          <p className="your-details-you-will-be-contacted-to-verify-upi-information-C87">
            <span className="your-details-you-will-be-contacted-to-verify-upi-information-C87-sub-0">
              Your details
              <br />
            </span>
            <span className="your-details-you-will-be-contacted-to-verify-upi-information-C87-sub-1">
              You will be contacted to verify UPI information
            </span>
          </p>
        </div>
        <div className="auto-group-8aqt-fvo">
  <div className="rectangle-9713-bJf"></div>
  <div className="line-29-83h"></div>
  <p className="item-91-4CF">+91</p>
  <input
    className="your-mobile-number-kqm"
    type="text"
    placeholder="Your mobile number"
    value={yourMobileNumber}
    onChange={(e) => setYourMobileNumber(e.target.value)}
    required
  />
  <div className="additional-line"></div>
</div>

<input
  className="auto-group-tsjs-4Lf"
  type="text"
  placeholder="Your name"
  value={yourName}
  onChange={(e) => setYourName(e.target.value)}
  required
/>

        <div className="auto-group-kcht-7Jw">
          
          <p className="i-agree-to-be-contacted-by-rentify-as-per-rentify-privacy-policy-rGX">
            i agree to be contacted by rentify as per rentify privacy policy
          </p>
          
          <button type="submit"className="rectangle-9716-9Fd"> </button>
          <span className="submit-shR">Submit</span>
         
          <input
          className="rectangle-9717-yVZ"
          type="checkbox"
          id="agreeCheckbox"
          checked={agreeChecked}
            onChange={(e) => setAgreeChecked(e.target.checked)}
            required
        /> 
        </div>
      </div>
    
    </div>
    </form>
  </div>
</>

  )
}

export default Refer