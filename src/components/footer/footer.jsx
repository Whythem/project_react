import "./footer.scss";
import logo from "../../assets/Logo.png";

function Footer() {
  return (
    <footer>
      <img src={logo} alt="Logo" width="70px"/>
      <div className="footer inter-normal">
        <p>Privacy policy</p>
        <p>DMCA Notices</p>
        <p>Content policy</p>
      </div>
    </footer>
  )
}

export default Footer;