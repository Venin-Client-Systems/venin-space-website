'use client';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, BarChart3, Shield, Clock, FileText, Users, AlertTriangle, ArrowRight, Sparkles, Check } from 'lucide-react';

export default function ExciseMateHero() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* ATO-Style Blue Banner with Glass Effect */}
      <div className="bg-[var(--ato-blue)] text-white animate-fade-in-down relative overflow-hidden">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="flex items-center justify-between py-5">
            {/* Logo and Title */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <Image
                  src="/logo-light.png"
                  alt="ExciseMate Logo"
                  width={60}
                  height={60}
                  className="drop-shadow-lg"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight">ExciseMate</h1>
                <p className="text-sm text-white/90 font-medium">Distillery Compliance Software</p>
              </div>
            </div>

            {/* Login Button */}
            <Button
              asChild
              className="bg-white text-[var(--ato-blue)] hover:bg-gray-50 font-semibold px-8 py-5 transition-all hover:scale-105 hover:shadow-xl shadow-lg"
            >
              <Link href="https://excisemate.venin.space/login">
                Login to ExciseMate
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Hero Section with Advanced Animations */}
      <section className="relative py-24 lg:py-40 overflow-hidden">
        {/* Logo watermark in background */}
        <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-[0.02] pointer-events-none">
          <Image
            src="/logo.png"
            alt=""
            width={600}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Animated background gradients with mesh effect */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          {/* Animated gradient orbs */}
          <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-[var(--ato-blue)]/10 via-purple-100/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 -right-40 w-[500px] h-[500px] bg-gradient-to-tl from-blue-100/20 via-[var(--ato-blue)]/5 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />

          {/* Animated mesh gradient overlay */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[var(--ato-blue)]/20 via-transparent to-purple-200/20 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tl from-blue-200/20 via-transparent to-[var(--ato-blue)]/20 rounded-full blur-3xl animate-float-delayed" />
          </div>

          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-[var(--ato-blue)]/30 rounded-full animate-float-particle" />
            <div className="absolute top-1/2 right-1/4 w-1.5 h-1.5 bg-purple-400/20 rounded-full animate-float-particle-slow" />
            <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-[var(--ato-blue)]/20 rounded-full animate-float-particle-delayed" />
            <div className="absolute top-3/4 right-1/3 w-2 h-2 bg-blue-300/25 rounded-full animate-float-particle" style={{ animationDelay: '3s' }} />
            <div className="absolute top-1/3 left-2/3 w-1.5 h-1.5 bg-[var(--ato-blue)]/15 rounded-full animate-float-particle-slow" style={{ animationDelay: '1.5s' }} />
          </div>

          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(var(--ato-blue) 1px, transparent 1px), linear-gradient(90deg, var(--ato-blue) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-200 shadow-lg text-[var(--ato-blue)] text-sm font-semibold mb-10 animate-scale-in backdrop-blur-sm">
              <Sparkles className="w-4 h-4" />
              <span className="bg-gradient-to-r from-[var(--ato-blue)] to-[var(--ato-dark-blue)] bg-clip-text text-transparent">
                Australian-Made Compliance Software
              </span>
            </div>

            {/* Hero Headline */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 animate-fade-in-up leading-[1.1] tracking-tight">
              Distillery Compliance
              <br />
              <span className="relative inline-block mt-2">
                <span className="gradient-text text-6xl md:text-7xl lg:text-8xl">Mastery</span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--ato-blue)]/30 to-transparent" />
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed animate-fade-in-up animate-stagger-1 max-w-3xl mx-auto font-light">
              Streamline your excise duty tracking, production records, and ATO compliance with confidence.
              <span className="block mt-2 font-medium text-gray-700">Built specifically for Australian alcohol distilleries.</span>
            </p>

            {/* CTA Buttons with Enhanced Styling */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12 animate-fade-in-up animate-stagger-2">
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-[var(--ato-blue)] to-[var(--ato-dark-blue)] hover:from-[var(--ato-dark-blue)] hover:to-[var(--ato-blue)] text-white text-lg px-10 py-7 shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(0,105,143,0.5)] transition-all duration-300 hover:scale-105 group border-0 overflow-hidden"
              >
                <Link href="https://excisemate.venin.space/signup" className="relative z-10 flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-lg px-10 py-7 border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-[var(--ato-blue)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href="https://excisemate.venin.space/login">
                  Book a Demo
                </Link>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600 animate-fade-in animate-stagger-3">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[var(--ato-blue)]" />
                <span className="font-medium">60-day free trial</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[var(--ato-blue)]" />
                <span className="font-medium">No credit card required</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
                <CheckCircle2 className="w-5 h-5 text-[var(--ato-blue)]" />
                <span className="font-medium">ATO compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section with Glass Morphism */}
      <section className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white -z-10" />

        {/* Animated wave effect */}
        <div className="absolute inset-0 -z-10 opacity-30">
          <div className="absolute top-1/3 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[var(--ato-blue)]/20 to-transparent animate-wave" />
          <div className="absolute top-2/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-300/20 to-transparent animate-wave-delayed" />
        </div>

        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Everything You Need for Compliance
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Comprehensive tools designed for Australian distilleries to meet ATO requirements
              and maintain accurate records with confidence.
            </p>
          </div>

          {/* Feature Cards Grid with Advanced Styling */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <Card className="group p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-[var(--ato-blue)]/30 transition-all duration-300 hover-lift animate-scale-in animate-stagger-1 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--ato-blue)]/5 to-transparent rounded-bl-[100px] -z-10" />
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--ato-blue)] to-[var(--ato-dark-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Excise Duty Tracking
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Automatically calculate and track excise duty obligations. Generate accurate
                reports for ATO submission with confidence.
              </p>
            </Card>

            {/* Feature 2 */}
            <Card className="group p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-[var(--ato-blue)]/30 transition-all duration-300 hover-lift animate-scale-in animate-stagger-2 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--ato-blue)]/5 to-transparent rounded-bl-[100px] -z-10" />
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--ato-blue)] to-[var(--ato-dark-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Production Records
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Maintain detailed production records for all vessels and batches.
                Track volumes, alcohol content, and processing steps.
              </p>
            </Card>

            {/* Feature 3 */}
            <Card className="group p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-[var(--ato-blue)]/30 transition-all duration-300 hover-lift animate-scale-in animate-stagger-3 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--ato-blue)]/5 to-transparent rounded-bl-[100px] -z-10" />
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--ato-blue)] to-[var(--ato-dark-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                ATO Compliance
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Built to meet Australian Taxation Office requirements. Stay compliant
                with guided workflows and validation checks.
              </p>
            </Card>

            {/* Feature 4 */}
            <Card className="group p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-[var(--ato-blue)]/30 transition-all duration-300 hover-lift animate-scale-in animate-stagger-4 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--ato-blue)]/5 to-transparent rounded-bl-[100px] -z-10" />
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--ato-blue)] to-[var(--ato-dark-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Real-Time Monitoring
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Monitor your distillery operations in real-time. Track vessel status,
                production progress, and compliance metrics.
              </p>
            </Card>

            {/* Feature 5 */}
            <Card className="group p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-[var(--ato-blue)]/30 transition-all duration-300 hover-lift animate-scale-in animate-stagger-5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--ato-blue)]/5 to-transparent rounded-bl-[100px] -z-10" />
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--ato-blue)] to-[var(--ato-dark-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Team Collaboration
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Role-based access control for your team. Track who made changes and
                when for complete audit trails.
              </p>
            </Card>

            {/* Feature 6 */}
            <Card className="group p-8 bg-white/80 backdrop-blur-sm border-2 border-gray-100 hover:border-[var(--ato-blue)]/30 transition-all duration-300 hover-lift animate-scale-in animate-stagger-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[var(--ato-blue)]/5 to-transparent rounded-bl-[100px] -z-10" />
              <div className="w-16 h-16 bg-gradient-to-br from-[var(--ato-blue)] to-[var(--ato-dark-blue)] rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">
                Compliance Alerts
              </h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Receive alerts for compliance issues and upcoming deadlines.
                Never miss an important submission date.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section with Refined Design */}
      <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--ato-blue) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-20 text-center animate-fade-in-up tracking-tight">
              Why Australian Distilleries Choose ExciseMate
            </h3>

            <div className="space-y-6">
              {[
                {
                  title: "Built for Australian Regulations",
                  description: "Designed specifically for ATO requirements and Australian excise duty regulations. Every feature is tailored to meet local compliance standards with precision and care."
                },
                {
                  title: "Save Time and Reduce Errors",
                  description: "Automated calculations and validations reduce manual data entry and compliance errors by up to 95%. Focus on your craft, not paperwork."
                },
                {
                  title: "Complete Audit Trail",
                  description: "Every action is logged with timestamps and user information for complete traceability. Be audit-ready at all times with comprehensive documentation."
                },
                {
                  title: "Secure Cloud Storage",
                  description: "Your data is encrypted end-to-end and backed up regularly across multiple regions. Enterprise-grade security for complete peace of mind."
                }
              ].map((benefit, index) => (
                <div
                  key={index}
                  className={`flex gap-6 animate-slide-in-left animate-stagger-${index + 1} p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[var(--ato-blue)]/20 group`}
                >
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gradient-to-br from-[var(--ato-blue)]/10 to-[var(--ato-blue)]/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle2 className="w-7 h-7 text-[var(--ato-blue)]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{benefit.title}</h4>
                    <p className="text-lg text-gray-600 leading-relaxed font-light">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, var(--ato-blue) 1px, transparent 0)',
          backgroundSize: '60px 60px'
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up tracking-tight">
              Simple, Transparent Pricing
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
              Choose the plan that fits your distillery. Start with a 60-day free trial — no credit card required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Starter Plan */}
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-[var(--ato-blue)]/30 transition-all duration-300 hover:shadow-xl relative">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Starter</h4>
                <p className="text-gray-600 font-light">Perfect for small craft distilleries</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">$99</span>
                  <span className="text-gray-600 font-light">AUD/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">or $79/month billed annually</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 1 distillery</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited users</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Core workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Duty calculations</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Email support</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                <Link href="https://excisemate.venin.space/signup">Start Free Trial</Link>
              </Button>
            </Card>

            {/* Professional Plan - Popular */}
            <Card className="p-8 bg-gradient-to-br from-[var(--ato-blue)] to-[var(--ato-dark-blue)] border-2 border-[var(--ato-blue)] relative transform md:scale-105 shadow-2xl">
              <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-1 text-sm font-bold rounded-bl-lg rounded-tr-lg">
                POPULAR
              </div>
              <div className="mb-6 text-white">
                <h4 className="text-2xl font-bold mb-2 tracking-tight">Professional</h4>
                <p className="text-blue-100 font-light">Full-featured for growing distilleries</p>
              </div>
              <div className="mb-6 text-white">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold">$199</span>
                  <span className="text-blue-100 font-light">AUD/month</span>
                </div>
                <p className="text-sm text-blue-100 mt-2">or $159/month billed annually</p>
              </div>
              <ul className="space-y-4 mb-8 text-white">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Up to 1 distillery</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>Unlimited users</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span>All core workflows</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">ATO SBR integration</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Advanced analytics</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">API access</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <span className="font-semibold">Priority support</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-white hover:bg-gray-100 text-[var(--ato-blue)] font-bold">
                <Link href="https://excisemate.venin.space/signup">Start Free Trial</Link>
              </Button>
            </Card>

            {/* Enterprise Plan */}
            <Card className="p-8 bg-white border-2 border-gray-200 hover:border-[var(--ato-blue)]/30 transition-all duration-300 hover:shadow-xl relative">
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">Enterprise</h4>
                <p className="text-gray-600 font-light">For multi-site operations</p>
              </div>
              <div className="mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gray-900">$499</span>
                  <span className="text-gray-600 font-light">AUD/month</span>
                </div>
                <p className="text-sm text-gray-500 mt-2">or $399/month billed annually</p>
              </div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Up to 5 distilleries</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited users</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">All features included</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">White-label branding</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Unlimited API calls</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[var(--ato-blue)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">99.9% SLA & phone support</span>
                </li>
              </ul>
              <Button asChild className="w-full bg-gray-900 hover:bg-gray-800 text-white">
                <Link href="https://excisemate.venin.space/signup">Start Free Trial</Link>
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 font-light">
              All plans include a 60-day free trial. No credit card required.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section with Premium Styling */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--ato-blue)]/5 via-purple-50/30 to-blue-50/40" />
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, var(--ato-blue) 0.5px, transparent 0.5px), radial-gradient(circle at 80% 50%, var(--ato-blue) 0.5px, transparent 0.5px)',
          backgroundSize: '50px 50px'
        }} />

        {/* Ambient lighting orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-[400px] h-[400px] bg-gradient-to-br from-[var(--ato-blue)]/10 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-tl from-purple-200/10 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto bg-white/60 backdrop-blur-xl p-12 lg:p-16 rounded-3xl shadow-2xl border border-white/20">
            {/* Logo in CTA */}
            <div className="flex justify-center mb-8">
              <Image
                src="/logo.png"
                alt="ExciseMate"
                width={80}
                height={80}
                className="opacity-80"
              />
            </div>

            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
              Ready to Streamline Your Compliance?
            </h3>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Join Australian distilleries already using ExciseMate to manage their compliance
              with confidence. <span className="font-medium text-gray-700">Start your 60-day free trial today</span> — no credit card required.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Button
                asChild
                size="lg"
                className="relative bg-gradient-to-r from-[var(--ato-blue)] to-[var(--ato-dark-blue)] hover:from-[var(--ato-dark-blue)] hover:to-[var(--ato-blue)] text-white text-xl px-12 py-8 shadow-2xl hover:shadow-[0_25px_70px_-20px_rgba(0,105,143,0.6)] transition-all duration-300 hover:scale-105 group"
              >
                <Link href="https://excisemate.venin.space/signup" className="flex items-center">
                  Start Free Trial
                  <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-xl px-12 py-8 border-2 border-gray-300 text-gray-700 bg-white hover:bg-gray-50 hover:border-[var(--ato-blue)] transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Link href="mailto:support@venin.space">
                  Contact Sales
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Premium Styling */}
      <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(30deg, var(--ato-blue) 12%, transparent 12.5%, transparent 87%, var(--ato-blue) 87.5%, var(--ato-blue)), linear-gradient(150deg, var(--ato-blue) 12%, transparent 12.5%, transparent 87%, var(--ato-blue) 87.5%, var(--ato-blue))',
          backgroundSize: '80px 140px'
        }} />

        <div className="container mx-auto px-4 lg:px-8 relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              {/* Logo in Footer */}
              <div className="mb-6">
                <Image
                  src="/logo-light.png"
                  alt="ExciseMate"
                  width={60}
                  height={60}
                  className="mb-4"
                />
              </div>
              <h4 className="text-2xl font-bold mb-4 tracking-tight">ExciseMate</h4>
              <p className="text-gray-400 leading-relaxed font-light">
                Professional distillery compliance software for Australian alcohol producers.
                Built with care by Venin Client Systems.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 tracking-tight">Resources</h4>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>
                  <Link href="https://excisemate.venin.space/login" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="https://excisemate.venin.space/signup" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Sign Up
                  </Link>
                </li>
                <li>
                  <Link href="mailto:support@venin.space" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 tracking-tight">Legal</h4>
              <ul className="space-y-3 text-gray-400 font-light">
                <li>
                  <Link href="/excisemate/privacy" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/excisemate/terms" className="hover:text-white transition-colors hover:translate-x-1 inline-block">
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-bold mb-6 tracking-tight">Contact</h4>
              <p className="text-gray-400 font-light">
                Email:{' '}
                <a href="mailto:support@venin.space" className="hover:text-white transition-colors">
                  support@venin.space
                </a>
              </p>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-700 text-center text-gray-400 font-light">
            <p>&copy; {new Date().getFullYear()} Venin Client Systems. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
