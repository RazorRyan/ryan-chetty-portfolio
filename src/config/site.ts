export const siteConfig = {
  firstName: 'Ryan',
  lastName: 'Chetty',
  fullName: 'Ryan Chetty',
  title: 'Senior Software Engineer / Tech Lead',
  location: 'South Africa',
  email: 'ryan.chetty16@gmail.com',
  phone: '0734654994',
  githubUsername: 'RazorRyan',
  socialLinks: {
    linkedin: 'https://www.linkedin.com/in/ryan-chetty-89121865/',
    github: 'https://github.com/RazorRyan'
  },
  // Keep this exact bio as requested and update only if Ryan provides a new official version.
  coreBio:
    'Technical Lead focused on building scalable, high-quality software systems with a strong emphasis on architecture and clean design. I’m passionate about leveraging AI to solve complex problems and drive intelligent solutions. Outside of the enterprise space, I’m deeply engaged in game development and gaming, blending creativity with technical expertise.',
  seo: {
    title: 'Ryan Chetty | Senior Software Engineer / Tech Lead',
    description:
      'Portfolio of Ryan Chetty, Senior Software Engineer / Tech Lead in South Africa focused on scalable backend systems, cloud architecture, enterprise engineering, and AI-driven solutions.'
  }
} as const;

export const githubProfileImageUrl = `https://github.com/${siteConfig.githubUsername}.png?size=400`;
