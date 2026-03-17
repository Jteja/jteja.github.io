'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  const sections = {
    home: 'Introduction',
    experience: 'Work Experience',
    skills: 'Technical Arsenal',
    projects: 'AI Projects',
    contact: 'Get in Touch'
  };

  const experience = [
    {
      company: 'Mimecast',
      role: 'Site Reliability Engineer II',
      period: 'Feb 2023 – May 2025',
      location: 'Boston, MA',
      highlights: [
        'Led EKS migration achieving zero-downtime deployment',
        'Reduced alert noise by 40% with intelligent Grafana rules',
        'Automated AWS infrastructure with modular Terraform',
        'Designed SLO/SLI frameworks for 99.9% uptime'
      ]
    },
    {
      company: 'Fannie Mae',
      role: 'Site Reliability Engineer',
      period: 'Nov 2021 – Jan 2023',
      location: 'Reston, VA',
      highlights: [
        'Architected SLO/SLI monitoring for trading platforms',
        'Reduced operational toil by 45% through automation',
        'Optimized DynamoDB for high-performance workloads',
        'Improved false positives by 35% with smart alerting'
      ]
    },
    {
      company: 'Vanguard',
      role: 'Linux / DevOps Engineer',
      period: 'Mar 2020 – Oct 2021',
      location: 'Malvern, PA',
      highlights: [
        'Managed enterprise TLM platform operations',
        'Reduced deployment time by 50% with Ansible Tower',
        'Built end-to-end Jenkins CI/CD pipelines'
      ]
    }
  ];

  const projects = [
    {
      name: 'jidockwork.com',
      description: 'Multi-tenant AI chatbot platform',
      tech: ['n8n', 'PostgreSQL', 'OpenAI API', 'Docker', 'Cloudflare Tunnel'],
      highlights: [
        'Serving restaurants, salons, dental offices',
        'JWT authentication with bcrypt encryption',
        'Dark glass morphism UI with Nginx hosting',
        'Dynamic menu integration across WordPress & GoDaddy'
      ]
    },
    {
      name: 'DeployMind AI Agent',
      description: 'CI/CD monitoring intelligence',
      tech: ['GitLab', 'PagerDuty', 'Grafana', 'n8n', 'PostgreSQL'],
      highlights: [
        'Automated incident detection and response',
        'Six-table schema for comprehensive tracking',
        'Integration with existing DevOps stack'
      ]
    },
    {
      name: 'DevOps Anomaly Detector',
      description: 'Prometheus metrics AI analysis',
      tech: ['Prometheus', 'Python', 'ML Models', 'Grafana'],
      highlights: [
        'Context compression for efficient querying',
        'Conversational log analysis',
        '8-week MVP roadmap delivered'
      ]
    }
  ];

  const skills = {
    'Cloud & Infrastructure': ['AWS (EKS, RDS, S3, Lambda)', 'Kubernetes', 'Docker', 'Terraform', 'Ansible'],
    'AI & Automation': ['n8n Workflows', 'OpenAI API', 'LLM Integration', 'Multi-tenant Architecture'],
    'Observability': ['Prometheus', 'Grafana', 'Thanos', 'Splunk', 'CloudWatch', 'PagerDuty'],
    'CI/CD & DevOps': ['Jenkins', 'GitLab', 'Helm', 'Nexus', 'SonarQube'],
    'Programming': ['Python', 'Bash/Shell', 'SQL', 'JavaScript', 'YAML']
  };

  const downloadResume = () => {
    // Trigger download of the resume
    window.open('/Jesmi_Kolipaka_Resume.docx', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-gray-100 font-mono">
      {/* Animated grid background */}
      <div className="fixed inset-0 bg-grid-pattern opacity-10"></div>
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-transparent to-slate-950/50"></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2"
            >
              <span className="text-cyan-400 text-2xl">❯</span>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                jesmi.kolipaka
              </span>
            </motion.div>
            
            <div className="flex gap-6">
              {Object.entries(sections).map(([key, label], i) => (
                <motion.button
                  key={key}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setActiveSection(key)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    activeSection === key
                      ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                      : 'text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10'
                  }`}
                >
                  {label}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main content */}
      <div className="relative z-10 pt-24 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeSection === 'home' && (
              <motion.div
                key="home"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-8"
              >
                {/* Hero section with terminal aesthetic */}
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8 shadow-2xl shadow-cyan-500/10">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-cyan-500/20">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-gray-500 text-sm ml-4">bash - jesmi@portfolio</span>
                  </div>
                  
                  <div className="space-y-4 font-mono">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <span className="text-cyan-400">jesmi@sre</span>
                      <span className="text-gray-500">:</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-gray-500">$ </span>
                      <span className="text-gray-300">whoami</span>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="pl-4 space-y-2"
                    >
                      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        Jesmi Kolipaka
                      </h1>
                      <p className="text-xl text-gray-400">
                        Site Reliability Engineer | AI Automation Architect
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6 }}
                      className="pt-4"
                    >
                      <span className="text-cyan-400">jesmi@sre</span>
                      <span className="text-gray-500">:</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-gray-500">$ </span>
                      <span className="text-gray-300">cat mission.txt</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="pl-4 text-gray-300 leading-relaxed"
                    >
                      Building resilient systems at scale while pioneering AI-driven automation.
                      <br/>6+ years transforming infrastructure reliability across FinTech and CyberSecurity.
                      <br/>Currently architecting multi-tenant AI solutions at <span className="text-cyan-400">jidockwork.com</span>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.0 }}
                      className="pt-6 flex gap-4"
                    >
                      <button
                        onClick={downloadResume}
                        className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
                      >
                        📄 Download Resume
                      </button>
                      <button
                        onClick={() => setActiveSection('projects')}
                        className="px-6 py-3 border border-cyan-500/50 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all"
                      >
                        🚀 View Projects
                      </button>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 }}
                      className="pt-4"
                    >
                      <span className="text-cyan-400">jesmi@sre</span>
                      <span className="text-gray-500">:</span>
                      <span className="text-blue-400">~</span>
                      <span className="text-gray-500">$ </span>
                      {showCursor && <span className="bg-cyan-400 text-slate-900">_</span>}
                    </motion.div>
                  </div>
                </div>

                {/* Quick stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { label: 'Years Experience', value: '6+', icon: '⏱️' },
                    { label: 'Companies Served', value: '5', icon: '🏢' },
                    { label: 'Active AI Project', value: 'Live', icon: '🤖' }
                  ].map((stat, i) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4 + i * 0.1 }}
                      className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 text-center hover:border-cyan-500/50 transition-all"
                    >
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-3xl font-bold text-cyan-400">{stat.value}</div>
                      <div className="text-gray-400 mt-1">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Work Experience
                </h2>
                
                {experience.map((job, i) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">{job.company}</h3>
                        <p className="text-lg text-gray-300">{job.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-gray-400">{job.period}</p>
                        <p className="text-sm text-gray-500">{job.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {job.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeSection === 'skills' && (
              <motion.div
                key="skills"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Technical Arsenal
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(skills).map(([category, items], i) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all"
                    >
                      <h3 className="text-xl font-bold text-cyan-400 mb-4">{category}</h3>
                      <div className="flex flex-wrap gap-2">
                        {items.map((skill, j) => (
                          <span
                            key={j}
                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-lg text-sm text-gray-300 hover:bg-cyan-500/20 transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeSection === 'projects' && (
              <motion.div
                key="projects"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  AI & Automation Projects
                </h2>
                
                {projects.map((project, i) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="bg-slate-900/50 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-6 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-cyan-400">{project.name}</h3>
                        <p className="text-gray-400">{project.description}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm text-blue-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, j) => (
                        <li key={j} className="flex items-start gap-3 text-gray-300">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeSection === 'contact' && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="max-w-3xl mx-auto"
              >
                <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
                  Get in Touch
                </h2>
                
                <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/30 p-8">
                  <div className="space-y-6">
                    {[
                      { icon: '📧', label: 'Email', value: 'jesmiteja17@gmail.com', link: 'mailto:jesmiteja17@gmail.com' },
                      { icon: '📱', label: 'Phone', value: '(646) 220-3217', link: 'tel:6462203217' },
                      { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/jesmi-k-b533641a0', link: 'https://www.linkedin.com/in/jesmi-k-b533641a0' },
                      { icon: '📍', label: 'Location', value: 'Greater Boston, MA', link: null }
                    ].map((contact, i) => (
                      <motion.div
                        key={contact.label}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-center gap-4 p-4 rounded-lg hover:bg-cyan-500/10 transition-all"
                      >
                        <span className="text-3xl">{contact.icon}</span>
                        <div className="flex-1">
                          <div className="text-sm text-gray-400">{contact.label}</div>
                          {contact.link ? (
                            <a
                              href={contact.link}
                              className="text-cyan-400 hover:text-cyan-300 transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {contact.value}
                            </a>
                          ) : (
                            <div className="text-gray-300">{contact.value}</div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgb(6 182 212 / 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(6 182 212 / 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
        
        .bg-gradient-radial {
          background: radial-gradient(circle at 50% 50%, var(--tw-gradient-stops));
        }
      `}</style>
    </div>
  );
}
