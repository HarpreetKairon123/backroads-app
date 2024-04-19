import { pageLinks, socialLinks } from "../Data";
import PageLinks from "./PageLinks";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="section footer">
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { href, text, id } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}

      <PageLinks parentClass="footer-links" itemClass="footer-link" />

      <ul className="footer-icons">
        {socialLinks.map((socialLink) => {
          const { id, href, icon } = socialLink;
          return (
            <SocialLinks key={id} {...socialLink} itemClass="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
