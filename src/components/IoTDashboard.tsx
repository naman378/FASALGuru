import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, 
  Droplets, 
  Wind, 
  Gauge,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Activity,
  Wifi,
  WifiOff,
  Settings
} from "lucide-react";

const IoTDashboard = () => {
  const sensorData = [
    {
      id: 1,
      name: "Temperature",
      value: "28.5°C",
      status: "normal",
      trend: "up",
      icon: <Thermometer className="h-5 w-5" />,
      color: "primary",
      lastUpdate: "2 min ago",
      threshold: { min: 15, max: 35, current: 28.5 }
    },
    {
      id: 2,
      name: "Humidity",
      value: "65%",
      status: "normal", 
      trend: "down",
      icon: <Droplets className="h-5 w-5" />,
      color: "success",
      lastUpdate: "1 min ago",
      threshold: { min: 40, max: 80, current: 65 }
    },
    {
      id: 3,
      name: "Soil Moisture",
      value: "42%",
      status: "low",
      trend: "down",
      icon: <Droplets className="h-5 w-5" />,
      color: "warning",
      lastUpdate: "3 min ago",
      threshold: { min: 30, max: 70, current: 42 }
    },
    {
      id: 4,
      name: "Wind Speed",
      value: "12 km/h",
      status: "normal",
      trend: "up",
      icon: <Wind className="h-5 w-5" />,
      color: "primary",
      lastUpdate: "1 min ago",
      threshold: { min: 0, max: 25, current: 12 }
    },
    {
      id: 5,
      name: "Soil pH",
      value: "6.8",
      status: "optimal",
      trend: "stable",
      icon: <Gauge className="h-5 w-5" />,
      color: "success",
      lastUpdate: "5 min ago",
      threshold: { min: 6.0, max: 7.5, current: 6.8 }
    },
    {
      id: 6,
      name: "Light Intensity",
      value: "850 lux",
      status: "high",
      trend: "up",
      icon: <Activity className="h-5 w-5" />,
      color: "warning",
      lastUpdate: "2 min ago",
      threshold: { min: 200, max: 800, current: 850 }
    }
  ];

  const alerts = [
    {
      type: "warning",
      sensor: "Soil Moisture - Field A",
      message: "Moisture level below optimal range",
      time: "5 min ago"
    },
    {
      type: "info",
      sensor: "Temperature - Greenhouse 1",
      message: "Temperature within normal range",
      time: "10 min ago"
    },
    {
      type: "alert",
      sensor: "pH Sensor - Field B",
      message: "pH level needs adjustment",
      time: "15 min ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal":
      case "optimal":
        return "success";
      case "low":
      case "high":
        return "warning";
      case "critical":
        return "danger";
      default:
        return "primary";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal":
      case "optimal":
        return <CheckCircle className="h-4 w-4 text-success" />;
      case "low":
      case "high":
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case "critical":
        return <AlertTriangle className="h-4 w-4 text-danger" />;
      default:
        return <Activity className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <div className="space-y-6">
      {/* System Status */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              IoT System Status
            </CardTitle>
            <div className="flex items-center gap-2">
              <Wifi className="h-4 w-4 text-success" />
              <Badge variant="outline" className="bg-success/5 text-success">
                12 Sensors Online
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">12</div>
              <div className="text-sm text-muted-foreground">Active Sensors</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">Alerts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-success">5.2s</div>
              <div className="text-sm text-muted-foreground">Avg Response</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sensor Readings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {sensorData.map((sensor) => (
          <Card key={sensor.id} className="bg-gradient-card border-0 shadow-soft hover:shadow-medium transition-shadow">
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-3">
                <div className={`p-2 rounded-lg bg-${sensor.color}/10`}>
                  <div className={`text-${sensor.color}`}>
                    {sensor.icon}
                  </div>
                </div>
                {getStatusIcon(sensor.status)}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-medium text-sm">{sensor.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">{sensor.value}</span>
                  <div className="flex items-center gap-1">
                    {sensor.trend === "up" && <TrendingUp className="h-4 w-4 text-success" />}
                    {sensor.trend === "down" && <TrendingDown className="h-4 w-4 text-danger" />}
                    {sensor.trend === "stable" && <Activity className="h-4 w-4 text-muted-foreground" />}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <Badge variant="outline" className={`bg-${getStatusColor(sensor.status)}/5 text-${getStatusColor(sensor.status)}`}>
                    {sensor.status}
                  </Badge>
                  <span className="text-muted-foreground">{sensor.lastUpdate}</span>
                </div>
                
                {/* Threshold indicator */}
                <div className="w-full bg-muted rounded-full h-1.5 mt-2">
                  <div 
                    className={`h-1.5 rounded-full bg-${sensor.color}`}
                    style={{ 
                      width: `${((sensor.threshold.current - sensor.threshold.min) / (sensor.threshold.max - sensor.threshold.min)) * 100}%` 
                    }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Alerts */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-warning" />
              Recent Alerts & Notifications
            </CardTitle>
            <Button variant="outline" size="sm">
              <Settings className="h-4 w-4 mr-2" />
              Configure
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {alerts.map((alert, index) => (
              <div key={index} className={`flex items-start gap-3 p-3 rounded-lg bg-${alert.type === 'warning' ? 'warning' : alert.type === 'alert' ? 'danger' : 'primary'}/5`}>
                <div className={`p-1 rounded-full bg-${alert.type === 'warning' ? 'warning' : alert.type === 'alert' ? 'danger' : 'primary'}/10`}>
                  {alert.type === 'warning' && <AlertTriangle className={`h-4 w-4 text-warning`} />}
                  {alert.type === 'info' && <CheckCircle className={`h-4 w-4 text-primary`} />}
                  {alert.type === 'alert' && <AlertTriangle className={`h-4 w-4 text-danger`} />}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{alert.sensor}</p>
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                  <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chart Placeholder */}
      <Card className="bg-gradient-card border-0 shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-primary" />
            Historical Data Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
            <div className="text-center space-y-2">
              <Activity className="h-12 w-12 text-muted-foreground mx-auto" />
              <p className="text-muted-foreground">Interactive charts showing sensor data trends</p>
              <p className="text-sm text-muted-foreground">Last 24 hours, 7 days, 30 days view</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default IoTDashboard;