import { Header, HomepageHero, Brands } from "../../index";
import { Studies } from "../../sections/Studies/Studies";

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
      {/* TODO: Capitol hero section */}
      <Studies />
    </>
  );
};
