import { copyrightSign } from "../assets/icons";

import { footerLinks, socialMedia } from "../constants/mine";


function Footer() {
  return (
    <footer className="max-container">
      
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start ">
          {/* <a href="/">
            <img src={footerLogo} alt="" width={150} height={46} />
          </a> */}
          <h3 className="text-coral-red font-bold font-palanquin leanding-normal tracking-normal text-2xl">
            SNEAKER STORE
          </h3>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            Designed for the rebels, the trendsetters, and the ones who don’t
            follow the rules, this collection is all about raw attitude and
            fearless style.
          </p>
          <div className="flex items-center mt-8 gap-4">
            {socialMedia.map((icon) => (
              <div
                key={icon.src}
                className="flex justify-center items-center gap-4 w-12 h-12 bg-white rounded-full"
              >
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section}>
              <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer"
                    key={link.name}
                  >
                    <a href="">{link.name} </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copy right sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    
    </footer>
  );
}

export default Footer;
