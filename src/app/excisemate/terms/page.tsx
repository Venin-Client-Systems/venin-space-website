'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function TermsAndConditions() {
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
                <p className="text-sm text-white/90 font-medium">Terms & Conditions</p>
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> {new Date().toLocaleDateString('en-AU', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions ("Terms") constitute a legally binding agreement between you ("Customer", "you", or "your")
                and Venin Client Systems ABN [Your ABN] ("Venin", "we", "our", or "us") governing your use of ExciseMate,
                a cloud-based distillery compliance software platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By accessing or using ExciseMate, you agree to be bound by these Terms. If you do not agree, do not use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Service Description</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ExciseMate provides software-as-a-service (SaaS) for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Excise duty calculation and tracking</li>
                <li>Production record management for alcohol distilleries</li>
                <li>ATO compliance reporting assistance</li>
                <li>Audit trail and documentation</li>
                <li>Team collaboration and access control</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                <strong>Important:</strong> ExciseMate is a compliance assistance tool. You remain solely responsible
                for the accuracy of data entered and compliance with all applicable Australian laws and regulations.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Eligibility and Account Registration</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.1 Eligibility</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Be at least 18 years of age</li>
                <li>Hold a valid Australian distillery license</li>
                <li>Provide accurate and complete registration information</li>
                <li>Have legal authority to bind your business to these Terms</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">3.2 Account Security</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Maintaining confidentiality of your login credentials</li>
                <li>All activities conducted under your account</li>
                <li>Notifying us immediately of unauthorized access</li>
                <li>Ensuring team members comply with these Terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Subscription and Fees</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.1 Pricing</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Subscription fees are displayed on our website and invoiced according to your selected plan.
                All fees are in Australian Dollars (AUD) and exclude GST unless stated otherwise.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.2 Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Payment is due in advance for the selected billing period</li>
                <li>We accept credit card, debit card, and direct debit payments</li>
                <li>Failure to pay may result in service suspension or termination</li>
                <li>You authorize automatic recurring charges for subscription renewals</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">4.3 Fee Changes</h3>
              <p className="text-gray-700 leading-relaxed">
                We may modify fees with 30 days' written notice. Continued use after the notice period
                constitutes acceptance of the new fees.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Free Trial</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We offer a 60-day free trial period. During the trial:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>No credit card is required to start</li>
                <li>You have full access to platform features</li>
                <li>You may cancel at any time without charge</li>
                <li>After trial expiry, a paid subscription is required to maintain access</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Customer Obligations</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Provide accurate and complete production data</li>
                <li>Comply with all applicable Australian laws, including excise duty regulations</li>
                <li>Maintain valid distillery licenses and permits</li>
                <li>Not use the service for unlawful purposes</li>
                <li>Not reverse engineer, decompile, or modify the software</li>
                <li>Not resell or redistribute access to ExciseMate</li>
                <li>Not attempt to access other customers' data</li>
                <li>Verify all calculations and reports before submission to the ATO</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Intellectual Property</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.1 Our Intellectual Property</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                ExciseMate, including all software, designs, trademarks, and content, is owned by Venin Client Systems
                and protected by Australian and international intellectual property laws. We grant you a limited,
                non-exclusive, non-transferable license to use the service for your business purposes only.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">7.2 Your Data</h3>
              <p className="text-gray-700 leading-relaxed">
                You retain all rights to your production data and business information. By using ExciseMate,
                you grant us a license to host, process, and backup your data solely for providing the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Warranties and Disclaimers</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.1 Service Availability</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive for 99.9% uptime but do not guarantee uninterrupted or error-free service. We may
                perform scheduled maintenance with advance notice when possible.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.2 Consumer Guarantees</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Under the <strong>Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010)</strong>,
                our services come with consumer guarantees that cannot be excluded. For services to businesses,
                these guarantees include that services are:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Rendered with due care and skill</li>
                <li>Fit for the purpose disclosed</li>
                <li>Delivered within a reasonable time</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">8.3 Limitation of Warranties</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the extent permitted by law:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>ExciseMate is provided "as is" without warranties of any kind</li>
                <li>We do not warrant that calculations or reports will be error-free</li>
                <li>We are not responsible for ATO penalties arising from data entry errors</li>
                <li>We do not provide legal or accounting advice</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Limitation of Liability</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.1 Liability Cap</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by Australian law, our total liability for any claims arising
                from your use of ExciseMate is limited to the fees paid by you in the 12 months preceding the claim.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.2 Exclusion of Consequential Loss</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We are not liable for:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>Loss of profits, revenue, or business opportunities</li>
                <li>Business interruption or loss of data</li>
                <li>ATO penalties, fines, or interest charges</li>
                <li>Indirect, consequential, or punitive damages</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">9.3 Consumer Law Rights</h3>
              <p className="text-gray-700 leading-relaxed">
                Nothing in these Terms excludes, restricts, or modifies any consumer guarantee, right, or remedy
                conferred by the Australian Consumer Law that cannot lawfully be excluded.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Indemnification</h2>
              <p className="text-gray-700 leading-relaxed">
                You agree to indemnify and hold harmless Venin Client Systems from any claims, losses, or expenses
                arising from your breach of these Terms, violation of laws, or misuse of the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Data Backup and Loss</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While we perform regular automated backups:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>You are responsible for maintaining independent backups of critical data</li>
                <li>We are not liable for data loss due to system failures or deletion</li>
                <li>Backup restoration may incur additional fees</li>
                <li>We retain data for 7 years in compliance with Australian tax law</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">12.1 Termination by You</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may cancel your subscription at any time through your account settings. Cancellation takes
                effect at the end of the current billing period. No refunds for partial periods.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">12.2 Termination by Us</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may suspend or terminate your access immediately if:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                <li>You breach these Terms</li>
                <li>Payment is more than 30 days overdue</li>
                <li>Your account is used for unlawful activities</li>
                <li>We are required by law or regulation</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3">12.3 Post-Termination</h3>
              <p className="text-gray-700 leading-relaxed">
                Upon termination, you may export your data for 30 days. After this period, we may delete your
                data, except as required by law for record retention.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Confidentiality</h2>
              <p className="text-gray-700 leading-relaxed">
                Both parties agree to maintain confidentiality of proprietary information disclosed during the
                term of this agreement. This obligation survives termination for 5 years.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Force Majeure</h2>
              <p className="text-gray-700 leading-relaxed">
                Neither party is liable for failure to perform due to circumstances beyond reasonable control,
                including natural disasters, pandemics, cyber attacks, or infrastructure failures.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Modifications to Terms</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update these Terms with 30 days' notice via email or platform notification. Material changes
                will be highlighted. Continued use constitutes acceptance of modified Terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Governing Law and Jurisdiction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms are governed by the laws of <strong>South Australia</strong> and the
                <strong> Commonwealth of Australia</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any disputes must be resolved through:
              </p>
              <ol className="list-decimal pl-6 mb-4 text-gray-700 space-y-2">
                <li>Good faith negotiation between parties</li>
                <li>Mediation by an agreed third party</li>
                <li>If unresolved, the courts of South Australia (non-exclusive jurisdiction)</li>
              </ol>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">17. Dispute Resolution</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For disputes under $25,000, you may refer the matter to the Australian Small Business and
                Family Enterprise Ombudsman (ASBFEO) for assistance.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">18. Severability</h2>
              <p className="text-gray-700 leading-relaxed">
                If any provision is found invalid or unenforceable, the remaining provisions continue in full effect.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">19. Entire Agreement</h2>
              <p className="text-gray-700 leading-relaxed">
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Venin
                regarding ExciseMate and supersede all prior agreements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">20. Contact Information</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For questions about these Terms:<br />
                <strong>Venin Client Systems</strong><br />
                Email:{' '}
                <a href="mailto:legal@venin.space" className="text-[var(--ato-blue)] hover:underline">
                  legal@venin.space
                </a><br />
                Support:{' '}
                <a href="mailto:support@venin.space" className="text-[var(--ato-blue)] hover:underline">
                  support@venin.space
                </a>
              </p>
            </section>

            <section className="bg-blue-50 border-l-4 border-[var(--ato-blue)] p-6 rounded-r-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Australian Consumer Law Notice:</strong> Our services come with guarantees that cannot be excluded
                under the Australian Consumer Law. For major failures with the service, you are entitled to cancel your
                service contract and obtain a refund for unused portion, or to compensation for the reduced value of
                services provided. You are also entitled to be compensated for any other reasonably foreseeable loss or
                damage. If the failure does not amount to a major failure, you are entitled to have problems with the
                service rectified in a reasonable time and, if this is not done, to cancel your contract and obtain a
                refund for unused portion of the contract.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Note:</strong> These Terms are provided as a general framework. You should obtain independent
                legal advice to ensure compliance with all applicable laws and regulations specific to your business.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
