import { pageLinks } from "../Data";
import PageLink from "./PageLink";

const PageLinks = ({ parentClass, itemClass }) => {
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((link) => {
        const { href, text, id } = link;
        return <PageLink key={id} {...link} itemClass={itemClass} />;
      })}
    </ul>
  );
};

export default PageLinks;
