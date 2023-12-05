# Frontend Challenge

## Demo

![Alt text](image-3.png)

## Summary

Every criteria and Technical spec was met in this challenge.

- E2E testing was implemented with Cypress.
- Caching and state management with Redux Toolkit.
- Unit tested the components with jest and React Testing Library. (main component App skipped in favor of E2E)
- CORS is handled with http-proxy-middleware
- Pagination on the currency conversion list was implemented with a "fake" infinite loading (due to the sdk method not supporting pagination).
- Supported Currencies are being loaded dinamically with a direct call to the Uphold API (no sdk method).
- Linting tools with Husky/Prettier/Eslint
- Loading state only appears for currencies that are not cached already.
- Responsive design
- Tailwind for CSS

### What went wrong ?

I wasn't able to mock neither SDK, or the api in the unit tests.

### What I tried

- **MSW server with the API endpoint:** Would not work with Create React App, despite me trying every configuration I could find to make it work. It might be due to the fact that the API needs to be called over http, being redirected to https to then return the response. The tests immeadiatly exited after the sdk call.
- **Using jest.mock with the sdk constructor**: Would only return undefined despite mocking the promise correctly with correctly formatted data.
