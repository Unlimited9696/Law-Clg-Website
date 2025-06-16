"use client"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Cookies from 'js-cookie';

const API_BASE_URL = '/api';

export default function AdminDashboard() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [announcements, setAnnouncements] = useState([]);
  const [announcementText, setAnnouncementText] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('newest');

  useEffect(() => {
    // Check if user is logged in
    const token = localStorage.getItem('adminToken');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsLoading(false);
      fetchAnnouncements();
    }
  }, [router]);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/announcements`);
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to fetch announcements');
      setAnnouncements(data.announcements);
      setError('');
    } catch (error) {
      setError(error.message || 'Failed to load announcements. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    Cookies.remove('adminToken');
    router.push('/admin/login');
  };

  const handleCreateAnnouncement = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch(`${API_BASE_URL}/announcements`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: announcementText })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to create announcement');
      setAnnouncements([data.announcement, ...announcements]);
      setSuccess('Announcement created successfully');
      setAnnouncementText('');
      setShowForm(false);
    } catch (error) {
      setError(error.message || 'Failed to create announcement. Please try again.');
    }
  };

  const handleEditAnnouncement = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const response = await fetch(`${API_BASE_URL}/announcements/${editingId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: announcementText })
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || 'Failed to update announcement');
      setAnnouncements(announcements.map(a => a._id === editingId ? data.announcement : a));
      setSuccess('Announcement updated successfully');
      setAnnouncementText('');
      setShowForm(false);
      setEditingId(null);
    } catch (error) {
      setError(error.message || 'Failed to update announcement');
    }
  };

  const handleDeleteAnnouncement = async (id) => {
    if (!window.confirm('Are you sure you want to delete this announcement?')) return;
    setError('');
    setSuccess('');
    try {
      const response = await fetch(`${API_BASE_URL}/announcements/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Failed to delete announcement');
      setAnnouncements(announcements.filter(a => a._id !== id));
      setSuccess('Announcement deleted successfully');
      setShowDeleteConfirm(null);
    } catch (error) {
      setError('Failed to delete announcement');
    }
  };

  const resetForm = () => {
    setAnnouncementText('');
    setShowForm(false);
    setEditingId(null);
  };

  const handleEditClick = (announcement) => {
    setEditingId(announcement._id);
    setAnnouncementText(announcement.text);
    setShowForm(true);
  };

  // Filter and sort announcements
  const filteredAnnouncements = announcements
    .filter(a => 
      a.text.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/collegelogo.png"
              alt="SSNLC Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
            />
            <h1 className="ml-3 text-2xl font-bold text-gray-900">Admin Dashboard</h1>
          </div>
          <div className="flex items-center gap-4">
            {error && (
              <button
                onClick={fetchAnnouncements}
                className="px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition-colors"
              >
                Retry
              </button>
            )}
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Admin Modules */}
        <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div 
            onClick={() => router.push('/admin/dashboard/important-links')}
            className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Important Links</h3>
            <p className="text-gray-600 mb-4">Manage important links displayed on the website</p>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Manage Links
              </button>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Announcements</h3>
            <p className="text-gray-600 mb-4">Manage announcements displayed on the website</p>
            <div className="flex justify-end">
              <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                Manage Below
              </button>
            </div>
          </div>
          
          
        </div>
        
        {/* Announcements */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-semibold text-gray-900">Announcements</h2>
            <button 
              onClick={() => {
                resetForm();
                setShowForm(true);
              }}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
            >
              Create New Announcement
            </button>
          </div>

          {/* Search and Sort */}
          <div className="mb-6 flex gap-4">
            <input
              type="text"
              placeholder="Search announcements..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>

          {/* Error and Success Messages */}
          {error && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}
          {success && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              {success}
            </div>
          )}

          {/* Create/Edit Announcement Form */}
          {showForm && (
            <div className="mb-6 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{editingId ? 'Edit Announcement' : 'Create New Announcement'}</h3>
              <form onSubmit={editingId ? handleEditAnnouncement : handleCreateAnnouncement} className="space-y-4">
                <div>
                  <label htmlFor="announcementText" className="block text-sm font-medium text-gray-700 mb-1">Announcement</label>
                  <textarea
                    id="announcementText"
                    value={announcementText}
                    onChange={e => setAnnouncementText(e.target.value)}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  ></textarea>
                </div>
                <div className="flex gap-4">
                  <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors">{editingId ? 'Update Announcement' : 'Create Announcement'}</button>
                  <button type="button" onClick={() => { setShowForm(false); setEditingId(null); setAnnouncementText(''); }} className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors">Cancel</button>
                </div>
              </form>
            </div>
          )}

          {/* List of Announcements */}
          <div className="space-y-4">
            {filteredAnnouncements.map((announcement) => (
              <div key={announcement._id} className="p-4 bg-gray-50 rounded-lg mb-2">
                <div className="flex justify-between items-center">
                  <span>{announcement.text}</span>
                  <div className="flex gap-2 ml-4">
                    <button
                      onClick={() => handleEditClick(announcement)}
                      className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700 transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => setShowDeleteConfirm(announcement._id)}
                      className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700 transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Delete Confirmation Modal */}
          {showDeleteConfirm && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg max-w-md w-full">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Confirm Delete</h3>
                <p className="text-gray-600 mb-6">Are you sure you want to delete this announcement? This action cannot be undone.</p>
                <div className="flex justify-end gap-4">
                  <button
                    onClick={() => setShowDeleteConfirm(null)}
                    className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => handleDeleteAnnouncement(showDeleteConfirm)}
                    className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
} 