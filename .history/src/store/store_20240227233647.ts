import { AuthSlice } from "./slices"


type StoreState = AuthSlice
export const useAppStore = create<StoreState>()((...a))