import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Etkinlik",
};

export default function EtkinlikPage() {
  return (
    <PageShell title="Etkinlik">
      <p>Yakın tarihte duyurulacak etkinlikleri burada listeleyeceğiz.</p>
    </PageShell>
  );
}
