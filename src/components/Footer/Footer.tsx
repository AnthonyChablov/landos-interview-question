import React from "react";
import Link from "next/link";
import Container from "../Layout/Container";
import Image from "next/image";
import logo from "@/assets/Figma.png";
import Separator from "../Layout/Separator";
import ParagraphText from "../Text/ParagraphText";

/**
 * Props for the FooterLink component
 * Represents an individual link in the footer
 */
interface FooterLinkProps {
  /**
   * URL to navigate to when the link is clicked
   */
  href: string;

  /**
   * Text displayed for the link
   */
  text: string;
}

/**
 * FooterLink Component
 *
 * A reusable component for rendering individual links within the footer
 */
const FooterLink: React.FC<FooterLinkProps> = ({ href, text }) => (
  <Link href={href} className="hover:opacity-75">
    <ParagraphText className="text-gray-800 font-thin" size="lg" text={text} />
  </Link>
);

/**
 * SocialLinks Component
 *
 * Renders a list of social media links as icons
 */
const SocialLinks: React.FC = () => (
  <div className="flex space-x-6">
    <a href="www.twitter.com" className="hover:opacity-75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 50 50"
      >
        <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
      </svg>
      <span className="sr-only">Twitter</span>
    </a>
    <a href="www.instagram.com" className="hover:opacity-75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 50 50"
      >
        <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
      </svg>{" "}
      <span className="sr-only">Instagram</span>
    </a>
    <a href="www.youtube.com" className="hover:opacity-75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 50 50"
      >
        <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
      </svg>
      <span className="sr-only">YouTube</span>
    </a>
    <a href="www.linkedin.com" className="hover:opacity-75">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="25"
        height="25"
        viewBox="0 0 50 50"
      >
        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
      </svg>
      <span className="sr-only">LinkedIn</span>
    </a>
  </div>
);

/**
 * Props for the FooterSection component
 * Represents a section in the footer containing a title and a list of links
 */
interface FooterSectionProps {
  /**
   * Title of the footer section
   */
  title: string;

  /**
   * List of links to display within the section
   */
  links: string[];
}

/**
 * FooterSection Component
 *
 * Renders a section in the footer with a title and a list of links
 */
const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className="space-y-4">
    <ParagraphText size="lg" text={title} className="font-medium text-black" />
    <nav className="flex flex-col space-y-2">
      {links.map((link, index) => (
        <FooterLink key={index} href="#" text={link} />
      ))}
    </nav>
  </div>
);

/**
 * Footer Component
 *
 * A full-width footer component that includes multiple sections such as use cases,
 * resources, social media links, and branding.
 */
const Footer: React.FC = () => {
  // Data for the footer sections
  const useCases: string[] = [
    "UI design",
    "UX design",
    "Wireframing",
    "Diagramming",
    "Brainstorming",
    "Online whiteboard",
    "Team collaboration",
  ];

  const explore: string[] = [
    "Design",
    "Prototyping",
    "Development features",
    "Design systems",
    "Collaboration features",
    "Design process",
    "FigJam",
  ];

  const resources: string[] = [
    "Blog",
    "Best practices",
    "Colors",
    "Color wheel",
    "Support",
    "Developers",
    "Resource library",
  ];

  return (
    <footer className="w-full py-12 bg-background border-t-[1px] border-gray-200">
      <Container>
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            {/* Logo and social links */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src={logo}
                alt="Logo"
                className="h-8 w-8"
                placeholder="blur"
              />
            </Link>
            <Separator size="extraExtraSmall" />
            <SocialLinks />
          </div>
          {/* Footer sections */}
          <FooterSection title="Use cases" links={useCases} />
          <FooterSection title="Explore" links={explore} />
          <FooterSection title="Resources" links={resources} />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
