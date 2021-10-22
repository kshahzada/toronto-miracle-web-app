export function createVolData(firstName, lastName, email, phoneNumber, vehicleAccess, waiver) {
  return {
    name: firstName.concat(' ', lastName), email, phoneNumber, vehicleAccess, waiver,
  };
}
