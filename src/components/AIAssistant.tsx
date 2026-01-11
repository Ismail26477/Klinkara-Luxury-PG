"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const quickQuestions = [
  "What are the room prices?",
  "Is food included?",
  "What amenities are available?",
  "Can I schedule a visit?",
]

const botResponses: { [key: string]: string } = {
  room: "We offer 4 room types: Single Occupancy (₹12,000/month), Double Sharing (₹8,000/month), Triple Sharing (₹6,500/month), and Premium Suite (₹18,000/month). All rooms come with AC, attached bathroom, WiFi, and daily housekeeping.",
  price:
    "Our pricing ranges from ₹6,500 to ₹18,000 per month depending on occupancy. This includes all meals, WiFi, housekeeping, and access to all amenities. Would you like to know more about any specific room type?",
  food: "Yes! We provide 3 nutritious meals daily - breakfast, lunch, and dinner. Both vegetarian and non-vegetarian options are available. Our kitchen maintains high hygiene standards and uses fresh ingredients.",
  amenities:
    "Klinkara offers premium amenities including: High-speed WiFi, 24/7 security, gym, common area with TV, laundry service, modern kitchen, RO water, power backup, and covered parking.",
  visit:
    "I'd be happy to help you schedule a visit! You can fill out the booking form on our website, or call us at +91 98765 43210. Our visiting hours are Mon-Sat 9 AM - 7 PM and Sunday 10 AM - 5 PM.",
  location:
    "We're located at 456 MG Road, Viman Nagar, Pune - 411014. It's easily accessible from the city center. We also offer free pickup for site visits!",
  default:
    "Thank you for your interest in Klinkara Luxury PG! I can help you with information about our rooms, prices, amenities, food, and visit scheduling. What would you like to know?",
}

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to Klinkara Luxury PG. I'm your AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("room") || lowerMessage.includes("type")) {
      return botResponses["room"]
    }
    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("rent")) {
      return botResponses["price"]
    }
    if (lowerMessage.includes("food") || lowerMessage.includes("meal") || lowerMessage.includes("eat")) {
      return botResponses["food"]
    }
    if (lowerMessage.includes("amenity") || lowerMessage.includes("facility") || lowerMessage.includes("available")) {
      return botResponses["amenities"]
    }
    if (
      lowerMessage.includes("visit") ||
      lowerMessage.includes("tour") ||
      lowerMessage.includes("schedule") ||
      lowerMessage.includes("book")
    ) {
      return botResponses["visit"]
    }
    if (lowerMessage.includes("location") || lowerMessage.includes("address") || lowerMessage.includes("where")) {
      return botResponses["location"]
    }

    return botResponses["default"]
  }

  const handleSend = (message: string = inputValue) => {
    if (!message.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI response delay
    setTimeout(() => {
      const botMessage: Message = {
        id: messages.length + 2,
        text: getBotResponse(message),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-gold rounded-full shadow-gold flex items-center justify-center hover:scale-110 transition-transform duration-300 animate-pulse-glow ${
          isOpen ? "hidden" : ""
        }`}
      >
        <MessageCircle className="w-7 h-7 text-secondary" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)] h-[550px] max-h-[calc(100vh-6rem)] shadow-elevated border-0 flex flex-col overflow-hidden animate-scale-in">
          <CardHeader className="bg-gradient-navy text-cream p-4 flex flex-row items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-gold rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-secondary" />
              </div>
              <div>
                <h4 className="font-serif font-semibold">Klinkara Assistant</h4>
                <p className="text-cream/70 text-xs">Online • Ready to help</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-cream/10 rounded-full transition-colors">
              <X className="w-5 h-5" />
            </button>
          </CardHeader>

          <CardContent className="flex-1 flex flex-col p-0 overflow-hidden">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex gap-2 ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                      message.sender === "user"
                        ? "bg-secondary text-secondary-foreground"
                        : "bg-gradient-gold text-secondary"
                    }`}
                  >
                    {message.sender === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={`max-w-[75%] p-3 rounded-2xl ${
                      message.sender === "user"
                        ? "bg-secondary text-secondary-foreground rounded-tr-sm"
                        : "bg-muted text-foreground rounded-tl-sm"
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-8 h-8 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Bot className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="bg-muted p-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            {messages.length <= 2 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-muted-foreground mb-2">Quick questions:</p>
                <div className="flex flex-wrap gap-2">
                  {quickQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSend(question)}
                      className="text-xs px-3 py-1.5 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-border shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex gap-2"
              >
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="bg-gradient-gold hover:opacity-90 text-secondary"
                  disabled={!inputValue.trim() || isTyping}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default AIAssistant
