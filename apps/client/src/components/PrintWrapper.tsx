//src/components/PrintWrapper.tsx
"use client"

import React, { forwardRef } from 'react';
import { IncidentForm } from '@/types/incidentModal';
import { format } from "date-fns"

interface PrintWrapperProps {
    incident: IncidentForm;
}

export const PrintWrapper = forwardRef<HTMLDivElement, PrintWrapperProps>(
    ({ incident }, ref) => {
        return (
            <div
                ref={ref}
                className="p-8 bg-white text-black min-h-[297mm] print:m-0 print:p-[20mm]"
                style={{
                    width: '210mm',
                    margin: '0 auto',
                    backgroundColor: 'white',
                    color: 'black',
                }}
            >
                {/* Updated print styles */}
                <style type="text/css" media="print">
                    {`
                        @page {
                            size: A4;
                            margin: 20mm;
                        }
                        body {
                            margin: 0;
                            padding: 0;
                            print-color-adjust: exact;
                            -webkit-print-color-adjust: exact;
                        }
                        
                        /* Grid styles */
                        .grid-cols-2 {
                            display: grid;
                            grid-template-columns: 1fr 1fr;
                            gap: 1rem;
                        }
                        
                        /* Table styles */
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-bottom: 1rem;
                            page-break-inside: auto;
                        }
                        
                        tr {
                            page-break-inside: avoid;
                            page-break-after: auto;
                        }
                        
                        td, th {
                            border: 1px solid black;
                            padding: 8px;
                            text-align: left;
                        }
                        
                        thead {
                            display: table-header-group;
                        }
                        
                        thead tr {
                            background-color: #f3f4f6 !important;
                        }
                        
                        /* Margins and spacing */
                        .mb-2 { margin-bottom: 0.5rem; }
                        .mb-4 { margin-bottom: 1.3rem; }
                        .mb-6 { margin-bottom: 1.5rem; }
                        .mb-8 { margin-bottom: 2rem; }
                        .mb-12 { margin-bottom: 3rem; }
                        .mb-16 { margin-bottom: 4rem; }
                        .mb-20 { margin-bottom: 5rem; }
                        .mb-24 { margin-bottom: 6rem; }
                        .mb-28 { margin-bottom: 7rem; }
                        .mb-32 { margin-bottom: 8rem; }
                        .mb-36 { margin-bottom: 9rem; }
                        .mb-40 { margin-bottom: 10rem; }
                        .mb-44 { margin-bottom: 11rem; }
                        .mb-48 { margin-bottom: 12rem; }
                        .mt-4 { margin-top: 1rem; }
                        .mt-12 { margin-top: 3rem; }
                        .p-2 { padding: 0.5rem; }
                        .gap-4 { gap: 1rem; }
                        .gap-8 { gap: 2rem; }
                        .gap-12 { gap: 3rem; }
                        .gap-16 { gap: 4rem; }
                        .gap-20 { gap: 5rem; }
                        .flex { display: flex; }
                        .flex-col { flex-direction: column; }
                        .justify-between { justify-content: space-between; }
                        
                        /* Typography */
                        .text-2xl { font-size: 1.5rem; }
                        .text-lg { font-size: 1.125rem; }
                        .text-4xl { font-size: 1.3rem; }
                        .font-bold { font-weight: 700; }
                        .font-semibold { font-weight: 600; }
                        
                        
                        /* Fix for flex gap in tables */
                        tr.flex { 
                            display: table-row !important; 
                        }
                        
                        /* Container width */
                        @media print {
                            div[ref] {
                                width: 210mm !important;
                                padding: 20mm !important;
                                margin: 0 !important;
                            }
                        }
                    `}
                </style>

                {/* Header */}
                <div className="text-center mb-6">
                    <h1 className="text-2xl font-bold mb-2">NCAR Incident Report</h1>
                    <p className="text-lg">Reference No: {incident.refNo}</p>
                    <p className="text-sm">Organization: {incident.organization}</p>
                </div>

                {/* Basic Information */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p><strong>Date Reported:</strong> {incident.dateReported ? format(new Date(incident.dateReported), 'MMM dd, yyyy') : 'N/A'}</p>
                        <p><strong>Department:</strong> {incident.reportingDepartment}</p>
                        <p><strong>Reporting Employee:</strong> {incident.reportingEmployee}</p>
                    </div>
                    <div>
                        <p><strong>Nature of Exception:</strong> {incident.natureOfException}</p>
                        <p><strong>Audit Finding:</strong> {incident.auditFinding}</p>
                        <p><strong>Concern Type:</strong> {incident.concernType}</p>
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <h2 className="text-lg font-semibold mb-2">Description</h2>
                    <p className="whitespace-pre-wrap border p-2">{incident.description}</p>
                </div>

                {/* Concern Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                        <p><strong>Concern Name:</strong> {incident.concernName}</p>
                        <p><strong>Customer/Department:</strong> {incident.customerDepartment}</p>
                    </div>
                    <div>
                        <p><strong>Module of Purchase:</strong> {incident.moduleOfPurchase}</p>
                        <p><strong>Type of Delivery:</strong> {incident.typeOfDelivery}</p>
                    </div>
                </div>

                {/* Incident Details */}
                {incident.incidentDetails && incident.incidentDetails.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-4xl font-extrabold mb-2">Incident Details</h2>
                        <table className="w-full border-collapse border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2">Type</th>
                                    <th className="border p-2">Deviation</th>
                                    <th className="border p-2">Description</th>
                                    <th className="border p-2">SKU</th>
                                    <th className="border p-2">Out of Total</th>
                                    <th className="border p-2">PO No.</th>
                                    <th className="border p-2">Lot No.</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incident.incidentDetails.map((detail, index) => (
                                    <tr key={detail._id || detail.tempId || index}>
                                        <td className="border p-2">{detail.type}</td>
                                        <td className="border p-2">{detail.deviation}</td>
                                        <td className="border p-2">{detail.description}</td>
                                        <td className="border p-2">{detail.sku}</td>
                                        <td className="border p-2">{detail.outOfTotal}</td>
                                        <td className="border p-2">{detail.poNo}</td>
                                        <td className="border p-2">{detail.lotNo}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Incident Issues */}
                {incident.incidentIssues && incident.incidentIssues.length > 0 && (
                    <div className="mb-6">
                        <h2 className="text-4xl font-extrabold mb-2"> Incident Issues</h2>
                        <table className="w-full border-collapse border">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="border p-2">Gross Weight</th>
                                    <th className="border p-2">Net Weight</th>
                                    <th className="border p-2">Tare Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {incident.incidentIssues.map((issue, index) => (
                                    <tr key={issue._id || issue.tempId || index}>
                                        <td className="border p-2">{issue.grossWeight}</td>
                                        <td className="border p-2">{issue.netWeight}</td>
                                        <td className="border p-2">{issue.tareWeight}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* Issue Categories */}
                {incident.incidentIssuesSelection && (
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        <div>
                            <p><strong>Quality Issue:</strong> {incident.incidentIssuesSelection.qualityIssue ? 'Yes' : 'No'}</p>
                            <p><strong>Quantity Issue:</strong> {incident.incidentIssuesSelection.quantityIssue ? 'Yes' : 'No'}</p>
                        </div>
                        <div>
                            <p><strong>Procedure/Documentation:</strong> {incident.incidentIssuesSelection.procedureDocumentation ? 'Yes' : 'No'}</p>
                            <p><strong>Packaging Problem:</strong> {incident.incidentIssuesSelection.packagingProblem ? 'Yes' : 'No'}</p>
                        </div>
                        {incident.incidentIssuesSelection.others && (
                            <p><strong>Others:</strong> {incident.incidentIssuesSelection.others}</p>
                        )}
                    </div>

                )}

                {/* Incident Actions */}
                {incident.incidentActions && incident.incidentActions.map((action, actionIndex) => (
                    <div key={action.tempId || actionIndex} className="mb-8">
                        <h2 className="text-4xl font-extrabold mb-4 mt-6">Incident Actions</h2>
                        {/* Correction */}
                        {action.correction && action.correction.length > 0 && (
                            <div className=" ">
                                <h3 className="font-semibold">Correction</h3>
                                <table className="w-full border-collapse border print-table">
                                    <thead>
                                        <tr className="bg-gray-100 flex gap-8">
                                            <th className="border p-2">Action Taken</th>
                                            <th className="border p-2">Person Responsible</th>
                                            <th className="border p-2">Time Table</th>
                                            <th className="border p-2">Follow Up Date</th>
                                            <th className="border p-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {action.correction.map((item, index) => (
                                            <tr key={item._id || item.tempId || index}>
                                                <td className="border p-2">{item.actionTaken}</td>
                                                <td className="border p-2">{item.personResponsible}</td>
                                                <td className="border p-2">{item.timeTable ? format(new Date(item.timeTable), 'MMM dd, yyyy') : 'N/A'}</td>
                                                <td className="border p-2">{item.followUpDate ? format(new Date(item.followUpDate), 'MMM dd, yyyy') : 'N/A'}</td>
                                                <td className="border p-2">{item.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/*Consequence*/}

                         <div className="flex mt-12 mb-8">
                            <p><strong>Consequences:</strong> {action.consequence}</p>
                        </div>

                        {/* Root Cause Analysis */}
                        {action.analysis && action.analysis.length > 0 && (
                            <div className="mt-4">
                                <h3 className="font-semibold">Root Cause Analysis</h3>
                                <table className="w-full border-collapse border">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border p-2">Why</th>
                                            <th className="border p-2">Probable Root Cause</th>
                                            <th className="border p-2">Counter Measure</th>
                                            <th className="border p-2">Who</th>
                                            <th className="border p-2">When</th>
                                            <th className="border p-2">Recurrence</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {action.analysis.map((item, index) => (
                                            <tr key={item._id || item.tempId || index}>
                                                <td className="border p-2">{item.why}</td>
                                                <td className="border p-2">{item.probableRootCause}</td>
                                                <td className="border p-2">{item.counterMeasure}</td>
                                                <td className="border p-2">{item.who}</td>
                                                <td className="border p-2">{item.when}</td>
                                                <td className="border p-2">{item.recurrence}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                        
                        {/* Root Cause and Occurrence */}
                        <div className="flex flex-col  mt-12 mb-8">
                            <p><strong>Root Cause:</strong> {action.rootCause}</p>
                            <p><strong>Occurrence:</strong> {action.occurence}</p>
                        </div>

                        {/* Corrective */}
                        {action.corrective && action.corrective.length > 0 && (
                            <div className="">
                                <h3 className="font-semibold">Corrective</h3>
                                <table className="w-full border-collapse border">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border p-2">Action Taken</th>
                                            <th className="border p-2">Person Responsible</th>
                                            <th className="border p-2">Time Table</th>
                                            <th className="border p-2">Follow Up Date</th>
                                            <th className="border p-2">Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {action.corrective.map((item, index) => (
                                            <tr key={item._id || item.tempId || index}>
                                                <td className="border p-2">{item.actionTaken}</td>
                                                <td className="border p-2">{item.personResponsible}</td>
                                                <td className="border p-2">{item.timeTable ? format(new Date(item.timeTable), 'MMM dd, yyyy') : 'N/A'}</td>
                                                <td className="border p-2">{item.followUpDate ? format(new Date(item.followUpDate), 'MMM dd, yyyy') : 'N/A'}</td>
                                                <td className="border p-2">{item.status}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        

                        
                    </div>
                ))}

                {/* Incident Evaluation */}
                {incident.incidentEvaluation && incident.incidentEvaluation.map((evaluation, evalIndex) => (
                    <div key={evaluation._id || evaluation.tempId || evalIndex} className="mb-6">
                        <h2 className="text-4xl font-serif mb-2 mt-12">Incident Evaluation</h2>
                        {/* Effectiveness */}
                        {evaluation.effectiveness && evaluation.effectiveness.length > 0 && (
                            <div className="mb-4">
                                <h3 className="font-semibold">Effectiveness</h3>
                                <table className="w-full border-collapse border">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border p-2">Evaluated By</th>
                                            <th className="border p-2">Date</th>
                                            <th className="border p-2">Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {evaluation.effectiveness.map((item, index) => (
                                            <tr key={index}>
                                                <td className="border p-2">{item.evaluatedBy}</td>
                                                <td className="border p-2">{item.date ? format(new Date(item.date), 'MMM dd, yyyy') : 'N/A'}</td>
                                                <td className="border p-2">{item.remarks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}

                        {/* Documentation */}
                        {evaluation.documentation && evaluation.documentation.length > 0 && (
                            <div className="mb-4">
                                <h3 className="font-semibold">Documentation</h3>
                                <table className="w-full border-collapse border">
                                    <thead>
                                        <tr className="bg-gray-100">
                                            <th className="border p-2">Followed Up By</th>
                                            <th className="border p-2">Date</th>
                                            <th className="border p-2">Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {evaluation.documentation.map((item, index) => (
                                            <tr key={index}>
                                                <td className="border p-2">{item.followedUpBy}</td>
                                                <td className="border p-2">{item.date ? format(new Date(item.date), 'MMM dd, yyyy') : 'N/A'}</td>
                                                <td className="border p-2">{item.remarks}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>
                ))}

                {/* Footer with signatures */}
                <div className="mt-12 flex justify-between">
                    <div className="border-t pt-4">
                        <p className="font-semibold">Prepared by: {incident.reportingEmployee}</p>               
                    </div>
                    <div className="border-t pt-4">
                        <p className="font-semibold">Filing Date: {incident.dateReported ? format(new Date(incident.dateReported), 'MMMM dd, yyyy') : 'N/A'}</p>
                    </div>
                </div>
            </div>
        );
    }
);

PrintWrapper.displayName = 'PrintWrapper';