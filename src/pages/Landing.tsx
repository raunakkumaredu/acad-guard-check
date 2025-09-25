import { Link } from "react-router-dom";
import { Shield, Zap, Database, Eye, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const Landing = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Verification",
      description: "Upload a certificate and get results in seconds, not days."
    },
    {
      icon: Database,
      title: "Comprehensive Database",
      description: "Cross-check against verified academic records and institutions."
    },
    {
      icon: Eye,
      title: "AI Forgery Detection",
      description: "Advanced ML algorithms detect tampering and fraudulent certificates."
    },
    {
      icon: Shield,
      title: "Blockchain Anchored",
      description: "Immutable verification records stored on blockchain for trust."
    }
  ];

  const stats = [
    { value: "99.7%", label: "Accuracy Rate" },
    { value: "< 8s", label: "Average Verification Time" },
    { value: "1M+", label: "Certificates Verified" },
    { value: "500+", label: "Partner Institutions" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm text-white backdrop-blur-sm mb-8">
              <Shield className="h-4 w-4 mr-2" />
              Trusted by 500+ Institutions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Verify Academic Certificates{" "}
              <span className="bg-gradient-to-r from-teal-200 to-cyan-200 bg-clip-text text-transparent">
                in Seconds
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Upload a certificate. Get a trusted verdict. Protect hiring and public programs 
              with our AI-powered verification platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link to="/verify">
                  <Zap className="h-5 w-5 mr-2" />
                  Try Demo
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
              >
                <Link to="/how-it-works">
                  For Institutions
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              How ACADEMIX Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our advanced verification pipeline combines OCR, AI forgery detection, 
              and blockchain anchoring for unmatched accuracy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevation transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Simple 3-Step Process
            </h2>
            <p className="text-xl text-muted-foreground">
              Get started with certificate verification in under a minute
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Upload Certificate",
                  description: "Drag and drop your PDF or image file for instant processing"
                },
                {
                  step: "02", 
                  title: "AI Analysis",
                  description: "Our OCR and ML systems extract data and detect potential forgeries"
                },
                {
                  step: "03",
                  title: "Get Results",
                  description: "Receive instant verification with detailed analysis and blockchain proof"
                }
              ].map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white text-xl font-bold mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                  {index < 2 && (
                    <ArrowRight className="hidden md:block absolute top-8 -right-4 h-6 w-6 text-muted-foreground" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Verify Certificates?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of organizations using ACADEMIX to protect their hiring 
            and admission processes from fraudulent certificates.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/verify">
                Start Verification
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              <Link to="/how-it-works">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;