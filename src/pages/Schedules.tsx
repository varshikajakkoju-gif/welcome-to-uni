import Header from "@/components/Header";
import QuoteCard from "@/components/QuoteCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  BookOpen,
  Coffee,
  Dumbbell,
  Music,
  Utensils,
  Bus,
  AlertCircle,
  Star
} from "lucide-react";

const Schedules = () => {
  const classSchedule = [
    { time: "8:00 AM - 9:30 AM", subject: "Mathematics", room: "Room 101", instructor: "Dr. Smith" },
    { time: "10:00 AM - 11:30 AM", subject: "Physics", room: "Lab 205", instructor: "Prof. Johnson" },
    { time: "12:00 PM - 1:30 PM", subject: "Chemistry", room: "Lab 301", instructor: "Dr. Williams" },
    { time: "2:00 PM - 3:30 PM", subject: "English Literature", room: "Room 150", instructor: "Prof. Brown" },
    { time: "4:00 PM - 5:30 PM", subject: "Computer Science", room: "Lab 401", instructor: "Dr. Davis" },
  ];

  const facilityHours = [
    {
      name: "Library",
      icon: BookOpen,
      weekdays: "7:00 AM - 11:00 PM",
      weekends: "9:00 AM - 9:00 PM",
      special: "24/7 during exams"
    },
    {
      name: "Gym & Fitness",
      icon: Dumbbell,
      weekdays: "6:00 AM - 11:00 PM",
      weekends: "8:00 AM - 10:00 PM",
      special: "Closed on holidays"
    },
    {
      name: "Dining Hall",
      icon: Utensils,
      weekdays: "6:30 AM - 10:00 PM",
      weekends: "8:00 AM - 9:00 PM",
      special: "Limited menu on weekends"
    },
    {
      name: "Coffee Shops",
      icon: Coffee,
      weekdays: "6:00 AM - 10:00 PM",
      weekends: "7:00 AM - 9:00 PM",
      special: "Extended hours during finals"
    },
    {
      name: "Shuttle Service",
      icon: Bus,
      weekdays: "7:00 AM - 10:00 PM",
      weekends: "9:00 AM - 8:00 PM",
      special: "Every 15 minutes"
    },
    {
      name: "Music Rooms",
      icon: Music,
      weekdays: "8:00 AM - 10:00 PM",
      weekends: "10:00 AM - 8:00 PM",
      special: "Booking required"
    }
  ];

  const examSchedule = [
    { date: "Dec 15", subject: "Mathematics", time: "9:00 AM - 12:00 PM", room: "Exam Hall A" },
    { date: "Dec 17", subject: "Physics", time: "2:00 PM - 5:00 PM", room: "Exam Hall B" },
    { date: "Dec 19", subject: "Chemistry", time: "9:00 AM - 12:00 PM", room: "Lab 301" },
    { date: "Dec 21", subject: "English Literature", time: "2:00 PM - 4:00 PM", room: "Exam Hall A" },
    { date: "Dec 23", subject: "Computer Science", time: "10:00 AM - 1:00 PM", room: "Lab 401" },
  ];

  const events = [
    {
      name: "Science Fair",
      date: "Nov 25",
      time: "10:00 AM - 4:00 PM",
      location: "Main Auditorium",
      type: "Academic"
    },
    {
      name: "Cultural Festival",
      date: "Dec 5",
      time: "6:00 PM - 10:00 PM",
      location: "Campus Grounds",
      type: "Cultural"
    },
    {
      name: "Career Fair",
      date: "Dec 10",
      time: "9:00 AM - 5:00 PM",
      location: "Student Center",
      type: "Career"
    },
    {
      name: "Winter Concert",
      date: "Dec 15",
      time: "7:00 PM - 9:00 PM",
      location: "Music Hall",
      type: "Cultural"
    }
  ];

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case "Academic": return "bg-primary/10 text-primary";
      case "Cultural": return "bg-accent/10 text-accent";
      case "Career": return "bg-secondary/10 text-secondary";
      default: return "bg-muted";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Schedules & Timings</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Stay organized with comprehensive schedules for classes, facilities, exams, and campus events.
          </p>
        </div>
      </section>

      {/* Main Content with Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="classes" className="w-full">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="classes">Classes</TabsTrigger>
              <TabsTrigger value="facilities">Facilities</TabsTrigger>
              <TabsTrigger value="exams">Exams</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
            </TabsList>

            {/* Class Schedule */}
            <TabsContent value="classes" className="mt-8">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">Today's Class Schedule</h2>
                    <p className="text-muted-foreground">Monday, November 25, 2024</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {classSchedule.map((class_, index) => (
                    <Card key={index} className="p-4 hover-lift">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-secondary" />
                          <span className="font-medium">{class_.time}</span>
                        </div>
                        <div className="font-semibold text-primary">{class_.subject}</div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{class_.room}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{class_.instructor}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-accent-light rounded-lg">
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Important Note</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Schedule may change during exam periods. Check your student portal for updates.
                  </p>
                </div>
              </Card>
            </TabsContent>

            {/* Facility Hours */}
            <TabsContent value="facilities" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {facilityHours.map((facility) => {
                  const Icon = facility.icon;
                  return (
                    <Card key={facility.name} className="p-6 hover-lift">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-gradient-nature rounded-lg flex items-center justify-center">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-primary">{facility.name}</h3>
                      </div>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm font-medium text-foreground">Weekdays</div>
                          <div className="text-sm text-muted-foreground">{facility.weekdays}</div>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-foreground">Weekends</div>
                          <div className="text-sm text-muted-foreground">{facility.weekends}</div>
                        </div>
                        <div>
                          <Badge variant="outline" className="text-xs">
                            {facility.special}
                          </Badge>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </TabsContent>

            {/* Exam Schedule */}
            <TabsContent value="exams" className="mt-8">
              <Card className="p-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-energy rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-primary">Final Exam Schedule</h2>
                    <p className="text-muted-foreground">Fall Semester 2024</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {examSchedule.map((exam, index) => (
                    <Card key={index} className="p-4 hover-lift border-l-4 border-l-accent">
                      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-accent" />
                          <span className="font-medium">{exam.date}</span>
                        </div>
                        <div className="font-semibold text-primary">{exam.subject}</div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{exam.time}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{exam.room}</span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-secondary-light rounded-lg">
                  <div className="flex items-center space-x-2 text-primary mb-2">
                    <AlertCircle className="w-5 h-5" />
                    <span className="font-medium">Exam Guidelines</span>
                  </div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Arrive 30 minutes before exam time</li>
                    <li>• Bring valid student ID and required materials</li>
                    <li>• No electronic devices allowed unless specified</li>
                  </ul>
                </div>
              </Card>
            </TabsContent>

            {/* Campus Events */}
            <TabsContent value="events" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {events.map((event, index) => (
                  <Card key={index} className="p-6 hover-lift">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-lg font-semibold text-primary">{event.name}</h3>
                      <Badge className={getEventTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">{event.date}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">{event.time}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-secondary" />
                        <span className="text-sm text-muted-foreground">{event.location}</span>
                      </div>
                    </div>

                    <Button variant="outline" size="sm">
                      Learn More
                    </Button>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Quick Reference */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Quick Reference</h2>
            <p className="text-muted-foreground text-lg">Essential timings at a glance</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="p-6 text-center">
              <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Library</h3>
              <p className="text-sm text-muted-foreground">7 AM - 11 PM</p>
            </Card>
            <Card className="p-6 text-center">
              <Utensils className="w-8 h-8 text-accent mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Dining</h3>
              <p className="text-sm text-muted-foreground">6:30 AM - 10 PM</p>
            </Card>
            <Card className="p-6 text-center">
              <Dumbbell className="w-8 h-8 text-secondary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Gym</h3>
              <p className="text-sm text-muted-foreground">6 AM - 11 PM</p>
            </Card>
            <Card className="p-6 text-center">
              <Users className="w-8 h-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Support</h3>
              <p className="text-sm text-muted-foreground">9 AM - 5 PM</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Time & Success</h2>
            <p className="text-muted-foreground text-lg">Make every moment count</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <QuoteCard 
              quote="Time is what we want most, but what we use worst. Make your schedule work for your dreams."
              variant="default"
            />
            <QuoteCard 
              quote="Success isn't about having time. It's about making time for what truly matters."
              variant="energy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Schedules;