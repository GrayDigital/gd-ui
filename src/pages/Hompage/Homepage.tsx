import { Header, HomepageHero, Brands, Hero, Studies } from "../../index";

export const Homepage = () => {
  return (
    <>
      <Header
        LogoImage={() => (
          <img
            width={107}
            height={30}
            src="/gray_digital_logo_white.png"
            alt="gray logo"
          />
        )}
        Link={() => <a href="/careers">Join Us</a>}
        asLogoLink={null}
      />
      <HomepageHero Link={() => <a href="/services">Our Services</a>} />
      <Brands />
      <Hero link={{ text: "Our Mission", target: "/company" }} />
      <Studies
        link={{
          text: "Explore Case Study",
          target: "/work/department-of-homeland-security-assessment-generator",
        }}
      />
    </>
  );
};
