export const example = `
import {render, Simulate, wait} from 'react-testing-library'

test('displays greeting when clicking Load Greeting', async () => {
  // Arrange
  const {
    getByLabelText,
    getByText,
    getByTestId
  } = render(<GreetingFetcher />)

  // Act
  getByLabelText('name').value = 'Mary'
  fireEvent.click(getByText('Load Greeting'))
  // let's wait for our mocked \`get\` request promise to resolve
  // wait will wait until the callback doesn't throw an error
  await wait(() => getByTestId('greeting-text'))

  // Assert
  expect(getByTestId('greeting-text')).toHaveTextContent('Hello Mary')
})
`.trim();
