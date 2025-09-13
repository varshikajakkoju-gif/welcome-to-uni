import Header from "@/components/Header";
import QuoteCard from "@/components/QuoteCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  Computer, 
  Users, 
  Clock, 
  Wifi,
  Coffee,
  Volume2,
  Search,
  Download,
  Headphones,
  Calendar,
  HelpCircle
} from "lucide-react";
import libraryImage from "@/assets/library-interior.jpg";

const Library = () => {
  const libraryServices = [
    {
      name: "Study Rooms",
      icon: Users,
      description: "Private and group study rooms available for booking",
      features: ["Whiteboard", "Power Outlets", "WiFi", "Air Conditioning"],
      capacity: "2-8 people",
      booking: "Online reservation required"
    },
    {
      name: "Computer Lab",
      icon: Computer,
      description: "High-performance computers with specialized software",
      features: ["Design Software", "Research Databases", "Printing", "Scanning"],
      capacity: "50 workstations",
      booking: "First-come, first-served"
    },
    {
      name: "Silent Study Area",
      icon: Volume2,
      description: "Quiet zones for focused individual study",
      features: ["Complete Silence", "Individual Desks", "Reading Lamps", "Book Access"],
      capacity: "100+ seats",
      booking: "No reservation needed"
    },
    {
      name: "Research Assistance",
      icon: HelpCircle,
      description: "Professional librarians to help with research and citations",
      features: ["Reference Help", "Citation Guidance", "Database Training", "Research Strategy"],
      capacity: "One-on-one sessions",
      booking: "Appointment based"
    }
  ];

  const digitalResources = [
    { name: "Academic Databases", description: "Access to scholarly articles and journals", icon: Search },
    { name: "E-Books Collection", description: "Thousands of digital books and textbooks", icon: BookOpen },
    { name: "Audio Library", description: "Audiobooks and lecture recordings", icon: Headphones },
    { name: "Digital Downloads", description: "Research papers and study materials", icon: Download },
  ];

  const libraryHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 11:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 9:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 8:00 PM" },
    { day: "Exam Period", hours: "24/7 Access" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-nature text-white">
        <div className="container mx-auto px-4 text-center">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Library Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Your gateway to knowledge with modern facilities, vast collections, and comprehensive support services.
          </p>
        </div>
      </section>

      {/* Main Library Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Central Library</h2>
            <p className="text-muted-foreground text-lg">A modern learning hub for students and faculty</p>
          </div>

          <Card className="overflow-hidden hover-lift mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div>
                <img 
                  src={libraryImage} 
                  alt="Library Interior"
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-primary mb-4">State-of-the-Art Learning Environment</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our five-story library features over 100,000 books, digital resources, quiet study areas, 
                  collaborative spaces, and cutting-edge technology to support your academic journey.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-secondary-light rounded-lg">
                    <div className="text-2xl font-bold text-primary">100K+</div>
                    <div className="text-sm text-muted-foreground">Books & Journals</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-light rounded-lg">
                    <div className="text-2xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Study Seats</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-light rounded-lg">
                    <div className="text-2xl font-bold text-primary">24/7</div>
                    <div className="text-sm text-muted-foreground">During Exams</div>
                  </div>
                  <div className="text-center p-4 bg-secondary-light rounded-lg">
                    <div className="text-2xl font-bold text-primary">Free</div>
                    <div className="text-sm text-muted-foreground">WiFi & Coffee</div>
                  </div>
                </div>

                <Button variant="nature" className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>Book Study Room</span>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Library Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Library Services</h2>
            <p className="text-muted-foreground text-lg">Comprehensive support for your academic needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {libraryServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.name} className="p-6 hover-lift">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium">Capacity:</span>
                      <span className="text-sm text-muted-foreground">{service.capacity}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-secondary" />
                      <span className="text-sm font-medium">Booking:</span>
                      <span className="text-sm text-muted-foreground">{service.booking}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Digital Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Digital Resources</h2>
            <p className="text-muted-foreground text-lg">Access knowledge from anywhere, anytime</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {digitalResources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.name} className="p-6 hover-lift text-center">
                  <div className="w-16 h-16 bg-gradient-campus rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{resource.name}</h3>
                  <p className="text-muted-foreground text-sm">{resource.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Library Hours */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Library Hours</h2>
            <p className="text-muted-foreground text-lg">We're here when you need us</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="space-y-4">
                {libraryHours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                    <span className="font-medium text-primary">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-accent-light rounded-lg">
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <Coffee className="w-5 h-5" />
                  <span className="font-medium">Study Cafe Hours</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Coffee and snacks available: Monday-Friday 7:00 AM - 9:00 PM
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Knowledge & Wisdom</h2>
            <p className="text-muted-foreground text-lg">Inspiration for your learning journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <QuoteCard 
              quote="The library is not just a place of books, but a temple of learning where knowledge transforms into wisdom."
              variant="nature"
            />
            <QuoteCard 
              quote="Reading is to the mind what exercise is to the body. Strengthen your intellect daily."
              variant="default"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Library;