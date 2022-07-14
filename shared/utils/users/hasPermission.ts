const hasPermission = (user: DjangoUser, permission: string): boolean => {
  return user.permissions.includes(permission)
}

export default hasPermission;