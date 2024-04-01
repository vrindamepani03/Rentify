import '../css/Refer2.css';
import  { useState } from 'react';
import axios from 'axios';
function Refer2() {

  const [formData, setFormData] = useState({
    yourName: '',
    mobileNumber: '',
    friendLocation: '',
    friendName: '',
    friendMobileNumber: ''
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/storeData', formData);
      console.log(response.data.message);
      alert('Form submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      // alert('Failed to submit form. Please try again later.');
    }
  };
  return (
    <>
    <form onSubmit={handleSubmit}>
  <meta charSet="utf-8" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="theme-color" content="" />
  <title>Refer And Earn</title>
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Inria+Sans%3A400"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Source+Sans+Pro%3A400"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Inter%3A400"
  />
  <link
    rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Poppins%3A400"
  />
  <link rel="stylesheet" href="./styles/macbook-pro-14-16.css" />
  <div className="macbook-pro-14-16-Js1">
    <div className="taskbar-r7q">
      <div className="ellipse-45-Znw"></div>
      <div className="group-1686550877-rn3">
        <div className="rectangle-9661-nfh"></div>
        <a href='/listpro' className="list-your-property-v1D">List your property</a>
      </div>
      <a href="/signup" className="sign-up-QSB">Sign Up</a>
<a href="/login" className="login-8sy">Login</a>

    </div>
    
    <div className="auto-group-w1ws-Fhh">
      <div className="rectangle-9721-bWf"></div>
      <div className="refer-and-earn-irB">
        Refer and EARN
        <br />
      </div>
      <div className="rectangle-7-DY3"></div>
      <div className="group-1686550891-wiw">
        <div className="refer-your-friends-family-colleagues-or-anyone-who-is-looking-to-rent-a-place-and-earn-1000-for-every-referral-TSP">
          Refer your friends, family, colleagues or anyone who is looking to
          rent a place and earn
          <br />
          <br />₹ 1000 for EVERY referral.
        </div>
        <div className="auto-group-642y-JT1">
          <p className="earn-in-4-simple-steps-using-the-referral-code-pRM">
            Earn in 4 simple steps using the referral code
          </p>
          <p className="insert-your-friends-phone-number-and-send-them-invitation-to-stay-with-nestaway-and-earn-reward-7QT">
            Insert Your Friends Phone Number and send them invitation to Stay
            with Nestaway and earn reward
          </p>
          <div className="auto-group-wy3t-CB1">
            <div className="auto-group-7zxt-Xyy">
              <div className="rectangle-9730-U8X"></div>
              <img className="ellipse-44-Q2B" src="./assets/ellipse-44.png" />
              <div className="item-1-KQ3">1</div>
              <div className="refer-to-a-friend-bsM">Refer to a Friend</div>
              <div className="you-share-your-referral-code-with-your-friends-WjR">
                You share your referral code with your friends
              </div>
            </div>
            <div className="auto-group-o4ud-c1m">
              <div className="auto-group-ymtr-7UK">2</div>
              <div className="friends-sign-up-with-your-referral-code-xUw">
                Friends Sign-up with your referral code
              </div>
              <div className="your-friend-uses-your-referral-codes-books-a-house-with-us-FD9">
                Your friend uses your referral
                <br />
                codes &amp; books a house with us.
              </div>
            </div>
            <div className="auto-group-nw5k-Jx7">
              <div className="auto-group-oex7-dDh">3</div>
              <div className="starts-his-her-stay-with-rentify-5bV">
                Starts his/her stay with Rentify
              </div>
              <div className="your-friend-completes-2-days-of-stay-with-us-nF1">
                Your friend completes 2 days
                <br />
                of stay with us.
              </div>
            </div>
            <div className="auto-group-vaqm-GR5">
              <div className="auto-group-gjms-neK">4</div>
              <div className="you-earn-reward-463">You earn reward</div>
              <div className="you-both-earn-rs1000-each-NMd">
                You both earn Rs.1000 each!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="group-1686550892-T8B">
  <div className="invite-frd-BK5">
    <div className="auto-group-dytv-7yR">
      <img className="location-3-pcw" src="./assets/location-3-yL3.png" />
     
      <input
        type="text"
        id="friendLocation"
        name="friendLocation"
        className="your-friends-needed-locality-or-city-optional-8dd"
        placeholder="Friend's Location "
        value={formData.friendLocation}
        onChange={handleChange}
        required
      />
    </div>
 

          <div className="auto-group-t9lz-2U7">
            <div className="rectangle-9712-kuu"></div>
            <div className="line-28-Vcb"></div>
            <p className="item-91-chD">+91</p>
           
            
            
            
            <input
        type="tel"
        id="friendMobileNumber"
        name="friendMobileNumber"
        className="owner-mobile-number-7dy"
        placeholder="Friend's Mobile Number*"
        value={formData.friendMobileNumber}
        onChange={handleChange}
        required
      />
            <div className="invite-your-friends-94s">
              Invite Your Friends
              <br />
              <br />
            </div>
          </div>
          <div className="auto-group-kcjw-3vw">
          <input
        type="text"
        id="friendName"
        name="friendName"
        className="insert-your-friend-name-optional-C39"
        placeholder="Friend's Name (optional)"
        value={formData.friendName}
        onChange={handleChange}
        required
      />
    
           
            
          </div>
          <input
  type="text"
  id="yourName"
  name="yourName"
  className="auto-group-kefx-P7d your-name-input"  // Add your CSS classes for styling
  placeholder="Enter your name"
  value={formData.yourName}
  onChange={handleChange}
  required
/>

<input
  type="number"
  id="mobileNumber"
  name="mobileNumber"
  className="auto-group-tsvm-R4K mobile-number-input"  // Add your CSS classes for styling
  placeholder="Your Mobile Number*"
  inputMode="numeric"
  value={formData.mobileNumber}
  onChange={handleChange}
  required
/>


          <p className="your-details-5ef">your details</p>
          <div className="auto-group-nyyo-CDV">
          <button type="submit" className="rectangle-9728-jDR submit-GUF">Submit</button>

          </div>
          <div className="add-your-friends-phone-number-invite-them-to-stay-with-nestaway-earn-rewards-yNf">
            Add your friend phone number &amp; invite them to stay with
            Nestaway &amp; earn rewards.
          </div>
          <p className="add-more-tenant-THq">+ ADD More Tenant</p>
        </div>
      </div>
    </div>
   
  </div>
  </form>
</>

  )
}

export default Refer2