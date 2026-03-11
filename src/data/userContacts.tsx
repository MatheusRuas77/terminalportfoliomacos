export interface Contact {
  id: string;
  type: string;
  title: string;
  description: string;
  url: string;
  icon: string;
}

export const userProfile = {
  name: 'MATHEUS XAVIER',
  title: 'profile.title',
  avatar: '/avatar.jpeg',
};

export const userContacts: Contact[] = [
  {
    id: 'email',
    type: 'contact.email',
    title: 'contact.email',
    description: 'contact.emailValue',
    url: 'mailto:matheusrgx@gmail.com',
    icon: '✉️',
  },
  {
    id: 'github',
    type: 'contact.github',
    title: 'contact.github',
    description: 'contact.githubValue',
    url: 'https://github.com/MatheusXavier7',
    icon: '🐙',
  },
  {
    id: 'linkedin',
    type: 'contact.linkedin',
    title: 'contact.linkedin',
    description: 'contact.linkedinValue',
    url: 'https://linkedin.com/in/matheus-xavier-a428b3281',
    icon: '💼',
  },
];