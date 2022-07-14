interface DjangoUser {
  username: string,
  email: string,
  firstName: string,
  lastName: string,
  isAnonymous: boolean,
  isActive: boolean,
  isStaff: boolean,
  isSuperuser: boolean,
  dateJoined: string,

  permissions: string[],
}
