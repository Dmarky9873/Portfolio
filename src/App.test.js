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
    screen.getByText(/Smear is a game that has been passed down/i)
  ).toBeInTheDocument();

  expect(container.querySelector('iframe')).not.toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Play Smear/i })).toHaveAttribute(
    'href',
    'https://play-smear.com/'
  );
});
