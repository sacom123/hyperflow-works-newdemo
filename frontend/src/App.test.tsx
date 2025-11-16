import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText(/복잡한 코딩없이/i)).toBeInTheDocument();
  });

  it('renders hero section', () => {
    render(<App />);
    expect(screen.getByText(/AI 워크플로우를 완성하세요/i)).toBeInTheDocument();
  });

  it('renders login button', () => {
    render(<App />);
    expect(screen.getByText(/로그인/i)).toBeInTheDocument();
  });
});

