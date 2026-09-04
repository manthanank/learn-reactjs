import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { App } from './App';

describe('App', () => {
  it('should render the app component', () => {
    const { container } = render(<App />);
    expect(container).toBeTruthy();
  });

  it('should render title', () => {
    render(<App />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading.textContent).toContain('Hello, learn-reactjs');
  });

  it('should render subtitle congratulations message', () => {
    render(<App />);
    expect(
      screen.getByText(/Congratulations! Your React 19 app is running/i),
    ).toBeInTheDocument();
  });
});
