
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import { Calendar, Users, Heart, Weight } from "lucide-react";
import { Navigation } from "@/components/Navigation";

const Dashboard = () => {
  const workoutData = [
    { name: 'Mon', workouts: 1, calories: 250 },
    { name: 'Tue', workouts: 2, calories: 450 },
    { name: 'Wed', workouts: 0, calories: 0 },
    { name: 'Thu', workouts: 1, calories: 300 },
    { name: 'Fri', workouts: 2, calories: 500 },
    { name: 'Sat', workouts: 1, calories: 350 },
    { name: 'Sun', workouts: 1, calories: 200 },
  ];

  const weightData = [
    { date: 'Week 1', weight: 75 },
    { date: 'Week 2', weight: 74.5 },
    { date: 'Week 3', weight: 74.2 },
    { date: 'Week 4', weight: 73.8 },
  ];

  const stats = [
    {
      title: "Workouts This Week",
      value: "8",
      change: "+2 from last week",
      icon: <Calendar className="h-4 w-4" />,
      color: "text-blue-600"
    },
    {
      title: "Calories Burned",
      value: "2,050",
      change: "+15% from last week",
      icon: <Heart className="h-4 w-4" />,
      color: "text-red-600"
    },
    {
      title: "Current Weight",
      value: "73.8 kg",
      change: "-1.2kg this month",
      icon: <Weight className="h-4 w-4" />,
      color: "text-green-600"
    },
    {
      title: "Active Streak",
      value: "12 days",
      change: "Personal best!",
      icon: <Users className="h-4 w-4" />,
      color: "text-purple-600"
    }
  ];

  const goals = [
    { name: "Lose 5kg", progress: 72, current: "3.6kg lost" },
    { name: "Run 5km", progress: 60, current: "3km best" },
    { name: "Workout 5x/week", progress: 80, current: "4/5 this week" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your fitness progress overview.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
                <div className={stat.color}>{stat.icon}</div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground">{stat.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Activity Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Weekly Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={workoutData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="workouts" fill="#3b82f6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Weight Progress Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Weight Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weightData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="weight" stroke="#10b981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* Goals Progress */}
        <Card>
          <CardHeader>
            <CardTitle>Goal Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {goals.map((goal, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{goal.name}</span>
                    <Badge variant="secondary">{goal.current}</Badge>
                  </div>
                  <Progress value={goal.progress} className="h-2" />
                  <p className="text-sm text-gray-500">{goal.progress}% complete</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
