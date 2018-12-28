import React from "react";
import Classes from "./layout.css"
const Layout = (props) => (
    <React.Fragment>
        <div>
            nav, toolbar
        </div>
        <main className={Classes.Content}>
            {props.children}
        </main>
     </React.Fragment>
)

export default Layout;