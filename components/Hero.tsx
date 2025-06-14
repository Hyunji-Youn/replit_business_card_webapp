import { Button } from "./ui/button";
import { Upload, Shield, Zap, Star, Camera } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">10,000+ users</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight">
                Scan. Organize. Connect.
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl">
                Transform business cards into searchable digital contacts with AI-powered scanning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-lg px-8">
                <Camera className="w-5 h-5 mr-2" />
                Start Scanning
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Demo
              </Button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-sm text-muted-foreground">Secure</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                <span className="text-sm text-muted-foreground">Instant</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white p-8 rounded-2xl shadow-2xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&h=120&fit=crop"
                    alt="Business card scan"
                    className="w-full h-16 object-cover rounded-lg mb-2"
                  />
                  <div className="text-xs font-medium">John Smith</div>
                  <div className="text-xs text-muted-foreground">Marketing</div>
                </div>
                <div className="bg-gradient-to-br from-purple-100 to-purple-200 p-3 rounded-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=200&h=120&fit=crop"
                    alt="Business card scan"
                    className="w-full h-16 object-cover rounded-lg mb-2"
                  />
                  <div className="text-xs font-medium">Sarah Johnson</div>
                  <div className="text-xs text-muted-foreground">CEO</div>
                </div>
                <div className="bg-gradient-to-br from-green-100 to-green-200 p-3 rounded-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=200&h=120&fit=crop"
                    alt="Business card scan"
                    className="w-full h-16 object-cover rounded-lg mb-2"
                  />
                  <div className="text-xs font-medium">Mike Davis</div>
                  <div className="text-xs text-muted-foreground">Designer</div>
                </div>
                <div className="bg-gradient-to-br from-orange-100 to-orange-200 p-3 rounded-xl">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200&h=120&fit=crop"
                    alt="Business card scan"
                    className="w-full h-16 object-cover rounded-lg mb-2"
                  />
                  <div className="text-xs font-medium">Lisa Brown</div>
                  <div className="text-xs text-muted-foreground">Developer</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}