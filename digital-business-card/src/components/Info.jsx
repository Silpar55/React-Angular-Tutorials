export default function Info() {
  return (
    <div className="info">
      <img
        className="info--photo"
        src="https://github.com/Silpar55.png"
        alt="Alejandro Silva Juarez profile photo"
      />
      <h1 className="info--name">Alejandro Silva Juarez</h1>
      <h3 className="info--role">Software Developer</h3>
      <a
        href="https://alejandroportfolio-one.vercel.app"
        target="_blank"
        className="info--link"
      >
        Alejandro&apos;s Portfolio
      </a>
      <div className="info--buttons">
        <a
          className="info--btn"
          href="mailto:alesj501@gmail.com"
          type="email"
          target="_blank"
        >
          <img src="email.png" alt="" />
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/alejandro-silva-juarez-9bb00621b/"
          target="_blank"
          className="info--btn"
        >
          <img src="linkedin.png" alt="" />
          Linkedin
        </a>
      </div>
      <hr />
    </div>
  );
}
