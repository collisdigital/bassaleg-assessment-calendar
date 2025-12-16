import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';

describe('Modal', () => {
  const onCloseMock = vi.fn();

  it('renders nothing when closed', () => {
    render(
      <Modal isOpen={false} onClose={onCloseMock} title="Test Modal">
        <p>Content</p>
      </Modal>
    );
    expect(screen.queryByText('Test Modal')).not.toBeInTheDocument();
  });

  it('renders content when open', () => {
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        <p>Content</p>
      </Modal>
    );
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup();
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        <p>Content</p>
      </Modal>
    );

    // There are two close buttons: one in header (X) and one in footer (Close).
    // Let's pick the footer one explicitly by text
    const closeBtn = screen.getByText('Close', { selector: 'button' });
    await user.click(closeBtn);
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose when backdrop is clicked', async () => {
      const user = userEvent.setup();
      const { container } = render(
          <Modal isOpen={true} onClose={onCloseMock} title="Test Modal"><p>Content</p></Modal>
      );

      const backdrop = container.querySelector('.bg-gray-500\\/75');
      if (!backdrop) throw new Error('Backdrop not found');

      await user.click(backdrop);
      expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose on Escape key', async () => {
    const user = userEvent.setup();
    render(
      <Modal isOpen={true} onClose={onCloseMock} title="Test Modal">
        <p>Content</p>
      </Modal>
    );

    await user.keyboard('{Escape}');
    expect(onCloseMock).toHaveBeenCalled();
  });
});
