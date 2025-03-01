import React, { useEffect, useState, useMemo } from "react";
import { Input } from "@/components/ui/input";

interface JobTitleInputProps {
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  name: string;
}

const JobTitleInput: React.FC<JobTitleInputProps> = ({
  value,
  onChange,
  onBlur,
  name,
}) => {
  const jobTitles = useMemo(
    () => [
      "Frontend Developer",
      "Backend Engineer",
      "Full Stack Developer",
      "DevOps Engineer",
      "Mobile App Developer",
      "Senior Consultant",
      "QA Engineer",
      "Project Manager",
      "Data Analyst",
    ],
    [],
  );

  const [placeholder, setPlaceholder] = useState(jobTitles[0] ?? "Job Title");
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let typingInterval: NodeJS.Timeout;

    if (isTyping) {
      typingInterval = setInterval(() => {
        if (index < jobTitles.length) {
          setPlaceholder(jobTitles[index] ?? "Job Title");
          setIndex((prevIndex) => prevIndex + 1);
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          setPlaceholder("Job Title");
        }
      }, 1000);
    }

    return () => clearInterval(typingInterval);
  }, [index, isTyping, jobTitles]);

  return (
    <Input
      className="md:text-md border-homepagecardforeground placeholder:text-homepagecardforeground focus-visible:ring-none h-10 w-full font-medium"
      name={name}
      type="text"
      placeholder={placeholder}
      value={value ?? ""}
      onChange={(e) => onChange(e.target.value)}
      onBlur={onBlur}
    />
  );
};

export default JobTitleInput;
