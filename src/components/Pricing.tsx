import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const Pricing = () => {
  const pricingData = [
    {
      title: "Free",
      description: "For individuals just getting started with ChatGPT",
      features: [
        "Assistance with writing, problem solving and more",
        "Access to GPT-4o mini",
        "Limited access to GPT-4o",
        "Limited access to data analysis, file uploads, vision, web browsing, and image generation",
        "Use custom GPTs",
      ],
      price: 0,
      buttonText: "Start now",
      buttonLink: "#",
      showLimits: false,
    },
    {
      title: "Plus",
      description: "For individuals looking to amplify their productivity",
      features: [
        "Early access to new features",
        "Access to GPT-4, GPT-4o, GPT-4o mini",
        "Up to 5x more messages for GPT-4o",
        "Access to data analysis, file uploads, vision, and web browsing",
        "DALL·E image generation",
        "Create and use custom GPTs",
      ],
      price: 20,
      buttonText: "Start now",
      buttonLink: "#",
      showLimits: true,
    },
  ];

  return (
    <div className="flex items-center justify-center w-full min-h-screen p-4 bg-black">
      <div className="w-full max-w-6xl">
        <h1 className="mb-12 text-5xl font-bold text-center text-white">
          Pricing
        </h1>
        <div className="grid gap-8 md:grid-cols-2">
          {pricingData.map((plan, index) => (
            <Card
              key={index}
              className="flex flex-col h-full bg-zinc-900 border-zinc-800"
            >
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-white">
                  {plan.title}
                </CardTitle>
                <p className="text-sm text-zinc-400">{plan.description}</p>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2">
                  {plan.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: featureIndex * 0.1 }}
                      className="flex items-center text-sm text-zinc-300"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col items-start">
                <p className="mb-4 text-3xl font-bold text-white">
                  ${plan.price}{" "}
                  <span className="text-sm font-normal text-zinc-400">
                    / month
                  </span>
                </p>
                <div className="flex items-center justify-between w-full">
                  <Button
                    variant="outline"
                    className="px-6 text-black bg-white rounded-full hover:bg-zinc-200"
                    asChild
                  >
                    <a href={plan.buttonLink}>{plan.buttonText}</a>
                  </Button>
                  {plan.showLimits && (
                    <a
                      href="#"
                      className="text-sm transition-colors text-zinc-400 hover:text-white"
                    >
                      Limits apply &gt;
                    </a>
                  )}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
