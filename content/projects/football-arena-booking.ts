import type { Project } from "@/lib/types";

export const footballArenaBooking: Project = {
  slug: "football-arena-booking",
  title: "Football Arena Booking System",
  category: "major",
  status: "MVP In Progress",
  summary:
    "A slot-booking and payment platform for a real football arena in Kano, built on Flask, SQLAlchemy, and Paystack.",
  problem:
    "The venue was booking slots by phone and word of mouth — no shared view of what was actually available, and no reliable record of who had paid for what. Double-bookings and payment disputes were the predictable result.",
  constraints:
    "Slot availability has to be correct under real concurrent demand — two people can't both successfully book the same slot. Payments needed a real gateway (Paystack) rather than a manual confirm-by-message process, and every state change needed to be traceable after the fact.",
  architecture:
    "A Flask application with SQLAlchemy models for slots, bookings, and payments. Booking a slot moves it through an explicit state machine (available → held → paid → confirmed, or → released on timeout/failure) rather than a single boolean flag, which is what actually prevents double-booking under concurrent requests. Paystack webhooks confirm payment server-side rather than trusting the client. An admin dashboard gives the venue owner a real view of bookings, and actions that change booking state are logged for later review.",
  tradeoffs:
    "The first version used a simpler boolean 'is_booked' flag on each slot, which worked until two requests could plausibly arrive close together — the rebuild into an explicit state machine was a direct response to that gap, not a decision made up front.",
  lessons:
    "This was the project that made the difference between 'looks correct in manual testing' and 'is actually correct under concurrency' concrete for me — a flag-based booking system passes every test you run one at a time and still fails in production.",
  futureWork:
    "Hardening the webhook handling further and extending the admin dashboard's reporting are the next steps toward a fuller production rollout.",
  stack: ["Python", "Flask", "SQLAlchemy", "Paystack API", "SQL"],
  githubUrl: "https://github.com/Sadiq-Nagoda",
  repoState: "source-available",
  // football-arena-booking.ts
  screenshots: {
   state: "available",
   images: [
    "/images/projects/football-arena-booking/1.png",
    "/images/projects/football-arena-booking/2.png",
    "/images/projects/football-arena-booking/3.png",
    "/images/projects/football-arena-booking/4.png",
  ],
},
  timeline: "MVP in progress",
};
