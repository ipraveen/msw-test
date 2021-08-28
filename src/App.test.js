import { render, screen, waitFor } from '@testing-library/react';
import App from './components/App';

test('card should load for a valid id', async () => {
    render(<App id="EMP101"/>);
    const spinner = screen.getByTestId('loading-spinner');
    expect(spinner).toBeInTheDocument();
    await waitFor(() =>
        expect(screen.getByText(/praveen singh/i)).toBeInTheDocument()
    );

    screen.debug();
});


test('card should not load for a in-valid id', async () => {
  render(<App id="EMP000"/>);
  const spinner = screen.getByTestId('loading-spinner');
  expect(spinner).toBeInTheDocument();
 
  await waitFor(() =>
      expect(screen.getByRole('alert')).toBeInTheDocument()
  );
  expect(screen.getByText(/Sorry, can't find user you are looking for/i)).toBeInTheDocument()
});