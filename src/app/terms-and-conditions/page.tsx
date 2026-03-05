import { Metadata } from "next";
import { TermsAndConditionsClient } from "./TermsAndConditionsClient";

export const metadata: Metadata = {
  title: "Terms and Conditions | Apex Batch",
  description:
    "Terms and conditions for using Apex Batch services - read our legal terms before using our services.",
  alternates: {
    canonical: "/terms-and-conditions",
  },
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsClient />;
}
