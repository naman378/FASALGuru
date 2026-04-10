import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mic, ArrowRight } from "lucide-react";

// --- Icons ---
import eMandiIcon from "@/assets/e-krishimandi.png";
import satelliteIcon from "@/assets/satellite-icon.png";
import yieldIcon from "@/assets/dssat.png";
import weatherIcon from "@/assets/weather-icon.png";
import insuranceIcon from "@/assets/insurance-icon.png";
import cropIcon from "@/assets/crop-icon.png";
import soilIcon from "@/assets/soil-icon.png";
import iotIcon from "@/assets/iot-icon.png";

// 🔥 TEAM IMAGES – Make sure files are inside: src/assets/team/
import team1 from "@/assets/team/team1.jpeg";
import team2 from "@/assets/team/team2.jpeg";
import team3 from "@/assets/team/team3.jpeg";
import team4 from "@/assets/team/team4.jpeg";
import team5 from "@/assets/team/team5.jpeg";
import team6 from "@/assets/team/team6.jpeg";
import team7 from "@/assets/team/team7.jpeg";
import team8 from "@/assets/team/team8.jpeg";
import team9 from "@/assets/team/team9.jpeg";
import team10 from "@/assets/team/team10.jpeg";

// 🧑‍🌾 Team array (Auto loop)
const teamImages = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10];

const Dashboard = () => {

  const modules = [
  
    { id:"highres-insights", title:"High-Res Crop Insights", description:"Satellite NDVI + Vegetation",
      icon:<img src={satelliteIcon} className="h-16 w-20" />, stats:"Satellite AI",
      link: "/highres-insights", external:false },

    { id:"yield-estimator", title:"Yield Estimator", description:"DSSAT-based estimation",
      icon:<img src={yieldIcon} className="h-16 w-20" />, stats:"AI Model",
      link: "/yield-estimator", external:false },
    
    { id:"insurance", title:"PMFBY Insurance", description:"Enroll farmers, claim & yield",
      icon:<img src={insuranceIcon} className="h-16 w-20" />, stats:"Gov Scheme",
      link:"/insurance", external:false },
    
    { id:"e-mandi", title:"E-Mandi Live Price", description:"Track real-time mandi crop price",
      icon:<img src={eMandiIcon} className="h-16 w-20" />, stats:"Market Rate",
      link: "/e-mandi", external:false },

    { id:"crop-disease", title:"Crop Disease Detection", description:"Upload crop images to detect diseases and get treatment recommendations",
      icon:<img src={cropIcon} className="h-16 w-20" />, stats:"94% Accuracy",
      link: "/crop-disease", external:false },

    { id:"soil-analysis", title:"Soil Analysis", description:"Analyze soil health & fertilizer suggestion",
      icon:<img src={soilIcon} className="h-16 w-20" />, stats:"NPK Scan",
      link: "/soil-analysis", external:false },

    { id:"weather", title:"Weather Forecast", description:"7-Day forecast + advisories",
      icon:<img src={weatherIcon} className="h-16 w-20" />, stats:"Weather AI",
      link:"https://weather-app-navy-nine-35.vercel.app/", external:false },
    
    { id:"iot-dashboard", title:"IoT Sensor Data", description:"Monitor farm conditions live",
      icon:<img src={iotIcon} className="h-16 w-20" />, stats:"Live Data", link:"", external:false },

  ];

  return (
    <div className="space-y-10">

      {/* HERO */}
      <div className="bg-gradient-to-r from-primary via-success to-warning text-white p-6 rounded-lg">
        <h2 className="text-3xl font-bold">Welcome to FASAL Guru</h2>
        <p className="text-4xl md:text-2xl text-white mb-6">
            (Farm Advisory System for Agricultural Land)
          </p>
        <p className="opacity-90">AI-powered assistant for farmers</p>
        <a href="https://huggingface.co/spaces/fasalguru/jarvisai">
          <Button className="mt-4 bg-white text-primary">
            <Mic className="mr-2"/> Ask Voice Assistant
          </Button>
        </a>
      </div>

      {/* MODULE CARDS */}
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map(m => (
          <Card key={m.id} className="hover:shadow-xl transition p-2">
            <CardHeader>
              <div className="flex justify-between items-center">
                {m.icon}
                <span className="text-xs bg-green-200 rounded-full px-2 py-1">{m.stats}</span>
              </div>
              <CardTitle>{m.title}</CardTitle>
              <CardDescription>{m.description}</CardDescription>
            </CardHeader>
            <CardContent>
              {m.external ?
                <a href={m.link} target="_blank"><Button className="w-full">Open Module <ArrowRight/></Button></a> :
                <Link to={m.link}><Button className="w-full">Open Module <ArrowRight/></Button></Link>
              }
            </CardContent>
          </Card>
        ))}
      </div>


      {/* 🚀 TEAM SECTION — SCROLLING */}
      <h2 className="text-center text-2xl font-bold text-primary mt-12">FARMER'S REVIEW</h2>

      <div className="overflow-hidden w-full">
        <div className="flex gap-6 animate-scroll whitespace-nowrap">
          {teamImages.map((img,i) => (
            <img key={i} src={img} className="w-40 h-40 border-4 border-green-400 object-cover shadow-lg rounded-xl"/>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
