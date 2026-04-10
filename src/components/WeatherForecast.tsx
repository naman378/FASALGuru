import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Cloud, 
  Sun, 
  CloudRain, 
  CloudSnow, 
  Wind,
  Droplets,
  Thermometer,
  Eye,
  MapPin,
  Calendar,
  TrendingUp,
  AlertTriangle
} from "lucide-react";

const WeatherForecast = () => {
  const currentWeather = {
    location: "Pune, Maharashtra",
    temperature: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    visibility: 10,
    uvIndex: 6,
    pressure: 1012,
    feelsLike: 31
  };

  const weeklyForecast = [
    { day: "Today", date: "Mar 15", high: 32, low: 22, condition: "sunny", precipitation: 0, humidity: 65 },
    { day: "Tomorrow", date: "Mar 16", high: 30, low: 20, condition: "cloudy", precipitation: 10, humidity: 70 },
    { day: "Thu", date: "Mar 17", high: 28, low: 18, condition: "rainy", precipitation: 80, humidity: 85 },
    { day: "Fri", date: "Mar 18", high: 26, low: 16, condition: "rainy", precipitation: 90, humidity: 90 },
    { day: "Sat", date: "Mar 19", high: 29, low: 19, condition: "cloudy", precipitation: 20, humidity: 75 },
    { day: "Sun", date: "Mar 20", high: 31, low: 21, condition: "sunny", precipitation: 5, humidity: 60 },
    { day: "Mon", date: "Mar 21", high: 33, low: 23, condition: "sunny", precipitation: 0, humidity: 55 }
  ];

  const historicalWeather = [
    { day: "7 days ago", high: 30, low: 20, condition: "sunny" },
    { day: "6 days ago", high: 28, low: 18, condition: "cloudy" },
    { day: "5 days ago", high: 26, low: 16, condition: "rainy" },
    { day: "4 days ago", high: 27, low: 17, condition: "cloudy" },
    { day: "3 days ago", high: 29, low: 19, condition: "sunny" },
    { day: "2 days ago", high: 31, low: 21, condition: "sunny" },
    { day: "Yesterday", high: 30, low: 22, condition: "cloudy" }
  ];

  const farmingAlerts = [
    {
      type: "rainfall",
      message: "Heavy rainfall expected Thu-Fri. Postpone spraying activities.",
      priority: "high"
    },
    {
      type: "temperature",
      message: "Hot weather ahead. Increase irrigation frequency.",
      priority: "medium"
    },
    {
      type: "wind",
      message: "Low wind conditions. Good for pesticide application.",
      priority: "low"
    }
  ];

  const getWeatherIcon = (condition: string) => {
    switch (condition) {
      case "sunny":
        return <Sun className="h-6 w-6 text-warning" />;
      case "cloudy":
        return <Cloud className="h-6 w-6 text-primary" />;
      case "rainy":
        return <CloudRain className="h-6 w-6 text-primary" />;
      case "snowy":
        return <CloudSnow className="h-6 w-6 text-primary" />;
      default:
        return <Sun className="h-6 w-6 text-warning" />;
    }
  };

  const getTemperatureColor = (temp: number) => {
    if (temp >= 35) return "text-danger";
    if (temp >= 25) return "text-warning";
    if (temp >= 15) return "text-primary";
    return "text-success";
  };

  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <Card className="bg-gradient-to-r from-primary to-success text-white border-0 shadow-soft">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-4 w-4" />
                <span className="text-sm">{currentWeather.location}</span>
              </div>
              <div className="text-4xl font-bold">{currentWeather.temperature}°C</div>
              <div className="text-sm opacity-90">{currentWeather.condition}</div>
              <div className="text-sm opacity-75">Feels like {currentWeather.feelsLike}°C</div>
            </div>
            <div className="text-center">
              <Cloud className="h-16 w-16 mx-auto mb-2" />
              <div className="text-sm">
                <Calendar className="h-4 w-4 inline mr-1" />
                {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-white/20">
            <div className="text-center">
              <Droplets className="h-4 w-4 mx-auto mb-1" />
              <div className="text-sm">Humidity</div>
              <div className="font-medium">{currentWeather.humidity}%</div>
            </div>
            <div className="text-center">
              <Wind className="h-4 w-4 mx-auto mb-1" />
              <div className="text-sm">Wind</div>
              <div className="font-medium">{currentWeather.windSpeed} km/h</div>
            </div>
            <div className="text-center">
              <Eye className="h-4 w-4 mx-auto mb-1" />
              <div className="text-sm">Visibility</div>
              <div className="font-medium">{currentWeather.visibility} km</div>
            </div>
            <div className="text-center">
              <Thermometer className="h-4 w-4 mx-auto mb-1" />
              <div className="text-sm">Pressure</div>
              <div className="font-medium">{currentWeather.pressure} mb</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Farming Alerts */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Agricultural Weather Alerts
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {farmingAlerts.map((alert, index) => (
              <div key={index} className={`flex items-start gap-3 p-3 rounded-lg bg-${alert.priority === 'high' ? 'danger' : alert.priority === 'medium' ? 'warning' : 'primary'}/5`}>
                <AlertTriangle className={`h-4 w-4 mt-0.5 text-${alert.priority === 'high' ? 'danger' : alert.priority === 'medium' ? 'warning' : 'primary'}`} />
                <div className="flex-1">
                  <Badge variant="outline" className={`mb-2 text-${alert.priority === 'high' ? 'danger' : alert.priority === 'medium' ? 'warning' : 'primary'}`}>
                    {alert.priority.toUpperCase()} PRIORITY
                  </Badge>
                  <p className="text-sm">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 7-Day Forecast */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            7-Day Weather Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weeklyForecast.map((day, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-background rounded-lg">
                <div className="flex items-center gap-4 min-w-0 flex-1">
                  <div className="text-sm font-medium min-w-20">
                    {day.day}
                    <div className="text-xs text-muted-foreground">{day.date}</div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {getWeatherIcon(day.condition)}
                    <div className="hidden sm:block text-sm capitalize">{day.condition}</div>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Droplets className="h-3 w-3 text-primary" />
                    <span>{day.precipitation}%</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <Droplets className="h-3 w-3 text-muted-foreground" />
                    <span>{day.humidity}%</span>
                  </div>
                  
                  <div className="text-right min-w-16">
                    <div className={`font-medium ${getTemperatureColor(day.high)}`}>{day.high}°</div>
                    <div className="text-xs text-muted-foreground">{day.low}°</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Historical Weather */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-secondary" />
            Historical Weather (Past 7 Days)
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
            {historicalWeather.map((day, index) => (
              <Card key={index} className="p-3 text-center bg-muted/50">
                <div className="text-xs text-muted-foreground mb-2">{day.day}</div>
                <div className="mb-2">{getWeatherIcon(day.condition)}</div>
                <div className={`text-sm font-medium ${getTemperatureColor(day.high)}`}>{day.high}°</div>
                <div className="text-xs text-muted-foreground">{day.low}°</div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WeatherForecast;