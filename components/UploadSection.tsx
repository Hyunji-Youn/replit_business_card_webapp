import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Upload, Camera, FileImage, Sparkles, Smartphone } from "lucide-react";

export function UploadSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Start?
            </h2>
            <p className="text-xl text-muted-foreground">
              Upload your first business card and see the magic.
            </p>
          </div>
          
          <Card className="border-2 border-dashed border-primary/20 bg-white/80 backdrop-blur-sm hover:border-primary/40 transition-colors">
            <CardContent className="p-12">
              <div className="text-center space-y-6">
                <div className="relative">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-2">Drop Your Cards Here</h3>
                  <p className="text-muted-foreground mb-6">
                    JPG, PNG, PDF up to 10MB each
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    <FileImage className="w-5 h-5 mr-2" />
                    Choose Files
                  </Button>
                  <Button variant="outline" size="lg">
                    <Camera className="w-5 h-5 mr-2" />
                    Take Photo
                  </Button>
                  <Button variant="outline" size="lg">
                    <Smartphone className="w-5 h-5 mr-2" />
                    Mobile App
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 text-sm text-muted-foreground">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Instant</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>99% Accurate</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span>Secure</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Process preview */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Camera className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">1. Scan</h4>
              <p className="text-sm text-muted-foreground">
                Take a photo or upload
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">2. Extract</h4>
              <p className="text-sm text-muted-foreground">
                AI reads all information
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <h4 className="font-semibold mb-2">3. Save</h4>
              <p className="text-sm text-muted-foreground">
                Organized & searchable
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}