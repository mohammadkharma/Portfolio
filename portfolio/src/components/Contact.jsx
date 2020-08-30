import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <form action="POST" data-netlify="true">
        <div className="field">
          <input type="text" name="name" id="name" placeholder="Name" />
        </div>
        <div className="field">
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="field">
          <textarea
            name="message"
            id="message"
            placeholder="Message"
          ></textarea>
        </div>
        <div data-netlifyrecaptcha="true"></div>
        <div className="field">
          <input className="submit" type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
};

export default Contact;
