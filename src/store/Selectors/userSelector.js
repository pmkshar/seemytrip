export const selectUserProfile = (state) => state.user.user;
export const selectUserProfileError = (state) => state.user.error;
export const selectUserProfileLoading = (state) => state.user.loading;
export const selectUserBookings = (state) => state.user.bookings;
export const selectTravelers = (state) => state.user.travelers;
export const selectTravelerLoading = (state) => state.user.loading;
export const selectTravelerError = (state) => state.user.error;
