import React from "react";

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>
        © {new Date().getFullYear()} Goja Ayron Kampot. Barcha huquqlar
        himoyalangan
      </p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: "10px",
        }}
      >
        <div style={styles.social}>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            style={styles.icon}
          >
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9c0-2.3 1.4-3.6 3.5-3.6 1 0 2 .2 2 .2v2.2h-1.1c-1.1 0-1.5.7-1.5 1.4v1.7h2.6l-.4 3h-2.2v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            style={styles.icon}
          >
            <svg width="24" height="24" fill="white" viewBox="0 0 24 24">
              <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.5.5.6.3 1 .7 1.3 1.3.3.5.5 1.3.5 2.5.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.5-.3.6-.7 1-1.3 1.3-.5.3-1.3.5-2.5.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.5-.5-.6-.3-1-.7-1.3-1.3-.3-.5-.5-1.3-.5-2.5-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-2 .5-2.5.3-.6.7-1 1.3-1.3.5-.3 1.3-.5 2.5-.5 1.3-.1 1.7-.1 4.9-.1zm0 1.8c-3.1 0-3.5 0-4.7.1-.9.1-1.4.2-1.7.4-.4.2-.6.4-.8.8-.2.3-.3.8-.4 1.7-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1.9.2 1.4.4 1.7.2.4.4.6.8.8.3.2.8.3 1.7.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c.9-.1 1.4-.2 1.7-.4.4-.2.6-.4.8-.8.2-.3.3-.8.4-1.7.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-.9-.2-1.4-.4-1.7-.2-.4-.4-.6-.8-.8-.3-.2-.8-.3-1.7-.4-1.2-.1-1.6-.1-4.7-.1zM12 6.5a5.5 5.5 0 1 1 0 11 5.5 5.5 0 0 1 0-11zm0 1.8a3.7 3.7 0 1 0 0 7.4 3.7 3.7 0 0 0 0-7.4zm5.7-1.3a1.3 1.3 0 1 1-2.6 0 1.3 1.3 0 0 1 2.6 0z" />
            </svg>
          </a>
        </div>
        <div>
          <p>📞 Biz bilan bog‘lanish: </p>
          <a
            href="tel:++998946655564"
            style={{ color: "white", textDecoration: "underline" }}
          >
            +998 94 665 55 64{" "}
          </a>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: "#007bff",
    color: "white",
    textAlign: "center",
    padding: "20px",
    fontSize: "14px",
  },
  text: {
    marginBottom: "10px",
  },
  socialWrapper: {
    display: "flex",
    flexDirection: "column", // mobile default
    alignItems: "center",
    gap: "10px",
  },
  social: {
    display: "flex",
    gap: "15px",
    fontSize: "20px",
  },
  icon: {
    textDecoration: "none",
    color: "white",
    transition: "transform 0.2s",
  },
  contact: {
    fontSize: "14px",
  },
  phone: {
    color: "#fff",
    textDecoration: "underline",
  },
};

export default Footer;
