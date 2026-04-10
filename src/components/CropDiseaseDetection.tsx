import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  Camera, 
  FileImage, 
  AlertCircle,
  CheckCircle,
  Leaf,
  Zap,
  Download
} from "lucide-react";

const CropDiseaseDetection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);

  const mockAnalysis = {
    disease: "Late Blight",
    confidence: 87,
    severity: "Medium",
    affectedArea: "40%",
    treatment: {
      chemical: "Copper-based fungicide (Bordeaux mixture)",
      organic: "Neem oil spray + Baking soda solution",
      preventive: "Improve air circulation, avoid overhead watering"
    },
    timelineStages: [
      { stage: "Image Processing", completed: true },
      { stage: "Disease Identification", completed: true }, 
      { stage: "Severity Analysis", completed: true },
      { stage: "Treatment Recommendation", completed: true }
    ]
  };

  const handleImageUpload = () => {
    setIsAnalyzing(true);
    setTimeout(() => {
      setIsAnalyzing(false);
      setAnalysisComplete(true);
    }, 3000);
  };

  const recentScans = [
    { crop: "Tomato", disease: "Early Blight", confidence: 92, date: "2 hours ago" },
    { crop: "Potato", disease: "Late Blight", confidence: 88, date: "1 day ago" },
    { crop: "Corn", disease: "Healthy", confidence: 95, date: "2 days ago" }
  ];

  return (
    <div className="space-y-6">
      {/* Upload Section */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-success" />
            Crop Disease Detection
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!selectedImage && (
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center space-y-4">
              <div className="mx-auto w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
                <Upload className="h-8 w-8 text-success" />
              </div>
              <div>
                <h3 className="font-medium mb-2">Upload Crop Image</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Take a clear photo of the affected plant or upload from gallery
                </p>
              </div>
              <div className="flex gap-2 justify-center">
                <Button onClick={handleImageUpload} className="gap-2">
                  <Camera className="h-4 w-4" />
                  Take Photo
                </Button>
                <Button variant="outline" onClick={handleImageUpload} className="gap-2">
                  <FileImage className="h-4 w-4" />
                  Upload Image
                </Button>
              </div>
            </div>
          )}

          {selectedImage && !isAnalyzing && !analysisComplete && (
            <div className="space-y-4">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Image Preview</p>
              </div>
              <Button onClick={handleImageUpload} className="w-full gap-2">
                <Zap className="h-4 w-4" />
                Analyze Disease
              </Button>
            </div>
          )}

          {isAnalyzing && (
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="mx-auto w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                  <p className="text-sm">Analyzing crop image...</p>
                </div>
              </div>
              
              <div className="space-y-3">
                {mockAnalysis.timelineStages.map((stage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{stage.stage}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {analysisComplete && (
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Analyzed Image</p>
              </div>

              {/* Results */}
              <Card className="bg-danger/5 border-danger/20">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="h-5 w-5 text-danger mt-1" />
                    <div className="flex-1">
                      <h4 className="font-medium text-danger mb-2">{mockAnalysis.disease} Detected</h4>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-muted-foreground">Confidence:</span>
                          <div className="flex items-center gap-2 mt-1">
                            <Progress value={mockAnalysis.confidence} className="flex-1" />
                            <span className="font-medium">{mockAnalysis.confidence}%</span>
                          </div>
                        </div>
                        <div>
                          <span className="text-muted-foreground">Severity:</span>
                          <Badge variant="outline" className="ml-2">{mockAnalysis.severity}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Treatment Recommendations */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Treatment Recommendations</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h5 className="font-medium text-success mb-2">✓ Recommended Treatment</h5>
                    <p className="text-sm bg-success/5 p-3 rounded">{mockAnalysis.treatment.chemical}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-warning mb-2">🌿 Organic Alternative</h5>
                    <p className="text-sm bg-warning/5 p-3 rounded">{mockAnalysis.treatment.organic}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium text-primary mb-2">🛡️ Prevention</h5>
                    <p className="text-sm bg-primary/5 p-3 rounded">{mockAnalysis.treatment.preventive}</p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-2">
                <Button variant="success" className="flex-1 gap-2">
                  <Download className="h-4 w-4" />
                  Download Report
                </Button>
                <Button variant="outline" onClick={() => setAnalysisComplete(false)}>
                  New Scan
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Recent Scans */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="text-lg">Recent Disease Scans</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentScans.map((scan, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div>
                  <p className="font-medium">{scan.crop}</p>
                  <p className="text-sm text-muted-foreground">{scan.date}</p>
                </div>
                <div className="text-right">
                  <Badge variant={scan.disease === "Healthy" ? "outline" : "destructive"}>
                    {scan.disease}
                  </Badge>
                  <p className="text-sm text-muted-foreground mt-1">{scan.confidence}% confidence</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CropDiseaseDetection;