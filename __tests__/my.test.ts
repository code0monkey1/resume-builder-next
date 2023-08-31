import ResumeBuilder, { Address } from '../src/ResumeBuilder';

describe('First test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });

  it('should have a ResumeBuilder class', () => {
    expect(ResumeBuilder).toBeDefined();
  });

  it('gives name after adding name', () => {
    //given : user is on the resume builder

    const sut = getResumeBuilder();
    const name = { first_name: 'chiranjeev', last_name: 'thomas' };

    //when : user adds name

    sut.addName(name);

    //then : the resume has the given name

    const result = sut.build();

    expect(result.profile.name).toEqual(name);
  });

  it('gives address after adding address', () => {
    //given : user is on the resume builder

    const sut = getResumeBuilder();
    const address: Address = {
      city: 'dwarka',
      state: 'delhi',
      zip: '560067',
    };

    //when : user adds address

    sut.addAddress(address);

    //then : the resume has the given address

    const result = sut.build();

    expect(result.profile.address).toStrictEqual(address);
  });
});

function getResumeBuilder() {
  return new ResumeBuilder();
}
