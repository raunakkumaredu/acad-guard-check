import { Link } from "react-router-dom";
import { Upload, Cpu, Database, Shield, Eye, CheckCircle, ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";

const HowItWorks = () => {
  const processSteps = [
    {
      icon: Upload,
      title: "Document Upload",
      description: "Upload your certificate as PDF or image file",
      details: [
        "Drag and drop interface for easy uploading",
        "Support for PDF, JPG, PNG formats up to 20MB",
        "Instant file validation and preprocessing"
      ]
    },
    {
      icon: Cpu,
      title: "OCR & Data Extraction", 
      description: "Advanced OCR extracts key information from your certificate",
      details: [
        "State-of-the-art Tesseract OCR with 95%+ accuracy",
        "Extracts name, ID, grades, dates, and institution",
        "Confidence scoring for each extracted field"
      ]
    },
    {
      icon: Eye,
      title: "AI Forgery Detection",
      description: "Machine learning algorithms detect potential tampering",
      details: [
        "Font consistency and layout analysis",
        "Signature and seal authenticity verification", 
        "Photo matching and metadata validation"
      ]
    },
    {
      icon: Database,
      title: "Database Verification",
      description: "Cross-reference against verified academic records",
        details: [
          "Cross-reference with 420+ verified institutions globally",
          "Intelligent matching algorithms with error tolerance",
          "Real-time queries against authoritative databases"
        ]
    },
    {
      icon: Shield,
      title: "Blockchain Anchoring",
      description: "Immutable proof of verification stored on blockchain",
      details: [
        "SHA-256 hash anchoring to public blockchain",
        "Tamper-proof verification records",
        "Cryptographic proof of authenticity"
      ]
    }
  ];

  const features = [
    {
      icon: CheckCircle,
      title: "99.7% Accuracy",
      description: "Industry-leading accuracy rates with continuous ML model improvements"
    },
    {
      icon: FileText,
      title: "Comprehensive Reports", 
      description: "Detailed PDF reports with evidence and blockchain proof"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and compliance with data protection laws"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            How ACADEMIX Works
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our advanced verification pipeline combines cutting-edge technology 
            to deliver instant, reliable certificate authentication.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {processSteps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex flex-col lg:flex-row items-center gap-8">
                    {/* Step Number and Icon */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-gradient-primary flex items-center justify-center">
                          <step.icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <Card className="shadow-card">
                        <CardHeader>
                          <CardTitle className="text-xl">{step.title}</CardTitle>
                          <p className="text-muted-foreground">{step.description}</p>
                        </CardHeader>
                        <CardContent>
                          <ul className="space-y-2">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start">
                                <CheckCircle className="h-4 w-4 text-success mt-0.5 mr-2 flex-shrink-0" />
                                <span className="text-sm text-foreground">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>

                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-primary to-accent" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose ACADEMIX?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for accuracy, security, and scalability to meet enterprise needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card text-center">
                <CardHeader>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-primary mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Technical Specifications
              </h2>
              <p className="text-xl text-muted-foreground">
                Enterprise-grade infrastructure built for scale and reliability
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Average Processing</span>
                    <span className="font-semibold">6.2 seconds</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Text Recognition</span>
                    <span className="font-semibold">96.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fraud Detection</span>
                    <span className="font-semibold">98.4%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">System Availability</span>
                    <span className="font-semibold">99.97%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Security & Compliance</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Encryption</span>
                    <span className="font-semibold">AES-256</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Data Retention</span>
                    <span className="font-semibold">90 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Compliance</span>
                    <span className="font-semibold">DPDP, GDPR</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Infrastructure</span>
                    <span className="font-semibold">AWS, Kubernetes</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the power of AI-driven certificate verification today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
              <Link to="/verify">
                Try Demo Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm"
            >
              <Link to="/admin-login">
                Access Admin Panel
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;