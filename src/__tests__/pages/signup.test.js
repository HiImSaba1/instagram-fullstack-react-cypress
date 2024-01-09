import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import { FirebaseContext } from '../../context/firebase';
import { Signup } from '../../pages';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	userHistory: () => ({}),
}));

const firebase = {
	auth: jest.fn(() => ({
		createUserWithEmailAndPassword: jest.fn(() =>
			Promise.resolve({
				user: {
					updateProfile: jest.fn(() => Promise.resolve('I am signed up!')),
				},
			})
		),
	})),
};

describe('<Signup />', () => {
	it('renders the sign up page with a from submission', async () => {
		const { getByTestId, getByPlaceholderText, queryBytestId } = render(
			<Router>
				<FirebaseContext.Provider value={{ firebase }}>
					<Signup />
				</FirebaseContext.Provider>
			</Router>
		);

		await act(async () => {
			await fireEvent.change(getByPlaceholderText('First name'), {
				target: { value: 'Karl' },
			});
			await fireEvent.change(getByPlaceholderText('Email address'), {
				target: { value: 'karl@gmail.com' },
			});
			await fireEvent.change(getByPlaceholderText('Password'), {
				target: { value: 'password' },
			});
			fireEvent.click(getByTestId('sign-up'));
			expect(getByPlaceholderText('First name').value).toBe('Karl');
			expect(getByPlaceholderText('Email address').value).toBe(
				'karl@gmail.com'
			);
			expect(getByPlaceholderText('Password').value).toBe('password');
			expect(queryByTestId('error')).toBeFalsy();
		});
	});
});