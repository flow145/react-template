import { describe, expect, it } from 'vitest'

import { render, screen } from '~/shared/tests/utils'

import { App } from './App'

describe('App', () => {
  it('increments the counter when clicked', async () => {
    const { user } = render(<App />)

    const counter = screen.getByRole('button', { name: /count is 0/i })
    expect(counter).toBeInTheDocument()

    await user.click(counter)
    expect(counter).toHaveTextContent(/count is 1/i)
  })
})
