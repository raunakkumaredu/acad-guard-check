import { useState, useCallback } from "react";
import { Upload, FileText, Image, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface UploadCardProps {
  onFileUpload: (file: File) => void;
  isProcessing?: boolean;
  progress?: number;
}

const UploadCard = ({ onFileUpload, isProcessing = false, progress = 0 }: UploadCardProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setSelectedFile(file);
    }
  }, []);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
    }
  }, []);

  const handleSubmit = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  const isValidFile = selectedFile && (
    selectedFile.type === "application/pdf" ||
    selectedFile.type.startsWith("image/")
  );

  return (
    <Card className="w-full max-w-2xl shadow-card">
      <CardContent className="p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            Upload Certificate
          </h2>
          <p className="text-muted-foreground">
            Upload a PDF or image of your academic certificate for verification
          </p>
        </div>

        {/* Upload Area */}
        <div
          className={`relative border-2 border-dashed rounded-xl p-8 transition-all duration-200 ${
            dragActive
              ? "border-primary bg-primary/5"
              : selectedFile
              ? "border-success bg-success/5"
              : "border-muted-foreground/25 hover:border-primary/50"
          } ${isProcessing ? "pointer-events-none opacity-50" : ""}`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            type="file"
            accept=".pdf,image/*"
            onChange={handleChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            disabled={isProcessing}
          />

          <div className="text-center">
            {selectedFile ? (
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  {selectedFile.type === "application/pdf" ? (
                    <FileText className="h-12 w-12 text-success" />
                  ) : (
                    <Image className="h-12 w-12 text-success" />
                  )}
                </div>
                <div>
                  <p className="font-medium text-foreground">{selectedFile.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
                {isValidFile ? (
                  <div className="flex items-center justify-center text-success">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Valid file format</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center text-destructive">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    <span className="text-sm">Invalid file format</span>
                  </div>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto" />
                <div>
                  <p className="text-lg font-medium text-foreground">
                    Drag and drop your certificate here
                  </p>
                  <p className="text-muted-foreground">or click to browse files</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  Supports PDF, JPG, PNG (Max 20MB)
                </p>
              </div>
            )}
          </div>
        </div>

        {isProcessing && (
          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Processing certificate...</span>
              <span className="font-medium">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
            <div className="text-xs text-muted-foreground">
              {progress < 25 && "Preprocessing image..."}
              {progress >= 25 && progress < 50 && "Extracting text with OCR..."}
              {progress >= 50 && progress < 75 && "Running AI forgery detection..."}
              {progress >= 75 && "Verifying against database..."}
            </div>
          </div>
        )}

        {selectedFile && !isProcessing && (
          <div className="mt-6 flex gap-3">
            <Button
              variant="outline"
              onClick={() => setSelectedFile(null)}
              className="flex-1"
            >
              Choose Different File
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={!isValidFile}
              className="flex-1 bg-gradient-primary"
            >
              Verify Certificate
            </Button>
          </div>
        )}

        {/* Sample Images */}
        <div className="mt-8 pt-6 border-t">
          <p className="text-sm font-medium text-foreground mb-3">
            Sample certificates for testing:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { name: "B.Tech Certificate", type: "Verified" },
              { name: "MBA Diploma", type: "Verified" },
              { name: "Forged Sample", type: "Forged" },
              { name: "Suspicious Sample", type: "Suspicious" },
            ].map((sample, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-auto py-2 px-3"
              >
                {sample.name}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default UploadCard;