
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Calendar, Clock } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { WorkoutModal } from "@/components/WorkoutModal";

const Workouts = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const recentWorkouts = [
    {
      id: 1,
      type: "Strength",
      name: "Upper Body Push",
      date: "Today",
      duration: "45 min",
      exercises: 6,
      calories: 320
    },
    {
      id: 2,
      type: "Cardio",
      name: "Morning Run",
      date: "Yesterday",
      duration: "30 min",
      exercises: 1,
      calories: 280
    },
    {
      id: 3,
      type: "Strength",
      name: "Leg Day",
      date: "2 days ago",
      duration: "60 min",
      exercises: 8,
      calories: 420
    }
  ];

  const workoutTemplates = [
    { name: "Upper Body Push", exercises: 6, duration: "45 min", type: "Strength" },
    { name: "Lower Body", exercises: 8, duration: "60 min", type: "Strength" },
    { name: "Cardio HIIT", exercises: 5, duration: "30 min", type: "Cardio" },
    { name: "Full Body", exercises: 10, duration: "75 min", type: "Strength" }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Strength":
        return "bg-blue-100 text-blue-800";
      case "Cardio":
        return "bg-red-100 text-red-800";
      case "Flexibility":
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
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Workouts</h1>
            <p className="text-gray-600">Track and plan your workout sessions</p>
          </div>
          <Button onClick={() => setIsModalOpen(true)}>
            <Plus className="h-4 w-4 mr-2" />
            Log Workout
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Workouts */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Recent Workouts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentWorkouts.map((workout) => (
                    <div key={workout.id} className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-medium">{workout.name}</h3>
                          <Badge className={getTypeColor(workout.type)}>{workout.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Calendar className="h-4 w-4" />
                            <span>{workout.date}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{workout.duration}</span>
                          </div>
                          <span>{workout.exercises} exercises</span>
                          <span>{workout.calories} calories</span>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Workout Templates */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Workout Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {workoutTemplates.map((template, index) => (
                    <div key={index} className="p-3 border rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium">{template.name}</h4>
                        <Badge className={getTypeColor(template.type)} variant="secondary">
                          {template.type}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-500">
                        <p>{template.exercises} exercises • {template.duration}</p>
                      </div>
                    </div>
                  ))}
                  <Button variant="outline" className="w-full mt-4">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <WorkoutModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Workouts;
