import { socialLinks } from '../../api/socialLinks';
import Author from '../Author';
import Logo from '../Logo';
import Title from '../Title';
import styles from './Footer.module.scss';

const Footer = () => {
  const showSocials = socialLinks.map((item) => (
    <li key={item.id}>
      <a className={styles.link} href={item.link} target="_blank">
        <img src={item.icon} alt={item.name} />
      </a>
    </li>
  ));

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.wrapper}>
          <div>
            <Logo />
            <p className={styles.text}>
              We are the leading architect and interior design firm in the
              world.
            </p>
            <ul className={styles.socials}>{showSocials}</ul>
          </div>

          <div>
            <Title tag="h3" className={styles.title} text="Pages" />
            <ul className={styles.links}>
              <li>
                <a href="#">Style Guide</a>
              </li>
              <li>
                <a href="#">Protected</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
              <li>
                <a href="#">Changelog</a>
              </li>
              <li>
                <a href="#">404</a>
              </li>
            </ul>
          </div>

          <div>
            <Title tag="h3" className={styles.title} text="Explore" />
            <ul className={styles.links}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Recent Blog</a>
              </li>
              <li>
                <a href="#">Pricing Plan</a>
              </li>
              <li>
                <a href="#">Our Projects</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div>
            <Title tag="h3" className={styles.title} text="Contact" />
            <ul className={styles.links}>
              <li>
                <a
                  href="https://www.google.com/maps?q=53+East+Birchwood+Ave,+Brooklyn,+New+York+11201,+USA"
                  target="_blank"
                >
                  53, East Birchwood Ave. Brooklyn, New York 11201, USA.
                </a>
              </li>
              <li>
                <a href="mailto:contact@interno.com">contact@interno.com</a>
              </li>
              <li>
                <a href="tel:+1234567890">(123) 456 - 7890</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className="container">
        <Author />
      </div>
    </footer>
  );
};

export default Footer;
