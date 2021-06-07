import { FC, useRef, useState } from "react";

export interface CollapsibleProps {
  label?: string;
}

export const Collapsible: FC<CollapsibleProps> = (props) => {
  const body = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(false)


  const toggle = () => {
    if(!body.current) return
    if(active) {
      body.current.style.height = "";
      setActive(false)
      return
    }

    body.current.style.height = body.current.scrollHeight.toString() + "px";
    setActive(true)
  }


  return (
    <div className="collapsible">
      <div className="head" onClick={toggle}>
        {props.label}
      </div>
      <div className="body" ref={body}>
        <div className="content">
          {props.children}
          </div>
        </div>
      <style jsx>{`
        .collapsible {
          margin: 0.25rem;
        }
        .head {
          padding: 0.5rem;
          border-bottom: 1px solid var(--border-light);
        }

        .content {
          padding: 0.5rem;
          position: relative;
        }

        .body {
          overflow: hidden;
          transition: height 500ms;
          height: 0;
        }
      `}</style>
    </div>
  );
};

export default Collapsible;
