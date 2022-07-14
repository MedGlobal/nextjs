import { FULL_PERMISSIONS_LIST } from "@/data/constants/permissions"

export const permission_exist = (permission: string) => {
  return FULL_PERMISSIONS_LIST.includes(permission);
}