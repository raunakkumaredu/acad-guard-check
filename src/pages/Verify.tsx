import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import UploadCard from "@/components/UploadCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, CheckCircle, AlertTriangle, XCircle } from "lucide-react";

const Verify = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleFileUpload = (file: File) => {
    setIsProcessing(true);
    setProgress(0);

    // Simulate processing steps
    const steps = [
      { progress: 25, delay: 800 },
      { progress: 50, delay: 1200 },
      { progress: 75, delay: 1000 },
      { progress: 100, delay: 800 }
    ];

    let currentStep = 0;
    const processStep = () => {
      if (currentStep < steps.length) {
        setTimeout(() => {
          setProgress(steps[currentStep].progress);
          currentStep++;
          processStep();
        }, steps[currentStep].delay);
      } else {
        // Navigate to results page after processing
        setTimeout(() => {
          // Determine result based on filename (for demo)
          let status = "verified";
          if (file.name.toLowerCase().includes("forged") || file.name.toLowerCase().includes("fake")) {
            status = "forged";
          } else if (file.name.toLowerCase().includes("suspicious") || file.name.toLowerCase().includes("suspect")) {
            status = "suspicious";
          }
          
          navigate(`/result/${status}`);
        }, 500);
      }
    };

    processStep();
  };

  const sampleResults = [
    {
      icon: CheckCircle,
      status: "Verified",
      description: "Certificate matches database records",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: AlertTriangle,
      status: "Suspicious",
      description: "Requires manual review",
      color: "text-warning",
      bgColor: "bg-warning/10"
    },
    {
      icon: XCircle,
      status: "Forged",
      description: "Clear signs of tampering detected",
      color: "text-destructive",
      bgColor: "bg-destructive/10"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Certificate Verification
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Upload your academic certificate to verify its authenticity using our 
              AI-powered verification system.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <div className="space-y-6">
              <UploadCard
                onFileUpload={handleFileUpload}
                isProcessing={isProcessing}
                progress={progress}
              />
            </div>

            {/* Info Section */}
            <div className="space-y-6">
              {/* What We Check */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-primary" />
                    What We Verify
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    {[
                      "Student name and roll number",
                      "Certificate ID and authenticity",
                      "Institution verification",
                      "Marks and program details",
                      "Issue date and validity",
                      "Digital signatures and seals"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-success mr-3" />
                        <span className="text-sm text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Possible Results */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Possible Results</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {sampleResults.map((result, index) => (
                    <div key={index} className={`p-3 rounded-lg ${result.bgColor}`}>
                      <div className="flex items-center">
                        <result.icon className={`h-5 w-5 mr-3 ${result.color}`} />
                        <div>
                          <div className={`font-medium ${result.color}`}>
                            {result.status}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {result.description}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Security Notice */}
              <Card className="shadow-card border-primary/20">
                <CardContent className="pt-6">
                  <div className="text-center space-y-2">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-3">
                      <CheckCircle className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">Secure & Private</h3>
                    <p className="text-sm text-muted-foreground">
                      Your certificates are processed securely and deleted after verification. 
                      We comply with data protection regulations.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Verify;