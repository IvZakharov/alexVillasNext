import styles from "./About.module.scss";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const links = [
    {
      label: "VILLA CONSTRUCTION",
      link: "#",
    },
    {
      label: "VILLA RENOVATION",
      link: "#",
    },
    {
      label: "PROPERTY MANAGEMENT",
      link: "#",
    },
    {
      label: "REAL ESTATE AGENCY",
      link: "#",
    },
  ];
  return (
    <section className={styles.about}>
      <div className={"container xl:px-32"}>
        <div className={styles.videoPlaceholder}>
          <Image
            alt="video placeholder"
            src={"/images/about/placeholder.jpg"}
            quality={80}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className={styles.content}>
          <p className={styles.text}>
            Alex Villas is the industry-leading real estate company in Bali.
          </p>
          <p className={styles.text}>
            {" "}
            We build, manage and renovate properties that make our clients smile
            happy.
          </p>
          <p className={styles.text}>
            We are a one-stop shop that has every & each of investor’s potential
            pains fully addressed.
          </p>

          <nav className={styles.nav}>
            <ul className={"columns-1 md:columns-2 gap-3"}>
              {links &&
                links.map((link, idx) => (
                  <li key={idx}>
                    <Link href={link.link}>{link.label}</Link>
                  </li>
                ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default About;
