'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ContactSubmission {
  id: number;
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  message: string;
  createdAt: string;
  status: string;
}

export default function AdminDashboard() {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const router = useRouter();

  useEffect(() => {
    // Attempt to fetch submissions; if unauthorized the API will respond with 401
    fetchSubmissions();
  }, [router]);

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/admin/submissions');

      if (!response.ok) {
        if (response.status === 401) {
          // Token expired or invalid
          router.push('/admin/login');
          return;
        }
        throw new Error('Failed to fetch submissions');
      }

      const data = await response.json();
      setSubmissions(data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      setError('Failed to load contact submissions');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/auth', { method: 'DELETE' });
    router.push('/admin/login');
  };

  const updateSubmissionStatus = async (id: number, status: string) => {
    try {
      const response = await fetch(`/api/admin/submissions/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status })
      });

      if (!response.ok) {
        throw new Error('Failed to update submission status');
      }

      // Update local state
      setSubmissions(prev => 
        prev.map(sub => 
          sub.id === id ? { ...sub, status } : sub
        )
      );

      if (selectedSubmission?.id === id) {
        setSelectedSubmission({ ...selectedSubmission, status });
      }
    } catch (error) {
      console.error('Error updating status:', error);
      setError('Failed to update submission status');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('nl-NL', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="spinner-border text-blue-600" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <p className="mt-2 text-gray-600">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-blue-600">Glodinas Finance Admin</h1>
              </div>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="ml-4 px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {error && (
              <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-md">
                {error}
              </div>
            )}

            <div className="mt-8 bg-white overflow-hidden shadow rounded-lg">
              {submissions.length === 0 ? (
                <div className="p-8 text-center text-gray-500">
                  No contact submissions found.
                </div>
              ) : (
                <div className="flex">
                  {/* Submissions List */}
                  <div className="w-1/3 border-r">
                    <ul className="divide-y divide-gray-200">
                      {submissions.map((submission) => (
                        <li 
                          key={submission.id}
                          className={`px-6 py-4 cursor-pointer hover:bg-gray-50 ${selectedSubmission?.id === submission.id ? 'bg-blue-50' : ''}`}
                          onClick={() => setSelectedSubmission(submission)}
                        >
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium text-gray-900">{submission.name}</p>
                              <p className="text-sm text-gray-500">{submission.email}</p>
                            </div>
                            <div>
                              <span 
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                  ${submission.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                                    submission.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 
                                    'bg-green-100 text-green-800'}`}
                              >
                                {submission.status}
                              </span>
                            </div>
                          </div>
                          <p className="mt-1 text-sm text-gray-500 truncate">
                            {formatDate(submission.createdAt)}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Submission Detail */}
                  <div className="w-2/3 p-6">
                    {selectedSubmission ? (
                      <div>
                        <div className="flex justify-between items-center mb-6">
                          <h2 className="text-2xl font-bold text-gray-900">Submission Details</h2>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => updateSubmissionStatus(selectedSubmission.id, 'new')}
                              className={`px-3 py-1 text-xs rounded-full font-medium ${selectedSubmission.status === 'new' ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'}`}
                            >
                              New
                            </button>
                            <button
                              onClick={() => updateSubmissionStatus(selectedSubmission.id, 'in-progress')}
                              className={`px-3 py-1 text-xs rounded-full font-medium ${selectedSubmission.status === 'in-progress' ? 'bg-yellow-600 text-white' : 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'}`}
                            >
                              In Progress
                            </button>
                            <button
                              onClick={() => updateSubmissionStatus(selectedSubmission.id, 'completed')}
                              className={`px-3 py-1 text-xs rounded-full font-medium ${selectedSubmission.status === 'completed' ? 'bg-green-600 text-white' : 'bg-green-100 text-green-800 hover:bg-green-200'}`}
                            >
                              Completed
                            </button>
                          </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg">
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <p className="text-sm font-medium text-gray-500">Name</p>
                              <p className="mt-1 text-lg text-gray-900">{selectedSubmission.name}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Email</p>
                              <p className="mt-1 text-lg text-gray-900">{selectedSubmission.email}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Phone</p>
                              <p className="mt-1 text-lg text-gray-900">{selectedSubmission.phone || 'Not provided'}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Company</p>
                              <p className="mt-1 text-lg text-gray-900">{selectedSubmission.company || 'Not provided'}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Date Submitted</p>
                              <p className="mt-1 text-lg text-gray-900">{formatDate(selectedSubmission.createdAt)}</p>
                            </div>
                            <div>
                              <p className="text-sm font-medium text-gray-500">Status</p>
                              <p className="mt-1">
                                <span 
                                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                                    ${selectedSubmission.status === 'new' ? 'bg-blue-100 text-blue-800' : 
                                      selectedSubmission.status === 'in-progress' ? 'bg-yellow-100 text-yellow-800' : 
                                      'bg-green-100 text-green-800'}`}
                                >
                                  {selectedSubmission.status}
                                </span>
                              </p>
                            </div>
                          </div>

                          <div>
                            <p className="text-sm font-medium text-gray-500">Message</p>
                            <div className="mt-1 p-4 bg-white rounded border border-gray-200">
                              <p className="text-gray-900 whitespace-pre-wrap">{selectedSubmission.message}</p>
                            </div>
                          </div>

                          <div className="mt-6">
                            <a 
                              href={`mailto:${selectedSubmission.email}`}
                              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                              Reply via Email
                            </a>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-500">
                        Select a submission to view details
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
