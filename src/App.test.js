import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders the Smear portfolio page', () => {
  const { container } = render(
    <MemoryRouter
      initialEntries={['/portfolio/smear']}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByText(/My dad's side of the family has been playing Smear/i)
  ).toBeInTheDocument();

  expect(container.querySelector('iframe')).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Play Smear/i })).toHaveAttribute(
    'href',
    'https://play-smear.com/'
  );
});

test('renders the Shredr portfolio page with a website link', () => {
  render(
    <MemoryRouter
      initialEntries={['/portfolio/shredr']}
      future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
    >
      <App />
    </MemoryRouter>
  );

  expect(
    screen.getByText(/Built as a practical tool for quickly comparing/i)
  ).toBeInTheDocument();

  expect(screen.getByRole('link', { name: /Open Shredr/i })).toHaveAttribute(
    'href',
    'https://www.shredr.ca'
  );
  expect(screen.getByRole('link', { name: /Open Shredr/i })).toHaveAttribute(
    'target',
    '_blank'
  );
});
