import Header from "@/components/Header";
import ChatBot from "@/components/ChatBot";
import QuoteCard from "@/components/QuoteCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Building, 
  Utensils, 
  BookOpen, 
  Calendar, 
  Users, 
  Wifi, 
  Car,
  Coffee,
  TreePine,
  GraduationCap,
  Sparkles
} from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

const Index = () => {
  const quickLinks = [
    { name: "Facilities", icon: Building, path: "/facilities", color: "primary" },
    { name: "Dining", icon: Utensils, path: "/dining", color: "energy" },
    { name: "Library", icon: BookOpen, path: "/library", color: "secondary" },
    { name: "Schedules", icon: Calendar, path: "/schedules", color: "primary" },
    { name: "Services", icon: Users, path: "/services", color: "energy" },
  ];

  const campusFeatures = [
    { name: "Free WiFi", icon: Wifi, description: "High-speed internet throughout campus" },
    { name: "Parking", icon: Car, description: "Convenient parking areas for students" },
    { name: "Coffee Shops", icon: Coffee, description: "Multiple cafes for study breaks" },
    { name: "Green Spaces", icon: TreePine, description: "Beautiful gardens and relaxation areas" },
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div 
          className="h-[70vh] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${campusHero})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <div className="flex items-center space-x-3 mb-6">
                <GraduationCap className="w-12 h-12" />
                <Sparkles className="w-8 h-8 text-accent animate-pulse" />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Welcome to 
                <span className="block text-accent">Smart Campus</span>
              </h1>
              <p className="text-xl mb-8 text-white/90 leading-relaxed">
                Your intelligent campus companion. Get instant answers about facilities, dining, schedules, and more with our AI-powered assistant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="energy" size="lg" className="text-lg px-8 py-3">
                  Start Chatting with AI
                </Button>
                <Button variant="glass" size="lg" className="text-lg px-8 py-3">
                  Explore Campus
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Quick Campus Access</h2>
            <p className="text-muted-foreground text-lg">Find what you need in seconds</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {quickLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link key={link.name} to={link.path}>
                  <Card className="p-6 text-center hover-lift group cursor-pointer">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-semibold text-primary group-hover:text-primary-glow transition-colors">
                      {link.name}
                    </h3>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Chatbot Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Ask Our AI Assistant</h2>
            <p className="text-muted-foreground text-lg">Get instant answers to your campus questions</p>
          </div>
          
          <ChatBot />
        </div>
      </section>

      {/* Campus Features */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Campus Features</h2>
            <p className="text-muted-foreground text-lg">Everything you need for a great campus experience</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {campusFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.name} className="p-6 hover-lift">
                  <div className="w-12 h-12 bg-gradient-nature rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{feature.name}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Motivational Quotes */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Daily Inspiration</h2>
            <p className="text-muted-foreground text-lg">Motivation for your academic journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <QuoteCard 
              quote="Education is the most powerful weapon which you can use to change the world."
              author="Nelson Mandela"
              variant="default"
            />
            <QuoteCard 
              quote="The beautiful thing about learning is that no one can take it away from you."
              author="B.B. King"
              variant="nature"
            />
            <QuoteCard 
              quote="Success is not final, failure is not fatal: it is the courage to continue that counts."
              author="Winston Churchill"
              variant="energy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GraduationCap className="w-8 h-8" />
            <h3 className="text-xl font-bold">Campus AI</h3>
          </div>
          <p className="text-white/80 mb-6">Your intelligent campus companion</p>
          <div className="flex justify-center space-x-6 text-sm text-white/60">
            <span>© 2024 Campus AI</span>
            <span>•</span>
            <span>Built for students, by students</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;