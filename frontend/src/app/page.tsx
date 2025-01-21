import Container from "@/components/Layout/Container";
import Hero from "./_components/Hero";
import SuggestionDisplay from "./_components/SuggestionDisplay/SuggestionsDisplay";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <SuggestionDisplay />
        <Footer />
      </Container>
    </>
  );
}
