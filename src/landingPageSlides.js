import ContactUs from "./components/ContactUs";
import JoinUs from "./components/JoinUs";

export const slides = [
  {
    title: "beStronger",
    description: "social media app",

    component: (
      <h4>
        share posts with your friends and communicate with nutritionists,
        traniers and body builders
      </h4>
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
