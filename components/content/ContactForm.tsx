"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactFormState } from "@/app/contact/actions";
import { Button } from "@/components/primitives/Button";

const initialState: ContactFormState = { status: "idle" };

const inputClasses =
  "w-full rounded-md border border-foreground/20 bg-transparent px-4 py-3 font-body text-foreground " +
  "placeholder:text-foreground/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hover " +
  "focus-visible:border-hover transition-colors duration-200";

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendContactMessage, initialState);

  return (
    <form action={formAction} className="max-w-md space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="font-body text-sm text-foreground/70">
          Name
        </label>
        <input id="name" name="name" type="text" required className={`mt-1.5 ${inputClasses}`} />
      </div>

      <div>
        <label htmlFor="email" className="font-body text-sm text-foreground/70">
          Email
        </label>
        <input id="email" name="email" type="email" required className={`mt-1.5 ${inputClasses}`} />
      </div>

      <div>
        <label htmlFor="message" className="font-body text-sm text-foreground/70">
          Message
        </label>
        <textarea id="message" name="message" required rows={5} className={`mt-1.5 ${inputClasses}`} />
      </div>

      <Button type="submit" disabled={isPending}>
        {isPending ? "Sending…" : "Send message"}
      </Button>

      <div aria-live="polite">
        {state.status === "success" && (
          <p className="font-body text-sm text-foreground/70">{state.message}</p>
        )}
        {state.status === "error" && (
          <p className="font-body text-sm text-foreground/70">{state.message}</p>
        )}
      </div>
    </form>
  );
}
