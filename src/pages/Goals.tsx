
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, Weight, Heart, Users } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Goals = () => {
  const [activeTab, setActiveTab] = useState("fitness");

  const fitnessGoals = [
    {
      id: 1,
      title: "Lose 5kg",
      description: "Reach target weight of 70kg",
      progress: 72,
      current: "3.6kg lost",
      target: "5kg",
      deadline: "March 2024",
      category: "Weight Loss",
      icon: <Weight className="h-5 w-5" />
    },
    {
      id: 2,
      title: "Run 5km without stopping",
      description: "Build endurance for continuous running",
      progress: 60,
      current: "3km best",
      target: "5km",
      deadline: "February 2024",
      category: "Endurance",
      icon: <Heart className="h-5 w-5" />
    },
    {
      id: 3,
      title: "Workout 5 times per week",
      description: "Maintain consistent exercise routine",
      progress: 80,
      current: "4/5 this week",
      target: "5/week",
      deadline: "Ongoing",
      category: "Consistency",
      icon: <Calendar className="h-5 w-5" />
    }
  ];

  const habits = [
    { name: "Drink 2L water daily", streak: 12, completed: true },
    { name: "10,000 steps daily", streak: 8, completed: false },
    { name: "8 hours sleep", streak: 5, completed: true },
    { name: "Track meals", streak: 15, completed: true },
    { name: "Morning meditation", streak: 3, completed: false }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Weight Loss":
        return "bg-red-100 text-red-800";
      case "Endurance":
        return "bg-blue-100 text-blue-800";
      case "Consistency":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Goals & Habits</h1>
            <p className="text-gray-600">Track your fitness goals and build healthy habits</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Goal
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-8 bg-gray-200 p-1 rounded-lg w-fit">
          <button
            onClick={() => setActiveTab("fitness")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "fitness"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Fitness Goals
          </button>
          <button
            onClick={() => setActiveTab("habits")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "habits"
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Daily Habits
          </button>
        </div>

        {activeTab === "fitness" && (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {fitnessGoals.map((goal) => (
              <Card key={goal.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="text-blue-600">{goal.icon}</div>
                      <div>
                        <CardTitle className="text-lg">{goal.title}</CardTitle>
                        <p className="text-sm text-gray-600">{goal.description}</p>
                      </div>
                    </div>
                    <Badge className={getCategoryColor(goal.category)}>
                      {goal.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium">Progress</span>
                        <span className="text-sm text-gray-600">{goal.progress}%</span>
                      </div>
                      <Progress value={goal.progress} className="h-2" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Current</p>
                        <p className="font-medium">{goal.current}</p>
                      </div>
                      <div>
                        <p className="text-gray-500">Target</p>
                        <p className="font-medium">{goal.target}</p>
                      </div>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">Deadline</span>
                        <span className="text-sm font-medium">{goal.deadline}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "habits" && (
          <div className="max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle>Today's Habits</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {habits.map((habit, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-4">
                        <div className={`w-4 h-4 rounded-full border-2 ${
                          habit.completed 
                            ? "bg-green-500 border-green-500" 
                            : "border-gray-300"
                        }`}>
                          {habit.completed && (
                            <div className="w-full h-full flex items-center justify-center">
                              <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </div>
                        <div>
                          <p className="font-medium">{habit.name}</p>
                          <p className="text-sm text-gray-500">
                            {habit.streak} day streak
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={habit.completed ? "default" : "secondary"}>
                          {habit.completed ? "Complete" : "Pending"}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Goals;
