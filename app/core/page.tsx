"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import App_Navbar from "../components/navbar";
import { FooterSection } from "../components/footer-section";

interface TeamMember {
  id: number;
  name: string;
  imageUrl: string;
  bio: string; // placeholder - update bio text later
  socialLinks?: {
    instagram?: string;
    linkedin?: string;
  };
}

const coreTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Agam Sarao",
    imageUrl: "/corepic/Agamveer Singh Kaleka.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/agam_sarao11",
      linkedin:
        "https://www.linkedin.com/in/agamveer-singh-sarao-32542835b?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 2,
    name: "Agamjot Singh Dhingra",
    imageUrl: "/corepic/Agamjot Singh Dhingra.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/agam_dhingra_?igsi=MThrYTloODVobWRuYQ%3D%3D&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/agamjot-singh-dhingra-3216b7293/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bkb6bEecIRr6ZcliY%2B3iBtQ%3D%3D",
    },
  },
  {
    id: 3,
    name: "Amreen Rooprai",
    imageUrl: "/corepic/Amren.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/333amreen",
      linkedin:
        "https://www.linkedin.com/in/amreen-rooprai?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 4,
    name: "Anmol Grewal",
    imageUrl: "/corepic/Anmol Singh Grewal.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/anmol.grwl?igsi=MWhtZzI2aGdpNjQycA%3D%3D&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/anmol-singh-grewal-689128373?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 5,
    name: "Anterpal Singh Chahal",
    imageUrl: "",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 6,
    name: "Avneet Kaur",
    imageUrl: "/corepic/Avneet Kaur.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/avneetsidhu313?igsi=cWp0YXRzc2llZXl6",
      linkedin: "https://www.linkedin.com/in/avneet-kaur-087691425",
    },
  },
  {
    id: 7,
    name: "Bhumika Garg",
    imageUrl: "/corepic/Bhumika Garg.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 8,
    name: "Birpartap Singh Bhullar",
    imageUrl: "/corepic/Bir.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 9,
    name: "Dilnoor Singh",
    imageUrl: "/corepic/dilnoor.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/whoisdilnoor",
      linkedin:
        "https://www.linkedin.com/in/dilnoor-singh-08895b379?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 10,
    name: "Garima Narula",
    imageUrl: "/corepic/Garima Narula.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 11,
    name: "Gulnaaz Kaur Dhillon",
    imageUrl: "/corepic/Gulnaaz Kaur Dhillon.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 12,
    name: "Gunraj Kaur",
    imageUrl: "/corepic/GUNRAJ_KAUR.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/gunraj.k27",
    },
  },
  {
    id: 13,
    name: "Gunraj Singh",
    imageUrl: "/corepic/Gunraj Singh.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/gunraj_07?igsi=MXd2Y29pM3V5bmN4NQ==",
      linkedin:
        "https://www.linkedin.com/in/gunraj-singh-921939287?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 14,
    name: "Gurleen Kaur",
    imageUrl: "/corepic/Gurleen.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 15,
    name: "Hartaj Singh",
    imageUrl: "/corepic/Hartaj.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/hartaj_sullar",
    },
  },
  {
    id: 16,
    name: "Hitajveer Singh Dhindsa",
    imageUrl: "/corepic/Hitajveer Singh Dhindsa.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/dhindsa_hitaj?igsi=NDlmYmRjOWhveHdy",
      linkedin:
        "https://www.linkedin.com/in/hitajveer-singh-dhindsa-74a8b9384?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 17,
    name: "Jaiveer Singh Sidhu",
    imageUrl: "/corepic/jaiveer.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/jaiveersidhus",
    },
  },
  {
    id: 18,
    name: "Jashan Chauhan",
    imageUrl: "/corepic/JJASHAN.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/jasshaannn",
    },
  },
  {
    id: 19,
    name: "Jivitesh Partap Singh",
    imageUrl: "/corepic/Jivetesh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/jivi.2202/",
      linkedin: "https://www.linkedin.com/in/jivitesh-partap-singh-05360137b",
    },
  },
  {
    id: 20,
    name: "Jobanpreet Singh Dhaliwal",
    imageUrl: "/corepic/Jobanpreet Singh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 21,
    name: "Karmanjot Singh",
    imageUrl: "/corepic/Karmanjot.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 22,
    name: "Karnaaz Kaur",
    imageUrl: "/corepic/Karnaaz Kaur.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/karnaaz_19?igsi=Ymp0MWVzN2w5ZXV4",
      linkedin:
        "https://www.linkedin.com/in/karnaaz-kaur-04255237a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 23,
    name: "Manmeet Singh Malhotra",
    imageUrl: "/corepic/m.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 24,
    name: "Nishtha Uppal",
    imageUrl: "/corepic/nishta.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/thisisnishthauppal",
      
      linkedin: "https://www.linkedin.com/in/nishtha-uppal-46865737b",
    },
  },
  {
    id: 25,
    name: "Parminderjeet Singh",
    imageUrl: "/corepic/Parminderjeet Singh.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 26,
    name: "Parneet Singh",
    imageUrl: "/corepic/Parneet.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 27,
    name: "Ramanbir Singh",
    imageUrl: "/corepic/Ramanbir.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/itz_rmn_gill?igsi=MXU3ampjZ2lzZnd2eg%3D%3D&utm_source=qrQ",
      linkedin:
        "https://www.linkedin.com/in/ramanbir-singh-318b23393?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 28,
    name: "Ravaljot Kaur Ahluwalia",
    imageUrl: "/corepic/Ravaljot Kaur.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 29,
    name: "Ravneet Sandhu",
    imageUrl: "/corepic/Ravneet Kaur Sandhu.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/Ravneeettt___",
    },
  },
  {
    id: 30,
    name: "Saanvi Aggarwal",
    imageUrl: "/corepic/Saanvi Aggarwal.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/aggarwal_saanvii",
      linkedin:
        "https://www.linkedin.com/in/saanvi-aggarwal-43943a37a?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 31,
    name: "Sabiha Bhandohal",
    imageUrl: "/corepic/Sabiha.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 32,
    name: "Sameer",
    imageUrl: "/corepic/sameer.jpeg", // TODO: add photo — placeholder, will show initials until filled in
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/its_sameer1406?igsi=dnkxYTZhZmNtYW16&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/sameer-saini-41131737a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 33,
    name: "Samridh Chopra",
    imageUrl: "/corepic/Samridh Chopra.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 34,
    name: "Sehajpal Singh Cheema",
    imageUrl: "/corepic/Sehajpal Singhh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/sehajcheema.12",
    },
  },
  {
    id: 35,
    name: "Sehajpreet Singh",
    imageUrl: "/corepic/Sehajpreet Singh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/_sehaj_saini_?igsi=bzhnZTlhejQycThm&utm_source=qr",
      linkedin:
        "https://www.linkedin.com/in/sehajpreet-singh-667a5833a?utm_source=share_via&utm_content=profile&utm_medium=member_ios",
    },
  },
  {
    id: 36,
    name: "Shubhneet Kaur Sandhu",
    imageUrl: "/corepic/Shubhneet Kaur.jpg",
    bio: "", // TODO: add bio
    socialLinks: {
      linkedin:
        "https://www.linkedin.com/in/shubhneet-kaur-ab98092b3?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
  {
    id: 37,
    name: "Simargeet Kaur",
    imageUrl: "",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 38,
    name: "Suhani Nagpal",
    imageUrl: "/corepic/Suhani Nagpal.jpg",
    bio: "", // TODO: add bio
    socialLinks: {},
  },
  {
    id: 39,
    name: "Sukhmanjot Singh Sandhu",
    imageUrl: "/corepic/Sukhmanjot Singh.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/sukhmanjxt",
    },
  },
  {
    id: 40,
    name: "Talveen Kaur",
    imageUrl: "/corepic/Talveen Kaur.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram: "https://www.instagram.com/talveen24",
    },
  },
  {
    id: 41,
    name: "Tanveer Singh",
    imageUrl: "/corepic/TAN.jpeg",
    bio: "", // TODO: add bio
    socialLinks: {
      instagram:
        "https://www.instagram.com/tanveer.singhh_?igsi=YmdxanZrbW93cmxl",
      linkedin:
        "https://www.linkedin.com/in/tanveer-singh-06153a362?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    },
  },
];

// Gets initials from name e.g. "Jasman Kaur" → "JK"
const getInitials = (name: string) => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
};

const CoreTeam = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <>
      <App_Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-20 py-20 md:py-28 lg:py-32">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-amber-100/30 to-transparent"></div>
        <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-orange-100/20 blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 rounded-full bg-red-100/20 blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-6"
          >
            <span className="text-amber-600 font-medium uppercase tracking-wider text-sm accent-text">
              Meet Our Team
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hero-title text-center mb-6 punjabi-accent"
          >
            The Core Team Behind <br /> Virsa Cultural Society
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-gray-600 body-large text-center max-w-2xl mx-auto mb-12"
          >
            Dedicated individuals working together to preserve and celebrate the
            rich heritage of Punjabi culture.
          </motion.p>
          <div className="flex items-center justify-center mb-16">
            <div className="h-px w-12 bg-amber-300"></div>
            <div className="h-1 w-24 mx-2 rounded-full bg-amber-400"></div>
            <div className="h-px w-12 bg-amber-300"></div>
          </div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {coreTeamMembers.map((member) => (
              <motion.div
                key={member.id}
                variants={itemVariants}
                className="punjabi-card-hover rounded-xl overflow-hidden bg-white shadow-lg"
              >
                {/* Image or Initials Placeholder */}
                <div className="relative h-80 overflow-hidden bg-gradient-to-br from-amber-800 to-amber-600 flex items-center justify-center group">
                  {member.imageUrl ? (
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  ) : (
                    <span className="text-5xl font-bold text-white/80 select-none">
                      {getInitials(member.name)}
                    </span>
                  )}

                  {/* Hover overlay with social links */}
                  <div className="absolute inset-0 bg-gradient-to-t from-amber-900/90 via-amber-800/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="flex space-x-4">
                      {member.socialLinks?.instagram && (
                        <a
                          href={member.socialLinks.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-amber-300 transition-colors"
                        >
                          <FaInstagram size={20} />
                        </a>
                      )}
                      {member.socialLinks?.linkedin && (
                        <a
                          href={member.socialLinks.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white hover:text-amber-300 transition-colors"
                        >
                          <FaLinkedin size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="card-title text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <div className="w-12 h-1 bg-amber-400 rounded-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="section-title text-gray-900 mb-6">
              Join Our Cultural Journey
            </h2>
            <p className="text-gray-600 body-text mb-8">
              Interested in becoming part of our team or volunteering for our
              events? We&apos;re always looking for passionate individuals to
              help preserve and celebrate Punjabi culture.
            </p>
            <button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white rounded-full shadow-lg transition-all duration-300 transform hover:-translate-y-1 button-text">
              Get Involved
            </button>
          </motion.div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default CoreTeam;
