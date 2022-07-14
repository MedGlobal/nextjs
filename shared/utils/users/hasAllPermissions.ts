import equal from '@/utils/arrays/equal';

const hasAllPermissions = (user: DjangoUser, permissions: string[]): boolean => {
  return equal(user.permissions, permissions)
}

export default hasAllPermissions;