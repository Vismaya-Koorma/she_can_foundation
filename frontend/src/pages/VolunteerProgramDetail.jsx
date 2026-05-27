import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Users, 
  BookOpen, 
  Monitor, 
  Heart, 
  ChevronLeft, 
  CheckCircle2, 
  ArrowRight,
  Target,
  Sparkles
} from 'lucide-react';

// Import local images
import communityImg from '../assets/images/community-programs.png';
import mentorshipImg from '../assets/images/student-mentorship.png';
import literacyImg from '../assets/images/digital-literacy.png';

const programData = {
  'community-programs': {
    title: 'Community Programs',
    description: 'Empowering local neighborhoods through sustainable outreach and collaborative support initiatives.',
    icon: Users,
    color: 'from-blue-500 to-indigo-500',
    image: communityImg,
    objectives: [
      'Foster local leadership and community engagement.',
      'Provide essential resources to underserved families.',
      'Organize monthly neighborhood cleanup and revitalization drives.',
      'Establish community support networks for crisis management.'
    ],
    activities: [
      {
        name: 'Weekly Food Drives',
        detail: 'Distributing healthy meals and groceries to families in need every Saturday morning.'
      },
      {
        name: 'Community Gardening',
        detail: 'Transforming urban spaces into green, productive gardens for local produce.'
      },
      {
        name: 'Youth Sports Leagues',
        detail: 'Organizing inclusive sports events to promote health and teamwork among local children.'
      }
    ]
  },
  'student-mentorship': {
    title: 'Student Mentorship',
    description: 'Connecting aspiring students with experienced professionals to bridge the gap between education and career.',
    icon: BookOpen,
    color: 'from-emerald-500 to-teal-500',
    image: mentorshipImg,
    objectives: [
      'Provide career guidance and academic support.',
      'Develop essential soft skills and professional etiquette.',
      'Offer real-world insights into various industries.',
      'Build confidence and goal-setting capabilities in students.'
    ],
    activities: [
      {
        name: 'One-on-One Mentoring',
        detail: 'Pairing students with mentors for personalized monthly guidance sessions.'
      },
      {
        name: 'Career Workshops',
        detail: 'Interactive sessions on resume building, interview prep, and networking.'
      },
      {
        name: 'Industry Field Trips',
        detail: 'Organized visits to corporate offices and startups to witness professional environments.'
      }
    ]
  },
  'digital-literacy': {
    title: 'Digital Literacy',
    description: 'Equipping individuals with the essential digital skills needed to thrive in the modern technological era.',
    icon: Monitor,
    color: 'from-purple-500 to-fuchsia-500',
    image: literacyImg,
    objectives: [
      'Eliminate the digital divide in marginalized communities.',
      'Teach basic computer operations and internet navigation.',
      'Provide training on essential office software and tools.',
      'Promote online safety, privacy, and digital citizenship.'
    ],
    activities: [
      {
        name: 'Basic Computing Classes',
        detail: 'Step-by-step training for beginners on using Windows/Mac and basic hardware.'
      },
      {
        name: 'Online Job Search Prep',
        detail: 'Teaching how to find jobs, apply online, and use professional platforms like LinkedIn.'
      },
      {
        name: 'Coding for Kids',
        detail: 'Fun, logic-based workshops introducing children to the world of programming.'
      }
    ]
  },
  'women-empowerment': {
    title: 'Women Empowerment',
    description: 'Championing the rights, independence, and leadership of women through education and entrepreneurship.',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    // Fallback Unsplash image as quota for 4th generation was reached
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1200',
    objectives: [
      'Promote financial independence through vocational training.',
      'Support women entrepreneurs with micro-grants and mentoring.',
      'Raise awareness about legal rights and healthcare.',
      'Create safe spaces for dialogue, support, and collective action.'
    ],
    activities: [
      {
        name: 'Skill Development Workshops',
        detail: 'Training in tailoring, handicrafts, digital marketing, and financial management.'
      },
      {
        name: 'Leadership Seminars',
        detail: 'Inspiring talks and training sessions focused on building confidence and public speaking.'
      },
      {
        name: 'Support Groups',
        detail: 'Weekly meetups providing emotional support and a platform for sharing experiences.'
      }
    ]
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function VolunteerProgramDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const program = programData[slug];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Program not found</h2>
          <Link to="/" className="text-primary-600 hover:text-primary-700 font-medium">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const Icon = program.icon;

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={program.image} 
            alt={program.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px]"></div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            <button 
              onClick={() => navigate('/')}
              className="group mb-8 inline-flex items-center text-white/80 hover:text-white transition-colors"
            >
              <div className="mr-2 p-2 rounded-full bg-white/10 group-hover:bg-white/20 transition-all">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <span className="font-medium">Back to Home</span>
            </button>

            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${program.color} text-white mb-6 shadow-xl`}>
              <Icon className="w-8 h-8" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
              {program.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed">
              {program.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column: Objectives */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Our Objectives</h2>
              </div>
              
              <div className="space-y-4">
                {program.objectives.map((obj, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 dark:text-slate-300 leading-relaxed font-medium">{obj}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column: Activities & CTA */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 rounded-lg bg-accent-100 dark:bg-accent-900/30 text-accent-600 dark:text-accent-400">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">Key Activities</h2>
              </div>

              <div className="grid gap-6 mb-12">
                {program.activities.map((act, idx) => (
                  <motion.div 
                    key={idx}
                    variants={fadeInUp}
                    className="group p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all"
                  >
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {act.name}
                      <ArrowRight className="w-4 h-4 ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{act.detail}</p>
                  </motion.div>
                ))}
              </div>

              {/* Join Us CTA */}
              <motion.div 
                variants={fadeInUp}
                className="relative overflow-hidden rounded-[2rem] p-8 md:p-10 bg-slate-900 dark:bg-slate-800 text-white shadow-2xl"
              >
                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${program.color} opacity-20 blur-3xl`}></div>
                <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-4">Ready to make a difference?</h3>
                  <p className="text-slate-300 mb-8 text-lg">
                    Join the {program.title} team today and contribute to a cause that truly matters.
                  </p>
                  <Link 
                    to="/join-us"
                    state={{ interest: program.title }}
                    className={`px-8 py-4 rounded-xl bg-gradient-to-r ${program.color} text-white font-bold text-lg hover:scale-105 transition-transform shadow-lg flex items-center justify-center gap-2`}
                  >
                    Join Us Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
