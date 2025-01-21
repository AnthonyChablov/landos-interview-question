import Container from "@/components/Layout/Container";
import Hero from "./_components/Hero";
import SuggestionDisplay from "./_components/SuggestionDisplay/SuggestionsDisplay";

export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <SuggestionDisplay />
      </Container>
    </>
  );
}
