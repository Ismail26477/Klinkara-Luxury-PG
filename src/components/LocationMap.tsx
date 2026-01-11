"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MapPin, Navigation, Train, Coffee, ShoppingBag, GraduationCap } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/lib/animations"

const nearbyPlaces = [
  { icon: Train, name: "Koramangala Metro", distance: "0.5 km", time: "5 min walk" },
  { icon: Coffee, name: "Starbucks Coffee", distance: "200 m", time: "2 min walk" },
  { icon: ShoppingBag, name: "Forum Mall", distance: "1.2 km", time: "10 min walk" },
  { icon: GraduationCap, name: "Christ University", distance: "2 km", time: "15 min drive" },
]

const LocationMap = () => {
  const [mapboxToken, setMapboxToken] = useState("")
  const [showTokenInput, setShowTokenInput] = useState(true)

  return (
    <section id="location" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary text-sm font-medium tracking-[0.2em] uppercase mb-4">Prime Location</p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">Find Us Easily</h2>
          <p className="text-muted-foreground text-lg">
            Strategically located in the heart of Koramangala, with easy access to IT parks, colleges, and lifestyle
            destinations.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Map */}
          <FadeIn direction="left" className="lg:col-span-2">
            <div className="relative aspect-video rounded-2xl overflow-hidden shadow-elevated bg-muted">
              {showTokenInput ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-8 max-w-md">
                    <iframe
                      src="https://www.openstreetmap.org/export/embed.html?bbox=77.6150%2C12.9250%2C77.6350%2C12.9450&layer=mapnik&marker=12.9350%2C77.6250"
                      className="w-full h-64 rounded-xl border-0 mb-4"
                      title="Klinkara Location"
                    />
                    <p className="text-muted-foreground text-sm mb-4">
                      For an interactive map experience, enter your Mapbox public token
                    </p>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Enter Mapbox public token"
                        value={mapboxToken}
                        onChange={(e) => setMapboxToken(e.target.value)}
                        className="flex-1"
                      />
                      <Button onClick={() => mapboxToken && setShowTokenInput(false)} className="bg-primary">
                        Load Map
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Interactive Map Loading...</p>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between mt-4 p-4 bg-cream-dark rounded-xl">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-foreground font-medium">456 MG Road, Viman Nagar, Pune - 411014</span>
              </div>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={() => window.open("https://maps.google.com/?q=Viman+Nagar+Pune", "_blank")}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Get Directions
              </Button>
            </div>
          </FadeIn>

          {/* Nearby Places */}
          <FadeIn direction="right" delay={0.2}>
            <div className="bg-cream-dark rounded-2xl p-6">
              <h3 className="font-serif text-xl font-bold text-foreground mb-6">What's Nearby</h3>
              <StaggerContainer className="space-y-4">
                {nearbyPlaces.map((place, index) => (
                  <StaggerItem key={index}>
                    <div className="flex items-center gap-4 p-4 bg-card rounded-xl hover:shadow-soft transition-shadow">
                      <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
                        <place.icon className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">{place.name}</p>
                        <p className="text-sm text-muted-foreground">{place.time}</p>
                      </div>
                      <span className="text-sm font-medium text-primary">{place.distance}</span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>

              <div className="mt-6 p-4 bg-gradient-gold rounded-xl text-center">
                <p className="text-secondary font-medium">🚗 Free pickup from metro station for site visits</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

export default LocationMap
