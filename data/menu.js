export const menuItems = [
  {
    id: 1,
    textKey: "home",
    url: "#",
    subMenu: [
      {
        textKey: "homeSocialMedia",
        url: "/",
        isActive: true,
      },
      {
        textKey: "homeCodingAssistant",
        url: "/home-2",
      },
      {
        textKey: "homeImageGenerator",
        url: "/home-3",
      },
      {
        textKey: "homeAICopywriting",
        url: "/home-4",
      },
    ],
    hasChildren: true,
    isActive: true,
  },
  {
    id: 2,
    textKey: "about",
    url: "#",
    subMenu: [
      {
        textKey: "about",
        url: "/about",
      },
      {
        textKey: "faqs",
        url: "/faqs",
      },
      {
        textKey: "error404",
        url: "/404",
      },
    ],
    hasChildren: true,
  },
  {
    id: 3,
    textKey: "useCases",
    url: "#",
    subMenu: [
      {
        textKey: "useCases",
        url: "/use-cases",
      },
      {
        textKey: "useCasesDetail",
        url: "/use-cases-details/1",
      },
    ],
    hasChildren: true,
  },
  {
    id: 4,
    textKey: "shop",
    url: "#",
    subMenu: [
      {
        textKey: "shop",
        url: "/shop",
      },
      {
        textKey: "singleProduct",
        url: "/single-product/1",
      },
    ],
    hasChildren: true,
  },
  {
    id: 5,
    textKey: "blog",
    url: "#",
    subMenu: [
      {
        textKey: "blog",
        url: "/blog",
      },
      {
        textKey: "blogDetail",
        url: "/blog-detail/1",
      },
    ],
    hasChildren: true,
  },
  {
    id: 6,
    textKey: "contact",
    url: "/contact-us",
  },
];
