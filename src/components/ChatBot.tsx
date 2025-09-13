import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your Campus AI assistant. I can help you with information about facilities, dining, library services, schedules, and more. What would you like to know?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const suggestedQuestions = [
    "What time does the library close?",
    "Where can I find the cafeteria?",
    "Show me today's class schedule",
    "What facilities are available?",
  ];

  const getCampusResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes("library") || lowerQuestion.includes("book")) {
      return "Our library is open Monday-Friday 7:00 AM - 11:00 PM, and weekends 9:00 AM - 9:00 PM. We have study rooms, computer labs, research assistance, and a vast collection of books and digital resources. You can book study rooms online through our portal.";
    }
    
    if (lowerQuestion.includes("dining") || lowerQuestion.includes("food") || lowerQuestion.includes("cafeteria")) {
      return "We have multiple dining options: Main Cafeteria (6:30 AM - 10:00 PM), Food Court with 5 restaurants (11:00 AM - 9:00 PM), Coffee Shop (6:00 AM - 6:00 PM), and Snack Bars throughout campus. Meal plans are available for students.";
    }
    
    if (lowerQuestion.includes("schedule") || lowerQuestion.includes("class") || lowerQuestion.includes("time")) {
      return "Class schedules vary by semester. Regular classes run Monday-Friday 8:00 AM - 6:00 PM. You can find your personal schedule in the student portal. Lab sessions and seminars may extend to evenings and weekends.";
    }
    
    if (lowerQuestion.includes("facilities") || lowerQuestion.includes("building")) {
      return "Our campus features modern classrooms, state-of-the-art labs, sports facilities, student center, health clinic, bookstore, parking areas, and beautiful green spaces. All buildings are wheelchair accessible with elevators and ramps.";
    }
    
    if (lowerQuestion.includes("gym") || lowerQuestion.includes("sports") || lowerQuestion.includes("recreation")) {
      return "The Recreation Center is open 6:00 AM - 11:00 PM on weekdays and 8:00 AM - 10:00 PM on weekends. We have a full gym, swimming pool, basketball courts, and group fitness classes. Student ID required for access.";
    }
    
    return "I'd be happy to help! I can provide information about campus facilities, dining options, library services, class schedules, recreation centers, and administrative procedures. Feel free to ask me anything specific about our campus!";
  };

  const handleSendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getCampusResponse(text),
        isBot: true,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Chat Header */}
      <div className="bg-gradient-hero text-white p-6 rounded-t-xl">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Bot className="w-6 h-6" />
          </div>
          <div>
            <h2 className="text-xl font-semibold">Campus AI Assistant</h2>
            <p className="text-white/80 text-sm">Ask me anything about campus life!</p>
          </div>
          <Sparkles className="w-5 h-5 ml-auto text-white/60" />
        </div>
      </div>

      {/* Chat Messages */}
      <Card className="border-0 border-t-0 rounded-t-none min-h-[500px] max-h-[600px] overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? "flex-row" : "flex-row-reverse space-x-reverse"}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${message.isBot ? "bg-gradient-hero" : "bg-gradient-energy"}`}>
                {message.isBot ? <Bot className="w-4 h-4 text-white" /> : <User className="w-4 h-4 text-white" />}
              </div>
              <div className={`p-3 rounded-lg ${message.isBot ? "bg-muted" : "bg-gradient-campus text-white"}`}>
                <p className="text-sm leading-relaxed">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? "text-muted-foreground" : "text-white/70"}`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-[80%]">
              <div className="w-8 h-8 rounded-full flex items-center justify-center bg-gradient-hero">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="p-3 rounded-lg bg-muted">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                  <div className="w-2 h-2 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Suggested Questions */}
      <div className="p-4 bg-muted/50 border border-t-0 rounded-b-xl">
        <p className="text-sm text-muted-foreground mb-3">Try asking:</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {suggestedQuestions.map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => handleSendMessage(question)}
              className="text-xs"
            >
              {question}
            </Button>
          ))}
        </div>

        {/* Input */}
        <div className="flex space-x-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about campus facilities, dining, library, schedules..."
            className="flex-1"
          />
          <Button
            onClick={() => handleSendMessage()}
            variant="hero"
            size="icon"
            disabled={!inputValue.trim() || isTyping}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;