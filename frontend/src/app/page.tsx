import Container from "@/components/Layout/Container";
import DynamicHero from "./_components/DynamicHero/DynamicHero";
import SuggestionDisplay from "./_components/SuggestionDisplay/SuggestionsDisplay";
import Footer from "@/components/Footer/Footer";

/* TODO call api here fetcher function */
/* TODO hero states for rendering out response from api  */
/*  */

export default function Home() {
  return (
    <>
      <DynamicHero />
      <Container>
        <SuggestionDisplay />
        <Footer />
      </Container>
    </>
  );
}
