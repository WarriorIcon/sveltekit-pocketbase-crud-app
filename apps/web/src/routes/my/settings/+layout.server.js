import { redirect } from '@sveltejs/kit';

// redirect to login page if user is not logged in, because anything in my-settings requires a logged in user
export const load = ({ locals }) => {
	if (!locals.pb.authStore.isValid) {
		throw redirect(303, '/login');
	}
};