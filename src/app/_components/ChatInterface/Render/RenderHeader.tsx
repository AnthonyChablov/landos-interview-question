import Container from "@/components/Layout/Container";
import Separator from "@/components/Layout/Separator";
import HeaderText from "@/components/Text/HeaderText";
import ParagraphText from "@/components/Text/ParagraphText";

/**
 * Renders the header section of the chat interface
 *
 * @returns JSX for header section with title and subtitle
 */

/**
 * Constants for static text content
 * These define the main header and subtitle used in the interface
 */
const WINE_TITLE = "Everything about wine";
const SUBTITLE = "What would you like to know?";

export const RenderHeader = () => (
  <section className="flex items-center justify-center h-fit bg-customGray">
    <Container className="text-center animate-fadeInUp transform transition-all ease-out">
      <Separator size="small" />
      <HeaderText
        headerLevel="h1"
        header={WINE_TITLE}
        className="h-fit animate-fadeInUp"
      />
      <Separator size="extraSmall" />
      <ParagraphText
        size="2xl"
        className="text-gray-500 animate-fadeInUp delay-200"
        text={SUBTITLE}
      />
      <Separator size="small" />
    </Container>
  </section>
);
