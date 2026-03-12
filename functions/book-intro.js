export async function onRequest(context) {
	const bookingUrl = context.env.BOOKING_INTRO_URL;

	if (!bookingUrl) {
		return new Response('Booking is temporarily unavailable.', { status: 503 });
	}

	return Response.redirect(bookingUrl, 302);
}
