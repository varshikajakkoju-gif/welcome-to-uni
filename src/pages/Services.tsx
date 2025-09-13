import Header from "@/components/Header";
import QuoteCard from "@/components/QuoteCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  HeartHandshake, 
  GraduationCap, 
  Briefcase, 
  Shield,
  Phone,
  MapPin,
  Clock,
  FileText,
  CreditCard,
  UserCheck,
  Stethoscope,
  Car,
  Wifi,
  Printer,
  Laptop
} from "lucide-react";

const Services = () => {
  const studentServices = [
    {
      name: "Academic Advising",
      icon: GraduationCap,
      description: "Personalized guidance for course selection, degree planning, and academic success strategies.",
      hours: "Mon-Fri: 9:00 AM - 5:00 PM",
      location: "Student Services Building",
      contact: "advising@campus.edu",
      features: ["Degree Planning", "Course Selection", "Academic Support", "Transfer Credits"]
    },
    {
      name: "Career Services",
      icon: Briefcase,
      description: "Career counseling, job placement assistance, resume building, and internship opportunities.",
      hours: "Mon-Fri: 8:30 AM - 5:30 PM",
      location: "Career Center",
      contact: "careers@campus.edu",
      features: ["Job Placement", "Resume Review", "Interview Prep", "Internships"]
    },
    {
      name: "Health Services",
      icon: Stethoscope,
      description: "On-campus medical care, counseling services, and wellness programs for student health.",
      hours: "Mon-Fri: 8:00 AM - 6:00 PM",
      location: "Health Center",
      contact: "health@campus.edu",
      features: ["Medical Care", "Mental Health", "Wellness Programs", "Emergency Care"]
    },
    {
      name: "Financial Aid",
      icon: CreditCard,
      description: "Assistance with scholarships, grants, loans, and financial planning for education.",
      hours: "Mon-Fri: 9:00 AM - 4:00 PM",
      location: "Administration Building",
      contact: "finaid@campus.edu",
      features: ["Scholarships", "Grants", "Student Loans", "Payment Plans"]
    }
  ];

  const administrativeServices = [
    {
      name: "Registrar Office",
      icon: FileText,
      description: "Transcripts, enrollment verification, grade records",
      contact: "registrar@campus.edu"
    },
    {
      name: "Student ID Services",
      icon: UserCheck,
      description: "ID card issuance, replacement, and access management",
      contact: "idservices@campus.edu"
    },
    {
      name: "Campus Security",
      icon: Shield,
      description: "24/7 security, emergency response, safety escorts",
      contact: "security@campus.edu"
    },
    {
      name: "Transportation",
      icon: Car,
      description: "Shuttle services, parking permits, bike rentals",
      contact: "transport@campus.edu"
    }
  ];

  const technicalServices = [
    {
      name: "IT Support",
      icon: Laptop,
      description: "Technical assistance for students and faculty",
      features: ["Device Setup", "Software Support", "Network Issues", "Account Help"],
      location: "IT Help Desk - Library 1st Floor",
      hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat-Sun: 10:00 AM - 6:00 PM"
    },
    {
      name: "WiFi & Network",
      icon: Wifi,
      description: "Campus-wide wireless internet access",
      features: ["High-Speed WiFi", "Guest Access", "VPN Support", "Network Storage"],
      location: "Available Campus-wide",
      hours: "24/7 Available"
    },
    {
      name: "Printing Services",
      icon: Printer,
      description: "Print, copy, and scan services across campus",
      features: ["Color Printing", "Large Format", "Binding", "Digital Copies"],
      location: "Library, Student Center, Academic Buildings",
      hours: "Mon-Fri: 7:00 AM - 10:00 PM"
    }
  ];

  const emergencyContacts = [
    { service: "Emergency Services", number: "911" },
    { service: "Campus Security", number: "(555) 123-4567" },
    { service: "Health Center", number: "(555) 123-4568" },
    { service: "Counseling Crisis Line", number: "(555) 123-4569" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-campus text-white">
        <div className="container mx-auto px-4 text-center">
          <Users className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Services</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Comprehensive support services to help you succeed academically, personally, and professionally.
          </p>
        </div>
      </section>

      {/* Student Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Student Support Services</h2>
            <p className="text-muted-foreground text-lg">Your success is our priority</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {studentServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.name} className="p-6 hover-lift">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-gradient-campus rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary">{service.name}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{service.hours}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{service.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{service.contact}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Services:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="campus" size="sm">
                    Contact Service
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Administrative Services */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Administrative Services</h2>
            <p className="text-muted-foreground text-lg">Essential campus operations and support</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {administrativeServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.name} className="p-6 hover-lift text-center">
                  <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{service.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{service.description}</p>
                  <p className="text-xs text-secondary">{service.contact}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Technical Services</h2>
            <p className="text-muted-foreground text-lg">Technology support for your academic needs</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalServices.map((service) => {
              const Icon = service.icon;
              return (
                <Card key={service.name} className="p-6 hover-lift">
                  <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{service.name}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{service.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-sm text-muted-foreground">{service.hours}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Features:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature) => (
                        <Badge key={feature} variant="outline" className="text-xs">
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

      {/* Emergency Contacts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Emergency Contacts</h2>
            <p className="text-muted-foreground text-lg">Important numbers to keep handy</p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <div className="space-y-4">
                {emergencyContacts.map((contact) => (
                  <div key={contact.service} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                    <span className="font-medium text-primary">{contact.service}</span>
                    <a 
                      href={`tel:${contact.number}`}
                      className="text-accent font-semibold hover:text-accent/80 transition-colors"
                    >
                      {contact.number}
                    </a>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-accent-light rounded-lg">
                <div className="flex items-center space-x-2 text-primary mb-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Campus Safety</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  For non-emergency campus safety concerns, contact Campus Security at (555) 123-4567
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
            <h2 className="text-3xl font-bold text-primary mb-4">Support & Community</h2>
            <p className="text-muted-foreground text-lg">We're here for your success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <QuoteCard 
              quote="Success is not achieved alone. Let our services be the foundation upon which you build your dreams."
              variant="energy"
            />
            <QuoteCard 
              quote="Every great achievement begins with someone who believed in your potential. We believe in you."
              variant="default"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;