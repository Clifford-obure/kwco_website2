// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Users,
  Check,
  Scale,
  Briefcase,
  FileText,
  Clock,
  Target,
  Shield,
  Award,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Lightbulb,
  Eye,
} from "lucide-react";
import law from "./../assets/law.mp4";

const Home = () => {
  const practiceAreas = [
    {
      id: "litigation",
      icon: <Scale className="w-12 h-12" />,
      title: "Litigation",
      description:
        "Comprehensive litigation services across civil, commercial, and constitutional matters.",
      link: "/practice-areas/litigation",
    },
    {
      id: "credit-collection",
      icon: <Briefcase className="w-12 h-12" />,
      title: "Credit Collection",
      description:
        "Strategic debt recovery solutions to help businesses and financial institutions.",
      link: "/practice-areas/credit-collection",
    },
    {
      id: "conveyancing",
      icon: <FileText className="w-12 h-12" />,
      title: "Conveyancing",
      description:
        "Full-service conveyancing solutions for property transactions.",
      link: "/practice-areas/conveyancing",
    },
  ];

  const testimonials = [
    {
      client: "Sarah Kimani",
      company: "Tech Innovations Ltd",
      text: "KWCO's expertise in commercial litigation helped us resolve a complex dispute efficiently.",
    },
    {
      client: "John Omondi",
      company: "Real Estate Ventures",
      text: "The conveyancing team at KWCO made our property acquisition seamless.",
    },
    {
      client: "Mary Wanjiku",
      company: "Finance Solutions Kenya",
      text: "Their credit collection services have significantly improved our debt recovery rates.",
    },
  ];

  const teamMembers = [
    {
      name: "Kamuti Waweru",
      position: "Managing Partner",
      expertise: ["Commercial Litigation", "Corporate Law", "Real Estate"],
      description:
        "With over 20 years of experience in Kenya's legal landscape, Kamuti has established himself as a leading advocate.",
      image: "/api/placeholder/400/400",
    },
    {
      name: "Jane Muthoni",
      position: "Senior Partner",
      expertise: ["Credit Collection", "Banking Law", "Debt Recovery"],
      description:
        "Jane brings 15 years of specialized experience in banking law and debt recovery.",
      image: "/api/placeholder/400/400",
    },
    {
      name: "David Ochieng",
      position: "Partner",
      expertise: ["Conveyancing", "Property Law", "Land Disputes"],
      description:
        "David is our conveyancing expert with 12 years of experience in property transactions.",
      image: "/api/placeholder/400/400",
    },
  ];

  const coreValues = [
    {
      icon: <Shield className="w-12 h-12 text-amber-600" />,
      title: "Integrity",
      description:
        "We uphold the highest ethical standards in all our dealings.",
    },
    {
      icon: <Target className="w-12 h-12 text-amber-600" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do.",
    },
    {
      icon: <Users className="w-12 h-12 text-amber-600" />,
      title: "Client Focus",
      description: "We put our clients' needs at the center of our practice.",
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-amber-600" />,
      title: "Innovation",
      description: "We embrace new ideas and technologies to serve better.",
    },
  ];

  const recentInsights = [
    {
      title: "Understanding Kenya's New Property Tax Regulations",
      excerpt:
        "A comprehensive guide to the recent changes in property tax laws.",
      author: "David Ochieng",
      date: "January 15, 2025",
      category: "Property Law",
    },
    {
      title: "Debt Recovery Strategies in Post-Pandemic Kenya",
      excerpt:
        "Effective approaches to credit collection in the current economic climate.",
      author: "Jane Muthoni",
      date: "January 10, 2025",
      category: "Credit Collection",
    },
    {
      title: "Constitutional Petition: When and How to File",
      excerpt:
        "A step-by-step guide to filing constitutional petitions in Kenya.",
      author: "Kamuti Waweru",
      date: "January 5, 2025",
      category: "Constitutional Law",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Video Background */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(0.5)" }}
        >
          <source src={law} type="video/mp4" />
          <source src="/path-to-your-video.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <img
            src="/api/placeholder/1920/1080"
            alt="Law office"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6">
            Excellence in Legal Practice
          </h1>
          <p className="text-xl lg:text-2xl mb-8">
            KWCO is a premier law firm in Nairobi, Kenya, specializing in
            litigation, credit collection, and conveyancing. With 50+ years of
            cumulative experience, we deliver trusted legal solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-amber-700 transition"
            >
              Get Legal Help Now
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg hover:bg-white hover:text-gray-900 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              About KWCO
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kamuti Waweru & Co. Advocates is a leading law firm committed to
              creating meaningful experiences for each client through excellence
              in legal practice.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To be the best law firm in Kenya by creating meaningful
                experiences for each client.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be recognized as Kenya's most trusted legal partner.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                <Clock className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Experience</h3>
              <p className="text-gray-600">
                With 50+ years of cumulative experience in Kenya's legal system.
              </p>
            </div>
          </div>

          {/* About Navigation Cards */}
          <div className="text-center">
            <Link
              to="/about"
              className="inline-flex items-center bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition mr-4 mb-4"
            >
              Learn More About Us
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/about/our-story"
              className="inline-flex items-center border border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition mr-4 mb-4"
            >
              Our Story
            </Link>
            <Link
              to="/about/mission-vision"
              className="inline-flex items-center border border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition mr-4 mb-4"
            >
              Mission & Vision
            </Link>
            <Link
              to="/about/core-values"
              className="inline-flex items-center border border-amber-600 text-amber-600 px-6 py-3 rounded-lg hover:bg-amber-50 transition mb-4"
            >
              Core Values
            </Link>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and define our commitment
              to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practice-areas" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Practice Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive legal services across three core practice
              areas
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {practiceAreas.map((area) => (
              <div
                key={area.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition"
              >
                <div className="p-8">
                  <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mb-6">
                    {area.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                  <p className="text-gray-600 mb-6">{area.description}</p>
                  <Link
                    to={area.link}
                    className="text-amber-600 font-semibold flex items-center hover:text-amber-700 transition"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/practice-areas"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
            >
              View All Practice Areas
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Our People Section */}
      <section id="our-people" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our People
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the experienced legal professionals behind KWCO's success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <p className="text-amber-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {member.expertise.map((skill, idx) => (
                      <span
                        key={idx}
                        className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/our-people"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
            >
              Meet Our Full Team
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Client Insights Section */}
      <section id="insights" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Client Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with our latest legal updates and analysis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {recentInsights.map((insight, index) => (
              <article
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <span className="inline-block bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm mb-4">
                    {insight.category}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{insight.author}</span>
                    <span>{insight.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/insights"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
            >
              View All Insights
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-xl max-w-3xl mx-auto">
              Hear what our clients say about their experiences with KWCO
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-lg"
              >
                <div className="mb-6">
                  <p className="text-lg italic">"{testimonial.text}"</p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.client}</p>
                  <p className="text-amber-200">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our legal team for a consultation
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Visit Us</h3>
              <p className="text-gray-600">
                123 Legal Street, Westlands
                <br />
                Nairobi, Kenya
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Call Us</h3>
              <p className="text-gray-600">
                +254 20 123 4567
                <br />
                +254 700 123 456
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Email Us</h3>
              <p className="text-gray-600">
                info@kwco.co.ke
                <br />
                legal@kwco.co.ke
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition"
            >
              Get In Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          <div className="mt-12 bg-amber-50 p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Emergency Legal Services</h3>
            <p className="text-gray-600 mb-4">
              For urgent legal matters outside office hours
            </p>
            <p className="text-2xl font-bold text-amber-600">
              +254 799 999 999
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-xl mb-8">
            Let our experienced team of legal professionals help you with your
            legal needs.
          </p>
          <Link
            to="/contact"
            className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition inline-block"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
