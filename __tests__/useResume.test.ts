import useResume from '@/app/src/ResumeBuilder/hooks/useResume';
import { renderHook } from '@testing-library/react';

describe('test', () => {
  it('renders', () => {
    const { result } = renderHook(useResume);

    expect(result.current.resume).toStrictEqual({ name: 'chiranjeev' });
  });
});
