export type Resume = {
  profile: Profile;
};

export type Profile = {
  name: Name;
  address: Address;
  phone: string;
};

export type Address = {
  city: string;
  state: string;
  zip: string;
};

export type Name = {
  first_name: string;
  last_name: string;
};
