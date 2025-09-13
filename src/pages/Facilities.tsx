import Header from "@/components/Header";
import QuoteCard from "@/components/QuoteCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  Wifi, 
  Car, 
  TreePine, 
  Users, 
  Coffee,
  Dumbbell,
  Music,
  Presentation,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";
import classroomImage from "@/assets/classroom.jpg";
import seminarHallImage from "@/assets/seminar-hall.jpg";
import greenSpaceImage from "@/assets/green-space.jpg";

const Facilities = () => {
  const facilities = [
    {
      name: "Smart Classrooms",
      description: "State-of-the-art classrooms with interactive whiteboards, high-speed internet, and modern seating arrangements.",
      image: classroomImage,
      features: ["Smart Boards", "AC/Heating", "WiFi", "Audio System"],
      capacity: "30-50 students",
      availability: "24/7 with access card"
    },
    {
      name: "Seminar Halls",
      description: "Large auditoriums perfect for lectures, presentations, and academic events with professional audio-visual equipment.",
      image: seminarHallImage,
      features: ["Projection System", "Microphones", "Recording", "Live Streaming"],
      capacity: "100-300 students",
      availability: "Booking required"
    },
    {
      name: "Green Spaces",
      description: "Beautiful outdoor areas with gardens, seating areas, and study spots for relaxation and informal learning.",
      image: greenSpaceImage,
      features: ["WiFi Coverage", "Benches", "Study Tables", "Natural Lighting"],
      capacity: "Unlimited",
      availability: "Always open"
    }
  ];

  const additionalFacilities = [
    { name: "Gym & Fitness Center", icon: Dumbbell, description: "Modern equipment and group classes" },
    { name: "Music & Dance Clubs", icon: Music, description: "Creative spaces for arts and performances" },
    { name: "Food Courts", icon: Coffee, description: "Multiple dining options and cafes" },
    { name: "Sports Grounds", icon: Users, description: "Basketball, tennis, and multi-purpose courts" },
    { name: "Parking Areas", icon: Car, description: "Secure parking for students and faculty" },
    { name: "WiFi Zones", icon: Wifi, description: "High-speed internet throughout campus" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <Building2 className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Facilities</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Discover our world-class facilities designed to enhance your learning experience and campus life.
          </p>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Featured Facilities</h2>
            <p className="text-muted-foreground text-lg">Experience excellence in every space</p>
          </div>

          <div className="space-y-12">
            {facilities.map((facility, index) => (
              <Card key={facility.name} className="overflow-hidden hover-lift">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={facility.image} 
                      alt={facility.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-primary mb-4">{facility.name}</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">{facility.description}</p>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="w-5 h-5 text-secondary" />
                        <span className="font-medium">Capacity:</span>
                        <span className="text-muted-foreground">{facility.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-5 h-5 text-secondary" />
                        <span className="font-medium">Availability:</span>
                        <span className="text-muted-foreground">{facility.availability}</span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Features:</h4>
                      <div className="flex flex-wrap gap-2">
                        {facility.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="flex items-center space-x-1">
                            <CheckCircle className="w-3 h-3" />
                            <span>{feature}</span>
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button variant="hero" className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>View Location</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Facilities Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">More Campus Amenities</h2>
            <p className="text-muted-foreground text-lg">Everything you need for a complete campus experience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalFacilities.map((facility) => {
              const Icon = facility.icon;
              return (
                <Card key={facility.name} className="p-6 hover-lift">
                  <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{facility.name}</h3>
                  <p className="text-muted-foreground text-sm">{facility.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Inspiration Corner</h2>
            <p className="text-muted-foreground text-lg">Words to fuel your academic journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <QuoteCard 
              quote="Excellence is not a skill, it's an attitude that shines through our facilities and your dedication."
              variant="nature"
            />
            <QuoteCard 
              quote="Great spaces inspire great minds. Use these facilities to unlock your full potential."
              variant="energy"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Facilities;