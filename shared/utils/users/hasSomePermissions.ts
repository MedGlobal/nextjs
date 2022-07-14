const hasSomePermissions = (user: DjangoUser, permissions: string[]): boolean => {
    return permissions.some(perm => user.permissions.includes(perm));
}

export default hasSomePermissions;