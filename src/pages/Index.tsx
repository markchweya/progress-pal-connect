
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, Chart } from "lucide-react";
import { AuthModal } from "@/components/AuthModal";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const navigate = useNavigate();

  const features = [
    {
      icon: <Chart className="h-8 w-8 text-blue-600" />,
      title: "Progress Tracking",
      description: "Visualize your fitness journey with detailed charts and analytics"
    },
    {
      icon: <Calendar className="h-8 w-8 text-green-600" />,
      title: "Workout Planning",
      description: "Plan and log your workouts with our intuitive interface"
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: "Goal Setting",
      description: "Set and achieve your fitness goals with our tracking system"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg"></div>
              <span className="text-xl font-bold text-gray-900">FitTracker</span>
            </div>
            <div className="space-x-4">
              <Button variant="ghost" onClick={() => setIsAuthOpen(true)}>
                Sign In
              </Button>
              <Button onClick={() => setIsAuthOpen(true)}>
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-6 bg-blue-100 text-blue-800 hover:bg-blue-200">
              Your Fitness Journey Starts Here
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Track Your
              <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent"> Fitness Progress </span>
              Like Never Before
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Monitor workouts, track nutrition, set goals, and visualize your progress with our comprehensive fitness tracking platform.
            </p>
            <div className="space-x-4">
              <Button size="lg" onClick={() => setIsAuthOpen(true)}>
                Start Tracking Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/dashboard')}>
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Everything You Need to Succeed
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive tools to help you reach your fitness goals and maintain a healthy lifestyle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Fitness Journey?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of users who are already tracking their progress and achieving their goals.
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={() => setIsAuthOpen(true)}
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Start Your Journey Today
          </Button>
        </div>
      </section>

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </div>
  );
};

export default Index;
