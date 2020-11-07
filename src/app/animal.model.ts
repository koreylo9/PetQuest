export class Animals {
  animals: [Animal];
  pagination: Pagination;
}

export interface Animal {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: Breeds;
  colors: Colors;
  age: string;
  gender: string;
  size: string;
  coat?: any;
  attributes: Attributes;
  environment: Environment;
  tags: any[];
  name: string;
  description: string;
  organization_animal_id: string;
  photos: Photo[];
  primary_photo_cropped: PrimaryPhotoCropped;
  videos: any[];
  status: string;
  status_changed_at: Date;
  published_at: Date;
  distance?: any;
  contact: Contact;
  _links: Links;
  view: string;
}

export class Pagination {
  count_per_page: number;
  current_page: number;
  total_pages: number;
  total_count: number;
  _links: Links;
}

export class Links {
  previous: Previous;
  next: Next;

}

export class Previous {
  href: string;

}

export class Next {
  href: string;

}

export interface Breeds {
      primary: string;
      secondary?: any;
      mixed: boolean;
      unknown: boolean;
  }

export interface Colors {
      primary?: any;
      secondary?: any;
      tertiary?: any;
}

export interface Attributes {
      spayed_neutered: boolean;
      house_trained: boolean;
      declawed?: any;
      special_needs: boolean;
      shots_current: boolean;
}

export interface Environment {
      children?: any;
      dogs?: any;
      cats?: any;
}

export interface Photo {
      small: string;
      medium: string;
      large: string;
      full: string;
}

export interface PrimaryPhotoCropped {
      small: string;
      medium: string;
      large: string;
      full: string;
}

export interface Address {
      address1: string;
      address2?: any;
      city: string;
      state: string;
      postcode: string;
      country: string;
}

export interface Contact {
      email: string;
      phone: string;
      address: Address;
}

export interface Self {
      href: string;
}

export interface Type {
      href: string;
}

export interface Organization {
      href: string;
}

export interface Links {
      self: Self;
      type: Type;
      organization: Organization;
}


