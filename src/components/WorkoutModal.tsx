
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface WorkoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WorkoutModal({ isOpen, onClose }: WorkoutModalProps) {
  const [workoutData, setWorkoutData] = useState({
    name: "",
    type: "",
    duration: "",
    intensity: "",
    exercises: "",
    notes: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate saving workout
    setTimeout(() => {
      toast({
        title: "Workout Logged!",
        description: "Your workout has been successfully logged.",
      });
      onClose();
      setWorkoutData({
        name: "",
        type: "",
        duration: "",
        intensity: "",
        exercises: "",
        notes: ""
      });
    }, 500);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Log New Workout</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="workout-name">Workout Name</Label>
              <Input
                id="workout-name"
                placeholder="e.g., Upper Body Push"
                value={workoutData.name}
                onChange={(e) => setWorkoutData({...workoutData, name: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="workout-type">Type</Label>
              <Select value={workoutData.type} onValueChange={(value) => setWorkoutData({...workoutData, type: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="cardio">Cardio</SelectItem>
                  <SelectItem value="flexibility">Flexibility</SelectItem>
                  <SelectItem value="custom">Custom</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="45"
                value={workoutData.duration}
                onChange={(e) => setWorkoutData({...workoutData, duration: e.target.value})}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="intensity">Intensity</Label>
              <Select value={workoutData.intensity} onValueChange={(value) => setWorkoutData({...workoutData, intensity: value})}>
                <SelectTrigger>
                  <SelectValue placeholder="Select intensity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="low">Low</SelectItem>
                  <SelectItem value="moderate">Moderate</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="very-high">Very High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="exercises">Exercises (comma-separated)</Label>
            <Input
              id="exercises"
              placeholder="e.g., Push-ups, Bench Press, Shoulder Press"
              value={workoutData.exercises}
              onChange={(e) => setWorkoutData({...workoutData, exercises: e.target.value})}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              placeholder="Any additional notes about your workout..."
              value={workoutData.notes}
              onChange={(e) => setWorkoutData({...workoutData, notes: e.target.value})}
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2 pt-4">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">
              Log Workout
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
