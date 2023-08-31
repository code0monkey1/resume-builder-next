import useResume from '@/src/ResumeBuilder/hooks/useResume';
import { act, renderHook } from '@testing-library/react';

describe('test', () => {
  it('renders', () => {
    const { result } = renderHook(useResume);

    act(() => result.current.setName('chiranjeev', 'thomas'));

    expect(result.current.resume.profile.name).toStrictEqual({
      first_name: 'chiranjeev',
      last_name: 'thomas',
    });
  });
});
