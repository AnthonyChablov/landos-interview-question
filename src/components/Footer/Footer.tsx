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
    <ParagraphText size="md" text={text} />
  </Link>
);

/**
 * SocialLinks Component
 *
 * Renders a list of social media links as icons
 */
const SocialLinks: React.FC = () => (
  <div className="flex space-x-6">
    <a
      href="www.facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:opacity-75"
    >
      {/* SVG icon for Facebook */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 50 50"
      >
        {/* SVG path */}
        <path d="..." />
      </svg>
      <span className="sr-only">Facebook</span>
    </a>
    {/* Additional social media links for Instagram, YouTube, and LinkedIn */}
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
    <ParagraphText size="md" text={title} className="font-medium" />
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
              <Image src={logo} alt="Logo" className="h-8 w-8" />
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
