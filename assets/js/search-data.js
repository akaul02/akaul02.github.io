// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "Papers, preprints, and talks.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-blogs",
          title: "Blogs",
          description: "Writing on engineering, accessibility, and whatever else I&#39;m thinking about.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blogs/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "Selected projects, prototypes, and class work.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "CV PDF",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-resume",
          title: "Resume",
          description: "Resume PDF",
          section: "Navigation",
          handler: () => {
            window.location.href = "/resume/";
          },
        },{id: "projects-lionsmed",
          title: 'LionsMed',
          description: "Crowdsourced real-time clinic data for New Yorkers, vital in a disaster.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_lionsmed/";
            },},{id: "projects-rekindle",
          title: 'ReKindle',
          description: "An immersive, projected group experience for rekindling connection.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_rekindle/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },];
