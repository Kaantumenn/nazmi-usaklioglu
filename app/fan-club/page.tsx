import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Fan Club",
};

export default function FanClubPage() {
  return (
    <PageShell title="Fan Club">
      <p>Fan kulübü duyuruları ve üyelik bilgileri burada olacak.</p>
    </PageShell>
  );
}
