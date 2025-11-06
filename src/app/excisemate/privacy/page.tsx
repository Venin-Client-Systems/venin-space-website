'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-[var(--ato-blue)] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center justify-between py-5">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-light.png"
                alt="ExciseMate Logo"
                width={60}
                height={60}
                className="drop-shadow-lg"
              />
              <div>
                <h1 className="text-2xl font-bold tracking-tight">ExciseMate</h1>
                <p className="text-sm text-white/90 font-medium">Privacy Policy</p>
              </div>
            </div>

            <Button
              asChild
              variant="ghost"
              className="text-white hover:bg-white/10"
            >
              <Link href="/excisemate">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-100 p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Venin Client Systems ("we", "our", or "us") operates ExciseMate, a distillery compliance software platform.
                This Privacy Policy explains how we collect, use, disclose, and protect your personal information in accordance
                with the <strong>Privacy Act 1988 (Cth)</strong> and the <strong>Australian Privacy Principles (APPs)</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using ExciseMate, you consent to the collection, use, and disclosure of your personal information as described in this policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We collect personal information that you provide directly, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Name, email address, phone number, and business details</li>
                <li>Australian Business Number (ABN) and distillery license information</li>
                <li>Payment and billing information</li>
                <li>Production records and excise duty data</li>
                <li>Communications with our support team</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">2.2 Technical Information</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We automatically collect technical data when you use our services:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>IP address, browser type, and device information</li>
                <li>Usage data, including pages visited and features accessed</li>
                <li>Log files and analytics data</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>To provide and maintain ExciseMate services</li>
                <li>To process excise duty calculations and ATO compliance reporting</li>
                <li>To communicate with you about your account and services</li>
                <li>To process payments and prevent fraud</li>
                <li>To improve our software and develop new features</li>
                <li>To comply with Australian legal obligations, including ATO requirements</li>
                <li>To send marketing communications (with your consent)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Data Storage and Security</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Data Location</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Your data is stored on secure servers located in Australia and may be stored on cloud infrastructure
                provided by reputable service providers. We take reasonable steps to ensure overseas providers comply
                with the Australian Privacy Principles.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Security Measures</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We implement industry-standard security measures, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>End-to-end encryption for data transmission</li>
                <li>Encrypted storage of sensitive information</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular data backups to prevent loss</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Disclosure of Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may disclose your personal information to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>The Australian Taxation Office (ATO) for compliance reporting</li>
                <li>Third-party service providers who assist in operating our platform</li>
                <li>Payment processors for billing purposes</li>
                <li>Law enforcement or regulatory bodies when required by law</li>
                <li>Professional advisors (lawyers, accountants) under confidentiality obligations</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Your Privacy Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under the Australian Privacy Principles, you have the right to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li><strong>Access:</strong> Request access to your personal information we hold</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Complaint:</strong> Lodge a complaint about our handling of your information</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                To exercise these rights, contact us at{' '}
                <a href="mailto:privacy@venin.space" className="text-[var(--ato-blue)] hover:underline">
                  privacy@venin.space
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Retention</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We retain your personal information for as long as:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Your account remains active</li>
                <li>Required to provide services to you</li>
                <li>Required by Australian tax law (minimum 7 years for excise records)</li>
                <li>Necessary for legal, accounting, or dispute resolution purposes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cookies and Tracking</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use cookies and similar technologies to enhance user experience and analyze usage patterns.
                You can control cookie preferences through your browser settings. Essential cookies required for
                platform functionality cannot be disabled.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                ExciseMate is not intended for use by individuals under 18 years of age. We do not knowingly
                collect personal information from children.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Changes to This Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of significant changes
                via email or through the platform. Continued use of ExciseMate after changes constitutes acceptance
                of the updated policy.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Complaints and Disputes</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have a complaint about our handling of your personal information:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                <li>Contact our Privacy Officer at{' '}
                  <a href="mailto:privacy@venin.space" className="text-[var(--ato-blue)] hover:underline">
                    privacy@venin.space
                  </a>
                </li>
                <li>We will investigate and respond within 30 days</li>
                <li>If unsatisfied, you may lodge a complaint with the Office of the Australian Information Commissioner (OAIC):
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>Website:{' '}
                      <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-[var(--ato-blue)] hover:underline">
                        www.oaic.gov.au
                      </a>
                    </li>
                    <li>Phone: 1300 363 992</li>
                    <li>Email: enquiries@oaic.gov.au</li>
                  </ul>
                </li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Venin Client Systems</strong><br />
                Email:{' '}
                <a href="mailto:support@venin.space" className="text-[var(--ato-blue)] hover:underline">
                  support@venin.space
                </a><br />
                Privacy Officer:{' '}
                <a href="mailto:privacy@venin.space" className="text-[var(--ato-blue)] hover:underline">
                  privacy@venin.space
                </a>
              </p>
            </section>

            <section className="bg-blue-50 border-l-4 border-[var(--ato-blue)] p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed">
                <strong>Governing Law:</strong> This Privacy Policy is governed by the laws of South Australia
                and the Commonwealth of Australia. Any disputes will be subject to the exclusive jurisdiction
                of the courts of South Australia.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
