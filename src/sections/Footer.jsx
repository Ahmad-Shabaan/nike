import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container text-white-400">
      <div className="flex flex-wrap justify-between items-start gap-20 max-lg:flex-col ">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} alt="logo" width={150} height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat sm:max-w-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            nemo sequi hic velit fuga consequatur obcaecati necessitatibus
            soluta odit ratione. Animi laudantium deserunt architecto voluptas
            quibusdam nulla repellat labore. Pariatur.
          </p>
          <div className="flex items-center mt-8 gap-5">
            {socialMedia.map((media) => (
              <div
                key={media.alt}
                className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
              >
                <img src={media.src} alt={media.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-white text-2xl leading-normal mb-6 font-medium font-montserrat">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href={link.link}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-between mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex justify-start flex-1 items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="m-0 rounded-full"
          />
          <p>Copy right. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer ">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
