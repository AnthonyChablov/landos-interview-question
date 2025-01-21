import Container from "@/components/Layout/Container";
import DynamicHeroForm from "./_components/DynamicHeroForm/DynamicHeroForm";
import SuggestionDisplay from "./_components/SuggestionDisplay/SuggestionsDisplay";

/* TODO call api here fetcher function */
/* TODO hero states for rendering out response from api  */
/*  */

export default function Home() {
  return (
    <>
      <DynamicHeroForm />
      <Container>
        <SuggestionDisplay />
      </Container>
    </>
  );
}
