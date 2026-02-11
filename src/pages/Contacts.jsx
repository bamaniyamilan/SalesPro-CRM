import { useState } from 'react';
import ContactList from '../components/contacts/ContactList';
import ContactForm from '../components/contacts/ContactForm';
import { Plus, Filter, Download, MoreVertical } from 'lucide-react';

const Contacts = () => {
  const [showForm, setShowForm] = useState(false);

  const contacts = [
    {
      id: 1,
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      company: 'TechCorp Inc.',
      status: 'Active',
      lastContact: '2 hours ago',
      avatarColor: 'bg-blue-500'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      email: 'sarah@example.com',
      phone: '+1 (555) 987-6543',
      company: 'Global Solutions',
      status: 'Lead',
      lastContact: '1 day ago',
      avatarColor: 'bg-purple-500'
    },
    // Add more contacts...
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contacts</h1>
          <p className="text-gray-600">Manage your contacts and leads</p>
        </div>
        <div className="flex space-x-3">
          <button className="btn-secondary flex items-center space-x-2">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="btn-secondary flex items-center space-x-2">
            <Download size={18} />
            <span>Export</span>
          </button>
          <button 
            onClick={() => setShowForm(true)}
            className="btn-primary flex items-center space-x-2"
          >
            <Plus size={18} />
            <span>Add Contact</span>
          </button>
        </div>
      </div>

      {showForm && (
        <ContactForm onClose={() => setShowForm(false)} />
      )}

      <ContactList contacts={contacts} />
    </div>
  );
};

export default Contacts;