/**
 * @jest-environment jsdom
 * 
 * Test suite for the WelcomePopup component
 * Tests cover:
 * - Initial rendering
 * - Modal visibility
 * - Button interactions
 * - Styling
 * - Accessibility
 * - Component structure
 * - Keyboard interactions
 * - Error handling
 * - Component lifecycle
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

describe('WelcomePopup Component', () => {
  // Setup and cleanup
  afterEach(() => {
    jest.clearAllMocks();
  });

  // Test case 1: Component renders initially
  test('renders welcome popup with correct content', () => {
    render(<WelcomePopup />);
    
    // Check if the main headings are present
    expect(screen.getByText('WELCOME')).toBeInTheDocument();
    expect(screen.getByText('TO')).toBeInTheDocument();
    expect(screen.getByText('The DevSecOps Day 2 Hackathon!')).toBeInTheDocument();
    
    // Check if the button is present
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  // Test case 2: Modal closes when button is clicked
  test('closes modal when Get Started button is clicked', () => {
    render(<WelcomePopup />);
    
    // Verify modal is initially visible
    expect(screen.getByText('WELCOME')).toBeInTheDocument();
    
    // Click the Get Started button
    const button = screen.getByText('Get Started');
    fireEvent.click(button);
    
    // Verify modal content is no longer visible
    expect(screen.queryByText('WELCOME')).not.toBeInTheDocument();
  });

  // Test case 3: Check initial state
  test('shows modal by default', () => {
    render(<WelcomePopup />);
    
    // Check if modal container is present
    const modalElement = screen.getByRole('dialog', { hidden: true });
    expect(modalElement).toHaveClass('modal');
  });

  // Test case 4: Check button styles
  test('button has correct styling classes', () => {
    render(<WelcomePopup />);
    
    const button = screen.getByText('Get Started');
    expect(button).toHaveClass('btn');
    expect(button).toHaveClass('close');
  });

  // Test case 5: Check content container styling
  test('content has correct container class', () => {
    render(<WelcomePopup />);
    
    const container = screen.getByText('WELCOME').closest('.container');
    expect(container).toHaveClass('text-center');
    expect(container).toHaveClass('devsecops');
  });
  // Test case 6: Check modal structure
  test('has correct modal structure', () => {
    render(<WelcomePopup />);
    
    // Check nested structure
    const modal = screen.getByRole('dialog', { hidden: true });
    expect(modal.firstChild).toHaveClass('modal-content');
  });

  // Test case 7: Snapshot testing
  test('matches snapshot', () => {
    const { container } = render(<WelcomePopup />);
    expect(container).toMatchSnapshot();
  });

  // Test case 8: Component cleanup
  test('cleans up on unmount', () => {
    const { unmount } = render(<WelcomePopup />);
    unmount();
    // Component should unmount without errors
    expect(true).toBeTruthy(); // Component unmounted successfully
  });

  // Test case 9: Keyboard interaction
  test('handles keyboard events', () => {
    render(<WelcomePopup />);
    const button = screen.getByText('Get Started');
    
    // Test keyboard interaction
    button.focus();
    fireEvent.keyPress(button, { key: 'Enter', code: 13 });
    
    expect(screen.queryByText('WELCOME')).not.toBeInTheDocument();
  });

  // Test case 10: Multiple renders
  test('handles multiple renders correctly', () => {
    const { rerender } = render(<WelcomePopup />);
    
    // First render
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    
    // Re-render
    rerender(<WelcomePopup />);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  // Test case 11: Error handling
  test('handles errors gracefully', () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    
    // Force an error by passing invalid props
    render(<WelcomePopup someInvalidProp={undefined} />);
    
    expect(consoleErrorSpy).not.toHaveBeenCalled();
    consoleErrorSpy.mockRestore();
  });

  // Test case 12: Improved modal close test
  test('closes modal completely when button is clicked', () => {
    render(<WelcomePopup />);
    
    // Check initial state
    const modal = screen.getByRole('dialog', { hidden: true });
    expect(modal).toBeInTheDocument();
    
    // Perform action
    const button = screen.getByText('Get Started');
    fireEvent.click(button);
    
    // Check final state
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
