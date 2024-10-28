import React, { useState } from 'react';
import axios from 'axios';

const Student = () => {
    const [studentId, setStudentId] = useState('');
    const [results, setResults] = useState(null);

    const fetchResults = async () => {
        const response = await axios.get(`http://localhost:5000/api/results/results/${studentId}`);
        setResults(response.data);
    };

    return (
        <div>
            <h1>Student Portal</h1>
            <input 
                type="text" 
                value={studentId} 
                onChange={(e) => setStudentId(e.target.value)} 
                placeholder="Enter your unique ID" 
            />
            <button onClick={fetchResults}>Get Results</button>
            {results && (
                <div>
                    <h2>Results for {studentId}</h2>
                    <p>Attendance Marks: {results.attendanceMarks}</p>
                    <p>Project Review Marks: {results.projectReviewMarks}</p>
                    <p>Assessment Marks: {results.assessmentMarks}</p>
                    <p>Project Submission Marks: {results.projectSubmissionMarks}</p>
                    <p>LinkedIn Post Marks: {results.linkedInPostMarks}</p>
                    <p>Total Marks: {results.attendanceMarks + results.projectReviewMarks + results.assessmentMarks + results.projectSubmissionMarks + results.linkedInPostMarks}</p>
                </div>
            )}
        </div>
    );
};

export default Student;
