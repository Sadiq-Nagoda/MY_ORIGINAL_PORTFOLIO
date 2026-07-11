export function StatusBadge({ status }: { status: string }) {
  return (
    <p className="font-mono text-xs uppercase tracking-wide text-foreground/70">{status}</p>
  );
}
