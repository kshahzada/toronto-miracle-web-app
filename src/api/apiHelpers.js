export function createVolData(
  id,
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
    id,
    name,
    email,
    phoneNumber,
    vehicleAccess,
    waiver,
    captainsNotes,
  };
}
