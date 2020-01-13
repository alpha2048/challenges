export const summaryDonations = (donationAmounts) => (
  donationAmounts.reduce((accumulator, value) => (accumulator + value))
);
