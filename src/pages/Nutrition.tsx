
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Plus } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Nutrition = () => {
  const dailyGoals = {
    calories: { current: 1650, target: 2200 },
    protein: { current: 85, target: 120 },
    carbs: { current: 180, target: 250 },
    fat: { current: 45, target: 80 }
  };

  const meals = [
    {
      name: "Breakfast",
      foods: [
        { name: "Oatmeal with berries", calories: 320, protein: 12 },
        { name: "Greek yogurt", calories: 150, protein: 20 }
      ]
    },
    {
      name: "Lunch",
      foods: [
        { name: "Grilled chicken salad", calories: 450, protein: 35 },
        { name: "Quinoa", calories: 180, protein: 8 }
      ]
    },
    {
      name: "Dinner",
      foods: [
        { name: "Salmon with vegetables", calories: 380, protein: 28 }
      ]
    },
    {
      name: "Snacks",
      foods: [
        { name: "Almonds", calories: 170, protein: 6 }
      ]
    }
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  const getProgressColor = (current: number, target: number) => {
    const percentage = (current / target) * 100;
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 70) return "bg-yellow-500";
    return "bg-blue-500";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Nutrition</h1>
            <p className="text-gray-600">Track your daily nutrition and macronutrients</p>
          </div>
          <Button>
            <Plus className="h-4 w-4 mr-2" />
            Add Food
          </Button>
        </div>

        {/* Daily Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Calories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                {dailyGoals.calories.current} / {dailyGoals.calories.target}
              </div>
              <Progress 
                value={getProgressPercentage(dailyGoals.calories.current, dailyGoals.calories.target)} 
                className="h-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                {dailyGoals.calories.target - dailyGoals.calories.current} remaining
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Protein (g)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                {dailyGoals.protein.current} / {dailyGoals.protein.target}
              </div>
              <Progress 
                value={getProgressPercentage(dailyGoals.protein.current, dailyGoals.protein.target)} 
                className="h-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                {Math.round(getProgressPercentage(dailyGoals.protein.current, dailyGoals.protein.target))}% of goal
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Carbs (g)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                {dailyGoals.carbs.current} / {dailyGoals.carbs.target}
              </div>
              <Progress 
                value={getProgressPercentage(dailyGoals.carbs.current, dailyGoals.carbs.target)} 
                className="h-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                {Math.round(getProgressPercentage(dailyGoals.carbs.current, dailyGoals.carbs.target))}% of goal
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-500">Fat (g)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2">
                {dailyGoals.fat.current} / {dailyGoals.fat.target}
              </div>
              <Progress 
                value={getProgressPercentage(dailyGoals.fat.current, dailyGoals.fat.target)} 
                className="h-2"
              />
              <p className="text-xs text-gray-500 mt-1">
                {Math.round(getProgressPercentage(dailyGoals.fat.current, dailyGoals.fat.target))}% of goal
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Meals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {meals.map((meal, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle>{meal.name}</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {meal.foods.map((food, foodIndex) => (
                    <div key={foodIndex} className="flex justify-between items-center p-2 rounded border">
                      <div>
                        <p className="font-medium">{food.name}</p>
                        <p className="text-sm text-gray-500">{food.protein}g protein</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium">{food.calories} cal</p>
                      </div>
                    </div>
                  ))}
                  {meal.foods.length === 0 && (
                    <p className="text-gray-500 text-center py-4">No foods logged yet</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Nutrition;
