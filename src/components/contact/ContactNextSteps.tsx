"use client";

export function ContactNextSteps() {
  return (
    <section
      style={{
        background: `
          radial-gradient(
            70% 50% at 50% 0%,
            rgba(249,235,188,0.08),
            rgba(0,0,0,0) 65%
          ),
          #000000
        `,
        padding: "80px 0 100px 0",
        position: "relative",
      }}
    >
      {/* Top gold line */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          backgroundColor: "#D09947",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 40px",
        }}
      >
        {/* Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 24px",
              border: "1px solid #7F4D0F",
              backgroundColor: "transparent",
            }}
          >
            <span
              style={{
                width: "8px",
                height: "8px",
                backgroundColor: "#D09947",
              }}
            />
            <span
              style={{
                color: "rgba(208,153,71,0.65)",
                fontSize: "12px",
                fontWeight: "500",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
              }}
            >
              NEXT STEPS
            </span>
          </div>
        </div>

        {/* Main heading */}
        <h2
          className="text-white"
          style={{
            textAlign: "center",
            fontSize: "48px",
            fontWeight: 700,
            margin: "0 0 16px 0",
            letterSpacing: "-0.015em",
          }}
        >
          What Happens <span style={{ color: "#EEC569" }}>Next?</span>
        </h2>

        {/* Subheading */}
        <p
          style={{
            textAlign: "center",
            color: "#C5C6C9",
            fontSize: "21px",
            margin: "0 0 60px 0",
            fontWeight: 400,
          }}
        >
          Our streamlined process ensures you get the attention and results you
          deserve
        </p>

        {/* Cards container */}
        <div
          style={{
            display: "flex",
            gap: "24px",
            position: "relative",
          }}
        >
          {/* Card 1 */}
          <div
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              flex: 1,
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              border: "1px solid rgba(208,153,71,0.25)",
              borderRadius: "18px",
              padding: "32px 28px 28px 28px",
              position: "relative",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "2px solid #D09947";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "1px solid rgba(208,153,71,0.25)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Number badge - SQUARE */}
            <div
              style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                width: "52px",
                height: "52px",
                backgroundColor: "#D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                01
              </span>
            </div>

            {/* Connector line from card */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "-24px",
                width: "24px",
                height: "2px",
                backgroundColor: "#D09947",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#D09947",
                }}
              />
            </div>

            {/* Icon container */}
            <div
              style={{
                width: "64px",
                height: "64px",
                border: "1px solid #D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                color: "#EEC569",
                fontSize: "22px",
                fontWeight: 700,
                margin: "0 0 16px 0",
              }}
            >
              Quick Response
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15px",
                lineHeight: 1.6,
                margin: "0 0 24px 0",
              }}
            >
              We review your inquiry and respond within 24 hours with initial
              feedback and next steps.
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#7F4D0F",
                margin: "0 0 20px 0",
              }}
            />

            {/* Time indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span
                style={{
                  color: "#D09947",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                Within 24 hours
              </span>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              flex: 1,
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              border: "1px solid rgba(208,153,71,0.25)",
              borderRadius: "18px",
              padding: "32px 28px 28px 28px",
              position: "relative",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "2px solid #D09947";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "1px solid rgba(208,153,71,0.25)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Number badge - SQUARE */}
            <div
              style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                width: "52px",
                height: "52px",
                backgroundColor: "#D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                02
              </span>
            </div>

            {/* Connector line from card */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                right: "-24px",
                width: "24px",
                height: "2px",
                backgroundColor: "#D09947",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  position: "absolute",
                  right: "0",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "6px",
                  height: "6px",
                  backgroundColor: "#D09947",
                }}
              />
            </div>

            {/* Icon container */}
            <div
              style={{
                width: "64px",
                height: "64px",
                border: "1px solid #D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="9" cy="7" r="4" />
                <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <path d="M21 21v-2a4 4 0 0 0-3-3.85" />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                color: "#EEC569",
                fontSize: "22px",
                fontWeight: 700,
                margin: "0 0 16px 0",
              }}
            >
              Consultation Call
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15px",
                lineHeight: 1.6,
                margin: "0 0 24px 0",
              }}
            >
              Schedule a detailed consultation with our experts to discuss your
              requirements and project scope.
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#7F4D0F",
                margin: "0 0 20px 0",
              }}
            />

            {/* Time indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span
                style={{
                  color: "#D09947",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                2-3 business days
              </span>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="transition-all duration-300 hover:-translate-y-1"
            style={{
              flex: 1,
              background: `
                radial-gradient(
                  60% 50% at 50% 0%,
                  rgba(249,235,188,0.08),
                  rgba(0,0,0,0) 65%
                ),
                #0D0D0D
              `,
              border: "1px solid rgba(208,153,71,0.25)",
              borderRadius: "18px",
              padding: "32px 28px 28px 28px",
              position: "relative",
            }}
            onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "2px solid #D09947";
              e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
            }}
            onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
              e.currentTarget.style.border = "1px solid rgba(208,153,71,0.25)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Number badge - SQUARE */}
            <div
              style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                width: "52px",
                height: "52px",
                backgroundColor: "#D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  color: "#000000",
                  fontSize: "20px",
                  fontWeight: "700",
                }}
              >
                03
              </span>
            </div>

            {/* Icon container */}
            <div
              style={{
                width: "64px",
                height: "64px",
                border: "1px solid #D09947",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "24px",
              }}
            >
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <path d="M12 19V5" />
                <path d="M5 12l7-7 7 7" />
                <path d="M5 19h14" />
                <circle cx="12" cy="19" r="2" />
              </svg>
            </div>

            {/* Title */}
            <h3
              style={{
                color: "#EEC569",
                fontSize: "22px",
                fontWeight: 700,
                margin: "0 0 16px 0",
              }}
            >
              Project Launch
            </h3>

            {/* Description */}
            <p
              style={{
                color: "#C5C6C9",
                fontSize: "15px",
                lineHeight: 1.6,
                margin: "0 0 24px 0",
              }}
            >
              Receive a customized proposal and timeline. Once approved, we kick
              off your project immediately.
            </p>

            {/* Divider */}
            <div
              style={{
                height: "1px",
                backgroundColor: "#7F4D0F",
                margin: "0 0 20px 0",
              }}
            />

            {/* Time indicator */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#D09947"
                strokeWidth="1.5"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12,6 12,12 16,14" />
              </svg>
              <span
                style={{
                  color: "#D09947",
                  fontSize: "14px",
                  fontWeight: "500",
                }}
              >
                1 week
              </span>
            </div>
          </div>
        </div>

        {/* Bottom CTA box */}
        <div
          className="transition-all duration-300 hover:-translate-y-1"
          style={{
            marginTop: "60px",
            background: `
              radial-gradient(
                60% 50% at 50% 0%,
                rgba(249,235,188,0.08),
                rgba(0,0,0,0) 65%
              ),
              #0D0D0D
            `,
            border: "1px solid rgba(208,153,71,0.25)",
            borderRadius: "18px",
            padding: "40px",
            textAlign: "center",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.border = "2px solid #D09947";
            e.currentTarget.style.boxShadow = "0 0 30px rgba(208,153,71,0.5)";
          }}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.border = "1px solid rgba(208,153,71,0.25)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <p
            style={{
              color: "#F9EBBC",
              fontSize: "21px",
              lineHeight: 1.6,
              margin: "0 0 12px 0",
              fontWeight: 500,
            }}
          >
            Ready to get started? Fill out the form above and let&apos;s begin
            your journey to success.
          </p>
          <p
            style={{
              color: "#C5C6C9",
              fontSize: "15px",
              margin: "0",
              fontWeight: 400,
            }}
          >
            Our team is standing by to help bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}
