
import {create} from 'zustand';

// Define the state interface
interface LeftSidebarState {
    isLeftSidebarOpen: boolean;
  }
  
  // Define the actions interface
  interface LeftSidebarActions {
    toggleLeftSidebar: () => void;
  }
  
  // Create the store with state and actions typed
  const useLeftSidebarStore = create<LeftSidebarState & LeftSidebarActions>((set) => ({
    isLeftSidebarOpen: false,
    toggleLeftSidebar: () => set((state) => ({ isLeftSidebarOpen: !state.isLeftSidebarOpen })),
  }));
  
  export default useLeftSidebarStore;