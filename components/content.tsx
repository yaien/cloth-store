const Content = props => (
  <main>
    {props.children}
    <style jsx>{`
      main {
        padding-top: 60px;
      }
    `}</style>
  </main>
);

export default Content;
