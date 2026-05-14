import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "İletişim",
};

export default function IletisimPage() {
  return (
    <PageShell title="İletişim">
      <p>İletişim formu, menajerlik ve basın için bilgiler buraya eklenecek.</p>
    </PageShell>
  );
}
