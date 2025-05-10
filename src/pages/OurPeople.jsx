// src/pages/OurPeople.js
import React from "react";
import { Mail, Phone, Linkedin, Award } from "lucide-react";

const OurPeople = () => {
  const partners = [
    {
      name: "Kamuti Waweru",
      position: "Managing Partner",
      image: "/api/placeholder/400/400",
      expertise: ["Commercial Litigation", "Corporate Law", "Real Estate"],
      education: [
        "LLB (Hons), University of Nairobi",
        "Kenya School of Law - Advocate",
        "Member, Law Society of Kenya",
      ],
      experience: "20+ years",
      bio: "Kamuti Waweru is the founding and managing partner of KWCO. With over 20 years of experience in legal practice, he has established himself as one of Kenya's leading advocates in commercial litigation and corporate law.",
      email: "kwaweru@kwco.co.ke",
      phone: "+254 722 123 456",
      linkedin: "#",
    },
    {
      name: "Jane Muthoni",
      position: "Senior Partner",
      image: "/api/placeholder/400/400",
      expertise: ["Credit Collection", "Banking Law", "Debt Recovery"],
      education: [
        "LLB, Kenyatta University",
        "MBA, Strathmore University",
        "Certified Credit Professional",
      ],
      experience: "15+ years",
      bio: "Jane leads our Credit Collection practice with extensive experience in banking law and debt recovery. She has successfully recovered millions for financial institutions and corporate clients.",
      email: "jmuthoni@kwco.co.ke",
      phone: "+254 733 456 789",
      linkedin: "#",
    },
    {
      name: "David Ochieng",
      position: "Partner",
      image: "/api/placeholder/400/400",
      expertise: ["Conveyancing", "Property Law", "Land Disputes"],
      education: [
        "LLB, Moi University",
        "LLM in Land Law, University of Nairobi",
        "Certified Conveyancer",
      ],
      experience: "12+ years",
      bio: "David heads our Conveyancing department, specializing in complex property transactions and land dispute resolution. His expertise spans both commercial and residential real estate.",
      email: "dochieng@kwco.co.ke",
      phone: "+254 721 987 654",
      linkedin: "#",
    },
  ];

  const associates = [
    {
      name: "Sarah Kimani",
      position: "Senior Associate",
      image: "/api/placeholder/400/400",
      expertise: ["Employment Law", "Labour Relations"],
      experience: "8+ years",
    },
    {
      name: "Peter Njoroge",
      position: "Associate",
      image: "/api/placeholder/400/400",
      expertise: ["Tax Law", "Corporate Compliance"],
      experience: "6+ years",
    },
    {
      name: "Grace Akinyi",
      position: "Associate",
      image: "/api/placeholder/400/400",
      expertise: ["Family Law", "Succession"],
      experience: "5+ years",
    },
    {
      name: "Michael Kiptoo",
      position: "Associate",
      image: "/api/placeholder/400/400",
      expertise: ["Intellectual Property", "Technology Law"],
      experience: "4+ years",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/api/placeholder/1920/600')`,
            filter: "brightness(0.4)",
          }}
        />
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our People</h1>
          <p className="text-xl">
            Meet the Legal Experts Behind KWCO's Success
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-xl text-gray-600">
            Our team of experienced lawyers and legal professionals brings
            together expertise across various practice areas. With a commitment
            to excellence and client satisfaction, our people are the foundation
            of KWCO's reputation as one of Kenya's leading law firms.
          </p>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Partners</h2>
          <div className="space-y-20">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="grid md:grid-cols-3 gap-8 p-8">
                  <div className="md:col-span-1">
                    <img
                      src={partner.image}
                      alt={partner.name}
                      className="w-full rounded-lg mb-6"
                    />
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-1">
                          Contact
                        </h4>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Mail className="w-4 h-4 mr-2" />
                          <a
                            href={`mailto:${partner.email}`}
                            className="hover:text-amber-600"
                          >
                            {partner.email}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Phone className="w-4 h-4 mr-2" />
                          <a
                            href={`tel:${partner.phone}`}
                            className="hover:text-amber-600"
                          >
                            {partner.phone}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Linkedin className="w-4 h-4 mr-2" />
                          <a
                            href={partner.linkedin}
                            className="hover:text-amber-600"
                          >
                            LinkedIn Profile
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-bold mb-2">{partner.name}</h3>
                    <p className="text-xl text-amber-600 font-semibold mb-4">
                      {partner.position}
                    </p>
                    <p className="text-gray-600 mb-6">{partner.bio}</p>

                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">
                          Areas of Expertise
                        </h4>
                        <ul className="space-y-2">
                          {partner.expertise.map((area, idx) => (
                            <li
                              key={idx}
                              className="flex items-center text-gray-600"
                            >
                              <Award className="w-4 h-4 text-amber-600 mr-2" />
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3">
                          Education & Qualifications
                        </h4>
                        <ul className="space-y-2">
                          {partner.education.map((edu, idx) => (
                            <li key={idx} className="text-gray-600">
                              • {edu}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6">
                      <span className="inline-block bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                        {partner.experience} Experience
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Our Associates
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {associates.map((associate, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={associate.image}
                  alt={associate.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{associate.name}</h3>
                  <p className="text-amber-600 font-semibold mb-3">
                    {associate.position}
                  </p>
                  <div className="text-sm text-gray-600 mb-3">
                    {associate.expertise.map((area, idx) => (
                      <span key={idx}>
                        {area}
                        {idx < associate.expertise.length - 1 && " • "}
                      </span>
                    ))}
                  </div>
                  <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    {associate.experience}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section */}
      <section className="py-20 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Join Our Team</h2>
          <p className="text-xl mb-8">
            We're always looking for talented legal professionals to join our
            growing team
          </p>
          <a
            href="/contact"
            className="bg-white text-amber-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            View Career Opportunities
          </a>
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
