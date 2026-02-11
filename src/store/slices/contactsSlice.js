import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    // Simulate API call
    const response = await new Promise(resolve => 
      setTimeout(() => resolve(mockContacts), 1000)
    );
    return response;
  }
);

const mockContacts = [
  {
    id: 1,
    name: 'John Smith',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    company: 'TechCorp Inc.',
    title: 'CEO',
    status: 'Active',
    source: 'Website',
    lastContact: '2024-01-15',
    notes: 'Interested in enterprise solution'
  },
  // Add more mock data...
];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filters: {
      status: '',
      source: '',
      search: ''
    }
  },
  reducers: {
    addContact: (state, action) => {
      state.items.push({
        id: Date.now(),
        ...action.payload
      });
    },
    updateContact: (state, action) => {
      const index = state.items.findIndex(contact => contact.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addContact, updateContact, deleteContact, setFilter } = contactsSlice.actions;
export default contactsSlice.reducer;