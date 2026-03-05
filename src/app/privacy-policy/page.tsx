import { Metadata } from "next";
import { PrivacyPolicyClient } from "./PrivacyPolicyClient";

export const metadata: Metadata = {
  title: "Privacy Policy | Apex Batch",
  description:
    "Privacy policy for Apex Batch - learn how we collect, store, use, and share your information.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyClient />;
}
