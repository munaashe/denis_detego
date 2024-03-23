import { render, screen } from '@testing-library/react';
import { vi, expect, it } from 'vitest';
import Image from './Image';
import '@testing-library/jest-dom';

it('Image component renders correctly', async () => {
  global.fetch = vi.fn().mockResolvedValue({
    ok: true,
    url: 'https://example.com/image.jpg',
  });

  render(<Image />);

  // Wait for image to load
  await screen.findByAltText('Mars');

  // Check if image is displayed
  expect(screen.getByAltText('Mars')).toHaveAttribute('src', 'https://example.com/image.jpg');
});