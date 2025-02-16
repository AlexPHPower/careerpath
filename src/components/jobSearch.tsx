import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Search, MapPin } from "lucide-react";

export default function JobSearch() {
  return (
    <>
      <div className="flex w-full items-center space-x-4">
        <div className="relative w-full">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-card" />
          <Input
            className="md:text-md h-12 w-full rounded-full border-none bg-gradient-to-r from-periwinkle to-periwinkledark pl-12 pr-4 font-medium text-card placeholder-card focus:from-periwinkledark focus:to-periwinkle"
            type="email"
            placeholder="Job Title, Skill or Company"
          />
        </div>
        <div className="relative w-full">
          <MapPin className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-card" />
          <Input
            className="md:text-md h-12 w-full rounded-full border-none bg-gradient-to-r from-periwinkle to-periwinkledark pl-12 pr-4 font-medium text-card placeholder-card focus:from-periwinkledark focus:to-periwinkle"
            type="text"
            placeholder="Post Code"
          />
        </div>
        <Button
          className="text-md h-12 w-72 rounded-full bg-periwinkle text-card hover:bg-periwinkledark"
          type="submit"
        >
          Search
        </Button>
      </div>
      <div className="flex w-full flex-col gap-4">
        <div className="justify-left flex items-center gap-4">
          <Checkbox
            id="permanent"
            className="size-5 rounded-sm bg-periwinkle from-periwinkle to-periwinkledark data-[state=checked]:bg-periwinkledark"
          />
          <label htmlFor="permanent" className="text-md">
            Permanent
          </label>
          <Checkbox
            id="contract"
            className="size-5 rounded-sm bg-periwinkle from-periwinkle to-periwinkledark data-[state=checked]:bg-periwinkledark"
          />
          <label htmlFor="contract" className="text-md">
            Contract
          </label>
        </div>
        <div className="justify-left flex items-center gap-4">
          <Checkbox
            id="remote"
            className="size-5 rounded-sm bg-periwinkle from-periwinkle to-periwinkledark data-[state=checked]:bg-periwinkledark"
          />
          <label htmlFor="remote" className="text-md">
            Remote
          </label>
          <Checkbox
            id="hybrid"
            className="size-5 rounded-sm bg-periwinkle from-periwinkle to-periwinkledark data-[state=checked]:bg-periwinkledark"
          />
          <label htmlFor="hybrid" className="text-md">
            Hybrid
          </label>
          <Checkbox
            id="on-site"
            className="size-5 rounded-sm bg-periwinkle from-periwinkle to-periwinkledark data-[state=checked]:bg-periwinkledark"
          />
          <label htmlFor="on-site" className="text-md">
            On Site
          </label>
        </div>
      </div>
    </>
  );
}
