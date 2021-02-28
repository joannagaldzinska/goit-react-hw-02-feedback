import s from './section.module.css';

const Section = ({ title, children }) => (
  <div className={s.section}>
    <h2 className={s.title}>{title}</h2>
    {children}
  </div>
);

export default Section;
