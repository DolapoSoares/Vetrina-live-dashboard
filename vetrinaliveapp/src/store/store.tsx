import { StateType } from "../components/interface/DashboardInterface";


const initialState: StateType = {
  isLoading: false,
  error: null,
  data: [],
};

export type NewsContextType = typeof initialState;

export default initialState
