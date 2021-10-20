export function createVolData(firstName, lastName, email, phoneNumber) {
  return { name: firstName.concat(' ', lastName), email, phoneNumber };
}
