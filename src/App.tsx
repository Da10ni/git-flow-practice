import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: "🚀",
      title: "Lightning Fast",
      description:
        "Built with cutting-edge technology for optimal performance and speed.",
    },
    {
      icon: "🎨",
      title: "Beautiful Design",
      description:
        "Stunning, modern interface that delights users and drives engagement.",
    },
    {
      icon: "🔒",
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee.",
    },
    {
      icon: "📱",
      title: "Mobile First",
      description:
        "Perfectly responsive design that works flawlessly on all devices.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content:
        "This solution transformed our business. The results exceeded our expectations.",
      avatar: "👩‍💼",
    },
    {
      name: "Mike Chen",
      role: "CTO, StartupXYZ",
      content:
        "Incredible performance and user experience. Our team productivity increased by 300%.",
      avatar: "👨‍💻",
    },
    {
      name: "Emma Davis",
      role: "Designer, CreativeStudio",
      content:
        "The design system is absolutely beautiful. It makes our work so much easier.",
      avatar: "👩‍🎨",
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: [
        "Up to 10 projects",
        "Basic analytics",
        "Email support",
        "5GB storage",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      features: [
        "Unlimited projects",
        "Advanced analytics",
        "Priority support",
        "100GB storage",
        "Custom integrations",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: [
        "Everything in Pro",
        "Dedicated manager",
        "Custom development",
        "Unlimited storage",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img
                src={reactLogo}
                alt="Logo"
                className="h-8 w-8 animate-spin-slow"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                ReactFlow
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#features"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Features
              </a>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Testimonials
              </a>
              <a
                href="#pricing"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-purple-600 transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-purple-600 transition-colors">
                Login
              </button>
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg border-t">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                >
                  Home
                </a>
                <a
                  href="#features"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                >
                  Features
                </a>
                <a
                  href="#testimonials"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                >
                  Testimonials
                </a>
                <a
                  href="#pricing"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                >
                  Pricing
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-purple-600 hover:bg-gray-50 rounded-md"
                >
                  Contact
                </a>
                <div className="px-3 py-2 space-y-2">
                  <button className="w-full text-left text-gray-700 hover:text-purple-600">
                    Login
                  </button>
                  <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-full">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100"
      >
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Build Amazing
                <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                  Digital Experiences
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl">
                Transform your ideas into stunning applications with our
                cutting-edge platform. Join thousands of developers who trust us
                to bring their visions to life.
              </p>

              {/* Hero Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-semibold hover:border-purple-600 hover:text-purple-600 transition-all duration-300">
                  Watch Demo
                </button>
              </div>

              {/* Stats */}
              <div className="flex flex-col sm:flex-row gap-8 justify-center lg:justify-start">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">50K+</div>
                  <div className="text-gray-600">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-gray-600">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md hover:shadow-3xl hover:-translate-y-2 transition-all duration-500">
                  {/* Mock Browser Header */}
                  <div className="flex items-center space-x-2 mb-6">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>

                  {/* Tech Logos */}
                  <div className="flex justify-center space-x-8 mb-8">
                    <img
                      src={reactLogo}
                      alt="React"
                      className="h-16 w-16 animate-spin-slow"
                    />
                    <img
                      src={viteLogo}
                      alt="Vite"
                      className="h-16 w-16 hover:scale-110 transition-transform"
                    />
                  </div>

                  {/* Code Preview */}
                  <div className="bg-gray-900 rounded-lg p-4 text-sm font-mono">
                    <div className="text-green-400">
                      <span className="text-blue-400">const</span>{" "}
                      <span className="text-yellow-400">success</span>{" "}
                      <span className="text-white">=</span>{" "}
                      <span className="text-green-300">"guaranteed"</span>
                    </div>
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 bg-purple-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                  ✨
                </div>
                <div className="absolute -bottom-4 -left-4 bg-pink-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                  🚀
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose ReactFlow?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to accelerate your development process
              and deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-gray-100"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied customers who love our platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 relative">
              <div className="text-center">
                <div className="text-6xl mb-6">
                  {testimonials[currentTestimonial].avatar}
                </div>
                <blockquote className="text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-purple-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? "bg-purple-600 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your needs. Upgrade or downgrade at
              any time.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 ${
                  plan.popular ? "ring-2 ring-purple-600 scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-1">
                    {plan.price}
                    <span className="text-xl text-gray-600 font-medium">
                      {plan.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-full font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:shadow-lg hover:-translate-y-1"
                      : "border-2 border-gray-300 text-gray-700 hover:border-purple-600 hover:text-purple-600"
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Join thousands of developers building amazing applications with
            ReactFlow
          </p>
          <div className="space-y-4">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              Start Your Free Trial
            </button>
            <p className="text-purple-200 text-sm">
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src={reactLogo} alt="Logo" className="h-8 w-8" />
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  ReactFlow
                </span>
              </div>
              <p className="text-gray-400 max-w-md">
                Building the future of web development, one component at a time.
                Empowering developers to create amazing digital experiences.
              </p>
            </div>

            {/* Links */}
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    API
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 ReactFlow. All rights reserved.sdsd
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                GitHub
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        testing22
      </footer>
    </div>
  );
}

export default App;
