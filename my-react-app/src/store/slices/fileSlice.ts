// store/slices/fileSlice.ts
import { StateCreator } from "zustand";
import { DesignHubStore} from "../DesignHubStore";
export interface File {
  id: string;
  name: string;
  content: string;
}
export interface FileSlice {
  files: File[];
  addFile: (file: File) => void;
  updateFile: (id: string, content: string) => void;
}

export const files: FileSlice[] = [];

export const createFileSlice: StateCreator<
  DesignHubStore,
  [],
  [],
  FileSlice
> = (set,get) => ({
  files: [],

  addFile: (file) => {
    const files = get().files; // ✅ using get
    set({ files: [...files, file] });
  },


  updateFile: (id,content) => {
    set({
      files: get().files.filter(f => f.id !== id),
    });
  },
});
