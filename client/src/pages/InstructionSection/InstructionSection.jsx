import instruction from "./Instructions.module.css";
import step1 from "../../assets/z1.jpg";
import step2 from "../../assets/z2.jpeg";
import step3 from "../../assets/z3.jpg";
import step4 from "../../assets/z4.png";

const InstructionSection = () => {
  return (
    <div className={instruction.container}>
      <div>
        <h1>HOW IT WORKS</h1>
      </div>
      <h2>Step by Step Guide</h2>
      
      <div className={instruction.outer}>
        <div className={instruction.each}>
          <div className={instruction.pic}>
            <img src={step1} alt="" className={instruction.image} />
          </div>

          <div className={instruction.content}>
            <h2>Discover Your Perfect Home</h2>
            <p>Use our advance filters to narrow down your search.</p>
            <a href="">Learn More...</a>
          </div>
        </div>
        <div className={instruction.each}>
          <div className={instruction.content}>
            <h2>Showcase Your Property</h2>
            <p>List your property with ease</p>
            <a href="">Learn More...</a>
          </div>
          <div className={instruction.pic}>
            <img src={step2} alt="" className={instruction.image} />
          </div>
        </div>
        <div className={instruction.each}>
          <div className={instruction.pic}>
            <img src={step3} alt="" className={instruction.image} />
          </div>

          <div className={instruction.content}>
            <h2>Connect and Communicate</h2>
            <p>Our platform facilitates direct communication</p>
            <a href="">Learn More...</a>
          </div>
        </div>
        <div className={instruction.each}>
          <div className={instruction.content}>
            <h2>Seal the Deal Securely</h2>
            <p>Advanced payments made safe.</p>
            <a href="">Learn More...</a>
          </div>
          <div className={instruction.pic}>
            <img src={step4} alt="" className={instruction.image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionSection;
