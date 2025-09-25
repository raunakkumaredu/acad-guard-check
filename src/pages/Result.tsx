import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import VerificationResult, { VerificationStatus } from "@/components/VerificationResult";

const Result = () => {
  const { status } = useParams<{ status: string }>();
  
  // Mock data for demonstration
  const mockData = {
    verified: {
      certificateData: {
        studentName: "Anita Verma",
        certificateId: "RJ-2020-12345",
        rollNumber: "RV20CS001",
        program: "B.Tech Computer Science",
        marks: "78.6%",
        issueDate: "2020-06-10",
        institution: "Rajasthan University"
      },
      confidence: 98,
      ocrConfidence: 96,
      forgeryScore: 2,
      anchorHash: "0x3a7b9f2e8d5c1a4b6f9e2d8c5a1b4f7e9d2c8b5a1f4e7d9c2b8f5a1e4d7c9b2f8a5",
      verificationId: "VER-2024-001234",
      timestamp: "2024-01-15 14:30:25 UTC"
    },
    suspicious: {
      certificateData: {
        studentName: "Rajesh Kumar",
        certificateId: "UP-2021-67890",
        rollNumber: "UP21EE002",
        program: "B.Tech Electrical Engineering",
        marks: "82.3%",
        issueDate: "2021-07-15",
        institution: "Uttar Pradesh Technical University"
      },
      confidence: 65,
      ocrConfidence: 78,
      forgeryScore: 45,
      anchorHash: undefined,
      verificationId: "VER-2024-001235",
      timestamp: "2024-01-15 14:32:18 UTC"
    },
    forged: {
      certificateData: {
        studentName: "Priya Sharma",
        certificateId: "MH-2019-45678",
        rollNumber: "MH19CS003",
        program: "B.Tech Computer Science",
        marks: "91.2%",
        issueDate: "2019-05-20",
        institution: "Maharashtra Institute of Technology"
      },
      confidence: 15,
      ocrConfidence: 89,
      forgeryScore: 95,
      anchorHash: undefined,
      verificationId: "VER-2024-001236",
      timestamp: "2024-01-15 14:35:42 UTC"
    }
  };

  const validStatuses: VerificationStatus[] = ["verified", "suspicious", "forged"];
  const currentStatus = validStatuses.includes(status as VerificationStatus) 
    ? (status as VerificationStatus) 
    : "verified";

  const data = mockData[currentStatus];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-8">
            <Button asChild variant="ghost" className="mb-4">
              <Link to="/verify">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Upload
              </Link>
            </Button>
            
            <div className="text-center">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Verification Complete
              </h1>
              <p className="text-muted-foreground">
                Your certificate has been processed and analyzed
              </p>
            </div>
          </div>

          {/* Verification Result */}
          <VerificationResult
            status={currentStatus}
            certificateData={data.certificateData}
            confidence={data.confidence}
            ocrConfidence={data.ocrConfidence}
            forgeryScore={data.forgeryScore}
            anchorHash={data.anchorHash}
            verificationId={data.verificationId}
            timestamp={data.timestamp}
          />

          {/* Additional Actions */}
          <div className="mt-8 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="outline">
                <Link to="/verify">
                  Verify Another Certificate
                </Link>
              </Button>
              <Button asChild>
                <Link to="/how-it-works">
                  Learn More About Our Process
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;