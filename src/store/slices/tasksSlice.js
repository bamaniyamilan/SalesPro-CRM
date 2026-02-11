import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async () => {
    const response = await new Promise(resolve => 
      setTimeout(() => resolve(mockTasks), 1000)
    );
    return response;
  }
);

const mockTasks = [
  {
    id: 1,
    title: 'Prepare quarterly report',
    description: 'Collect data and create presentation',
    status: 'todo',
    priority: 'high',
    assignee: 'John Doe',
    dueDate: '2024-01-20',
    tags: ['Report', 'Presentation'],
    createdAt: '2024-01-10'
  },
  {
    id: 2,
    title: 'Client meeting preparation',
    description: 'Review client requirements',
    status: 'todo',
    priority: 'medium',
    assignee: 'Alex Chen',
    dueDate: '2024-01-18',
    tags: ['Meeting'],
    createdAt: '2024-01-12'
  },
  {
    id: 3,
    title: 'Website redesign',
    description: 'Complete homepage mockup',
    status: 'inProgress',
    priority: 'high',
    assignee: 'Sarah Johnson',
    dueDate: '2024-01-25',
    tags: ['Design', 'Development'],
    createdAt: '2024-01-05'
  },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
    filters: {
      status: '',
      priority: '',
      assignee: '',
      dateRange: ''
    }
  },
  reducers: {
    addTask: (state, action) => {
      state.items.push({
        id: Date.now(),
        ...action.payload
      });
    },
    updateTask: (state, action) => {
      const index = state.items.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deleteTask: (state, action) => {
      state.items = state.items.filter(task => task.id !== action.payload);
    },
    updateStatus: (state, action) => {
      const { id, status } = action.payload;
      const task = state.items.find(t => t.id === id);
      if (task) {
        task.status = status;
      }
    },
    setFilter: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchTasks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export const { addTask, updateTask, deleteTask, updateStatus, setFilter } = tasksSlice.actions;
export default tasksSlice.reducer;