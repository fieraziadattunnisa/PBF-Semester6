import Navbar from "../navbar";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;

  return (
    <main>
      <Navbar />

      <div style={{ padding: "20px" }}>
        {children}
      </div>

      <footer
        style={{
          height: "60px",
          backgroundColor: "#222",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        © 2026 Fiera Ziadattun Nisa' | D4 Teknik Informatika
      </footer>
    </main>
  );
};

export default AppShell;