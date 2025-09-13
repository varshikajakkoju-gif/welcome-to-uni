import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";

interface QuoteCardProps {
  quote: string;
  author?: string;
  variant?: "default" | "nature" | "energy";
}

const QuoteCard = ({ quote, author, variant = "default" }: QuoteCardProps) => {
  const getVariantClasses = () => {
    switch (variant) {
      case "nature":
        return "bg-gradient-to-br from-secondary-light to-emerald-100 border-secondary/20";
      case "energy":
        return "bg-gradient-to-br from-accent-light to-orange-100 border-accent/20";
      default:
        return "bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20";
    }
  };

  return (
    <Card className={`p-6 ${getVariantClasses()} hover-lift`}>
      <div className="flex items-start space-x-3">
        <Quote className="w-6 h-6 text-primary/60 flex-shrink-0 mt-1" />
        <div>
          <blockquote className="text-primary/80 font-medium italic leading-relaxed">
            "{quote}"
          </blockquote>
          {author && (
            <cite className="text-sm text-muted-foreground mt-2 block not-italic">
              — {author}
            </cite>
          )}
        </div>
      </div>
    </Card>
  );
};

export default QuoteCard;