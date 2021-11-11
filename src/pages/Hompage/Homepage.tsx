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
      <HomepageHero link={{ text: "Our Services", target: "/services" }} />

      {/* TODO: Brands should be fed in from an external source. i.e. Headless CMS request */}
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
