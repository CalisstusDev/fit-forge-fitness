export function NewsletterStatus({ received }: { received: boolean }) {
  if (!received) return null;
  return <p className="newsletter-status" role="status">Your request was delivered. Watch your inbox for updates from FITFORGE.</p>;
}
