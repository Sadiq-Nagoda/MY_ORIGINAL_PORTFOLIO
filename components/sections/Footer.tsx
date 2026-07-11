import Link from "next/link";
import { Container } from "@/components/primitives/Container";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-foreground/10 mt-24">
      <Container className="py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="font-body text-sm text-foreground/70">
            © {currentYear} Sadiq Usman Nagoda
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-body text-sm">
            <li>
              <a
                href="https://github.com/Sadiq-Nagoda"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com/in/sadiq-nagoda-076225383"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:sadiqnagoda1848@gmail.com"
                className="text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                Email
              </a>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-foreground/70 hover:text-foreground transition-colors duration-200"
              >
                Privacy
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
