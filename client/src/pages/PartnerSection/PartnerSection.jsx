import partner from "./Partner.module.css";

const PartnerSection = () => {
  return (
    <div className={partner.bgContainer}>
      <div className={partner.content}>
        <h1>
          YOUR <i>TRUSTED</i> PARTNER IN THE FUTURE <i>OF HOUSING</i>{" "}
        </h1>
        <div>
          Our partnerships with governments and local banks ensure that our
          housing prices are affordable enough for our target market
        </div>
        <div>
        <button className={partner.button}>Join Our Community Today →</button>
        </div>
      </div>
    </div>
  );
};

export default PartnerSection;
