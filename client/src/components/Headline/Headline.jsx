import headline from "./Headline.module.css";

const Headline = () => {
  return (
    <div className={headline.container}>
      <div>
        <h1>CONNECTING DREAMS TO REALITY</h1>
      </div>
      <div>
        <h1 className={headline.mid}><i>YOUR PREMIER</i></h1>
      </div>
      <div>
        <h1>REAL ESTATE MARKETPLACE</h1>
      </div>
      <h3>Where every search end with a home</h3>
      <div className={headline.buttonContainer}>
      <button className={headline.button}>Find Your Home  →</button>
      <button className={headline.button}>List Your Property  →</button>
    </div>
    </div>
  );
};

export default Headline;
