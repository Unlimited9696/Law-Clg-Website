"use client";
import React from 'react';
import '../committee.css';

const grievanceMembers = [
    { sr: 1, name: "DR. ANJULA S. CHOWBE", designation: "CHAIRPERSON", email: "anjulachowbe@gmail.com" },
    { sr: 2, name: "SHRI. FATE PURUSHOTTAM JAGANNATH", designation: "MEMBER 1", email: "pjfate96@gmail.com" },
    { sr: 3, name: "MS. SAKSHI BABU PRATHAMSHETTY", designation: "MEMBER 2", email: "prathamshettysakshi111@gmail.com" }
];

const Grievance = () => {
    return (
        <div className="committee-detail-page">
            <div className="committee-header">
                <h1>Grievance Redressal Cell</h1>
            </div>
            <div className="committee-content">
                <section className="members">
                    <h2>Committee Members</h2>
                    <div className="desktop-view">
                        <table className="members-table">
                            <thead>
                                <tr>
                                    <th>Sr No.</th>
                                    <th>Member Name</th>
                                    <th>Designation</th>
                                    <th>Email ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {grievanceMembers.map((member, index) => (
                                    <tr key={index}>
                                        <td data-label="Sr No.">{member.sr}</td>
                                        <td data-label="Member Name">{member.name}</td>
                                        <td data-label="Designation">{member.designation}</td>
                                        <td data-label="Email ID">{member.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="mobile-view">
                        <div className="member-cards">
                            {grievanceMembers.map((member, index) => (
                                <div className="member-card" key={index}>
                                    <div className="card-row">
                                        <div className="card-label">Sr No.</div>
                                        <div className="card-value">{member.sr}</div>
                                    </div>
                                    <div className="card-row">
                                        <div className="card-label">Member Name</div>
                                        <div className="card-value">{member.name}</div>
                                    </div>
                                    <div className="card-row">
                                        <div className="card-label">Designation</div>
                                        <div className="card-value">{member.designation}</div>
                                    </div>
                                    <div className="card-row">
                                        <div className="card-label">Email ID</div>
                                        <div className="card-value">{member.email}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .committee-detail-page {
                    min-height: 100vh;
                    background-color: #f8f9fa;
                    padding: 2rem;
                    font-family: Arial, sans-serif;
                }

                .committee-header {
                    text-align: center;
                    margin-bottom: 3rem;
                    padding: 2rem;
                    background: linear-gradient(135deg, #1a237e 0%, #283593 100%);
                    color: white;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                }

                .committee-header h1 {
                    font-size: 2.5rem;
                    margin: 0;
                    font-weight: 600;
                    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
                }

                .committee-content {
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .members {
                    background: white;
                    padding: 2rem;
                    border-radius: 10px;
                    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                }

                .members h2 {
                    color: #1a237e;
                    margin-bottom: 1.5rem;
                    font-size: 1.8rem;
                    position: relative;
                }

                .members h2::after {
                    content: '';
                    position: absolute;
                    bottom: -8px;
                    left: 0;
                    width: 50px;
                    height: 3px;
                    background-color: #1a237e;
                    border-radius: 2px;
                }

                .members-table {
                    width: 100%;
                    border-collapse: separate;
                    border-spacing: 0;
                    font-size: 1rem;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
                }

                .members-table th,
                .members-table td {
                    padding: 1rem 1.2rem;
                    text-align: left;
                    color: #333;
                }

                .members-table th {
                    background-color: #1a237e;
                    color: white;
                    font-weight: 600;
                }

                .members-table td {
                    background-color: #fff;
                    border-top: 1px solid #e0e0e0;
                }

                .members-table tr:nth-child(even) td {
                    background-color: #f6f8fc;
                }

                .members-table tr:hover td {
                    background-color: #e8eaf6;
                    transition: background-color 0.3s ease;
                }

                @media (max-width: 768px) {
                    .members-table thead {
                        display: none;
                    }

                    .members-table,
                    .members-table tbody,
                    .members-table tr,
                    .members-table td {
                        display: block;
                        width: 100%;
                    }

                    .members-table tr {
                        margin-bottom: 1rem;
                        border: 1px solid #ccc;
                        border-radius: 8px;
                        padding: 1rem;
                        background-color: #fff;
                    }

                    .members-table td {
                        text-align: right;
                        position: relative;
                        padding-left: 50%;
                    }

                    .members-table td::before {
                        content: attr(data-label);
                        position: absolute;
                        left: 1rem;
                        width: 45%;
                        padding-right: 1rem;
                        font-weight: bold;
                        text-align: left;
                        color: #1a237e;
                    }
                }
            `}</style>
        </div>
    );
};

export default Grievance;
