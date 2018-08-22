export const selectors = `
// Instead of using
const usernameInput = wrapper.find('input').first();
const passwordInput = wrapper.find('input').last();

// ...or using
const usernameInput = wrapper.find('.sign-in-modal .username-field');
const passwordInput = wrapper.find('.sign-in-modal .password-field');

// We should consider
const usernameInput = getByLabelText('Username');
const passwordInput = getByLabelText('Password');
`.trim();
