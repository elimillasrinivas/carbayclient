export const checkupServiceData = {
  id: "checkup",
  title: {
    first: "General Health Checkup",
    last: "in Hyderabad",
  },
  description: {
    first: "",
    last: "",
  },
  services: [
    {
      id: "generalHealth",
      title: "General Health Check up",
      list: [
        "Battery - Check (Jump start if required)",
        "Coolant - Top up up to 500ml",
        "Brake Oil - Top up up to 100ml",
        "Wiper Fluid - Top up",
        "Air Filter - Clean",
        "AC Filter - Clean",
        "Brakes - Check",
        "Spark Plugs - Clean",
        "Radiator Fan - Check",
        "Engine Oil - Check",
        "Lights/Indicators - Check",
        "Horn - Check",
        "Tyre Air Pressure - Check",
      ],
      url: "https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/gen-health-checkup.webp",
    },
    {
      id: "otherServices",
      title: "Other Services",
      list: [
        "Brake Issues",
        "Suspension Issue",
        "Clutch Issue",
        "Steering Issue",
        "Axel Issue",
        "Noise Issue",
        "Leakage Issue",
        "Rat-bite Damage Issue",
      ],
      url: "https://s3.ap-south-1.amazonaws.com/prodimages.automovill.com/services/others.webp",
    },
  ],
  videoUrl: "https://www.youtube.com/embed/748R1A46RwU?controls=1",
  servicesDescription: [
    {
      title: {
        first: "",
        second: "",
      },
      subPoints: [],
      description: "",
      points: [],
    },
  ],
  faqs: [
    {
      question: "What if my car-battery requires jump start?",
      answer:
        "Customer can Avail 2 free Jump starts within 6 Months or 5000 kms",
    },
    {
      question: "Do you also fill Coolant and Brake Oil in this Package?",
      answer:
        "Yes, we do Top-Up of Coolant Upto 500Ml and Brake oil Upto 100ML",
    },
    {
      question: "Do you also scan my car?",
      answer: "Yes. We do scanning for free! (for our Automovill Customers).",
    },
    {
      question: "What if any problem gets identified during check-up?",
      answer:
        "Immediately we notify the customer about the issues in detail of repair needed",
    },
    {
      question:
        "Are there any additional charges applicable for General Health check-up (apart from the charges mentioned in the website/app)?",
      answer:
        "All the mentioned changes in the website/app are GST-inclusive. For any additional work or cost, we shall notify you for your consent before proceeding with that work.",
    },
  ],
};
