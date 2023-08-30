class ResumeBuilder {
  private resume: Resume = {
    profile: {
      name: {
        first_name: '',
        last_name: '',
      },
      address: {
        city: '',
        state: '',
        zip: '',
      },
      phone: '',
    },
  };

  addName(name: Name) {
    this.resume.profile.name.first_name = name.first_name;
    this.resume.profile.name.last_name = name.last_name;
    return this.resume;
  }

  addAddress(address: Address) {
    this.resume.profile.address = address;
    return this.resume;
  }

  build() {
    return this.resume;
  }
}

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

export default ResumeBuilder;
