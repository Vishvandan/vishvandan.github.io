import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Github, Linkedin, Mail, MapPin, ExternalLink, TrendingUp, FileText, Award, GraduationCap, Briefcase, Phone, Calculator, BarChart3, PieChart, Wallet, CreditCard } from "lucide-react";

const Index = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/documents/Vishvandan_Gukan_Resume.pdf';
    link.download = 'Vishvandan_Gukan_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <Calculator className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Vishvandan Gukan</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-muted-foreground hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-muted-foreground hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-muted-foreground hover:text-blue-600 transition-colors">Skills</a>
              <a href="#education" className="text-muted-foreground hover:text-blue-600 transition-colors">Education</a>
              <a href="#contact" className="text-muted-foreground hover:text-blue-600 transition-colors">Contact</a>
              <Button 
                onClick={handleResumeDownload}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Financial Background */}
      <section className="relative py-20 overflow-hidden">
        {/* Financial Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-12 gap-4 h-full transform rotate-12 scale-150">
              {Array.from({ length: 144 }).map((_, i) => (
                <div key={i} className="bg-blue-600 rounded-full w-2 h-2 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}></div>
              ))}
            </div>
          </div>
          {/* Floating Finance Icons */}
          <div className="absolute top-20 left-20 text-blue-200 animate-bounce">
            <BarChart3 size={48} />
          </div>
          <div className="absolute top-40 right-32 text-indigo-200 animate-bounce" style={{ animationDelay: '1s' }}>
            <PieChart size={40} />
          </div>
          <div className="absolute bottom-40 left-32 text-blue-300 animate-bounce" style={{ animationDelay: '2s' }}>
            <TrendingUp size={44} />
          </div>
          <div className="absolute bottom-20 right-20 text-indigo-300 animate-bounce" style={{ animationDelay: '1.5s' }}>
            <Calculator size={36} />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 bg-white/80 backdrop-blur shadow-lg border border-blue-100">
              <Calculator className="w-4 h-4 mr-2 text-blue-600" />
              Finance/Accounts Assistant • MBA • ACCA Student
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-sm">
              Vishvandan Gukan
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed bg-white/70 backdrop-blur rounded-lg p-6 shadow-lg border border-white/20">
              Finance/Accounts Assistant with 2+ years of experience in reconciliations, AP/AR, petty cash, and cross-currency payments. 
              MBA holder and ACCA student focused on accuracy, deadlines, and financial compliance.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mb-8">
              <div className="flex items-center gap-2 text-muted-foreground bg-white/70 backdrop-blur px-4 py-2 rounded-full shadow-lg">
                <MapPin className="w-4 h-4 text-blue-600" />
                <span>Liverpool, UK (Willing to relocate)</span>
              </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg transform hover:scale-105 transition-all">
                View My Experience <ArrowRight className="w-4 h-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 bg-white/80 backdrop-blur border-blue-200 hover:bg-blue-50 shadow-lg"
                onClick={() => window.open('https://www.linkedin.com/in/vishvandan-g-794204191', '_blank')}
              >
                <Linkedin className="w-4 h-4 text-blue-600" /> LinkedIn
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 bg-white/80 backdrop-blur border-blue-200 hover:bg-blue-50 shadow-lg"
                onClick={handleResumeDownload}
              >
                <FileText className="w-4 h-4 text-blue-600" /> Download Resume
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section with Enhanced Cards */}
      <section id="about" className="py-20 bg-gradient-to-br from-background to-blue-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Professional Summary</h2>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
              Experienced Finance/Accounts Assistant with expertise in financial reconciliations, accounts payable/receivable, 
              and cross-currency transactions in dynamic UK finance environments.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-white border-blue-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-blue-700">98% Accuracy</CardTitle>
                <CardDescription>Monthly bank statement reconciliations</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-indigo-50 to-white border-indigo-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-indigo-700">200+ Transactions</CardTitle>
                <CardDescription>AP/AR transactions processed monthly</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-white border-purple-100">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-purple-700">ACCA Student</CardTitle>
                <CardDescription>4 paper exemptions granted</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gradient-to-br from-background to-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Work Experience</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional experience across finance operations, reconciliations, and accounting support.
            </p>
          </div>
          <div className="space-y-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle>Finance Support Assistant & Cashier</CardTitle>
                    <CardDescription className="text-lg">Akshaya Picture Drome | Liverpool</CardDescription>
                  </div>
                  <Badge variant="outline">Sep 2023 - Present</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Reconciled 25+ bank statements monthly with 98% accuracy</li>
                  <li>• Managed petty cash exceeding £1,000/month and resolved discrepancies proactively</li>
                  <li>• Coordinated vendor payments and resolved 100% of invoice issues within 48 hours</li>
                  <li>• Oversaw corporate card expense reporting and travel support for senior leadership</li>
                  <li>• Reduced statement errors by 15% through meticulous invoice and PO verification</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle>Finance Assistant</CardTitle>
                    <CardDescription className="text-lg">K. Chandramoorthi & Associates | Puducherry</CardDescription>
                  </div>
                  <Badge variant="outline">Aug 2022 - Aug 2023</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Posted and reconciled 200+ AP/AR transactions monthly, ensuring ledger accuracy</li>
                  <li>• Prepared statutory audit documentation and supported compliance processes</li>
                  <li>• Enhanced financial reporting by streamlining monthly closing procedures</li>
                  <li>• Supported office coordination, appointment scheduling, and supply tracking</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle>Accounting Assistant Intern</CardTitle>
                    <CardDescription className="text-lg">Real Goods Service | Puducherry</CardDescription>
                  </div>
                  <Badge variant="outline">Mar 2022 - Jun 2022</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Maintained digital and physical financial records with 100% accuracy</li>
                  <li>• Assisted in booking and reconciling cross-entity project-based transactions</li>
                  <li>• Tracked inter-company fund transfers and ensured timely reconciliation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-br from-blue-50/50 to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Core Skills</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Technical and analytical skills developed through professional experience and continuous learning.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">Financial Operations</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Accounts Payable/Receivable</Badge>
                <Badge variant="secondary">Bank Reconciliation</Badge>
                <Badge variant="secondary">Petty Cash Handling</Badge>
                <Badge variant="secondary">Multi-Currency Transactions</Badge>
                <Badge variant="secondary">Cash Flow Forecasting</Badge>
                <Badge variant="secondary">Month-End Close</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">Technical Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">Advanced Excel</Badge>
                <Badge variant="secondary">Tally</Badge>
                <Badge variant="secondary">Xero</Badge>
                <Badge variant="secondary">Invoice Processing</Badge>
                <Badge variant="secondary">PO Verification</Badge>
                <Badge variant="secondary">Financial Reporting</Badge>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">Professional Skills</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Badge variant="secondary">ACCA Progression</Badge>
                <Badge variant="secondary">Audit Preparation</Badge>
                <Badge variant="secondary">Attention to Detail</Badge>
                <Badge variant="secondary">Deadline Management</Badge>
                <Badge variant="secondary">Problem Solving</Badge>
                <Badge variant="secondary">Team Collaboration</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gradient-to-br from-background to-indigo-50/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Education & Certifications</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive educational background in business and finance with ongoing professional development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                Education
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Master of Business Administration (MBA)</CardTitle>
                    <CardDescription>University of Chester, Liverpool, UK • 2024</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bachelor of Business Administration (BBA)</CardTitle>
                    <CardDescription>Saradha Gangadharan College, Puducherry, India • 2022</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Diploma in Accounting and Finance (DAF)</CardTitle>
                    <CardDescription>OHSC, UK • 2023</CardDescription>
                  </CardHeader>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">ACCA (In Progress)</CardTitle>
                    <CardDescription>4 paper exemptions granted based on MBA and prior qualifications</CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Key Certifications
              </h3>
              <div className="space-y-2">
                <Badge variant="outline" className="w-full justify-start p-3">Advanced Excel – CSC, India</Badge>
                <Badge variant="outline" className="w-full justify-start p-3">Financial Markets – Yale University, USA</Badge>
                <Badge variant="outline" className="w-full justify-start p-3">Behavioral Finance – Duke University, USA</Badge>
                <Badge variant="outline" className="w-full justify-start p-3">Finance for Everyone: Decisions - McMaster University, Canada</Badge>
                <Badge variant="outline" className="w-full justify-start p-3">Global Capital Markets - University of Melbourne, Australia</Badge>
                <Badge variant="outline" className="w-full justify-start p-3">Corporate Strategy – UCL, UK</Badge>
                <Badge variant="outline" className="w-full justify-start p-3">Managing the Company of the Future – University of London, UK</Badge>
                <Badge variant="outline" className="w-full justify-start p-3">Brand Management – University of London, UK</Badge>
                <Badge variant="outline" className="w-full justify-start p-3">Life Skills Programme – Barclays UK</Badge>
                <p className="text-sm text-muted-foreground mt-4">(Full list available upon request)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Get In Touch</h2>
            <p className="text-muted-foreground text-lg">
              I'm always interested in new opportunities and exciting finance roles. Let's connect!
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-blue-700">Email</h3>
              <p className="text-muted-foreground">gvishvandan@gmail.com</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-indigo-700">LinkedIn</h3>
              <p className="text-muted-foreground">www.linkedin.com/in/vishvandan-g-794204191</p>
            </div>
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold mb-2 text-purple-700">Location</h3>
              <p className="text-muted-foreground">Liverpool, UK</p>
              <p className="text-sm text-muted-foreground">(Willing to relocate)</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Card className="max-w-md mx-auto bg-white/80 backdrop-blur shadow-xl border-blue-100">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 justify-center text-blue-700">
                  <Phone className="w-5 h-5" />
                  Phone
                </CardTitle>
                <CardDescription className="text-lg font-medium">+44 7407034287</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-lg flex items-center justify-center shadow-lg">
                <Calculator className="w-5 h-5 text-slate-900" />
              </div>
              <span className="text-lg font-bold">Vishvandan Gukan</span>
            </div>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-white hover:bg-blue-800"
                onClick={() => window.open('https://www.linkedin.com/in/vishvandan-g-794204191', '_blank')}
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-white hover:bg-blue-800"
                onClick={() => window.location.href = 'mailto:gvishvandan@gmail.com'}
              >
                <Mail className="w-4 h-4" /> Email
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="gap-2 text-white hover:bg-blue-800"
                onClick={handleResumeDownload}
              >
                <FileText className="w-4 h-4" /> Resume
              </Button>
            </div>
          </div>
          <div className="border-t border-blue-700 mt-8 pt-8 text-center text-sm text-blue-100">
            <p>&copy; 2024 Vishvandan Gukan. Finance Assistant • MBA • ACCA Student</p>
            <p className="mt-2">References available upon request</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
