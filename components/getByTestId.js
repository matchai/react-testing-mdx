export const getByTestId = `
import {render} from 'react-testing-library'

const {getByTestId} = render(<input data-testid="username-input" />)

// Effectively container.querySelector(\`[data-testid="$\{yourId}"]\`)
const usernameInputElement = getByTestId('username-input')
`.trim();
