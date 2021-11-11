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
    vehicleAccess: vehicleAccess === 1,
    waiver,
    captainsNotes,
  };
}

export function createDonorData(
  id,
  email,
  firstName,
  address,
  postalCode,
  pickUpNotes,
) {
  return {
    id,
    email,
    firstName,
    address,
    postalCode,
    pickUpNotes,
  };
}
