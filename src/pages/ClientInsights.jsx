// src/pages/ClientInsights.js
import React from "react";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import law from './../assets/law.png'

const ClientInsights = () => {
  const insights = [
    {
      id: 1,
      title: "Understanding Kenya's New Property Tax Regulations",
      excerpt:
        "A comprehensive guide to the recent changes in property tax laws and their implications for property owners and investors.",
      author: "David Ochieng",
      date: "January 15, 2025",
      readTime: "5 min read",
      category: "Property Law",
      image: "/api/placeholder/800/400",
    },
    {
      id: 2,
      title: "Debt Recovery Strategies in Post-Pandemic Kenya",
      excerpt:
        "Effective approaches to credit collection in the current economic climate, including alternative dispute resolution methods.",
      author: "Jane Muthoni",
      date: "January 10, 2025",
      readTime: "7 min read",
      category: "Credit Collection",
      image: "/api/placeholder/800/400",
    },
    {
      id: 3,
      title: "Constitutional Petition: When and How to File",
      excerpt:
        "A step-by-step guide to filing constitutional petitions in Kenya, including recent landmark cases and their implications.",
      author: "Kamuti Waweru",
      date: "January 5, 2025",
      readTime: "8 min read",
      category: "Constitutional Law",
      image: "/api/placeholder/800/400",
    },
    {
      id: 4,
      title: "Employment Law Updates: 2025 Changes",
      excerpt:
        "Key changes to Kenya's employment laws in 2025 and what they mean for employers and employees.",
      author: "Sarah Kimani",
      date: "December 28, 2024",
      readTime: "6 min read",
      category: "Employment Law",
      image: "/api/placeholder/800/400",
    },
    {
      id: 5,
      title: "Land Succession: Avoiding Common Pitfalls",
      excerpt:
        "Essential considerations for land succession in Kenya, including recent court decisions and best practices.",
      author: "Grace Akinyi",
      date: "December 20, 2024",
      readTime: "10 min read",
      category: "Succession Law",
      image: "/api/placeholder/800/400",
    },
    {
      id: 6,
      title: "Tech Companies and IP Protection in Kenya",
      excerpt:
        "How technology companies can protect their intellectual property rights in Kenya's evolving digital landscape.",
      author: "Michael Kiptoo",
      date: "December 15, 2024",
      readTime: "9 min read",
      category: "Intellectual Property",
      image: "/api/placeholder/800/400",
    },
  ];

  const categories = [
    "All",
    "Property Law",
    "Credit Collection",
    "Constitutional Law",
    "Employment Law",
    "Succession Law",
    "Intellectual Property",
  ];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredInsights =
    selectedCategory === "All"
      ? insights
      : insights.filter((insight) => insight.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
                 className="absolute inset-0 bg-contain bg-no-repeat bg-center"
                 style={{
                   backgroundImage: `url(${law})`,
                   filter: "brightness(0.4)",
                 }}
               />
        <div className="relative z-10 text-center text-black max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Client Insights</h1>
          <p className="text-xl">
            Legal Updates, Analysis, and Insights for Our Clients
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">
            Stay informed with our latest legal insights, updates on Kenyan law,
            and analysis of important legal developments. Our team of experts
            shares their knowledge to help you navigate the legal landscape
            effectively.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition ${
                  selectedCategory === category
                    ? "bg-amber-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredInsights.map((insight) => (
              <article
                key={insight.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={insight.image}
                  alt={insight.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full">
                      {insight.category}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {insight.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3">{insight.title}</h3>
                  <p className="text-gray-600 mb-4">{insight.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      {insight.author}
                      <span className="mx-2">•</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      {insight.date}
                    </div>
                  </div>
                  <a
                    href="#"
                    className="mt-4 inline-flex items-center text-amber-600 font-semibold hover:text-amber-700 transition"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
              Load More Articles
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to our newsletter for the latest legal insights and
            updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 rounded-lg border border-gray-300 flex-1 max-w-md"
            />
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Need Legal Advice?</h2>
          <p className="text-xl mb-8">
            Our team is ready to help you with expert legal guidance
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </div>
  );
};

export default ClientInsights;
