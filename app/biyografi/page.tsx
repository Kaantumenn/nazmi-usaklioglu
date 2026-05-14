import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Biyografi",
};

export default function BiyografiPage() {
  return (
    <PageShell title="Biyografi" subtitle="Nazmi Uşaklıoğlu">
      <p>
        26 Temmuz 1991 tarihinde Burdur&apos;un Gölhisar ilçesinde dünyaya gelen
        Nazmi Uşaklıoğlu, müziğe olan tutkusu ve kendine özgü tarzıyla modern
        arabesk müziğin dikkat çeken isimleri arasında yer almaktadır. Küçük
        yaşlardan itibaren müziğe ve sahne sanatlarına ilgi duyan sanatçı,
        yaşamın içinden gelen duyguları güçlü bir anlatım diliyle eserlerine
        yansıtmaktadır.
      </p>
      <p>
        Geleneksel arabesk ruhunu modern prodüksiyon anlayışıyla bir araya
        getiren Nazmi Uşaklıoğlu; etkileyici vokal tonu, duygusal derinliği ve
        estetik yaklaşımıyla dinleyicisine yalnızca bir şarkı değil, güçlü bir
        atmosfer sunmaktadır. Her projesinde kaliteyi ve özgünlüğü ön planda
        tutan sanatçı, dijital platformlarda büyüyen dinleyici kitlesiyle birlikte
        kendi müzikal dünyasını istikrarlı şekilde inşa etmektedir.
      </p>
      <p>
        Duygu, zarafet ve karakterle şekillenen müziğiyle Nazmi Uşaklıoğlu,
        modern Türk müziğinde kalıcı bir iz bırakma yolunda ilerlemektedir.
      </p>
    </PageShell>
  );
}
