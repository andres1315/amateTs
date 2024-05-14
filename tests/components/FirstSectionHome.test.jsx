import { render, screen } from '@testing-library/react'
import { FirstSectionHome } from '../../src/components/FirstSectionHome'
describe('test components <FirstSectiomHome/>', () => {
  const urlImg = 'bg_home.jpg'
  const title = 'Resalta tu belleza natural 💗'
  test('should render correctly match with snapshot', () => {
    const { container } = render(<FirstSectionHome/>)
    /* expect(container).toMatchSnapshot() */
  })

  test('should render correctly with props', () => {
    render(<FirstSectionHome/>)
    expect(screen.getAllByRole('img')[0].getAttribute('src')).toBe(urlImg)
  })

  test('debe de mostrar el titulo', () => {
    render(<FirstSectionHome/>)

    // h1 has any text
    expect(screen.getByRole('heading').textContent).toBe(title)
  })
})
