import { useState } from "react";
import { Eye, CheckCircle, XCircle, Flag, Download, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Header from "@/components/Header";

const Admin = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Dashboard analytics data
  const stats = [
    { title: "Documents Processed", value: "8,247", change: "+18%" },
    { title: "Under Review", value: "89", change: "-12%" },
    { title: "Fraud Detected", value: "34", change: "+2%" },
    { title: "Processing Time", value: "5.8s", change: "-22%" }
  ];

  const pendingReviews = [
    {
      id: "DOC-2025-003847",
      studentName: "Sarah Chen",
      certificateId: "MIT-2023-CS-4829",
      institution: "Massachusetts Institute of Technology",
      uploadTime: "2025-01-15 14:22:18",
      confidence: 67,
      reason: "Seal verification requires manual review"
    },
    {
      id: "DOC-2025-003848", 
      studentName: "Michael Rodriguez",
      certificateId: "UCB-2022-EE-7543",
      institution: "University of California, Berkeley",
      uploadTime: "2025-01-15 14:38:45",
      confidence: 71,
      reason: "Date format inconsistency detected"
    },
    {
      id: "DOC-2025-003849",
      studentName: "Priya Sharma",
      certificateId: "IIT-2021-ME-2156",
      institution: "Indian Institute of Technology Delhi",
      uploadTime: "2025-01-15 15:02:11",
      confidence: 64,
      reason: "Signature pattern requires verification"
    }
  ];

  const recentVerifications = [
    {
      id: "VER-2024-001239",
      studentName: "Sneha Reddy",
      status: "verified",
      timestamp: "2024-01-15 15:22:45",
      reviewer: "Admin"
    },
    {
      id: "VER-2024-001238",
      studentName: "Amit Gupta",
      status: "forged",
      timestamp: "2024-01-15 15:18:30",
      reviewer: "Verifier-2"
    },
    {
      id: "VER-2024-001237",
      studentName: "Deepika Sharma",
      status: "verified",
      timestamp: "2024-01-15 15:12:15",
      reviewer: "Auto"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-success text-success-foreground">Verified</Badge>;
      case "forged":
        return <Badge variant="destructive">Forged</Badge>;
      case "suspicious":
        return <Badge variant="secondary">Suspicious</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Dashboard
          </h1>
          <p className="text-muted-foreground">
            Monitor verifications, review suspicious cases, and manage the system
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {stat.title}
                    </p>
                    <p className="text-2xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`text-sm font-medium ${
                    stat.change.startsWith('+') ? 'text-success' : 
                    stat.change.startsWith('-') ? 'text-primary' : 'text-muted-foreground'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="pending" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="pending">Pending Reviews ({pendingReviews.length})</TabsTrigger>
            <TabsTrigger value="recent">Recent Verifications</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Pending Reviews Tab */}
          <TabsContent value="pending">
            <Card className="shadow-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Manual Review Queue</CardTitle>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10 w-64"
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingReviews.map((review) => (
                    <div key={review.id} className="border rounded-lg p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">
                            {review.studentName}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {review.certificateId} • {review.institution}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium text-foreground">
                            Confidence: {review.confidence}%
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {review.uploadTime}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between bg-warning/10 rounded p-2">
                        <span className="text-sm text-warning-foreground">
                          {review.reason}
                        </span>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">
                          <Eye className="h-4 w-4 mr-2" />
                          Review
                        </Button>
                        <Button size="sm" className="bg-success text-success-foreground">
                          <CheckCircle className="h-4 w-4 mr-2" />
                          Accept
                        </Button>
                        <Button size="sm" variant="destructive">
                          <XCircle className="h-4 w-4 mr-2" />
                          Reject
                        </Button>
                        <Button size="sm" variant="outline">
                          <Flag className="h-4 w-4 mr-2" />
                          Flag
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recent Verifications Tab */}
          <TabsContent value="recent">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Recent Verifications</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Verification ID</TableHead>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Reviewer</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentVerifications.map((verification) => (
                      <TableRow key={verification.id}>
                        <TableCell className="font-medium">
                          {verification.id}
                        </TableCell>
                        <TableCell>{verification.studentName}</TableCell>
                        <TableCell>
                          {getStatusBadge(verification.status)}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground">
                          {verification.timestamp}
                        </TableCell>
                        <TableCell>{verification.reviewer}</TableCell>
                        <TableCell>
                          <div className="flex gap-1">
                            <Button size="sm" variant="ghost">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Verification Trends</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 flex items-center justify-center text-muted-foreground">
                    Charts would be implemented here using a library like Recharts
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Institution Breakdown</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: "University of California System", count: 1247 },
                      { name: "State University of New York", count: 983 },
                      { name: "Texas A&M University System", count: 756 },
                      { name: "University of Illinois System", count: 642 }
                    ].map((institution, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm text-foreground">{institution.name}</span>
                        <span className="text-sm font-medium text-primary">{institution.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;