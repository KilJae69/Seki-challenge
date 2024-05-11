import {create} from 'zustand';

// Define the state interface
interface RightSidebarState {
    isRightSidebarOpen: boolean;
  }
  
  // Define the actions interface
  interface RightSidebarActions {
    toggleRightSidebar: () => void;
  }
  
  // Create the store with state and actions typed
  const useRightSidebarStore = create<RightSidebarState & RightSidebarActions>((set) => ({
    isRightSidebarOpen: false,
    toggleRightSidebar: () => set((state) => ({ isRightSidebarOpen: !state.isRightSidebarOpen })),
  }));
  
  export default useRightSidebarStore;