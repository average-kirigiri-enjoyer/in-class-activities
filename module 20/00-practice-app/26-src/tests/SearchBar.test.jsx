import pretty from 'pretty';
import { render } from '@testing-library/react';
import SearchBar from '../components/SearchBar';
import {container} from 'vitest';

describe('SearchBar', () => {
  // In this example, we render the SearchBar component and format the rendered HTML using the pretty package before saving it as a snapshot
  it('should render and match snapshot', () => {
      // Render the component
      render(<SearchBar />, container);

    // Format the rendered output
    const html = pretty(container.innerHTML);

    // Verify the output
    expect(html).toMatchSnapshot();
  });
});

/*
import SearchBar from '../components/SearchBar';
import { expect, it, describe, container, act } from 'vitest';
describe('SearchBar', () => {
    // In this example, we render the SearchBar component and format the rendered HTML using the pretty package before saving it as a snapshot
    it('should render and match snapshot', () => {
        let container;
        act(() => {
            // Render the component
            ({ container } = render(<SearchBar />));
            // container is a DOM element that is provided by Jest automatically when running in a browser-like environment. It is used to render the component. we use it when
        });
        // Format the rendered output
        const html = pretty(container.innerHTML);
        // Verify the output
        expect(html).toMatchSnapshot();
    });
});
*/