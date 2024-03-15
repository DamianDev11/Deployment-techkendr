import benefits from "./Benefits.module.css";
import choose from "../../assets/choose.png"

const BenefitSection = () => {
  return (
    <div className={benefits.container}>
        <img src={choose} alt="Hero Banner" className="image"/>
    </div>
    
  );
};

export default BenefitSection;
