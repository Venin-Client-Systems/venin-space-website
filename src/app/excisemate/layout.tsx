import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ExciseMate - Australian Distillery Compliance Software',
  description: 'Streamline your alcohol distillery compliance with ExciseMate. Track excise duty, manage production records, and ensure ATO compliance effortlessly.',
  keywords: ['excise duty', 'distillery software', 'compliance', 'ATO', 'alcohol production', 'Australia'],
  openGraph: {
    title: 'ExciseMate - Australian Distillery Compliance Software',
    description: 'Streamline your alcohol distillery compliance with ExciseMate.',
    type: 'website',
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
