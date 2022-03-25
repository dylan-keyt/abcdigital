import React, { useCallback } from 'react';
import { Button } from '../Button';
import { Input } from '../Input';
import { ResultsList } from '../ResultsList';
import iconPath from '../Icons/icons.svg';

const API_URL = 'http://localhost:8010/proxy/suburbs.json?q=';

const API_SAMPLE = [
  { name: 'Sydney South', state: { abbreviation: 'NSW' } },
  { name: 'Sydney', state: { abbreviation: 'NSW' } },
  { name: 'Sydney International Airport', state: { abbreviation: 'NSW' } },
  { name: 'Sydney Domestic Airport', state: { abbreviation: 'NSW' } },
  { name: 'Sydenham', state: { abbreviation: 'VIC' } }
];

export const SearchBar = () => {
  // TODO: (DK) Implement search state

  const handleOnClick = useCallback(() => {
    // TODO: (DK) Perform onClick logic
    alert('Hello!');
  }, []);

  const handleOnChange = useCallback(() => {
    // TODO: (DK) Perform onChange logic
  }, []);

  const handleOnSelect = useCallback(() => {
    // TODO: (DK) Perform select logic
  }, []);

  return (
    <section>
      TODO: Implement a suburb autocomplete using &lt;Input /&gt;,
      &lt;ResultsList /&gt; and &lt;Button /&gt; and data provided by the{' '}
      <a href="http://localhost:8010/proxy/suburbs.json?q=Syd">API</a>.
      <Button onClick={handleOnClick}>
        <svg viewBox="0 0 24 24" width="24" height="16">
          <use xlinkHref={iconPath + '#dls-icon-arrow-right'} />
        </svg>
      </Button>
      <Input onChange={handleOnChange} value="value" ariaLabel='Suburb search input' />
      <ResultsList onSelect={handleOnSelect} items={[]} />
    </section>
  );
};

export default SearchBar;
