"""
Generates public/resume.pdf — deliberately simple, single-column, standard
fonts, no tables or graphics, so ATS parsers read it cleanly. Content
mirrors content/resume.ts exactly; the two should never be edited separately.
Academic level is intentionally omitted (see content/resume.ts comment —
unresolved Level 300 vs. 400).
"""
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.units import inch
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.enums import TA_LEFT
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.pdfgen.canvas import Canvas

INK = "#1B262C"
ACCENT = "#0F4C75"

styles = {
    "name": ParagraphStyle("name", fontName="Helvetica-Bold", fontSize=18, textColor=INK, spaceAfter=4),
    "contact": ParagraphStyle("contact", fontName="Helvetica", fontSize=9.5, textColor=INK, spaceAfter=14),
    "summary": ParagraphStyle("summary", fontName="Helvetica", fontSize=10.5, textColor=INK, leading=15, spaceAfter=16),
    "section": ParagraphStyle("section", fontName="Helvetica-Bold", fontSize=12, textColor=ACCENT, spaceBefore=10, spaceAfter=6),
    "entry_title": ParagraphStyle("entry_title", fontName="Helvetica-Bold", fontSize=10.5, textColor=INK, spaceAfter=1),
    "entry_meta": ParagraphStyle("entry_meta", fontName="Helvetica-Oblique", fontSize=9.5, textColor=INK, spaceAfter=4),
    "body": ParagraphStyle("body", fontName="Helvetica", fontSize=9.5, textColor=INK, leading=13, spaceAfter=8, alignment=TA_LEFT),
    "bullet": ParagraphStyle("bullet", fontName="Helvetica", fontSize=9.5, textColor=INK, leading=13),
}

doc = SimpleDocTemplate(
    "/home/claude/studio-obsidian/public/resume.pdf",
    pagesize=LETTER,
    topMargin=0.6 * inch,
    bottomMargin=0.6 * inch,
    leftMargin=0.75 * inch,
    rightMargin=0.75 * inch,
    title="Sadiq Usman Nagoda — Resume",
)

story = []

story.append(Paragraph("Sadiq Usman Nagoda", styles["name"]))
story.append(Paragraph(
    "sadiqnagoda1848@gmail.com &nbsp;|&nbsp; +234 907 572 7513 &nbsp;|&nbsp; "
    "github.com/Sadiq-Nagoda &nbsp;|&nbsp; linkedin.com/in/sadiq-nagoda &nbsp;|&nbsp; Kano, Nigeria",
    styles["contact"],
))

story.append(Paragraph(
    "Software Engineering student (B.Sc., in progress) currently completing an industrial "
    "placement in applied machine learning at an AI Hub in Kano, building a RAG-based "
    "university assistant and documenting the process publicly.",
    styles["summary"],
))

story.append(Paragraph("EDUCATION", styles["section"]))
story.append(Paragraph("B.Sc. Software Engineering", styles["entry_title"]))
story.append(Paragraph("Al-Istiqama University Sumaila (AUSU) &mdash; In progress", styles["entry_meta"]))
story.append(Paragraph("CGPA: 4.63 / 5.00 across 72 credit units", styles["body"]))

story.append(Paragraph("EXPERIENCE", styles["section"]))
story.append(Paragraph("SIWES Trainee (Industrial Attachment)", styles["entry_title"]))
story.append(Paragraph("AI Hub, Kano &mdash; Current", styles["entry_meta"]))
story.append(ListFlowable(
    [
        ListItem(Paragraph(
            "Self-directed placement in Python and applied machine learning, in place of "
            "standard coursework, Monday through Thursday.", styles["bullet"])),
        ListItem(Paragraph(
            "Maintains a public logbook covering Python fundamentals through object-oriented "
            "programming, file handling, Pandas, and AWS AI/ML fundamentals.", styles["bullet"])),
        ListItem(Paragraph(
            "Building AAIS, a RAG-based university assistant, as the placement's primary project.",
            styles["bullet"])),
    ],
    bulletType="bullet", start="circle", leftIndent=14, spaceAfter=10,
))

story.append(Paragraph("PROJECTS", styles["section"]))
projects = [
    ("AAIS \u2014 Intelligent University Assistant System (In Development)",
     "RAG-based assistant answering student questions from a structured AUSU knowledge base. Flask, Claude API."),
    ("Football Arena Booking System (MVP In Progress)",
     "Slot-booking and payment platform for a real venue in Kano, with an explicit booking state machine. Flask, SQLAlchemy, Paystack."),
    ("Result Management System (Shipped)",
     "Result computation and PDF report-card generation for a secondary school, later adapted for university-level credit-weighted results. Flask, Pandas, ReportLab."),
    ("Islamiyya School Management System (Validated Concept)",
     "Scope validated through a stakeholder interview; planned build around fee collection, attendance, and progress tracking. Flask, SQLAlchemy."),
]
for title, desc in projects:
    story.append(Paragraph(title, styles["entry_title"]))
    story.append(Paragraph(desc, styles["body"]))

story.append(Paragraph("SKILLS", styles["section"]))
skills = [
    ("Languages", "Python, JavaScript, Java (learning), HTML, CSS"),
    ("Frameworks & Libraries", "Flask, SQLAlchemy, Pandas, ReportLab"),
    ("Tools", "Git, GitHub, VS Code"),
    ("Spoken Languages", "English, Hausa, Arabic"),
]
for label, items in skills:
    story.append(Paragraph(f"<b>{label}:</b> {items}", styles["body"]))

story.append(Paragraph("CERTIFICATIONS", styles["section"]))
story.append(Paragraph("AI/ML Fundamentals &mdash; Amazon Web Services (2025)", styles["body"]))
story.append(Paragraph("100 Days of Python, Angela Yu &mdash; Udemy (in progress)", styles["body"]))

doc.build(story)
print("resume.pdf generated")
