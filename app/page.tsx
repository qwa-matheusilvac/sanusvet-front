import { JSONLDSchema } from "@/components/json-ld-schema";
import { LandingPage } from "@/components/landing";

export default function Home() {
  return (
    <>
      <JSONLDSchema />
      <LandingPage />
    </>
  );
}
