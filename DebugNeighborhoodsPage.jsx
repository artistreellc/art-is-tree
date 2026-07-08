import React, { useState, useEffect } from 'react';
import { serviceAreaNeighborhoods } from '@/data/serviceAreaNeighborhoods';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function DebugNeighborhoodsPage() {
  const [groupedNeighborhoods, setGroupedNeighborhoods] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a brief loading state for the admin view
    const timer = setTimeout(() => {
      const grouped = serviceAreaNeighborhoods.reduce((acc, neighborhood) => {
        const { city, region } = neighborhood;
        if (!acc[city]) {
          acc[city] = {};
        }
        if (!acc[city][region]) {
          acc[city][region] = [];
        }
        acc[city][region].push(neighborhood);
        return acc;
      }, {});
      setGroupedNeighborhoods(grouped);
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Neighborhoods Debug Panel</h1>
        <p className="text-muted-foreground mt-2">
          Verify local SEO data and regional categorizations for service areas. Total entries: {serviceAreaNeighborhoods.length}
        </p>
      </div>

      {isLoading ? (
        <div className="flex items-center justify-center p-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      ) : (
        <div className="space-y-8">
          {Object.entries(groupedNeighborhoods).map(([city, regions]) => (
            <Card key={city} className="overflow-hidden">
              <CardHeader className="bg-muted/50 border-b">
                <CardTitle className="text-2xl text-foreground flex items-center gap-3">
                  {city} 
                  <Badge variant="secondary" className="text-xs font-normal">
                    {Object.values(regions).flat().length} neighborhoods
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-6 bg-card text-card-foreground">
                {Object.entries(regions).map(([region, neighborhoods]) => (
                  <div key={region} className="space-y-3 border-l-2 border-primary/20 pl-4">
                    <h3 className="text-lg font-semibold text-primary/80">{region} Region</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {neighborhoods.map((n, idx) => (
                        <div key={idx} className="p-3 rounded-lg border bg-background text-foreground shadow-sm">
                          <div className="font-medium text-foreground">{n.name}</div>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{n.description}</p>
                          <div className="text-xs text-muted-foreground/60 mt-2 font-mono">
                            {n.lat.toFixed(4)}, {n.lng.toFixed(4)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}