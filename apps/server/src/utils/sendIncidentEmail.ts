// utils/sendIncidentEmail.ts
import { createTransporter } from "./mailer";
import { getRecipients } from "./recipients";

export async function sendIncidentEmail(incident: any) {
  const transporter = createTransporter();
  const recipients = getRecipients(incident.concernType);

  const subject = `Incident Report - Ref No: ${incident.refNo || "N/A"}`;

  const html = `
    <p><b>Ref No:</b> ${incident.refNo || ""}</p>
    <p><b>Reporting Department:</b> ${incident.reportingDepartment}</p>
    <p><b>Reporting Employee:</b> ${incident.reportingEmployee}</p>
    <p><b>Status:</b> NEW</p>

    <p><b>Description:</b></p>
    <p>${incident.description}</p>
    <p>Prepared by: ${incident.reportingEmployee}</p>
    <br/>
    <p><i>Note: This mail was sent automatically via NCAR System for notification purposes only. Reply is not necessary.</i></p>
  `;

  await transporter.sendMail({
    from: `"${incident.reportingEmployee}" <${process.env.GMAIL_USER}>`,
    to: recipients.join(", "),
    replyTo: incident.reportingEmployeeEmail,
    subject,
    html,
  });

  console.log(`📧 Incident email sent to: ${recipients.join(", ")}`);
}

