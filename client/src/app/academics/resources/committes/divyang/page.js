"use client";
import React from 'react';
import '../committee.css';

const divyangMembers = [
    { sr: 1, name: "SHRI. JAYANT BAPURAO SHINDE", designation: "EXPERT ADVISOR-1", email: "jayshinde@gmail.com" },
    { sr: 2, name: "SHRI. ASHOK BHANUDAS RODE", designation: "EXPERT ADVISOR-2", email: "rodeashok@gmail.com" },
    { sr: 3, name: "MR. WAGHMARE ASHWIN ASHOK", designation: "PARENT REPRESENTATIVE 1", email: "waghmare.ashwin2012@gmail.com" },
    { sr: 4, name: "MRS. BENDRE POOJA TANAJEE", designation: "PARENT REPRESENTATIVE 2", email: "poojadhawade6183@gmail.com" },
    { sr: 5, name: "DR. ANJULA S. CHOWBE", designation: "PRINCIPAL", email: "anjulachowbe@gmail.com" },
    { sr: 6, name: "MR. KHAN SHOYEB SARFARAZ", designation: "STUDENT REPRESENTATIVE 1", email: "shoyebkhan202@gmail.com" },
    { sr: 7, name: "MRS. KHAMKAR PALLAVI BHAUSAHEB", designation: "STUDENT REPRESENTATIVE 2", email: "pallavikhamkar9090@gmail.com" },
    { sr: 8, name: "SHRI. SUNIL KANTILAL BHOS", designation: "STUDENT DEVELOPMENT OFFICER", email: "bhossunil@gmail.com" },
    { sr: 9, name: "MS. SAKSHI BABU PRATHAMSHETTY", designation: "TEACHER REPRESENTATIVE - FEMALE", email: "prathamshettysakshi111@gmail.com" },
    { sr: 10, name: "SHRI. FATE PURUSHOTTAM JAGANNATH", designation: "TEACHER REPRESENTATIVE - MALE", email: "pjfate96@gmai.lcom" }
];

const Divyang = () => {
    return (
        <div className="committee-detail-page">
            <div className="committee-header">
                <h1>Divyang (Differently-Abled) Cell</h1>
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
                                {divyangMembers.map((member, index) => (
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
                            {divyangMembers.map((member, index) => (
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
        </div>
    );
};

export default Divyang;
