export function createVolData(
  userId,
  email,
  name,
  number,
  vehicleAccess,
  waiver,
  notes,
  team,
  neighbourhood,
) {
  return {
    userId,
    email,
    name,
    number,
    vehicleAccess: vehicleAccess === 1,
    waiver,
    notes,
    team,
    neighbourhood,
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

export function createNeighbourhoodData(
  neighbourhoodId,
  name,
  captains,
  numTeams,
  numVols,
  numDonations,
  hub,
) {
  return {
    neighbourhoodId,
    name,
    captains,
    numTeams,
    numVols,
    numDonations,
    hub,
  };
}
