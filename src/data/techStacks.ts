import {
  siReact,
  siAngular,
  siVuedotjs,
  siSvelte,
  siEmberdotjs,
  siPhp,
  siDocker,
  siGithub,
  siAmazonwebservices,
  siNextdotjs,
  siNuxt,
  siGatsby,
  siExpress,
  siJavascript,
  siTypescript,
  siPython,
  siRuby,
  siCoffeescript,
  siC,
  siDotnet,
  siGo,
  siRust,
  siMysql,
  siPostgresql,
  siMongodb,
  siRedis,
  siAmazondynamodb,
  siSqlite,
  siGooglecloud,
  siHeroku,
  siVercel,
  siNetlify,
  siKubernetes,
  siGitlab,
  siJenkins,
  siCircleci,
  siJest,
  siCypress,
  siMocha,
  siWordpress,
  siShopify,
  siFirebase,
  siSupabase,
} from "simple-icons";

type TechStack = {
  value: string;
  label: string;
  icon: string;
  iconColor: string;
  imageUrl?: string;
};

export const techStacksAndServices: TechStack[] = [
  // Frameworks & Libraries
  { value: "react", label: "React", icon: siReact.path, iconColor: "#61DAFB" },
  {
    value: "angular",
    label: "Angular",
    icon: siAngular.path,
    iconColor: "#C3002F",
  },
  { value: "vue", label: "Vue", icon: siVuedotjs.path, iconColor: "#4FC08D" },
  {
    value: "svelte",
    label: "Svelte",
    icon: siSvelte.path,
    iconColor: "#FF3E00",
  },
  {
    value: "ember",
    label: "Ember",
    icon: siEmberdotjs.path,
    iconColor: "#E04E39",
  },
  {
    value: "nextjs",
    label: "Next.js",
    icon: siNextdotjs.path,
    iconColor: "#FFFFFF",
  },
  {
    value: "nuxtjs",
    label: "Nuxt.js",
    icon: siNuxt.path,
    iconColor: "#00DC82",
  },
  {
    value: "gatsby",
    label: "Gatsby",
    icon: siGatsby.path,
    iconColor: "#663399",
  },
  {
    value: "express",
    label: "Express.js",
    icon: siExpress.path,
    iconColor: "#FFFFFF",
  },

  // Languages
  {
    value: "javascript",
    label: "JavaScript",
    icon: siJavascript.path,
    iconColor: "#F7DF1E",
  },
  {
    value: "typescript",
    label: "TypeScript",
    icon: siTypescript.path,
    iconColor: "#3178C6",
  },
  {
    value: "python",
    label: "Python",
    icon: siPython.path,
    iconColor: "#3776AB",
  },
  { value: "php", label: "PHP", icon: siPhp.path, iconColor: "#777BB4" },
  {
    value: "ruby",
    label: "Ruby",
    icon: siRuby.path,
    iconColor: "#CC342D",
  },
  {
    value: "java",
    label: "Java",
    icon: siCoffeescript.path,
    iconColor: "#007396",
    imageUrl: "icons/java-icon.svg",
  },
  {
    value: "csharp-dotnet",
    label: "C# / .NET",
    icon: siDotnet.path,
    iconColor: "#512BD4",
  },
  {
    value: "golang",
    label: "Go",
    icon: siGo.path,
    iconColor: "#00ADD8",
  },
  {
    value: "rust",
    label: "Rust",
    icon: siRust.path,
    iconColor: "#FFFFFF",
  },

  // Databases
  {
    value: "mysql",
    label: "MySQL",
    icon: siMysql.path,
    iconColor: "#4479A1",
  },
  {
    value: "postgresql",
    label: "PostgreSQL",
    icon: siPostgresql.path,
    iconColor: "#4169E1",
  },
  {
    value: "mongodb",
    label: "MongoDB",
    icon: siMongodb.path,
    iconColor: "#47A248",
  },
  {
    value: "redis",
    label: "Redis",
    icon: siRedis.path,
    iconColor: "#FF4438",
  },
  {
    value: "dynamodb",
    label: "DynamoDB",
    icon: siAmazondynamodb.path,
    iconColor: "#4053D6",
  },
  {
    value: "sqlite",
    label: "SQLite",
    icon: siSqlite.path,
    iconColor: "#003B57",
  },

  // Cloud Platforms
  {
    value: "aws",
    label: "AWS",
    icon: siAmazonwebservices.path,
    iconColor: "#FF9900",
  },
  {
    value: "gcp",
    label: "Google Cloud Platform",
    icon: siGooglecloud.path,
    iconColor: "#4285F4",
  },
  {
    value: "heroku",
    label: "Heroku",
    icon: siHeroku.path,
    iconColor: "#430098",
  },
  {
    value: "vercel",
    label: "Vercel",
    icon: siVercel.path,
    iconColor: "#FFFFFF",
  },
  {
    value: "netlify",
    label: "Netlify",
    icon: siNetlify.path,
    iconColor: "#00C7B7",
  },

  // DevOps & Containers
  {
    value: "docker",
    label: "Docker",
    icon: siDocker.path,
    iconColor: "#2496ED",
  },
  {
    value: "kubernetes",
    label: "Kubernetes",
    icon: siKubernetes.path,
    iconColor: "#326CE5",
  },
  {
    value: "github",
    label: "GitHub",
    icon: siGithub.path,
    iconColor: "#181717",
  },
  {
    value: "gitlab",
    label: "GitLab",
    icon: siGitlab.path,
    iconColor: "#FC6D26",
  },
  {
    value: "jenkins",
    label: "Jenkins",
    icon: siJenkins.path,
    iconColor: "#D24939",
  },
  {
    value: "circleci",
    label: "CircleCI",
    icon: siCircleci.path,
    iconColor: "#cbcbcb",
  },

  // Testing Tools
  {
    value: "jest",
    label: "Jest",
    icon: siJest.path,
    iconColor: "#C21325",
  },
  {
    value: "cypress",
    label: "Cypress",
    icon: siCypress.path,
    iconColor: "#69D3A7",
  },
  {
    value: "mocha",
    label: "Mocha",
    icon: siMocha.path,
    iconColor: "#8D6748",
  },

  // CMS & E-commerce
  {
    value: "wordpress",
    label: "WordPress",
    icon: siWordpress.path,
    iconColor: "#21759B",
  },
  {
    value: "shopify",
    label: "Shopify",
    icon: siShopify.path,
    iconColor: "#7AB55C",
  },

  // Other Services
  {
    value: "firebase",
    label: "Firebase",
    icon: siFirebase.path,
    iconColor: "#DD2C00",
  },
  {
    value: "supabase",
    label: "Supabase",
    icon: siSupabase.path,
    iconColor: "#3FCF8E",
  },
];
