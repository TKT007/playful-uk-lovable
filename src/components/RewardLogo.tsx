import { cn } from "@/lib/utils";

interface RewardLogoProps {
  className?: string;
}

export const RewardLogo = ({ className }: RewardLogoProps) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <div className="relative">
        <img 
          src="/lovable-uploads/77308eb6-e688-4d01-8997-ec0bdc57f1ab.png" 
          alt="Logo" 
          className="w-16 h-16 rounded-2xl shadow-lg object-cover"
        />
      </div>
    </div>
  );
};
