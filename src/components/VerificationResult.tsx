import { Shield, AlertTriangle, XCircle, Download, Eye, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export type VerificationStatus = "verified" | "suspicious" | "forged";

interface VerificationResultProps {
  status: VerificationStatus;
  certificateData: {
    studentName: string;
    certificateId: string;
    rollNumber: string;
    program: string;
    marks: string;
    issueDate: string;
    institution: string;
  };
  confidence: number;
  ocrConfidence: number;
  forgeryScore: number;
  anchorHash?: string;
  verificationId: string;
  timestamp: string;
}

const VerificationResult = ({
  status,
  certificateData,
  confidence,
  ocrConfidence,
  forgeryScore,
  anchorHash,
  verificationId,
  timestamp,
}: VerificationResultProps) => {
  const getStatusConfig = () => {
    switch (status) {
      case "verified":
        return {
          icon: Shield,
          badge: "Verified",
          badgeVariant: "default" as const,
          bgColor: "bg-success/10",
          iconColor: "text-success",
          title: "Certificate Verified",
          description: "This certificate has been successfully verified against our database.",
        };
      case "suspicious":
        return {
          icon: AlertTriangle,
          badge: "Suspicious",
          badgeVariant: "secondary" as const,
          bgColor: "bg-warning/10",
          iconColor: "text-warning",
          title: "Manual Review Required",
          description: "This certificate requires manual verification due to potential inconsistencies.",
        };
      case "forged":
        return {
          icon: XCircle,
          badge: "Forged",
          badgeVariant: "destructive" as const,
          bgColor: "bg-destructive/10",
          iconColor: "text-destructive",
          title: "Certificate Flagged as Forged",
          description: "This certificate shows clear signs of forgery or tampering.",
        };
    }
  };

  const config = getStatusConfig();
  const StatusIcon = config.icon;

  return (
    <div className="w-full max-w-4xl space-y-6">
      {/* Status Card */}
      <Card className={`shadow-elevation ${config.bgColor}`}>
        <CardHeader className="text-center pb-4">
          <div className="flex items-center justify-center mb-4">
            <div className={`p-4 rounded-full ${config.bgColor}`}>
              <StatusIcon className={`h-8 w-8 ${config.iconColor}`} />
            </div>
          </div>
          <div className="space-y-2">
            <Badge variant={config.badgeVariant} className="text-sm px-3 py-1">
              {config.badge}
            </Badge>
            <CardTitle className="text-2xl">{config.title}</CardTitle>
            <p className="text-muted-foreground">{config.description}</p>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Action Buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="default" className="bg-gradient-primary">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
            {status === "suspicious" && (
              <Button variant="outline">
                <Eye className="h-4 w-4 mr-2" />
                Send to Manual Review
              </Button>
            )}
            {status === "forged" && (
              <Button variant="destructive">
                <Flag className="h-4 w-4 mr-2" />
                Report Forgery
              </Button>
            )}
          </div>

          {/* Verification Metadata */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Overall Confidence</p>
              <p className="text-2xl font-bold text-foreground">{confidence}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">OCR Confidence</p>
              <p className="text-2xl font-bold text-foreground">{ocrConfidence}%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Forgery Risk</p>
              <p className="text-2xl font-bold text-foreground">{forgeryScore}%</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Certificate Data */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Shield className="h-5 w-5 mr-2 text-primary" />
            Extracted Certificate Data
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Student Name</label>
                <p className="text-lg font-semibold text-foreground">{certificateData.studentName}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Certificate ID</label>
                <p className="text-lg font-semibold text-foreground">{certificateData.certificateId}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Roll Number</label>
                <p className="text-lg font-semibold text-foreground">{certificateData.rollNumber}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Program</label>
                <p className="text-lg font-semibold text-foreground">{certificateData.program}</p>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">Marks/Grade</label>
                <p className="text-lg font-semibold text-foreground">{certificateData.marks}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Issue Date</label>
                <p className="text-lg font-semibold text-foreground">{certificateData.issueDate}</p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">Institution</label>
                <p className="text-lg font-semibold text-foreground">{certificateData.institution}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Verification Details */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle>Verification Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-muted-foreground">Verification ID</label>
              <p className="font-mono text-sm bg-muted p-2 rounded mt-1">{verificationId}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">Timestamp</label>
              <p className="text-sm text-foreground mt-1">{timestamp}</p>
            </div>
          </div>
          
          {anchorHash && (
            <>
              <Separator />
              <div>
                <label className="text-sm font-medium text-muted-foreground">Blockchain Anchor</label>
                <p className="font-mono text-sm bg-muted p-2 rounded mt-1 break-all">{anchorHash}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  This certificate's hash has been anchored to the blockchain for immutable verification.
                </p>
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default VerificationResult;