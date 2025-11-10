"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function StickyCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[var(--border)] shadow-lg z-40 lg:hidden">
      <div className="flex items-center justify-around p-3">
        <a
          href="tel:+494012345678"
          className="flex flex-col items-center space-y-1 text-[var(--primary)] hover:text-[var(--secondary)] transition-colors"
        >
          <Phone className="h-6 w-6" />
          <span className="text-xs font-medium">Anrufen</span>
        </a>
        <a
          href="https://wa.me/4917012345678"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center space-y-1 text-[var(--accent)] hover:opacity-80 transition-opacity"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <Button asChild size="sm">
          <Link href="/kontakt">Angebot</Link>
        </Button>
      </div>
    </div>
  );
}
