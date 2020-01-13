export const summaryDonations = (donations) => (
  donations.filter((item) => (item.amount != null)).map((item) => (item.amount)).reduce((accumulator, value) => (accumulator + value))
);
