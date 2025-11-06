'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/lib/auth';
import { useMobileDetection, useBreakpoint, getMobileMenuClasses, getTouchTargetClasses } from '@/lib/responsive';
import {
  Menu,
  X,
  Home,
  Settings,
  FileText,
  BarChart3,
  Bell,
  LogOut,
  User,
  FlaskConical,
  Database,
  Shield,
  HardDrive,
  Activity,
  ChevronRight,
  Package,
  Truck,
  Droplet,
  TrendingUp,
  DollarSign,
  Calendar,
  Archive,
  Gauge,
} from 'lucide-react';
import Image from 'next/image';

interface NavItem {
  title: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  permission?: string;
  children?: NavItem[];
}

interface MobileNavProps {
  unreadNotifications?: number;
}

export function MobileNav({ unreadNotifications = 0 }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);
  const { user, logout, hasSimplePermission } = useAuth();
  const { isMobile } = useMobileDetection();
  const { breakpoint } = useBreakpoint();
  const router = useRouter();
  const pathname = usePathname();

  // Navigation items
  const navItems: NavItem[] = [
    {
      title: 'Dashboard',
      href: '/',
      icon: Home,
    },
    {
      title: 'Workflows',
      href: '/workflows',
      icon: FlaskConical,
      children: [
        { title: 'Receive Shipment', href: '/workflows/receive-shipment', icon: Truck },
        { title: 'Distillation Run', href: '/workflows/distillation', icon: FlaskConical },
        { title: 'Bottling Run', href: '/workflows/bottling', icon: Package },
        { title: 'Stock Transfer', href: '/workflows/transfer', icon: Database },
      ],
    },
    {
      title: 'Reports',
      href: '/reports',
      icon: FileText,
    },
    {
      title: 'Analytics',
      href: '/analytics',
      icon: BarChart3,
    },
    {
      title: 'Duty & Compliance',
      href: '/duty',
      icon: Shield,
      children: [
        { title: 'Remission Dashboard', href: '/remission/dashboard', icon: Gauge },
        { title: 'Duty Forecasting', href: '/duty/page', icon: Calendar },
        { title: 'CPI Indexation', href: '/duty/cpi', icon: TrendingUp },
        { title: 'Record Archiving', href: '/compliance/record-keeping', icon: Archive },
      ],
    },
    {
      title: 'Production',
      href: '/production',
      icon: FlaskConical,
      children: [
        { title: 'Barrel Aging', href: '/barrels', icon: Droplet },
        { title: 'Cost Analysis', href: '/costing', icon: DollarSign },
        { title: 'Optimization', href: '/optimization/dashboard', icon: TrendingUp },
      ],
    },
    {
      title: 'Notifications',
      href: '/notifications',
      icon: Bell,
      badge: unreadNotifications > 0 ? unreadNotifications.toString() : undefined,
    },
    {
      title: 'Settings',
      href: '/settings',
      icon: Settings,
      children: [
        {
          title: 'Audit & Compliance',
          href: '/settings/audit',
          icon: Shield,
          permission: 'view_audit_logs',
        },
        {
          title: 'Backup & Recovery',
          href: '/settings/backup',
          icon: HardDrive,
          permission: 'manage_backups',
        },
        {
          title: 'API Monitoring',
          href: '/settings/monitoring',
          icon: Activity,
          permission: 'view_monitoring',
        },
      ],
    },
  ];

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setExpandedSection(null);
  }, [pathname]);

  // Close menu on desktop breakpoint
  useEffect(() => {
    if (breakpoint !== 'sm') {
      setIsOpen(false);
    }
  }, [breakpoint]);

  const handleNavigation = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  const toggleSection = (sectionTitle: string) => {
    setExpandedSection(expandedSection === sectionTitle ? null : sectionTitle);
  };

  const renderNavItem = (item: NavItem, level: number = 0) => {
    const Icon = item.icon;
    const hasPermission = !item.permission || hasSimplePermission(item.permission);
    const isActive = pathname === item.href || (item.children && item.children.some(child => pathname === child.href));
    const hasChildren = item.children && item.children.length > 0;
    const isExpanded = expandedSection === item.title;

    if (!hasPermission) return null;

    return (
      <div key={item.href} className={`${level > 0 ? 'ml-4' : ''}`}>
        <button
          onClick={() => {
            if (hasChildren) {
              toggleSection(item.title);
            } else {
              handleNavigation(item.href);
            }
          }}
          className={`
            w-full flex items-center justify-between p-3 rounded-lg text-left transition-colors
            ${getTouchTargetClasses()}
            ${isActive
              ? 'bg-primary text-primary-foreground'
              : 'hover:bg-accent hover:text-accent-foreground'
            }
          `}
        >
          <div className="flex items-center gap-3">
            <Icon className="h-5 w-5 flex-shrink-0" />
            <span className="font-medium">{item.title}</span>
            {item.badge && (
              <Badge variant="destructive" className="ml-auto">
                {item.badge}
              </Badge>
            )}
          </div>
          {hasChildren && (
            <ChevronRight
              className={`h-4 w-4 transition-transform ${isExpanded ? 'rotate-90' : ''}`}
            />
          )}
        </button>

        {hasChildren && isExpanded && (
          <div className="mt-2 space-y-1">
            {item.children?.map(child => renderNavItem(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  // Don't render on desktop
  if (!isMobile) return null;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`md:hidden ${getTouchTargetClasses()}`}
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open navigation menu</span>
        </Button>
      </SheetTrigger>

      <SheetContent side="left" className="w-80 p-0 overflow-y-auto">
        <div className="flex flex-col h-full">
          {/* Header */}
          <SheetHeader className="p-6 border-b">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg flex items-center justify-center">
                <Image src="/logo.png" alt="Venin Logo" width={40} height={40} className="object-contain" />
              </div>
              <div className="flex-1">
                <SheetTitle className="text-xl font-bold">ExciseMate</SheetTitle>
                <SheetDescription className="text-xs mt-1">
                  Excise Compliance for Australia's Distilleries — Automated. Encrypted. Auditable.
                </SheetDescription>
              </div>
            </div>
          </SheetHeader>

          {/* User Info */}
          {user && (
            <div className="p-6 border-b bg-muted/30">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center">
                  <User className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{user.name}</p>
                  <p className="text-sm text-muted-foreground capitalize">
                    {(user.roleInActiveDistillery || user.role)?.replace('_', ' ')}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <nav className="flex-1 p-6 space-y-2">
            {navItems.map(item => renderNavItem(item))}
          </nav>

          {/* Footer Actions */}
          <div className="p-6 border-t space-y-2">
            <Button
              variant="ghost"
              onClick={() => handleNavigation('/profile')}
              className={`w-full justify-start ${getTouchTargetClasses()}`}
            >
              <User className="h-5 w-5 mr-3" />
              Profile Settings
            </Button>

            <Button
              variant="ghost"
              onClick={logout}
              className={`w-full justify-start text-destructive hover:text-destructive ${getTouchTargetClasses()}`}
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/**
 * Mobile-optimized bottom navigation for quick access
 */
export function MobileBottomNav({ unreadNotifications = 0 }: MobileNavProps) {
  const { isMobile } = useMobileDetection();
  const router = useRouter();
  const pathname = usePathname();

  // Quick access items for bottom nav
  const bottomNavItems = [
    { title: 'Home', href: '/', icon: Home },
    { title: 'Reports', href: '/reports', icon: FileText },
    { title: 'Analytics', href: '/analytics', icon: BarChart3 },
    {
      title: 'Notifications',
      href: '/notifications',
      icon: Bell,
      badge: unreadNotifications > 0 ? unreadNotifications : undefined,
    },
    { title: 'Settings', href: '/settings', icon: Settings },
  ];

  // Don't render on desktop or certain pages
  if (!isMobile || pathname?.includes('/workflows/')) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border z-40 md:hidden">
      <div className="grid grid-cols-5 gap-1 p-2">
        {bottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <button
              key={item.href}
              onClick={() => router.push(item.href)}
              className={`
                relative flex flex-col items-center justify-center p-2 rounded-lg transition-colors
                ${getTouchTargetClasses()}
                ${isActive
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                }
              `}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1 font-medium">{item.title}</span>
              {item.badge && (
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                >
                  {item.badge > 9 ? '9+' : item.badge}
                </Badge>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Mobile-optimized header component
 */
export function MobileHeader({ title, subtitle, actions }: {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
}) {
  const { isMobile } = useMobileDetection();

  if (!isMobile) return null;

  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-sm border-b border-border md:hidden">
      <div className="flex items-center justify-between p-4">
        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-bold truncate">{title}</h1>
          {subtitle && (
            <p className="text-sm text-muted-foreground truncate">{subtitle}</p>
          )}
        </div>
        {actions && (
          <div className="flex items-center gap-2 ml-4">
            {actions}
          </div>
        )}
      </div>
    </header>
  );
}