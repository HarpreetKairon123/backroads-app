import LogoImg from "../images/logo.svg";
import { socialLinks } from "../Data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

// import PageLinks from "../components/PageLinks";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={LogoImg} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((socialLinks) => {
            const { id, href, icon } = socialLinks;
            return (
              <SocialLinks key={id} {...socialLinks} itemClass="nav-icon" />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
