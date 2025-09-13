import Header from "@/components/Header";
import QuoteCard from "@/components/QuoteCard";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Utensils, 
  Coffee, 
  Clock, 
  DollarSign, 
  Star,
  MapPin,
  Users,
  Leaf,
  Pizza,
  Sandwich,
  IceCream,
  ChefHat
} from "lucide-react";
import diningHallImage from "@/assets/dining-hall.jpg";

const Dining = () => {
  const diningOptions = [
    {
      name: "Main Cafeteria",
      description: "Our flagship dining facility offering a wide variety of international cuisines, healthy options, and daily specials.",
      image: diningHallImage,
      hours: "6:30 AM - 10:00 PM",
      priceRange: "$8-15",
      rating: 4.5,
      features: ["International Cuisine", "Vegetarian Options", "Halal Meals", "Salad Bar"],
      specialties: ["Daily Specials", "Fresh Pasta", "Grilled Items", "Asian Corner"]
    }
  ];

  const foodCourts = [
    {
      name: "Pizza Corner",
      icon: Pizza,
      description: "Fresh wood-fired pizzas with gourmet toppings",
      hours: "11:00 AM - 9:00 PM",
      specialty: "Italian-style thin crust pizzas",
      popular: "Margherita Supreme"
    },
    {
      name: "Sandwich Station",
      icon: Sandwich,
      description: "Custom sandwiches and wraps made to order",
      hours: "7:00 AM - 8:00 PM",
      specialty: "Artisan breads and fresh ingredients",
      popular: "Club Deluxe"
    },
    {
      name: "Sweet Treats",
      icon: IceCream,
      description: "Ice cream, pastries, and desserts",
      hours: "10:00 AM - 9:00 PM",
      specialty: "Homemade ice cream and baked goods",
      popular: "Chocolate Lava Cake"
    },
    {
      name: "Global Kitchen",
      icon: ChefHat,
      description: "Rotating international cuisines",
      hours: "11:30 AM - 8:30 PM",
      specialty: "Authentic dishes from around the world",
      popular: "Taco Tuesday"
    }
  ];

  const coffeeShops = [
    {
      name: "Central Perk Cafe",
      location: "Library Building",
      hours: "6:00 AM - 10:00 PM",
      specialties: ["Artisan Coffee", "Fresh Pastries", "Study-friendly"],
      wifi: true
    },
    {
      name: "Morning Brew",
      location: "Student Center",
      hours: "7:00 AM - 6:00 PM",
      specialties: ["Quick Service", "Grab & Go", "Energy Drinks"],
      wifi: true
    },
    {
      name: "Garden Cafe",
      location: "Outdoor Pavilion",
      hours: "8:00 AM - 5:00 PM",
      specialties: ["Outdoor Seating", "Fresh Juices", "Light Meals"],
      wifi: true
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-energy text-white">
        <div className="container mx-auto px-4 text-center">
          <Utensils className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Campus Dining</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Fuel your studies with delicious, nutritious meals from our diverse dining options across campus.
          </p>
        </div>
      </section>

      {/* Main Cafeteria */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Main Dining Hall</h2>
            <p className="text-muted-foreground text-lg">Your home away from home for meals</p>
          </div>

          {diningOptions.map((dining) => (
            <Card key={dining.name} className="overflow-hidden hover-lift mb-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div>
                  <img 
                    src={dining.image} 
                    alt={dining.name}
                    className="w-full h-64 lg:h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-primary">{dining.name}</h3>
                    <div className="flex items-center space-x-1 text-accent">
                      <Star className="w-5 h-5 fill-current" />
                      <span className="font-semibold">{dining.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">{dining.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-medium">Hours</div>
                        <div className="text-sm text-muted-foreground">{dining.hours}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-medium">Price Range</div>
                        <div className="text-sm text-muted-foreground">{dining.priceRange}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-5 h-5 text-secondary" />
                      <div>
                        <div className="font-medium">Seating</div>
                        <div className="text-sm text-muted-foreground">300+ seats</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Features:</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {dining.features.map((feature) => (
                        <Badge key={feature} variant="secondary" className="flex items-center space-x-1">
                          <Leaf className="w-3 h-3" />
                          <span>{feature}</span>
                        </Badge>
                      ))}
                    </div>
                    
                    <h4 className="font-semibold mb-3">Today's Specialties:</h4>
                    <div className="flex flex-wrap gap-2">
                      {dining.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button variant="energy" className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>View Menu & Location</span>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Food Courts */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Food Court Options</h2>
            <p className="text-muted-foreground text-lg">Quick bites and specialty cuisines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {foodCourts.map((court) => {
              const Icon = court.icon;
              return (
                <Card key={court.name} className="p-6 hover-lift">
                  <div className="w-12 h-12 bg-gradient-energy rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{court.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{court.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-muted-foreground">{court.hours}</span>
                    </div>
                    <div className="font-medium text-primary">Popular: {court.popular}</div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coffee Shops */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Coffee & Study Spots</h2>
            <p className="text-muted-foreground text-lg">Perfect for study breaks and group meetings</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coffeeShops.map((shop) => (
              <Card key={shop.name} className="p-6 hover-lift">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-nature rounded-lg flex items-center justify-center">
                    <Coffee className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">{shop.name}</h3>
                    <p className="text-sm text-muted-foreground">{shop.location}</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span className="text-sm text-muted-foreground">{shop.hours}</span>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Specialties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {shop.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  {shop.wifi && (
                    <div className="flex items-center space-x-2 text-sm text-secondary">
                      <span>🔶</span>
                      <span>Free WiFi Available</span>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Motivational Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Food for Thought</h2>
            <p className="text-muted-foreground text-lg">Nourishment for body and mind</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <QuoteCard 
              quote="Good food is the foundation of genuine happiness and academic success."
              variant="energy"
            />
            <QuoteCard 
              quote="A healthy body fuels a sharp mind. Eat well, study better, achieve more."
              variant="nature"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dining;