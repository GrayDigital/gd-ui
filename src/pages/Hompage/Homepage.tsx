import {
  Header,
  HomepageHero,
  Brands,
  Hero,
  Studies,
  Impact,
} from "../../index";

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
      <Impact
        title="We're solving big problems."
        content="Our technologists have developed products to improve veterans'
      access to disability benefits, built sensor networks that saved
      lives in war-torn Syria, and launched secure and equitable
      services for U.S. Citizenship and Immigration Services. At Gray,
      we partner with government agencies to take on big problems and
      deliver digital services that are purposeful, trustworthy, and
      meet the needs of millions of Americans."
        link={{ text: "View Our Work", target: "/work" }}
      />
    </>
  );
};
