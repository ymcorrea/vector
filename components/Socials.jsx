import Link from "next/link";

import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiGithubLine,
  RiPinterestLine,
  RiDiscordLine,
  RiTelegramFill,
  RiTwitterFill,
  RiDiscordFill,
  RiWhatsappFill,
} from "react-icons/ri";

export const socialData = [
  // {
  //   name: "Discord",
  //   link: "https://discord.gg/Hg8A2F3V",
  //   Icon: RiDiscordFill,
  // },
  // {
  //   name: "Telegram",
  //   link: "https://t.me/blackangel352",
  //   Icon: RiTelegramFill,
  // },
  {
    name: "Github",
    link: "https://github.com/gruvector",
    Icon: RiGithubLine,
  },
];

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      {socialData.map((social, i) => (
        <Link
          key={i}
          title={social.name}
          href={social.link}
          target="_blank"
          rel="noreferrer noopener"
          className={`${
            social.name === "Github"
              ? "bg-accent rounded-full p-[5px] hover:text-white"
              : "hover:text-accent"
          } transition-all duration-300`}
        >
          <social.Icon aria-hidden />
          <span className="sr-only">{social.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
