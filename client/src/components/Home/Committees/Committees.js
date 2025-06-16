"use client"
import React from 'react';
import './Committees.css';
import Link from 'next/link';

const Committees = () => {
    const committees = [
        {
            id: 'cdc',
            title: "College Development Committee (CDC)",
            description: "This committee is responsible for the formulation and execution of policies related to academic, infrastructural, financial, and administrative development of the college, playing a vital role in the strategic planning and overall progress of the institution."
        },
        {
            id: 'iqac',
            title: "Internal Quality Assurance Cell (IQAC)",
            description: "The IQAC is dedicated to maintaining and enhancing the quality of education through periodic assessments, feedback mechanisms, academic audits, and the promotion of innovative teaching-learning methodologies."
        },
        {
            id: 'grievance',
            title: "Grievance Redressal Cell",
            description: "This cell provides a transparent and accessible platform for students and staff to voice their grievances, ensuring timely resolution and fostering a healthy academic and work environment."
        },
        {
            id: 'equal-opportunity',
            title: "Equal Opportunity Cell",
            description: "The cell promotes inclusivity and ensures that no individual is subjected to discrimination on the grounds of caste, gender, religion, economic background, or disability, thereby upholding the constitutional values of equality and justice."
        },
        {
            id: 'divyang',
            title: "Divyang (Differently-Abled) Cell",
            description: "Focused on supporting students and staff with disabilities, this cell ensures accessibility in infrastructure and academics, along with providing the necessary assistance to promote inclusive education."
        },
        {
            id: 'women-cell',
            title: "Women's Anti-Sexual Harassment Cell",
            description: "Constituted in accordance with statutory provisions, this cell actively works towards preventing and redressing issues related to sexual harassment, ensuring a safe, respectful, and gender-sensitive campus environment."
        },
        {
            id: 'anti-ragging',
            title: "Anti-Ragging Cell",
            description: "As per UGC norms, this cell strictly prohibits any form of ragging on campus and takes preventive and disciplinary action to ensure the safety, dignity, and well-being of all students."
        },
        {
            id: 'student-council',
            title: "Student Council",
            description: "The Student Council acts as a bridge between the student body and administration, representing student interests, organizing academic and co-curricular activities, and promoting leadership and participative governance."
        },
      
    ];

    return (
        <div className="committees-container">
            <div className="committees-header">
                <h1>College Committees</h1>
                <p>Ensuring excellence through dedicated governance and support systems</p>
            </div>
            <div className="committees-grid">
                {committees.map((committee, index) => (
                    <div key={index} className="committee-card">
                        <h3>{committee.title}</h3>
                        <p>{committee.description}</p>
                        <Link href={`/academics/resources/committes/${committee.id}`} className="learn-more-btn">
                            Learn More
                            <i className="fas fa-arrow-right"></i>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Committees; 