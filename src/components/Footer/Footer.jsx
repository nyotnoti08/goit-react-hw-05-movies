import css from './Footer.module.css';

export const Footer = () => {
  return (
    <footer>
      <p className={css.footerText}>
        &copy; {new Date().getFullYear()} nyotnoti08-goit-react-hw-05-movies
      </p>
    </footer>
  );
};
