import { useEffect } from "react";
import { useChatStore } from "../store/useChatStore"

const sidebar = () => {
  const { getUsers, users, selectedUser, setSelectedUser, isUsersLoading } = useChatStore();

  const onlineUsers = [];

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <div>sidebar</div>
  )
}

export default sidebar