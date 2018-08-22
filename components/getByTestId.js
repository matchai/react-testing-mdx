export const getByTestId = `
import {render} from 'react-testing-library'

const {getByTestId} = render(<input data-testid="username-input" />)
const usernameInputElement = getByTestId('username-input')
`.trim();
