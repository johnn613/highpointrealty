import { Link } from "wouter";

export default function TermsOfService() {
  return (
    <div className="bg-white min-h-screen">
      <div className="bg-[#1B2D4F] text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl font-bold mb-3">Terms of Service</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mb-4" />
          <p className="text-white/60 text-sm">Last Updated: June 11, 2026</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 space-y-10 text-gray-700 leading-relaxed">

        <section>
          <p>
            These Terms of Service ("Terms") govern your use of{" "}
            <span className="font-medium text-[#1B2D4F]">highpointky.com</span> (the "Site"),
            operated by High Point Realty &amp; Auction ("we," "us," or "our"). By accessing or
            using the Site, you agree to be bound by these Terms. If you do not agree, please do
            not use the Site.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1B2D4F] mb-3">
            1. Acceptance of Terms
          </h2>
          <p>
            By using this Site — whether you browse listings, submit a contact form, or simply
            visit a page — you confirm that you have read, understood, and agree to these Terms and
            our{" "}
            <Link href="/privacy-policy" className="text-[#1B2D4F] underline hover:text-[#C9A84C]">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1B2D4F] mb-3">
            2. MLS / IDX Listing Disclaimer
          </h2>
          <p className="mb-3">
            Property listing data displayed on this Site is sourced from third-party MLS (Multiple
            Listing Service) and IDX (Internet Data Exchange) feeds. While we believe this
            information to be accurate, it is{" "}
            <span className="font-medium">not guaranteed</span> and should be independently
            verified by you or your representative before relying on it for any purpose.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Listing data is subject to change or removal at any time without notice.
            </li>
            <li>
              Information such as price, availability, square footage, and property details may
              contain errors or omissions.
            </li>
            <li>
              Nothing on this Site constitutes an offer to sell, a solicitation of an offer to
              buy, or a guarantee of any specific property or price.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1B2D4F] mb-3">
            3. No Agency Relationship
          </h2>
          <p>
            Visiting or using this Site does not create a client, agency, fiduciary, or any other
            professional relationship between you and High Point Realty &amp; Auction or any of its
            agents. No agency relationship is formed until a formal written agreement has been
            signed by both parties.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1B2D4F] mb-3">
            4. Intellectual Property
          </h2>
          <p>
            All original content on this Site — including text, graphics, logos, and design — is
            owned by High Point Realty &amp; Auction and protected by applicable copyright and
            intellectual property laws. MLS/IDX listing data remains the property of the respective
            MLS, listing brokers, and data providers. You may not reproduce, distribute, or create
            derivative works from any content on this Site without prior written permission from
            the respective owner.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1B2D4F] mb-3">
            5. Limitation of Liability &amp; "As Is" Disclaimer
          </h2>
          <p className="mb-3">
            This Site and all information on it are provided{" "}
            <span className="font-medium">"as is"</span> without warranties of any kind, either
            express or implied, including but not limited to warranties of accuracy, fitness for a
            particular purpose, or non-infringement.
          </p>
          <p>
            To the fullest extent permitted by law, High Point Realty &amp; Auction shall not be
            liable for any direct, indirect, incidental, consequential, or punitive damages arising
            from your use of or inability to use this Site, or from any errors or omissions in the
            content provided.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1B2D4F] mb-3">
            6. Governing Law
          </h2>
          <p>
            These Terms are governed by and construed in accordance with the laws of the
            Commonwealth of <span className="font-medium">Kentucky</span>, without regard to its
            conflict of law provisions. Any disputes arising under these Terms shall be subject to
            the exclusive jurisdiction of the courts located in Kentucky.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1B2D4F] mb-3">
            7. Privacy
          </h2>
          <p>
            Your use of this Site is also governed by our{" "}
            <Link href="/privacy-policy" className="text-[#1B2D4F] underline hover:text-[#C9A84C]">
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl font-semibold text-[#1B2D4F] mb-3">
            8. Contact Us
          </h2>
          <p>
            If you have questions about these Terms, please contact us:
          </p>
          <div className="mt-3 bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm">
            <p className="font-semibold text-[#1B2D4F]">High Point Realty &amp; Auction</p>
            <p className="text-gray-500 mt-1">[MAILING ADDRESS]</p>
            <a
              href="mailto:Kenneth.DeGrant@gmail.com"
              className="text-[#1B2D4F] underline hover:text-[#C9A84C] mt-1 inline-block"
            >
              Kenneth.DeGrant@gmail.com
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
