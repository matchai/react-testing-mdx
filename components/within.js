export const within = `
import {render, within} from 'react-testing-library'

// ...

const {getByTestId} = render(/* stuff */)
const messagesSection = getByTestId('messages')
const hello = within(messagesSection).getByText('hello');
`.trim();
