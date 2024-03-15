import Form from "../../components/Form/Form";
import footer from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={footer.container}>
      <div className={footer.upper}>
        <div className={footer.section}>
          <h2>XYZ Industries</h2>
          <p>
            XYZ Industries:Where real estate dreams meet seamless
            transations,transforming aspiration into achievements
          </p>
          <button className={footer.button}>Explore →</button>
        </div>
        <div className={footer.section}>
        <h2>Quick Links</h2>
        <ul className={footer.list}>
          <li>About Us</li>
          <li>Blog</li>
          <li>Testimonials</li>
          <li>Terms and conditions</li>
          <li>Privacy Policy</li>
          <li>Site Map</li>
        </ul>
        </div>
        <div className={footer.section}>
        <h2>Customer Support</h2>
        <ul className={footer.list}>
          <li>Feedback</li>
          <li>Report a problem</li>
          <li>Request a Call Back</li>
        </ul>
        </div>
        <div className={footer.section}>
        <h2>Subscribe Us</h2>
        <h2>Subscribe to our weekly newsletter</h2>
        <Form/>
        </div>
        
      </div>
      <div className={footer.lower}>
        <hr className={footer.line}></hr>
        <div>Youtube | Insta | X | Fb</div>
        <div>TERMS | PRIVACY | @2024 XYZ</div>
      </div>
    </footer>
  );
};

export default Footer;
