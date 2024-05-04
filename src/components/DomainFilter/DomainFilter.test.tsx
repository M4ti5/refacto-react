import { shallow } from 'enzyme';
import { render, screen } from '@testing-library/react';
import { DomainFilter } from './DomainFilter';

describe('components', () => {
  describe('DomainFilter', () => {

    const domains = [
      'FR_AA-GOD',
      'FR_ZZ-DEV',
    ]

    it('should allow the user to filter', () => {
      const wrapper = shallow(<DomainFilter domains={domains} />);

      expect(wrapper.find('select')).toHaveLength(3);
    })

    it('should render', async () => {
      render(<DomainFilter domains={domains} />);

      expect(await screen.findByText('DEV')).toBeTruthy();
    });
  })
})
