export type TitleDetails = {
  title: string;
  description: string;
  media: Array<{
    id: string;
    type: string;
    url: string;
    thumbnail?: string;
  }>[];
  ctaText: {
    name: string;
    value: string;
  };
  checkList?: Array<{
    color: string;
    icon: string;
    id: string;
    list_page_visibility: boolean;
    text: string;
  }>;
  isLoading?: boolean;
};

export type MediaItem = {
  resource_type: string;
  resource_value: string;
  thumbnail_url?: string;
};

export type Video = {
  id: string;
  thumbnail: string;
};

export type titleTopAreaType = {
  title: string;
  description: string;
  isLoading?: boolean;
};

export type InstructorValue = {
  description: string;
  has_instructor_page: boolean;
  image: string;
  name: string;
  short_description: string;
  slug: string;
};

export type InstructorSection = {
  type?: 'instructors';
  values: InstructorValue[];
};

export type FeatureValue = {
  icon: string;
  id: string;
  subtitle: string;
  title: string;
};

export type FeatureSection = {
  type?: 'features';
  name: string;
  description: string;
  bg_color: string;
  order_idx: number;
  values: FeatureValue[];
};

export type LearningValues = 
{
  color: string;
  icon: string;
  id: string;
  text: string;
};

export type LearningSection = {
  name: string;
  values: LearningValues[];
};
