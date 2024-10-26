import { LinkUrlProps } from "@/types/types";
import Link from "next/link";

const LinkUrl: React.FC<LinkUrlProps> = ({ name, url }) => {
  return (
    <li>
      <Link
        href={url}
        className="mr-4 hover:underline decoration-dotted md:mr-6 transition"
      >
        {name}
      </Link>
    </li>
  );
};

const Footer = () => {
  return (
    <footer className="p-4 md:p-8 lg:p-10 relative bg-[#fffdf1]">
      <div className="mx-auto max-w-full text-center flex flex-col md:flex-row gap-2 justify-between items-center ">
        <div className="flex flex-col md:flex-row gap-2 items-center md:justify-start">
          <Link href="" className="inline-block ">
            <img src="/logoOrange.png" alt="Tu Destino" className="h-8" />
          </Link>
          <p className="text-stop-red sm:text-center text-[#ff414d]">
            © 2024 Tu Destino All rights reserved.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center items-center text-[#ff414d] dark:text-white">
          <LinkUrl
            name="About"
            url="https://www.instagram.com/tudestino_project/"
          />
          <LinkUrl name="Security" url="#" />
          <LinkUrl name="Privacy" url="#" />
          <LinkUrl name="Terms" url="#" />
          <LinkUrl name="Contact" url="#" />
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
