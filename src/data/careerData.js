export const careerData = {
  "platform": {
    "name": "CareerPath India",
    "language": "English",
    "version": "2.0",
    "target_users": "Students after 10th grade",
    "vision": "Empowering students with clear career direction through interactive technology"
  },
  "career_flow": {
    "10th_completed": {
      "question": "Have you completed your 10th grade?",
      "options": {
        "yes": {
          "next": "stream_selection"
        },
        "no": {
          "message": "Focus on completing your 10th grade board exams with good grades. You can start preparing for scholarship exams like NTSE."
        }
      }
    },
    "stream_selection": {
      "question": "Which path interests you the most?",
      "options": {
        "science": {
          "label": "Science Stream",
          "description": "For those who love logic, technology, medicine, and research.",
          "next": "science_substreams"
        },
        "commerce": {
          "label": "Commerce Stream",
          "description": "Ideal for business, finance, economics, and management.",
          "next": "commerce_substreams"
        },
        "arts": {
          "label": "Arts & Humanities",
          "description": "For creative minds, social sciences, law, and public service.",
          "next": "arts_substreams"
        },
        "diploma": {
          "label": "Diploma / Polytechnic",
          "description": "Practical, skill-based courses for early career entry.",
          "next": "diploma_substreams"
        },
        "sports": {
          "label": "Sports & Physical Education",
          "description": "For athletes, coaches, and fitness enthusiasts.",
          "next": "sports_careers"
        },
        "agriculture": {
          "label": "Agriculture & Food Technology",
          "description": "For those interested in farming, food science, and sustainable agriculture.",
          "next": "agriculture_careers"
        },
        "hospitality": {
          "label": "Hospitality & Tourism",
          "description": "For careers in hotels, culinary arts, travel, and event management.",
          "next": "hospitality_careers"
        },
        "fashion": {
          "label": "Fashion & Design",
          "description": "For creative individuals interested in fashion, interior, and product design.",
          "next": "fashion_careers"
        },
        "media": {
          "label": "Media & Mass Communication",
          "description": "For aspiring journalists, content creators, filmmakers, and broadcasters.",
          "next": "media_careers"
        },
        "paramedical": {
          "label": "Paramedical Sciences",
          "description": "For healthcare support roles like physiotherapy, lab technology, and nursing.",
          "next": "paramedical_careers"
        }
      }
    },

    // --- SCIENCE BRANCH ---
    "science_substreams": {
      "question": "Choose your Science combination",
      "options": {
        "PCM": {
          "label": "PCM (Physics, Chemistry, Maths)",
          "description": "Engineering, Architecture, Technology, Defense",
          "next": "pcm_careers"
        },
        "PCB": {
          "label": "PCB (Physics, Chemistry, Biology)",
          "description": "Medicine, Allied Health, Research",
          "next": "pcb_careers"
        },
        "PCMB": {
          "label": "PCMB (Both Maths & Bio)",
          "description": "Opens doors to both Engineering and Medical fields",
          "next": "pcmb_careers"
        }
      }
    },
    "pcm_careers": {
      "question": "Explore PCM Career Paths",
      "options": {
        "engineering": {
          "label": "Engineering (B.Tech/B.E.)",
          "type": "career",
          "data": {
            "title": "Engineering",
            "description": "Apply scientific principles to design and build systems.",
            "education_path": ["12th PCM", "Entrance Exams", "B.Tech/B.E. (4 Years)"],
            "required_skills": ["Problem Solving", "Mathematics", "Technical Aptitude"],
            "entrance_exams": ["JEE Main", "JEE Advanced", "BITSAT", "VITEEE", "MHT-CET"],
            "salary_range": "₹4 - 25+ LPA",
            "future_scope": "High demand in CS, AI, Robotics, and Core sectors.",
            "roadmap": ["Clear 12th with PCM", "Crack JEE/State CET", "Choose Branch (CS, Mech, Civil, etc.)", "Internships & Projects"],
            "top_colleges": ["IIT Madras", "IIT Delhi", "IIT Bombay", "NIT Trichy", "BITS Pilani", "VIT Vellore"],
            "pros": ["High salary potential", "Global opportunities", "Innovation-driven work"],
            "cons": ["High competition", "Rapidly changing tech stack", "Sedentary lifestyle"]
          }
        },
        "architecture": {
          "label": "Architecture (B.Arch)",
          "type": "career",
          "data": {
            "title": "Architect",
            "description": "Design and plan buildings and structures.",
            "education_path": ["12th PCM", "NATA/JEE Paper 2", "B.Arch (5 Years)"],
            "required_skills": ["Creativity", "Drawing", "Visualisation"],
            "entrance_exams": ["NATA", "JEE Main Paper 2"],
            "salary_range": "₹4 - 15 LPA",
            "future_scope": "Growing with urbanization and smart cities.",
            "roadmap": ["Develop Sketching Skills", "Clear NATA", "Join Architecture College", "Build Portfolio"],
            "top_colleges": ["IIT Kharagpur", "IIT Roorkee", "SPA Delhi", "CEPT Ahmedabad", "NIT Calicut"],
            "pros": ["Creative satisfaction", "Tangible impact", "Freelance potential"],
            "cons": ["Long working hours", "Slow initial career growth", "High stress deadlines"]
          }
        },
        "defense": {
          "label": "Defense Services (NDA)",
          "type": "career",
          "data": {
            "title": "Defense Officer",
            "description": "Serve the nation in Army, Navy, or Air Force.",
            "education_path": ["12th PCM", "NDA Exam", "SSB Interview", "Training"],
            "required_skills": ["Physical Fitness", "Leadership", "Discipline"],
            "entrance_exams": ["NDA & NA Exam"],
            "salary_range": "₹56,100 - 2.5 Lakh/month",
            "future_scope": "Prestigious and secure career.",
            "roadmap": ["Prepare for NDA Written", "Physical Conditioning", "Clear SSB Interview", "3-4 Years Training"],
            "top_colleges": ["National Defence Academy (NDA) Pune", "Indian Military Academy (IMA) Dehradun", "Indian Naval Academy (INA) Ezhimala"],
            "pros": ["Job security", "Respect and prestige", "Perks and allowances"],
            "cons": ["High risk to life", "Strict discipline", "Frequent transfers"]
          }
        },
        "pilot": {
          "label": "Commercial Pilot",
          "type": "career",
          "data": {
            "title": "Commercial Pilot",
            "description": "Fly aircraft for airlines.",
            "education_path": ["12th PCM", "Pilot Training (CPL)", "Flying Hours"],
            "required_skills": ["Focus", "Technical Knowledge", "Decision Making"],
            "entrance_exams": ["IGRUA", "Cadet Programs"],
            "salary_range": "₹10 - 40+ LPA",
            "future_scope": "High growth in aviation sector.",
            "roadmap": ["12th PCM", "Medical Class 1", "Join Flying School", "Obtain CPL License"]
          }
        },
        "merchant_navy": {
          "label": "Merchant Navy",
          "type": "career",
          "data": {
            "title": "Merchant Navy Officer",
            "description": "Work on commercial ships transporting cargo.",
            "education_path": ["12th PCM", "IMU-CET", "B.Sc Nautical Science / B.Tech Marine"],
            "required_skills": ["Physical Stamina", "Adaptability"],
            "entrance_exams": ["IMU-CET"],
            "salary_range": "₹6 - 20+ LPA (Tax Free often)",
            "future_scope": "Global opportunities.",
            "roadmap": ["Clear IMU-CET", "Complete Degree", "On-board Training"]
          }
        }
      }
    },
    "pcb_careers": {
      "question": "Explore PCB Career Paths",
      "options": {
        "doctor": {
          "label": "Doctor (MBBS)",
          "type": "career",
          "data": {
            "title": "Doctor (MBBS)",
            "description": "Diagnose and treat patients.",
            "education_path": ["12th PCB", "NEET UG", "MBBS (5.5 Years)", "MD/MS (Optional)"],
            "required_skills": ["Empathy", "Patience", "Deep Medical Knowledge"],
            "entrance_exams": ["NEET UG"],
            "salary_range": "₹8 - 30+ LPA",
            "future_scope": "Evergreen and highly respected.",
            "roadmap": ["Crack NEET with high rank", "Complete MBBS", "Internship", "PG Entrance (NEET PG)"],
            "top_colleges": ["AIIMS New Delhi", "CMC Vellore", "PGIMER Chandigarh", "JIPMER Puducherry", "KGMU Lucknow"],
            "pros": ["High respect", "Job satisfaction", "Good earning potential"],
            "cons": ["Long study duration", "High stress", "Expensive education"]
          }
        },
        "dentist": {
          "label": "Dentist (BDS)",
          "type": "career",
          "data": {
            "title": "Dentist",
            "description": "Specialist in oral health.",
            "education_path": ["12th PCB", "NEET UG", "BDS (5 Years)"],
            "required_skills": ["Dexterity", "Attention to Detail"],
            "entrance_exams": ["NEET UG"],
            "salary_range": "₹3 - 12 LPA",
            "future_scope": "Stable, option for private practice.",
            "roadmap": ["Crack NEET", "Complete BDS", "Start Practice or MDS"],
            "top_colleges": ["Maulana Azad Institute of Dental Sciences", "Manipal College of Dental Sciences", "Government Dental College Mumbai"],
            "pros": ["Regular work hours", "Private practice option", "Good income"],
            "cons": ["Physical strain (posture)", "High setup cost for clinic", "Saturation in cities"]
          }
        },
        "ayush": {
          "label": "AYUSH (BAMS/BHMS)",
          "type": "career",
          "data": {
            "title": "Ayurveda/Homeopathy Doctor",
            "description": "Alternative medicine systems.",
            "education_path": ["12th PCB", "NEET UG", "BAMS/BHMS"],
            "required_skills": ["Holistic Understanding", "Patience"],
            "entrance_exams": ["NEET UG"],
            "salary_range": "₹3 - 10 LPA",
            "future_scope": "Growing global interest in alternative medicine.",
            "roadmap": ["Crack NEET", "Join AYUSH College", "Practice"],
            "top_colleges": ["Institute of Medical Sciences BHU", "National Institute of Ayurveda Jaipur", "National Institute of Homoeopathy Kolkata"],
            "pros": ["Growing demand", "Holistic approach", "Less emergency stress"],
            "cons": ["Lower initial pay than MBBS", "Slower recognition", "Limited surgical scope"]
          }
        },
        "pharmacy": {
          "label": "Pharmacy (B.Pharm)",
          "type": "career",
          "data": {
            "title": "Pharmacist",
            "description": "Prepare and dispense medications.",
            "education_path": ["12th PCB/PCM", "State CET/Bitsat", "B.Pharm (4 Years)"],
            "required_skills": ["Chemistry", "Accuracy"],
            "entrance_exams": ["State CETs", "GPAT (for Masters)"],
            "salary_range": "₹3 - 8 LPA",
            "future_scope": "Pharma industry is booming.",
            "roadmap": ["B.Pharm", "M.Pharm or MBA", "R&D or Marketing"],
            "top_colleges": ["NIPER Mohali", "Jamia Hamdard New Delhi", "ICT Mumbai", "BITS Pilani"],
            "pros": ["Diverse career options", "Good growth in R&D", "Stable industry"],
            "cons": ["Repetitive work in retail", "Requires continuous learning", "Moderate starting salary"]
          }
        },
        "biotech": {
          "label": "Biotechnology",
          "type": "career",
          "data": {
            "title": "Biotechnologist",
            "description": "Use biology to create products.",
            "education_path": ["12th PCB/PCM", "B.Sc/B.Tech Biotech"],
            "required_skills": ["Research", "Lab Skills"],
            "entrance_exams": ["CUET", "JEE (for B.Tech)"],
            "salary_range": "₹4 - 12 LPA",
            "future_scope": "Research, Genetics, Pharma.",
            "roadmap": ["Bachelor's Degree", "Master's for Research roles"],
            "top_colleges": ["IIT Delhi", "IIT Kharagpur", "JNU New Delhi", "Anna University Chennai"],
            "pros": ["Cutting-edge science", "Impact on health/agri", "Global research opportunities"],
            "cons": ["Long R&D cycles", "Higher studies often required", "Limited jobs in India compared to West"]
          }
        }
      }
    },
    "pcmb_careers": {
      "question": "With PCMB, you have all options!",
      "options": {
        "engineering_route": {
          "label": "Engineering Route",
          "next": "pcm_careers"
        },
        "medical_route": {
          "label": "Medical Route",
          "next": "pcb_careers"
        },
        "research": {
          "label": "Pure Science / Research",
          "type": "career",
          "data": {
            "title": "Scientist / Researcher",
            "description": "Conduct experiments and advance knowledge.",
            "education_path": ["12th PCMB", "B.Sc", "M.Sc", "PhD"],
            "required_skills": ["Curiosity", "Analytical Thinking"],
            "entrance_exams": ["IISER Aptitude Test", "NEST", "CUET"],
            "salary_range": "₹6 - 20 LPA (varies by role)",
            "future_scope": "R&D in ISRO, DRDO, CSIR.",
            "roadmap": ["B.Sc/Integrated M.Sc", "Clear CSIR-NET", "PhD"],
            "top_colleges": ["IISc Bangalore", "IISERs", "NISER Bhubaneswar", "St. Stephen's College Delhi"],
            "pros": ["Intellectual freedom", "Contribution to knowledge", "Respect"],
            "cons": ["Long academic path", "Funding challenges", "Lower initial pay"]
          }
        }
      }
    },

    // --- COMMERCE BRANCH ---
    "commerce_substreams": {
      "question": "Explore Commerce Areas",
      "options": {
        "professional": {
          "label": "Professional Certifications",
          "description": "CA, CS, CMA",
          "next": "commerce_professional"
        },
        "degree": {
          "label": "Degree Courses",
          "description": "B.Com, BBA, BMS",
          "next": "commerce_degrees"
        }
      }
    },
    "commerce_professional": {
      "question": "Professional Finance Careers",
      "options": {
        "ca": {
          "label": "Chartered Accountant (CA)",
          "type": "career",
          "data": {
            "title": "Chartered Accountant",
            "description": "Expert in auditing, taxation, and accounting.",
            "education_path": ["12th Commerce", "CA Foundation", "Intermediate", "Articleship", "Final"],
            "required_skills": ["Number Crunching", "Law", "Hard Work"],
            "entrance_exams": ["ICAI Exams"],
            "salary_range": "₹7 - 30+ LPA",
            "future_scope": "Essential for every business.",
            "roadmap": ["Register with ICAI", "Clear Foundation", "Articleship Training", "Clear Final"],
            "top_colleges": ["ICAI (Institute of Chartered Accountants of India) - Not a college but the body"],
            "pros": ["High prestige", "Financial stability", "Entrepreneurial potential"],
            "cons": ["Extremely tough exams", "Long duration", "High pressure"]
          }
        },
        "cs": {
          "label": "Company Secretary (CS)",
          "type": "career",
          "data": {
            "title": "Company Secretary",
            "description": "Corporate governance and legal compliance expert.",
            "education_path": ["12th Commerce", "CSEET", "Executive", "Professional"],
            "required_skills": ["Corporate Law", "Communication"],
            "entrance_exams": ["ICSI Exams"],
            "salary_range": "₹5 - 20 LPA",
            "future_scope": "High demand in corporate sector.",
            "roadmap": ["Register with ICSI", "Clear CSEET", "Training", "Clear Professional"],
            "top_colleges": ["ICSI (Institute of Company Secretaries of India)"],
            "pros": ["Corporate leadership role", "Good work-life balance", "Respect"],
            "cons": ["Theory-heavy", "Niche field", "Limited to corporate sector"]
          }
        },
        "cma": {
          "label": "Cost Management Accountant",
          "type": "career",
          "data": {
            "title": "CMA",
            "description": "Costing, pricing, and financial management.",
            "education_path": ["12th Commerce", "CMA Foundation", "Inter", "Final"],
            "required_skills": ["Cost Analysis", "Finance"],
            "entrance_exams": ["ICMAI Exams"],
            "salary_range": "₹6 - 20 LPA",
            "future_scope": "Manufacturing and Service industries.",
            "roadmap": ["Register with ICMAI", "Complete Levels", "Practical Training"],
            "top_colleges": ["ICMAI (Institute of Cost Accountants of India)"],
            "pros": ["Strategic role", "Global recognition", "Good for manufacturing sector"],
            "cons": ["Less popular than CA", "Niche focus", "Tough exams"]
          }
        }
      }
    },
    "commerce_degrees": {
      "question": "Management & Commerce Degrees",
      "options": {
        "bba": {
          "label": "BBA / BMS",
          "type": "career",
          "data": {
            "title": "Management Professional",
            "description": "Business administration and management roles.",
            "education_path": ["12th Commerce", "BBA/BMS", "MBA (Recommended)"],
            "required_skills": ["Leadership", "Strategy", "Communication"],
            "entrance_exams": ["IPMAT", "CUET", "SET"],
            "salary_range": "₹4 - 12 LPA (Higher after MBA)",
            "future_scope": "Corporate management, Entrepreneurship.",
            "roadmap": ["Entrance Exam", "BBA Degree", "Work Ex", "MBA"],
            "top_colleges": ["IIM Indore (IPM)", "Shaheed Sukhdev Delhi", "NMIMS Mumbai", "Christ University Bangalore", "Symbiosis Pune"],
            "pros": ["Early entry to management", "Practical learning", "Networking"],
            "cons": ["MBA often needed for high growth", "Generalist role initially", "Expensive private colleges"]
          }
        },
        "bcom": {
          "label": "B.Com (Hons)",
          "type": "career",
          "data": {
            "title": "Finance/Accounting Professional",
            "description": "Foundation in commerce subjects.",
            "education_path": ["12th Commerce", "B.Com", "M.Com/MBA"],
            "required_skills": ["Accounting", "Finance"],
            "entrance_exams": ["CUET"],
            "salary_range": "₹3 - 8 LPA",
            "future_scope": "Banking, Insurance, Finance.",
            "roadmap": ["B.Com", "Specialization Courses", "Job or Higher Studies"],
            "top_colleges": ["SRCC Delhi", "Hindu College Delhi", "Lady Shri Ram College Delhi", "Loyola College Chennai", "St. Xaviers Kolkata"],
            "pros": ["Versatile degree", "Good foundation for CA/MBA", "Affordable education"],
            "cons": ["General degree", "High competition for top colleges", "Lower starting salary without specialization"]
          }
        },
        "economics": {
          "label": "BA/B.Sc Economics",
          "type": "career",
          "data": {
            "title": "Economist",
            "description": "Analyze economic trends and data.",
            "education_path": ["12th Commerce/Arts/Science", "BA/B.Sc Economics", "MA Economics"],
            "required_skills": ["Analysis", "Maths", "Research"],
            "entrance_exams": ["CUET"],
            "salary_range": "₹6 - 20 LPA",
            "future_scope": "Policy making, Data Science, Finance.",
            "roadmap": ["Bachelor's in Economics", "Master's", "PhD for research"],
            "top_colleges": ["St. Stephens Delhi", "Delhi School of Economics", "SRCC Delhi", "Presidency University Kolkata"],
            "pros": ["Intellectually stimulating", "High impact", "Data science overlap"],
            "cons": ["Maths heavy", "Master's usually required", "Academic focus"]
          }
        }
      }
    },

    // --- ARTS BRANCH ---
    "arts_substreams": {
      "question": "Explore Arts & Humanities",
      "options": {
        "law_public": {
          "label": "Law & Public Service",
          "next": "law_public_careers"
        },
        "creative": {
          "label": "Creative & Media",
          "next": "creative_careers"
        },
        "social": {
          "label": "Social Sciences",
          "next": "social_careers"
        }
      }
    },
    "law_public_careers": {
      "question": "Law & Civil Services",
      "options": {
        "lawyer": {
          "label": "Lawyer (BA LLB)",
          "type": "career",
          "data": {
            "title": "Lawyer / Advocate",
            "description": "Legal practice and advisory.",
            "education_path": ["12th Any Stream", "CLAT/AILET", "5-Year LLB"],
            "required_skills": ["Argumentation", "Reading", "Logic"],
            "entrance_exams": ["CLAT", "AILET", "LSAT"],
            "salary_range": "₹5 - 25+ LPA",
            "future_scope": "Corporate Law, Litigation, Judiciary.",
            "roadmap": ["Crack CLAT", "Join NLU", "Internships", "Bar Council Enrollment"],
            "top_colleges": ["NLSIU Bangalore", "NALSAR Hyderabad", "NLU Delhi", "WBNUJS Kolkata"],
            "pros": ["Intellectual challenge", "Social impact", "High earning in corporate law"],
            "cons": ["High stress", "Long hours", "Slow initial growth in litigation"]
          }
        },
        "upsc": {
          "label": "Civil Services (IAS/IPS)",
          "type": "career",
          "data": {
            "title": "IAS / IPS Officer",
            "description": "Top-level government administration.",
            "education_path": ["Graduation (Any)", "UPSC CSE Exam"],
            "required_skills": ["General Knowledge", "Ethics", "Decision Making"],
            "entrance_exams": ["UPSC CSE"],
            "salary_range": "₹56,100+ (Plus Perks & Power)",
            "future_scope": "Service to nation.",
            "roadmap": ["Complete Graduation", "Prepare for UPSC", "Clear Prelims, Mains, Interview"]
          }
        }
      }
    },
    "creative_careers": {
      "question": "Creative & Media Careers",
      "options": {
        "design": {
          "label": "Design (Fashion/Product)",
          "type": "career",
          "data": {
            "title": "Designer",
            "description": "Fashion, Interior, or Product design.",
            "education_path": ["12th Any Stream", "NIFT/NID Exam", "B.Des"],
            "required_skills": ["Creativity", "Sketching", "Trends"],
            "entrance_exams": ["NIFT", "NID DAT", "UCEED"],
            "salary_range": "₹4 - 15 LPA",
            "future_scope": "Growing creative economy.",
            "roadmap": ["Build Portfolio", "Crack Entrance", "Design School", "Portfolio"]
          }
        },
        "journalism": {
          "label": "Journalism & Mass Comm",
          "type": "career",
          "data": {
            "title": "Journalist / Media Pro",
            "description": "News, content creation, and PR.",
            "education_path": ["12th Any Stream", "BJMC / BMM"],
            "required_skills": ["Communication", "Writing", "Curiosity"],
            "entrance_exams": ["University Entrance Exams"],
            "salary_range": "₹3 - 10 LPA",
            "future_scope": "Digital Media is booming.",
            "roadmap": ["Degree in Mass Comm", "Internships", "Build Portfolio"]
          }
        },
        "hotel_mgmt": {
          "label": "Hotel Management",
          "type": "career",
          "data": {
            "title": "Hotel Manager / Chef",
            "description": "Hospitality and culinary arts.",
            "education_path": ["12th Any Stream", "NCHMCT JEE", "B.Sc Hospitality"],
            "required_skills": ["Service Aptitude", "Communication"],
            "entrance_exams": ["NCHMCT JEE"],
            "salary_range": "₹3 - 12 LPA",
            "future_scope": "Tourism and Travel sector.",
            "roadmap": ["Crack NCHMCT JEE", "Join IHM", "Industrial Training"]
          }
        }
      }
    },
    "social_careers": {
      "question": "Social Sciences & Teaching",
      "options": {
        "psychology": {
          "label": "Psychology",
          "type": "career",
          "data": {
            "title": "Psychologist",
            "description": "Study human behavior and mental health.",
            "education_path": ["12th Arts/Science", "BA/B.Sc Psychology", "MA Psychology"],
            "required_skills": ["Empathy", "Listening", "Analysis"],
            "entrance_exams": ["CUET"],
            "salary_range": "₹4 - 12 LPA",
            "future_scope": "Mental health awareness is rising.",
            "roadmap": ["Bachelor's", "Master's", "M.Phil/PhD for Clinical License"]
          }
        },
        "teaching": {
          "label": "Teaching / Professor",
          "type": "career",
          "data": {
            "title": "Teacher / Professor",
            "description": "Educate the next generation.",
            "education_path": ["Graduation", "B.Ed", "CTET/NET"],
            "required_skills": ["Communication", "Patience", "Subject Knowledge"],
            "entrance_exams": ["CTET", "UGC-NET"],
            "salary_range": "₹3 - 10 LPA (Schools), ₹8+ LPA (Colleges)",
            "future_scope": "Always in demand.",
            "roadmap": ["Degree", "B.Ed", "Clear TET", "Join School"]
          }
        }
      }
    },

    // --- DIPLOMA BRANCH ---
    "diploma_substreams": {
      "question": "Diploma & Polytechnic Options",
      "options": {
        "poly_eng": {
          "label": "Engineering Diploma",
          "description": "Polytechnic (3 Years)",
          "next": "poly_careers"
        },
        "vocational": {
          "label": "Vocational / ITI",
          "description": "Skill-based (1-2 Years)",
          "next": "vocational_careers"
        },
        "paramedical": {
          "label": "Paramedical Diploma",
          "description": "Healthcare support",
          "next": "paramedical_careers"
        }
      }
    },
    "poly_careers": {
      "question": "Polytechnic Engineering",
      "options": {
        "junior_engineer": {
          "label": "Junior Engineer (Civil/Mech/Elec)",
          "type": "career",
          "data": {
            "title": "Junior Engineer",
            "description": "Technical roles in industries and government.",
            "education_path": ["10th", "Polytechnic Diploma (3 Years)"],
            "required_skills": ["Technical Skills", "Practical Knowledge"],
            "entrance_exams": ["State Polytechnic Exams (JEECUP, etc.)"],
            "salary_range": "₹2.5 - 6 LPA",
            "future_scope": "Railways, PWD, Manufacturing.",
            "roadmap": ["Clear Polytechnic Exam", "Complete Diploma", "Job or Lateral Entry to B.Tech"]
          }
        },
        "cs_diploma": {
          "label": "CS / IT Diploma",
          "type": "career",
          "data": {
            "title": "IT Technician / Developer",
            "description": "Entry level IT and hardware roles.",
            "education_path": ["10th", "Diploma in CS/IT"],
            "required_skills": ["Coding Basics", "Hardware"],
            "entrance_exams": ["State Polytechnic Exams"],
            "salary_range": "₹2.5 - 5 LPA",
            "future_scope": "IT Support, Web Dev.",
            "roadmap": ["Diploma", "Certifications", "Job or B.Tech"]
          }
        }
      }
    },
    "vocational_careers": {
      "question": "Vocational & ITI",
      "options": {
        "iti_tech": {
          "label": "ITI Technician",
          "type": "career",
          "data": {
            "title": "Technician (Electrician/Fitter)",
            "description": "Skilled trade work.",
            "education_path": ["10th", "ITI Course (1-2 Years)"],
            "required_skills": ["Hands-on Skills", "Tool Usage"],
            "entrance_exams": ["AITT"],
            "salary_range": "₹2 - 5 LPA",
            "future_scope": "Self-employment, Industries.",
            "roadmap": ["Join ITI", "Apprenticeship", "Job"]
          }
        },
        "digital_mkt": {
          "label": "Digital Marketing",
          "type": "career",
          "data": {
            "title": "Digital Marketer",
            "description": "Online marketing and SEO.",
            "education_path": ["10th/12th", "Certification/Diploma"],
            "required_skills": ["Social Media", "Analytics", "Creativity"],
            "entrance_exams": ["None (Portfolio based)"],
            "salary_range": "₹3 - 8 LPA",
            "future_scope": "High growth in digital age.",
            "roadmap": ["Course", "Freelancing", "Agency Job"]
          }
        }
      }
    },
    "paramedical_careers": {
      "question": "Paramedical Diplomas",
      "options": {
        "dmlt": {
          "label": "DMLT (Lab Tech)",
          "type": "career",
          "data": {
            "title": "Medical Lab Technician",
            "description": "Perform diagnostic lab tests.",
            "education_path": ["10th/12th", "Diploma in MLT"],
            "required_skills": ["Lab Equipment", "Accuracy"],
            "entrance_exams": ["Institute Exams"],
            "salary_range": "₹2.5 - 5 LPA",
            "future_scope": "Hospitals and Diagnostic Labs.",
            "roadmap": ["Diploma", "Internship", "Job"]
          }
        }
      }
    },
    "sports_careers": {
      "question": "Sports & Fitness Careers",
      "options": {
        "athlete": {
          "label": "Professional Athlete",
          "type": "career",
          "data": {
            "title": "Professional Athlete",
            "description": "Compete in sports at national/international level.",
            "education_path": ["10th/12th", "Sports Training", "Represent State/Nation"],
            "required_skills": ["Physical Fitness", "Discipline", "Talent"],
            "entrance_exams": ["Sports Trials"],
            "salary_range": "Variable (Sponsorships + Prize Money)",
            "future_scope": "Coaching, Commentary after retirement.",
            "roadmap": ["Join Academy", "District/State Level", "National Level"],
            "top_colleges": ["NSNIS Patiala", "LNIPE Gwalior", "IGIPESS Delhi"],
            "pros": ["Fame", "Passion-driven", "Travel"],
            "cons": ["Short career span", "High injury risk", "Uncertain income"]
          }
        },
        "coach": {
          "label": "Sports Coach",
          "type": "career",
          "data": {
            "title": "Sports Coach",
            "description": "Train and mentor athletes.",
            "education_path": ["12th Any Stream", "BPEd", "MPEd", "Diploma in Coaching"],
            "required_skills": ["Leadership", "Strategy", "Communication"],
            "entrance_exams": ["Physical Efficiency Tests"],
            "salary_range": "₹3 - 10 LPA",
            "future_scope": "Schools, Academies, Pro Leagues.",
            "roadmap": ["BPEd", "NIS Diploma", "Assistant Coach", "Head Coach"],
            "top_colleges": ["LNIPE Gwalior", "LNCPE Trivandrum", "Amity School of Physical Education"],
            "pros": ["Stay connected to sports", "Respect", "Job satisfaction"],
            "cons": ["Physical demand", "Weekend work", "Slow growth initially"]
          }
        },
        "sports_mgmt": {
          "label": "Sports Management",
          "type": "career",
          "data": {
            "title": "Sports Manager",
            "description": "Manage teams, events, and athlete careers.",
            "education_path": ["12th Any Stream", "BBA Sports Mgmt", "MBA Sports Mgmt"],
            "required_skills": ["Management", "Marketing", "Negotiation"],
            "entrance_exams": ["SMAT", "CAT (for MBA)"],
            "salary_range": "₹4 - 15 LPA",
            "future_scope": "IPL, ISL, Pro Kabaddi Leagues.",
            "roadmap": ["Degree in Sports Mgmt", "Internship with Leagues", "Job"],
            "top_colleges": ["IISM Mumbai", "NASM Mumbai", "Symbiosis Pune"],
            "pros": ["Exciting industry", "Networking", "Growth potential"],
            "cons": ["High pressure", "Event-based hours", "Niche market"]
          }
        }
      }
    },

    // --- AGRICULTURE & FOOD TECHNOLOGY ---
    "agriculture_careers": {
      "question": "Choose your Agriculture career path",
      "options": {
        "agricultural_scientist": {
          "label": "Agricultural Scientist",
          "type": "career",
          "data": {
            "title": "Agricultural Scientist",
            "description": "Research and develop new farming techniques and crop varieties.",
            "education_path": ["12th (PCM/PCB)", "B.Sc Agriculture", "M.Sc/Ph.D (Optional)"],
            "required_skills": ["Research", "Analytical thinking", "Problem-solving"],
            "entrance_exams": ["ICAR AIEEA", "State Agriculture Entrance Exams"],
            "salary_range": "₹3 - 12 LPA",
            "future_scope": "High demand in agri-tech startups, research institutions, and government organizations.",
            "roadmap": ["B.Sc Agriculture", "Internships in research labs", "M.Sc for specialization", "Jobs in ICAR/Private sector"],
            "top_colleges": ["IARI New Delhi", "PAU Ludhiana", "TNAU Coimbatore", "ANGRAU Hyderabad"],
            "pros": ["Contribute to food security", "Government job opportunities", "Research funding"],
            "cons": ["Fieldwork in rural areas", "Lower starting salary", "Slow career growth"]
          }
        },
        "food_technologist": {
          "label": "Food Technologist",
          "type": "career",
          "data": {
            "title": "Food Technologist",
            "description": "Develop and improve food processing and preservation methods.",
            "education_path": ["12th (PCM/PCB)", "B.Tech Food Technology", "M.Tech (Optional)"],
            "required_skills": ["Chemistry", "Quality control", "Innovation"],
            "entrance_exams": ["JEE Main", "State CETs", "ICAR AIEEA"],
            "salary_range": "₹3.5 - 10 LPA",
            "future_scope": "Growing industry with FMCG companies like ITC, Nestle, and startups.",
            "roadmap": ["B.Tech Food Tech", "Internship in food companies", "Quality Analyst", "R&D roles"],
            "top_colleges": ["NIFTEM Sonipat", "ICT Mumbai", "CFTRI Mysore", "AU Coimbatore"],
            "pros": ["Industry growth", "Good packages in MNCs", "Innovation opportunities"],
            "cons": ["Shift work in factories", "Chemical exposure", "Limited entrepreneurship"]
          }
        },
        "horticulturist": {
          "label": "Horticulturist",
          "type": "career",
          "data": {
            "title": "Horticulturist",
            "description": "Cultivate fruits, vegetables, flowers, and ornamental plants.",
            "education_path": ["12th (PCB)", "B.Sc Horticulture", "M.Sc (Optional)"],
            "required_skills": ["Plant knowledge", "Patience", "Business skills"],
            "entrance_exams": ["ICAR AIEEA", "State Agriculture Entrance"],
            "salary_range": "₹2.5 - 8 LPA",
            "future_scope": "Export market, organic farming, and landscape design are booming.",
            "roadmap": ["B.Sc Horticulture", "Practical training", "Own nursery/Farm or Job"],
            "top_colleges": ["YSP UHF Solan", "TNAU Coimbatore", "Dr. PDKV Akola"],
            "pros": ["Entrepreneurship potential", "Creative work", "Eco-friendly"],
            "cons": ["Seasonal income", "Weather dependent", "Physical labor"]
          }
        }
      }
    },

    // --- HOSPITALITY & TOURISM ---
    "hospitality_careers": {
      "question": "Choose your Hospitality career path",
      "options": {
        "hotel_manager": {
          "label": "Hotel Manager",
          "type": "career",
          "data": {
            "title": "Hotel Manager",
            "description": "Manage hotel operations, staff, and guest services.",
            "education_path": ["12th Any Stream", "BHM (Bachelor of Hotel Management)", "MBA in Hospitality (Optional)"],
            "required_skills": ["Leadership", "Customer service", "Communication"],
            "entrance_exams": ["NCHMCT JEE", "AIHMCT WAT"],
            "salary_range": "₹3 - 15 LPA",
            "future_scope": "Tourism boom in India, international chains expanding.",
            "roadmap": ["BHM Degree", "Internship in 5-star hotels", "Assistant Manager", "General Manager"],
            "top_colleges": ["IHM Mumbai", "IHM Delhi", "Christ University Bangalore", "Oberoi OCLD"],
            "pros": ["International career", "People skills", "Travel opportunities"],
            "cons": ["Long hours", "Weekend work", "High stress"]
          }
        },
        "chef": {
          "label": "Chef / Culinary Expert",
          "type": "career",
          "data": {
            "title": "Professional Chef",
            "description": "Create culinary masterpieces in hotels, restaurants, or as entrepreneur.",
            "education_path": ["12th Any Stream", "Diploma/B.Sc in Culinary Arts"],
            "required_skills": ["Creativity", "Precision", "Stamina"],
            "entrance_exams": ["NCHMCT JEE", "Institute-specific tests"],
            "salary_range": "₹2.5 - 12+ LPA",
            "future_scope": "Celebrity chefs, food startups, YouTube channels, catering businesses.",
            "roadmap": ["Culinary Diploma", "Commis Chef", "Sous Chef", "Executive Chef"],
            "top_colleges": ["IHM Pusa", "Welcomgroup Graduate School", "IHM Bangalore"],
            "pros": ["Creative expression", "Entrepreneurship", "Global opportunities"],
            "cons": ["Hot kitchen environment", "Long standing hours", "High pressure"]
          }
        },
        "travel_consultant": {
          "label": "Travel & Tourism Consultant",
          "type": "career",
          "data": {
            "title": "Travel Consultant",
            "description": "Plan trips, book tickets, and create tour packages for clients.",
            "education_path": ["12th Any Stream", "Diploma/Degree in Tourism", "Certification courses"],
            "required_skills": ["Geography", "Sales", "Networking"],
            "entrance_exams": ["Not mandatory"],
            "salary_range": "₹2 - 8 LPA",
            "future_scope": "Growth in domestic tourism, adventure tourism, and travel tech.",
            "roadmap": ["Tourism Diploma", "Join travel agency", "Build client base", "Start own agency"],
            "top_colleges": ["IITTM Gwalior", "IHM Institutes", "Amity School of Hospitality"],
            "pros": ["Travel perks", "Flexible work", "People interaction"],
            "cons": ["Commission-based income", "Seasonal work", "Digital competition"]
          }
        }
      }
    },

    // --- FASHION & DESIGN ---
    "fashion_careers": {
      "question": "Choose your Design career path",
      "options": {
        "fashion_designer": {
          "label": "Fashion Designer",
          "type": "career",
          "data": {
            "title": "Fashion Designer",
            "description": "Create clothing, accessories, and fashion collections.",
            "education_path": ["12th Any Stream", "B.Des Fashion Design", "NIFT/NID Courses"],
            "required_skills": ["Creativity", "Sketching", "Fabric knowledge"],
            "entrance_exams": ["NIFT Entrance", "NID DAT", "UCEED"],
            "salary_range": "₹3 - 15+ LPA",
            "future_scope": "E-commerce boom, sustainable fashion, celebrity styling.",
            "roadmap": ["Fashion Design Degree", "Internship with brands", "Assistant Designer", "Own Label"],
            "top_colleges": ["NIFT Delhi", "NIFT Mumbai", "NID Ahmedabad", "Pearl Academy"],
            "pros": ["Creative freedom", "Celebrity connections", "Global market"],
            "cons": ["Highly competitive", "Long hours during shows", "Initial struggle"]
          }
        },
        "interior_designer": {
          "label": "Interior Designer",
          "type": "career",
          "data": {
            "title": "Interior Designer",
            "description": "Design and decorate indoor spaces for homes, offices, and commercial spaces.",
            "education_path": ["12th Any Stream", "B.Des Interior Design", "Diploma courses"],
            "required_skills": ["Spatial awareness", "Software (AutoCAD, SketchUp)", "Client management"],
            "entrance_exams": ["NIFT", "NID DAT", "CEED"],
            "salary_range": "₹3 - 12 LPA",
            "future_scope": "Real estate boom, smart homes, sustainable design.",
            "roadmap": ["Interior Design Degree", "Apprenticeship", "Freelance/Firm", "Own Studio"],
            "top_colleges": ["CEPT Ahmedabad", "NID", "JJ School Mumbai", "Rachana Sansad"],
            "pros": ["Creative satisfaction", "Self-employment", "Good earnings"],
            "cons": ["Client dependency", "Budget constraints", "Execution challenges"]
          }
        },
        "textile_designer": {
          "label": "Textile Designer",
          "type": "career",
          "data": {
            "title": "Textile Designer",
            "description": "Design patterns, prints, and fabrics for clothing and home furnishings.",
            "education_path": ["12th Any Stream", "B.Des Textile Design"],
            "required_skills": ["Color theory", "Pattern making", "Digital design"],
            "entrance_exams": ["NIFT", "NID"],
            "salary_range": "₹2.5 - 10 LPA",
            "future_scope": "Handloom revival, export market, eco-friendly textiles.",
            "roadmap": ["Textile Design Degree", "Work with manufacturers", "Freelance designer"],
            "top_colleges": ["NIFT Gandhinagar", "NID", "Sophia Polytechnic Mumbai"],
            "pros": ["Blend of art and tech", "Export opportunities", "Cultural heritage"],
            "cons": ["Manufacturing dependencies", "Market competition", "Niche field"]
          }
        }
      }
    },

    // --- MEDIA & MASS COMMUNICATION ---
    "media_careers": {
      "question": "Choose your Media career path",
      "options": {
        "journalist": {
          "label": "Journalist / Reporter",
          "type": "career",
          "data": {
            "title": "Journalist",
            "description": "Report news, investigate stories, and inform the public.",
            "education_path": ["12th Any Stream", "BA/B.Sc in Journalism", "PG Diploma"],
            "required_skills": ["Writing", "Investigation", "Communication"],
            "entrance_exams": ["DUET", "IPU CET", "Symbiosis Entrance"],
            "salary_range": "₹2.5 - 10+ LPA",
            "future_scope": "Digital journalism, data journalism, investigative reporting.",
            "roadmap": ["Journalism Degree", "Internship in media houses", "Reporter", "Senior Journalist/Editor"],
            "top_colleges": ["IIMC Delhi", "Symbiosis Pune", "Xavier's Mumbai", "ACJ Chennai"],
            "pros": ["Impactful work", "Public recognition", "Dynamic field"],
            "cons": ["Irregular hours", "Safety risks", "Job insecurity"]
          }
        },
        "content_creator": {
          "label": "Content Creator / Influencer",
          "type": "career",
          "data": {
            "title": "Digital Content Creator",
            "description": "Create videos, blogs, and social media content for digital platforms.",
            "education_path": ["12th Any Stream", "Degree in any field (not mandatory)", "Online courses"],
            "required_skills": ["Video editing", "Storytelling", "Marketing"],
            "entrance_exams": ["Not required"],
            "salary_range": "₹0 - Unlimited (depends on reach)",
            "future_scope": "Fastest growing field, brand collaborations, monetization.",
            "roadmap": ["Identify niche", "Create content consistently", "Grow audience", "Monetize"],
            "top_colleges": ["Not applicable - skill-based"],
            "pros": ["Be your own boss", "Unlimited earning", "Creative freedom"],
            "cons": ["Unstable income", "Algorithm dependency", "Public scrutiny"]
          }
        },
        "film_director": {
          "label": "Film Director / Filmmaker",
          "type": "career",
          "data": {
            "title": "Film Director",
            "description": "Direct movies, web series, documentaries, and commercials.",
            "education_path": ["12th Any Stream", "Film School/Mass Comm", "Practical experience"],
            "required_skills": ["Vision", "Leadership", "Storytelling"],
            "entrance_exams": ["FTII Entrance", "JET", "NIFT (for animation)"],
            "salary_range": "₹3 - 50+ LPA (project-based)",
            "future_scope": "OTT platforms, regional cinema, international collaborations.",
            "roadmap": ["Film school", "Assistant Director", "Short films", "Feature film"],
            "top_colleges": ["FTII Pune", "SRFTI Kolkata", "Satyajit Ray Film Institute", "Whistling Woods"],
            "pros": ["Creative control", "Fame", "Artistic expression"],
            "cons": ["High competition", "Unstable income", "Long project cycles"]
          }
        }
      }
    },

    // --- PARAMEDICAL SCIENCES ---
    "paramedical_careers": {
      "question": "Choose your Paramedical career path",
      "options": {
        "physiotherapist": {
          "label": "Physiotherapist",
          "type": "career",
          "data": {
            "title": "Physiotherapist",
            "description": "Help patients recover from injuries through physical therapy and exercise.",
            "education_path": ["12th (PCB)", "BPT (Bachelor of Physiotherapy)", "MPT (Optional)"],
            "required_skills": ["Anatomy knowledge", "Patience", "Communication"],
            "entrance_exams": ["NEET (in some states)", "State entrance exams"],
            "salary_range": "₹3 - 10 LPA",
            "future_scope": "Sports physiotherapy, geriatric care, rehab centers.",
            "roadmap": ["BPT Degree", "Internship", "Registration with council", "Private practice/Hospital"],
            "top_colleges": ["Jamia Hamdard Delhi", "CMC Vellore", "Manipal University", "KEM Mumbai"],
            "pros": ["Helping people", "Self-practice option", "Growing demand"],
            "cons": ["Physical strain", "Long hours", "Registration hassles"]
          }
        },
        "medical_lab_tech": {
          "label": "Medical Lab Technologist",
          "type": "career",
          "data": {
            "title": "Medical Lab Technologist",
            "description": "Conduct lab tests, analyze samples, and assist in diagnosis.",
            "education_path": ["12th (PCB)", "B.Sc MLT", "Diploma in MLT"],
            "required_skills": ["Attention to detail", "Lab techniques", "Analytical skills"],
            "entrance_exams": ["State entrance exams"],
            "salary_range": "₹2.5 - 7 LPA",
            "future_scope": "Diagnostic centers, hospitals, research labs growing rapidly.",
            "roadmap": ["B.Sc/Diploma MLT", "Internship", "Lab job", "Senior technician"],
            "top_colleges": ["AIIMS Delhi", "CMC Vellore", "JIPMER Puducherry", "BHU Varanasi"],
            "pros": ["Job security", "Less patient interaction stress", "Steady growth"],
            "cons": ["Repetitive work", "Exposure to infections", "Night shifts"]
          }
        },
        "nursing": {
          "label": "Nursing",
          "type": "career",
          "data": {
            "title": "Nurse (Staff Nurse / ANM / GNM)",
            "description": "Provide patient care, assist doctors, and manage hospital wards.",
            "education_path": ["12th (PCB)", "GNM/B.Sc Nursing", "M.Sc Nursing (Optional)"],
            "required_skills": ["Compassion", "Stamina", "Medical knowledge"],
            "entrance_exams": ["NEET (for some)", "AIIMS Nursing", "State exams"],
            "salary_range": "₹2.5 - 8 LPA",
            "future_scope": "Global demand, nursing abroad (USA, UK, Australia), management roles.",
            "roadmap": ["B.Sc/GNM", "Internship", "Staff nurse", "Ward sister/Nursing superintendent"],
            "top_colleges": ["AIIMS Delhi", "CMC Vellore", "PGIMER Chandigarh", "Armed Forces Medical College"],
            "pros": ["Global opportunities", "Respect", "Job availability"],
            "cons": ["Long shifts", "Emotional stress", "Physical exhaustion"]
          }
        }
      }
    }
  }
};
