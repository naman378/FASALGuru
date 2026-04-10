import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, TestTube2 } from "lucide-react";

const SoilAnalysis = () => {
  return (
    <div className="p-6 space-y-6 max-w-6xl mx-auto">
      {/* Top Header */}
      <Card className="bg-gradient-to-r from-emerald-500 to-green-600 text-white border-0 shadow-2xl">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl">
            <TestTube2 className="h-8 w-8" />
            Soil Analysis AI
          </CardTitle>
        </CardHeader>
        <CardContent className="p-4 text-center">
          <p className="text-lg">Upload soil photo → Get real AI results (NPK, pH, health)</p>
        </CardContent>
      </Card>

      {/* HF App Iframe */}
      <Card className="shadow-xl border-0 overflow-hidden">
        <CardContent className="p-0">
          <iframe
            src="https://soildetect-soil-detection-app.hf.space"
            width="100%"
            height="700"
            frameBorder="0"
            className="w-full"
            title="Soil AI App"
            allow="camera; microphone"
          />
        </CardContent>
      </Card>

      {/* Bottom Buttons */}
      <div className="flex gap-4 pt-4">
        <Button className="flex-1 bg-emerald-600 hover:bg-emerald-700 gap-2">
          <Download className="h-4 w-4" />
          Download Report
        </Button>
        <Button variant="outline" className="flex-1">New Test</Button>
      </div>
    </div>
  );
};

export default SoilAnalysis;
