import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function JobSearch() {
  return (
    <div className="flex w-full items-center space-x-2">
      <Input
        className="from-periwinkle to-periwinkledark text-card md:text-md h-12 rounded-full border-none bg-gradient-to-r font-medium"
        type="email"
        placeholder="Job Title, Skill or Company"
      />
      <Input
        className="from-periwinkle to-periwinkledark text-card text-md md:text-md h-12 rounded-full border-none bg-gradient-to-r font-medium"
        type="text"
        placeholder="Post Code"
      />
      <Button
        className="from-periwinkle to-periwinkledark text-card text-md h-12 w-72 rounded-full bg-gradient-to-r"
        type="submit"
      >
        Search
      </Button>
    </div>
  );
}
