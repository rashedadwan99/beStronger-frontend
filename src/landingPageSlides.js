import ContactUs from "./components/ContactUs";
import JoinUs from "./components/JoinUs";

export const slides = [
  {
    title: "beStronger",
    description: "social media app",

    component: (
      <p>
        share posts with your friends and communicate with nutritionists,
        traniers and body builders
      </p>
    ),
  },
  {
    title: "contact us",
    description: "follow us on social media",
    component: <ContactUs />,
  },
  {
    title: "join us",
    description: "join our community",
    component: <JoinUs />,
  },
];
