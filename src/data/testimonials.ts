/* =========================================================================
   Testimonials — keep only real, attributable quotes with a name, title
   and (ideally) a link. Two strong ones beat six vague ones.
   Quotes below are carried over verbatim from the previous site.
   TODO(wahaj): add `url` linking to each person's LinkedIn recommendation.
   ========================================================================= */

import type { ImageMetadata } from 'astro';

import muazz from '@/assets/people/muazz-khan.jpeg';
import waseem from '@/assets/people/muhammad-waseem.jpeg';

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
  photo: ImageMetadata;
  url?: string;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'Wahaj is a highly skilled and professional SQA with a strong passion for computer science. His expertise in SDET and DevOps makes him stand out. He is hardworking, brings vibrant energy to the team, and makes collaboration enjoyable. I wholeheartedly recommend him for any task related to software quality assurance and DevOps.',
    name: 'Muazz Khan',
    title: 'Senior Software Engineer',
    photo: muazz,
    url: undefined, // TODO(wahaj)
  },
  {
    quote:
      'I had the pleasure of working with Wahaj as an SQA Engineer, and he is an invaluable asset to the team. His attention to detail, problem-solving skills, and understanding of QA practices ensure project success. Wahaj’s technical expertise and dedication make him stand out. I highly recommend him for any future endeavours.',
    name: 'Muhammad Waseem',
    title: 'Senior QA Engineer',
    photo: waseem,
    url: undefined, // TODO(wahaj)
  },
];
