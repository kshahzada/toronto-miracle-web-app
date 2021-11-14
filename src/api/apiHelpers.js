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
  userId,
  address,
  notes,
  team,
  neighbourhood,
) {
  return {
    userId,
    address,
    notes,
    team,
    neighbourhood,
  };
}

export function createDriveData(
  userId,
  email,
  name,
  address,
  notes,
  foodDrive,
  team,
  neighbourhood
) {
  return {
    userId,
    email,
    name,
    address,
    notes,
    foodDrive,
    team,
    neighbourhood
  };
}
