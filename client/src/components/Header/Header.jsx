import header from "./Header.module.css";

const Header = () => {
  return (
    //Company Logo
    <nav className={header.container}>
      <div className={header.logo}>
        <b>XYZ</b> <i>INDUSTRIES</i>
      </div>
      <div className={header.navbar}>
      {/*Navlinks*/}
        <ul className={header.menu}>
          <li>Home</li>
          <li>About Us</li>
          <li>Property</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </div>
      {/*Signup and Sihn In buttons */}
      <div className={header.buttonContainer}>
      <button className={header.button}>Sign Up</button>
      <button className={header.button}>Sign In</button>
    </div>
    </nav>
  );
};

export default Header;
