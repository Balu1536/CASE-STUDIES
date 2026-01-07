import React from "react";
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { createUserSlice, UserSlice } from './slices/userSlice';
import { createFileSlice, FileSlice } from './slices/fileSlice';
import { createCommentSlice, CommentSlice } from './slices/commentSlice';
import { NotificationsSlice, createNotificationsSlice } from "./slices/NotificationsSlice";


export type DesignHubStore = UserSlice & FileSlice & CommentSlice & NotificationsSlice;

export const useDesignHubStore = create<DesignHubStore>()(
  devtools(
    persist(
      (...args) => ({
        ...createUserSlice(...args),
        ...createFileSlice(...args),
        ...createCommentSlice(...args),
        ...createNotificationsSlice(...args),
      }),
      { name: 'designhub-store' }
    )
  )
);