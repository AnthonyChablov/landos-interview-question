# LandOS Interview Question

## Project Overview

A web application that allows users to ask anything about wine, powered by an LLM interface (ChatGPT).

## Technologies Used

- **Frontend**:

  - Next.js (React.js Meta framework)
  - TypeScript (Transpiled JavaScript with strict strong type checking)
  - Tailwind CSS (CSS tility classnames that apply styling to HTML Dom elements in JSX)
  - Shadcn UI (Design System/Component Library for Tailwind CSS)
  - GSAP (GreenSock Animation Platform - Animations)

- **Testing**:

  - Vitest
  - React Testing Library

- **API Integration**:
  - OpenAI ChatGPT API
  - Next.js Serverless Functions

## Architecture

### Current Implementation

- Client-side rendered application
- Serverless API integration via Next.js functions
- Dynamic, responsive UI with smooth animations

### Proposed Backend Evolution

- Transition to microservice architecture
- Separate frontend (Next.js) and backend (Python)
- Potential frameworks:
  - Django
  - Flask
  - FastAPI

## Features

- Interactive wine knowledge chat interface
- An accurate and responsive replication of provided design in figma
- Responsive design matching Figma specifications
- A dynamic UI where the home page animates/adjusts to show the answer instead of loading a separate page

## Future Enhancements

- Implement LLM context steering for wine-specific responses
- Add interaction guardrails for requests made to the LLM
- Enhanced logging with user metadata
- Improved backend scalability
- Microservice event-driven architecture
- Comprehensive unit, integration as well as End to End (E2E) testing

## Getting Started

```bash
# Clone the repository
git clone [your-repo-url]

# Install dependencies
npm install

# Run development server
npm run dev
```

## Potential Scaling Considerations

- Implement caching mechanisms
- Optimize API call efficiency
- Consider serverless containerization
- Implement robust error handling
- Throttling and Debouncing of Frontend Client requests to the API + Backend
- Implement comprehensive rate limiting
  - Client-side request rate limiting
  - Backend API request throttling
  - Protect against potential API abuse
  - Manage OpenAI API cost and usage constraints

# Testing Strategy

### Unit Testing

- Individual component isolation
- Test component rendering and interactions
- Validate data transformations
- Mock external API calls
- Test edge cases and error scenarios

### Integration Testing

- End-to-end workflow validation
- API interaction testing
- State management verification
- User interaction flow testing
- Performance and response time checks

### Test Coverage

- Aim for >90% code coverage
- Comprehensive test suites for:
  - Frontend components
  - API endpoint interactions
  - Error handling mechanisms
  - Authentication flows
  - Data processing logic

### Testing Tools

- Vitest for unit testing
- React Testing Library
- Mock Service Worker for API mocking
- Playwright/Cypress for E2E testing

### Continuous Integration

- Automated test runs on every PR
- Comprehensive test suite in CI/CD pipeline
- Automatic code quality checks
- Performance and security scanning

## Contributing

Contributions are welcome! Please read the contribution guidelines before getting started.

## License

- MIT - Open Source
