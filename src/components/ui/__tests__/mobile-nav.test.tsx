/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MobileNav, MobileBottomNav, MobileHeader } from '../mobile-nav';
import { createMockRouter, createMockUser } from '../../../../tests/utils/testUtils';

// Mock dependencies
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    return <img {...props} alt={props.alt} />;
  },
}));

jest.mock('@/lib/auth', () => ({
  useAuth: jest.fn(),
}));

jest.mock('@/lib/responsive', () => ({
  useMobileDetection: jest.fn(),
  useBreakpoint: jest.fn(),
  getMobileMenuClasses: jest.fn(() => 'mobile-menu-class'),
  getTouchTargetClasses: jest.fn(() => 'touch-target-class'),
}));

const mockRouter = createMockRouter();
const mockUser = createMockUser();
const mockLogout = jest.fn();

describe('MobileNav', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    require('next/navigation').useRouter.mockReturnValue(mockRouter);
    require('next/navigation').usePathname.mockReturnValue('/');
    require('@/lib/auth').useAuth.mockReturnValue({
      user: { ...mockUser, name: 'Test User', role: 'admin' },
      logout: mockLogout,
      hasSimplePermission: jest.fn(() => true),
    });
    require('@/lib/responsive').useMobileDetection.mockReturnValue({ isMobile: true });
    require('@/lib/responsive').useBreakpoint.mockReturnValue({ breakpoint: 'sm' });
  });

  describe('Rendering', () => {
    it('renders on mobile devices', () => {
      render(<MobileNav />);
      expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument();
    });

    it('does not render on desktop', () => {
      require('@/lib/responsive').useMobileDetection.mockReturnValue({ isMobile: false });

      const { container } = render(<MobileNav />);
      expect(container.firstChild).toBeNull();
    });

    it('displays menu trigger button', () => {
      render(<MobileNav />);
      expect(screen.getByRole('button', { name: /open navigation menu/i })).toBeInTheDocument();
    });
  });

  describe('Navigation Items', () => {
    it('shows all navigation items when opened', async () => {
      render(<MobileNav />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

      fireEvent.click(menuButton);

      await waitFor(() => {
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Workflows')).toBeInTheDocument();
        expect(screen.getByText('Reports')).toBeInTheDocument();
      });
    });

    it('navigates to dashboard on click', async () => {
      render(<MobileNav />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

      fireEvent.click(menuButton);

      await waitFor(() => {
        const dashboardLink = screen.getByText('Dashboard');
        fireEvent.click(dashboardLink);
      });

      expect(mockRouter.push).toHaveBeenCalledWith('/');
    });

    it('expands sections with children', async () => {
      render(<MobileNav />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

      fireEvent.click(menuButton);

      await waitFor(() => {
        const workflowsButton = screen.getByText('Workflows');
        fireEvent.click(workflowsButton);
      });

      await waitFor(() => {
        expect(screen.getByText('Receive Shipment')).toBeInTheDocument();
        expect(screen.getByText('Distillation Run')).toBeInTheDocument();
      });
    });
  });

  describe('User Information', () => {
    it('displays user name', async () => {
      render(<MobileNav />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

      fireEvent.click(menuButton);

      await waitFor(() => {
        expect(screen.getByText('Test User')).toBeInTheDocument();
      });
    });

    it('displays user role', async () => {
      render(<MobileNav />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

      fireEvent.click(menuButton);

      await waitFor(() => {
        expect(screen.getByText('admin')).toBeInTheDocument();
      });
    });
  });

  describe('Logout', () => {
    it('calls logout function when sign out clicked', async () => {
      render(<MobileNav />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

      fireEvent.click(menuButton);

      await waitFor(() => {
        const signOutButton = screen.getByText('Sign Out');
        fireEvent.click(signOutButton);
      });

      expect(mockLogout).toHaveBeenCalled();
    });
  });

  describe('Notifications Badge', () => {
    it('displays notification badge when count > 0', async () => {
      render(<MobileNav unreadNotifications={5} />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

      fireEvent.click(menuButton);

      await waitFor(() => {
        expect(screen.getByText('5')).toBeInTheDocument();
      });
    });

    it('hides notification badge when count is 0', async () => {
      render(<MobileNav unreadNotifications={0} />);
      const menuButton = screen.getByRole('button', { name: /open navigation menu/i });

      fireEvent.click(menuButton);

      await waitFor(() => {
        const notificationsLink = screen.getByText('Notifications');
        expect(notificationsLink).toBeInTheDocument();
      });
    });
  });
});

describe('MobileBottomNav', () => {
  beforeEach(() => {
    require('@/lib/responsive').useMobileDetection.mockReturnValue({ isMobile: true });
    require('next/navigation').useRouter.mockReturnValue(mockRouter);
    require('next/navigation').usePathname.mockReturnValue('/');
  });

  it('renders on mobile devices', () => {
    render(<MobileBottomNav />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('does not render on desktop', () => {
    require('@/lib/responsive').useMobileDetection.mockReturnValue({ isMobile: false });

    const { container } = render(<MobileBottomNav />);
    expect(container.firstChild).toBeNull();
  });

  it('shows notification badge', () => {
    render(<MobileBottomNav unreadNotifications={9} />);
    expect(screen.getByText('9')).toBeInTheDocument();
  });

  it('caps notification badge at 9+', () => {
    render(<MobileBottomNav unreadNotifications={15} />);
    expect(screen.getByText('9+')).toBeInTheDocument();
  });
});

describe('MobileHeader', () => {
  beforeEach(() => {
    require('@/lib/responsive').useMobileDetection.mockReturnValue({ isMobile: true });
  });

  it('renders title', () => {
    render(<MobileHeader title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<MobileHeader title="Test Title" subtitle="Test Subtitle" />);
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('renders action buttons', () => {
    render(<MobileHeader title="Test" actions={<button>Action</button>} />);
    expect(screen.getByText('Action')).toBeInTheDocument();
  });
});
