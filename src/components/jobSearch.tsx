import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

export default function JobSearch() {
  return (
    <>
      <div className="flex w-full items-center space-x-4">
        <Input
          className="md:text-md h-12 rounded-full border-none bg-gradient-to-r from-periwinkle to-periwinkledark font-medium text-card"
          type="email"
          placeholder="Job Title, Skill or Company"
        />
        <Input
          className="md:text-md h-12 rounded-full border-none bg-gradient-to-r from-periwinkle to-periwinkledark font-medium text-card"
          type="text"
          placeholder="Post Code"
        />
        <Button
          className="text-md h-12 w-72 rounded-full bg-gradient-to-r from-periwinkle to-periwinkledark text-card"
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
