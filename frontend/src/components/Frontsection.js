import React from "react";
import "./Frontsection.css";
const Frontsection = (user) => {
  const href = user ? "/scan" : "/signup";
  return (
    <div className="sunny">
      <section className="section1">
        <div className="section1-content">
          <h2 className="section1-title">Is Your Network Safe?</h2>
          <p className="section1-description">
            Concerned if your network is safe or if you're being attacked?
          </p>
          <p className="section1-description">We've got you covered!</p>
          <p>Check if your network is malicious:</p>
          <div className="trynow-container1">
            <a href={href} className="trynow-button1">
              Try now
            </a>
          </div>
        </div>
      </section>
      <section className="section2">
        <div className="img2">
          
        </div>
        <div className="content2">
          <h3 className="biggertext">ZERO-DAY ATTACK</h3>
          <p className="smallertext">
          Zero-day attacks pose a significant threat to websites and their users. These attacks exploit vulnerabilities in software or systems that are unknown to the software developers and, therefore, lack a patch or fix. To protect your website and its visitors, it is crucial to understand the nature of zero-day attacks and implement preventive measures. This article will provide an overview of zero-day attacks and offer essential tips for safeguarding your website against them.<br/><br/>

<h6>Understanding Zero-Day Attacks:</h6>
Zero-day attacks occur when cybercriminals discover and exploit security vulnerabilities before the software developer or vendor becomes aware of them. Since there is no prior knowledge of the vulnerability, defenders have zero days to prepare or apply patches, leaving websites exposed and at risk of compromise.

<h6>Consequences of Zero-Day Attacks:</h6>
Zero-day attacks can have severe consequences, including unauthorized access to sensitive data, website defacement, disruption of services, financial loss, damage to reputation, and legal repercussions. It is crucial to address these threats proactively to mitigate potential damages.

<h6>Stay Up-to-Date:</h6>
Regularly update your website's software, including content management systems (CMS), plugins, themes, and server software. Developers often release security patches to address vulnerabilities, reducing the risk of zero-day attacks. Enable automatic updates whenever possible to ensure you have the latest security fixes.
          </p>
          <a href="/about" className="aboutus">
            Read More
          </a>
        </div>
      </section>
    </div>
  );
};

export default Frontsection;

const styles = {
  secimg: {
    width: "90%",
    height: "auto",
    borderRadius: "0.5em",
  },
};
