const renderContactPage = (() => {
    //container
    const contentContainer = document.querySelector("#content");
    const contact = document.createElement("div");
    contact.setAttribute("id", "contact");
    contact.setAttribute("data-tab-content", "");
    contact.innerHTML = 
      <div class="hero">
      <h1>Contact us</h1>
    </div>
    <div class="contact-container">
      <div class="info">
        <div class="address">
          <p>
            <i class="fi-xnsuxl-map-marker-solid"></i>Kenyatta Ave<br />Span
            Nairobi, Kenya
          </p>
        </div>
        <div class="hours">
          <p>
            <i class="fi-cnsuhl-clock-solid"></i
            ><span>Mon-Thurs:</span>6am-8pm<br /><span>Fri-Sun:</span
            >8am-7pm
          </p>
        </div>
        <div class="phone">
          <p><i class="fi-xnsrxl-phone-solid"></i>(254)-721 475608</p>
        </div>
        <div class="contact-form">
          <form onsubmit="return false">
            <h3><i class="fi-xwsuxl-envelope-solid"></i>Message us</h3>
            <div class="input-box">
              <input type="text" required />
              <span>Full Name</span>
            </div>
            <div class="input-box">
              <input type="text" required />
              <span>Email</span>
            </div>
            <div class="input-box">
              <textarea required></textarea>
              <span>Type your message...</span>
            </div>
            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
      <iframe
        src="https://www.google.co.ke/maps/place/Nairobi/@-1.303205,36.706967,11z/data=!3m1!4b1!4m5!3m4!1s0x182f1172d84d49a7:0xf7cf0254b297924c!8m2!3d-1.2920659!4d36.8219462"
        width="600"
        height="450"
        frameborder="0"
        style="border: 0"
        allowfullscreen=""
        aria-hidden="true"
        tabindex="0"
      ></iframe>
      </div>;
  
    contentContainer.appendChild(contact);
  })();
  
  export {renderContactPage};