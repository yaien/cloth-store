import Nav from "./nav";

const Content = (props: React.Props<{}>) => (
  <div>
    <Nav />
    <main>
      {props.children}
      <style jsx>{`
        main {
          padding-top: 60px;
        }
      `}</style>
    </main>
  </div>
);

export default Content;
