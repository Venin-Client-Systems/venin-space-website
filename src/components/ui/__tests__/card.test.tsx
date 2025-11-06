import React from 'react'
import { render, screen } from '../../../../tests/utils/testUtils'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'

describe('Card Components', () => {
  describe('Card', () => {
    it('renders correctly with default props', () => {
      render(<Card data-testid="card">Card content</Card>)

      const card = screen.getByTestId('card')
      expect(card).toBeInTheDocument()
      expect(card).toHaveClass('rounded-xl', 'border', 'bg-card')
    })

    it('applies custom className', () => {
      render(<Card className="custom-class" data-testid="card">Content</Card>)

      const card = screen.getByTestId('card')
      expect(card).toHaveClass('custom-class')
    })

    it('forwards ref correctly', () => {
      const ref = React.createRef<HTMLDivElement>()
      render(<Card ref={ref}>Content</Card>)

      expect(ref.current).toBeInstanceOf(HTMLDivElement)
    })
  })

  describe('CardHeader', () => {
    it('renders correctly', () => {
      render(<CardHeader data-testid="header">Header content</CardHeader>)

      const header = screen.getByTestId('header')
      expect(header).toBeInTheDocument()
      expect(header).toHaveClass('grid', 'auto-rows-min', 'gap-1.5', 'px-6')
    })
  })

  describe('CardTitle', () => {
    it('renders with correct styling', () => {
      render(<CardTitle data-testid="title">Card Title</CardTitle>)

      const title = screen.getByTestId('title')
      expect(title).toBeInTheDocument()
      expect(title).toHaveClass('font-semibold', 'leading-none')
    })

    it('displays the title text', () => {
      render(<CardTitle>My Card Title</CardTitle>)

      expect(screen.getByText('My Card Title')).toBeInTheDocument()
    })
  })

  describe('CardDescription', () => {
    it('renders with correct styling', () => {
      render(<CardDescription data-testid="description">Card description</CardDescription>)

      const description = screen.getByTestId('description')
      expect(description).toBeInTheDocument()
      expect(description).toHaveClass('text-sm', 'text-muted-foreground')
    })

    it('displays the description text', () => {
      render(<CardDescription>This is a card description</CardDescription>)

      expect(screen.getByText('This is a card description')).toBeInTheDocument()
    })
  })

  describe('CardContent', () => {
    it('renders with correct padding', () => {
      render(<CardContent data-testid="content">Card content</CardContent>)

      const content = screen.getByTestId('content')
      expect(content).toBeInTheDocument()
      expect(content).toHaveClass('px-6')
    })
  })

  describe('CardFooter', () => {
    it('renders with correct styling', () => {
      render(<CardFooter data-testid="footer">Footer content</CardFooter>)

      const footer = screen.getByTestId('footer')
      expect(footer).toBeInTheDocument()
      expect(footer).toHaveClass('flex', 'items-center', 'px-6')
    })
  })

  describe('Full Card Composition', () => {
    it('renders a complete card with all components', () => {
      render(
        <Card data-testid="full-card">
          <CardHeader>
            <CardTitle>Production Vessel</CardTitle>
            <CardDescription>Current fermentation status</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Vessel is at 75% capacity</p>
          </CardContent>
          <CardFooter>
            <button>View Details</button>
          </CardFooter>
        </Card>
      )

      expect(screen.getByTestId('full-card')).toBeInTheDocument()
      expect(screen.getByText('Production Vessel')).toBeInTheDocument()
      expect(screen.getByText('Current fermentation status')).toBeInTheDocument()
      expect(screen.getByText('Vessel is at 75% capacity')).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /view details/i })).toBeInTheDocument()
    })

    it('handles ExciseMate-specific card content', () => {
      render(
        <Card>
          <CardHeader>
            <CardTitle>Batch DR/2024/042</CardTitle>
            <CardDescription>87.3% efficiency</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <p>Status: In Progress</p>
              <p>Stage: Fermentation</p>
              <p>ABV: 8.5%</p>
            </div>
          </CardContent>
        </Card>
      )

      expect(screen.getByText('Batch DR/2024/042')).toBeInTheDocument()
      expect(screen.getByText('87.3% efficiency')).toBeInTheDocument()
      expect(screen.getByText('Status: In Progress')).toBeInTheDocument()
      expect(screen.getByText('Stage: Fermentation')).toBeInTheDocument()
      expect(screen.getByText('ABV: 8.5%')).toBeInTheDocument()
    })
  })
})