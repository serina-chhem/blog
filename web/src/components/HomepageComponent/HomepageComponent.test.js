import { render } from '@redwoodjs/testing/web'

import HomepageComponent from './HomepageComponent'

describe('HomepageComponent', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomepageComponent />)
    }).not.toThrow()
  })
})
