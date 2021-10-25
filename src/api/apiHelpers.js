export function createVolData(
  firstName,
  lastName,
  email,
  phoneNumber,
  vehicleAccess,
  waiver,
  captainsNotes,
) {
  const name = firstName.concat(' ', lastName);

  return {
    name,
    email,
    phoneNumber,
    vehicleAccess,
    waiver,
    captainsNotes,
  };
}
