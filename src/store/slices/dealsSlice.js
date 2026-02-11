import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDeals = createAsyncThunk(
  'deals/fetchDeals',
  async () => {
    const response = await new Promise(resolve => 
      setTimeout(() => resolve(mockDeals), 1000)
    );
    return response;
  }
);

const mockDeals = [
  {
    id: 1,
    title: 'Enterprise Software',
    value: 50000,
    stage: 'lead',
    contact: 'John Smith',
    company: 'TechCorp Inc.',
    probability: 20,
    expectedClose: '2024-02-15',
    notes: 'Initial contact made'
  },
  {
    id: 2,
    title: 'Cloud Migration',
    value: 75000,
    stage: 'qualified',
    contact: 'Sarah Johnson',
    company: 'Global Solutions',
    probability: 40,
    expectedClose: '2024-02-28',
    notes: 'Requirements gathering in progress'
  },
  {
    id: 3,
    title: 'Website Redesign',
    value: 30000,
    stage: 'proposal',
    contact: 'Mike Chen',
    company: 'Creative Agency',
    probability: 60,
    expectedClose: '2024-02-10',
    notes: 'Proposal sent, awaiting feedback'
  },
];

const dealsSlice = createSlice({
  name: 'deals',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filters: {
      stage: '',
      valueRange: [0, 100000],
      dateRange: ''
    }
  },
  reducers: {
    addDeal: (state, action) => {
      state.items.push({
        id: Date.now(),
        ...action.payload
      });
    },
    updateDeal: (state, action) => {
      const index = state.items.findIndex(deal => deal.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteDeal: (state, action) => {
      state.items = state.items.filter(deal => deal.id !== action.payload);
    },
    updateStage: (state, action) => {
      const { id, stage } = action.payload;
      const deal = state.items.find(d => d.id === id);
      if (deal) {
        deal.stage = stage;
      }
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeals.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchDeals.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchDeals.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addDeal, updateDeal, deleteDeal, updateStage, setFilter } = dealsSlice.actions;
export default dealsSlice.reducer;