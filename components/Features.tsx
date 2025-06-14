import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Camera, Search, Cloud, Users, Smartphone, Lock } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Camera,
      title: "Smart Scan",
      description: "AI extracts contact info instantly from photos.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Search,
      title: "Quick Search",
      description: "Find any contact by name, company, or notes.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Cloud,
      title: "Cloud Sync",
      description: "Access your cards from any device, anywhere.",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Users,
      title: "Team Share",
      description: "Share contact collections with your team.",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Mobile First",
      description: "Works offline, designed for mobile use.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: Lock,
      title: "Secure",
      description: "Enterprise-grade encryption and protection.",
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional contact management made simple.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}