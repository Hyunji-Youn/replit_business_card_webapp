import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Search, Filter, Grid, List, MoreVertical, Star, Calendar, Eye } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Gallery() {
  const businessCards = [
    {
      id: 1,
      name: "Alex Thompson",
      company: "TechCorp",
      cardImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      scannedDate: "2024-06-10",
      tags: ["Tech"],
      starred: true,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Maria Rodriguez",
      company: "Creative Agency",
      cardImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=250&fit=crop",
      scannedDate: "2024-06-08",
      tags: ["Marketing"],
      starred: false,
      color: "from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "David Chen",
      company: "Innovation Labs",
      cardImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
      scannedDate: "2024-06-12",
      tags: ["Product"],
      starred: true,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "Sarah Wilson",
      company: "Design Studio",
      cardImage: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400&h=250&fit=crop",
      scannedDate: "2024-06-09",
      tags: ["Design"],
      starred: false,
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      name: "James Park",
      company: "Global Sales",
      cardImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      scannedDate: "2024-06-11",
      tags: ["Sales"],
      starred: true,
      color: "from-indigo-500 to-purple-500"
    },
    {
      id: 6,
      name: "Emma Davis",
      company: "Financial Partners",
      cardImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop&crop=face",
      scannedDate: "2024-06-07",
      tags: ["Finance"],
      starred: false,
      color: "from-teal-500 to-green-500"
    },
    {
      id: 7,
      name: "Robert Kim",
      company: "Tech Innovations",
      cardImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop",
      scannedDate: "2024-06-13",
      tags: ["Startup"],
      starred: true,
      color: "from-cyan-500 to-blue-500"
    },
    {
      id: 8,
      name: "Lisa Chen",
      company: "Marketing Pro",
      cardImage: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop",
      scannedDate: "2024-06-06",
      tags: ["Digital"],
      starred: false,
      color: "from-pink-500 to-rose-500"
    },
    {
      id: 9,
      name: "Michael Brown",
      company: "Consulting Group",
      cardImage: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=250&fit=crop",
      scannedDate: "2024-06-05",
      tags: ["Consulting"],
      starred: true,
      color: "from-emerald-500 to-teal-500"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Your Cards</h2>
              <p className="text-xl text-muted-foreground">
                Search and manage your scanned business cards.
              </p>
            </div>
            <div className="flex items-center space-x-2 mt-4 lg:mt-0">
              <Button variant="outline" size="sm">
                <Grid className="w-4 h-4 mr-2" />
                Grid
              </Button>
              <Button variant="ghost" size="sm">
                <List className="w-4 h-4 mr-2" />
                List
              </Button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search by name, company, or tag..." 
                className="pl-10"
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {businessCards.map((card) => (
            <Card key={card.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer">
              <div className={`h-2 bg-gradient-to-r ${card.color}`}></div>
              
              {/* Card image section */}
              <div className="relative overflow-hidden bg-slate-50">
                <ImageWithFallback 
                  src={card.cardImage}
                  alt={`${card.name} business card`}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 right-3 flex items-center space-x-2">
                  {card.starred && (
                    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    </div>
                  )}
                  <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity">
                    <MoreVertical className="w-4 h-4 text-slate-600" />
                  </div>
                </div>
                
                {/* Zoom icon */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Eye className="w-6 h-6 text-slate-700" />
                  </div>
                </div>
              </div>
              
              <CardContent className="p-4">
                {/* Basic info */}
                <div className="mb-3">
                  <h3 className="font-semibold text-lg mb-1">{card.name}</h3>
                  <p className="text-sm text-muted-foreground">{card.company}</p>
                </div>
                
                {/* Scan date */}
                <div className="flex items-center text-xs text-muted-foreground mb-3">
                  <Calendar className="w-3 h-3 mr-1" />
                  <span>{new Date(card.scannedDate).toLocaleDateString()}</span>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {card.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs px-2 py-1">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                {/* Action buttons */}
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" className="flex-1 text-xs">
                    View
                  </Button>
                  <Button size="sm" className="flex-1 text-xs bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700">
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
            <div className="text-2xl font-bold text-blue-600 mb-2">{businessCards.length}</div>
            <div className="text-sm text-muted-foreground">Total Cards</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-2xl font-bold text-purple-600 mb-2">
              {businessCards.filter(card => card.starred).length}
            </div>
            <div className="text-sm text-muted-foreground">Starred</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-2xl font-bold text-green-600 mb-2">7</div>
            <div className="text-sm text-muted-foreground">This Week</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
            <div className="text-2xl font-bold text-orange-600 mb-2">
              {Array.from(new Set(businessCards.flatMap(card => card.tags))).length}
            </div>
            <div className="text-sm text-muted-foreground">Tags</div>
          </div>
        </div>
      </div>
    </section>
  );
}