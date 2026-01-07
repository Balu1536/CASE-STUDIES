import { StateCreator } from "zustand";

export interface Notifications
{ 
    id: string; 
    message: string; 
    read: boolean 
}


export interface NotificationsSlice{
    notifications: Notifications[];
    addNotification: (notification: Notifications)=>void;
    markAsRead: (id:string)=>void;
    clearNotifications:()=>void;
}

export const createNotificationsSlice: StateCreator< NotificationsSlice, [], [], NotificationsSlice> = (set) => ({
  notifications: [],

  addNotification: (notifications) =>
    set((state) => ({
      notifications: [...state.notifications, notifications],
    })),

  markAsRead: (id) =>
    set((state) => ({
      notifications: state.notifications.map((n) =>
        n.id === id ? { ...n, read: true } : n
      ),
    })),

  clearNotifications: () =>
    set({ notifications: [] }),
});