export type Brand = {
  name: string;
  tagline: string;
  description: string;
  location: string;
  social: { label: string; href: string }[];
};

export type Store = {
  address: string;
  hours: string[];
  email: string;
  phone: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  detail: string;
};
