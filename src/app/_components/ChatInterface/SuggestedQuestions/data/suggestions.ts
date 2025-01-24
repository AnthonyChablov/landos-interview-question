// Define the interface for a suggestion object
export interface Suggestion {
  id: string;
  suggestion: string;
  author: string;
  location: string;
}

// Define the suggestions array and assign the interface as the return type
export const suggestions: Suggestion[] = [
  {
    id: "1",
    suggestion: "What makes a good wine?",
    author: "Rita",
    location: "Manteigas",
  },
  {
    id: "2",
    suggestion: "Best wine in the world",
    author: "Joana",
    location: "Porto",
  },
  {
    id: "3",
    suggestion: "How long can I keep champagne?",
    author: "João",
    location: "Lisbon",
  },
  {
    id: "4",
    suggestion: "How to serve wine best",
    author: "Title",
    location: "Braga",
  },
  {
    id: "5",
    suggestion: "How did port wine come about?",
    author: "Title",
    location: "Aveiro",
  },
  {
    id: "6",
    suggestion: "Something nice",
    author: "Title",
    location: "Coimbra",
  },
];
